import { assetNftRegistry, assetFtRegistry } from "./asset";
import { nftBetaRegistry } from "./nft";
export const coreumRegistry = [
    ...assetFtRegistry,
    ...assetNftRegistry,
    ...nftBetaRegistry,
];
