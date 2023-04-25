import { calculateFee, createProtobufRpcClient, decodeCosmosSdkDecFromProto, defaultRegistryTypes, GasPrice, QueryClient, setupAuthExtension, setupBankExtension, setupStakingExtension, setupTxExtension, SigningStargateClient, StargateClient, accountFromAny, } from "@cosmjs/stargate";
import { Registry, encodePubkey, makeAuthInfoBytes, } from "@cosmjs/proto-signing";
import { generateWalletFromMnemonic } from "../utils/wallet";
import { WalletMethods } from "../types";
import { coreumRegistry } from "../coreum";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { parseSubscriptionEvents } from "../utils/event";
import EventEmitter from "eventemitter3";
import BigNumber from "bignumber.js";
import { encodeSecp256k1Pubkey, makeSignDoc, } from "@cosmjs/amino";
import { bytesFromBase64 } from "cosmjs-types/helpers";
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
    async encodeSignedAmino({ signed, signature }, signerPubkey, encoded = false) {
        const signedTxBody = {
            messages: signed.msgs.map((msg) => ({
                typeUrl: msg.type,
                value: msg.value,
            })),
            memo: signed.memo,
        };
        const pubkey = encodePubkey(encodeSecp256k1Pubkey(signerPubkey));
        const signedTxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: signedTxBody,
        };
        const registry = new Registry(coreumRegistry);
        const signedTxBodyBytes = registry.encode(signedTxBodyEncodeObject);
        const signedGasLimit = Number(signed.fee.gas);
        const signedSequence = Number(signed.sequence);
        const signedAuthInfoBytes = makeAuthInfoBytes([{ pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, signed.fee.granter, signed.fee.payer);
        const txRaw = TxRaw.fromPartial({
            bodyBytes: signedTxBodyBytes,
            authInfoBytes: signedAuthInfoBytes,
            signatures: [bytesFromBase64(signature.signature)],
        });
        if (encoded)
            return TxRaw.encode(txRaw).finish();
        return txRaw;
    }
    async prepareAminoSignDoc(signer, messages, fee, memo = "") {
        const { auth } = this.getQueryClients();
        const acc = await auth.account(signer);
        const { accountNumber, sequence } = accountFromAny(acc);
        const stdSignDoc = makeSignDoc(messages, fee, "coreum-mainnet-1", memo, accountNumber, sequence);
        return stdSignDoc;
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
            const signer = this.getStargate();
            let shouldSubmit = true;
            if (options?.hasOwnProperty("submit"))
                shouldSubmit = options?.submit;
            const sender = (await signer.signer.getAccounts())[0].address;
            const { fee } = await this.getFee(messages, { address: sender });
            if (shouldSubmit) {
                return await signer.signAndBroadcast(sender, messages, fee, options?.memo || "");
            }
            return await signer.sign(sender, messages, fee, options?.memo || "");
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
    async switchToSigningClient(offlineSigner) {
        this._client = await SigningStargateClient.createWithSigner(this._tmClient, offlineSigner, { registry: new Registry(registryTypes) });
        this._wallet = offlineSigner;
    }
    // Private methods
    async _setMnemonicAccount(mnemonic) {
        this._wallet = await generateWalletFromMnemonic(mnemonic);
        await this.switchToSigningClient(this._wallet);
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
    async _connectCosmostation() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFFcEIsUUFBUSxFQUVSLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIscUJBQXFCLEVBRXJCLGNBQWMsRUFDZCxjQUFjLEdBRWYsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBS0wsUUFBUSxFQUNSLFlBQVksRUFDWixpQkFBaUIsR0FDbEIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RCxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQWMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFJ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