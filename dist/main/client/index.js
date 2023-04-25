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
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const query_1 = require("../coreum/feemodel/v1/query");
const ft_1 = require("../coreum/extensions/ft");
const nft_1 = require("../coreum/extensions/nft");
const nftbeta_1 = require("../coreum/extensions/nftbeta");
const event_1 = require("../utils/event");
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const amino_1 = require("@cosmjs/amino");
const helpers_1 = require("cosmjs-types/helpers");
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
    async encodeSignedAmino({ signed, signature }, signerPubkey) {
        const signedTxBody = {
            messages: signed.msgs.map((msg) => ({
                typeUrl: msg.type,
                value: msg.value,
            })),
            memo: signed.memo,
        };
        const pubkey = (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(signerPubkey));
        const signedTxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: signedTxBody,
        };
        const registry = new proto_signing_1.Registry(coreum_1.coreumRegistry);
        const signedTxBodyBytes = registry.encode(signedTxBodyEncodeObject);
        const signedGasLimit = Number(signed.fee.gas);
        const signedSequence = Number(signed.sequence);
        const signedAuthInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, signed.fee.granter, signed.fee.payer);
        return tx_1.TxRaw.encode(tx_1.TxRaw.fromPartial({
            bodyBytes: signedTxBodyBytes,
            authInfoBytes: signedAuthInfoBytes,
            signatures: [(0, helpers_1.bytesFromBase64)(signature.signature)],
        })).finish();
    }
    async prepareAminoSignDoc(signer, messages, fee, memo = "") {
        const { auth } = this.getQueryClients();
        const acc = await auth.account(signer);
        const { accountNumber, sequence } = (0, stargate_1.accountFromAny)(acc);
        const stdSignDoc = (0, amino_1.makeSignDoc)(messages, fee, "coreum-1", memo, accountNumber, sequence);
        return stdSignDoc;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtDQWtCMEI7QUFDMUIseURBTytCO0FBQy9CLDRDQUE2RDtBQUU3RCxvQ0FBcUU7QUFDckUsc0NBQTJDO0FBQzNDLDBEQUFzRTtBQUN0RSwyREFBNkU7QUFDN0UsdURBQWdGO0FBQ2hGLGdEQUEyRDtBQUMzRCxrREFBNkQ7QUFDN0QsMERBQXFFO0FBQ3JFLDBDQUF5RDtBQUN6RCxrRUFBeUM7QUFDekMsZ0VBQXFDO0FBQ3JDLHlDQU11QjtBQUN2QixrREFBdUQ7QUFxQnZELElBQUksYUFBYSxHQUEyQztJQUMxRCxHQUFHLCtCQUFvQjtJQUN2QixHQUFHLHVCQUFjO0NBQ2xCLENBQUM7QUFFRixNQUFhLE1BQU07SUFjakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLE9BQXVCO1FBQ3hELHNFQUFzRTtRQUN0RSxxRUFBcUU7UUFFckUsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsUUFBUTtZQUNuQixhQUFhLEdBQUcsQ0FBQyxHQUFHLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsTUFBTSxlQUFlLEdBQWlDO1lBQ3BELHVCQUF1QixFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSx1QkFBdUI7WUFDekQsa0JBQWtCLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGtCQUFrQjtZQUMvQyxRQUFRO1NBQ1QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU07WUFDNUIsQ0FBQyxDQUFDLE1BQU0sSUFBQSxtQ0FB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