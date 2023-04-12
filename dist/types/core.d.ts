import { QueryClient, StakingExtension } from "@cosmjs/stargate";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
export declare enum CoreDenoms {
    MAINNET = "ucore",
    TESTNET = "utestcore",
    DEVNET = "udevcore"
}
export declare enum MantleModes {
    MAINNET = "MAINNET",
    TESTNET = "TESTNET",
    DEVNET = "DEVNET"
}
export declare enum CoreumPrefixes {
    MAINNET = "core",
    TESTNET = "testcore",
    DEVNET = "devcore"
}
export declare enum CoreumTypeUrl {
    NFT = "/coreum.asset.nft.v1.",
    FT = "/coreum.asset.ft.v1.",
    NFTBeta = "/coreum.nft.v1beta1."
}
export interface CoreumQueryClient extends QueryClient {
    ft: ReturnType<typeof setupFTExtension>["ft"];
    nft: ReturnType<typeof setupNFTExtension>["nft"];
    nftbeta: ReturnType<typeof setupNFTBetaExtension>["nftbeta"];
    staking: StakingExtension["staking"];
}
