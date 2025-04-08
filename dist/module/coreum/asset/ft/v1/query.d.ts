import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Token } from "./token";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** QueryParamsRequest defines the request type for querying x/asset/ft parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/asset/ft parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryTokenRequest {
    denom: string;
}
export interface QueryTokenResponse {
    token?: Token;
}
export interface QueryTokensRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    issuer: string;
}
export interface QueryTokensResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    tokens: Token[];
}
export interface QueryFrozenBalancesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** account specifies the account onto which we query frozen balances */
    account: string;
}
export interface QueryFrozenBalancesResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    /** balances contains the frozen balances on the queried account */
    balances: Coin[];
}
export interface QueryFrozenBalanceRequest {
    /** account specifies the account onto which we query frozen balances */
    account: string;
    /** denom specifies frozen balances on a specific denom */
    denom: string;
}
export interface QueryFrozenBalanceResponse {
    /** balance contains the frozen balance with the queried account and denom */
    balance?: Coin;
}
export interface QueryWhitelistedBalancesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** account specifies the account onto which we query whitelisted balances */
    account: string;
}
export interface QueryWhitelistedBalancesResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    /** balances contains the whitelisted balances on the queried account */
    balances: Coin[];
}
export interface QueryWhitelistedBalanceRequest {
    /** account specifies the account onto which we query whitelisted balances */
    account: string;
    /** denom specifies whitelisted balances on a specific denom */
    denom: string;
}
export interface QueryWhitelistedBalanceResponse {
    /** balance contains the whitelisted balance with the queried account and denom */
    balance?: Coin;
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
export declare const QueryTokenRequest: {
    encode(message: QueryTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest;
    fromJSON(object: any): QueryTokenRequest;
    toJSON(message: QueryTokenRequest): unknown;
    create<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(base?: I): QueryTokenRequest;
    fromPartial<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(object: I): QueryTokenRequest;
};
export declare const QueryTokenResponse: {
    encode(message: QueryTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse;
    fromJSON(object: any): QueryTokenResponse;
    toJSON(message: QueryTokenResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(base?: I): QueryTokenResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(object: I): QueryTokenResponse;
};
export declare const QueryTokensRequest: {
    encode(message: QueryTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest;
    fromJSON(object: any): QueryTokensRequest;
    toJSON(message: QueryTokensRequest): unknown;
    create<I extends Exact<DeepPartial<QueryTokensRequest>, I>>(base?: I): QueryTokensRequest;
    fromPartial<I extends Exact<DeepPartial<QueryTokensRequest>, I>>(object: I): QueryTokensRequest;
};
export declare const QueryTokensResponse: {
    encode(message: QueryTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse;
    fromJSON(object: any): QueryTokensResponse;
    toJSON(message: QueryTokensResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTokensResponse>, I>>(base?: I): QueryTokensResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTokensResponse>, I>>(object: I): QueryTokensResponse;
};
export declare const QueryFrozenBalancesRequest: {
    encode(message: QueryFrozenBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesRequest;
    fromJSON(object: any): QueryFrozenBalancesRequest;
    toJSON(message: QueryFrozenBalancesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryFrozenBalancesRequest>, I>>(base?: I): QueryFrozenBalancesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryFrozenBalancesRequest>, I>>(object: I): QueryFrozenBalancesRequest;
};
export declare const QueryFrozenBalancesResponse: {
    encode(message: QueryFrozenBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesResponse;
    fromJSON(object: any): QueryFrozenBalancesResponse;
    toJSON(message: QueryFrozenBalancesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryFrozenBalancesResponse>, I>>(base?: I): QueryFrozenBalancesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryFrozenBalancesResponse>, I>>(object: I): QueryFrozenBalancesResponse;
};
export declare const QueryFrozenBalanceRequest: {
    encode(message: QueryFrozenBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceRequest;
    fromJSON(object: any): QueryFrozenBalanceRequest;
    toJSON(message: QueryFrozenBalanceRequest): unknown;
    create<I extends Exact<DeepPartial<QueryFrozenBalanceRequest>, I>>(base?: I): QueryFrozenBalanceRequest;
    fromPartial<I extends Exact<DeepPartial<QueryFrozenBalanceRequest>, I>>(object: I): QueryFrozenBalanceRequest;
};
export declare const QueryFrozenBalanceResponse: {
    encode(message: QueryFrozenBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceResponse;
    fromJSON(object: any): QueryFrozenBalanceResponse;
    toJSON(message: QueryFrozenBalanceResponse): unknown;
    create<I extends Exact<DeepPartial<QueryFrozenBalanceResponse>, I>>(base?: I): QueryFrozenBalanceResponse;
    fromPartial<I extends Exact<DeepPartial<QueryFrozenBalanceResponse>, I>>(object: I): QueryFrozenBalanceResponse;
};
export declare const QueryWhitelistedBalancesRequest: {
    encode(message: QueryWhitelistedBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesRequest;
    fromJSON(object: any): QueryWhitelistedBalancesRequest;
    toJSON(message: QueryWhitelistedBalancesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedBalancesRequest>, I>>(base?: I): QueryWhitelistedBalancesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalancesRequest>, I>>(object: I): QueryWhitelistedBalancesRequest;
};
export declare const QueryWhitelistedBalancesResponse: {
    encode(message: QueryWhitelistedBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesResponse;
    fromJSON(object: any): QueryWhitelistedBalancesResponse;
    toJSON(message: QueryWhitelistedBalancesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedBalancesResponse>, I>>(base?: I): QueryWhitelistedBalancesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalancesResponse>, I>>(object: I): QueryWhitelistedBalancesResponse;
};
export declare const QueryWhitelistedBalanceRequest: {
    encode(message: QueryWhitelistedBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceRequest;
    fromJSON(object: any): QueryWhitelistedBalanceRequest;
    toJSON(message: QueryWhitelistedBalanceRequest): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedBalanceRequest>, I>>(base?: I): QueryWhitelistedBalanceRequest;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalanceRequest>, I>>(object: I): QueryWhitelistedBalanceRequest;
};
export declare const QueryWhitelistedBalanceResponse: {
    encode(message: QueryWhitelistedBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceResponse;
    fromJSON(object: any): QueryWhitelistedBalanceResponse;
    toJSON(message: QueryWhitelistedBalanceResponse): unknown;
    create<I extends Exact<DeepPartial<QueryWhitelistedBalanceResponse>, I>>(base?: I): QueryWhitelistedBalanceResponse;
    fromPartial<I extends Exact<DeepPartial<QueryWhitelistedBalanceResponse>, I>>(object: I): QueryWhitelistedBalanceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/asset/ft module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Tokens queries the fungible tokens of the module. */
    Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    /** Token queries the fungible token of the module. */
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    /** FrozenBalances returns all the frozen balances for the account. */
    FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
    /** FrozenBalance returns frozen balance of the denom for the account. */
    FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
    /** WhitelistedBalances returns all the whitelisted balances for the account. */
    WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
    /** WhitelistedBalance returns whitelisted balance of the denom for the account. */
    WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
    FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
    WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
    WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
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
