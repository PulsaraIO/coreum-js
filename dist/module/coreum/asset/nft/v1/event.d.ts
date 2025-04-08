import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClassFeature } from "./nft";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** EventClassIssued is emitted on MsgIssueClass. */
export interface EventClassIssued {
    id: string;
    issuer: string;
    symbol: string;
    name: string;
    description: string;
    uri: string;
    uriHash: string;
    features: ClassFeature[];
    royaltyRate: string;
}
export interface EventFrozen {
    classId: string;
    id: string;
    owner: string;
}
export interface EventUnfrozen {
    classId: string;
    id: string;
    owner: string;
}
export interface EventAddedToWhitelist {
    classId: string;
    id: string;
    account: string;
}
export interface EventRemovedFromWhitelist {
    classId: string;
    id: string;
    account: string;
}
export declare const EventClassIssued: {
    encode(message: EventClassIssued, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventClassIssued;
    fromJSON(object: any): EventClassIssued;
    toJSON(message: EventClassIssued): unknown;
    create<I extends Exact<DeepPartial<EventClassIssued>, I>>(base?: I): EventClassIssued;
    fromPartial<I extends Exact<DeepPartial<EventClassIssued>, I>>(object: I): EventClassIssued;
};
export declare const EventFrozen: {
    encode(message: EventFrozen, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFrozen;
    fromJSON(object: any): EventFrozen;
    toJSON(message: EventFrozen): unknown;
    create<I extends Exact<DeepPartial<EventFrozen>, I>>(base?: I): EventFrozen;
    fromPartial<I extends Exact<DeepPartial<EventFrozen>, I>>(object: I): EventFrozen;
};
export declare const EventUnfrozen: {
    encode(message: EventUnfrozen, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUnfrozen;
    fromJSON(object: any): EventUnfrozen;
    toJSON(message: EventUnfrozen): unknown;
    create<I extends Exact<DeepPartial<EventUnfrozen>, I>>(base?: I): EventUnfrozen;
    fromPartial<I extends Exact<DeepPartial<EventUnfrozen>, I>>(object: I): EventUnfrozen;
};
export declare const EventAddedToWhitelist: {
    encode(message: EventAddedToWhitelist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAddedToWhitelist;
    fromJSON(object: any): EventAddedToWhitelist;
    toJSON(message: EventAddedToWhitelist): unknown;
    create<I extends Exact<DeepPartial<EventAddedToWhitelist>, I>>(base?: I): EventAddedToWhitelist;
    fromPartial<I extends Exact<DeepPartial<EventAddedToWhitelist>, I>>(object: I): EventAddedToWhitelist;
};
export declare const EventRemovedFromWhitelist: {
    encode(message: EventRemovedFromWhitelist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRemovedFromWhitelist;
    fromJSON(object: any): EventRemovedFromWhitelist;
    toJSON(message: EventRemovedFromWhitelist): unknown;
    create<I extends Exact<DeepPartial<EventRemovedFromWhitelist>, I>>(base?: I): EventRemovedFromWhitelist;
    fromPartial<I extends Exact<DeepPartial<EventRemovedFromWhitelist>, I>>(object: I): EventRemovedFromWhitelist;
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
