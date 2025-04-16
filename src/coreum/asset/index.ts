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
  MsgClawback,
  MsgUpdateDEXUnifiedRefAmount,
  MsgUpdateDEXWhitelistedDenoms,
} from "./ft/v1/tx";

export const assetNftRegistry: ReadonlyArray<[string, any]> = [
  [CoreumTypeUrl.NFT + "MsgIssueClass", MsgIssueClass],
  [CoreumTypeUrl.NFT + "MsgAddToWhitelist", MsgAddToWhitelist],
  [CoreumTypeUrl.NFT + "MsgRemoveFromWhitelist", MsgRemoveFromWhitelist],
  [CoreumTypeUrl.NFT + "MsgMint", MsgMint],
  [CoreumTypeUrl.NFT + "MsgBurn", MsgBurn],
  [CoreumTypeUrl.NFT + "MsgFreeze", MsgFreeze],
  [CoreumTypeUrl.NFT + "MsgUnfreeze", MsgUnfreeze],
];

export const assetFtRegistry: ReadonlyArray<[string, any]> = [
  [CoreumTypeUrl.FT + "MsgIssue", MsgIssue],
  [CoreumTypeUrl.FT + "MsgFreeze", MsgFreezeFT],
  [CoreumTypeUrl.FT + "MsgMint", MsgMintFT],
  [CoreumTypeUrl.FT + "MsgBurn", MsgBurnFT],
  [CoreumTypeUrl.FT + "MsgUnfreeze", MsgUnfreezeFT],
  [CoreumTypeUrl.FT + "MsgGloballyFreeze", MsgGloballyFreeze],
  [CoreumTypeUrl.FT + "MsgGloballyUnfreeze", MsgGloballyUnfreeze],
  [CoreumTypeUrl.FT + "MsgSetWhitelistedLimit", MsgSetWhitelistedLimit],
  [CoreumTypeUrl.FT + "MsgClawback", MsgClawback],
  [
    CoreumTypeUrl.FT + "MsgUpdateDEXWhitelistedDenoms",
    MsgUpdateDEXWhitelistedDenoms,
  ],
  [
    CoreumTypeUrl.FT + "MsgUpdateDEXUnifiedRefAmount",
    MsgUpdateDEXUnifiedRefAmount,
  ],
];
