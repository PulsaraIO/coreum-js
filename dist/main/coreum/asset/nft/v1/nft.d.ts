import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Any } from "cosmjs-types/google/protobuf/any";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** ClassFeature defines possible features of non-fungible token class. */
export declare enum ClassFeature {
    burning = 0,
    freezing = 1,
    whitelisting = 2,
    disable_sending = 3,
    soulbound = 4,
    UNRECOGNIZED = -1
}
export declare function classFeatureFromJSON(object: any): ClassFeature;
export declare function classFeatureToJSON(object: ClassFeature): string;
/** ClassDefinition defines the non-fungible token class settings to store. */
export interface ClassDefinition {
    id: string;
    issuer: string;
    features: ClassFeature[];
    /**
     * royalty_rate is a number between 0 and 1,which will be used in coreum native DEX.
     * whenever an NFT this class is traded on the DEX, the traded amount will be multiplied by this value
     * that will be transferred to the issuer of the NFT.
     */
    royaltyRate: string;
}
/** Class is a full representation of the non-fungible token class. */
export interface Class {
    id: string;
    issuer: string;
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uriHash: string;
    data: Any | undefined;
    features: ClassFeature[];
    /**
     * royalty_rate is a number between 0 and 1,which will be used in coreum native DEX.
     * whenever an NFT this class is traded on the DEX, the traded amount will be multiplied by this value
     * that will be transferred to the issuer of the NFT.
     */
    royaltyRate: string;
}
export declare const ClassDefinition: MessageFns<ClassDefinition>;
export declare const Class: MessageFns<Class>;
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
