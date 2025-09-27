import { AminoConverters, AminoTypes } from "@cosmjs/stargate";

// Import FT message interfaces
import {
  MsgIssue,
  MsgMint,
  MsgBurn,
  MsgFreeze,
  MsgUnfreeze,
  MsgSetFrozen,
  MsgGloballyFreeze,
  MsgGloballyUnfreeze,
  MsgClawback,
  MsgSetWhitelistedLimit,
  MsgTransferAdmin,
  MsgClearAdmin,
  MsgUpgradeTokenV1,
  MsgUpdateParams as FTMsgUpdateParams,
  MsgUpdateDEXUnifiedRefAmount,
  MsgUpdateDEXWhitelistedDenoms,
} from "../asset/ft/v1/tx";

// Import DEX message interfaces
import {
  MsgUpdateParams as DEXMsgUpdateParams,
  MsgPlaceOrder,
  MsgCancelOrder,
  MsgCancelOrdersByDenom,
} from "../dex/v1/tx";

// Import NFT message interfaces
import {
  MsgIssueClass,
  MsgMint as NFTMsgMint,
  MsgUpdateData,
  MsgBurn as NFTMsgBurn,
  MsgFreeze as NFTMsgFreeze,
  MsgUnfreeze as NFTMsgUnfreeze,
  MsgClassFreeze,
  MsgClassUnfreeze,
  MsgAddToWhitelist,
  MsgRemoveFromWhitelist,
  MsgAddToClassWhitelist,
  MsgRemoveFromClassWhitelist,
  MsgUpdateParams as NFTMsgUpdateParams,
} from "../asset/nft/v1/tx";

// Import NFT Beta message interfaces
import { MsgSend } from "../nft/v1beta1/tx";

