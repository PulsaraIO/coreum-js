import BigNumber from "bignumber.js";

export const ucoreToCORE = (ucore: string) => {
  return new BigNumber(ucore).dividedBy(1_000_000).valueOf();
};

export const coreToUCORE = (core: string) => {
  return new BigNumber(core).multipliedBy(1_000_000).valueOf();
};

export const parseFloatToRoyaltyRate = (royalty: number | string) => {
  const float = new BigNumber(royalty);

  return float.dividedBy(100).multipliedBy("1000000000000000000").toString();
};
