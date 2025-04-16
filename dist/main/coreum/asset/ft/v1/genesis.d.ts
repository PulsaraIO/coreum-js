import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { DEXSettings, Token } from "./token";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** GenesisState defines the module genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    /** tokens keep the fungible token state */
    tokens: Token[];
    /** frozen_balances contains the frozen balances on all of the accounts */
    frozenBalances: Balance[];
    /** whitelisted_balances contains the whitelisted balances on all of the accounts */
    whitelistedBalances: Balance[];
    /** pending_token_upgrades contains pending token upgrades. */
    pendingTokenUpgrades: PendingTokenUpgrade[];
    /** dex_locked_balances contains the DEX locked balances on all of the accounts */
    dexLockedBalances: Balance[];
    dexExpectedToReceiveBalances: Balance[];
    dexSettings: DEXSettingsWithDenom[];
}
/** Balance defines an account address and balance pair used module genesis genesis state. */
export interface Balance {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: Coin[];
}
/** PendingTokenUpgrade stores the version of pending token upgrade. */
export interface PendingTokenUpgrade {
    denom: string;
    version: number;
}
export interface DEXSettingsWithDenom {
    denom: string;
    dexSettings: DEXSettings | undefined;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const Balance: MessageFns<Balance>;
export declare const PendingTokenUpgrade: MessageFns<PendingTokenUpgrade>;
export declare const DEXSettingsWithDenom: MessageFns<DEXSettingsWithDenom>;
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
