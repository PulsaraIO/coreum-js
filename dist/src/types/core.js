import { protobufPackage as assetNFT } from "../coreum/asset/nft/v1/tx";
import { protobufPackage as assetFT } from "../coreum/asset/ft/v1/tx";
import { protobufPackage as nftV1beta } from "../coreum/nft/v1beta1/tx";
export var CoreDenoms;
(function (CoreDenoms) {
    CoreDenoms["MAINNET"] = "ucore";
    CoreDenoms["TESTNET"] = "utestcore";
    CoreDenoms["DEVNET"] = "udevcore";
})(CoreDenoms || (CoreDenoms = {}));
export var MantleModes;
(function (MantleModes) {
    MantleModes["MAINNET"] = "MAINNET";
    MantleModes["TESTNET"] = "TESTNET";
    MantleModes["DEVNET"] = "DEVNET";
})(MantleModes || (MantleModes = {}));
export var CoreumPrefixes;
(function (CoreumPrefixes) {
    CoreumPrefixes["MAINNET"] = "core";
    CoreumPrefixes["TESTNET"] = "testcore";
    CoreumPrefixes["DEVNET"] = "devcore";
})(CoreumPrefixes || (CoreumPrefixes = {}));
export var CoreumTypeUrl;
(function (CoreumTypeUrl) {
    CoreumTypeUrl["NFT"] = "/coreum.asset.nft.v1.";
    CoreumTypeUrl["FT"] = "/coreum.asset.ft.v1.";
    CoreumTypeUrl["NFTBeta"] = "/coreum.nft.v1beta1.";
})(CoreumTypeUrl || (CoreumTypeUrl = {}));
