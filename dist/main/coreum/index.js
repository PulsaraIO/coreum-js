"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = exports.FT = exports.coreumRegistry = void 0;
const asset_1 = require("./asset");
const nft_1 = require("./nft");
const tx_1 = require("./nft/v1beta1/tx");
const tx_2 = require("./asset/nft/v1/tx");
const tx_3 = require("./asset/ft/v1/tx");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUE0RDtBQUM1RCwrQkFBd0M7QUFDeEMseUNBQXlEO0FBQ3pELDBDQVEyQjtBQUMzQix5Q0FTMEI7QUFRMUI7O0dBRUc7QUFDVSxRQUFBLGNBQWMsR0FBMkM7SUFDcEUsR0FBRyx1QkFBZTtJQUNsQixHQUFHLHdCQUFnQjtJQUNuQixHQUFHLHFCQUFlO0NBQ25CLENBQUM7QUFFRjs7R0FFRztBQUNILElBQWlCLEVBQUUsQ0EwR2xCO0FBMUdELFdBQWlCLEVBQUU7SUFDakI7Ozs7O09BS0c7SUFDVSxPQUFJLEdBQUcsVUFBVSxNQUFpQjtRQUM3QyxPQUFPO1lBQ0wsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxLQUFLLEVBQUUsWUFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGOzs7OztPQUtHO0lBQ1UsUUFBSyxHQUFHLFVBQVUsTUFBa0I7UUFDL0MsT0FBTztZQUNMLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsS0FBSyxFQUFFLGFBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRjs7Ozs7T0FLRztJQUNVLE9BQUksR0FBRyxVQUFVLE1BQWlCO1FBQzdDLE9BQU87WUFDTCxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLEtBQUssRUFBRSxZQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDVSxTQUFNLEdBQUcsVUFBVSxNQUFtQjtRQUNqRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxLQUFLLEVBQUUsY0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdkMsQ0FBQztJQUNKLENB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