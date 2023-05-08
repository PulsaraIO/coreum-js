"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTokenFeatures = void 0;
const token_1 = require("../coreum/asset/ft/v1/token");
const parseTokenFeatures = (features) => {
    return {
        minting: features.includes(token_1.Feature["minting"]),
        freezing: features.includes(token_1.Feature["freezing"]),
        burning: features.includes(token_1.Feature["burning"]),
        whitelisting: features.includes(token_1.Feature["whitelisting"]),
    };
};
exports.parseTokenFeatures = parseTokenFeatures;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQXNEO0FBRS9DLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxRQUFtQixFQUFFLEVBQUU7SUFDeEQsT0FBTztRQUNMLE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsT0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLFlBQVksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUN6RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUFcsUUFBQSxrQkFBa0Isc0JBTzdCIn0=