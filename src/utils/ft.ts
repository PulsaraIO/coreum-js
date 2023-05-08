import { Feature } from "../coreum/asset/ft/v1/token";

export const parseTokenFeatures = (features: Feature[]) => {
  return {
    minting: features.includes(Feature["minting"]),
    freezing: features.includes(Feature["freezing"]),
    burning: features.includes(Feature["burning"]),
    whitelisting: features.includes(Feature["whitelisting"]),
  };
};
