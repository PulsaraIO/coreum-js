import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../../google/protobuf/any";
import { ClassFeature } from "./nft";
import { Params } from "./params";
import { DataDynamicIndexedItem } from "./types";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClass {
    issuer: string;
    symbol: string;
    name: string;
    description: string;
    uri: string;
    uriHash: string;
    data: Any | undefined;
    features: ClassFeature[];
    royaltyRate: string;
}
/** MsgMint defines message for the Mint method. */
export interface MsgMint {
    sender: string;
    classId: string;
    id: string;
    uri: string;
    uriHash: string;
    /** Data can be DataBytes or DataDynamic. */
    data: Any | undefined;
    recipient: string;
}
/** MsgUpdateData defines message to update the dynamic data. */
export interface MsgUpdateData {
    sender: string;
    classId: string;
    id: string;
    items: DataDynamicIndexedItem[];
}
/** MsgBurn defines message for the Burn method. */
export interface MsgBurn {
    sender: string;
    classId: string;
    id: string;
}
export interface MsgFreeze {
    sender: string;
    classId: string;
    id: string;
}
export interface MsgUnfreeze {
    sender: string;
    classId: string;
    id: string;
}
export interface MsgClassFreeze {
    sender: string;
    classId: string;
    account: string;
}
export interface MsgClassUnfreeze {
    sender: string;
    classId: string;
    account: string;
}
export interface MsgAddToWhitelist {
    sender: string;
    classId: string;
    id: string;
    account: string;
}
export interface MsgRemoveFromWhitelist {
    sender: string;
    classId: string;
    id: string;
    account: string;
}
export interface MsgAddToClassWhitelist {
    sender: string;
    classId: string;
    account: string;
}
export interface MsgRemoveFromClassWhitelist {
    sender: string;
    classId: string;
    account: string;
}
export interface MsgUpdateParams {
    authority: string;
    params: Params | undefined;
}
export interface EmptyResponse {
}
export declare const MsgIssueClass: MessageFns<MsgIssueClass>;
export declare const MsgMint: MessageFns<MsgMint>;
export declare const MsgUpdateData: MessageFns<MsgUpdateData>;
export declare const MsgBurn: MessageFns<MsgBurn>;
export declare const MsgFreeze: MessageFns<MsgFreeze>;
export declare const MsgUnfreeze: MessageFns<MsgUnfreeze>;
export declare const MsgClassFreeze: MessageFns<MsgClassFreeze>;
export declare const MsgClassUnfreeze: MessageFns<MsgClassUnfreeze>;
export declare const MsgAddToWhitelist: MessageFns<MsgAddToWhitelist>;
export declare const MsgRemoveFromWhitelist: MessageFns<MsgRemoveFromWhitelist>;
export declare const MsgAddToClassWhitelist: MessageFns<MsgAddToClassWhitelist>;
export declare const MsgRemoveFromClassWhitelist: MessageFns<MsgRemoveFromClassWhitelist>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const EmptyResponse: MessageFns<EmptyResponse>;
/** Msg defines the Msg service. */
export interface Msg {
    /** IssueClass creates new non-fungible token class. */
    IssueClass(request: MsgIssueClass): Promise<EmptyResponse>;
    /** Mint mints new non-fungible token in the class. */
    Mint(request: MsgMint): Promise<EmptyResponse>;
    /** UpdateData updates the existing non-fungible token data in the class. */
    UpdateData(request: MsgUpdateData): Promise<EmptyResponse>;
    /** Burn burns the existing non-fungible token in the class. */
    Burn(request: MsgBurn): Promise<EmptyResponse>;
    /** Freeze freezes an NFT */
    Freeze(request: MsgFreeze): Promise<EmptyResponse>;
    /** Unfreeze removes the freeze effect already put on an NFT */
    Unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
    /** AddToWhitelist sets the account as whitelisted to hold the NFT */
    AddToWhitelist(request: MsgAddToWhitelist): Promise<EmptyResponse>;
    /** RemoveFromWhitelist removes an account from whitelisted list of the NFT */
    RemoveFromWhitelist(request: MsgRemoveFromWhitelist): Promise<EmptyResponse>;
    /**
     * AddToClassWhitelist adds account as whitelist for all the NFTs in the class
     * NOTE: class whitelist does not affect the individual nft whitelisting.
     */
    AddToClassWhitelist(request: MsgAddToClassWhitelist): Promise<EmptyResponse>;
    /**
     * RemoveFromClassWhitelist removes account as whitelist for the entire class
     * NOTE:
     * class whitelist does not affect the individual nft whitelisting.
     * ie. if specific whitelist is granted for an NFT, that whitelist will
     * still be valid, ater we add and remove it from the class whitelist.
     */
    RemoveFromClassWhitelist(request: MsgRemoveFromClassWhitelist): Promise<EmptyResponse>;
    /** ClassFreeze freezes all NFTs of a class held by an account. */
    ClassFreeze(request: MsgClassFreeze): Promise<EmptyResponse>;
    /**
     * ClassUnfreeze removes class-freeze on an account for an NFT class.
     * NOTE:
     * class unfreeze does not affect the individual nft freeze.
     */
    ClassUnfreeze(request: MsgClassUnfreeze): Promise<EmptyResponse>;
    /**
     * UpdateParams is a governance operation that sets the parameters of the module.
     * NOTE: all parameters must be provided.
     */
    UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
}
export declare const MsgServiceName = "coreum.asset.nft.v1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    IssueClass(request: MsgIssueClass): Promise<EmptyResponse>;
    Mint(request: MsgMint): Promise<EmptyResponse>;
    UpdateData(request: MsgUpdateData): Promise<EmptyResponse>;
    Burn(request: MsgBurn): Promise<EmptyResponse>;
    Freeze(request: MsgFreeze): Promise<EmptyResponse>;
    Unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
    AddToWhitelist(request: MsgAddToWhitelist): Promise<EmptyResponse>;
    RemoveFromWhitelist(request: MsgRemoveFromWhitelist): Promise<EmptyResponse>;
    AddToClassWhitelist(request: MsgAddToClassWhitelist): Promise<EmptyResponse>;
    RemoveFromClassWhitelist(request: MsgRemoveFromClassWhitelist): Promise<EmptyResponse>;
    ClassFreeze(request: MsgClassFreeze): Promise<EmptyResponse>;
    ClassUnfreeze(request: MsgClassUnfreeze): Promise<EmptyResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
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
