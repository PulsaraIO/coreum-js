"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseClassFeatures = void 0;
const nft_1 = require("../coreum/asset/nft/v1/nft");
function parseClassFeatures(features) {
    return features.map((f) => nft_1.ClassFeature[f]);
}
exports.parseClassFeatures = parseClassFeatures;
