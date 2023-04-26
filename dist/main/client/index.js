"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mantle = void 0;
const coreum_1 = require("../coreum");
const ft_1 = require("../coreum/extensions/ft");
const nft_1 = require("../coreum/extensions/nft");
const nftbeta_1 = require("../coreum/extensions/nftbeta");
const services_1 = require("../services");
const coreum_2 = require("../types/coreum");
const query_1 = require("../coreum/feemodel/v1/query");
const proto_signing_1 = require("@cosmjs/proto-signing");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const __1 = require("..");
const stargate_1 = require("@cosmjs/stargate");
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const event_1 = require("../utils/event");
function isSigningClient(object) {
    return "signAndBroadcast" in object;
}
var ExtensionWallets;
(function (ExtensionWallets) {
    ExtensionWallets["KEPLR"] = "keplr";
    ExtensionWallets["COSMOSTATION"] = "cosmostation";
    ExtensionWallets["LEAP"] = "leap";
})(ExtensionWallets || (ExtensionWallets = {}));
class Mantle {
    get queryClients() {
        return this._queryClient;
    }
    constructor(props) {
        this._eventSequence = 0;
        this.config = (props === null || props === void 0 ? void 0 : props.network)
            ? coreum_2.COREUM_CONFIG[props.network]
            : coreum_2.COREUM_CONFIG.mainnet;
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
    async connect() {
        await this._initTendermintClient(this.config.chain_rpc_endpoint);
        await this._initQueryClient();
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
        await this._initQueryClient();
        await this._initFeeModel();
        if (options === null || options === void 0 ? void 0 : options.withWS) {
            await this._initWsClient(this.config.chain_ws_endpoint);
        }
    }
    async connectWithMnemonic(mnemonic, options) {
        try {
            const offlineSigner = await (0, __1.generateWalletFromMnemonic)(mnemonic);
            await this._initTendermintClient(this.config.chain_rpc_endpoint);
            await this._initQueryClient();
            await this._initFeeModel();
            this._client = await stargate_1.SigningStargateClient.createWithSigner(this._tmClient, offlineSigner, { registry: Mantle.getRegistry() });
            if (options === null || options === void 0 ? void 0 : options.withWS) {
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
            fee: (0, stargate_1.calculateFee)(gas_wanted, gasPrice),
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
            const emitter = new eventemitter3_1.default();
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
                        events: x.events ? (0, event_1.parseSubscriptionEvents)(x.events) : x,
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
        var _a, _b, _c, _d;
        const gasPriceMultiplier = 1.1;
        // the param can be change via governance
        const feemodelParams = await this._feeModel.Params({});
        const minGasPriceRes = await this._feeModel.MinGasPrice({});
        const minGasPrice = (0, stargate_1.decodeCosmosSdkDecFromProto)(((_a = minGasPriceRes.minGasPrice) === null || _a === void 0 ? void 0 : _a.amount) || "");
        let gasPrice = minGasPrice.toFloatApproximation() * gasPriceMultiplier;
        const initialGasPrice = (0, stargate_1.decodeCosmosSdkDecFromProto)(((_c = (_b = feemodelParams.params) === null || _b === void 0 ? void 0 : _b.model) === null || _c === void 0 ? void 0 : _c.initialGasPrice) || "").toFloatApproximation();
        if (gasPrice > initialGasPrice) {
            gasPrice = initialGasPrice;
        }
        return stargate_1.GasPrice.fromString(`${gasPrice}${((_d = minGasPriceRes.minGasPrice) === null || _d === void 0 ? void 0 : _d.denom) || ""}`);
    }
    _isSigningClientInit() {
        if (!this._client || !isSigningClient(this._client))
            throw new Error("Signing Client is not initialized");
    }
    async _initTendermintClient(rpcEndpoint) {
        this._tmClient = await tendermint_rpc_1.Tendermint34Client.connect(rpcEndpoint);
    }
    async _initQueryClient() {
        this._queryClient = stargate_1.QueryClient.withExtensions(this._tmClient, ft_1.setupFTExtension, nft_1.setupNFTExtension, nftbeta_1.setupNFTBetaExtension, stargate_1.setupStakingExtension, stargate_1.setupBankExtension, stargate_1.setupTxExtension, stargate_1.setupAuthExtension);
    }
    async _initFeeModel() {
        const rpcClient = (0, stargate_1.createProtobufRpcClient)(this._queryClient);
        this._feeModel = new query_1.QueryClientImpl(rpcClient);
    }
    async _initWsClient(wsEndpoint) {
        this._wsClient = new tendermint_rpc_1.WebsocketClient(wsEndpoint);
    }
    async _connectWithKplr() {
        try {
            await (0, services_1.connectKeplr)(this.config);
            await window.keplr.enable(this.config.chain_id);
            // get offline signer for signing txs
            const offlineSigner = await window.getOfflineSigner(this.config.chain_id);
            const [{ address }] = await offlineSigner.getAccounts();
            this._address = address;
            const registry = Mantle.getRegistry();
            // signing client
            this._client = await stargate_1.SigningStargateClient.connectWithSigner(this.config.chain_rpc_endpoint, offlineSigner, {
                registry: registry,
                gasPrice: stargate_1.GasPrice.fromString(this.config.gas_price),
            });
        }
        catch (e) {
            throw {
                thrower: "_connectWithKplr",
                error: e,
            };
        }
    }
    async _connectWithCosmostation() {
        throw new Error("Comsostation not implemented");
    }
    async _connectWithLeap() {
        throw new Error("Leap not implemented");
    }
    static getRegistry() {
        // register default and custom messages
        let registryTypes = [
            ...stargate_1.defaultRegistryTypes,
            ...coreum_1.coreumRegistry,
        ];
        return new proto_signing_1.Registry(registryTypes);
    }
}
exports.Mantle = Mantle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnREFBMkQ7QUFDM0Qsa0RBQTZEO0FBQzdELDBEQUFxRTtBQUNyRSwwQ0FBMkM7QUFDM0MsNENBSXlCO0FBQ3pCLHVEQUFnRjtBQUNoRix5REFBOEU7QUFDOUUsMkRBQTZFO0FBQzdFLDBCQUlZO0FBQ1osK0NBYTBCO0FBQzFCLGtFQUF5QztBQUN6QywwQ0FBeUQ7QUFJekQsU0FBUyxlQUFlLENBQUMsTUFBVztJQUNsQyxPQUFPLGtCQUFrQixJQUFJLE1BQU0sQ0FBQztBQUN0QyxDQUFDO0FBRUQsSUFBSyxnQkFJSjtBQUpELFdBQUssZ0JBQWdCO0lBQ25CLG1DQUFlLENBQUE7SUFDZixpREFBNkIsQ0FBQTtJQUM3QixpQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpJLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJcEI7QUFjRCxNQUFhLE1BQU07SUFXakIsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxZQUFZLEtBQW1CO1FBUnZCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBU2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTztZQUMxQixDQUFDLENBQUMsc0JBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxzQkFBYSxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMs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