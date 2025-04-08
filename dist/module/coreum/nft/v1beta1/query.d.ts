import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Class, NFT } from "./nft";
export declare const protobufPackage = "cosmos.nft.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
    classId: string;
    owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
    amount: Long;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    classId: string;
    id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
    classId: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    amount: Long;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
    classId: string;
    owner: string;
    pagination?: PageRequest;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
    nfts: NFT[];
    pagination?: PageResponse;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    classId: string;
    id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    nft?: NFT;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
    classId: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
    class?: Class;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
    classes: Class[];
    pagination?: PageResponse;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    create<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(base?: I): QueryBalanceRequest;
    fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    create<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(base?: I): QueryBalanceResponse;
    fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse;
};
export declare const QueryOwnerRequest: {
    encode(message: QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest;
    fromJSON(object: any): QueryOwnerRequest;
    toJSON(message: QueryOwnerRequest): unknown;
    create<I extends Exact<DeepPartial<QueryOwnerRequest>, I>>(base?: I): QueryOwnerRequest;
    fromPartial<I extends Exact<DeepPartial<QueryOwnerRequest>, I>>(object: I): QueryOwnerRequest;
};
export declare const QueryOwnerResponse: {
    encode(message: QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse;
    fromJSON(object: any): QueryOwnerResponse;
    toJSON(message: QueryOwnerResponse): unknown;
    create<I extends Exact<DeepPartial<QueryOwnerResponse>, I>>(base?: I): QueryOwnerResponse;
    fromPartial<I extends Exact<DeepPartial<QueryOwnerResponse>, I>>(object: I): QueryOwnerResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    create<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(base?: I): QuerySupplyRequest;
    fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(object: I): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    create<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(base?: I): QuerySupplyResponse;
    fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(object: I): QuerySupplyResponse;
};
export declare const QueryNFTsRequest: {
    encode(message: QueryNFTsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest;
    fromJSON(object: any): QueryNFTsRequest;
    toJSON(message: QueryNFTsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryNFTsRequest>, I>>(base?: I): QueryNFTsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryNFTsRequest>, I>>(object: I): QueryNFTsRequest;
};
export declare const QueryNFTsResponse: {
    encode(message: QueryNFTsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse;
    fromJSON(object: any): QueryNFTsResponse;
    toJSON(message: QueryNFTsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryNFTsResponse>, I>>(base?: I): QueryNFTsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryNFTsResponse>, I>>(object: I): QueryNFTsResponse;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
    fromJSON(object: any): QueryNFTRequest;
    toJSON(message: QueryNFTRequest): unknown;
    create<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(base?: I): QueryNFTRequest;
    fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(object: I): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
    fromJSON(object: any): QueryNFTResponse;
    toJSON(message: QueryNFTResponse): unknown;
    create<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(base?: I): QueryNFTResponse;
    fromPartial<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(object: I): QueryNFTResponse;
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
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryClassesRequest>, I>>(base?: I): QueryClassesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryClassesRequest>, I>>(object: I): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryClassesResponse>, I>>(base?: I): QueryClassesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryClassesResponse>, I>>(object: I): QueryClassesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    /** NFT queries an NFT based on its class and id. */
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    /** Class queries an NFT class based on its id */
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** Classes queries all NFT classes */
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
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