// FT (Fungible Token) Amino Types
export const ftAminoConverters: AminoConverters = {
  // MsgIssue - Issue new fungible token
  "/coreum.asset.ft.v1.MsgIssue": {
    aminoType: "cosmos-sdk/MsgIssue",
    toAmino: ({
      issuer,
      symbol,
      subunit,
      precision,
      initialAmount,
      description,
      features,
      burnRate,
      sendCommissionRate,
      uri,
      uriHash,
      extensionSettings,
      dexSettings,
    }: MsgIssue) => ({
      issuer,
      symbol,
      subunit,
      precision,
      initial_amount: initialAmount,
      description,
      features,
      burn_rate: burnRate,
      send_commission_rate: sendCommissionRate,
      uri,
      uri_hash: uriHash,
      extension_settings: extensionSettings,
      dex_settings: dexSettings,
    }),
    fromAmino: ({
      issuer,
      symbol,
      subunit,
      precision,
      initial_amount,
      description,
      features,
      burn_rate,
      send_commission_rate,
      uri,
      uri_hash,
      extension_settings,
      dex_settings,
    }: any): MsgIssue => ({
      issuer,
      symbol,
      subunit,
      precision,
      initialAmount: initial_amount,
      description,
      features,
      burnRate: burn_rate,
      sendCommissionRate: send_commission_rate,
      uri,
      uriHash: uri_hash,
      extensionSettings: extension_settings,
      dexSettings: dex_settings,
    }),
  },

  // MsgMint - Mint new fungible tokens
  "/coreum.asset.ft.v1.MsgMint": {
    aminoType: "cosmos-sdk/MsgMint",
    toAmino: ({ sender, coin, recipient }: MsgMint) => ({
      sender,
      coin,
      recipient,
    }),
    fromAmino: ({ sender, coin, recipient }: any): MsgMint => ({
      sender,
      coin,
      recipient,
    }),
  },

  // MsgBurn - Burn fungible tokens
  "/coreum.asset.ft.v1.MsgBurn": {
    aminoType: "cosmos-sdk/MsgBurn",
    toAmino: ({ sender, coin }: MsgBurn) => ({
      sender,
      coin,
    }),
    fromAmino: ({ sender, coin }: any): MsgBurn => ({
      sender,
      coin,
    }),
  },

  // MsgFreeze - Freeze fungible tokens
  "/coreum.asset.ft.v1.MsgFreeze": {
    aminoType: "cosmos-sdk/MsgFreeze",
    toAmino: ({ sender, account, coin }: MsgFreeze) => ({
      sender,
      account,
      coin,
    }),
    fromAmino: ({ sender, account, coin }: any): MsgFreeze => ({
      sender,
      account,
      coin,
    }),
  },

  // MsgUnfreeze - Unfreeze fungible tokens
  "/coreum.asset.ft.v1.MsgUnfreeze": {
    aminoType: "cosmos-sdk/MsgUnfreeze",
    toAmino: ({ sender, account, coin }: MsgUnfreeze) => ({
      sender,
      account,
      coin,
    }),
    fromAmino: ({ sender, account, coin }: any): MsgUnfreeze => ({
      sender,
      account,
      coin,
    }),
  },

  // MsgSetFrozen - Set frozen amount
  "/coreum.asset.ft.v1.MsgSetFrozen": {
    aminoType: "cosmos-sdk/MsgSetFrozen",
    toAmino: ({ sender, account, coin }: MsgSetFrozen) => ({
      sender,
      account,
      coin,
    }),
    fromAmino: ({ sender, account, coin }: any): MsgSetFrozen => ({
      sender,
      account,
      coin,
    }),
  },

  // MsgGloballyFreeze - Globally freeze token
  "/coreum.asset.ft.v1.MsgGloballyFreeze": {
    aminoType: "cosmos-sdk/MsgGloballyFreeze",
    toAmino: ({ sender, denom }: MsgGloballyFreeze) => ({
      sender,
      denom,
    }),
    fromAmino: ({ sender, denom }: any): MsgGloballyFreeze => ({
      sender,
      denom,
    }),
  },

  // MsgGloballyUnfreeze - Globally unfreeze token
  "/coreum.asset.ft.v1.MsgGloballyUnfreeze": {
    aminoType: "cosmos-sdk/MsgGloballyUnfreeze",
    toAmino: ({ sender, denom }: MsgGloballyUnfreeze) => ({
      sender,
      denom,
    }),
    fromAmino: ({ sender, denom }: any): MsgGloballyUnfreeze => ({
      sender,
      denom,
    }),
  },

  // MsgClawback - Clawback tokens
  "/coreum.asset.ft.v1.MsgClawback": {
    aminoType: "cosmos-sdk/MsgClawback",
    toAmino: ({ sender, account, coin }: MsgClawback) => ({
      sender,
      account,
      coin,
    }),
    fromAmino: ({ sender, account, coin }: any): MsgClawback => ({
      sender,
      account,
      coin,
    }),
  },

  // MsgSetWhitelistedLimit - Set whitelisted limit
  "/coreum.asset.ft.v1.MsgSetWhitelistedLimit": {
    aminoType: "cosmos-sdk/MsgSetWhitelistedLimit",
    toAmino: ({ sender, account, coin }: MsgSetWhitelistedLimit) => ({
      sender,
      account,
      coin,
    }),
    fromAmino: ({ sender, account, coin }: any): MsgSetWhitelistedLimit => ({
      sender,
      account,
      coin,
    }),
  },

  // MsgTransferAdmin - Transfer admin
  "/coreum.asset.ft.v1.MsgTransferAdmin": {
    aminoType: "cosmos-sdk/MsgTransferAdmin",
    toAmino: ({ sender, account, denom }: MsgTransferAdmin) => ({
      sender,
      account,
      denom,
    }),
    fromAmino: ({ sender, account, denom }: any): MsgTransferAdmin => ({
      sender,
      account,
      denom,
    }),
  },

  // MsgClearAdmin - Clear admin
  "/coreum.asset.ft.v1.MsgClearAdmin": {
    aminoType: "cosmos-sdk/MsgClearAdmin",
    toAmino: ({ sender, denom }: MsgClearAdmin) => ({
      sender,
      denom,
    }),
    fromAmino: ({ sender, denom }: any): MsgClearAdmin => ({
      sender,
      denom,
    }),
  },

  // MsgUpgradeTokenV1 - Upgrade token to V1
  "/coreum.asset.ft.v1.MsgUpgradeTokenV1": {
    aminoType: "cosmos-sdk/MsgUpgradeTokenV1",
    toAmino: ({ sender, denom, ibcEnabled }: MsgUpgradeTokenV1) => ({
      sender,
      denom,
      ibc_enabled: ibcEnabled,
    }),
    fromAmino: ({ sender, denom, ibc_enabled }: any): MsgUpgradeTokenV1 => ({
      sender,
      denom,
      ibcEnabled: ibc_enabled,
    }),
  },

  // MsgUpdateParams - Update parameters
  "/coreum.asset.ft.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ authority, params }: FTMsgUpdateParams) => ({
      authority,
      params,
    }),
    fromAmino: ({ authority, params }: any): FTMsgUpdateParams => ({
      authority,
      params,
    }),
  },

  // MsgUpdateDEXUnifiedRefAmount - Update DEX unified ref amount
  "/coreum.asset.ft.v1.MsgUpdateDEXUnifiedRefAmount": {
    aminoType: "cosmos-sdk/MsgUpdateDEXUnifiedRefAmount",
    toAmino: ({
      sender,
      denom,
      unifiedRefAmount,
    }: MsgUpdateDEXUnifiedRefAmount) => ({
      sender,
      denom,
      unified_ref_amount: unifiedRefAmount,
    }),
    fromAmino: ({
      sender,
      denom,
      unified_ref_amount,
    }: any): MsgUpdateDEXUnifiedRefAmount => ({
      sender,
      denom,
      unifiedRefAmount: unified_ref_amount,
    }),
  },

  // MsgUpdateDEXWhitelistedDenoms - Update DEX whitelisted denoms
  "/coreum.asset.ft.v1.MsgUpdateDEXWhitelistedDenoms": {
    aminoType: "cosmos-sdk/MsgUpdateDEXWhitelistedDenoms",
    toAmino: ({
      sender,
      denom,
      whitelistedDenoms,
    }: MsgUpdateDEXWhitelistedDenoms) => ({
      sender,
      denom,
      whitelisted_denoms: whitelistedDenoms,
    }),
    fromAmino: ({
      sender,
      denom,
      whitelisted_denoms,
    }: any): MsgUpdateDEXWhitelistedDenoms => ({
      sender,
      denom,
      whitelistedDenoms: whitelisted_denoms,
    }),
  },
};

