"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dexRegistry = void 0;
const types_1 = require("../../types");
const tx_1 = require("./v1/tx");
exports.dexRegistry = [
    [types_1.CoreumTypeUrl.DEX + "MsgCancelOrder", tx_1.MsgCancelOrder],
    [types_1.CoreumTypeUrl.DEX + "MsgPlaceOrder", tx_1.MsgPlaceOrder],
    [types_1.CoreumTypeUrl.DEX + "MsgUpdateParams", tx_1.MsgUpdateParams],
    [types_1.CoreumTypeUrl.DEX + "MsgCancelOrdersByDenom", tx_1.MsgCancelOrdersByDenom],
];
