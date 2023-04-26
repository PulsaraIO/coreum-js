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
            const sender = (await signer.signer.getAccounts())[0].address;
            const { fee } = await this.getFee(messages, { address: sender });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLWluZGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudC9vbGQtaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0NBa0IwQjtBQUMxQix5REFRK0I7QUFDL0IsNENBQTZEO0FBRTdELG9DQUFxRTtBQUNyRSxzQ0FBMkM7QUFDM0MsMERBQXNFO0FBQ3RFLDJEQUE2RTtBQUM3RSx1REFBZ0Y7QUFDaEYsZ0RBQTJEO0FBQzNELGtEQUE2RDtBQUM3RCwwREFBcUU7QUFDckUsMENBQXlEO0FBQ3pELGtFQUF5QztBQUN6QyxnRUFBcUM7QUFDckMseUNBTXVCO0FBQ3ZCLGtEQUF1RDtBQXFCdkQsSUFBSSxhQUFhLEdBQTJDO0lBQzFELEdBQUcsK0JBQW9CO0lBQ3ZCLEdBQUcsdUJBQWM7Q0FDbEIsQ0FBQztBQUVGLE1BQWEsTUFBTTtJQWNqQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFZLEVBQUUsT0FBdUI7UUFDeEQsc0VBQXNFO1FBQ3RFLHFFQUFxRTtRQUVyRSxJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxRQUFRO1lBQ25CLGFBQWEsR0FBRyxDQUFDLEdBQUcsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFELE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU3QyxNQUFNLGVBQWUsR0FBaUM7WUFDcEQsdUJBQXVCLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLHVCQUF1QjtZQUN6RCxrQkFBa0IsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsa0JBQWtCO1lBQy9DLFFBQVE7U0FDVCxDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTTtZQUM1QixDQUFDLENBQUMsTUFBTSxJ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