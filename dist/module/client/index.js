import { calculateFee, createProtobufRpcClient, decodeCosmosSdkDecFromProto, defaultRegistryTypes, GasPrice, QueryClient, setupAuthExtension, setupBankExtension, setupStakingExtension, setupTxExtension, SigningStargateClient, StargateClient, accountFromAny, } from "@cosmjs/stargate";
import { Registry, makeAuthInfoBytes, makeSignDoc, } from "@cosmjs/proto-signing";
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
import { TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
let registryTypes = [
    ...defaultRegistryTypes,
    ...coreumRegistry,
];
export class Mantle {
    // Properties
    _gasLimit = Infinity;
    _node;
    _client;
    _wallet;
    _eventSequence = 0;
    // Clients
    _feeModel;
    _rpcClient;
    _tmClient;
    _queryClient;
    _wsClient;
    static async connect(node, options) {
        // const coreDenom = CoreDenoms[options?.developer_mode || "MAINNET"];
        // const coreumMode = options?.developer_mode || MantleModes.MAINNET;
        if (options?.registry)
            registryTypes = [...registryTypes, ...options.registry];
        const registry = new Registry(registryTypes);
        const stargateOptions = {
            broadcastPollIntervalMs: options?.broadcastPollIntervalMs,
            broadcastTimeoutMs: options?.broadcastTimeoutMs,
            registry,
        };
        const wallet = options?.signer
            ? await generateWalletFromMnemonic(options.signer)
            : undefined;
        const tmClient = await Tendermint34Client.connect(`https://${node}`);
        const client = wallet
            ? await SigningStargateClient.createWithSigner(tmClient, wallet, stargateOptions)
            : await StargateClient.create(tmClient);
        const wsClient = !!options.withWS
            ? new WebsocketClient(`wss://${node}`)
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
        const queryClient = QueryClient.withExtensions(options.tmClient, setupFTExtension, setupNFTExtension, setupNFTBetaExtension, setupStakingExtension, setupBankExtension, setupTxExtension, setupAuthExtension);
        const rpcClient = createProtobufRpcClient(queryClient);
        const feeModel = new FeeModelClient(rpcClient);
        this._node = options.node;
        this._tmClient = options.tmClient;
        this._wsClient = options.wsClient;
        this._client = options.client;
        this._queryClient = queryClient;
        this._rpcClient = rpcClient;
        this._feeModel = feeModel;
        if (options?.gasLimit)
            this._gasLimit = options.gasLimit;
        if (options?.wallet)
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
        const { pubkey, accountNumber, sequence } = accountFromAny(acc);
        console.log(pubkey);
        const authBytes = makeAuthInfoBytes([
            {
                pubkey: {
                    typeUrl: pubkey.type,
                    value: pubkey.value,
                },
                sequence,
            },
        ], fee.amount, Number(fee.gas), undefined, undefined);
        const bodyBytes = TxBody.encode(TxBody.fromPartial({ messages, memo })).finish();
        const signDoc = makeSignDoc(bodyBytes, authBytes, "coreum-1", accountNumber);
        return signDoc;
    }
    async broadcast(tx) {
        return await this.getStargate().broadcastTx(tx);
    }
    async connectWallet(method, data) {
        switch (method) {
            case WalletMethods.MNEMONIC:
                if (data?.mnemonic) {
                    return await this._setMnemonicAccount(data.mnemonic);
                }
                throw new Error("Mnemonic method requires a mnemonic phrase");
            case WalletMethods.COSMOSTATION:
                const connection = await this._connectCosmostation();
                break;
            case WalletMethods.DCENT:
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
            if (options?.hasOwnProperty("submit"))
                shouldSubmit = options?.submit;
            const signingClient = this.getStargate();
            const sender = await this.getAddress();
            const { fee } = await this.getFee(messages);
            if (shouldSubmit) {
                return await signingClient.signAndBroadcast(sender, messages, fee, options?.memo || "");
            }
            return await signingClient.sign(sender, messages, fee, options?.memo || "");
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
        const sender = options?.address || (await this.getAddress());
        const gasPrice = await this._getGasPrice();
        let txGas;
        try {
            txGas =
                options?.gasLimit || (await signingClient.simulate(sender, msgs, ""));
        }
        catch (e) {
            txGas = 200_000;
        }
        if (new BigNumber(txGas).isGreaterThan(this._gasLimit))
            throw {
                thrower: "getFee",
                error: new Error("Transaction gas exceeds the gas limit set."),
            };
        return {
            gas_wanted: txGas,
            fee: calculateFee(txGas, gasPrice),
        };
    }
    async subscribeToEvent(event) {
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
    }
    // Private methods
    async _setMnemonicAccount(mnemonic) {
        this._wallet = await generateWalletFromMnemonic(mnemonic);
        await this._switchToSigningClient();
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
    async _switchToSigningClient() {
        this._client = await SigningStargateClient.createWithSigner(this._tmClient, this._wallet, { registry: new Registry(registryTypes) });
    }
    async _connectCosmostation() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFFcEIsUUFBUSxFQUVSLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIscUJBQXFCLEVBRXJCLGNBQWMsRUFDZCxjQUFjLEdBRWYsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBSUwsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RCxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sWUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBc0IzRCxJQUFJLGFB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