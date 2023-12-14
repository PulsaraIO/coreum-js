"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftBetaRegistry = void 0;
const types_1 = require("../../types");
const tx_1 = require("./v1beta1/tx");
exports.nftBetaRegistry = [
    [types_1.CoreumTypeUrl.NFTBeta + "MsgSend", tx_1.MsgSend],
];
