import { Feature } from "../coreum/asset/ft/v1/token";

/**
 *
 * @param features An array of Feature.
 * @returns An object defining which features are enabled/disabled with boolean
 */
export const parseTokenFeatures = (features: Feature[]) => {
  return {
    minting: features.includes(Feature["minting"]),
    freezing: features.includes(Feature["freezing"]),
    burning: features.includes(Feature["burning"]),
    whitelisting: features.includes(Feature["whitelisting"]),
  };
};
