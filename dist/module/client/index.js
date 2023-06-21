import { coreumRegistry } from "../coreum";
import { cosmwasmRegistry } from "../wasm/v1";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { connectKeplr, connectCosmostation, getCosmosOfflineSigner, connectLeap, getLeapOfflineSigner, } from "../services";
import { COREUM_CONFIG } from "../types/coreum";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import { Registry, } from "@cosmjs/proto-signing";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { ExtensionWallets, generateWalletFromMnemonic, generateMultisigFromPubkeys, } from "..";
import { GasPrice, QueryClient, StargateClient, calculateFee, createProtobufRpcClient, decodeCosmosSdkDecFromProto, defaultRegistryTypes, setupAuthExtension, setupFeegrantExtension, setupIbcExtension, setupMintExtension, setupStakingExtension, setupTxExtension, } from "@cosmjs/stargate";
import { setupBankExtension, setupGovExtension, setupDistributionExtension, } from "../cosmos/extensions";
import EventEmitter from "eventemitter3";
import { parseSubscriptionEvents } from "../utils/event";
import { cosmos } from "@cosmostation/extension-client";
import { SigningCosmWasmClient, setupWasmExtension, } from "@cosmjs/cosmwasm-stargate";
function isSigningClient(object) {
    return "signAndBroadcast" in object;
}
export class Client {
    _tmClient;
    _queryClient;
    _offlineSigner;
    _wsClient;
    _client;
    _address;
    _feeModel;
    _eventSequence = 0;
    _custom_ws_endpoint;
    config;
    get queryClients() {
        return this._queryClient;
    }
    constructor(props) {
        this.config = props?.network
            ? COREUM_CONFIG[props.network]
            : COREUM_CONFIG.mainnet;
        this._custom_ws_endpoint = props?.custom_ws_endpoint || undefined;
    }
    disconnect() {
        this._client.disconnect();
        this._client = undefined;
        this._tmClient.disconnect();
        this._tmClient = undefined;
        this._address = undefined;
        this._queryClient = undefined;
        this._eventSequence = 0;
        this._feeModel = undefined;
    }
    /**
     * Accessor to get the address of the current connected wallet
     * @returns A string that represents the address or undefined, if no wallet is connected.
     */
    get address() {
        return this._address;
    }
    /**
     * Accessor to get the Stargate Client
     * @returns A Stargate client or undefined if the connection hasn't been created
     */
    get stargate() {
        return this._client;
    }
    /**
     * Initializes the connection to the Chain, without a signer. Just for querying purposes
     *
     * @param options Defines the options for the connection
     *
     * If `withWS` is passed on the options object, a Websocket Connection will be created alongside the RPC client
     */
    async connect(options) {
        await this._initTendermintClient(this.config.chain_rpc_endpoint);
        await this._createClient();
        this._initQueryClient();
        this._initFeeModel();
        if (options?.withWS) {
            await this._initWsClient(this._custom_ws_endpoint || this.config.chain_ws_endpoint);
        }
    }
    /**
     * Initializes the connection to the Chain, with the selected extension wallet as signer.
     *
     * @param extension Defines which wallet extension to use to initialize the client.
     * @param options Defines the options
     *
     * If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client
     */
    async connectWithExtension(extension = ExtensionWallets.KEPLR, options) {
        switch (extension) {
            case ExtensionWallets.COSMOSTATION:
                await this._connectWithCosmostation();
                break;
            case ExtensionWallets.LEAP:
                await this._connectWithLeap();
                break;
            default:
                await this._connectWithKplr();
        }
        await this._initTendermintClient(this.config.chain_rpc_endpoint);
        this._initQueryClient();
        this._initFeeModel();
        if (options?.withWS) {
            await this._initWsClient(this.config.chain_ws_endpoint);
        }
    }
    /**
     * Initializes the connection to the Chain, using the Mnemonic words to create the Signer.
     *
     * @param mnemonic Defines the Mnemonic words to use to create the signer
     * @param options Defines the options
     *
     * If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client
     */
    async connectWithMnemonic(mnemonic, options) {
        try {
            const offlineSigner = await generateWalletFromMnemonic(mnemonic, this.config.chain_bech32_prefix);
            await this._initTendermintClient(this.config.chain_rpc_endpoint);
            this._initQueryClient();
            this._initFeeModel();
            await this._createClient(offlineSigner);
            if (options?.withWS) {
                await this._initWsClient(this.config.chain_ws_endpoint);
            }
        }
        catch (e) {
            throw {
                thrower: e.thrower || "connectWithMnemonic",
                error: e,
            };
        }
    }
    /**
     * Simulates the Transaction and returns the estimated gas for the transaction plus the gas price.
     *
     * @param msgs An array of messages for the transaction
     * @returns An Object that includes the following properties
     *  - fee: StdFee
     *  - gas_wanted: number
     */
    async getTxFee(msgs) {
        this._isSigningClientInit();
        const signer = this._client;
        const gasPrice = await this._getGasPrice();
        const gas_wanted = await signer.simulate(this._address, msgs, "");
        const total_gas_wanted = gas_wanted * 1.2;
        return {
            gas_wanted: total_gas_wanted,
            fee: calculateFee(total_gas_wanted, gasPrice),
        };
    }
    /**
     *
     * @param transaction Transaction to be submitted
     * @returns The response of the chain
     */
    async broadcastTx(transaction, options) {
        try {
            return await this._client.broadcastTx(transaction, options?.timeoutMs || undefined, options?.pollIntervalMs || undefined);
        }
        catch (e) {
            throw {
                thrower: e.thrower || "broadcastTx",
                error: e.error || e,
            };
        }
    }
    /**
     *
     * @param msgs An array of messages for the Transaction
     * @param memo An arbitrary string to add as Memo for the transaction
     * @returns Response Object from the blockchain
     */
    async sendTx(msgs, memo) {
        try {
            this._isSigningClientInit();
            const { fee } = await this.getTxFee(msgs);
            return await this._client.signAndBroadcast(this._address, msgs, fee, memo || "");
        }
        catch (e) {
            throw {
                thrower: "sendTx",
                error: e,
            };
        }
    }
    /**
     *
     * @param msgs An array of messages for the Transaction
     * @param memo An arbitrary string to add as Memo for the transaction
     * @returns TxRaw object to be submitted to the chain
     */
    async signTx(msgs, memo) {
        try {
            this._isSigningClientInit();
            const signingClient = this._client;
            const { accountNumber, sequence } = await this._client.getAccount(this.address);
            const { fee } = await this.getTxFee(msgs);
            const signerData = {
                accountNumber,
                sequence,
                chainId: this.config.chain_id,
            };
            return await signingClient.sign(this.address, msgs, fee, memo || "", signerData);
        }
        catch (e) {
            throw {
                thrower: e.thrower || "addSignature",
                error: e.error || e,
            };
        }
    }
    /**
     *
     * @param event String describing the event to subscribe to.
     * @returns A susbcription object with the next properties
     *  - events: EventEmitter
     *  - unsubscribe: Method to kill the subscription to the blockchain
     */
    async subscribeToEvent(event) {
        try {
            if (this._wsClient === undefined)
                throw new Error("No Websocket client initialized");
            const emitter = new EventEmitter();
            const stream = this._wsClient.listen({
                jsonrpc: "2.0",
                method: "subscribe",
                id: this._eventSequence,
                params: { query: event },
            });
            const listener = {
                next(x) {
                    emitter.emit(event, {
                        data: x.data,
                        events: x.events ? parseSubscriptionEvents(x.events) : x,
                    });
                },
                error(err) {
                    emitter.emit("subscription-error", err);
                },
                complete() {
                    emitter.emit("subscription-complete", {
                        event,
                    });
                },
            };
            const subscription = stream.subscribe(listener);
            this._eventSequence++;
            return {
                events: emitter,
                unsubscribe: subscription.unsubscribe,
            };
        }
        catch (e) {
            throw {
                thrower: e.thrower || "subscribeToEvent",
                error: e,
            };
        }
    }
    /**
     *
     * @param addresses An array of addresses that should be added to the Multisig Account
     * @param threshold The minimum amount of signatures required for the transaction to be valid
     * @returns A MultisigAccount object
     */
    async createMultisigAccount(addresses, threshold = 2) {
        try {
            if (addresses.length < 2)
                throw {
                    thrower: "createMultisigAccount",
                    error: new Error("addresses param must be at least of length: 2"),
                };
            const pubkeys = [];
            for (var i = 0; i < addresses.length; i++) {
                const account = await this._client.getAccount(addresses[i]);
                console.log(addresses[i] + " data => ", account);
                if (!account || !account.pubkey)
                    throw {
                        thrower: "createMultisigAccount",
                        error: new Error(addresses[i] +
                            " has no pubkey on chain, this address will need to send a transaction to appear on chain."),
                    };
                pubkeys.push(account.pubkey.value);
            }
            return generateMultisigFromPubkeys(pubkeys, threshold, this.config.chain_bech32_prefix);
        }
        catch (e) {
            throw {
                thrower: e.thrower || "createMultisigAccount",
                error: e.error || e,
            };
        }
    }
    async _getGasPrice() {
        const gasPriceMultiplier = 1.1;
        // the param can be change via governance
        const feemodelParams = await this._feeModel.Params({});
        const minGasPriceRes = await this._feeModel.MinGasPrice({});
        const minGasPrice = decodeCosmosSdkDecFromProto(minGasPriceRes.minGasPrice?.amount || "");
        let gasPrice = minGasPrice.toFloatApproximation() * gasPriceMultiplier;
        const initialGasPrice = decodeCosmosSdkDecFromProto(feemodelParams.params?.model?.initialGasPrice || "").toFloatApproximation();
        if (gasPrice > initialGasPrice) {
            gasPrice = initialGasPrice;
        }
        return GasPrice.fromString(`${gasPrice}${minGasPriceRes.minGasPrice?.denom || ""}`);
    }
    _isSigningClientInit() {
        if (!this._client || !isSigningClient(this._client))
            throw new Error("Signing Client is not initialized");
    }
    async _initTendermintClient(rpcEndpoint) {
        this._tmClient = await Tendermint34Client.connect(rpcEndpoint);
    }
    _initQueryClient() {
        this._queryClient = QueryClient.withExtensions(this._tmClient, setupFTExtension, setupNFTExtension, setupNFTBetaExtension, setupStakingExtension, setupBankExtension, setupDistributionExtension, setupTxExtension, setupAuthExtension, setupMintExtension, setupFeegrantExtension, setupGovExtension, setupIbcExtension, setupWasmExtension);
    }
    _initFeeModel() {
        const rpcClient = createProtobufRpcClient(this._queryClient);
        this._feeModel = new FeeModelClient(rpcClient);
    }
    async _initWsClient(wsEndpoint) {
        this._wsClient = new WebsocketClient(wsEndpoint);
    }
    async _createClient(offlineSigner) {
        try {
            if (!offlineSigner) {
                this._client = await StargateClient.create(this._tmClient);
                return;
            }
            const [{ address }] = await offlineSigner.getAccounts();
            this._address = address;
            const registry = Client.getRegistry();
            // OfflineSigner
            this._offlineSigner = offlineSigner;
            // signing client
            this._client = await SigningCosmWasmClient.connectWithSigner(this.config.chain_rpc_endpoint, offlineSigner, {
                registry: registry,
                gasPrice: GasPrice.fromString(this.config.gas_price),
            });
        }
        catch (e) {
            throw {
                thrower: e.thrower || "_createClient",
                error: e,
            };
        }
    }
    async _connectWithKplr() {
        try {
            await connectKeplr(this.config);
            await window.keplr.enable(this.config.chain_id);
            // get offline signer for signing txs
            const offlineSigner = await window.getOfflineSigner(this.config.chain_id);
            await this._createClient(offlineSigner);
        }
        catch (e) {
            throw {
                thrower: "_connectWithKplr",
                error: e,
            };
        }
    }
    async _connectWithCosmostation() {
        try {
            await connectCosmostation(this.config);
            const provider = await cosmos();
            await provider.requestAccount(this.config.chain_name);
            const offlineSigner = await getCosmosOfflineSigner(this.config.chain_id);
            await this._createClient(offlineSigner);
        }
        catch (e) {
            throw {
                thrower: e.thrower || "_connectWithCosmosation",
                error: e,
            };
        }
    }
    async _connectWithLeap() {
        // throw new Error("Leap extension connected not yet implemented");
        try {
            await connectLeap(this.config);
            const offlineSigner = await getLeapOfflineSigner(this.config.chain_id);
            await this._createClient(offlineSigner);
        }
        catch (e) {
            throw {
                thrower: e.thrower || "_connectWithLeap",
                error: e,
            };
        }
    }
    /**
     *
     * @returns A Registry of the Cosmos + Coreum Custom Messages.
     */
    static getRegistry() {
        // register default and custom messages
        let registryTypes = [
            ...defaultRegistryTypes,
            ...coreumRegistry,
            ...cosmwasmRegistry,
        ];
        return new Registry(registryTypes);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsb0JBQW9CLEdBQ3JCLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxhQUFhLEVBQXVCLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRixPQUFPLEVBSUwsUUFBUSxHQUNULE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdFLE9BQU8sRUFDTCxnQkFBZ0IsRUFHaEIsMEJBQTBCLEVBQzFCLDJCQUEyQixHQUM1QixNQUFNLElBQUksQ0FBQztBQUNaLE9BQU8sRUFFTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGNBQWMsRUFDZCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0QixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQixnQkFBZ0IsR0FDakIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsa0JBQWtCLEVB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