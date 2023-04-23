"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mantle = void 0;
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const wallet_1 = require("../utils/wallet");
const types_1 = require("../types");
const coreum_1 = require("../coreum");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const query_1 = require("../coreum/feemodel/v1/query");
const ft_1 = require("../coreum/extensions/ft");
const nft_1 = require("../coreum/extensions/nft");
const nftbeta_1 = require("../coreum/extensions/nftbeta");
const event_1 = require("../utils/event");
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
let registryTypes = [
    ...stargate_1.defaultRegistryTypes,
    ...coreum_1.coreumRegistry,
];
class Mantle {
    static async connect(node, options) {
        // const coreDenom = CoreDenoms[options?.developer_mode || "MAINNET"];
        // const coreumMode = options?.developer_mode || MantleModes.MAINNET;
        if (options === null || options === void 0 ? void 0 : options.registry)
            registryTypes = [...registryTypes, ...options.registry];
        const registry = new proto_signing_1.Registry(registryTypes);
        const stargateOptions = {
            broadcastPollIntervalMs: options === null || options === void 0 ? void 0 : options.broadcastPollIntervalMs,
            broadcastTimeoutMs: options === null || options === void 0 ? void 0 : options.broadcastTimeoutMs,
            registry,
        };
        const wallet = (options === null || options === void 0 ? void 0 : options.signer)
            ? await (0, wallet_1.generateWalletFromMnemonic)(options.signer)
            : undefined;
        const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(`https://${node}`);
        const client = wallet
            ? await stargate_1.SigningStargateClient.createWithSigner(tmClient, wallet, stargateOptions)
            : await stargate_1.StargateClient.create(tmClient);
        const wsClient = !!options.withWS
            ? new tendermint_rpc_1.WebsocketClient(`wss://${node}`)
            : undefined;
        return new Mantle({
            node,
            gasLimit: options.gasLimit,
            wsClient,
            client,
            tmClient,
            wallet,
        });
    }
    constructor(options) {
        // Properties
        this._gasLimit = Infinity;
        this._eventSequence = 0;
        const queryClient = stargate_1.QueryClient.withExtensions(options.tmClient, ft_1.setupFTExtension, nft_1.setupNFTExtension, nftbeta_1.setupNFTBetaExtension, stargate_1.setupStakingExtension, stargate_1.setupBankExtension, stargate_1.setupTxExtension);
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
    async connectWallet(method, data) {
        switch (method) {
            case types_1.WalletMethods.MNEMONIC:
                if (data === null || data === void 0 ? void 0 : data.mnemonic) {
                    return await this._setMnemonicAccount(data.mnemonic);
                }
                throw new Error("Mnemonic method requires a mnemonic phrase");
            case types_1.WalletMethods.COSMOSTATION:
                const connection = await this._connectCosmostation();
                break;
            case types_1.WalletMethods.DCENT:
                break;
        }
    }
    async getAddress() {
        if (!this._wallet)
            throw new Error("A wallet has not been connected.");
        const accounts = await this._wallet.getAccounts();
        return accounts[0].address;
    }
    async submit(messages, options) {
        try {
            if (!this._wallet)
                throw { thrower: "wallet", error: new Error("Wallet not connected") };
            let shouldSubmit = true;
            if (options === null || options === void 0 ? void 0 : options.hasOwnProperty("submit"))
                shouldSubmit = options === null || options === void 0 ? void 0 : options.submit;
            const signingClient = this.getStargate();
            const sender = await this.getAddress();
            const { fee } = await this.getFee(messages);
            if (shouldSubmit) {
                return await signingClient.signAndBroadcast(sender, messages, fee, (options === null || options === void 0 ? void 0 : options.memo) || "");
            }
            return await signingClient.sign(sender, messages, fee, (options === null || options === void 0 ? void 0 : options.memo) || "");
        }
        catch (e) {
            console.log("E_SUBMIT_MESSAGES =>", e);
            throw {
                thrower: e.thrower || "submit",
                error: e,
            };
        }
    }
    async getFee(msgs, options) {
        const signingClient = this.getStargate();
        const sender = (options === null || options === void 0 ? void 0 : options.address) || (await this.getAddress());
        const gasPrice = await this._getGasPrice();
        let txGas;
        try {
            txGas =
                (options === null || options === void 0 ? void 0 : options.gasLimit) || (await signingClient.simulate(sender, msgs, ""));
        }
        catch (e) {
            txGas = 200000;
        }
        if (new bignumber_js_1.default(txGas).isGreaterThan(this._gasLimit))
            throw {
                thrower: "getFee",
                error: new Error("Transaction gas exceeds the gas limit set."),
            };
        return {
            gas_wanted: txGas,
            fee: (0, stargate_1.calculateFee)(txGas, gasPrice),
        };
    }
    async subscribeToEvent(event) {
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
    }
    // Private methods
    async _setMnemonicAccount(mnemonic) {
        this._wallet = await (0, wallet_1.generateWalletFromMnemonic)(mnemonic);
        await this._switchToSigningClient();
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
    async _switchToSigningClient() {
        this._client = await stargate_1.SigningStargateClient.createWithSigner(this._tmClient, this._wallet, { registry: new proto_signing_1.Registry(registryTypes) });
    }
    async _connectCosmostation() { }
}
exports.Mantle = Mantle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtDQWdCMEI7QUFDMUIseURBSytCO0FBQy9CLDRDQUE2RDtBQUU3RCxvQ0FBcUU7QUFDckUsc0NBQTJDO0FBRTNDLDJEQUE2RTtBQUM3RSx1REFBZ0Y7QUFDaEYsZ0RBQTJEO0FBQzNELGtEQUE2RDtBQUM3RCwwREFBcUU7QUFDckUsMENBQXlEO0FBQ3pELGtFQUF5QztBQUN6QyxnRUFBcUM7QUFxQnJDLElBQUksYUFBYSxHQUEyQztJQUMxRCxHQUFHLCtCQUFvQjtJQUN2QixHQUFHLHVCQUFjO0NBQ2xCLENBQUM7QUFFRixNQUFhLE1BQU07SUFjakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLE9BQXVCO1FBQ3hELHNFQUFzRTtRQUN0RSxxRUFBcUU7UUFFckUsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsUUFBUTtZQUNuQixhQUFhLEdBQUcsQ0FBQyxHQUFHLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsTUFBTSxlQUFlLEdBQWlDO1lBQ3BELHVCQUF1QixFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSx1QkFBdUI7WUFDekQsa0JBQWtCLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGtCQUFrQjtZQUMvQyxRQUFRO1NBQ1QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU07WUFDNUIsQ0FBQyxDQUFDLE1BQU0sSUFBQSxtQ0FBMEIsRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2xELENBQUMs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