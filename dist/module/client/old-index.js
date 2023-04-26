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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLWluZGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudC9vbGQtaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsMkJBQTJCLEVBQzNCLG9CQUFvQixFQUVwQixRQUFRLEVBRVIsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIscUJBQXFCLEVBQ3JCLGdCQUFnQixFQUNoQixxQkFBcUIsRUFFckIsY0FBYyxFQUNkLGNBQWMsR0FFZixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFLTCxRQUFRLEVBQ1IsWUFBWSxFQUNaLGlCQUFpQixHQUNsQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdELE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sWUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFDckMs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