import { assetNftRegistry, assetFtRegistry } from "./asset";
import { MsgIssueClass as NFTMsgIssueClass, MsgMint as NFTMsgMint, MsgAddToWhitelist as NFTMsgAddToWhitelist, MsgBurn as NFTMsgBurn, MsgRemoveFromWhitelist as NFTMsgRemoveFromWhitelist, MsgFreeze as NFTMsgFreeze, MsgUnfreeze as NFTMsgUnfreeze, MsgUpdateData, } from "./asset/nft/v1/tx";
import { MsgIssue as FTMsgIssue, MsgMint as FTMsgMint, MsgBurn as FTMsgBurn, MsgFreeze as FTMsgFreeze, MsgUnfreeze as FTMsgUnfreeze, MsgGloballyFreeze as FTMsgGloballyFreeze, MsgGloballyUnfreeze as FTMsgGloballyUnfreeze, MsgSetWhitelistedLimit as FTMsgSetWhitelistedLimit, MsgClawback as FTMsgClawback, MsgUpdateDEXUnifiedRefAmount, MsgUpdateDEXWhitelistedDenoms, } from "./asset/ft/v1/tx";
import { MsgCancelOrder, MsgCancelOrdersByDenom, MsgPlaceOrder, MsgUpdateParams, } from "./dex/v1/tx";
import { MsgSend } from "cosmjs-types/cosmos/nft/v1beta1/tx";
import { dexRegistry } from "./dex";
export { Feature } from "./asset/ft/v1/token";
export { ClassFeature } from "./asset/nft/v1/nft";
/**
 * Registry of the Custom Messages of the Coreum blockchain
 */
export const coreumRegistry = [
    ...assetFtRegistry,
    ...assetNftRegistry,
    ...dexRegistry,
];
/**
 * Transaction Module for the Fungible Tokens module. (assetft)
 */
