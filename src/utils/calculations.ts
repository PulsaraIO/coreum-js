import BigNumber from "bignumber.js";

/**
 * @param ucore ucore to convert to CORE
 * @returns A string representing CORE value of ucore
 */
export const ucoreToCORE = (ucore: string) => {
  return new BigNumber(ucore).dividedBy(1000000).valueOf();
};

/**
 * @param core CORE to convert to ucore
 * @returns A string representing ucore value of CORE
 */
export const coreToUCORE = (core: string) => {
  return new BigNumber(core).multipliedBy(1000000).valueOf();
};

/**
 * @param royalty Float to convert to royalty rate format
 * @returns a string representing the float passed in royalty rate format
 */
export const parseFloatToRoyaltyRate = (royalty: number | string) => {
  const float = new BigNumber(royalty);

  return float.dividedBy(100).multipliedBy("1000000000000000000").toString();
};

/**
 *
 * @param subunit Amount of the subunit of the token to parse into full unit
 * @param precision The precision of the token; number of decimals
 * @returns The converted subunit to Unit with the passed precision
 */
export const subunitToUnit = (subunit: string, precision: number) => {
  const precisionFactor = new BigNumber(10).exponentiatedBy(precision);
  return new BigNumber(subunit).dividedBy(precisionFactor).toString();
};

/**
 *
 * @param unit Amount of the unit of the token to parse into its subunit
 * @param precision The precision of the token; number of decimals
 * @returns The converted unit to subunit with the passed precision
 */
export const unitToSubunit = (unit: string, precision: number) => {
  const precisionFactor = new BigNumber(10).exponentiatedBy(precision);
  return new BigNumber(unit).multipliedBy(precisionFactor).toString();
};
