import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClassDefinition } from "./nft";
import { Params } from "./params";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** GenesisState defines the nftasset module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** class_definitions keep the non-fungible token class definitions state */
    classDefinitions: ClassDefinition[];
    frozenNfts: FrozenNFT[];
    whitelistedNftAccounts: WhitelistedNFTAccounts[];
    burntNfts: BurntNFT[];
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
export interface BurntNFT {
    classID: string;
    nftIDs: string[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const FrozenNFT: {
    encode(message: FrozenNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FrozenNFT;
    fromJSON(object: any): FrozenNFT;
    toJSON(message: FrozenNFT): unknown;
    create<I extends Exact<DeepPartial<FrozenNFT>, I>>(base?: I): FrozenNFT;
    fromPartial<I extends Exact<DeepPartial<FrozenNFT>, I>>(object: I): FrozenNFT;
};
export declare const WhitelistedNFTAccounts: {
    encode(message: WhitelistedNFTAccounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistedNFTAccounts;
    fromJSON(object: any): WhitelistedNFTAccounts;
    toJSON(message: WhitelistedNFTAccounts): unknown;
    create<I extends Exact<DeepPartial<WhitelistedNFTAccounts>, I>>(base?: I): WhitelistedNFTAccounts;
    fromPartial<I extends Exact<DeepPartial<WhitelistedNFTAccounts>, I>>(object: I): WhitelistedNFTAccounts;
};
export declare const BurntNFT: {
    encode(message: BurntNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurntNFT;
    fromJSON(object: any): BurntNFT;
    toJSON(message: BurntNFT): unknown;
    create<I extends Exact<DeepPartial<BurntNFT>, I>>(base?: I): BurntNFT;
    fromPartial<I extends Exact<DeepPartial<BurntNFT>, I>>(object: I): BurntNFT;
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
