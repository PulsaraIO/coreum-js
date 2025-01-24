import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DEXSettings, Feature } from "./token";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** EventIssued is emitted on MsgIssue. */
export interface EventIssued {
    denom: string;
    issuer: string;
    symbol: string;
    subunit: string;
    precision: number;
    initialAmount: string;
    description: string;
    features: Feature[];
    burnRate: string;
    sendCommissionRate: string;
    uri: string;
    uriHash: string;
    admin: string;
    dexSettings: DEXSettings | undefined;
}
export interface EventFrozenAmountChanged {
    account: string;
    denom: string;
    previousAmount: string;
    currentAmount: string;
}
export interface EventAmountClawedBack {
    account: string;
    denom: string;
    amount: string;
}
export interface EventWhitelistedAmountChanged {
    account: string;
    denom: string;
    previousAmount: string;
    currentAmount: string;
}
export interface EventDEXLockedAmountChanged {
    account: string;
    denom: string;
    previousAmount: string;
    currentAmount: string;
}
export interface EventDEXExpectedToReceiveAmountChanged {
    account: string;
    denom: string;
    previousAmount: string;
    currentAmount: string;
}
export interface EventAdminTransferred {
    denom: string;
    previousAdmin: string;
    currentAdmin: string;
}
export interface EventAdminCleared {
    denom: string;
    previousAdmin: string;
}
export interface EventDEXSettingsChanged {
    previousSettings: DEXSettings | undefined;
    newSettings: DEXSettings | undefined;
}
export declare const EventIssued: MessageFns<EventIssued>;
export declare const EventFrozenAmountChanged: MessageFns<EventFrozenAmountChanged>;
export declare const EventAmountClawedBack: MessageFns<EventAmountClawedBack>;
export declare const EventWhitelistedAmountChanged: MessageFns<EventWhitelistedAmountChanged>;
export declare const EventDEXLockedAmountChanged: MessageFns<EventDEXLockedAmountChanged>;
export declare const EventDEXExpectedToReceiveAmountChanged: MessageFns<EventDEXExpectedToReceiveAmountChanged>;
export declare const EventAdminTransferred: MessageFns<EventAdminTransferred>;
export declare const EventAdminCleared: MessageFns<EventAdminCleared>;
export declare const EventDEXSettingsChanged: MessageFns<EventDEXSettingsChanged>;
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
