import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
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
export interface EventClassFrozen {
    classId: string;
    account: string;
}
export interface EventClassUnfrozen {
    classId: string;
    account: string;
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
export interface EventAddedToClassWhitelist {
    classId: string;
    account: string;
}
export interface EventRemovedFromClassWhitelist {
    classId: string;
    account: string;
}
export declare const EventClassIssued: MessageFns<EventClassIssued>;
export declare const EventFrozen: MessageFns<EventFrozen>;
export declare const EventUnfrozen: MessageFns<EventUnfrozen>;
export declare const EventClassFrozen: MessageFns<EventClassFrozen>;
export declare const EventClassUnfrozen: MessageFns<EventClassUnfrozen>;
export declare const EventAddedToWhitelist: MessageFns<EventAddedToWhitelist>;
export declare const EventRemovedFromWhitelist: MessageFns<EventRemovedFromWhitelist>;
export declare const EventAddedToClassWhitelist: MessageFns<EventAddedToClassWhitelist>;
export declare const EventRemovedFromClassWhitelist: MessageFns<EventRemovedFromClassWhitelist>;
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
