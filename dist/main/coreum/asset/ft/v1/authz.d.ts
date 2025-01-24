import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../../cosmos/base/coin";
export declare const protobufPackage = "coreum.asset.ft.v1";
/**
 * MintAuthorization allows the grantee to mint up to mint_limit coin from
 * the granter's account.
 */
export interface MintAuthorization {
    mintLimit: Coin[];
}
/**
 * BurnAuthorization allows the grantee to burn up to burn_limit coin from
 * the granter's account.
 */
export interface BurnAuthorization {
    burnLimit: Coin[];
}
export declare const MintAuthorization: MessageFns<MintAuthorization>;
export declare const BurnAuthorization: MessageFns<BurnAuthorization>;
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
