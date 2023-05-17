import { assetNftRegistry, assetFtRegistry } from "./asset";
import { nftBetaRegistry } from "./nft";
import { MsgSend as NFTMsgSend } from "./nft/v1beta1/tx";
import { MsgIssueClass as NFTMsgIssueClass, MsgMint as NFTMsgMint, MsgAddToWhitelist as NFTMsgAddToWhitelist, MsgBurn as NFTMsgBurn, MsgRemoveFromWhitelist as NFTMsgRemoveFromWhitelist, MsgFreeze as NFTMsgFreeze, MsgUnfreeze as NFTMsgUnfreeze, } from "./asset/nft/v1/tx";
import { MsgIssue as FTMsgIssue, MsgMint as FTMsgMint, MsgBurn as FTMsgBurn, MsgFreeze as FTMsgFreeze, MsgUnfreeze as FTMsgUnfreeze, MsgGloballyFreeze as FTMsgGloballyFreeze, MsgGloballyUnfreeze as FTMsgGloballyUnfreeze, MsgSetWhitelistedLimit as FTMsgSetWhitelistedLimit, } from "./asset/ft/v1/tx";
export const coreumRegistry = [
    ...assetFtRegistry,
    ...assetNftRegistry,
    ...nftBetaRegistry,
];
export var FT;
(function (FT) {
    FT.Mint = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgMint",
            value: FTMsgMint.fromPartial(object),
        };
    };
    FT.Issue = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgIssue",
            value: FTMsgIssue.fromPartial(object),
        };
    };
    FT.Burn = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgBurn",
            value: FTMsgBurn.fromPartial(object),
        };
    };
    FT.Freeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
            value: FTMsgFreeze.fromPartial(object),
        };
    };
    FT.GloballyFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
            value: FTMsgGloballyFreeze.fromPartial(object),
        };
    };
    FT.GloballyUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
            value: FTMsgGloballyUnfreeze.fromPartial(object),
        };
    };
    FT.Unfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
            value: FTMsgUnfreeze.fromPartial(object),
        };
    };
    FT.SetWhitelistedLimit = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
            value: FTMsgSetWhitelistedLimit.fromPartial(object),
        };
    };
})(FT || (FT = {}));
export var NFT;
(function (NFT) {
    NFT.Mint = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgMint",
            value: NFTMsgMint.fromPartial(object),
        };
    };
    NFT.AddToWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
            value: NFTMsgAddToWhitelist.fromPartial(object),
        };
    };
    NFT.RemoveFromWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
            value: NFTMsgRemoveFromWhitelist.fromPartial(object),
        };
    };
    NFT.Burn = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgBurn",
            value: NFTMsgBurn.fromPartial(object),
        };
    };
    NFT.Freeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
            value: NFTMsgFreeze.fromPartial(object),
        };
    };
    NFT.Unfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
            value: NFTMsgUnfreeze.fromPartial(object),
        };
    };
    NFT.IssueClass = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
            value: NFTMsgIssueClass.fromPartial(object),
        };
    };
    NFT.Send = function (object) {
        return {
            typeUrl: "/coreum.nft.v1beta1.MsgSend",
            value: NFTMsgSend.fromPartial(object),
        };
    };
})(NFT || (NFT = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxJQUFJLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLElBQUksZ0JBQWdCLEVBQ2pDLE9BQU8sSUFBSSxVQUFVLEVBQ3JCLGlCQUFpQixJQUFJLG9CQUFvQixFQUN6QyxPQUFPLElBQUksVUFBVSxFQUNyQixzQkFBc0IsSUFBSSx5QkFBeUIsRUFDbkQsU0FBUyxJQUFJLFlBQVksRUFDekIsV0FBVyxJQUFJLGNBQWMsR0FHOUIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wsUUFBUSxJQUFJLFVBQVUsRUFDdEIsT0FBTyxJQUFJLFNBQVMsRUFDcEIsT0FBTyxJQUFJLFNBQVMsRUFDcEIsU0FBUyxJQUFJLFdBQVcsRUFDeEIsV0FBVyxJQUFJLGFBQWEsRUFDNUIsaUJBQWlCLElBQUksbUJBQW1CLEVBQ3hDLG1CQUFtQixJQUFJLHFCQUFxQixFQUM1QyxzQkFBc0IsSUFBSSx3QkFBd0IsR0FDbkQsTUFBTSxrQkFBa0IsQ0FBQztBQU8xQixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQTJDO0lBQ3BFLEdBQUcsZUFBZTtJQUNsQixHQUFHLGdCQUFnQjtJQUNuQixHQUFHLGVBQWU7Q0FDbkIsQ0FBQztBQUVGLE1BQU0sS0FBVyxFQUFFLENBd0VsQjtBQXhFRCxXQUFpQixFQUFFO0lBQ0osT0FBSSxHQUFHLFVBQ2xCLE1BQVM7UUFFVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENB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