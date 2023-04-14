"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreumTypeUrl = exports.CoreumPrefixes = exports.MantleModes = exports.CoreDenoms = void 0;
const tx_1 = require("../coreum/asset/nft/v1/tx");
const tx_2 = require("../coreum/asset/ft/v1/tx");
const tx_3 = require("../coreum/nft/v1beta1/tx");
var CoreDenoms;
(function (CoreDenoms) {
    CoreDenoms["MAINNET"] = "ucore";
    CoreDenoms["TESTNET"] = "utestcore";
    CoreDenoms["DEVNET"] = "udevcore";
})(CoreDenoms = exports.CoreDenoms || (exports.CoreDenoms = {}));
var MantleModes;
(function (MantleModes) {
    MantleModes["MAINNET"] = "MAINNET";
    MantleModes["TESTNET"] = "TESTNET";
    MantleModes["DEVNET"] = "DEVNET";
})(MantleModes = exports.MantleModes || (exports.MantleModes = {}));
var CoreumPrefixes;
(function (CoreumPrefixes) {
    CoreumPrefixes["MAINNET"] = "core";
    CoreumPrefixes["TESTNET"] = "testcore";
    CoreumPrefixes["DEVNET"] = "devcore";
})(CoreumPrefixes = exports.CoreumPrefixes || (exports.CoreumPrefixes = {}));
var CoreumTypeUrl;
(function (CoreumTypeUrl) {
    CoreumTypeUrl["NFT"] = "/coreum.asset.nft.v1.";
    CoreumTypeUrl["FT"] = "/coreum.asset.ft.v1.";
    CoreumTypeUrl["NFTBeta"] = "/coreum.nft.v1beta1.";
})(CoreumTypeUrl = exports.CoreumTypeUrl || (exports.CoreumTypeUrl = {}));
