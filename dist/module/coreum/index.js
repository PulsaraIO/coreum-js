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
    FT.MsgMint = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgMint",
            value: FTMsgMint.fromPartial(object),
        };
    };
    FT.MsgIssue = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgIssue",
            value: FTMsgIssue.fromPartial(object),
        };
    };
    FT.MsgBurn = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgBurn",
            value: FTMsgBurn.fromPartial(object),
        };
    };
    FT.MsgFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
            value: FTMsgFreeze.fromPartial(object),
        };
    };
    FT.MsgGloballyFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
            value: FTMsgGloballyFreeze.fromPartial(object),
        };
    };
    FT.MsgGloballyUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
            value: FTMsgGloballyUnfreeze.fromPartial(object),
        };
    };
    FT.MsgUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
            value: FTMsgUnfreeze.fromPartial(object),
        };
    };
    FT.MsgSetWhitelistedLimit = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
            value: FTMsgSetWhitelistedLimit.fromPartial(object),
        };
    };
})(FT || (FT = {}));
export var NFT;
(function (NFT) {
    NFT.MsgMint = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgMint",
            value: NFTMsgMint.fromPartial(object),
        };
    };
    NFT.MsgAddToWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
            value: NFTMsgAddToWhitelist.fromPartial(object),
        };
    };
    NFT.MsgRemoveFromWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
            value: NFTMsgRemoveFromWhitelist.fromPartial(object),
        };
    };
    NFT.MsgBurn = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgBurn",
            value: NFTMsgBurn.fromPartial(object),
        };
    };
    NFT.MsgFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
            value: NFTMsgFreeze.fromPartial(object),
        };
    };
    NFT.MsgUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
            value: NFTMsgUnfreeze.fromPartial(object),
        };
    };
    NFT.MsgIssueClass = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
            value: NFTMsgIssueClass.fromPartial(object),
        };
    };
    NFT.MsgSend = function (object) {
        return {
            typeUrl: "/coreum.nft.v1beta1.MsgSend",
            value: NFTMsgSend.fromPartial(object),
        };
    };
})(NFT || (NFT = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxJQUFJLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxhQUFhLElBQUksZ0JBQWdCLEVBQ2pDLE9BQU8sSUFBSSxVQUFVLEVBQ3JCLGlCQUFpQixJQUFJLG9CQUFvQixFQUN6QyxPQUFPLElBQUksVUFBVSxFQUNyQixzQkFBc0IsSUFBSSx5QkFBeUIsRUFDbkQsU0FBUyxJQUFJLFlBQVksRUFDekIsV0FBVyxJQUFJLGNBQWMsR0FHOUIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wsUUFBUSxJQUFJLFVBQVUsRUFDdEIsT0FBTyxJQUFJLFNBQVMsRUFDcEIsT0FBTyxJQUFJLFNBQVMsRUFDcEIsU0FBUyxJQUFJLFdBQVcsRUFDeEIsV0FBVyxJQUFJLGFBQWEsRUFDNUIsaUJBQWlCLElBQUksbUJBQW1CLEVBQ3hDLG1CQUFtQixJQUFJLHFCQUFxQixFQUM1QyxzQkFBc0IsSUFBSSx3QkFBd0IsR0FDbkQsTUFBTSxrQkFBa0IsQ0FBQztBQU8xQixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQTJDO0lBQ3BFLEdBQUcsZUFBZTtJQUNsQixHQUFHLGdCQUFnQjtJQUNuQixHQUFHLGVBQWU7Q0FDbkIsQ0FBQztBQUVGLE1BQU0sS0FBVyxFQUFFLENBd0VsQjtBQXhFRCxXQUFpQixFQUFFO0lBQ0osVUFBTyxHQUFHLFVBQ3JCLE1BQVM7UUFFVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENB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