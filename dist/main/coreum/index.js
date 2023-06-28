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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUE0RDtBQUM1RCwrQkFBd0M7QUFDeEMseUNBQXlEO0FBQ3pELDBDQVEyQjtBQUMzQix5Q0FTMEI7QUFTMUI7O0dBRUc7QUFDVSxRQUFBLGNBQWMsR0FBMkM7SUFDcEUsR0FBRyx1QkFBZTtJQUNsQixHQUFHLHdCQUFnQjtJQUNuQixHQUFHLHFCQUFlO0NBQ25CLENBQUM7QUFFRjs7R0FFRztBQUNILElBQWlCLEVBQUUsQ0E0R2xCO0FBNUdELFdBQWlCLEVBQUU7SUFDakI7Ozs7O09BS0c7SUFDVSxPQUFJLEdBQUcsVUFBVSxNQUFzQjtRQUNsRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxLQUFLLEVBQUUsWUFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGOzs7OztPQUtHO0lBQ1UsUUFBSyxHQUFHLFVBQVUsTUFBdUI7UUFDcEQsT0FBTztZQUNMLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsS0FBSyxFQUFFLGFBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRjs7Ozs7T0FLRztJQUNVLE9BQUksR0FBRyxVQUFVLE1BQXNCO1FBQ2xELE9BQU87WUFDTCxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLEtBQUssRUFBRSxZQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDVSxTQUFNLEdBQUcsVUFBVSxNQUF3QjtRQUN0RCxPQUFPO1lBQ0wsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxLQUFLLEVBQUUsY0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdkMsQ0FBQztJQUNKLENB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