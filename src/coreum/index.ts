import { GeneratedType } from "@cosmjs/proto-signing";
import { assetNftRegistry, assetFtRegistry } from "./asset";
import { nftBetaRegistry } from "./nft";

export interface CoreumMessage {
  typeUrl: string;
  value: any;
}

export const coreumRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...assetFtRegistry,
  ...assetNftRegistry,
  ...nftBetaRegistry,
];

export * as FTMessages from "./asset/ft/v1/tx";
export * as NFTMessages from "./asset/nft/v1/tx";
export * as NFTBetaMessages from "./nft/v1beta1/tx";
