import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
export declare const protobufPackage = "tendermint.types";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block: BlockParams | undefined;
    evidence: EvidenceParams | undefined;
    validator: ValidatorParams | undefined;
    version: VersionParams | undefined;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    maxBytes: number;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: number;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: number;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration: Duration | undefined;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    maxBytes: number;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pubKeyTypes: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app: number;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: number;
    blockMaxGas: number;
}
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    create<I extends Exact<DeepPartial<ConsensusParams>, I>>(base?: I): ConsensusParams;
    fromPartial<I extends Exact<DeepPartial<ConsensusParams>, I>>(object: I): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    create<I extends Exact<DeepPartial<BlockParams>, I>>(base?: I): BlockParams;
    fromPartial<I extends Exact<DeepPartial<BlockParams>, I>>(object: I): BlockParams;
};
export declare const EvidenceParams: {
    encode(message: EvidenceParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams;
    fromJSON(object: any): EvidenceParams;
    toJSON(message: EvidenceParams): unknown;
    create<I extends Exact<DeepPartial<EvidenceParams>, I>>(base?: I): EvidenceParams;
    fromPartial<I extends Exact<DeepPartial<EvidenceParams>, I>>(object: I): EvidenceParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams;
    fromJSON(object: any): ValidatorParams;
    toJSON(message: ValidatorParams): unknown;
    create<I extends Exact<DeepPartial<ValidatorParams>, I>>(base?: I): ValidatorParams;
    fromPartial<I extends Exact<DeepPartial<ValidatorParams>, I>>(object: I): ValidatorParams;
};
export declare const VersionParams: {
    encode(message: VersionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams;
    fromJSON(object: any): VersionParams;
    toJSON(message: VersionParams): unknown;
    create<I extends Exact<DeepPartial<VersionParams>, I>>(base?: I): VersionParams;
    fromPartial<I extends Exact<DeepPartial<VersionParams>, I>>(object: I): VersionParams;
};
export declare const HashedParams: {
    encode(message: HashedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams;
    fromJSON(object: any): HashedParams;
    toJSON(message: HashedParams): unknown;
    create<I extends Exact<DeepPartial<HashedParams>, I>>(base?: I): HashedParams;
    fromPartial<I extends Exact<DeepPartial<HashedParams>, I>>(object: I): HashedParams;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
