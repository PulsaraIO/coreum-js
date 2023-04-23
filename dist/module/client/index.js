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
        const authBytes = makeAuthInfoBytes([{ pubkey: pubkey.value, sequence }], fee.amount, Number(fee.gas), undefined, undefined);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFFcEIsUUFBUSxFQUVSLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIscUJBQXFCLEVBRXJCLGNBQWMsRUFDZCxjQUFjLEdBRWYsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBSUwsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RCxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sWUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBc0IzRCxJQUFJLGFBQWEsR0FBMkM7SUFDMUQsR0FBRyxvQkFBb0I7SUFDdkIsR0FBRyxjQUFjO0NBQ2xCLENBQUM7QUFFRixNQUFNLE9BQU8sTUFBTTtJQUNqQixhQUFhO0lBQ0wsU0FBUyxHQUFXLFFBQVEsQ0FBQztJQUM3QixLQUFLLENBQVM7SUFDZCxPQUFPLENBQXlDO0lBQ2hELE9BQU8sQ0FBa0M7SUFDekMsY0FBYyxHQUFXLENBQUMsQ0FBQztJQUNuQyxVQUFVO0lBQ0YsU0FBUyxDQUFpQjtJQUMxQixVQUFVLENBQW9CO0lBQzlCLFNBQVMsQ0FBcUI7SUFDOUIsWUFBWSxDQUFvQjtJQUNoQyxTQUFTLENBQWtCO0lBRW5DLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQVksRUFBRSxPQUF1QjtRQUN4RCxzRUFBc0U7UUFDdEUscUVBQXFFO1FBRXJFLElBQUksT0FBTyxFQUFFLFFBQVE7WUFDbkIsYUFBYSxHQUFHLENBQUMsR0FBRyxhQUFhLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsTUFBTSxlQUFlLEdBQWlDO1lBQ3BELHVCQUF1QixFQUFFLE9BQU8sRUFBRSx1QkFBdUI7WUFDekQsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQjtZQUMvQyxRQUFRO1NBQ1QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxNQUFNO1lBQzVCLENBQUMsQ0FBQyxNQUFNLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDbEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVkLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVyRSxNQUFNLE1BQU0sR0FBRyxNQUFNO1lBQ25CLENBQUMsQ0FBQyxNQUFNLHFCQUFxQixDQUFDLGdCQUFnQixDQUMxQyxRQUFRLEVBQ1IsTUFBTSxFQUNOLGVBQWUsQ0FDaEI7WUFDSCxDQUFDLENBQUMsTUFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUMvQixDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWQsT0FBTyxJQUFJLE1BQU0sQ0FBQztZQUNoQixJQUFJO1lBQ0osUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLFFBQVE7WUFDUixNQUFNO1lBQ04sUUFBUTtZQUNSLE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBc0IsT0FBb0I7UUFDeEMsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FDNUMsT0FBTyxDQUFDLFFBQVEsRUFDaEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsa0JBQWtCLENBQ25CLENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFFMUIsSUFBSSxPQUFPLEVBQUUsUUFBUTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN6RCxJQUFJLE9BQU8sRUFBRSxNQUFNO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3JELENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsV0FBVyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQ2xCLE1BQWMsRUFDZCxRQUF3QixFQUN4QixHQUFXLEVBQ1gsSUFBSSxHQUFHLEVBQUU7UUFFVCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsTUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQ2pDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUNwQyxHQUFHLENBQUMsTUFBTSxFQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ2YsU0FBUyxFQUNULFNBQVMsQ0FDVixDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDN0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUN2QyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUN6QixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixhQUFhLENBQ2QsQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQWM7UUFDNUIsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBcUIsRUFBRSxJQUEyQjtRQUNwRSxRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssYUFBYSxDQUFDLFFBQVE7Z0JBQ3pCLElBQUksSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDbEIsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3REO2dCQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUNoRSxLQUFLLGFBQWEsQ0FBQyxZQUFZO2dCQUM3QixNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNyRCxNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsS0FBSztnQkFDdEIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRXZFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQ1YsUUFBd0IsRUFDeEIsT0FBNkM7UUFFN0MsSUFBSTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDZixNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDO1lBRXhFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztZQUV4QixJQUFJLE9BQU8sRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDO2dCQUNuQyxZQUFZLEdBQUcsT0FBTyxFQUFFLE1BQWlCLENBQUM7WUFFNUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBMkIsQ0FBQztZQUVsRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVDLElBQUksWUFBWSxFQUFFO2dCQUNoQixPQUFPLE1BQU0sYUFBYSxDQUFDLGdCQUFnQixDQUN6QyxNQUFNLEVBQ04sUUFBUSxFQUNSLEdBQUcsRUFDSCxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FDcEIsQ0FBQzthQUNIO1lBRUQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxJQUFJLENBQzdCLE1BQU0sRUFDTixRQUFRLEVBQ1IsR0FBRyxFQUNILE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxDQUNwQixDQUFDO1NBQ0g7UUFBQyxPQUFPLENBQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTTtnQkFDSixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxRQUFRO2dCQUM5QixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUNWLElBQW9CLEVBQ3BCLE9BQW9CO1FBRXBCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQTJCLENBQUM7UUFDbEUsTUFBTSxNQUFNLEdBQUcsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFM0MsSUFBSSxLQUFhLENBQUM7UUFFbEIsSUFBSTtZQUNGLEtBQUs7Z0JBQ0gsT0FBTyxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekU7UUFBQyxPQUFPLENBQU0sRUFBRTtZQUNmLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDakI7UUFFRCxJQUFJLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BELE1BQU07Z0JBQ0osT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQzthQUMvRCxDQUFDO1FBRUosT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLEdBQUcsRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFVO1FBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTO1lBQzlCLE1BQU07Z0JBQ0osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDO2FBQ3BELENBQUM7UUFFSixNQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5DLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ25DLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLFdBQVc7WUFDbkIsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ3ZCLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7U0FDekIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsQ0FBTTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDbEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO29CQUNaLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pELENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxLQUFLLENBQUMsR0FBRztnQkFDUCxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELFFBQVE7Z0JBQ04sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO29CQUNwQyxLQUFLO2lCQUNOLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsT0FBTztZQUNMLE1BQU0sRUFBRSxPQUFPO1lBQ2YsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCO0lBQ1YsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFFBQWdCO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSwwQkFBMEIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxNQUFNLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTyxLQUFLLENBQUMsWUFBWTtRQUN4QixNQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUMvQix5Q0FBeUM7UUFDekMsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sV0FBVyxHQUFHLDJCQUEyQixDQUM3QyxjQUFjLENBQUMsV0FBVyxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQ3pDLENBQUM7UUFDRixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQztRQUV2RSxNQUFNLGVBQWUsR0FBRywyQkFBMkIsQ0FDakQsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxJQUFJLEVBQUUsQ0FDcEQsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pCLElBQUksUUFBUSxHQUFHLGVBQWUsRUFBRTtZQUM5QixRQUFRLEdBQUcsZUFBZSxDQUFDO1NBQzVCO1FBRUQsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUN4QixHQUFHLFFBQVEsR0FBRyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FDeEQsQ0FBQztJQUNKLENBQUM7SUFFTyxLQUFLLENBQUMsc0JBQXNCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FDekQsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsT0FBOEIsRUFDbkMsRUFBRSxRQUFRLEVBQUUsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFTyxLQUFLLENBQUMsb0JBQW9CLEtBQUksQ0FBQztDQUN4QyJ9