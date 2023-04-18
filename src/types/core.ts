import { protobufPackage as assetNFT } from "../coreum/asset/nft/v1/tx";
import { protobufPackage as assetFT } from "../coreum/asset/ft/v1/tx";
import { protobufPackage as nftV1beta } from "../coreum/nft/v1beta1/tx";
import {
  BankExtension,
  QueryClient,
  StakingExtension,
  TxExtension,
} from "@cosmjs/stargate";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";

export enum CoreumTypeUrl {
  NFT = `/${assetNFT}.`,
  FT = `/${assetFT}.`,
  NFTBeta = `/${nftV1beta}.`,
}

export interface MantleQueryClient extends QueryClient {
  ft: ReturnType<typeof setupFTExtension>["ft"];
  nft: ReturnType<typeof setupNFTExtension>["nft"];
  nftbeta: ReturnType<typeof setupNFTBetaExtension>["nftbeta"];
  staking: StakingExtension["staking"];
  bank: BankExtension["bank"];
  tx: TxExtension["tx"];
}
