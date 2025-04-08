import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
