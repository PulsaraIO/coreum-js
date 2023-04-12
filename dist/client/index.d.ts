import { DeliverTxResponse, SigningStargateClient, StargateClient, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { MantleModes, CoreumQueryClient } from "../types/core";
import { WalletMethods } from "../types";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import EventEmitter from "eventemitter3";
interface MantleProps {
    client: StargateClient | SigningStargateClient;
    wsClient: WebsocketClient;
    tmClient: Tendermint34Client;
    denom: string;
    mode: MantleModes;
    wallet?: OfflineDirectSigner;
    gasLimit?: number;
    developer_mode?: MantleModes.TESTNET | MantleModes.DEVNET;
    node: string;
}
interface ConnectOptions {
    signer?: string;
    gasLimit?: number;
    developer_mode?: MantleModes.TESTNET | MantleModes.DEVNET;
    broadcastTimeoutMs?: number;
    broadcastPollIntervalMs?: number;
    registry?: ReadonlyArray<[string, GeneratedType]>;
}
declare class Mantle {
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
    constructor(options: MantleProps);
    setGasLimit(limit: number): void;
    getGasLimit(): number;
    getQueryClients(): CoreumQueryClient;
    getStargate(): StargateClient | SigningStargateClient;
    getWsClient(): WebsocketClient;
    connectWallet(method: WalletMethods, data?: {
        mnemonic: string;
    }): Promise<void>;
    setMnemonicAccount(mnemonic: string): Promise<void>;
    getAddress(): Promise<string>;
    submit(messages: EncodeObject[], options?: {
        memo?: string;
        submit?: boolean;
    }): Promise<TxRaw | DeliverTxResponse>;
    getFee(msgs: EncodeObject[]): Promise<StdFee>;
    subscribeToEvent(event: any): Promise<{
        events: EventEmitter<string | symbol, any>;
        unsubscribe: () => void;
    }>;
    private _getGasPrice;
    private _switchToSigningClient;
    private _connectCosmostation;
}
export default Mantle;
