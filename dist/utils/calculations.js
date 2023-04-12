"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFloatToRoyaltyRate = exports.coreToUCORE = exports.ucoreToCORE = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const ucoreToCORE = (ucore) => {
    return new bignumber_js_1.default(ucore).dividedBy(1000000).valueOf();
};
exports.ucoreToCORE = ucoreToCORE;
const coreToUCORE = (core) => {
    return new bignumber_js_1.default(core).multipliedBy(1000000).valueOf();
};
exports.coreToUCORE = coreToUCORE;
const parseFloatToRoyaltyRate = (royalty) => {
    const float = new bignumber_js_1.default(royalty);
    return float.dividedBy(100).multipliedBy("1000000000000000000").toString();
};
exports.parseFloatToRoyaltyRate = parseFloatToRoyaltyRate;
