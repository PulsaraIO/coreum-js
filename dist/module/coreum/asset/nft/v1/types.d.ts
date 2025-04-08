import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "coreum.asset.nft.v1";
export interface DataBytes {
    Data: Uint8Array;
}
export declare const DataBytes: {
    encode(message: DataBytes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataBytes;
    fromJSON(object: any): DataBytes;
    toJSON(message: DataBytes): unknown;
    create<I extends Exact<DeepPartial<DataBytes>, I>>(base?: I): DataBytes;
    fromPartial<I extends Exact<DeepPartial<DataBytes>, I>>(object: I): DataBytes;
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
