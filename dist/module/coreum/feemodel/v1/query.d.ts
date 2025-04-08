import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
export declare const protobufPackage = "coreum.feemodel.v1";
/** QueryMinGasPriceRequest is the request type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceRequest {
}
/** QueryMinGasPriceResponse is the response type for the Query/MinGasPrice RPC method. */
export interface QueryMinGasPriceResponse {
    /** min_gas_price is the current minimum gas price required by the network. */
    minGasPrice?: DecCoin;
}
/** QueryParamsRequest defines the request type for querying x/feemodel parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/feemodel parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
export declare const QueryMinGasPriceRequest: {
    encode(_: QueryMinGasPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinGasPriceRequest;
    fromJSON(_: any): QueryMinGasPriceRequest;
    toJSON(_: QueryMinGasPriceRequest): unknown;
    create<I extends Exact<DeepPartial<QueryMinGasPriceRequest>, I>>(base?: I): QueryMinGasPriceRequest;
    fromPartial<I extends Exact<DeepPartial<QueryMinGasPriceRequest>, I>>(_: I): QueryMinGasPriceRequest;
};
export declare const QueryMinGasPriceResponse: {
    encode(message: QueryMinGasPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinGasPriceResponse;
    fromJSON(object: any): QueryMinGasPriceResponse;
    toJSON(message: QueryMinGasPriceResponse): unknown;
    create<I extends Exact<DeepPartial<QueryMinGasPriceResponse>, I>>(base?: I): QueryMinGasPriceResponse;
    fromPartial<I extends Exact<DeepPartial<QueryMinGasPriceResponse>, I>>(object: I): QueryMinGasPriceResponse;
};
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
/** Query defines the gRPC querier service. */
export interface Query {
    /** MinGasPrice queries the current minimum gas price required by the network. */
    MinGasPrice(request: QueryMinGasPriceRequest): Promise<QueryMinGasPriceResponse>;
    /** Params queries the parameters of x/feemodel module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    MinGasPrice(request: QueryMinGasPriceRequest): Promise<QueryMinGasPriceResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
