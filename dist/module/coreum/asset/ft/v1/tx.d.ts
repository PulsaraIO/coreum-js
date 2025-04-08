import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { DEXSettings, Feature } from "./token";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssue {
    issuer: string;
    symbol: string;
    subunit: string;
    precision: number;
    initialAmount: string;
    description: string;
    features: Feature[];
    /**
     * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * burn_amount. This value will be burnt on top of the send amount.
     */
    burnRate: string;
    /**
     * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * amount sent to the token admin account.
     */
    sendCommissionRate: string;
    uri: string;
    uriHash: string;
    /** extension_settings must be provided in case wasm extensions are enabled. */
    extensionSettings: ExtensionIssueSettings | undefined;
    /** dex_settings allowed to be customized by issuer */
    dexSettings: DEXSettings | undefined;
}
/**
 * ExtensionIssueSettings are settings that will be used to Instantiate the smart contract which contains
 * the source code for the extension.
 */
export interface ExtensionIssueSettings {
    /** code_id is the reference to the stored WASM code */
    codeId: number;
    /** label is optional metadata to be stored with a contract instance. */
    label: string;
    /** funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** optional json encoded data to pass to WASM on instantiation by the ft issuer */
    issuanceMsg: Uint8Array;
}
export interface MsgMint {
    sender: string;
    coin: Coin | undefined;
    recipient: string;
}
export interface MsgBurn {
    sender: string;
    coin: Coin | undefined;
}
export interface MsgFreeze {
    sender: string;
    account: string;
    coin: Coin | undefined;
}
export interface MsgUnfreeze {
    sender: string;
    account: string;
    coin: Coin | undefined;
}
export interface MsgSetFrozen {
    sender: string;
    account: string;
    coin: Coin | undefined;
}
export interface MsgGloballyFreeze {
    sender: string;
    denom: string;
}
export interface MsgGloballyUnfreeze {
    sender: string;
    denom: string;
}
export interface MsgClawback {
    sender: string;
    account: string;
    coin: Coin | undefined;
}
export interface MsgSetWhitelistedLimit {
    sender: string;
    account: string;
    coin: Coin | undefined;
}
export interface MsgTransferAdmin {
    sender: string;
    account: string;
    denom: string;
}
export interface MsgClearAdmin {
    sender: string;
    denom: string;
}
/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1 {
    sender: string;
    denom: string;
    ibcEnabled: boolean;
}
export interface MsgUpdateParams {
    authority: string;
    params: Params | undefined;
}
export interface MsgUpdateDEXUnifiedRefAmount {
    sender: string;
    denom: string;
    /** unified_ref_amount is the approximate amount you need to by 1USD, used to define the price tick size */
    unifiedRefAmount: string;
}
export interface MsgUpdateDEXWhitelistedDenoms {
    sender: string;
    denom: string;
    /** whitelisted_denoms is the list of denoms to trade with. */
    whitelistedDenoms: string[];
}
export interface EmptyResponse {
}
export declare const MsgIssue: {
    encode(message: MsgIssue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue;
    fromJSON(object: any): MsgIssue;
    toJSON(message: MsgIssue): unknown;
    create<I extends Exact<DeepPartial<MsgIssue>, I>>(base?: I): MsgIssue;
    fromPartial<I extends Exact<DeepPartial<MsgIssue>, I>>(object: I): MsgIssue;
};
export declare const ExtensionIssueSettings: {
    encode(message: ExtensionIssueSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionIssueSettings;
    fromJSON(object: any): ExtensionIssueSettings;
    toJSON(message: ExtensionIssueSettings): unknown;
    create<I extends Exact<DeepPartial<ExtensionIssueSettings>, I>>(base?: I): ExtensionIssueSettings;
    fromPartial<I extends Exact<DeepPartial<ExtensionIssueSettings>, I>>(object: I): ExtensionIssueSettings;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    create<I extends Exact<DeepPartial<MsgMint>, I>>(base?: I): MsgMint;
    fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    create<I extends Exact<DeepPartial<MsgBurn>, I>>(base?: I): MsgBurn;
    fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn;
};
export declare const MsgFreeze: {
    encode(message: MsgFreeze, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreeze;
    fromJSON(object: any): MsgFreeze;
    toJSON(message: MsgFreeze): unknown;
    create<I extends Exact<DeepPartial<MsgFreeze>, I>>(base?: I): MsgFreeze;
    fromPartial<I extends Exact<DeepPartial<MsgFreeze>, I>>(object: I): MsgFreeze;
};
export declare const MsgUnfreeze: {
    encode(message: MsgUnfreeze, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfreeze;
    fromJSON(object: any): MsgUnfreeze;
    toJSON(message: MsgUnfreeze): unknown;
    create<I extends Exact<DeepPartial<MsgUnfreeze>, I>>(base?: I): MsgUnfreeze;
    fromPartial<I extends Exact<DeepPartial<MsgUnfreeze>, I>>(object: I): MsgUnfreeze;
};
export declare const MsgSetFrozen: {
    encode(message: MsgSetFrozen, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFrozen;
    fromJSON(object: any): MsgSetFrozen;
    toJSON(message: MsgSetFrozen): unknown;
    create<I extends Exact<DeepPartial<MsgSetFrozen>, I>>(base?: I): MsgSetFrozen;
    fromPartial<I extends Exact<DeepPartial<MsgSetFrozen>, I>>(object: I): MsgSetFrozen;
};
export declare const MsgGloballyFreeze: {
    encode(message: MsgGloballyFreeze, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGloballyFreeze;
    fromJSON(object: any): MsgGloballyFreeze;
    toJSON(message: MsgGloballyFreeze): unknown;
    create<I extends Exact<DeepPartial<MsgGloballyFreeze>, I>>(base?: I): MsgGloballyFreeze;
    fromPartial<I extends Exact<DeepPartial<MsgGloballyFreeze>, I>>(object: I): MsgGloballyFreeze;
};
export declare const MsgGloballyUnfreeze: {
    encode(message: MsgGloballyUnfreeze, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGloballyUnfreeze;
    fromJSON(object: any): MsgGloballyUnfreeze;
    toJSON(message: MsgGloballyUnfreeze): unknown;
    create<I extends Exact<DeepPartial<MsgGloballyUnfreeze>, I>>(base?: I): MsgGloballyUnfreeze;
    fromPartial<I extends Exact<DeepPartial<MsgGloballyUnfreeze>, I>>(object: I): MsgGloballyUnfreeze;
};
export declare const MsgClawback: {
    encode(message: MsgClawback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawback;
    fromJSON(object: any): MsgClawback;
    toJSON(message: MsgClawback): unknown;
    create<I extends Exact<DeepPartial<MsgClawback>, I>>(base?: I): MsgClawback;
    fromPartial<I extends Exact<DeepPartial<MsgClawback>, I>>(object: I): MsgClawback;
};
export declare const MsgSetWhitelistedLimit: {
    encode(message: MsgSetWhitelistedLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWhitelistedLimit;
    fromJSON(object: any): MsgSetWhitelistedLimit;
    toJSON(message: MsgSetWhitelistedLimit): unknown;
    create<I extends Exact<DeepPartial<MsgSetWhitelistedLimit>, I>>(base?: I): MsgSetWhitelistedLimit;
    fromPartial<I extends Exact<DeepPartial<MsgSetWhitelistedLimit>, I>>(object: I): MsgSetWhitelistedLimit;
};
export declare const MsgTransferAdmin: {
    encode(message: MsgTransferAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferAdmin;
    fromJSON(object: any): MsgTransferAdmin;
    toJSON(message: MsgTransferAdmin): unknown;
    create<I extends Exact<DeepPartial<MsgTransferAdmin>, I>>(base?: I): MsgTransferAdmin;
    fromPartial<I extends Exact<DeepPartial<MsgTransferAdmin>, I>>(object: I): MsgTransferAdmin;
};
export declare const MsgClearAdmin: {
    encode(message: MsgClearAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    create<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(base?: I): MsgClearAdmin;
    fromPartial<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(object: I): MsgClearAdmin;
};
export declare const MsgUpgradeTokenV1: {
    encode(message: MsgUpgradeTokenV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeTokenV1;
    fromJSON(object: any): MsgUpgradeTokenV1;
    toJSON(message: MsgUpgradeTokenV1): unknown;
    create<I extends Exact<DeepPartial<MsgUpgradeTokenV1>, I>>(base?: I): MsgUpgradeTokenV1;
    fromPartial<I extends Exact<DeepPartial<MsgUpgradeTokenV1>, I>>(object: I): MsgUpgradeTokenV1;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateDEXUnifiedRefAmount: {
    encode(message: MsgUpdateDEXUnifiedRefAmount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDEXUnifiedRefAmount;
    fromJSON(object: any): MsgUpdateDEXUnifiedRefAmount;
    toJSON(message: MsgUpdateDEXUnifiedRefAmount): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateDEXUnifiedRefAmount>, I>>(base?: I): MsgUpdateDEXUnifiedRefAmount;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateDEXUnifiedRefAmount>, I>>(object: I): MsgUpdateDEXUnifiedRefAmount;
};
export declare const MsgUpdateDEXWhitelistedDenoms: {
    encode(message: MsgUpdateDEXWhitelistedDenoms, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDEXWhitelistedDenoms;
    fromJSON(object: any): MsgUpdateDEXWhitelistedDenoms;
    toJSON(message: MsgUpdateDEXWhitelistedDenoms): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateDEXWhitelistedDenoms>, I>>(base?: I): MsgUpdateDEXWhitelistedDenoms;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateDEXWhitelistedDenoms>, I>>(object: I): MsgUpdateDEXWhitelistedDenoms;
};
export declare const EmptyResponse: {
    encode(_: EmptyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmptyResponse;
    fromJSON(_: any): EmptyResponse;
    toJSON(_: EmptyResponse): unknown;
    create<I extends Exact<DeepPartial<EmptyResponse>, I>>(base?: I): EmptyResponse;
    fromPartial<I extends Exact<DeepPartial<EmptyResponse>, I>>(_: I): EmptyResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** Issue defines a method to issue a new fungible token. */
    Issue(request: MsgIssue): Promise<EmptyResponse>;
    /** Mint mints new fungible tokens. */
    Mint(request: MsgMint): Promise<EmptyResponse>;
    /** Burn burns the specified fungible tokens from senders balance if the sender has enough balance. */
    Burn(request: MsgBurn): Promise<EmptyResponse>;
    /**
     * Freeze freezes a part of the fungible tokens in an
     * account, only if the freezable feature is enabled on that token.
     */
    Freeze(request: MsgFreeze): Promise<EmptyResponse>;
    /**
     * Unfreeze unfreezes a part of the frozen fungible tokens in an
     * account, only if there are such frozen tokens on that account.
     */
    Unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
    /** SetFrozen sets the absolute value of frozen amount. */
    SetFrozen(request: MsgSetFrozen): Promise<EmptyResponse>;
    /**
     * GloballyFreeze freezes fungible token so no operations are allowed with it before unfrozen.
     * This operation is idempotent so global freeze of already frozen token does nothing.
     */
    GloballyFreeze(request: MsgGloballyFreeze): Promise<EmptyResponse>;
    /**
     * GloballyUnfreeze unfreezes fungible token and unblocks basic operations on it.
     * This operation is idempotent so global unfreezing of non-frozen token does nothing.
     */
    GloballyUnfreeze(request: MsgGloballyUnfreeze): Promise<EmptyResponse>;
    /**
     * Clawback confiscates a part of fungible tokens from an account
     * to the admin, only if the clawback feature is enabled on that token.
     */
    Clawback(request: MsgClawback): Promise<EmptyResponse>;
    /** SetWhitelistedLimit sets the limit of how many tokens a specific account may hold. */
    SetWhitelistedLimit(request: MsgSetWhitelistedLimit): Promise<EmptyResponse>;
    /** TransferAdmin changes admin of a fungible token. */
    TransferAdmin(request: MsgTransferAdmin): Promise<EmptyResponse>;
    /** ClearAdmin removes admin of a fungible token. */
    ClearAdmin(request: MsgClearAdmin): Promise<EmptyResponse>;
    /** TokenUpgradeV1 upgrades token to version V1. */
    UpgradeTokenV1(request: MsgUpgradeTokenV1): Promise<EmptyResponse>;
    /**
     * UpdateParams is a governance operation to modify the parameters of the module.
     * NOTE: all parameters must be provided.
     */
    UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
    /** UpdateDEXUnifiedRefAmount updates DEX unified ref amount. */
    UpdateDEXUnifiedRefAmount(request: MsgUpdateDEXUnifiedRefAmount): Promise<EmptyResponse>;
    /** UpdateDEXWhitelistedDenoms updates DEX whitelisted denoms. */
    UpdateDEXWhitelistedDenoms(request: MsgUpdateDEXWhitelistedDenoms): Promise<EmptyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Issue(request: MsgIssue): Promise<EmptyResponse>;
    Mint(request: MsgMint): Promise<EmptyResponse>;
    Burn(request: MsgBurn): Promise<EmptyResponse>;
    Freeze(request: MsgFreeze): Promise<EmptyResponse>;
    Unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
    SetFrozen(request: MsgSetFrozen): Promise<EmptyResponse>;
    GloballyFreeze(request: MsgGloballyFreeze): Promise<EmptyResponse>;
    GloballyUnfreeze(request: MsgGloballyUnfreeze): Promise<EmptyResponse>;
    Clawback(request: MsgClawback): Promise<EmptyResponse>;
    SetWhitelistedLimit(request: MsgSetWhitelistedLimit): Promise<EmptyResponse>;
    TransferAdmin(request: MsgTransferAdmin): Promise<EmptyResponse>;
    ClearAdmin(request: MsgClearAdmin): Promise<EmptyResponse>;
    UpgradeTokenV1(request: MsgUpgradeTokenV1): Promise<EmptyResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
    UpdateDEXUnifiedRefAmount(request: MsgUpdateDEXUnifiedRefAmount): Promise<EmptyResponse>;
    UpdateDEXWhitelistedDenoms(request: MsgUpdateDEXWhitelistedDenoms): Promise<EmptyResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
