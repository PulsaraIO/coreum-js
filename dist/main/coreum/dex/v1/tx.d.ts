import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { GoodTil, OrderType, Side, TimeInForce } from "./order";
import { Params } from "./params";
export declare const protobufPackage = "coreum.dex.v1";
export interface MsgUpdateParams {
    authority: string;
    params: Params | undefined;
}
/** MsgPlaceOrder defines message to place an order on orderbook. */
export interface MsgPlaceOrder {
    /** sender is order creator address. */
    sender: string;
    /** type is order type. */
    type: OrderType;
    /** id is unique order ID. */
    id: string;
    /** base_denom is base order denom. */
    baseDenom: string;
    /** quote_denom is quote order denom */
    quoteDenom: string;
    /** price is value of one unit of the base_denom expressed in terms of the quote_denom. */
    price: string;
    /** quantity is amount of the base base_denom being traded. */
    quantity: string;
    /** side is order side. */
    side: Side;
    /** good_til is order good til */
    goodTil: GoodTil | undefined;
    /** time_in_force is order time in force */
    timeInForce: TimeInForce;
}
/** MsgCancelOrder defines message to cancel the order in the orderbook. */
export interface MsgCancelOrder {
    /** sender is order creator address. */
    sender: string;
    /** id is unique order ID. */
    id: string;
}
/** MsgCancelOrdersByDenom defines message to cancel all orders by denom and account. */
export interface MsgCancelOrdersByDenom {
    /** sender is order creator address. */
    sender: string;
    /** account is order creator address. */
    account: string;
    /** denom is orders denom. */
    denom: string;
}
export interface EmptyResponse {
}
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgPlaceOrder: MessageFns<MsgPlaceOrder>;
export declare const MsgCancelOrder: MessageFns<MsgCancelOrder>;
export declare const MsgCancelOrdersByDenom: MessageFns<MsgCancelOrdersByDenom>;
export declare const EmptyResponse: MessageFns<EmptyResponse>;
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams is a governance operation to modify the parameters of the module.
     * NOTE: all parameters must be provided.
     */
    UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
    /** PlaceOrder place an order on orderbook. */
    PlaceOrder(request: MsgPlaceOrder): Promise<EmptyResponse>;
    /** CancelOrder cancels an order in the orderbook. */
    CancelOrder(request: MsgCancelOrder): Promise<EmptyResponse>;
    /** CancelOrdersByDenom cancels all orders by denom and account. */
    CancelOrdersByDenom(request: MsgCancelOrdersByDenom): Promise<EmptyResponse>;
}
export declare const MsgServiceName = "coreum.dex.v1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
    PlaceOrder(request: MsgPlaceOrder): Promise<EmptyResponse>;
    CancelOrder(request: MsgCancelOrder): Promise<EmptyResponse>;
    CancelOrdersByDenom(request: MsgCancelOrdersByDenom): Promise<EmptyResponse>;
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
