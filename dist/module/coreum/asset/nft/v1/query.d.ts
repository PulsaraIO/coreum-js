import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Class } from "./nft";
import { Params } from "./params";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** QueryParamsRequest defines the request type for querying x/asset/nft parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/asset/nft parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryTokenRequest is request type for the Query/Class RPC method. */
export interface QueryClassRequest {
    /** we don't use the gogoproto.customname here since the google.api.http ignores it and generates invalid code. */
    id: string;
}
/** QueryClassResponse is response type for the Query/Class RPC method. */
export interface QueryClassResponse {
    class?: Class;
}
export interface QueryFrozenRequest {
    id: string;
    classId: string;
}
export interface QueryFrozenResponse {
    frozen: boolean;
}
export interface QueryWhitelistedRequest {
    id: string;
    classId: string;
    account: string;
}
export interface QueryWhitelistedResponse {
    whitelisted: boolean;
}
export interface QueryWhitelistedAccountsForNFTRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    id: string;
    classId: string;
}
export interface QueryWhitelistedAccountsForNFTResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    accounts: string[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    create<I extends Exact<DeepPartial<QueryClassRequest>, I>>(base?: I): QueryClassRequest;
    fromPartial<I extends Exact<DeepPartial<QueryClassRequest>, I>>(object: I): QueryClassRequest;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    create<I extends Exact<DeepPartial<QueryClassResponse>, I>>(base?: I): QueryClassResponse;
    fromPartial<I extends Exact<DeepPartial<QueryClassResponse>, I>>(object: I): QueryClassResponse;
};
export declare const QueryFrozenRequest: {
    encode(message: QueryFrozenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenRequest;
    fromJSON(object: any): QueryFrozenRequest;
    toJSON(message: QueryFrozenRequest): unknown;
    create<I extends Exact<DeepPartial<QueryFrozenRequest>, I>>(base?: I): QueryFrozenRequest;
    fromPartial<I extends Exact<DeepPartial<QueryFrozenRequest>, I>>(object: I): QueryFrozenRequest;
};
export declare const QueryFrozenResponse: {
    encode(message: QueryFrozenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenResponse;
    fromJSON(object: any): QueryFrozenResponse;
    toJSON(message: QueryFrozenResponse): unknown;
    create<I extends Exact<DeepPartial<QueryFrozenResponse>, I>>(base?: I): QueryFrozenResponse;
    fromPartial<I extends Exact<DeepPartial<QueryFrozenResponse>, I>>(object: I): QueryFrozenResponse;
};
export declare const QueryWhitelistedRequest: {
    encode(message: QueryWhitelistedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedRequest;
    fromJSON(object: any): QueryWhitelistedRequest;
    toJSON(message: QueryWhitelistedRequest): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedRequest>, I>>(base?: I): QueryWhitelistedRequest;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedRequest>, I>>(object: I): QueryWhitelistedRequest;
};
export declare const QueryWhitelistedResponse: {
    encode(message: QueryWhitelistedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedResponse;
    fromJSON(object: any): QueryWhitelistedResponse;
    toJSON(message: QueryWhitelistedResponse): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedResponse>, I>>(base?: I): QueryWhitelistedResponse;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedResponse>, I>>(object: I): QueryWhitelistedResponse;
};
export declare const QueryWhitelistedAccountsForNFTRequest: {
    encode(message: QueryWhitelistedAccountsForNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedAccountsForNFTRequest;
    fromJSON(object: any): QueryWhitelistedAccountsForNFTRequest;
    toJSON(message: QueryWhitelistedAccountsForNFTRequest): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedAccountsForNFTRequest>, I>>(base?: I): QueryWhitelistedAccountsForNFTRequest;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedAccountsForNFTRequest>, I>>(object: I): QueryWhitelistedAccountsForNFTRequest;
};
export declare const QueryWhitelistedAccountsForNFTResponse: {
    encode(message: QueryWhitelistedAccountsForNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedAccountsForNFTResponse;
    fromJSON(object: any): QueryWhitelistedAccountsForNFTResponse;
    toJSON(message: QueryWhitelistedAccountsForNFTResponse): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedAccountsForNFTResponse>, I>>(base?: I): QueryWhitelistedAccountsForNFTResponse;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedAccountsForNFTResponse>, I>>(object: I): QueryWhitelistedAccountsForNFTResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/asset/ft module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Class queries the non-fungible token class of the module. */
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** Frozen queries to check if an NFT is frozen or not. */
    Frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse>;
    /** Whitelisted queries to check if an account is whitelited to hold an NFT or not. */
    Whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
    /** WhitelistedAccountsForNFT returns the list of accounts which are whitelisted to hold this NFT. */
    WhitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    Frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse>;
    Whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
    WhitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
