"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = exports.FT = exports.coreumRegistry = void 0;
const asset_1 = require("./asset");
const nft_1 = require("./nft");
const tx_1 = require("./nft/v1beta1/tx");
const tx_2 = require("./asset/nft/v1/tx");
const tx_3 = require("./asset/ft/v1/tx");
exports.coreumRegistry = [
    ...asset_1.assetFtRegistry,
    ...asset_1.assetNftRegistry,
    ...nft_1.nftBetaRegistry,
];
var FT;
(function (FT) {
    FT.MsgMint = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgMint",
            value: tx_3.MsgMint.fromPartial(object),
        };
    };
    FT.MsgIssue = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgIssue",
            value: tx_3.MsgIssue.fromPartial(object),
        };
    };
    FT.MsgBurn = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgBurn",
            value: tx_3.MsgBurn.fromPartial(object),
        };
    };
    FT.MsgFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
            value: tx_3.MsgFreeze.fromPartial(object),
        };
    };
    FT.MsgGloballyFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
            value: tx_3.MsgGloballyFreeze.fromPartial(object),
        };
    };
    FT.MsgGloballyUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
            value: tx_3.MsgGloballyUnfreeze.fromPartial(object),
        };
    };
    FT.MsgUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
            value: tx_3.MsgUnfreeze.fromPartial(object),
        };
    };
    FT.MsgSetWhitelistedLimit = function (object) {
        return {
            typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
            value: tx_3.MsgSetWhitelistedLimit.fromPartial(object),
        };
    };
})(FT = exports.FT || (exports.FT = {}));
var NFT;
(function (NFT) {
    NFT.MsgMint = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgMint",
            value: tx_2.MsgMint.fromPartial(object),
        };
    };
    NFT.MsgAddToWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
            value: tx_2.MsgAddToWhitelist.fromPartial(object),
        };
    };
    NFT.MsgRemoveFromWhitelist = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
            value: tx_2.MsgRemoveFromWhitelist.fromPartial(object),
        };
    };
    NFT.MsgBurn = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgBurn",
            value: tx_2.MsgBurn.fromPartial(object),
        };
    };
    NFT.MsgFreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
            value: tx_2.MsgFreeze.fromPartial(object),
        };
    };
    NFT.MsgUnfreeze = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
            value: tx_2.MsgUnfreeze.fromPartial(object),
        };
    };
    NFT.MsgIssueClass = function (object) {
        return {
            typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
            value: tx_2.MsgIssueClass.fromPartial(object),
        };
    };
    NFT.MsgSend = function (object) {
        return {
            typeUrl: "/coreum.nft.v1beta1.MsgSend",
            value: tx_1.MsgSend.fromPartial(object),
        };
    };
})(NFT = exports.NFT || (exports.NFT = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZXVtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUE0RDtBQUM1RCwrQkFBd0M7QUFDeEMseUNBQXlEO0FBQ3pELDBDQVUyQjtBQUMzQix5Q0FTMEI7QUFPYixRQUFBLGNBQWMsR0FBMkM7SUFDcEUsR0FBRyx1QkFBZTtJQUNsQixHQUFHLHdCQUFnQjtJQUNuQixHQUFHLHFCQUFlO0NBQ25CLENBQUM7QUFFRixJQUFpQixFQUFFLENBd0VsQjtBQXhFRCxXQUFpQixFQUFFO0lBQ0osVUFBTyxHQUFHLFVBQ3JCLE1BQVM7UUFFVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxLQUFLLEVBQUUsWUFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLFdBQVEsR0FBRyxVQUV0QixNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsS0FBSyxFQUFFLGFBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxVQUFPLEdBQUcsVUFDckIsTUFBUztRQUVULE9BQU87WUFDTCxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLEtBQUssRUFBRSxZQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNyQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsWUFBUyxHQUFHLFVBRXZCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxLQUFLLEVBQUUsY0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdkMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLG9CQUFpQixHQUFHLFVBRS9CLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLHVDQUF1QztZQUNoRCxLQUFLLEVBQUUs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