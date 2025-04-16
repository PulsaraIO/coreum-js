import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Class } from "./nft";
import { Params } from "./params";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** QueryParamsRequest defines the request type for querying x/asset/nft parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/asset/nft parameters. */
export interface QueryParamsResponse {
    params: Params | undefined;
}
/** QueryTokenRequest is request type for the Query/Class RPC method. */
export interface QueryClassRequest {
    /** we don't use the gogoproto.customname here since the google.api.http ignores it and generates invalid code. */
    id: string;
}
/** QueryClassResponse is response type for the Query/Class RPC method. */
export interface QueryClassResponse {
    class: Class | undefined;
}
/** QueryTokenRequest is request type for the Query/Classes RPC method. */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    issuer: string;
}
/** QueryClassResponse is response type for the Query/Classes RPC method. */
export interface QueryClassesResponse {
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
    classes: Class[];
}
export interface QueryFrozenRequest {
    id: string;
    classId: string;
}
export interface QueryFrozenResponse {
    frozen: boolean;
}
export interface QueryClassFrozenRequest {
    classId: string;
    account: string;
}
export interface QueryClassFrozenResponse {
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
    pagination: PageRequest | undefined;
    id: string;
    classId: string;
}
export interface QueryWhitelistedAccountsForNFTResponse {
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
    accounts: string[];
}
export interface QueryClassWhitelistedAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    classId: string;
}
export interface QueryClassWhitelistedAccountsResponse {
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
    accounts: string[];
}
export interface QueryClassFrozenAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    classId: string;
}
export interface QueryClassFrozenAccountsResponse {
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
    accounts: string[];
}
export interface QueryBurntNFTRequest {
    classId: string;
    nftId: string;
}
export interface QueryBurntNFTResponse {
    burnt: boolean;
}
export interface QueryBurntNFTsInClassRequest {
    pagination: PageRequest | undefined;
    classId: string;
}
export interface QueryBurntNFTsInClassResponse {
    pagination: PageResponse | undefined;
    nftIds: string[];
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryClassRequest: MessageFns<QueryClassRequest>;
export declare const QueryClassResponse: MessageFns<QueryClassResponse>;
export declare const QueryClassesRequest: MessageFns<QueryClassesRequest>;
export declare const QueryClassesResponse: MessageFns<QueryClassesResponse>;
export declare const QueryFrozenRequest: MessageFns<QueryFrozenRequest>;
export declare const QueryFrozenResponse: MessageFns<QueryFrozenResponse>;
export declare const QueryClassFrozenRequest: MessageFns<QueryClassFrozenRequest>;
export declare const QueryClassFrozenResponse: MessageFns<QueryClassFrozenResponse>;
export declare const QueryWhitelistedRequest: MessageFns<QueryWhitelistedRequest>;
export declare const QueryWhitelistedResponse: MessageFns<QueryWhitelistedResponse>;
export declare const QueryWhitelistedAccountsForNFTRequest: MessageFns<QueryWhitelistedAccountsForNFTRequest>;
export declare const QueryWhitelistedAccountsForNFTResponse: MessageFns<QueryWhitelistedAccountsForNFTResponse>;
export declare const QueryClassWhitelistedAccountsRequest: MessageFns<QueryClassWhitelistedAccountsRequest>;
export declare const QueryClassWhitelistedAccountsResponse: MessageFns<QueryClassWhitelistedAccountsResponse>;
export declare const QueryClassFrozenAccountsRequest: MessageFns<QueryClassFrozenAccountsRequest>;
export declare const QueryClassFrozenAccountsResponse: MessageFns<QueryClassFrozenAccountsResponse>;
export declare const QueryBurntNFTRequest: MessageFns<QueryBurntNFTRequest>;
export declare const QueryBurntNFTResponse: MessageFns<QueryBurntNFTResponse>;
export declare const QueryBurntNFTsInClassRequest: MessageFns<QueryBurntNFTsInClassRequest>;
export declare const QueryBurntNFTsInClassResponse: MessageFns<QueryBurntNFTsInClassResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/asset/nft module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Class queries the non-fungible token class of the module. */
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** Classes queries the non-fungible token classes of the module. */
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
    /** Frozen queries to check if an NFT is frozen or not. */
    Frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse>;
    /** ClassFrozen queries to check if an account if frozen for an NFT class. */
    ClassFrozen(request: QueryClassFrozenRequest): Promise<QueryClassFrozenResponse>;
    /** QueryClassFrozenAccountsRequest returns the list of accounts which are frozen to hold NFTs in this class. */
    ClassFrozenAccounts(request: QueryClassFrozenAccountsRequest): Promise<QueryClassFrozenAccountsResponse>;
    /** Whitelisted queries to check if an account is whitelited to hold an NFT or not. */
    Whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
    /** WhitelistedAccountsForNFT returns the list of accounts which are whitelisted to hold this NFT. */
    WhitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse>;
    /** ClassWhitelistedAccounts returns the list of accounts which are whitelisted to hold NFTs in this class. */
    ClassWhitelistedAccounts(request: QueryClassWhitelistedAccountsRequest): Promise<QueryClassWhitelistedAccountsResponse>;
    /** BurntNFTsInClass checks if an nft if is in burnt NFTs list. */
    BurntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse>;
    /** BurntNFTsInClass returns the list of burnt nfts in a class. */
    BurntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse>;
}
export declare const QueryServiceName = "coreum.asset.nft.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
    Frozen(request: QueryFrozenRequest): Promise<QueryFrozenResponse>;
    ClassFrozen(request: QueryClassFrozenRequest): Promise<QueryClassFrozenResponse>;
    ClassFrozenAccounts(request: QueryClassFrozenAccountsRequest): Promise<QueryClassFrozenAccountsResponse>;
    Whitelisted(request: QueryWhitelistedRequest): Promise<QueryWhitelistedResponse>;
    WhitelistedAccountsForNFT(request: QueryWhitelistedAccountsForNFTRequest): Promise<QueryWhitelistedAccountsForNFTResponse>;
    ClassWhitelistedAccounts(request: QueryClassWhitelistedAccountsRequest): Promise<QueryClassWhitelistedAccountsResponse>;
    BurntNFT(request: QueryBurntNFTRequest): Promise<QueryBurntNFTResponse>;
    BurntNFTsInClass(request: QueryBurntNFTsInClassRequest): Promise<QueryBurntNFTsInClassResponse>;
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
