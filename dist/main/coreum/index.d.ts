import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSend as NFTMsgSend } from "@/coreum/nft/v1beta1/tx";
import { MsgIssueClass as NFTMsgIssueClass, MsgMint as NFTMsgMint, MsgAddToWhitelist as NFTMsgAddToWhitelist, MsgBurn as NFTMsgBurn, MsgRemoveFromWhitelist as NFTMsgRemoveFromWhitelist, MsgFreeze as NFTMsgFreeze, MsgUnfreeze as NFTMsgUnfreeze } from "./asset/nft/v1/tx";
import { MsgIssue as FTMsgIssue, MsgMint as FTMsgMint, MsgBurn as FTMsgBurn, MsgFreeze as FTMsgFreeze, MsgUnfreeze as FTMsgUnfreeze, MsgGloballyFreeze as FTMsgGloballyFreeze, MsgGloballyUnfreeze as FTMsgGloballyUnfreeze, MsgSetWhitelistedLimit as FTMsgSetWhitelistedLimit } from "./asset/ft/v1/tx";
export interface CoreumMessage {
    typeUrl: string;
    value: any;
}
export declare const coreumRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare namespace FT {
    const MsgMint: <I extends {
        classId?: string;
        id?: string;
        sender?: string;
        receiver?: string;
    } & {
        classId?: string;
        id?: string;
        sender?: string;
        receiver?: string;
    } & { [K in Exclude<keyof I, keyof NFTMsgSend>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgMint;
    };
    const MsgIssue: <I extends {
        issuer?: string;
        symbol?: string;
        subunit?: string;
        precision?: number;
        initialAmount?: string;
        description?: string;
        features?: import("./asset/ft/v1/token").Feature[];
        burnRate?: string;
        sendCommissionRate?: string;
    } & {
        issuer?: string;
        symbol?: string;
        subunit?: string;
        precision?: number;
        initialAmount?: string;
        description?: string;
        features?: import("./asset/ft/v1/token").Feature[] & import("./asset/ft/v1/token").Feature[] & { [K in Exclude<keyof I["features"], keyof import("./asset/ft/v1/token").Feature[]>]: never; };
        burnRate?: string;
        sendCommissionRate?: string;
    } & { [K_1 in Exclude<keyof I, keyof FTMsgIssue>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgIssue;
    };
    const MsgBurn: <I extends {
        sender?: string;
        coin?: {
            denom?: string;
            amount?: string;
        };
    } & {
        sender?: string;
        coin?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof FTMsgBurn>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgBurn;
    };
    const MsgFreeze: <I extends {
        sender?: string;
        account?: string;
        coin?: {
            denom?: string;
            amount?: string;
        };
    } & {
        sender?: string;
        account?: string;
        coin?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof FTMsgFreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgFreeze;
    };
    const MsgGloballyFreeze: <I extends {
        sender?: string;
        denom?: string;
    } & {
        sender?: string;
        denom?: string;
    } & { [K in Exclude<keyof I, keyof FTMsgGloballyFreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgGloballyFreeze;
    };
    const MsgGloballyUnfreeze: <I extends {
        sender?: string;
        denom?: string;
    } & {
        sender?: string;
        denom?: string;
    } & { [K in Exclude<keyof I, keyof FTMsgGloballyUnfreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgGloballyUnfreeze;
    };
    const MsgUnfreeze: <I extends {
        sender?: string;
        account?: string;
        coin?: {
            denom?: string;
            amount?: string;
        };
    } & {
        sender?: string;
        account?: string;
        coin?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof FTMsgUnfreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgUnfreeze;
    };
    const MsgSetWhitelistedLimit: <I extends {
        sender?: string;
        account?: string;
        coin?: {
            denom?: string;
            amount?: string;
        };
    } & {
        sender?: string;
        account?: string;
        coin?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof FTMsgSetWhitelistedLimit>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgSetWhitelistedLimit;
    };
}
export declare namespace NFT {
    const MsgMint: <I extends {
        sender?: string;
        classId?: string;
        id?: string;
        uri?: string;
        uriHash?: string;
        data?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        sender?: string;
        classId?: string;
        id?: string;
        uri?: string;
        uriHash?: string;
        data?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["data"], keyof import("./google/protobuf/any").Any>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof NFTMsgMint>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgMint;
    };
    const MsgAddToWhitelist: <I extends {
        sender?: string;
        classId?: string;
        id?: string;
        account?: string;
    } & {
        sender?: string;
        classId?: string;
        id?: string;
        account?: string;
    } & { [K in Exclude<keyof I, keyof NFTMsgAddToWhitelist>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgAddToWhitelist;
    };
    const MsgRemoveFromWhitelist: <I extends {
        sender?: string;
        classId?: string;
        id?: string;
        account?: string;
    } & {
        sender?: string;
        classId?: string;
        id?: string;
        account?: string;
    } & { [K in Exclude<keyof I, keyof NFTMsgRemoveFromWhitelist>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgRemoveFromWhitelist;
    };
    const MsgBurn: <I extends {
        sender?: string;
        classId?: string;
        id?: string;
    } & {
        sender?: string;
        classId?: string;
        id?: string;
    } & { [K in Exclude<keyof I, keyof NFTMsgBurn>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgBurn;
    };
    const MsgFreeze: <I extends {
        sender?: string;
        classId?: string;
        id?: string;
    } & {
        sender?: string;
        classId?: string;
        id?: string;
    } & { [K in Exclude<keyof I, keyof NFTMsgFreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgFreeze;
    };
    const MsgUnfreeze: <I extends {
        sender?: string;
        classId?: string;
        id?: string;
    } & {
        sender?: string;
        classId?: string;
        id?: string;
    } & { [K in Exclude<keyof I, keyof NFTMsgUnfreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgUnfreeze;
    };
    const MsgIssueClass: <I extends {
        issuer?: string;
        symbol?: string;
        name?: string;
        description?: string;
        uri?: string;
        uriHash?: string;
        data?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        features?: import("./asset/nft/v1/nft").ClassFeature[];
        royaltyRate?: string;
    } & {
        issuer?: string;
        symbol?: string;
        name?: string;
        description?: string;
        uri?: string;
        uriHash?: string;
        data?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["data"], keyof import("./google/protobuf/any").Any>]: never; };
        features?: import("./asset/nft/v1/nft").ClassFeature[] & import("./asset/nft/v1/nft").ClassFeature[] & { [K_1 in Exclude<keyof I["features"], keyof import("./asset/nft/v1/nft").ClassFeature[]>]: never; };
        royaltyRate?: string;
    } & { [K_2 in Exclude<keyof I, keyof NFTMsgIssueClass>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgIssueClass;
    };
    const MsgSend: <I extends {
        classId?: string;
        id?: string;
        sender?: string;
        receiver?: string;
    } & {
        classId?: string;
        id?: string;
        sender?: string;
        receiver?: string;
    } & { [K in Exclude<keyof I, keyof NFTMsgSend>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgSend;
    };
}
