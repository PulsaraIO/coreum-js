"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreumTypeUrl = void 0;
const tx_1 = require("../coreum/asset/nft/v1/tx");
const tx_2 = require("../coreum/asset/ft/v1/tx");
const tx_3 = require("../coreum/nft/v1beta1/tx");
const tx_4 = require("../coreum/dex/v1/tx");
/** @internal */
var CoreumTypeUrl;
(function (CoreumTypeUrl) {
    CoreumTypeUrl["NFT"] = "/coreum.asset.nft.v1.";
    CoreumTypeUrl["FT"] = "/coreum.asset.ft.v1.";
    CoreumTypeUrl["NFTBeta"] = "/cosmos.nft.v1beta1.";
    CoreumTypeUrl["DEX"] = "/coreum.dex.v1.";
})(CoreumTypeUrl || (exports.CoreumTypeUrl = CoreumTypeUrl = {}));
// setupMintExtension,
// setupFeegrantExtension,
// setupGovExtension,
// setupIbcExtension,
// setupDistributionExtension,
