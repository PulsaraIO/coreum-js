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
    async encodeSignedAmino({ signed, signature }, signerPubkey, encoded = false) {
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
        const txRaw = tx_1.TxRaw.fromPartial({
            bodyBytes: signedTxBodyBytes,
            authInfoBytes: signedAuthInfoBytes,
            signatures: [(0, helpers_1.bytesFromBase64)(signature.signature)],
        });
        if (encoded)
            return tx_1.TxRaw.encode(txRaw).finish();
        return txRaw;
    }
    async prepareAminoSignDoc(signer, messages, fee, memo = "") {
        const { auth } = this.getQueryClients();
        const acc = await auth.account(signer);
        const { accountNumber, sequence } = (0, stargate_1.accountFromAny)(acc);
        const stdSignDoc = (0, amino_1.makeSignDoc)(messages, fee, "coreum-mainnet-1", memo, accountNumber, sequence);
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
            const signer = this.getStargate();
            let shouldSubmit = true;
            if (options === null || options === void 0 ? void 0 : options.hasOwnProperty("submit"))
                shouldSubmit = options === null || options === void 0 ? void 0 : options.submit;
            const sender = await this._wallet.getAccounts()[0].address;
            const { fee } = await this.getFee(messages);
            if (shouldSubmit) {
                return await signer.signAndBroadcast(sender, messages, fee, (options === null || options === void 0 ? void 0 : options.memo) || "");
            }
            return await signer.sign(sender, messages, fee, (options === null || options === void 0 ? void 0 : options.memo) || "");
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
    async switchToSigningClient(offlineSigner) {
        this._client = await stargate_1.SigningStargateClient.createWithSigner(this._tmClient, offlineSigner, { registry: new proto_signing_1.Registry(registryTypes) });
        this._wallet = offlineSigner;
    }
    // Private methods
    async _setMnemonicAccount(mnemonic) {
        this._wallet = await (0, wallet_1.generateWalletFromMnemonic)(mnemonic);
        await this.switchToSigningClient(this._wallet);
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
    async _connectCosmostation() { }
}
exports.Mantle = Mantle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtDQWtCMEI7QUFDMUIseURBUStCO0FBQy9CLDRDQUE2RDtBQUU3RCxvQ0FBcUU7QUFDckUsc0NBQTJDO0FBQzNDLDBEQUFzRTtBQUN0RSwyREFBNkU7QUFDN0UsdURBQWdGO0FBQ2hGLGdEQUEyRDtBQUMzRCxrREFBNkQ7QUFDN0QsMERBQXFFO0FBQ3JFLDBDQUF5RDtBQUN6RCxrRUFBeUM7QUFDekMsZ0VBQXFDO0FBQ3JDLHlDQU11QjtBQUN2QixrREFBdUQ7QUFxQnZELElBQUksYUFBYSxHQUEyQztJQUMxRCxHQUFHLCtCQUFvQjtJQUN2QixHQUFHLHVCQUFjO0NBQ2xCLENBQUM7QUFFRixNQUFhLE1BQU07SUFjakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLE9BQXVCO1FBQ3hELHNFQUFzRTtRQUN0RSxxRUFBcUU7UUFFckUsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsUUFBUTtZQUNuQixhQUFhLEdBQUcsQ0FBQyxHQUFHLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsTUFBTSxlQUFlLEdBQWlDO1lBQ3BELHVCQUF1QixFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSx1QkFBdUI7WUFDekQsa0JBQWtCLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGtCQUFrQjtZQUMvQyxRQUFRO1NBQ1QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU07WUFDNUIsQ0FBQyxDQUFDLE1BQU0sSUFBQSxtQ0FB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