// DEX Amino Types
export const dexAminoConverters: AminoConverters = {
  // MsgUpdateParams - Update DEX parameters
  "/coreum.dex.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ authority, params }: DEXMsgUpdateParams) => ({
      authority,
      params,
    }),
    fromAmino: ({ authority, params }: any): DEXMsgUpdateParams => ({
      authority,
      params,
    }),
  },

  // MsgPlaceOrder - Place order on DEX
  "/coreum.dex.v1.MsgPlaceOrder": {
    aminoType: "cosmos-sdk/MsgPlaceOrder",
    toAmino: ({
      sender,
      type,
      id,
      baseDenom,
      quoteDenom,
      price,
      quantity,
      side,
      goodTil,
      timeInForce,
    }: MsgPlaceOrder) => ({
      sender,
      type,
      id,
      base_denom: baseDenom,
      quote_denom: quoteDenom,
      price,
      quantity,
      side,
      good_til: goodTil,
      time_in_force: timeInForce,
    }),
    fromAmino: ({
      sender,
      type,
      id,
      base_denom,
      quote_denom,
      price,
      quantity,
      side,
      good_til,
      time_in_force,
    }: any): MsgPlaceOrder => ({
      sender,
      type,
      id,
      baseDenom: base_denom,
      quoteDenom: quote_denom,
      price,
      quantity,
      side,
      goodTil: good_til,
      timeInForce: time_in_force,
    }),
  },

  // MsgCancelOrder - Cancel order
  "/coreum.dex.v1.MsgCancelOrder": {
    aminoType: "cosmos-sdk/MsgCancelOrder",
    toAmino: ({ sender, id }: MsgCancelOrder) => ({
      sender,
      id,
    }),
    fromAmino: ({ sender, id }: any): MsgCancelOrder => ({
      sender,
      id,
    }),
  },

  // MsgCancelOrdersByDenom - Cancel orders by denom
  "/coreum.dex.v1.MsgCancelOrdersByDenom": {
    aminoType: "cosmos-sdk/MsgCancelOrdersByDenom",
    toAmino: ({ sender, account, denom }: MsgCancelOrdersByDenom) => ({
      sender,
      account,
      denom,
    }),
    fromAmino: ({ sender, account, denom }: any): MsgCancelOrdersByDenom => ({
      sender,
      account,
      denom,
    }),
  },
};

