import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
import { ProofOps } from "../crypto/proof";
import { ConsensusParams } from "../types/params";
import { Header } from "../types/types";
export declare const protobufPackage = "tendermint.abci";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum MisbehaviorType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare function misbehaviorTypeFromJSON(object: any): MisbehaviorType;
export declare function misbehaviorTypeToJSON(object: MisbehaviorType): string;
export interface Request {
    echo?: RequestEcho | undefined;
    flush?: RequestFlush | undefined;
    info?: RequestInfo | undefined;
    initChain?: RequestInitChain | undefined;
    query?: RequestQuery | undefined;
    beginBlock?: RequestBeginBlock | undefined;
    checkTx?: RequestCheckTx | undefined;
    deliverTx?: RequestDeliverTx | undefined;
    endBlock?: RequestEndBlock | undefined;
    commit?: RequestCommit | undefined;
    listSnapshots?: RequestListSnapshots | undefined;
    offerSnapshot?: RequestOfferSnapshot | undefined;
    loadSnapshotChunk?: RequestLoadSnapshotChunk | undefined;
    applySnapshotChunk?: RequestApplySnapshotChunk | undefined;
    prepareProposal?: RequestPrepareProposal | undefined;
    processProposal?: RequestProcessProposal | undefined;
}
export interface RequestEcho {
    message: string;
}
export interface RequestFlush {
}
export interface RequestInfo {
    version: string;
    blockVersion: number;
    p2pVersion: number;
    abciVersion: string;
}
export interface RequestInitChain {
    time: Date | undefined;
    chainId: string;
    consensusParams: ConsensusParams | undefined;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: number;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: number;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header: Header | undefined;
    lastCommitInfo: CommitInfo | undefined;
    byzantineValidators: Misbehavior[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: number;
}
export interface RequestCommit {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot: Snapshot | undefined;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: number;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestPrepareProposal {
    /** the modified transactions cannot exceed this size. */
    maxTxBytes: number;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     */
    txs: Uint8Array[];
    localLastCommit: ExtendedCommitInfo | undefined;
    misbehavior: Misbehavior[];
    height: number;
    time: Date | undefined;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the validator proposing the block. */
    proposerAddress: Uint8Array;
}
export interface RequestProcessProposal {
    txs: Uint8Array[];
    proposedLastCommit: CommitInfo | undefined;
    misbehavior: Misbehavior[];
    /** hash is the merkle root hash of the fields of the proposed block. */
    hash: Uint8Array;
    height: number;
    time: Date | undefined;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
export interface Response {
    exception?: ResponseException | undefined;
    echo?: ResponseEcho | undefined;
    flush?: ResponseFlush | undefined;
    info?: ResponseInfo | undefined;
    initChain?: ResponseInitChain | undefined;
    query?: ResponseQuery | undefined;
    beginBlock?: ResponseBeginBlock | undefined;
    checkTx?: ResponseCheckTx | undefined;
    deliverTx?: ResponseDeliverTx | undefined;
    endBlock?: ResponseEndBlock | undefined;
    commit?: ResponseCommit | undefined;
    listSnapshots?: ResponseListSnapshots | undefined;
    offerSnapshot?: ResponseOfferSnapshot | undefined;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk | undefined;
    applySnapshotChunk?: ResponseApplySnapshotChunk | undefined;
    prepareProposal?: ResponsePrepareProposal | undefined;
    processProposal?: ResponseProcessProposal | undefined;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: number;
    lastBlockHeight: number;
    lastBlockAppHash: Uint8Array;
}
export interface ResponseInitChain {
    consensusParams: ConsensusParams | undefined;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: number;
    key: Uint8Array;
    value: Uint8Array;
    proofOps: ProofOps | undefined;
    height: number;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: number;
    gasUsed: number;
    events: Event[];
    codespace: string;
    sender: string;
    priority: number;
    /**
     * mempool_error is set by CometBFT.
     * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
     */
    mempoolError: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: number;
    gasUsed: number;
    /** nondeterministic */
    events: Event[];
    codespace: string;
}
export interface ResponseEndBlock {
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates: ConsensusParams | undefined;
    events: Event[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retainHeight: number;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export interface ResponsePrepareProposal {
    txs: Uint8Array[];
}
export interface ResponseProcessProposal {
    status: ResponseProcessProposal_ProposalStatus;
}
export declare enum ResponseProcessProposal_ProposalStatus {
    UNKNOWN = 0,
    ACCEPT = 1,
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus;
export declare function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string;
export interface CommitInfo {
    round: number;
    votes: VoteInfo[];
}
export interface ExtendedCommitInfo {
    /** The round at which the block proposer decided in the previous height. */
    round: number;
    /**
     * List of validators' addresses in the last validator set with their voting
     * information, including vote extensions.
     */
    votes: ExtendedVoteInfo[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: number;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTx | undefined;
}
/** Validator */
export interface Validator {
    /** The first 20 bytes of SHA256(public key) */
    address: Uint8Array;
    /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
    power: number;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey: PublicKey | undefined;
    power: number;
}
/** VoteInfo */
export interface VoteInfo {
    validator: Validator | undefined;
    signedLastBlock: boolean;
}
export interface ExtendedVoteInfo {
    validator: Validator | undefined;
    signedLastBlock: boolean;
    /** Reserved for future use */
    voteExtension: Uint8Array;
}
export interface Misbehavior {
    type: MisbehaviorType;
    /** The offending validator */
    validator: Validator | undefined;
    /** The height when the offense occurred */
    height: number;
    /** The corresponding time where the offense occurred */
    time: Date | undefined;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: number;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: number;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request;
    fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): unknown;
    create<I extends Exact<DeepPartial<RequestEcho>, I>>(base?: I): RequestEcho;
    fromPartial<I extends Exact<DeepPartial<RequestEcho>, I>>(object: I): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromJSON(_: any): RequestFlush;
    toJSON(_: RequestFlush): unknown;
    create<I extends Exact<DeepPartial<RequestFlush>, I>>(base?: I): RequestFlush;
    fromPartial<I extends Exact<DeepPartial<RequestFlush>, I>>(_: I): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    create<I extends Exact<DeepPartial<RequestInfo>, I>>(base?: I): RequestInfo;
    fromPartial<I extends Exact<DeepPartial<RequestInfo>, I>>(object: I): RequestInfo;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): unknown;
    create<I extends Exact<DeepPartial<RequestInitChain>, I>>(base?: I): RequestInitChain;
    fromPartial<I extends Exact<DeepPartial<RequestInitChain>, I>>(object: I): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): unknown;
    create<I extends Exact<DeepPartial<RequestQuery>, I>>(base?: I): RequestQuery;
    fromPartial<I extends Exact<DeepPartial<RequestQuery>, I>>(object: I): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): unknown;
    create<I extends Exact<DeepPartial<RequestBeginBlock>, I>>(base?: I): RequestBeginBlock;
    fromPartial<I extends Exact<DeepPartial<RequestBeginBlock>, I>>(object: I): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): unknown;
    create<I extends Exact<DeepPartial<RequestCheckTx>, I>>(base?: I): RequestCheckTx;
    fromPartial<I extends Exact<DeepPartial<RequestCheckTx>, I>>(object: I): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): unknown;
    create<I extends Exact<DeepPartial<RequestDeliverTx>, I>>(base?: I): RequestDeliverTx;
    fromPartial<I extends Exact<DeepPartial<RequestDeliverTx>, I>>(object: I): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): unknown;
    create<I extends Exact<DeepPartial<RequestEndBlock>, I>>(base?: I): RequestEndBlock;
    fromPartial<I extends Exact<DeepPartial<RequestEndBlock>, I>>(object: I): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromJSON(_: any): RequestCommit;
    toJSON(_: RequestCommit): unknown;
    create<I extends Exact<DeepPartial<RequestCommit>, I>>(base?: I): RequestCommit;
    fromPartial<I extends Exact<DeepPartial<RequestCommit>, I>>(_: I): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromJSON(_: any): RequestListSnapshots;
    toJSON(_: RequestListSnapshots): unknown;
    create<I extends Exact<DeepPartial<RequestListSnapshots>, I>>(base?: I): RequestListSnapshots;
    fromPartial<I extends Exact<DeepPartial<RequestListSnapshots>, I>>(_: I): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromJSON(object: any): RequestOfferSnapshot;
    toJSON(message: RequestOfferSnapshot): unknown;
    create<I extends Exact<DeepPartial<RequestOfferSnapshot>, I>>(base?: I): RequestOfferSnapshot;
    fromPartial<I extends Exact<DeepPartial<RequestOfferSnapshot>, I>>(object: I): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    toJSON(message: RequestLoadSnapshotChunk): unknown;
    create<I extends Exact<DeepPartial<RequestLoadSnapshotChunk>, I>>(base?: I): RequestLoadSnapshotChunk;
    fromPartial<I extends Exact<DeepPartial<RequestLoadSnapshotChunk>, I>>(object: I): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromJSON(object: any): RequestApplySnapshotChunk;
    toJSON(message: RequestApplySnapshotChunk): unknown;
    create<I extends Exact<DeepPartial<RequestApplySnapshotChunk>, I>>(base?: I): RequestApplySnapshotChunk;
    fromPartial<I extends Exact<DeepPartial<RequestApplySnapshotChunk>, I>>(object: I): RequestApplySnapshotChunk;
};
export declare const RequestPrepareProposal: {
    encode(message: RequestPrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPrepareProposal;
    fromJSON(object: any): RequestPrepareProposal;
    toJSON(message: RequestPrepareProposal): unknown;
    create<I extends Exact<DeepPartial<RequestPrepareProposal>, I>>(base?: I): RequestPrepareProposal;
    fromPartial<I extends Exact<DeepPartial<RequestPrepareProposal>, I>>(object: I): RequestPrepareProposal;
};
export declare const RequestProcessProposal: {
    encode(message: RequestProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposal;
    fromJSON(object: any): RequestProcessProposal;
    toJSON(message: RequestProcessProposal): unknown;
    create<I extends Exact<DeepPartial<RequestProcessProposal>, I>>(base?: I): RequestProcessProposal;
    fromPartial<I extends Exact<DeepPartial<RequestProcessProposal>, I>>(object: I): RequestProcessProposal;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response;
    fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): unknown;
    create<I extends Exact<DeepPartial<ResponseException>, I>>(base?: I): ResponseException;
    fromPartial<I extends Exact<DeepPartial<ResponseException>, I>>(object: I): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): unknown;
    create<I extends Exact<DeepPartial<ResponseEcho>, I>>(base?: I): ResponseEcho;
    fromPartial<I extends Exact<DeepPartial<ResponseEcho>, I>>(object: I): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(_: any): ResponseFlush;
    toJSON(_: ResponseFlush): unknown;
    create<I extends Exact<DeepPartial<ResponseFlush>, I>>(base?: I): ResponseFlush;
    fromPartial<I extends Exact<DeepPartial<ResponseFlush>, I>>(_: I): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): unknown;
    create<I extends Exact<DeepPartial<ResponseInfo>, I>>(base?: I): ResponseInfo;
    fromPartial<I extends Exact<DeepPartial<ResponseInfo>, I>>(object: I): ResponseInfo;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): unknown;
    create<I extends Exact<DeepPartial<ResponseInitChain>, I>>(base?: I): ResponseInitChain;
    fromPartial<I extends Exact<DeepPartial<ResponseInitChain>, I>>(object: I): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): unknown;
    create<I extends Exact<DeepPartial<ResponseQuery>, I>>(base?: I): ResponseQuery;
    fromPartial<I extends Exact<DeepPartial<ResponseQuery>, I>>(object: I): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): unknown;
    create<I extends Exact<DeepPartial<ResponseBeginBlock>, I>>(base?: I): ResponseBeginBlock;
    fromPartial<I extends Exact<DeepPartial<ResponseBeginBlock>, I>>(object: I): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    create<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(base?: I): ResponseCheckTx;
    fromPartial<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(object: I): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): unknown;
    create<I extends Exact<DeepPartial<ResponseDeliverTx>, I>>(base?: I): ResponseDeliverTx;
    fromPartial<I extends Exact<DeepPartial<ResponseDeliverTx>, I>>(object: I): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): unknown;
    create<I extends Exact<DeepPartial<ResponseEndBlock>, I>>(base?: I): ResponseEndBlock;
    fromPartial<I extends Exact<DeepPartial<ResponseEndBlock>, I>>(object: I): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): unknown;
    create<I extends Exact<DeepPartial<ResponseCommit>, I>>(base?: I): ResponseCommit;
    fromPartial<I extends Exact<DeepPartial<ResponseCommit>, I>>(object: I): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromJSON(object: any): ResponseListSnapshots;
    toJSON(message: ResponseListSnapshots): unknown;
    create<I extends Exact<DeepPartial<ResponseListSnapshots>, I>>(base?: I): ResponseListSnapshots;
    fromPartial<I extends Exact<DeepPartial<ResponseListSnapshots>, I>>(object: I): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromJSON(object: any): ResponseOfferSnapshot;
    toJSON(message: ResponseOfferSnapshot): unknown;
    create<I extends Exact<DeepPartial<ResponseOfferSnapshot>, I>>(base?: I): ResponseOfferSnapshot;
    fromPartial<I extends Exact<DeepPartial<ResponseOfferSnapshot>, I>>(object: I): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    toJSON(message: ResponseLoadSnapshotChunk): unknown;
    create<I extends Exact<DeepPartial<ResponseLoadSnapshotChunk>, I>>(base?: I): ResponseLoadSnapshotChunk;
    fromPartial<I extends Exact<DeepPartial<ResponseLoadSnapshotChunk>, I>>(object: I): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    toJSON(message: ResponseApplySnapshotChunk): unknown;
    create<I extends Exact<DeepPartial<ResponseApplySnapshotChunk>, I>>(base?: I): ResponseApplySnapshotChunk;
    fromPartial<I extends Exact<DeepPartial<ResponseApplySnapshotChunk>, I>>(object: I): ResponseApplySnapshotChunk;
};
export declare const ResponsePrepareProposal: {
    encode(message: ResponsePrepareProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePrepareProposal;
    fromJSON(object: any): ResponsePrepareProposal;
    toJSON(message: ResponsePrepareProposal): unknown;
    create<I extends Exact<DeepPartial<ResponsePrepareProposal>, I>>(base?: I): ResponsePrepareProposal;
    fromPartial<I extends Exact<DeepPartial<ResponsePrepareProposal>, I>>(object: I): ResponsePrepareProposal;
};
export declare const ResponseProcessProposal: {
    encode(message: ResponseProcessProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseProcessProposal;
    fromJSON(object: any): ResponseProcessProposal;
    toJSON(message: ResponseProcessProposal): unknown;
    create<I extends Exact<DeepPartial<ResponseProcessProposal>, I>>(base?: I): ResponseProcessProposal;
    fromPartial<I extends Exact<DeepPartial<ResponseProcessProposal>, I>>(object: I): ResponseProcessProposal;
};
export declare const CommitInfo: {
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromJSON(object: any): CommitInfo;
    toJSON(message: CommitInfo): unknown;
    create<I extends Exact<DeepPartial<CommitInfo>, I>>(base?: I): CommitInfo;
    fromPartial<I extends Exact<DeepPartial<CommitInfo>, I>>(object: I): CommitInfo;
};
export declare const ExtendedCommitInfo: {
    encode(message: ExtendedCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitInfo;
    fromJSON(object: any): ExtendedCommitInfo;
    toJSON(message: ExtendedCommitInfo): unknown;
    create<I extends Exact<DeepPartial<ExtendedCommitInfo>, I>>(base?: I): ExtendedCommitInfo;
    fromPartial<I extends Exact<DeepPartial<ExtendedCommitInfo>, I>>(object: I): ExtendedCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event;
    fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): unknown;
    create<I extends Exact<DeepPartial<EventAttribute>, I>>(base?: I): EventAttribute;
    fromPartial<I extends Exact<DeepPartial<EventAttribute>, I>>(object: I): EventAttribute;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    create<I extends Exact<DeepPartial<TxResult>, I>>(base?: I): TxResult;
    fromPartial<I extends Exact<DeepPartial<TxResult>, I>>(object: I): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator;
    fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    create<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(base?: I): ValidatorUpdate;
    fromPartial<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(object: I): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): unknown;
    create<I extends Exact<DeepPartial<VoteInfo>, I>>(base?: I): VoteInfo;
    fromPartial<I extends Exact<DeepPartial<VoteInfo>, I>>(object: I): VoteInfo;
};
export declare const ExtendedVoteInfo: {
    encode(message: ExtendedVoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedVoteInfo;
    fromJSON(object: any): ExtendedVoteInfo;
    toJSON(message: ExtendedVoteInfo): unknown;
    create<I extends Exact<DeepPartial<ExtendedVoteInfo>, I>>(base?: I): ExtendedVoteInfo;
    fromPartial<I extends Exact<DeepPartial<ExtendedVoteInfo>, I>>(object: I): ExtendedVoteInfo;
};
export declare const Misbehavior: {
    encode(message: Misbehavior, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehavior;
    fromJSON(object: any): Misbehavior;
    toJSON(message: Misbehavior): unknown;
    create<I extends Exact<DeepPartial<Misbehavior>, I>>(base?: I): Misbehavior;
    fromPartial<I extends Exact<DeepPartial<Misbehavior>, I>>(object: I): Misbehavior;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    create<I extends Exact<DeepPartial<Snapshot>, I>>(base?: I): Snapshot;
    fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot;
};
export interface ABCIApplication {
    Echo(request: RequestEcho): Promise<ResponseEcho>;
    Flush(request: RequestFlush): Promise<ResponseFlush>;
    Info(request: RequestInfo): Promise<ResponseInfo>;
    DeliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx>;
    CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
    Query(request: RequestQuery): Promise<ResponseQuery>;
    Commit(request: RequestCommit): Promise<ResponseCommit>;
    InitChain(request: RequestInitChain): Promise<ResponseInitChain>;
    BeginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock>;
    EndBlock(request: RequestEndBlock): Promise<ResponseEndBlock>;
    ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots>;
    OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
    LoadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk>;
    ApplySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk>;
    PrepareProposal(request: RequestPrepareProposal): Promise<ResponsePrepareProposal>;
    ProcessProposal(request: RequestProcessProposal): Promise<ResponseProcessProposal>;
}
export declare class ABCIApplicationClientImpl implements ABCIApplication {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Echo(request: RequestEcho): Promise<ResponseEcho>;
    Flush(request: RequestFlush): Promise<ResponseFlush>;
    Info(request: RequestInfo): Promise<ResponseInfo>;
    DeliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx>;
    CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
    Query(request: RequestQuery): Promise<ResponseQuery>;
    Commit(request: RequestCommit): Promise<ResponseCommit>;
    InitChain(request: RequestInitChain): Promise<ResponseInitChain>;
    BeginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock>;
    EndBlock(request: RequestEndBlock): Promise<ResponseEndBlock>;
    ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots>;
    OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
    LoadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk>;
    ApplySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk>;
    PrepareProposal(request: RequestPrepareProposal): Promise<ResponsePrepareProposal>;
    ProcessProposal(request: RequestProcessProposal): Promise<ResponseProcessProposal>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
