"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEX = exports.NFT = exports.FT = exports.coreumRegistry = exports.ClassFeature = exports.Feature = void 0;
const asset_1 = require("./asset");
const nft_1 = require("./nft");
const dex_1 = require("./dex");
const tx_1 = require("./nft/v1beta1/tx");
const tx_2 = require("./asset/nft/v1/tx");
const tx_3 = require("./asset/ft/v1/tx");
const tx_4 = require("./dex/v1/tx");
var token_1 = require("./asset/ft/v1/token");
Object.defineProperty(exports, "Feature", { enumerable: true, get: function () { return token_1.Feature; } });
var nft_2 = require("./asset/nft/v1/nft");
Object.defineProperty(exports, "ClassFeature", { enumerable: true, get: function () { return nft_2.ClassFeature; } });
/**
 * Registry of the Custom Messages of the Coreum blockchain
 */
exports.coreumRegistry = [
    ...asset_1.assetFtRegistry,
    ...asset_1.assetNftRegistry,
    ...nft_1.nftBetaRegistry,
    ...dex_1.dexRegistry,
];
/**
 * Transaction Module for the Fungible Tokens module. (assetft)
 */
var FT;
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
            value: tx_3.MsgMint.fromPartial(object),
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
            value: tx_3.MsgIssue.fromPartial(object),
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
            value: tx_3.MsgBurn.fromPartial(object),
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
            value: tx_3.MsgFreeze.fromPartial(object),
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
            value: tx_3.MsgGloballyFreeze.fromPartial(object),
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
            value: tx_3.MsgGloballyUnfreeze.fromPartial(object),
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
            value: tx_3.MsgUnfreeze.fromPartial(object),
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
            value: tx_3.MsgSetWhitelistedLimit.fromPartial(object),
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
            value: tx_3.MsgClawback.fromPartial(object),
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
            value: tx_3.MsgUpdateDEXUnifiedRefAmount.fromPartial(object),
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
            value: tx_3.MsgUpdateDEXWhitelistedDenoms.fromPartial(object),
        };
    };
})(FT || (exports.FT = FT = {}));
/**
 * Transaction Module for the Non-Fungible Tokens modules (assetnft, nftbeta).
 */
var NFT;
(function (NFT) {
    /** MsgMint message creator
     * Mints new non-fungible token in the class.
     *
     * @param object Represents the properties available for this MsgMint message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Mint = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgMint",
            value: tx_2.MsgMint.fromPartial(object),
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
            value: tx_2.MsgAddToWhitelist.fromPartial(object),
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
            value: tx_2.MsgRemoveFromWhitelist.fromPartial(object),
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
            value: tx_2.MsgBurn.fromPartial(object),
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
            value: tx_2.MsgFreeze.fromPartial(object),
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
            value: tx_2.MsgUnfreeze.fromPartial(object),
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
            value: tx_2.MsgIssueClass.fromPartial(object),
        };
    };
    /** MsgSend message creator
     * Represents a message to send a nft from one account to another account.
     *
     * @param object Represents the properties available for this MsgSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Send = function (object) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.MsgSend",
            value: tx_1.MsgSend.fromPartial(object),
        };
    };
})(NFT || (exports.NFT = NFT = {}));
/**
 * Transaction Module for the DEX module
 */
var DEX;
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
            value: tx_4.MsgPlaceOrder.fromPartial(object),
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
            value: tx_4.MsgCancelOrder.fromPartial(object),
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
            value: tx_4.MsgUpdateParams.fromPartial(object),
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
            value: tx_4.MsgCancelOrdersByDenom.fromPartial(object),
        };
    };
})(DEX || (exports.DEX = DEX = {}));
