var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { calculateFee, createProtobufRpcClient, decodeCosmosSdkDecFromProto, defaultRegistryTypes, GasPrice, QueryClient, setupBankExtension, setupStakingExtension, setupTxExtension, SigningStargateClient, StargateClient, } from "@cosmjs/stargate";
import { Registry, } from "@cosmjs/proto-signing";
import { generateWalletFromMnemonic } from "../utils/wallet";
import { WalletMethods } from "../types";
import { coreumRegistry } from "../coreum";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { parseSubscriptionEvents } from "../utils/event";
import EventEmitter from "eventemitter3";
import BigNumber from "bignumber.js";
let registryTypes = [
    ...defaultRegistryTypes,
    ...coreumRegistry,
];
export class Mantle {
    static connect(node, options) {
        return __awaiter(this, void 0, void 0, function* () {
            // const coreDenom = CoreDenoms[options?.developer_mode || "MAINNET"];
            // const coreumMode = options?.developer_mode || MantleModes.MAINNET;
            if (options === null || options === void 0 ? void 0 : options.registry)
                registryTypes = [...registryTypes, ...options.registry];
            const registry = new Registry(registryTypes);
            const stargateOptions = {
                broadcastPollIntervalMs: options === null || options === void 0 ? void 0 : options.broadcastPollIntervalMs,
                broadcastTimeoutMs: options === null || options === void 0 ? void 0 : options.broadcastTimeoutMs,
                registry,
            };
            const wallet = (options === null || options === void 0 ? void 0 : options.signer)
                ? yield generateWalletFromMnemonic(options.signer)
                : undefined;
            const tmClient = yield Tendermint34Client.connect(`https://${node}`);
            const client = wallet
                ? yield SigningStargateClient.createWithSigner(tmClient, wallet, stargateOptions)
                : yield StargateClient.create(tmClient);
            const wsClient = new WebsocketClient(`wss://${node}`);
            return new Mantle({
                node,
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
        const queryClient = QueryClient.withExtensions(options.tmClient, setupFTExtension, setupNFTExtension, setupNFTBetaExtension, setupStakingExtension, setupBankExtension, setupTxExtension);
        const rpcClient = createProtobufRpcClient(queryClient);
        const feeModel = new FeeModelClient(rpcClient);
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
                case WalletMethods.MNEMONIC:
                    if (data === null || data === void 0 ? void 0 : data.mnemonic) {
                        return yield this._setMnemonicAccount(data.mnemonic);
                    }
                    throw new Error("Mnemonic method requires a mnemonic phrase");
                case WalletMethods.COSMOSTATION:
                    const connection = yield this._connectCosmostation();
                    break;
                case WalletMethods.DCENT:
                    break;
            }
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
            if (new BigNumber(txGas).isGreaterThan(this._gasLimit))
                throw {
                    thrower: "getFee",
                    error: new Error("Transaction gas exceeds the gas limit set."),
                };
            return calculateFee(txGas, gasPrice);
        });
    }
    subscribeToEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._wsClient === undefined)
                throw {
                    thrower: "subscribeToEvent",
                    error: new Error("No Websocket client initialized"),
                };
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
        });
    }
    // Private methods
    _setMnemonicAccount(mnemonic) {
        return __awaiter(this, void 0, void 0, function* () {
            this._wallet = yield generateWalletFromMnemonic(mnemonic);
            yield this._switchToSigningClient();
        });
    }
    _getGasPrice() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const gasPriceMultiplier = 1.1;
            // the param can be change via governance
            const feemodelParams = yield this._feeModel.Params({});
            const minGasPriceRes = yield this._feeModel.MinGasPrice({});
            const minGasPrice = decodeCosmosSdkDecFromProto(((_a = minGasPriceRes.minGasPrice) === null || _a === void 0 ? void 0 : _a.amount) || "");
            let gasPrice = minGasPrice.toFloatApproximation() * gasPriceMultiplier;
            const initialGasPrice = decodeCosmosSdkDecFromProto(((_c = (_b = feemodelParams.params) === null || _b === void 0 ? void 0 : _b.model) === null || _c === void 0 ? void 0 : _c.initialGasPrice) || "").toFloatApproximation();
            if (gasPrice > initialGasPrice) {
                gasPrice = initialGasPrice;
            }
            return GasPrice.fromString(`${gasPrice}${((_d = minGasPriceRes.minGasPrice) === null || _d === void 0 ? void 0 : _d.denom) || ""}`);
        });
    }
    _switchToSigningClient() {
        return __awaiter(this, void 0, void 0, function* () {
            this._client = yield SigningStargateClient.createWithSigner(this._tmClient, this._wallet, { registry: new Registry(registryTypes) });
        });
    }
    _connectCosmostation() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
