import { CoreumNetworkConfig } from "../types/coreum";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { ExtensionWallets, FeeCalculation, ClientQueryClient } from "..";
import { DeliverTxResponse } from "@cosmjs/stargate";
import EventEmitter from "eventemitter3";
interface WithExtensionOptions {
    withWS?: boolean;
}
interface WithMnemonicOptions {
    withWS?: boolean;
}
interface ClientProps {
    network?: string;
    custom_ws_endpoint?: string;
}
export declare class Client {
    private _tmClient;
    private _queryClient;
    private _wsClient;
    private _client;
    private _address;
    private _feeModel;
    private _eventSequence;
    private _custom_ws_endpoint;
    config: CoreumNetworkConfig;
    get queryClients(): ClientQueryClient;
    constructor(props?: ClientProps);
    disconnect(): void;
    get address(): string | undefined;
    /**
     * Initializes the connection to the Chain, without a signer. Just for querying purposes
     */
    connect(options?: {
        withWS?: boolean;
    }): Promise<void>;
    /**
     * Initializes the connection to the Chain, with the selected extension wallet as signer.
     *
     * @param extension Defines which wallet extension to use to initialize the client.
     * @param options Defines the options
     *
     * If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client
     */
    connectWithExtension(extension?: ExtensionWallets, options?: WithExtensionOptions): Promise<void>;
    /**
     * Initializes the connection to the Chain, using the Mnemonic words to create the Signer.
     *
     * @param mnemonic Defines the Mnemonic words to use to create the signer
     * @param options Defines the options
     *
     * If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client
     */
    connectWithMnemonic(mnemonic: string, options?: WithMnemonicOptions): Promise<void>;
    /**
     * Simulates the Transaction and returns the estimated gas for the transaction plus the gas price.
     *
     * @param msgs An array of messages for the transaction
     * @returns An Object that includes the following properties
     *  - fee: StdFee
     *  - gas_wanted: number
     */
    getTxFee(msgs: readonly EncodeObject[]): Promise<FeeCalculation>;
    /**
     *
     * @param msgs An array of messages for the Transaction
     * @param memo An arbitrary string to add as Memo for the transaction
     * @returns Response Object from the blockchain
     */
    sendTx(msgs: readonly EncodeObject[], memo?: string): Promise<DeliverTxResponse>;
    /**
     *
     * @param event String describing the event to subscribe to.
     * @returns A susbcription object with the next properties
     *  - events: EventEmitter
     *  - unsubscribe: Method to kill the subscription to the blockchain
     */
    subscribeToEvent(event: string): Promise<{
        events: EventEmitter<string | symbol, any>;
        stream: import("xstream").Stream<import("@cosmjs/tendermint-rpc/build/rpcclients").SubscriptionEvent>;
    }>;
    private _getGasPrice;
    private _isSigningClientInit;
    private _initTendermintClient;
    private _initQueryClient;
    private _initFeeModel;
    private _initWsClient;
    private _createClient;
    private _connectWithKplr;
    private _connectWithCosmostation;
    private _connectWithLeap;
    /**
     *
     * @returns A Registry of the Cosmos + Coreum Custom Messages.
     */
    static getRegistry(): Registry;
}
export {};
