import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
export declare const protobufPackage = "coreum.feemodel.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** min_gas_price is the current minimum gas price required by the chain. */
    minGasPrice?: DecCoin;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
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
