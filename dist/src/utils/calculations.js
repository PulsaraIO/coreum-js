import BigNumber from "bignumber.js";
export const ucoreToCORE = (ucore) => {
    return new BigNumber(ucore).dividedBy(1000000).valueOf();
};
export const coreToUCORE = (core) => {
    return new BigNumber(core).multipliedBy(1000000).valueOf();
};
export const parseFloatToRoyaltyRate = (royalty) => {
    const float = new BigNumber(royalty);
    return float.dividedBy(100).multipliedBy("1000000000000000000").toString();
};
