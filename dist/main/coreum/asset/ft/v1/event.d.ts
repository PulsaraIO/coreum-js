import Long from "long";
import _m0 from "protobufjs/minimal";
import { Feature } from "./token";
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
}
export interface EventFrozenAmountChanged {
    account: string;
    denom: string;
    previousAmount: string;
    currentAmount: string;
}
export interface EventWhitelistedAmountChanged {
    account: string;
    denom: string;
    previousAmount: string;
    currentAmount: string;
}
export declare const EventIssued: {
    encode(message: EventIssued, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventIssued;
    fromJSON(object: any): EventIssued;
    toJSON(message: EventIssued): unknown;
    create<I extends Exact<DeepPartial<EventIssued>, I>>(base?: I): EventIssued;
    fromPartial<I extends Exact<DeepPartial<EventIssued>, I>>(object: I): EventIssued;
};
export declare const EventFrozenAmountChanged: {
    encode(message: EventFrozenAmountChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFrozenAmountChanged;
    fromJSON(object: any): EventFrozenAmountChanged;
    toJSON(message: EventFrozenAmountChanged): unknown;
    create<I extends Exact<DeepPartial<EventFrozenAmountChanged>, I>>(base?: I): EventFrozenAmountChanged;
    fromPartial<I extends Exact<DeepPartial<EventFrozenAmountChanged>, I>>(object: I): EventFrozenAmountChanged;
};
export declare const EventWhitelistedAmountChanged: {
    encode(message: EventWhitelistedAmountChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWhitelistedAmountChanged;
    fromJSON(object: any): EventWhitelistedAmountChanged;
    toJSON(message: EventWhitelistedAmountChanged): unknown;
    create<I extends Exact<DeepPartial<EventWhitelistedAmountChanged>, I>>(base?: I): EventWhitelistedAmountChanged;
    fromPartial<I extends Exact<DeepPartial<EventWhitelistedAmountChanged>, I>>(object: I): EventWhitelistedAmountChanged;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
