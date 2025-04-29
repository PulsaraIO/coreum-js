import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "coreum.dex.v1";
/** EventOrderPlaced is emitted when a new order is placed and new sequence is generated for it. */
export interface EventOrderPlaced {
    /** creator is order creator address. */
    creator: string;
    /** id is unique order ID. */
    id: string;
    /** sequence is unique order sequence. */
    sequence: number;
}
/** EventOrderReduced is emitted when the order is reduced during the matching. */
export interface EventOrderReduced {
    /** creator is order creator address. */
    creator: string;
    /** id is unique order ID. */
    id: string;
    /** sequence is unique order sequence. */
    sequence: number;
    /** sent_coin is coin sent during matching. */
    sentCoin: string;
    /** received_coin is coin received during matching. */
    receivedCoin: string;
}
/** EventOrderCreated is emitted when the limit order is saved to the order book. */
export interface EventOrderCreated {
    /** creator is order creator address. */
    creator: string;
    /** id is unique order ID. */
    id: string;
    /** sequence is unique order sequence. */
    sequence: number;
    /** remaining_base_quantity - is remaining quantity of base denom which user wants to sell or buy. */
    remainingBaseQuantity: string;
    /** remaining_spendable_balance - is balance up to which user wants to spend to execute the order. */
    remainingSpendableBalance: string;
}
/** EventOrderClosed is emitted when the order is closed during matching or manually, and removed from the order book. */
export interface EventOrderClosed {
    /** creator is order creator address. */
    creator: string;
    /** id is unique order ID. */
    id: string;
    /** sequence is unique order sequence. */
    sequence: number;
    /** remaining_base_quantity - is remaining quantity of base denom which user wants to sell or buy. */
    remainingBaseQuantity: string;
    /** remaining_spendable_balance - is balance up to which user wants to spend to execute the order. */
    remainingSpendableBalance: string;
}
export declare const EventOrderPlaced: MessageFns<EventOrderPlaced>;
export declare const EventOrderReduced: MessageFns<EventOrderReduced>;
export declare const EventOrderCreated: MessageFns<EventOrderCreated>;
export declare const EventOrderClosed: MessageFns<EventOrderClosed>;
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
