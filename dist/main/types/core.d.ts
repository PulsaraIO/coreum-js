import { AuthExtension, BankExtension, MintExtension, QueryClient, StakingExtension, TxExtension } from "@cosmjs/stargate";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { DistributionExtension, FeegrantExtension, GovExtension, IbcExtension } from "@cosmjs/stargate/build/modules";
export declare enum CoreumTypeUrl {
    NFT = "/coreum.asset.nft.v1.",
    FT = "/coreum.asset.ft.v1.",
    NFTBeta = "/coreum.nft.v1beta1."
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
}
