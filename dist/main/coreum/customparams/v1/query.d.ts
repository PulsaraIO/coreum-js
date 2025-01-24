import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StakingParams } from "./params";
export declare const protobufPackage = "coreum.customparams.v1";
/** QueryStakingParamsRequest defines the request type for querying x/customparams staking parameters. */
export interface QueryStakingParamsRequest {
}
/** QueryStakingParamsResponse defines the response type for querying x/customparams staking parameters. */
export interface QueryStakingParamsResponse {
    params: StakingParams | undefined;
}
export declare const QueryStakingParamsRequest: MessageFns<QueryStakingParamsRequest>;
export declare const QueryStakingParamsResponse: MessageFns<QueryStakingParamsResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** StakingParams queries the staking parameters of the module. */
    StakingParams(request: QueryStakingParamsRequest): Promise<QueryStakingParamsResponse>;
}
export declare const QueryServiceName = "coreum.customparams.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    StakingParams(request: QueryStakingParamsRequest): Promise<QueryStakingParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
