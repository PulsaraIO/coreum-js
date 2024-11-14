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
    [types_1.CoreumTypeUrl.FT + "MsgClawback", tx_2.MsgClawback],
];
