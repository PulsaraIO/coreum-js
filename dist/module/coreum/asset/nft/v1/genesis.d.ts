import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ClassDefinition } from "./nft";
import { Params } from "./params";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** GenesisState defines the nftasset module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    /** class_definitions keep the non-fungible token class definitions state */
    classDefinitions: ClassDefinition[];
    frozenNfts: FrozenNFT[];
    whitelistedNftAccounts: WhitelistedNFTAccounts[];
    burntNfts: BurntNFT[];
    classWhitelistedAccounts: ClassWhitelistedAccounts[];
    classFrozenAccounts: ClassFrozenAccounts[];
}
export interface FrozenNFT {
    classID: string;
    nftIDs: string[];
}
export interface WhitelistedNFTAccounts {
    classID: string;
    nftID: string;
    accounts: string[];
}
export interface ClassWhitelistedAccounts {
    classID: string;
    accounts: string[];
}
export interface ClassFrozenAccounts {
    classID: string;
    accounts: string[];
}
export interface BurntNFT {
    classID: string;
    nftIDs: string[];
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const FrozenNFT: MessageFns<FrozenNFT>;
export declare const WhitelistedNFTAccounts: MessageFns<WhitelistedNFTAccounts>;
export declare const ClassWhitelistedAccounts: MessageFns<ClassWhitelistedAccounts>;
export declare const ClassFrozenAccounts: MessageFns<ClassFrozenAccounts>;
export declare const BurntNFT: MessageFns<BurntNFT>;
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
