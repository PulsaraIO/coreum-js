import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** Feature defines possible features of fungible token. */
export declare enum Feature {
    minting = 0,
    burning = 1,
    freezing = 2,
    whitelisting = 3,
    ibc = 4,
    block_smart_contracts = 5,
    clawback = 6,
    extension = 7,
    dex_block = 8,
    dex_whitelisted_denoms = 9,
    dex_order_cancellation = 10,
    dex_unified_ref_amount_change = 11,
    UNRECOGNIZED = -1
}
export declare function featureFromJSON(object: any): Feature;
export declare function featureToJSON(object: Feature): string;
/** Definition defines the fungible token settings to store. */
export interface Definition {
    denom: string;
    issuer: string;
    features: Feature[];
    /**
     * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * burn_amount. This value will be burnt on top of the send amount.
     */
    burnRate: string;
    /**
     * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * amount sent to the token admin account.
     */
    sendCommissionRate: string;
    version: number;
    uri: string;
    uriHash: string;
    extensionCwAddress: string;
    admin: string;
}
/** Token is a full representation of the fungible token. */
export interface Token {
    denom: string;
    issuer: string;
    symbol: string;
    subunit: string;
    precision: number;
    description: string;
    globallyFrozen: boolean;
    features: Feature[];
    /**
     * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * burn_amount. This value will be burnt on top of the send amount.
     */
    burnRate: string;
    /**
     * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * amount sent to the token admin account.
     */
    sendCommissionRate: string;
    version: number;
    uri: string;
    uriHash: string;
    extensionCwAddress: string;
    admin: string;
    dexSettings: DEXSettings | undefined;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1 {
    denom: string;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1Status {
    ibcEnabled: boolean;
    startTime: Date | undefined;
    endTime: Date | undefined;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatuses {
    v1: TokenUpgradeV1Status | undefined;
}
/** DEXSettings defines the token settings of the dex. */
export interface DEXSettings {
    /** unified_ref_amount is the approximate amount you need to buy 1USD, used to define the price tick size */
    unifiedRefAmount: string;
    /** whitelisted_denoms is the list of denoms to trade with. */
    whitelistedDenoms: string[];
}
export declare const Definition: MessageFns<Definition>;
export declare const Token: MessageFns<Token>;
export declare const DelayedTokenUpgradeV1: MessageFns<DelayedTokenUpgradeV1>;
export declare const TokenUpgradeV1Status: MessageFns<TokenUpgradeV1Status>;
export declare const TokenUpgradeStatuses: MessageFns<TokenUpgradeStatuses>;
export declare const DEXSettings: MessageFns<DEXSettings>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
