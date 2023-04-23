import { DeliverTxResponse, SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { MantleQueryClient } from "../types/core";
import { FeeCalculation, FeeOptions, WalletMethods } from "../types";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import EventEmitter from "eventemitter3";
interface MantleProps {
    client: StargateClient | SigningStargateClient;
    wsClient?: WebsocketClient;
    tmClient: Tendermint34Client;
    wallet?: OfflineDirectSigner;
    gasLimit?: number;
    node: string;
}
interface ConnectOptions {
    signer?: string;
    gasLimit?: number;
    withWS?: boolean;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    registry?: ReadonlyArray<[string, GeneratedType]>;
}
export declare class Mantle {
    private _gasLimit;
    private _node;
    private _client;
    private _wallet;
    private _eventSequence;
    private _feeModel;
    private _rpcClient;
    private _tmClient;
    private _queryClient;
    private _wsClient;
    static connect(node: string, options: ConnectOptions): Promise<Mantle>;
    protected constructor(options: MantleProps);
    setGasLimit(limit: number): void;
    getGasLimit(): number;
    getQueryClients(): MantleQueryClient;
    getStargate(): StargateClient | SigningStargateClient;
    getWsClient(): WebsocketClient;
    prepareSignDoc(): Promise<void>;
    connectWallet(method: WalletMethods, data?: {
        mnemonic: string;
    }): Promise<void>;
    getAddress(): Promise<string>;
    submit(messages: EncodeObject[], options?: {
        memo?: string;
        submit?: boolean;
    }): Promise<TxRaw | DeliverTxResponse>;
    getFee(msgs: EncodeObject[], options?: FeeOptions): Promise<FeeCalculation>;
    subscribeToEvent(event: any): Promise<{
        events: EventEmitter<string | symbol, any>;
        unsubscribe: () => void;
    }>;
    private _setMnemonicAccount;
    private _getGasPrice;
    private _switchToSigningClient;
    private _connectCosmostation;
}
export {};
