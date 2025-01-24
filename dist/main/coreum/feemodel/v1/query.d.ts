import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DecCoin } from "../../../cosmos/base/coin";
import { Params } from "./params";
export declare const protobufPackage = "coreum.feemodel.v1";
/** QueryMinGasPriceRequest is the request type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceRequest {
}
/** QueryMinGasPriceResponse is the response type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceResponse {
    /** min_gas_price is the current minimum gas price required by the network. */
    minGasPrice: DecCoin | undefined;
}
export interface QueryRecommendedGasPriceRequest {
    afterBlocks: number;
}
export interface QueryRecommendedGasPriceResponse {
    low: DecCoin | undefined;
    med: DecCoin | undefined;
    high: DecCoin | undefined;
}
/** QueryParamsRequest defines the request type for querying x/feemodel parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/feemodel parameters. */
export interface QueryParamsResponse {
    params: Params | undefined;
}
export declare const QueryMinGasPriceRequest: MessageFns<QueryMinGasPriceRequest>;
export declare const QueryMinGasPriceResponse: MessageFns<QueryMinGasPriceResponse>;
export declare const QueryRecommendedGasPriceRequest: MessageFns<QueryRecommendedGasPriceRequest>;
export declare const QueryRecommendedGasPriceResponse: MessageFns<QueryRecommendedGasPriceResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** MinGasPrice queries the current minimum gas price required by the network. */
    MinGasPrice(request: QueryMinGasPriceRequest): Promise<QueryMinGasPriceResponse>;
    /** RecommendedGasPrice queries the recommended gas price for the next n blocks. */
    RecommendedGasPrice(request: QueryRecommendedGasPriceRequest): Promise<QueryRecommendedGasPriceResponse>;
    /** Params queries the parameters of x/feemodel module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const QueryServiceName = "coreum.feemodel.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    MinGasPrice(request: QueryMinGasPriceRequest): Promise<QueryMinGasPriceResponse>;
    RecommendedGasPrice(request: QueryRecommendedGasPriceRequest): Promise<QueryRecommendedGasPriceResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
