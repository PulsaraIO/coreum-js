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
  DeepPartial,
  Exact,
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
   *
   * @param object Represents the properties available for this MsgMint message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Mint = function <I extends Exact<DeepPartial<FTMsgMint>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgMint",
      value: FTMsgMint.fromPartial(object),
    };
  };

  /** MsgIssue message creator
   *
   * @param object Represents the properties available for this MsgIssue message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Issue = function <I extends Exact<DeepPartial<FTMsgIssue>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgIssue",
      value: FTMsgIssue.fromPartial(object),
    };
  };

  /** MsgBurn message creator
   *
   * @param object Represents the properties available for this MsgBurn message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Burn = function <I extends Exact<DeepPartial<FTMsgBurn>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgBurn",
      value: FTMsgBurn.fromPartial(object),
    };
  };

  /** MsgFreeze message creator
   *
   * @param object Represents the properties available for this MsgIssue message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Freeze = function <I extends Exact<DeepPartial<FTMsgFreeze>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
      value: FTMsgFreeze.fromPartial(object),
    };
  };

  /** MsgGloballyFreeze message creator
   *
   * @param object Represents the properties available for this MsgGloballyFreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const GloballyFreeze = function <
    I extends Exact<DeepPartial<FTMsgGloballyFreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
      value: FTMsgGloballyFreeze.fromPartial(object),
    };
  };

  /** MsgGloballyUnfreeze message creator
   *
   * @param object Represents the properties available for this MsgGloballyUnfreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const GloballyUnfreeze = function <
    I extends Exact<DeepPartial<FTMsgGloballyUnfreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
      value: FTMsgGloballyUnfreeze.fromPartial(object),
    };
  };

  /** MsgUnfreeze message creator
   *
   * @param object Represents the properties available for this MsgUnfreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Unfreeze = function <
    I extends Exact<DeepPartial<FTMsgUnfreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
      value: FTMsgUnfreeze.fromPartial(object),
    };
  };

  /** MsgSetWhitelistedLimit message creator
   *
   * @param object Represents the properties available for this MsgSetWhitelistedLimit message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const SetWhitelistedLimit = function <
    I extends Exact<DeepPartial<FTMsgSetWhitelistedLimit>, I>
  >(object: I) {
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
   *
   * @param object Represents the properties available for this MsgMint message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Mint = function <I extends Exact<DeepPartial<NFTMsgMint>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgMint",
      value: NFTMsgMint.fromPartial(object),
    };
  };

  /** MsgAddToWhitelist message creator
   *
   * @param object Represents the properties available for this MsgAddToWhitelist message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const AddToWhitelist = function <
    I extends Exact<DeepPartial<NFTMsgAddToWhitelist>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
      value: NFTMsgAddToWhitelist.fromPartial(object),
    };
  };

  /** MsgRemoveFromWhitelist message creator
   *
   * @param object Represents the properties available for this MsgRemoveFromWhitelist message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const RemoveFromWhitelist = function <
    I extends Exact<DeepPartial<NFTMsgRemoveFromWhitelist>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
      value: NFTMsgRemoveFromWhitelist.fromPartial(object),
    };
  };

  /** MsgBurn message creator
   *
   * @param object Represents the properties available for this MsgBurn message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Burn = function <I extends Exact<DeepPartial<NFTMsgBurn>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgBurn",
      value: NFTMsgBurn.fromPartial(object),
    };
  };

  /** MsgFreeze message creator
   *
   * @param object Represents the properties available for this MsgFreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Freeze = function <
    I extends Exact<DeepPartial<NFTMsgFreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
      value: NFTMsgFreeze.fromPartial(object),
    };
  };

  /** MsgUnfreeze message creator
   *
   * @param object Represents the properties available for this MsgUnfreeze message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Unfreeze = function <
    I extends Exact<DeepPartial<NFTMsgUnfreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
      value: NFTMsgUnfreeze.fromPartial(object),
    };
  };

  /** MsgIssueClass message creator
   *
   * @param object Represents the properties available for this MsgIssueClass message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const IssueClass = function <
    I extends Exact<DeepPartial<NFTMsgIssueClass>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
      value: NFTMsgIssueClass.fromPartial(object),
    };
  };

  /** MsgSend message creator
   *
   * @param object Represents the properties available for this MsgSend message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Send = function <I extends Exact<DeepPartial<NFTMsgSend>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.nft.v1beta1.MsgSend",
      value: NFTMsgSend.fromPartial(object),
    };
  };
}
