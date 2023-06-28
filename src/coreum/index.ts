import { GeneratedType } from "@cosmjs/proto-signing";
import { assetNftRegistry, assetFtRegistry } from "./asset";
import { nftBetaRegistry } from "./nft";
import { MsgSend as NFTMsgSend } from "./nft/v1beta1/tx";
import {
  MsgIssueClass as NFTMsgIssueClass,
  MsgMint as NFTMsgMint,
  MsgAddToWhitelist as NFTMsgAddToWhitelist,
  MsgBurn as NFTMsgBurn,
  MsgRemoveFromWhitelist as NFTMsgRemoveFromWhitelist,
  MsgFreeze as NFTMsgFreeze,
  MsgUnfreeze as NFTMsgUnfreeze,
} from "./asset/nft/v1/tx";
import {
  MsgIssue as FTMsgIssue,
  MsgMint as FTMsgMint,
  MsgBurn as FTMsgBurn,
  MsgFreeze as FTMsgFreeze,
  MsgUnfreeze as FTMsgUnfreeze,
  MsgGloballyFreeze as FTMsgGloballyFreeze,
  MsgGloballyUnfreeze as FTMsgGloballyUnfreeze,
  MsgSetWhitelistedLimit as FTMsgSetWhitelistedLimit,
} from "./asset/ft/v1/tx";

/** @internal */
export interface CoreumMessage {
  typeUrl: string;
  value: any;
}

/**
 * Registry of the Custom Messages of the Coreum blockchain
 */
export const coreumRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...assetFtRegistry,
  ...assetNftRegistry,
  ...nftBetaRegistry,
];

/**
 * Transaction Module for the Fungible Tokens module. (assetft)
 */
export namespace FT {
  /** MsgMint message creator
   * Mints new fungible tokens.
   *
   * @param object Represents the properties available for this MsgMint message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Mint = function (object: FTMsgMint) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgMint",
      value: FTMsgMint.fromPartial(object),
    };
  };

  /** MsgIssue message creator
   * Defines a method to issue a new fungible token.
   *
   * @param object Represents the properties available for this MsgIssue message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Issue = function (object: FTMsgIssue) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgIssue",
      value: FTMsgIssue.fromPartial(object),
    };
  };

  /** MsgBurn message creator
   * Burns the specified fungible tokens from senders balance if the sender has enough balance.
   *
   * @param object Represents the properties available for this MsgBurn message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Burn = function (object: FTMsgBurn) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgBurn",
      value: FTMsgBurn.fromPartial(object),
    };
  };

  /** MsgFreeze message creator
   * Freezes a part of the fungible tokens in an account, only if the freezable feature is enabled on that token.
   *
   * @param object Represents the properties available for this MsgIssue message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Freeze = function (object: FTMsgFreeze) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
      value: FTMsgFreeze.fromPartial(object),
    };
  };

  /** MsgGloballyFreeze message creator
   * Freezes fungible token so no operations are allowed with it before unfrozen. This operation is idempotent so global freeze of already frozen token does nothing.
   *
   * @param object Represents the properties available for this MsgGloballyFreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const GloballyFreeze = function (object: FTMsgGloballyFreeze) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
      value: FTMsgGloballyFreeze.fromPartial(object),
    };
  };

  /** MsgGloballyUnfreeze message creator
   * Unfreezes fungible token and unblocks basic operations on it. This operation is idempotent so global unfreezing of non-frozen token does nothing.
   *
   * @param object Represents the properties available for this MsgGloballyUnfreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const GloballyUnfreeze = function (object: FTMsgGloballyUnfreeze) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
      value: FTMsgGloballyUnfreeze.fromPartial(object),
    };
  };

  /** MsgUnfreeze message creator
   * Unfreezes a part of the frozen fungible tokens in an account, only if there are such frozen tokens on that account.
   *
   * @param object Represents the properties available for this MsgUnfreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Unfreeze = function (object: FTMsgUnfreeze) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
      value: FTMsgUnfreeze.fromPartial(object),
    };
  };

  /** MsgSetWhitelistedLimit message creator
   * Sets the limit of how many tokens a specific account may hold.
   *
   * @param object Represents the properties available for this MsgSetWhitelistedLimit message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const SetWhitelistedLimit = function (
    object: FTMsgSetWhitelistedLimit
  ) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
      value: FTMsgSetWhitelistedLimit.fromPartial(object),
    };
  };
}

/**
 * Transaction Module for the Non-Fungible Tokens modules (assetnft, nftbeta).
 */
export namespace NFT {
  /** MsgMint message creator
   * Mints new non-fungible token in the class.
   *
   * @param object Represents the properties available for this MsgMint message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Mint = function (object: NFTMsgMint) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgMint",
      value: NFTMsgMint.fromPartial(object),
    };
  };

  /** MsgAddToWhitelist message creator
   * Sets the account as whitelisted to hold the NFT
   *
   * @param object Represents the properties available for this MsgAddToWhitelist message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const AddToWhitelist = function (object: NFTMsgAddToWhitelist) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
      value: NFTMsgAddToWhitelist.fromPartial(object),
    };
  };

  /** MsgRemoveFromWhitelist message creator
   * Removes an account from whitelisted list of the NFT
   *
   * @param object Represents the properties available for this MsgRemoveFromWhitelist message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const RemoveFromWhitelist = function (
    object: NFTMsgRemoveFromWhitelist
  ) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
      value: NFTMsgRemoveFromWhitelist.fromPartial(object),
    };
  };

  /** MsgBurn message creator
   * Burns the existing non-fungible token in the class.
   *
   * @param object Represents the properties available for this MsgBurn message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Burn = function (object: NFTMsgBurn) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgBurn",
      value: NFTMsgBurn.fromPartial(object),
    };
  };

  /** MsgFreeze message creator
   * Freezes an NFT
   *
   * @param object Represents the properties available for this MsgFreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Freeze = function (object: NFTMsgFreeze) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
      value: NFTMsgFreeze.fromPartial(object),
    };
  };

  /** MsgUnfreeze message creator
   * Removes the freeze effect already put on an NFT
   *
   * @param object Represents the properties available for this MsgUnfreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Unfreeze = function (object: NFTMsgUnfreeze) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
      value: NFTMsgUnfreeze.fromPartial(object),
    };
  };

  /** MsgIssueClass message creator
   * Creates new non-fungible token class.
   *
   * @param object Represents the properties available for this MsgIssueClass message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const IssueClass = function (object: NFTMsgIssueClass) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
      value: NFTMsgIssueClass.fromPartial(object),
    };
  };

  /** MsgSend message creator
   * Represents a message to send a nft from one account to another account.
   *
   * @param object Represents the properties available for this MsgSend message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Send = function (object: NFTMsgSend) {
    return {
      typeUrl: "/coreum.nft.v1beta1.MsgSend",
      value: NFTMsgSend.fromPartial(object),
    };
  };
}
