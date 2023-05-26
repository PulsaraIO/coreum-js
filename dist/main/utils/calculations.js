"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitToSubunit = exports.subunitToUnit = exports.parseFloatToRoyaltyRate = exports.coreToUCORE = exports.ucoreToCORE = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
/**
 * @param ucore ucore to convert to CORE
 * @returns A string representing CORE value of ucore
 */
const ucoreToCORE = (ucore) => {
    return new bignumber_js_1.default(ucore).dividedBy(1000000).valueOf();
};
exports.ucoreToCORE = ucoreToCORE;
/**
 * @param core CORE to convert to ucore
 * @returns A string representing ucore value of CORE
 */
const coreToUCORE = (core) => {
    return new bignumber_js_1.default(core).multipliedBy(1000000).valueOf();
};
exports.coreToUCORE = coreToUCORE;
/**
 * @param royalty Float to convert to royalty rate format
 * @returns a string representing the float passed in royalty rate format
 */
const parseFloatToRoyaltyRate = (royalty) => {
    const float = new bignumber_js_1.default(royalty);
    return float.dividedBy(100).multipliedBy("1000000000000000000").toString();
};
exports.parseFloatToRoyaltyRate = parseFloatToRoyaltyRate;
/**
 *
 * @param subunit Amount of the subunit of the token to parse into full unit
 * @param precision The precision of the token; number of decimals
 * @returns The converted subunit to Unit with the passed precision
 */
const subunitToUnit = (subunit, precision) => {
    const precisionFactor = new bignumber_js_1.default(10).exponentiatedBy(precision);
    return new bignumber_js_1.default(subunit).dividedBy(precisionFactor).toString();
};
exports.subunitToUnit = subunitToUnit;
/**
 *
 * @param unit Amount of the unit of the token to parse into its subunit
 * @param precision The precision of the token; number of decimals
 * @returns The converted unit to subunit with the passed precision
 */
const unitToSubunit = (unit, precision) => {
    const precisionFactor = new bignumber_js_1.default(10).exponentiatedBy(precision);
    return new bignumber_js_1.default(unit).multipliedBy(precisionFactor).toString();
};
exports.unitToSubunit = unitToSubunit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NhbGN1bGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBcUM7QUFFckM7OztHQUdHO0FBQ0ksTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUMzQyxPQUFPLElBQUksc0JBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBRUY7OztHQUdHO0FBQ0ksTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUMxQyxPQUFPLElBQUksc0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBRUY7OztHQUdHO0FBQ0ksTUFBTSx1QkFBdUIsR0FBRyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtJQUNsRSxNQUFNLEtBQUssR0FBRyxJQUFJLHNCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdFLENBQUMsQ0FBQztBQUpXLFFBQUEsdUJBQXVCLDJCQUlsQztBQUVGOzs7OztHQUtHO0FBQ0ksTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFlLEVBQUUsU0FBaUIsRUFBRSxFQUFFO0lBQ2xFLE1BQU0sZUFBZSxHQUFHLElBQUksc0JBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckUsT0FBTyxJQUFJLHNCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUhXLFFBQUEsYUFBYSxpQkFHeEI7QUFFRjs7Ozs7R0FLRztBQUNJLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLFNBQWlCLEVBQUUsRUFBRTtJQUMvRCxNQUFNLGVBQWUsR0FBRyxJQUFJLHNCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFIVyxRQUFBLGFBQWEsaUJBR3hCIn0=