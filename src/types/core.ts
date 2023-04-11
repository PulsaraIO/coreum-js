import { protobufPackage as assetNFT } from "../coreum/asset/nft/v1/tx";
import { protobufPackage as assetFT } from "../coreum/asset/ft/v1/tx";
import { protobufPackage as nftV1beta } from "../coreum/nft/v1beta1/tx";
import { protobufPackage as feeModel } from "../coreum/feemodel/v1/query";
import { protobufPackage as customParams } from "../coreum/customparams/v1/query";

export enum CoreDenoms {
  MAINNET = "ucore",
  TESTNET = "utestcore",
  DEVNET = "udevcore",
}

export enum CoreumModes {
  MAINNET = "MAINNET",
  TESTNET = "TESTNET",
  DEVNET = "DEVNET",
}

export enum CoreumPrefixes {
  MAINNET = "core",
  TESTNET = "testcore",
  DEVNET = "devcore",
}

export enum CoreumTypeUrl {
  NFT = `/${assetNFT}.`,
  FT = `/${assetFT}.`,
  NFTBeta = `/${nftV1beta}.`,
  FEE = `/${feeModel}.`,
  CUSTOM = `/${customParams}.`,
}
