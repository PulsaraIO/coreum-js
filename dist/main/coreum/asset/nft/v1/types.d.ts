import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** DataEditor defines possible data editors. */
export declare enum DataEditor {
    admin = 0,
    owner = 1,
    UNRECOGNIZED = -1
}
export declare function dataEditorFromJSON(object: any): DataEditor;
export declare function dataEditorToJSON(object: DataEditor): string;
/** DataBytes represents the immutable data. */
export interface DataBytes {
    Data: Uint8Array;
}
/** DataDynamicItem contains the updatable data and modification types. */
export interface DataDynamicItem {
    /** contains the set of the data editors, if empty no one can update. */
    editors: DataEditor[];
    data: Uint8Array;
}
/** DataDynamicIndexed contains the data and it's index in the DataDynamic. */
export interface DataDynamicIndexedItem {
    index: number;
    data: Uint8Array;
}
/** DataDynamic is dynamic data which contains the list of the items allowed to be modified base on their modification types. */
export interface DataDynamic {
    items: DataDynamicItem[];
}
export declare const DataBytes: MessageFns<DataBytes>;
export declare const DataDynamicItem: MessageFns<DataDynamicItem>;
export declare const DataDynamicIndexedItem: MessageFns<DataDynamicIndexedItem>;
export declare const DataDynamic: MessageFns<DataDynamic>;
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
