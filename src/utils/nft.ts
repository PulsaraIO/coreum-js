import { ClassFeature } from "../coreum/asset/nft/v1/nft";

export function parseClassFeatures(features: ClassFeature[]) {
  return features.map((f) => ClassFeature[f]);
}
