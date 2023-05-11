import BigNumber from "bignumber.js";
/**
 *
 * @param ucore ucore to convert to CORE
 * @returns A string representing CORE value of ucore
 */
export const ucoreToCORE = (ucore) => {
    return new BigNumber(ucore).dividedBy(1_000_000).valueOf();
};
/**
 *
 * @param core CORE to convert to ucore
 * @returns A string representing ucore value of CORE
 */
export const coreToUCORE = (core) => {
    return new BigNumber(core).multipliedBy(1_000_000).valueOf();
};
/**
 *
 * @param royalty Float to convert to royalty rate format
 * @returns a string representing the float passed in royalty rate format
 */
export const parseFloatToRoyaltyRate = (royalty) => {
    const float = new BigNumber(royalty);
    return float.dividedBy(100).multipliedBy("1000000000000000000").toString();
};
export const convertMicroDenomToDenom = (amount) => {
    if (typeof amount === "string") {
        amount = Number(amount);
    }
    amount = amount / 1000000;
    return isNaN(amount) ? 0 : amount;
};
export const convertDenomToMicroDenom = (amount) => {
    if (typeof amount === "string") {
        amount = Number(amount);
    }
    amount = amount * 1000000;
    return isNaN(amount) ? "0" : String(amount);
};
export const convertFromMicroDenom = (denom) => {
    return denom?.substring(1).toUpperCase();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NhbGN1bGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFFckM7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQzNDLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUMxQyxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvRCxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxPQUF3QixFQUFFLEVBQUU7SUFDbEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdFLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBQUMsTUFBdUIsRUFBRSxFQUFFO0lBQ2xFLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7SUFDRCxNQUFNLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxNQUF1QixFQUFVLEVBQUU7SUFDMUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QjtJQUNELE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ3JELE9BQU8sS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzQyxDQUFDLENBQUMifQ==