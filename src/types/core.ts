import { protobufPackage as assetNFT } from "../coreum/asset/nft/v1/tx";
import { protobufPackage as assetFT } from "../coreum/asset/ft/v1/tx";
import { protobufPackage as nftV1beta } from "../coreum/nft/v1beta1/tx";
import {
  AuthExtension,
  BankExtension,
  MintExtension,
  QueryClient,
  StakingExtension,
  TxExtension,
} from "@cosmjs/stargate";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import {
  DistributionExtension,
  FeegrantExtension,
  GovExtension,
  IbcExtension,
} from "@cosmjs/stargate/build/modules";
import { setupWasmExtension } from "../wasm/v1/extensions/wasm";
import { WasmExtension } from "@cosmjs/cosmwasm-stargate";

export enum CoreumTypeUrl {
  NFT = `/${assetNFT}.`,
  FT = `/${assetFT}.`,
  NFTBeta = `/${nftV1beta}.`,
}

export interface ClientQueryClient extends QueryClient {
  ft: ReturnType<typeof setupFTExtension>["ft"];
  nft: ReturnType<typeof setupNFTExtension>["nft"];
  nftbeta: ReturnType<typeof setupNFTBetaExtension>["nftbeta"];
  staking: StakingExtension["staking"];
  bank: BankExtension["bank"];
  tx: TxExtension["tx"];
  auth: AuthExtension["auth"];
  mint: MintExtension["mint"];
  feegrant: FeegrantExtension["feegrant"];
  gov: GovExtension["gov"];
  ibc: IbcExtension["ibc"];
  distribution: DistributionExtension["distribution"];
  wasm: WasmExtension["wasm"];
}

// setupMintExtension,
// setupFeegrantExtension,
// setupGovExtension,
// setupIbcExtension,
// setupDistributionExtension,
