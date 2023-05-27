import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSend as NFTMsgSend } from "./nft/v1beta1/tx";
import { MsgIssueClass as NFTMsgIssueClass, MsgMint as NFTMsgMint, MsgAddToWhitelist as NFTMsgAddToWhitelist, MsgBurn as NFTMsgBurn, MsgRemoveFromWhitelist as NFTMsgRemoveFromWhitelist, MsgFreeze as NFTMsgFreeze, MsgUnfreeze as NFTMsgUnfreeze } from "./asset/nft/v1/tx";
import { MsgIssue as FTMsgIssue, MsgMint as FTMsgMint, MsgBurn as FTMsgBurn, MsgFreeze as FTMsgFreeze, MsgUnfreeze as FTMsgUnfreeze, MsgGloballyFreeze as FTMsgGloballyFreeze, MsgGloballyUnfreeze as FTMsgGloballyUnfreeze, MsgSetWhitelistedLimit as FTMsgSetWhitelistedLimit } from "./asset/ft/v1/tx";
/** @internal */
export interface CoreumMessage {
    typeUrl: string;
    value: any;
}
/**
 * Registry of the Custom Messages of the Coreum blockchain
 */
export declare const coreumRegistry: ReadonlyArray<[string, GeneratedType]>;
/**
 * Transaction Module for the Fungible Tokens module. (assetft)
 */
export declare namespace FT {
    /** MsgMint message creator
     * Mints new fungible tokens.
     *
     * @param object Represents the properties available for this MsgMint message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Mint: <I extends {
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
    } & { [K_1 in Exclude<keyof I, keyof FTMsgMint>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgMint;
    };
    /** MsgIssue message creator
     * Defines a method to issue a new fungible token.
     *
     * @param object Represents the properties available for this MsgIssue message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Issue: <I extends {
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
    /** MsgBurn message creator
     * Burns the specified fungible tokens from senders balance if the sender has enough balance.
     *
     * @param object Represents the properties available for this MsgBurn message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Burn: <I extends {
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
    /** MsgFreeze message creator
     * Freezes a part of the fungible tokens in an account, only if the freezable feature is enabled on that token.
     *
     * @param object Represents the properties available for this MsgIssue message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Freeze: <I extends {
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
    /** MsgGloballyFreeze message creator
     * Freezes fungible token so no operations are allowed with it before unfrozen. This operation is idempotent so global freeze of already frozen token does nothing.
     *
     * @param object Represents the properties available for this MsgGloballyFreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const GloballyFreeze: <I extends {
        sender?: string;
        denom?: string;
    } & {
        sender?: string;
        denom?: string;
    } & { [K in Exclude<keyof I, keyof FTMsgGloballyFreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgGloballyFreeze;
    };
    /** MsgGloballyUnfreeze message creator
     * Unfreezes fungible token and unblocks basic operations on it. This operation is idempotent so global unfreezing of non-frozen token does nothing.
     *
     * @param object Represents the properties available for this MsgGloballyUnfreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const GloballyUnfreeze: <I extends {
        sender?: string;
        denom?: string;
    } & {
        sender?: string;
        denom?: string;
    } & { [K in Exclude<keyof I, keyof FTMsgGloballyUnfreeze>]: never; }>(object: I) => {
        typeUrl: string;
        value: FTMsgGloballyUnfreeze;
    };
    /** MsgUnfreeze message creator
     * Unfreezes a part of the frozen fungible tokens in an account, only if there are such frozen tokens on that account.
     *
     * @param object Represents the properties available for this MsgUnfreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Unfreeze: <I extends {
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
    /** MsgSetWhitelistedLimit message creator
     * Sets the limit of how many tokens a specific account may hold.
     *
     * @param object Represents the properties available for this MsgSetWhitelistedLimit message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const SetWhitelistedLimit: <I extends {
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
/**
 * Transaction Module for the Non-Fungible Tokens modules (assetnft, nftbeta).
 */
export declare namespace NFT {
    /** MsgMint message creator
     * Mints new non-fungible token in the class.
     *
     * @param object Represents the properties available for this MsgMint message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Mint: <I extends {
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
        } & { [K in Exclude<keyof I["data"], keyof import("../google/protobuf/any").Any>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof NFTMsgMint>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgMint;
    };
    /** MsgAddToWhitelist message creator
     * Sets the account as whitelisted to hold the NFT
     *
     * @param object Represents the properties available for this MsgAddToWhitelist message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const AddToWhitelist: <I extends {
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
    /** MsgRemoveFromWhitelist message creator
     * Removes an account from whitelisted list of the NFT
     *
     * @param object Represents the properties available for this MsgRemoveFromWhitelist message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const RemoveFromWhitelist: <I extends {
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
    /** MsgBurn message creator
     * Burns the existing non-fungible token in the class.
     *
     * @param object Represents the properties available for this MsgBurn message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Burn: <I extends {
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
    /** MsgFreeze message creator
     * Freezes an NFT
     *
     * @param object Represents the properties available for this MsgFreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Freeze: <I extends {
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
    /** MsgUnfreeze message creator
     * Removes the freeze effect already put on an NFT
     *
     * @param object Represents the properties available for this MsgUnfreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Unfreeze: <I extends {
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
    /** MsgIssueClass message creator
     * Creates new non-fungible token class.
     *
     * @param object Represents the properties available for this MsgIssueClass message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const IssueClass: <I extends {
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
        } & { [K in Exclude<keyof I["data"], keyof import("../google/protobuf/any").Any>]: never; };
        features?: import("./asset/nft/v1/nft").ClassFeature[] & import("./asset/nft/v1/nft").ClassFeature[] & { [K_1 in Exclude<keyof I["features"], keyof import("./asset/nft/v1/nft").ClassFeature[]>]: never; };
        royaltyRate?: string;
    } & { [K_2 in Exclude<keyof I, keyof NFTMsgIssueClass>]: never; }>(object: I) => {
        typeUrl: string;
        value: NFTMsgIssueClass;
    };
    /** MsgSend message creator
     * Represents a message to send a nft from one account to another account.
     *
     * @param object Represents the properties available for this MsgSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    const Send: <I extends {
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
