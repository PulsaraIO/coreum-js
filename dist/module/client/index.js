import { calculateFee, createProtobufRpcClient, decodeCosmosSdkDecFromProto, defaultRegistryTypes, GasPrice, QueryClient, setupAuthExtension, setupBankExtension, setupStakingExtension, setupTxExtension, SigningStargateClient, StargateClient, accountFromAny, } from "@cosmjs/stargate";
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
import { makeSignDoc } from "@cosmjs/amino";
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
    // encodeSignedAmino({ signed, signature }: AminoSignResponse) {
    //   const signedTxBody = {
    //     messages: signed.msgs.map((msg) => ({
    //       typeUrl: msg.type,
    //       value: msg.value,
    //     })),
    //     memo: signed.memo,
    //   };
    //   const signedTxBodyEncodeObject = {
    //     typeUrl: "/cosmos.tx.v1beta1.TxBody",
    //     value: signedTxBody,
    //   };
    //   // const signedTxBodyBytes = TxBody.encode(TxBody.fromPartial(signedTxBody));
    //   // const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    //   // const signedGasLimit = math_1.Int53.fromString(signed.fee.gas).toNumber();
    //   // const signedSequence = math_1.Int53.fromString(signed.sequence).toNumber();
    //   // const signedAuthInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, signed.fee.granter, signed.fee.payer, signMode);
    //   // return tx_3.TxRaw.fromPartial({
    //   //     bodyBytes: signedTxBodyBytes,
    //   //     authInfoBytes: signedAuthInfoBytes,
    //   //     signatures: [(0, encoding_1.fromBase64)(signature.signature)],
    //   // });
    //   // const tx = Tx.fromPartial({
    //   //   body,
    //   //   signatures,
    //   //   ...(options?.timeoutHeight
    //   //     ? { timeoutHeight: options.timeoutHeight }
    //   //     : {}),
    //   // });
    //   // return Tx.encode(tx).finish();
    // }
    async prepareAminoSignDoc(signer, messages, fee, memo = "") {
        const { auth } = this.getQueryClients();
        const acc = await auth.account(signer);
        const { accountNumber, sequence } = accountFromAny(acc);
        const stdSignDoc = makeSignDoc(messages, fee, "coreum-1", memo, accountNumber, sequence);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFFcEIsUUFBUSxFQUVSLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIscUJBQXFCLEVBRXJCLGNBQWMsRUFDZCxjQUFjLEdBRWYsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBSUwsUUFBUSxHQUNULE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0QsT0FBTyxFQUE4QixhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsSUFBSSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBWSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQnRELElBQUksYUFBYSxHQUEyQztJQUMxRCxHQUFHLG9CQUFv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