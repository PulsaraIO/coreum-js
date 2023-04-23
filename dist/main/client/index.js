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
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
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
        const queryClient = stargate_1.QueryClient.withExtensions(options.tmClient, ft_1.setupFTExtension, nft_1.setupNFTExtension, nftbeta_1.setupNFTBetaExtension, stargate_1.setupStakingExtension, stargate_1.setupBankExtension, stargate_1.setupTxExtension, stargate_1.setupAuthExtension);
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
    async prepareSignDoc(signer, messages, fee, memo = "") {
        const { auth } = this.getQueryClients();
        const acc = await auth.account(signer);
        const { accountNumber, sequence } = (0, stargate_1.accountFromAny)(acc);
        const authBytes = (0, proto_signing_1.makeAuthInfoBytes)([
            {
                pubkey: acc,
                sequence,
            },
        ], fee.amount, Number(fee.gas), fee.granter, fee.payer);
        const bodyBytes = tx_1.TxBody.encode(tx_1.TxBody.fromPartial({ messages, memo })).finish();
        const signDoc = (0, proto_signing_1.makeSignDoc)(bodyBytes, authBytes, "coreum-1", accountNumber);
        return signDoc;
    }
    async broadcast(tx) {
        return await this.getStargate().broadcastTx(tx);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtDQWtCMEI7QUFDMUIseURBTytCO0FBQy9CLDRDQUE2RDtBQUU3RCxvQ0FBcUU7QUFDckUsc0NBQTJDO0FBRTNDLDJEQUE2RTtBQUM3RSx1REFBZ0Y7QUFDaEYsZ0RBQTJEO0FBQzNELGtEQUE2RDtBQUM3RCwwREFBcUU7QUFDckUsMENBQXlEO0FBQ3pELGtFQUF5QztBQUN6QyxnRUFBcUM7QUFDckMsMERBQTJEO0FBc0IzRCxJQUFJLGFBQWEsR0FBMkM7SUFDMUQsR0FBRywrQkFBb0I7SUFDdkIsR0FBRyx1QkFBYztDQUNsQixDQUFDO0FBRUYsTUFBYSxNQUFNO0lBY2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQVksRUFBRSxPQUF1QjtRQUN4RCxzRUFBc0U7UUFDdEUscUVBQXFFO1FBRXJFLElBQUksT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFFBQVE7WUFDbkIsYUFBYSxHQUFHLENBQUMsR0FBRyxhQUFhLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sZUFBZSxHQUFpQztZQUNwRCx1QkFBdUIsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsdUJBQXVCO1lBQ3pELGtCQUFrQixFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxrQkFBa0I7WUFDL0MsUUFBUTtTQUNULENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNO1lBQzVCLENBQUMsQ0FBQyxNQUFNLElBQUEsbUNBQTBCLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FB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