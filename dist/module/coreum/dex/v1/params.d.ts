import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/coin";
export declare const protobufPackage = "coreum.dex.v1";
/** Params keeps gov manageable parameters. */
export interface Params {
    /** default_unified_ref_amount is the default approximate amount you need to buy 1USD, used to for tokens without custom value */
    defaultUnifiedRefAmount: string;
    /** price_tick_exponent is the exponent used for the price tick calculation */
    priceTickExponent: number;
    /** max_orders_per_denom is the maximum number of orders per denom the user can have */
    maxOrdersPerDenom: number;
    /** order_reserve is the reserve required to save the order in the order book */
    orderReserve: Coin | undefined;
}
export declare const Params: MessageFns<Params>;
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
