import { coreumRegistry } from "../coreum";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { connectKeplr, connectCosmostation, getCosmosOfflineSigner, } from "../services";
import { COREUM_CONFIG, } from "../types/coreum";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import { Registry, } from "@cosmjs/proto-signing";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { ExtensionWallets, generateWalletFromMnemonic, } from "..";
import { GasPrice, QueryClient, SigningStargateClient, calculateFee, createProtobufRpcClient, decodeCosmosSdkDecFromProto, defaultRegistryTypes, setupAuthExtension, setupBankExtension, setupDistributionExtension, setupFeegrantExtension, setupGovExtension, setupIbcExtension, setupMintExtension, setupStakingExtension, setupTxExtension, } from "@cosmjs/stargate";
import EventEmitter from "eventemitter3";
import { parseSubscriptionEvents } from "../utils/event";
function isSigningClient(object) {
    return "signAndBroadcast" in object;
}
export class Mantle {
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
    async connect() {
        await this._initTendermintClient(this.config.chain_rpc_endpoint);
        this._initQueryClient();
        this._initFeeModel();
    }
    async connectWithExtension(client = ExtensionWallets.KEPLR, options) {
        switch (client) {
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
    async connectWithMnemonic(mnemonic, options) {
        try {
            const offlineSigner = await generateWalletFromMnemonic(mnemonic, this.config.chain_bech32_prefix);
            await this._initTendermintClient(this.config.chain_rpc_endpoint);
            this._initQueryClient();
            this._initFeeModel();
            this._client = await SigningStargateClient.createWithSigner(this._tmClient, offlineSigner, { registry: Mantle.getRegistry() });
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
        this._queryClient = QueryClient.withExtensions(this._tmClient, setupFTExtension, setupNFTExtension, setupNFTBetaExtension, setupStakingExtension, setupBankExtension, setupTxExtension, setupAuthExtension, setupMintExtension, setupFeegrantExtension, setupGovExtension, setupIbcExtension, setupDistributionExtension);
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
            const registry = Mantle.getRegistry();
            // signing client
            this._client = await SigningStargateClient.connectWithSigner(this.config.chain_rpc_endpoint, offlineSigner, {
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
        throw new Error("Leap extension connected not yet implemented");
    }
    static getRegistry() {
        // register default and custom messages
        let registryTypes = [
            ...defaultRegistryTypes,
            ...coreumRegistry,
        ];
        return new Registry(registryTypes);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUNMLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsc0JBQXNCLEdBQ3ZCLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFDTCxhQUFhLEdBR2QsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hGLE9BQU8sRUFJTCxRQUFRLEdBQ1QsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0UsT0FBTyxFQUNMLGdCQUFnQixFQUdoQiwwQkFBMEIsR0FDM0IsTUFBTSxJQUFJLENBQUM7QUFDWixPQUFPLEVBQ0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxxQkFBcUIsRUFFckIsWUFBWSxFQUNaLHVCQUF1QixFQUN2QiwyQkFBMkIsRUFDM0Isb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsMEJBQTBCLEVBQzFCLHNCQUFzQixFQUN0QixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixxQkFBcUIsRUFDckIsZ0JBQWdCLEdBQ2pCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxZQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFN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