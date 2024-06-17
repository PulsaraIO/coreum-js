"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTokenFeatures = void 0;
const token_1 = require("../coreum/asset/ft/v1/token");
/**
 * @param features An array of Feature.
 * @returns An object defining which features are enabled/disabled with boolean
 */
const parseTokenFeatures = (features) => {
    return {
        minting: features.includes(token_1.Feature["minting"]),
        freezing: features.includes(token_1.Feature["freezing"]),
        burning: features.includes(token_1.Feature["burning"]),
        whitelisting: features.includes(token_1.Feature["whitelisting"]),
    };
};
exports.parseTokenFeatures = parseTokenFeatures;
