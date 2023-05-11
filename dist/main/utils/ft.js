"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTokenFeatures = void 0;
const token_1 = require("../coreum/asset/ft/v1/token");
/**
 *
 * @param features An array of Feature.
 * @returns An object defining which features are enabled/disabled with boolean
 */
const parseTokenFeatures = (features) => {
    return {
        minting: features.includes(token_1.Feature["minting"]),
        freezing: features.includes(token_1.Feature["freezing"]),
        burning: features.includes(token_1.Feature["burning"]),
        whitelisting: features.includes(token_1.Feature["whitelisting"]),
    };
};
exports.parseTokenFeatures = parseTokenFeatures;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQXNEO0FBRXREOzs7O0dBSUc7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQUMsUUFBbUIsRUFBRSxFQUFFO0lBQ3hELE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxZQUFZLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDekQsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVBXLFFBQUEsa0JBQWtCLHNCQU83QiJ9