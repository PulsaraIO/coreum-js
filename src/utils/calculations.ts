import BigNumber from "bignumber.js";

export const ucoreToCORE = (ucore: string) => {
  return new BigNumber(ucore).dividedBy(1_000_000).valueOf();
};

export const coreToUCORE = (core: string) => {
  return new BigNumber(core).multipliedBy(1_000_000).valueOf();
};
