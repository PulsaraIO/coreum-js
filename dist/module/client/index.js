import { coreumRegistry } from "../coreum";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { connectKeplr, connectCosmostation, getCosmosOfflineSigner, connectLeap, getLeapOfflineSigner, } from "../services";
import { COREUM_CONFIG } from "../types/coreum";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import { Registry, } from "@cosmjs/proto-signing";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { ExtensionWallets, generateWalletFromMnemonic, } from "..";
import { GasPrice, QueryClient, calculateFee, createProtobufRpcClient, decodeCosmosSdkDecFromProto, defaultRegistryTypes, setupAuthExtension, setupBankExtension, setupDistributionExtension, setupFeegrantExtension, setupGovExtension, setupIbcExtension, setupMintExtension, setupStakingExtension, setupTxExtension, } from "@cosmjs/stargate";
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
    _wsClient;
    _client;
    _address;
    _feeModel;
    _eventSequence = 0;
    config;
    get queryClients() {
        return this._queryClient;
    }
    constructor(props) {
        this.config = props?.network
            ? COREUM_CONFIG[props.network]
            : COREUM_CONFIG.mainnet;
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
    get address() {
        return this._address;
    }
    /**
     * Initializes the connection to the Chain, without a signer. Just for querying purposes
     */
    async connect(options) {
        await this._initTendermintClient(this.config.chain_rpc_endpoint);
        this._initQueryClient();
        this._initFeeModel();
        if (options?.withWS) {
            await this._initWsClient(this.config.chain_ws_endpoint);
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
        return {
            gas_wanted: gas_wanted,
            fee: calculateFee(gas_wanted, gasPrice),
        };
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
            const subscription = stream.subscribe({
                next(x) {
                    emitter.emit(event, {
                        data: x.data,
                        events: x.events ? parseSubscriptionEvents(x.events) : x,
                    });
                },
                error(err) {
                    subscription.unsubscribe();
                    emitter.emit("subscription-error", err);
                },
                complete() {
                    subscription.unsubscribe();
                    emitter.emit("subscription-complete", {
                        event,
                    });
                },
            });
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
        this._queryClient = QueryClient.withExtensions(this._tmClient, setupFTExtension, setupNFTExtension, setupNFTBetaExtension, setupStakingExtension, setupBankExtension, setupTxExtension, setupAuthExtension, setupMintExtension, setupFeegrantExtension, setupGovExtension, setupIbcExtension, setupDistributionExtension, setupWasmExtension);
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
            const [{ address }] = await offlineSigner.getAccounts();
            this._address = address;
            const registry = Client.getRegistry();
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
        ];
        return new Registry(registryTypes);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUNMLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCxvQkFBb0IsR0FDckIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLGFBQWEsRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hGLE9BQU8sRUFJTCxRQUFRLEdBQ1QsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0UsT0FBTyxFQUNMLGdCQUFnQixFQUdoQiwwQkFBMEIsR0FDM0IsTUFBTSxJQUFJLENBQUM7QUFDWixPQUFPLEVBRUwsUUFBUSxFQUNSLFdBQVcsRUFHWCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsc0JBQXNCLEVBQ3RCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQixnQkFBZ0IsR0FDakIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1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