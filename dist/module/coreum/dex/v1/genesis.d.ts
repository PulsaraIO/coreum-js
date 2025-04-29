import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Order, OrderBookData } from "./order";
import { Params } from "./params";
export declare const protobufPackage = "coreum.dex.v1";
/** GenesisState defines the module genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    orderBooks: OrderBookDataWithID[];
    orders: Order[];
    /** order_sequence is current order sequence; */
    orderSequence: number;
    accountsDenomsOrdersCounts: AccountDenomOrdersCount[];
}
/** OrderBookDataWithID is a order book data with it's corresponding ID. */
export interface OrderBookDataWithID {
    /** id is order book ID. */
    id: number;
    /** data is order book data. */
    data: OrderBookData | undefined;
}
/** AccountDenomOrderCount is a count of orders per account and denom. */
export interface AccountDenomOrdersCount {
    accountNumber: number;
    denom: string;
    ordersCount: number;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const OrderBookDataWithID: MessageFns<OrderBookDataWithID>;
export declare const AccountDenomOrdersCount: MessageFns<AccountDenomOrdersCount>;
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
