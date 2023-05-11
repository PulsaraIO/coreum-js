/**
 *
 * @param ucore ucore to convert to CORE
 * @returns A string representing CORE value of ucore
 */
export declare const ucoreToCORE: (ucore: string) => string;
/**
 *
 * @param core CORE to convert to ucore
 * @returns A string representing ucore value of CORE
 */
export declare const coreToUCORE: (core: string) => string;
/**
 *
 * @param royalty Float to convert to royalty rate format
 * @returns a string representing the float passed in royalty rate format
 */
export declare const parseFloatToRoyaltyRate: (royalty: number | string) => string;
export declare const convertMicroDenomToDenom: (amount: number | string) => number;
export declare const convertDenomToMicroDenom: (amount: number | string) => string;
export declare const convertFromMicroDenom: (denom: string) => string;
