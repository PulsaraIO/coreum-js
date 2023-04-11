import { CoreumTypeUrl } from "../../types";
import {
  MsgAddToWhitelist,
  MsgBurn,
  MsgIssueClass,
  MsgRemoveFromWhitelist,
  MsgMint,
  MsgFreeze,
  MsgUnfreeze,
} from "./nft/v1/tx";
import {
  MsgIssue,
  MsgFreeze as MsgFreezeFT,
  MsgGloballyFreeze,
  MsgGloballyUnfreeze,
  MsgMint as MsgMintFT,
  MsgBurn as MsgBurnFT,
  MsgSetWhitelistedLimit,
  MsgUnfreeze as MsgUnfreezeFT,
} from "./ft/v1/tx";
import { GeneratedType } from "@cosmjs/proto-signing";

export const assetNftRegistry: ReadonlyArray<[string, GeneratedType]> = [
  [CoreumTypeUrl.NFT + "MsgIssueClass", MsgIssueClass],
  [CoreumTypeUrl.NFT + "MsgAddToWhitelist", MsgAddToWhitelist],
  [CoreumTypeUrl.NFT + "MsgRemoveFromWhitelist", MsgRemoveFromWhitelist],
  [CoreumTypeUrl.NFT + "MsgMint", MsgMint],
  [CoreumTypeUrl.NFT + "MsgBurn", MsgBurn],
  [CoreumTypeUrl.NFT + "MsgFreeze", MsgFreeze],
  [CoreumTypeUrl.NFT + "MsgUnfreeze", MsgUnfreeze],
];

export const assetFtRegistry: ReadonlyArray<[string, GeneratedType]> = [
  [CoreumTypeUrl.FT + "MsgIssue", MsgIssue],
  [CoreumTypeUrl.FT + "MsgFreeze", MsgFreezeFT],
  [CoreumTypeUrl.FT + "MsgMint", MsgMintFT],
  [CoreumTypeUrl.FT + "MsgBurn", MsgBurnFT],
  [CoreumTypeUrl.FT + "MsgUnfreeze", MsgUnfreezeFT],
  [CoreumTypeUrl.FT + "MsgGloballyFreeze", MsgGloballyFreeze],
  [CoreumTypeUrl.FT + "MsgGloballyUnfreeze", MsgGloballyUnfreeze],
  [CoreumTypeUrl.FT + "MsgSetWhitelistedLimit", MsgSetWhitelistedLimit],
];