export var FT;
(function (FT) {
    /** MsgMint message creator
     * Mints new fungible tokens.
     *
     * @param object Represents the properties available for this MsgMint message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.Mint = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgMint",
            value: FTMsgMint.fromPartial(object),
        };
    };
    /** MsgIssue message creator
     * Defines a method to issue a new fungible token.
     *
     * @param object Represents the properties available for this MsgIssue message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.Issue = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgIssue",
            value: FTMsgIssue.fromPartial(object),
        };
    };
    /** MsgBurn message creator
     * Burns the specified fungible tokens from senders balance if the sender has enough balance.
     *
     * @param object Represents the properties available for this MsgBurn message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.Burn = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgBurn",
            value: FTMsgBurn.fromPartial(object),
        };
    };
    /** MsgFreeze message creator
     * Freezes a part of the fungible tokens in an account, only if the freezable feature is enabled on that token.
     *
     * @param object Represents the properties available for this MsgIssue message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.Freeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
            value: FTMsgFreeze.fromPartial(object),
        };
    };
    /** MsgGloballyFreeze message creator
     * Freezes fungible token so no operations are allowed with it before unfrozen. This operation is idempotent so global freeze of already frozen token does nothing.
     *
     * @param object Represents the properties available for this MsgGloballyFreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.GloballyFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
            value: FTMsgGloballyFreeze.fromPartial(object),
        };
    };
    /** MsgGloballyUnfreeze message creator
     * Unfreezes fungible token and unblocks basic operations on it. This operation is idempotent so global unfreezing of non-frozen token does nothing.
     *
     * @param object Represents the properties available for this MsgGloballyUnfreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.GloballyUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
            value: FTMsgGloballyUnfreeze.fromPartial(object),
        };
    };
    /** MsgUnfreeze message creator
     * Unfreezes a part of the frozen fungible tokens in an account, only if there are such frozen tokens on that account.
     *
     * @param object Represents the properties available for this MsgUnfreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.Unfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
            value: FTMsgUnfreeze.fromPartial(object),
        };
    };
    /** MsgSetWhitelistedLimit message creator
     * Sets the limit of how many tokens a specific account may hold.
     *
     * @param object Represents the properties available for this MsgSetWhitelistedLimit message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.SetWhitelistedLimit = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
            value: FTMsgSetWhitelistedLimit.fromPartial(object),
        };
    };
    /** MsgClawback message creator
     * Clawbacks the assets from the specific address.
     *
     * @param object Represents the properties available for this MsgClawback message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.Clawback = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgClawback",
            value: FTMsgClawback.fromPartial(object),
        };
    };
    /** MsgUpdateDEXUnifiedRefAmount
     * Updates DEX unified ref amount.
     *
     * @param object Represents the properties available for this MsgUpdateDEXUnifiedRefAmount message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.UpdateDEXUnifiedRefAmount = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgUpdateDEXUnifiedRefAmount",
            value: MsgUpdateDEXUnifiedRefAmount.fromPartial(object),
        };
    };
    /** MsgUpdateDEXWhitelistedDenoms
     * Updates DEX unified ref amount.
     *
     * @param object Represents the properties available for this MsgUpdateDEXWhitelistedDenoms message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    FT.UpdateDEXWhitelistedDenoms = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgUpdateDEXWhitelistedDenoms",
            value: MsgUpdateDEXWhitelistedDenoms.fromPartial(object),
        };
    };
})(FT || (FT = {}));
/**
 * Transaction Module for the Non-Fungible Tokens modules (assetnft, nftbeta).
 */
export var NFT;
(function (NFT) {
    /** MsgSend message creator
     * Sends an NFT from one address to another
     *
     * @param object Represents the properties available for this MsgSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Send = function (object) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.MsgSend",
            value: MsgSend.fromPartial(object),
        };
    };
    /** MsgMint message creator
     * Mints new non-fungible token in the class.
     *
     * @param object Represents the properties available for this MsgMint message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Mint = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgMint",
            value: NFTMsgMint.fromPartial(object),
        };
    };
    /** MsgAddToWhitelist message creator
     * Sets the account as whitelisted to hold the NFT
     *
     * @param object Represents the properties available for this MsgAddToWhitelist message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.AddToWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
            value: NFTMsgAddToWhitelist.fromPartial(object),
        };
    };
    /** MsgRemoveFromWhitelist message creator
     * Removes an account from whitelisted list of the NFT
     *
     * @param object Represents the properties available for this MsgRemoveFromWhitelist message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.RemoveFromWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
            value: NFTMsgRemoveFromWhitelist.fromPartial(object),
        };
    };
    /** MsgBurn message creator
     * Burns the existing non-fungible token in the class.
     *
     * @param object Represents the properties available for this MsgBurn message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Burn = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgBurn",
            value: NFTMsgBurn.fromPartial(object),
        };
    };
    /** MsgFreeze message creator
     * Freezes an NFT
     *
     * @param object Represents the properties available for this MsgFreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Freeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
            value: NFTMsgFreeze.fromPartial(object),
        };
    };
    /** MsgUnfreeze message creator
     * Removes the freeze effect already put on an NFT
     *
     * @param object Represents the properties available for this MsgUnfreeze message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Unfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
            value: NFTMsgUnfreeze.fromPartial(object),
        };
    };
    /** MsgIssueClass message creator
     * Creates new non-fungible token class.
     *
     * @param object Represents the properties available for this MsgIssueClass message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.IssueClass = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
            value: NFTMsgIssueClass.fromPartial(object),
        };
    };
    /** MsgUpdateData message creator
     * Represents a message to send a nft from one account to another account.
     *
     * @param object Represents the properties available for this MsgUpdateData message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.UpdateData = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgUpdateData",
            value: MsgUpdateData.fromPartial(object),
        };
    };
})(NFT || (NFT = {}));
/**
 * Transaction Module for the DEX module
 */
export var DEX;
(function (DEX) {
    /** MsgPlaceOrder message creator
     * Places a new order on the native DEX
     *
     * @param object Represents the properties available for this MsgPlaceOrder message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    DEX.PlaceOrder = function (object) {
        return {
            typeUrl: "/coreum.dex.v1.MsgPlaceOrder",
            value: MsgPlaceOrder.fromPartial(object),
        };
    };
    /** MsgCancelOrder message creator
     * Cancels an order by ID
     *
     * @param object Represents the properties available for this MsgCancelOrder message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    DEX.CancelOrder = function (object) {
        return {
            typeUrl: "/coreum.dex.v1.MsgCancelOrder",
            value: MsgCancelOrder.fromPartial(object),
        };
    };
    /** MsgUpdateParams message creator
     * Updates module parameters
     *
     * @param object Represents the properties available for this MsgUpdateParams message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    DEX.UpdateParams = function (object) {
        return {
            typeUrl: "/coreum.dex.v1.MsgUpdateParams",
            value: MsgUpdateParams.fromPartial(object),
        };
    };
    /** MsgCancelOrdersByDenom message creator
     * Cancels all existing orders by denom
     *
     * @param object Represents the properties available for this MsgCancelOrdersByDenom message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    DEX.CancelOrdersByDenom = function (object) {
        return {
            typeUrl: "/coreum.dex.v1.MsgCancelOrdersByDenom",
            value: MsgCancelOrdersByDenom.fromPartial(object),
        };
    };
})(DEX || (DEX = {}));
