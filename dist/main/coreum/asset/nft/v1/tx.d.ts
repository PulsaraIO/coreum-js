import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { ClassFeature } from "./nft";
export declare const protobufPackage = "coreum.asset.nft.v1";
/** MsgIssueClass defines message for the IssueClass method. */
export interface MsgIssueClass {
    issuer: string;
    symbol: string;
    name: string;
    description: string;
    uri: string;
    uriHash: string;
    data?: Any;
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
    data?: Any;
    recipient: string;
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
export interface EmptyResponse {
}
export declare const MsgIssueClass: {
    encode(message: MsgIssueClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueClass;
    fromJSON(object: any): MsgIssueClass;
    toJSON(message: MsgIssueClass): unknown;
    create<I extends Exact<DeepPartial<MsgIssueClass>, I>>(base?: I): MsgIssueClass;
    fromPartial<I extends Exact<DeepPartial<MsgIssueClass>, I>>(object: I): MsgIssueClass;
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
export declare const MsgAddToWhitelist: {
    encode(message: MsgAddToWhitelist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToWhitelist;
    fromJSON(object: any): MsgAddToWhitelist;
    toJSON(message: MsgAddToWhitelist): unknown;
    create<I extends Exact<DeepPartial<MsgAddToWhitelist>, I>>(base?: I): MsgAddToWhitelist;
    fromPartial<I extends Exact<DeepPartial<MsgAddToWhitelist>, I>>(object: I): MsgAddToWhitelist;
};
export declare const MsgRemoveFromWhitelist: {
    encode(message: MsgRemoveFromWhitelist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFromWhitelist;
    fromJSON(object: any): MsgRemoveFromWhitelist;
    toJSON(message: MsgRemoveFromWhitelist): unknown;
    create<I extends Exact<DeepPartial<MsgRemoveFromWhitelist>, I>>(base?: I): MsgRemoveFromWhitelist;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveFromWhitelist>, I>>(object: I): MsgRemoveFromWhitelist;
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
    /** IssueClass creates new non-fungible token class. */
    IssueClass(request: MsgIssueClass): Promise<EmptyResponse>;
    /** Mint mints new non-fungible token in the class. */
    Mint(request: MsgMint): Promise<EmptyResponse>;
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
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    IssueClass(request: MsgIssueClass): Promise<EmptyResponse>;
    Mint(request: MsgMint): Promise<EmptyResponse>;
    Burn(request: MsgBurn): Promise<EmptyResponse>;
    Freeze(request: MsgFreeze): Promise<EmptyResponse>;
    Unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
    AddToWhitelist(request: MsgAddToWhitelist): Promise<EmptyResponse>;
    RemoveFromWhitelist(request: MsgRemoveFromWhitelist): Promise<EmptyResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
