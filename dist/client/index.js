"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const wallet_1 = require("../utils/wallet");
const core_1 = require("../types/core");
const types_1 = require("../types");
const coreum_1 = require("../coreum");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const query_1 = require("../coreum/feemodel/v1/query");
const ft_1 = require("../coreum/extensions/ft");
const nft_1 = require("../coreum/extensions/nft");
const nftbeta_1 = require("../coreum/extensions/nftbeta");
const event_1 = require("../utils/event");
const eventemitter3_1 = __importDefault(require("eventemitter3"));
let registryTypes = [
    ...stargate_1.defaultRegistryTypes,
    ...coreum_1.coreumRegistry,
];
class Mantle {
    static connect(node, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const coreDenom = core_1.CoreDenoms[(options === null || options === void 0 ? void 0 : options.developer_mode) || "MAINNET"];
            const coreumMode = (options === null || options === void 0 ? void 0 : options.developer_mode) || core_1.MantleModes.MAINNET;
            if (options === null || options === void 0 ? void 0 : options.registry)
                registryTypes = [...registryTypes, ...options.registry];
            const registry = new proto_signing_1.Registry(registryTypes);
            const stargateOptions = {
                broadcastPollIntervalMs: options === null || options === void 0 ? void 0 : options.broadcastPollIntervalMs,
                broadcastTimeoutMs: options === null || options === void 0 ? void 0 : options.broadcastTimeoutMs,
                registry,
            };
            const wallet = (options === null || options === void 0 ? void 0 : options.signer)
                ? yield (0, wallet_1.generateWalletFromMnemonic)(options.signer)
                : undefined;
            const tmClient = yield tendermint_rpc_1.Tendermint34Client.connect(`https://${node}`);
            const client = wallet
                ? yield stargate_1.SigningStargateClient.createWithSigner(tmClient, wallet, stargateOptions)
                : yield stargate_1.StargateClient.create(tmClient);
            const wsClient = new tendermint_rpc_1.WebsocketClient(`wss://${node}`);
            return new Mantle({
                node,
                denom: coreDenom,
                mode: coreumMode,
                gasLimit: options.gasLimit,
                wsClient,
                client,
                tmClient,
                wallet,
            });
        });
    }
    constructor(options) {
        // Properties
        this._gasLimit = Infinity;
        this._eventSequence = 0;
        const queryClient = stargate_1.QueryClient.withExtensions(options.tmClient, ft_1.setupFTExtension, nft_1.setupNFTExtension, nftbeta_1.setupNFTBetaExtension, stargate_1.setupStakingExtension);
        const rpcClient = (0, stargate_1.createProtobufRpcClient)(queryClient);
        const feeModel = new query_1.QueryClientImpl(rpcClient);
        this._node = options.node;
        this._tmClient = options.tmClient;
        this._wsClient = options.wsClient;
        this._client = options.client;
        this._queryClient = queryClient;
        this._rpcClient = rpcClient;
        this._feeModel = feeModel;
        if (options === null || options === void 0 ? void 0 : options.gasLimit)
            this._gasLimit = options.gasLimit;
        if (options === null || options === void 0 ? void 0 : options.wallet)
            this._wallet = options.wallet;
    }
    // Getters and Setters
    setGasLimit(limit) {
        this._gasLimit = limit;
    }
    getGasLimit() {
        return this._gasLimit;
    }
    getQueryClients() {
        return this._queryClient;
    }
    getStargate() {
        return this._client;
    }
    getWsClient() {
        return this._wsClient;
    }
    connectWallet(method, data) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (method) {
                case types_1.WalletMethods.MNEMONIC:
                    if (data === null || data === void 0 ? void 0 : data.mnemonic) {
                        return yield this.setMnemonicAccount(data.mnemonic);
                    }
                    throw new Error("Mnemonic method requires a mnemonic phrase");
                case types_1.WalletMethods.COSMOSTATION:
                    const connection = yield this._connectCosmostation();
                    break;
                case types_1.WalletMethods.DCENT:
                    break;
            }
        });
    }
    setMnemonicAccount(mnemonic) {
        return __awaiter(this, void 0, void 0, function* () {
            this._wallet = yield (0, wallet_1.generateWalletFromMnemonic)(mnemonic);
            yield this._switchToSigningClient();
        });
    }
    getAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._wallet)
                throw new Error("A wallet has not been connected.");
            const accounts = yield this._wallet.getAccounts();
            return accounts[0].address;
        });
    }
    submit(messages, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this._wallet)
                    throw { thrower: "wallet", error: new Error("Wallet not connected") };
                let shouldSubmit = true;
                if (options === null || options === void 0 ? void 0 : options.hasOwnProperty("submit"))
                    shouldSubmit = options === null || options === void 0 ? void 0 : options.submit;
                const signingClient = this.getStargate();
                const sender = yield this.getAddress();
                const fee = yield this.getFee(messages);
                if (shouldSubmit) {
                    return yield signingClient.signAndBroadcast(sender, messages, fee, (options === null || options === void 0 ? void 0 : options.memo) || "");
                }
                return yield signingClient.sign(sender, messages, fee, (options === null || options === void 0 ? void 0 : options.memo) || "");
            }
            catch (e) {
                console.log("E_SUBMIT_MESSAGES =>", e);
                throw {
                    thrower: e.thrower || "submit",
                    error: e,
                };
            }
        });
    }
    getFee(msgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const signingClient = this.getStargate();
            const sender = yield this.getAddress();
            const txGas = yield signingClient.simulate(sender, msgs, "");
            const gasPrice = yield this._getGasPrice();
            return (0, stargate_1.calculateFee)(txGas, gasPrice);
        });
    }
    subscribeToEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._wsClient === undefined)
                throw {
                    thrower: "subscribeToEvent",
                    error: new Error("No Websocket client initialized"),
                };
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
        });
    }
    // Private methods
    _getGasPrice() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const gasPriceMultiplier = 1.1;
            // the param can be change via governance
            const feemodelParams = yield this._feeModel.Params({});
            const minGasPriceRes = yield this._feeModel.MinGasPrice({});
            const minGasPrice = (0, stargate_1.decodeCosmosSdkDecFromProto)(((_a = minGasPriceRes.minGasPrice) === null || _a === void 0 ? void 0 : _a.amount) || "");
            let gasPrice = minGasPrice.toFloatApproximation() * gasPriceMultiplier;
            const initialGasPrice = (0, stargate_1.decodeCosmosSdkDecFromProto)(((_c = (_b = feemodelParams.params) === null || _b === void 0 ? void 0 : _b.model) === null || _c === void 0 ? void 0 : _c.initialGasPrice) || "").toFloatApproximation();
            if (gasPrice > initialGasPrice) {
                gasPrice = initialGasPrice;
            }
            return stargate_1.GasPrice.fromString(`${gasPrice}${((_d = minGasPriceRes.minGasPrice) === null || _d === void 0 ? void 0 : _d.denom) || ""}`);
        });
    }
    _switchToSigningClient() {
        return __awaiter(this, void 0, void 0, function* () {
            this._client = yield stargate_1.SigningStargateClient.createWithSigner(this._tmClient, this._wallet, { registry: new proto_signing_1.Registry(registryTypes) });
        });
    }
    _connectCosmostation() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = Mantle;
