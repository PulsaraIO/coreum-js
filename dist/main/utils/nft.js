"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseClassFeatures = void 0;
const nft_1 = require("../coreum/asset/nft/v1/nft");
/**
 *
 * @param features An array of NFT Class features
 * @returns An object defining which features are enabled/disabled with a boolean
 */
function parseClassFeatures(features) {
    return {
        burning: features.includes(nft_1.ClassFeature["burning"]),
        freezing: features.includes(nft_1.ClassFeature["freezing"]),
        whitelisting: features.includes(nft_1.ClassFeature["whitelisting"]),
        disable_sending: features.includes(nft_1.ClassFeature["disable_sending"]),
    };
}
exports.parseClassFeatures = parseClassFeatures;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL25mdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvREFBMEQ7QUFFMUQ7Ozs7R0FJRztBQUNILFNBQWdCLGtCQUFrQixDQUFDLFFBQXdCO0lBQ3pELE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsWUFBWSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsa0JBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxlQUFlLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQkFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDcEUsQ0FBQztBQUNKLENBQUM7QUFQRCxnREFPQyJ9