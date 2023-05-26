import { assetNftRegistry, assetFtRegistry } from "./asset";
import { nftBetaRegistry } from "./nft";
import { MsgSend as NFTMsgSend } from "./nft/v1beta1/tx";
import { MsgIssueClass as NFTMsgIssueClass, MsgMint as NFTMsgMint, MsgAddToWhitelist as NFTMsgAddToWhitelist, MsgBurn as NFTMsgBurn, MsgRemoveFromWhitelist as NFTMsgRemoveFromWhitelist, MsgFreeze as NFTMsgFreeze, MsgUnfreeze as NFTMsgUnfreeze, } from "./asset/nft/v1/tx";
import { MsgIssue as FTMsgIssue, MsgMint as FTMsgMint, MsgBurn as FTMsgBurn, MsgFreeze as FTMsgFreeze, MsgUnfreeze as FTMsgUnfreeze, MsgGloballyFreeze as FTMsgGloballyFreeze, MsgGloballyUnfreeze as FTMsgGloballyUnfreeze, MsgSetWhitelistedLimit as FTMsgSetWhitelistedLimit, } from "./asset/ft/v1/tx";
/**
 * Registry of the Custom Messages of the Coreum blockchain
 */
export const coreumRegistry = [
    ...assetFtRegistry,
    ...assetNftRegistry,
    ...nftBetaRegistry,
];
/**
 * Transaction Module for the Fungible Tokens module. (assetft)
 */
export var FT;
(function (FT) {
    /** MsgMint message creator
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
})(FT || (FT = {}));
/**
 * Transaction Module for the Non-Fungible Tokens modules (assetnft, nftbeta).
 */
export var NFT;
(function (NFT) {
    /** MsgMint message creator
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
    /** MsgSend message creator
     *
     * @param object Represents the properties available for this MsgSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    NFT.Send = function (object) {
        return {
            typeUrl: "/coreum.nft.v1beta1.MsgSend",
            value: NFTMsgSend.fromPartial(object),
        };
    };
})(NFT || (NFT = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxJQUFJLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLElBQUksZ0JBQWdCLEVBQ2pDLE9BQU8sSUFBSSxVQUFVLEVBQ3JCLGlCQUFpQixJQUFJLG9CQUFvQixFQUN6QyxPQUFPLElBQUksVUFBVSxFQUNyQixzQkFBc0IsSUFBSSx5QkFBeUIsRUFDbkQsU0FBUyxJQUFJLFlBQVksRUFDekIsV0FBVyxJQUFJLGNBQWMsR0FHOUIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wsUUFBUSxJQUFJLFVBQVUsRUFDdEIsT0FBTyxJQUFJLFNBQVMsRUFDcEIsT0FBTyxJQUFJLFNBQVMsRUFDcEIsU0FBUyxJQUFJLFdBQVcsRUFDeEIsV0FBVyxJQUFJLGFBQWEsRUFDNUIsaUJBQWlCLElBQUksbUJBQW1CLEVBQ3hDLG1CQUFtQixJQUFJLHFCQUFxQixFQUM1QyxzQkFBc0IsSUFBSSx3QkFBd0IsR0FDbkQsTUFBTSxrQkFBa0IsQ0FBQztBQVExQjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBMkM7SUFDcEUsR0FBRyxlQUFlO0lBQ2xCLEdBQUcsZ0JBQWdCO0lBQ25CLEdBQUcsZUFBZTtDQUNuQixDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFNLEtBQVcsRUFBRSxDQWdIbEI7QUFoSEQsV0FBaUIsRUFBRTtJQUNqQjs7OztPQUlHO0lBQ1UsT0FBSSxHQUFHLFVBQ2xCLE1BQVM7UUFFVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxL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