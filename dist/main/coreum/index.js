"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = exports.FT = exports.coreumRegistry = exports.ClassFeature = exports.Feature = void 0;
const asset_1 = require("./asset");
const nft_1 = require("./nft");
const tx_1 = require("./nft/v1beta1/tx");
const tx_2 = require("./asset/nft/v1/tx");
const tx_3 = require("./asset/ft/v1/tx");
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
})(FT = exports.FT || (exports.FT = {}));
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
            typeUrl: "/coreum.nft.v1beta1.MsgSend",
            value: tx_1.MsgSend.fromPartial(object),
        };
    };
})(NFT = exports.NFT || (exports.NFT = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUE0RDtBQUM1RCwrQkFBd0M7QUFDeEMseUNBQXlEO0FBQ3pELDBDQVEyQjtBQUMzQix5Q0FTMEI7QUFFMUIsNkNBQThDO0FBQXJDLGdHQUFBLE9BQU8sT0FBQTtBQUNoQiwwQ0FBa0Q7QUFBekMsbUdBQUEsWUFBWSxPQUFBO0FBUXJCOztHQUVHO0FBQ1UsUUFBQSxjQUFjLEdBQTJDO0lBQ3BFLEdBQUcsdUJBQWU7SUFDbEIsR0FBRyx3QkFBZ0I7SUFDbkIsR0FBRyxxQkFBZTtDQUNuQixDQUFDO0FBRUY7O0dBRUc7QUFDSCxJQUFpQixFQUFFLENBNEdsQjtBQTVHRCxXQUFpQixFQUFFO0lBQ2pCOzs7OztPQUtHO0lBQ1UsT0FBSSxHQUFHLFVBQVUsTUFBc0I7UUFDbEQsT0FBTztZQUNMLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsS0FBSyxFQUFFLFlBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3JDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRjs7Ozs7T0FLRztJQUNVLFFBQUssR0FBRyxVQUFVLE1BQXVCO1FBQ3BELE9BQU87WUFDTCxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLEtBQUssRUFBRSxhQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDVSxPQUFJLEdBQUcsVUFBVSxNQUFzQjtRQUNsRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxLQUFLLEVBQUUsWUFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGOzs7OztPQUtHO0lBQ1UsU0FBTSxHQUFHLFVBQVUsTUFBd0I7UUFDdEQsT0FBTztZQUNMLE9BQU8sRUFBRSwr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