"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetFtRegistry = exports.assetNftRegistry = void 0;
const types_1 = require("../../types");
const tx_1 = require("./nft/v1/tx");
const tx_2 = require("./ft/v1/tx");
exports.assetNftRegistry = [
    [types_1.CoreumTypeUrl.NFT + "MsgIssueClass", tx_1.MsgIssueClass],
    [types_1.CoreumTypeUrl.NFT + "MsgAddToWhitelist", tx_1.MsgAddToWhitelist],
    [types_1.CoreumTypeUrl.NFT + "MsgRemoveFromWhitelist", tx_1.MsgRemoveFromWhitelist],
    [types_1.CoreumTypeUrl.NFT + "MsgMint", tx_1.MsgMint],
    [types_1.CoreumTypeUrl.NFT + "MsgBurn", tx_1.MsgBurn],
    [types_1.CoreumTypeUrl.NFT + "MsgFreeze", tx_1.MsgFreeze],
    [types_1.CoreumTypeUrl.NFT + "MsgUnfreeze", tx_1.MsgUnfreeze],
];
exports.assetFtRegistry = [
    [types_1.CoreumTypeUrl.FT + "MsgIssue", tx_2.MsgIssue],
    [types_1.CoreumTypeUrl.FT + "MsgFreeze", tx_2.MsgFreeze],
    [types_1.CoreumTypeUrl.FT + "MsgMint", tx_2.MsgMint],
    [types_1.CoreumTypeUrl.FT + "MsgBurn", tx_2.MsgBurn],
    [types_1.CoreumTypeUrl.FT + "MsgUnfreeze", tx_2.MsgUnfreeze],
    [types_1.CoreumTypeUrl.FT + "MsgGloballyFreeze", tx_2.MsgGloballyFreeze],
    [types_1.CoreumTypeUrl.FT + "MsgGloballyUnfreeze", tx_2.MsgGloballyUnfreeze],
    [types_1.CoreumTypeUrl.FT + "MsgSetWhitelistedLimit", tx_2.MsgSetWhitelistedLimit],
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZXVtL2Fzc2V0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUE0QztBQUM1QyxvQ0FRcUI7QUFDckIsbUNBU29CO0FBR1AsUUFBQSxnQkFBZ0IsR0FBMkM7SUFDdEUsQ0FBQyxxQkFBYSxDQUFDLEdBQUcsR0FBRyxlQUFlLEVBQUUsa0JBQWEsQ0FBQztJQUNwRCxDQUFDLHFCQUFhLENBQUMsR0FBRyxHQUFHLG1CQUFtQixFQUFFLHNCQUFpQixDQUFDO0lBQzVELENBQUMscUJBQWEsQ0FBQyxHQUFHLEdBQUcsd0JBQXdCLEVBQUUsMkJBQXNCLENBQUM7SUFDdEUsQ0FBQyxxQkFBYSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsWUFBTyxDQUFDO0lBQ3hDLENBQUMscUJBQWEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLFlBQU8sQ0FBQztJQUN4QyxDQUFDLHFCQUFhLENBQUMsR0FBRyxHQUFHLFdBQVcsRUFBRSxjQUFTLENBQUM7SUFDNUMsQ0FBQyxxQkFBYSxDQUFDLEdBQUcsR0FBRyxhQUFhLEVBQUUsZ0JBQVcsQ0FBQztDQUNqRCxDQUFDO0FBRVcsUUFBQSxlQUFlLEdBQTJDO0lBQ3JFLENBQUMscUJBQWEsQ0FBQyxFQUFFLEdBQUcsVUFBVSxFQUFFLGFBQVEsQ0FBQztJQUN6QyxDQUFDLHFCQUFhLENBQUMsRUFBRSxHQUFHLFdBQVcsRUFBRSxjQUFXLENBQUM7SUFDN0MsQ0FBQyxxQkFBYSxDQUFDLEVBQUUsR0FBRyxTQUFTLEVBQUUsWUFBUyxDQUFDO0lBQ3pDLENBQUMscUJBQWEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFFLFlBQVMsQ0FBQztJQUN6QyxDQUFDLHFCQUFhLENBQUMsRUFBRSxHQUFHLGFBQWEsRUFBRSxnQkFBYSxDQUFDO0lBQ2pELENBQUMscUJBQWEsQ0FBQyxFQUFFLEdBQUcsbUJBQW1CLEVBQUUsc0JBQWlCLENBQUM7SUFDM0QsQ0FBQyxxQkFBYSxDQUFDLEVBQUUsR0FBRyxxQkFBcUIsRUFBRSx3QkFBbUIsQ0FBQztJQUMvRCxDQUFDLHFCQUFhLENBQUMsRUFBRSxHQUFHLHdCQUF3QixFQUFFLDJCQUFzQixDQUFDO0NBQ3RFLENBQUMifQ==