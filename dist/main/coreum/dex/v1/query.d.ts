import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Order, OrderBookData, Side } from "./order";
import { Params } from "./params";
export declare const protobufPackage = "coreum.dex.v1";
/** QueryParamsRequest defines the request type for querying x/dex parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/dex parameters. */
export interface QueryParamsResponse {
    params: Params | undefined;
}
/** QueryOrderRequest defines the request type for the `Order` query. */
export interface QueryOrderRequest {
    /** creator is order creator's account. */
    creator: string;
    /** id is order ID. */
    id: string;
}
/** QueryOrderRequestResponse defines the response type for the `Order` query. */
export interface QueryOrderResponse {
    order: Order | undefined;
}
/** QueryOrdersRequest defines the request type for the `Orders` query. */
export interface QueryOrdersRequest {
    /** creator is order creator's account. */
    creator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryOrdersRequestResponse defines the response type for the `Order` query. */
export interface QueryOrdersResponse {
    orders: Order[];
    pagination: PageResponse | undefined;
}
/** QueryOrderBooksRequest defines the request type for the `OrderBooks` query. */
export interface QueryOrderBooksRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryOrderBooksResponse defines the response type for the `OrderBooks` query. */
export interface QueryOrderBooksResponse {
    orderBooks: OrderBookData[];
    pagination: PageResponse | undefined;
}
/** QueryOrderBookParamsRequest defines the request type for the `OrderBookParams` query. */
export interface QueryOrderBookParamsRequest {
    /** base_denom is base order book denom. */
    baseDenom: string;
    /** quote_denom is quote order book denom */
    quoteDenom: string;
}
/** QueryOrderBookParamsResponse defines the response type for the `OrderBookParams` query. */
export interface QueryOrderBookParamsResponse {
    /** price_tick is the minimum price movement an asset price can make, either upward or downward. */
    priceTick: string;
    /** quantity_step is the the smallest allowable step for the base asset inside a market. */
    quantityStep: string;
    /** base_denom_unified_ref_amount is needed to define price tick & quantity step of base denom */
    baseDenomUnifiedRefAmount: string;
    /** quote_denom_unified_ref_amount is needed to define price tick & quantity step of quote denom */
    quoteDenomUnifiedRefAmount: string;
}
/** QueryOrderBookOrdersRequest defines the request type for the `OrderBookOrders` query. */
export interface QueryOrderBookOrdersRequest {
    /** base_denom is base order denom. */
    baseDenom: string;
    /** quote_denom is quote order denom */
    quoteDenom: string;
    /** side is order side. */
    side: Side;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryOrderBookOrdersResponse defines the response type for the `OrderBookOrders` query. */
export interface QueryOrderBookOrdersResponse {
    orders: Order[];
    pagination: PageResponse | undefined;
}
/** QueryAccountDenomOrdersCountRequest defines the request type for the `AccountDenomOrdersCount` query. */
export interface QueryAccountDenomOrdersCountRequest {
    account: string;
    denom: string;
}
/** QueryAccountDenomOrdersCountResponse defines the response type for the `AccountDenomOrdersCount` query. */
export interface QueryAccountDenomOrdersCountResponse {
    count: number;
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryOrderRequest: MessageFns<QueryOrderRequest>;
export declare const QueryOrderResponse: MessageFns<QueryOrderResponse>;
export declare const QueryOrdersRequest: MessageFns<QueryOrdersRequest>;
export declare const QueryOrdersResponse: MessageFns<QueryOrdersResponse>;
export declare const QueryOrderBooksRequest: MessageFns<QueryOrderBooksRequest>;
export declare const QueryOrderBooksResponse: MessageFns<QueryOrderBooksResponse>;
export declare const QueryOrderBookParamsRequest: MessageFns<QueryOrderBookParamsRequest>;
export declare const QueryOrderBookParamsResponse: MessageFns<QueryOrderBookParamsResponse>;
export declare const QueryOrderBookOrdersRequest: MessageFns<QueryOrderBookOrdersRequest>;
export declare const QueryOrderBookOrdersResponse: MessageFns<QueryOrderBookOrdersResponse>;
export declare const QueryAccountDenomOrdersCountRequest: MessageFns<QueryAccountDenomOrdersCountRequest>;
export declare const QueryAccountDenomOrdersCountResponse: MessageFns<QueryAccountDenomOrdersCountResponse>;
/** Query defines the gRPC query service. */
export interface Query {
    /** Params queries the parameters of x/dex module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Order queries order by creator and ID. */
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    /** Orders queries creator orders. */
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    /** OrderBooks queries order books. */
    OrderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
    /** OrderBookParams queries order book params. */
    OrderBookParams(request: QueryOrderBookParamsRequest): Promise<QueryOrderBookParamsResponse>;
    /** OrderBookOrders queries order book orders. */
    OrderBookOrders(request: QueryOrderBookOrdersRequest): Promise<QueryOrderBookOrdersResponse>;
    /** AccountDenomOrdersCount queries account denom orders count. */
    AccountDenomOrdersCount(request: QueryAccountDenomOrdersCountRequest): Promise<QueryAccountDenomOrdersCountResponse>;
}
export declare const QueryServiceName = "coreum.dex.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    OrderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
    OrderBookParams(request: QueryOrderBookParamsRequest): Promise<QueryOrderBookParamsResponse>;
    OrderBookOrders(request: QueryOrderBookOrdersRequest): Promise<QueryOrderBookOrdersResponse>;
    AccountDenomOrdersCount(request: QueryAccountDenomOrdersCountRequest): Promise<QueryAccountDenomOrdersCountResponse>;
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
