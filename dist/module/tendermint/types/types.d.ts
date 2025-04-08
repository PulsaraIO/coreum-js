import _m0 from "protobufjs/minimal";
import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { ValidatorSet } from "./validator";
export declare const protobufPackage = "tendermint.types";
/** BlockIdFlag indicates which BlcokID the signature is for */
export declare enum BlockIDFlag {
    BLOCK_ID_FLAG_UNKNOWN = 0,
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof | undefined;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader: PartSetHeader | undefined;
}
/** Header defines the structure of a block header. */
export interface Header {
    /** basic block info */
    version: Consensus | undefined;
    chainId: string;
    height: number;
    time: Date | undefined;
    /** prev block info */
    lastBlockId: BlockID | undefined;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    /** transactions */
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    /** root hash of all results from the txs from the previous block */
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: number;
    round: number;
    /** zero if vote is nil. */
    blockId: BlockID | undefined;
    timestamp: Date | undefined;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: number;
    round: number;
    blockId: BlockID | undefined;
    signatures: CommitSig[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: number;
    round: number;
    polRound: number;
    blockId: BlockID | undefined;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface SignedHeader {
    header: Header | undefined;
    commit: Commit | undefined;
}
export interface LightBlock {
    signedHeader: SignedHeader | undefined;
    validatorSet: ValidatorSet | undefined;
}
export interface BlockMeta {
    blockId: BlockID | undefined;
    blockSize: number;
    header: Header | undefined;
    numTxs: number;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof: Proof | undefined;
}
export declare const PartSetHeader: {
    encode(message: PartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader;
    fromJSON(object: any): PartSetHeader;
    toJSON(message: PartSetHeader): unknown;
    create<I extends Exact<DeepPartial<PartSetHeader>, I>>(base?: I): PartSetHeader;
    fromPartial<I extends Exact<DeepPartial<PartSetHeader>, I>>(object: I): PartSetHeader;
};
export declare const Part: {
    encode(message: Part, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Part;
    fromJSON(object: any): Part;
    toJSON(message: Part): unknown;
    create<I extends Exact<DeepPartial<Part>, I>>(base?: I): Part;
    fromPartial<I extends Exact<DeepPartial<Part>, I>>(object: I): Part;
};
export declare const BlockID: {
    encode(message: BlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockID;
    fromJSON(object: any): BlockID;
    toJSON(message: BlockID): unknown;
    create<I extends Exact<DeepPartial<BlockID>, I>>(base?: I): BlockID;
    fromPartial<I extends Exact<DeepPartial<BlockID>, I>>(object: I): BlockID;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    create<I extends Exact<DeepPartial<Header>, I>>(base?: I): Header;
    fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header;
};
export declare const Data: {
    encode(message: Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Data;
    fromJSON(object: any): Data;
    toJSON(message: Data): unknown;
    create<I extends Exact<DeepPartial<Data>, I>>(base?: I): Data;
    fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    create<I extends Exact<DeepPartial<Vote>, I>>(base?: I): Vote;
    fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote;
};
export declare const Commit: {
    encode(message: Commit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commit;
    fromJSON(object: any): Commit;
    toJSON(message: Commit): unknown;
    create<I extends Exact<DeepPartial<Commit>, I>>(base?: I): Commit;
    fromPartial<I extends Exact<DeepPartial<Commit>, I>>(object: I): Commit;
};
export declare const CommitSig: {
    encode(message: CommitSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig;
    fromJSON(object: any): CommitSig;
    toJSON(message: CommitSig): unknown;
    create<I extends Exact<DeepPartial<CommitSig>, I>>(base?: I): CommitSig;
    fromPartial<I extends Exact<DeepPartial<CommitSig>, I>>(object: I): CommitSig;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    create<I extends Exact<DeepPartial<Proposal>, I>>(base?: I): Proposal;
    fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal;
};
export declare const SignedHeader: {
    encode(message: SignedHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeader;
    fromJSON(object: any): SignedHeader;
    toJSON(message: SignedHeader): unknown;
    create<I extends Exact<DeepPartial<SignedHeader>, I>>(base?: I): SignedHeader;
    fromPartial<I extends Exact<DeepPartial<SignedHeader>, I>>(object: I): SignedHeader;
};
export declare const LightBlock: {
    encode(message: LightBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightBlock;
    fromJSON(object: any): LightBlock;
    toJSON(message: LightBlock): unknown;
    create<I extends Exact<DeepPartial<LightBlock>, I>>(base?: I): LightBlock;
    fromPartial<I extends Exact<DeepPartial<LightBlock>, I>>(object: I): LightBlock;
};
export declare const BlockMeta: {
    encode(message: BlockMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta;
    fromJSON(object: any): BlockMeta;
    toJSON(message: BlockMeta): unknown;
    create<I extends Exact<DeepPartial<BlockMeta>, I>>(base?: I): BlockMeta;
    fromPartial<I extends Exact<DeepPartial<BlockMeta>, I>>(object: I): BlockMeta;
};
export declare const TxProof: {
    encode(message: TxProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxProof;
    fromJSON(object: any): TxProof;
    toJSON(message: TxProof): unknown;
    create<I extends Exact<DeepPartial<TxProof>, I>>(base?: I): TxProof;
    fromPartial<I extends Exact<DeepPartial<TxProof>, I>>(object: I): TxProof;
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
