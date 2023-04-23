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
        const { accountNumber, sequence } = accountFromAny(acc);
        const authBytes = makeAuthInfoBytes([
            {
                pubkey: acc,
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