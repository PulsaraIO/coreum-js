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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUE0RDtBQUM1RCwrQkFBd0M7QUFDeEMseUNBQXlEO0FBQ3pELDBDQVUyQjtBQUMzQix5Q0FTMEI7QUFRMUI7O0dBRUc7QUFDVSxRQUFBLGNBQWMsR0FBMkM7SUFDcEUsR0FBRyx1QkFBZTtJQUNsQixHQUFHLHdCQUFnQjtJQUNuQixHQUFHLHFCQUFlO0NBQ25CLENBQUM7QUFFRjs7R0FFRztBQUNILElBQWlCLEVBQUUsQ0FnSGxCO0FBaEhELFdBQWlCLEVBQUU7SUFDakI7Ozs7T0FJRztJQUNVLE9BQUksR0FBRyxVQUNsQixNQUFTO1FBRVQsT0FBTztZQUNMLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsS0FBSyxFQUFFLFlBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3JDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRjs7OztPQUlHO0lBQ1UsUUFBSyxHQUFHLFVBQ25CLE1BQVM7UUFFVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLDhCQUE4QjtZQUN2QyxLQUFLLEVBQUUsYUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGOzs7O09BSUc7SUFDVSxPQUFJLEdBQUcsVUFDbEIsTUFBUztRQUVULE9BQU87WUFDTCxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLEtBQUssRUFBRSxZQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNVLFNBQU0sR0FBRyxVQUNwQixNQUFTO1FBRVQsT0FBTztZQUNMLE9BQU8sRUFBRSwrQkFBK0I7WUFDeEMsS0FBSyxFQUFFLGNBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3ZDLENBQUM7SUFDSixDQUFDLENBQUM7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