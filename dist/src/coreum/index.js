"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreumRegistry = void 0;
const asset_1 = require("./asset");
const nft_1 = require("./nft");
exports.coreumRegistry = [
    ...asset_1.assetFtRegistry,
    ...asset_1.assetNftRegistry,
    ...nft_1.nftBetaRegistry,
];
