import Long from "long";
import _m0 from "protobufjs/minimal";
import { Class, NFT } from "./nft";
export declare const protobufPackage = "cosmos.nft.v1beta1";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    /** class defines the class of the nft type. */
    classes: Class[];
    entries: Entry[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFT[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const Entry: {
    encode(message: Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entry;
    fromJSON(object: any): Entry;
    toJSON(message: Entry): unknown;
    create<I extends Exact<DeepPartial<Entry>, I>>(base?: I): Entry;
    fromPartial<I extends Exact<DeepPartial<Entry>, I>>(object: I): Entry;
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
