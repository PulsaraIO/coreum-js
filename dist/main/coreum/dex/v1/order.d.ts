import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
export declare const protobufPackage = "coreum.dex.v1";
/** Side is order side. */
export declare enum Side {
    /** SIDE_UNSPECIFIED - SIDE_UNSPECIFIED reserves the default value, to protect against unexpected settings. */
    SIDE_UNSPECIFIED = 0,
    /** SIDE_BUY - SIDE_BUY means that the order is to buy base_denom quantity with the price. */
    SIDE_BUY = 1,
    /** SIDE_SELL - SIDE_SELL means that the order is to sell base_denom quantity with the price. */
    SIDE_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function sideFromJSON(object: any): Side;
export declare function sideToJSON(object: Side): string;
/** Type is order type. */
export declare enum OrderType {
    /** ORDER_TYPE_UNSPECIFIED - order_type_unspecified reserves the default value, to protect against unexpected settings. */
    ORDER_TYPE_UNSPECIFIED = 0,
    /** ORDER_TYPE_LIMIT - order_type_limit means that the order is limit order. */
    ORDER_TYPE_LIMIT = 1,
    /** ORDER_TYPE_MARKET - limit order_type_market that the order is market order. */
    ORDER_TYPE_MARKET = 2,
    UNRECOGNIZED = -1
}
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
/** TimeInForce is order time in force. */
export declare enum TimeInForce {
    /** TIME_IN_FORCE_UNSPECIFIED - time_in_force_unspecified reserves the default value, to protect against unexpected settings. */
    TIME_IN_FORCE_UNSPECIFIED = 0,
    /** TIME_IN_FORCE_GTC - time_in_force_gtc means that the order remains active until it is fully executed or manually canceled. */
    TIME_IN_FORCE_GTC = 1,
    /**
     * TIME_IN_FORCE_IOC - time_in_force_ioc  means that order must be executed immediately, either in full or partially. Any portion of the
     *  order that cannot be filled immediately is canceled.
     */
    TIME_IN_FORCE_IOC = 2,
    /** TIME_IN_FORCE_FOK - time_in_force_fok means that order must be fully executed or canceled. */
    TIME_IN_FORCE_FOK = 3,
    UNRECOGNIZED = -1
}
export declare function timeInForceFromJSON(object: any): TimeInForce;
export declare function timeInForceToJSON(object: TimeInForce): string;
/** GoodTil is a good til order settings. */
export interface GoodTil {
    /** good_til_block_height means that order remains active until a specific blockchain block height is reached. */
    goodTilBlockHeight: number | undefined;
    /** good_til_block_time means that order remains active until a specific blockchain block time is reached. */
    goodTilBlockTime: Date | undefined;
}
/** CancelGoodTil is a cancel good til message for the delay router. */
export interface CancelGoodTil {
    /** creator is order creator address. */
    creator: string;
    /** order_sequence is order sequence. */
    orderSequence: number;
}
/**
 * Order represents a DEX order, encapsulating both limit and market orders. It contains comprehensive information about
 * the order's state.
 */
export interface Order {
    /** creator is order creator address. */
    creator: string;
    /** type is order type. */
    type: OrderType;
    /** id is unique order ID. */
    id: string;
    /** sequence is unique order sequence generated at the time of the order placement. */
    sequence: number;
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
    /** remaining_base_quantity - is remaining quantity of base denom which user wants to sell or buy. */
    remainingBaseQuantity: string;
    /** remaining_spendable_balance - is balance up to which user wants to spend to execute the order. */
    remainingSpendableBalance: string;
    /** good_til is order good til */
    goodTil: GoodTil | undefined;
    /** time_in_force is order time in force */
    timeInForce: TimeInForce;
    /** reserve is the reserve required to save the order in the order book */
    reserve: Coin | undefined;
}
/** OrderData represents the order information for the store missing in the order book record. */
export interface OrderData {
    /** order ID provided by the creator. */
    orderId: string;
    /** order_book_id is order book ID. */
    orderBookId: number;
    /** price is value of one unit of the base_denom expressed in terms of the quote_denom. */
    price: string;
    /** quantity is amount of the base base_denom being traded. */
    quantity: string;
    /** side is order side. */
    side: Side;
    /** good_til is order good til */
    goodTil: GoodTil | undefined;
    /** reserve is the reserve required to save the order in the order book */
    reserve: Coin | undefined;
}
/** OrderBookData is a order book data used by order for the store. */
export interface OrderBookData {
    /** base_denom is base order book denom. */
    baseDenom: string;
    /** quote_denom is quote order book denom */
    quoteDenom: string;
}
/** OrderBookRecord is a single order book record, it combines both key and value from the store. */
export interface OrderBookRecord {
    /** order_book_id is order book ID. */
    orderBookId: number;
    /** side is order side. */
    side: Side;
    /** price is order book record price. */
    price: string;
    /** order_sequence is order sequence. */
    orderSequence: number;
    /** order ID provided by the creator. */
    orderId: string;
    /** account_number is account number which corresponds the order creator. */
    accountNumber: number;
    /** remaining_base_quantity - is remaining quantity of base denom which user wants to sell or buy. */
    remainingBaseQuantity: string;
    /** remaining_spendable_balance - is balance up to which user wants to spend to execute the order. */
    remainingSpendableBalance: string;
}
/** OrderBookRecordData is a single order book record used for the store. */
export interface OrderBookRecordData {
    /** order ID provided by the creator. */
    orderId: string;
    /** account_number is account number which corresponds the order creator. */
    accountNumber: number;
    /** remaining_base_quantity - is remaining quantity of base denom which user wants to sell or buy. */
    remainingBaseQuantity: string;
    /** remaining_spendable_balance - is balance up to which user wants to spend to execute the order. */
    remainingSpendableBalance: string;
}
export declare const GoodTil: MessageFns<GoodTil>;
export declare const CancelGoodTil: MessageFns<CancelGoodTil>;
export declare const Order: MessageFns<Order>;
export declare const OrderData: MessageFns<OrderData>;
export declare const OrderBookData: MessageFns<OrderBookData>;
export declare const OrderBookRecord: MessageFns<OrderBookRecord>;
export declare const OrderBookRecordData: MessageFns<OrderBookRecordData>;
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
