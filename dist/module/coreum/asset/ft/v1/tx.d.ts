import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../../cosmos/base/coin";
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
    /** unified_ref_amount is the approximate amount you need to buy 1USD, used to define the price tick size */
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
export declare const MsgIssue: MessageFns<MsgIssue>;
export declare const ExtensionIssueSettings: MessageFns<ExtensionIssueSettings>;
export declare const MsgMint: MessageFns<MsgMint>;
export declare const MsgBurn: MessageFns<MsgBurn>;
export declare const MsgFreeze: MessageFns<MsgFreeze>;
export declare const MsgUnfreeze: MessageFns<MsgUnfreeze>;
export declare const MsgSetFrozen: MessageFns<MsgSetFrozen>;
export declare const MsgGloballyFreeze: MessageFns<MsgGloballyFreeze>;
export declare const MsgGloballyUnfreeze: MessageFns<MsgGloballyUnfreeze>;
export declare const MsgClawback: MessageFns<MsgClawback>;
export declare const MsgSetWhitelistedLimit: MessageFns<MsgSetWhitelistedLimit>;
export declare const MsgTransferAdmin: MessageFns<MsgTransferAdmin>;
export declare const MsgClearAdmin: MessageFns<MsgClearAdmin>;
export declare const MsgUpgradeTokenV1: MessageFns<MsgUpgradeTokenV1>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateDEXUnifiedRefAmount: MessageFns<MsgUpdateDEXUnifiedRefAmount>;
export declare const MsgUpdateDEXWhitelistedDenoms: MessageFns<MsgUpdateDEXWhitelistedDenoms>;
export declare const EmptyResponse: MessageFns<EmptyResponse>;
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
export declare const MsgServiceName = "coreum.asset.ft.v1.Msg";
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
