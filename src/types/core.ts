import { protobufPackage as assetNFT } from "../coreum/asset/nft/v1/tx";
import { protobufPackage as assetFT } from "../coreum/asset/ft/v1/tx";
import { protobufPackage as nftV1beta } from "../coreum/nft/v1beta1/tx";
import { protobufPackage as dex } from "../coreum/dex/v1/tx";
import {
  AuthExtension,
  MintExtension,
  QueryClient,
  StakingExtension,
  TxExtension,
} from "@cosmjs/stargate";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import {
  FeegrantExtension,
  IbcExtension,
} from "@cosmjs/stargate/build/modules";
import { WasmExtension } from "@cosmjs/cosmwasm-stargate";
import {
  setupBankExtension,
  setupGovExtension,
  setupDistributionExtension,
} from "../cosmos/extensions";

/** @internal */
export enum CoreumTypeUrl {
  NFT = `/${assetNFT}.`,
  FT = `/${assetFT}.`,
  NFTBeta = `/${nftV1beta}.`,
  DEX = `/${dex}.`,
}

export interface ClientQueryClient extends QueryClient {
  ft: ReturnType<typeof setupFTExtension>["ft"];
  nft: ReturnType<typeof setupNFTExtension>["nft"];
  nftbeta: ReturnType<typeof setupNFTBetaExtension>["nftbeta"];
  bank: ReturnType<typeof setupBankExtension>["bank"];
  // bank: BankExtension["bank"];
  gov: ReturnType<typeof setupGovExtension>["gov"];
  // gov: GovExtension["gov"];
  distribution: ReturnType<typeof setupDistributionExtension>["distribution"];
  // distribution: DistributionExtension["distribution"];

  staking: StakingExtension["staking"];
  auth: AuthExtension["auth"];
  mint: MintExtension["mint"];
  feegrant: FeegrantExtension["feegrant"];
  ibc: IbcExtension["ibc"];
  wasm: WasmExtension["wasm"];
  tx: TxExtension["tx"];
}

// setupMintExtension,
// setupFeegrantExtension,
// setupGovExtension,
// setupIbcExtension,
// setupDistributionExtension,
