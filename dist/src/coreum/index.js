import { assetNftRegistry, assetFtRegistry } from "./asset";
import { nftBetaRegistry } from "./nft";
export const coreumRegistry = [
    ...assetFtRegistry,
    ...assetNftRegistry,
    ...nftBetaRegistry,
];
import * as FTMessages_1 from "./asset/ft/v1/tx";
export { FTMessages_1 as FTMessages };
import * as NFTMessages_1 from "./asset/nft/v1/tx";
export { NFTMessages_1 as NFTMessages };
import * as NFTBetaMessages_1 from "./nft/v1beta1/tx";
export { NFTBetaMessages_1 as NFTBetaMessages };
