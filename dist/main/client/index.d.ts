import { CoreumNetwork, CoreumNetworkConfig } from "../types/coreum";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { FeeCalculation, MantleQueryClient } from "..";
import EventEmitter from "eventemitter3";
declare enum ExtensionWallets {
    KEPLR = "keplr",
    COSMOSTATION = "cosmostation",
    LEAP = "leap"
}
interface WithExtensionOptions {
    withWS?: boolean;
}
interface WithMnemonicOptions {
    withWS?: boolean;
}
interface MantleProps {
    network?: CoreumNetwork;
}
export declare class Mantle {
    private _tmClient;
    private _queryClient;
    private _wsClient;
    private _client;
    private _address;
    private _feeModel;
    private _eventSequence;
    config: CoreumNetworkConfig;
    get queryClients(): MantleQueryClient;
    constructor(props?: MantleProps);
    disconnect(): void;
    connect(): Promise<void>;
    connectWithExtension(client?: ExtensionWallets, options?: WithExtensionOptions): Promise<void>;
    connectWithMnemonic(mnemonic: string, options?: WithMnemonicOptions): Promise<void>;
    getTxFee(msgs: readonly EncodeObject[]): Promise<FeeCalculation>;
    sendTx(msgs: readonly EncodeObject[], memo?: string): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
    subscribeToEvent(event: any): Promise<{
        events: EventEmitter<string | symbol, any>;
        unsubscribe: () => void;
    }>;
    private _getGasPrice;
    private _isSigningClientInit;
    private _initTendermintClient;
    private _initQueryClient;
    private _initFeeModel;
    private _initWsClient;
    private _connectWithKplr;
    private _connectWithCosmostation;
    private _connectWithLeap;
    static getRegistry(): Registry;
}
export {};
