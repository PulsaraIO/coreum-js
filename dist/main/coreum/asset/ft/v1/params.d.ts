import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../../cosmos/base/coin";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** Params store gov manageable parameters. */
export interface Params {
    /** issue_fee is the fee burnt each time new token is issued. */
    issueFee: Coin | undefined;
    /** token_upgrade_decision_timeout defines the end of the decision period for upgrading the token. */
    tokenUpgradeDecisionTimeout: Date | undefined;
    /** token_upgrade_grace_period the period after which the token upgrade is executed effectively. */
    tokenUpgradeGracePeriod: Duration | undefined;
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
