"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseClassFeatures = parseClassFeatures;
const nft_1 = require("../coreum/asset/nft/v1/nft");
/**
 *
 * @param features An array of NFT Class features
 * @returns An object defining which features are enabled/disabled with a boolean
 */
function parseClassFeatures(features) {
    return {
        burning: features.includes(nft_1.ClassFeature["burning"]),
        freezing: features.includes(nft_1.ClassFeature["freezing"]),
        whitelisting: features.includes(nft_1.ClassFeature["whitelisting"]),
        disable_sending: features.includes(nft_1.ClassFeature["disable_sending"]),
        soulbound: features.includes(nft_1.ClassFeature["soulbound"]),
    };
}
