import { ClassFeature } from "../coreum/asset/nft/v1/nft";

/**
 *
 * @param features An array of NFT Class features
 * @returns An object defining which features are enabled/disabled with a boolean
 */
export function parseClassFeatures(features: ClassFeature[]) {
  return {
    burning: features.includes(ClassFeature["burning"]),
    freezing: features.includes(ClassFeature["freezing"]),
    whitelisting: features.includes(ClassFeature["whitelisting"]),
    disable_sending: features.includes(ClassFeature["disable_sending"]),
  };
}