// NFT (Non-Fungible Token) Amino Types
export const nftAminoConverters: AminoConverters = {
  // MsgIssueClass - Issue new NFT class
  "/coreum.asset.nft.v1.MsgIssueClass": {
    aminoType: "cosmos-sdk/MsgIssueClass",
    toAmino: ({
      issuer,
      symbol,
      name,
      description,
      uri,
      uriHash,
      data,
      features,
      royaltyRate,
    }: MsgIssueClass) => ({
      issuer,
      symbol,
      name,
      description,
      uri,
      uri_hash: uriHash,
      data,
      features,
      royalty_rate: royaltyRate,
    }),
    fromAmino: ({
      issuer,
      symbol,
      name,
      description,
      uri,
      uri_hash,
      data,
      features,
      royalty_rate,
    }: any): MsgIssueClass => ({
      issuer,
      symbol,
      name,
      description,
      uri,
      uriHash: uri_hash,
      data,
      features,
      royaltyRate: royalty_rate,
    }),
  },

  // MsgMint - Mint NFT
  "/coreum.asset.nft.v1.MsgMint": {
    aminoType: "cosmos-sdk/MsgMint",
    toAmino: ({
      sender,
      classId,
      id,
      uri,
      uriHash,
      data,
      recipient,
    }: NFTMsgMint) => ({
      sender,
      class_id: classId,
      id,
      uri,
      uri_hash: uriHash,
      data,
      recipient,
    }),
    fromAmino: ({
      sender,
      class_id,
      id,
      uri,
      uri_hash,
      data,
      recipient,
    }: any): NFTMsgMint => ({
      sender,
      classId: class_id,
      id,
      uri,
      uriHash: uri_hash,
      data,
      recipient,
    }),
  },

  // MsgUpdateData - Update NFT data
  "/coreum.asset.nft.v1.MsgUpdateData": {
    aminoType: "cosmos-sdk/MsgUpdateData",
    toAmino: ({ sender, classId, id, items }: MsgUpdateData) => ({
      sender,
      class_id: classId,
      id,
      items,
    }),
    fromAmino: ({ sender, class_id, id, items }: any): MsgUpdateData => ({
      sender,
      classId: class_id,
      id,
      items,
    }),
  },

  // MsgBurn - Burn NFT
  "/coreum.asset.nft.v1.MsgBurn": {
    aminoType: "cosmos-sdk/MsgBurn",
    toAmino: ({ sender, classId, id }: NFTMsgBurn) => ({
      sender,
      class_id: classId,
      id,
    }),
    fromAmino: ({ sender, class_id, id }: any): NFTMsgBurn => ({
      sender,
      classId: class_id,
      id,
    }),
  },

  // MsgFreeze - Freeze NFT
  "/coreum.asset.nft.v1.MsgFreeze": {
    aminoType: "cosmos-sdk/MsgFreeze",
    toAmino: ({ sender, classId, id }: NFTMsgFreeze) => ({
      sender,
      class_id: classId,
      id,
    }),
    fromAmino: ({ sender, class_id, id }: any): NFTMsgFreeze => ({
      sender,
      classId: class_id,
      id,
    }),
  },

  // MsgUnfreeze - Unfreeze NFT
  "/coreum.asset.nft.v1.MsgUnfreeze": {
    aminoType: "cosmos-sdk/MsgUnfreeze",
    toAmino: ({ sender, classId, id }: NFTMsgUnfreeze) => ({
      sender,
      class_id: classId,
      id,
    }),
    fromAmino: ({ sender, class_id, id }: any): NFTMsgUnfreeze => ({
      sender,
      classId: class_id,
      id,
    }),
  },

  // MsgClassFreeze - Freeze NFT class for account
  "/coreum.asset.nft.v1.MsgClassFreeze": {
    aminoType: "cosmos-sdk/MsgClassFreeze",
    toAmino: ({ sender, classId, account }: MsgClassFreeze) => ({
      sender,
      class_id: classId,
      account,
    }),
    fromAmino: ({ sender, class_id, account }: any): MsgClassFreeze => ({
      sender,
      classId: class_id,
      account,
    }),
  },

  // MsgClassUnfreeze - Unfreeze NFT class for account
  "/coreum.asset.nft.v1.MsgClassUnfreeze": {
    aminoType: "cosmos-sdk/MsgClassUnfreeze",
    toAmino: ({ sender, classId, account }: MsgClassUnfreeze) => ({
      sender,
      class_id: classId,
      account,
    }),
    fromAmino: ({ sender, class_id, account }: any): MsgClassUnfreeze => ({
      sender,
      classId: class_id,
      account,
    }),
  },

  // MsgAddToWhitelist - Add account to NFT whitelist
  "/coreum.asset.nft.v1.MsgAddToWhitelist": {
    aminoType: "cosmos-sdk/MsgAddToWhitelist",
    toAmino: ({ sender, classId, id, account }: MsgAddToWhitelist) => ({
      sender,
      class_id: classId,
      id,
      account,
    }),
    fromAmino: ({ sender, class_id, id, account }: any): MsgAddToWhitelist => ({
      sender,
      classId: class_id,
      id,
      account,
    }),
  },

  // MsgRemoveFromWhitelist - Remove account from NFT whitelist
  "/coreum.asset.nft.v1.MsgRemoveFromWhitelist": {
    aminoType: "cosmos-sdk/MsgRemoveFromWhitelist",
    toAmino: ({ sender, classId, id, account }: MsgRemoveFromWhitelist) => ({
      sender,
      class_id: classId,
      id,
      account,
    }),
    fromAmino: ({
      sender,
      class_id,
      id,
      account,
    }: any): MsgRemoveFromWhitelist => ({
      sender,
      classId: class_id,
      id,
      account,
    }),
  },

  // MsgAddToClassWhitelist - Add account to NFT class whitelist
  "/coreum.asset.nft.v1.MsgAddToClassWhitelist": {
    aminoType: "cosmos-sdk/MsgAddToClassWhitelist",
    toAmino: ({ sender, classId, account }: MsgAddToClassWhitelist) => ({
      sender,
      class_id: classId,
      account,
    }),
    fromAmino: ({
      sender,
      class_id,
      account,
    }: any): MsgAddToClassWhitelist => ({
      sender,
      classId: class_id,
      account,
    }),
  },

  // MsgRemoveFromClassWhitelist - Remove account from NFT class whitelist
  "/coreum.asset.nft.v1.MsgRemoveFromClassWhitelist": {
    aminoType: "cosmos-sdk/MsgRemoveFromClassWhitelist",
    toAmino: ({ sender, classId, account }: MsgRemoveFromClassWhitelist) => ({
      sender,
      class_id: classId,
      account,
    }),
    fromAmino: ({
      sender,
      class_id,
      account,
    }: any): MsgRemoveFromClassWhitelist => ({
      sender,
      classId: class_id,
      account,
    }),
  },

  // MsgUpdateParams - Update NFT module parameters
  "/coreum.asset.nft.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ authority, params }: NFTMsgUpdateParams) => ({
      authority,
      params,
    }),
    fromAmino: ({ authority, params }: any): NFTMsgUpdateParams => ({
      authority,
      params,
    }),
  },
};

// NFT Beta Amino Types
export const nftBetaAminoConverters: AminoConverters = {
  // MsgSend - Send NFT
  "/cosmos.nft.v1beta1.MsgSend": {
    aminoType: "cosmos-sdk/MsgSend",
    toAmino: ({ classId, id, sender, receiver }: MsgSend) => ({
      class_id: classId,
      id,
      sender,
      receiver,
    }),
    fromAmino: ({ class_id, id, sender, receiver }: any): MsgSend => ({
      classId: class_id,
      id,
      sender,
      receiver,
    }),
  },
};

// Combined Amino Converters
export const coreumAminoConverters: AminoConverters = {
  ...ftAminoConverters,
  ...dexAminoConverters,
  ...nftAminoConverters,
  //   ...nftBetaAminoConverters,
};

// Create AminoTypes instance
export function createCoreumAminoTypes(): AminoTypes {
  return new AminoTypes(coreumAminoConverters);
}
