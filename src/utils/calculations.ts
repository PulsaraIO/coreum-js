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

export const convertMicroDenomToDenom = (amount: number | string) => {
  if (typeof amount === "string") {
    amount = Number(amount);
  }
  amount = amount / 1000000;
  return isNaN(amount) ? 0 : amount;
};

export const convertDenomToMicroDenom = (amount: number | string): string => {
  if (typeof amount === "string") {
    amount = Number(amount);
  }
  amount = amount * 1000000;
  return isNaN(amount) ? "0" : String(amount);
};

export const convertFromMicroDenom = (denom: string) => {
  return denom?.substring(1).toUpperCase();
};
