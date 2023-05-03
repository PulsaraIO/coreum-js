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

export interface CoreumMessage {
  typeUrl: string;
  value: any;
}

export const coreumRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...assetFtRegistry,
  ...assetNftRegistry,
  ...nftBetaRegistry,
];

export namespace FT {
  export const MsgMint = function <I extends Exact<DeepPartial<FTMsgMint>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgMint",
      value: FTMsgMint.fromPartial(object),
    };
  };

  export const MsgIssue = function <
    I extends Exact<DeepPartial<FTMsgIssue>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgIssue",
      value: FTMsgIssue.fromPartial(object),
    };
  };

  export const MsgBurn = function <I extends Exact<DeepPartial<FTMsgBurn>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgBurn",
      value: FTMsgBurn.fromPartial(object),
    };
  };

  export const MsgFreeze = function <
    I extends Exact<DeepPartial<FTMsgFreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgFreeze",
      value: FTMsgFreeze.fromPartial(object),
    };
  };

  export const MsgGloballyFreeze = function <
    I extends Exact<DeepPartial<FTMsgGloballyFreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyFreeze",
      value: FTMsgGloballyFreeze.fromPartial(object),
    };
  };

  export const MsgGloballyUnfreeze = function <
    I extends Exact<DeepPartial<FTMsgGloballyUnfreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgGloballyUnfreeze",
      value: FTMsgGloballyUnfreeze.fromPartial(object),
    };
  };

  export const MsgUnfreeze = function <
    I extends Exact<DeepPartial<FTMsgUnfreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgUnfreeze",
      value: FTMsgUnfreeze.fromPartial(object),
    };
  };

  export const MsgSetWhitelistedLimit = function <
    I extends Exact<DeepPartial<FTMsgSetWhitelistedLimit>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.ft.v1.MsgSetWhitelistedLimit",
      value: FTMsgSetWhitelistedLimit.fromPartial(object),
    };
  };
}

export namespace NFT {
  export const MsgMint = function <I extends Exact<DeepPartial<NFTMsgMint>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgMint",
      value: NFTMsgMint.fromPartial(object),
    };
  };

  export const MsgAddToWhitelist = function <
    I extends Exact<DeepPartial<NFTMsgAddToWhitelist>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgAddToWhitelist",
      value: NFTMsgAddToWhitelist.fromPartial(object),
    };
  };

  export const MsgRemoveFromWhitelist = function <
    I extends Exact<DeepPartial<NFTMsgRemoveFromWhitelist>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgRemoveFromWhitelist",
      value: NFTMsgRemoveFromWhitelist.fromPartial(object),
    };
  };

  export const MsgBurn = function <I extends Exact<DeepPartial<NFTMsgBurn>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgBurn",
      value: NFTMsgBurn.fromPartial(object),
    };
  };

  export const MsgFreeze = function <
    I extends Exact<DeepPartial<NFTMsgFreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgFreeze",
      value: NFTMsgFreeze.fromPartial(object),
    };
  };

  export const MsgUnfreeze = function <
    I extends Exact<DeepPartial<NFTMsgUnfreeze>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgUnfreeze",
      value: NFTMsgUnfreeze.fromPartial(object),
    };
  };

  export const MsgIssueClass = function <
    I extends Exact<DeepPartial<NFTMsgIssueClass>, I>
  >(object: I) {
    return {
      typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
      value: NFTMsgIssueClass.fromPartial(object),
    };
  };

  export const MsgSend = function <I extends Exact<DeepPartial<NFTMsgSend>, I>>(
    object: I
  ) {
    return {
      typeUrl: "/coreum.nft.v1beta1.MsgSend",
      value: NFTMsgSend.fromPartial(object),
    };
  };
}
