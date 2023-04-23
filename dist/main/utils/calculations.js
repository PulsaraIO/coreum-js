"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFloatToRoyaltyRate = exports.coreToUCORE = exports.ucoreToCORE = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const ucoreToCORE = (ucore) => {
    return new bignumber_js_1.default(ucore).dividedBy(1000000).valueOf();
};
exports.ucoreToCORE = ucoreToCORE;
const coreToUCORE = (core) => {
    return new bignumber_js_1.default(core).multipliedBy(1000000).valueOf();
};
exports.coreToUCORE = coreToUCORE;
const parseFloatToRoyaltyRate = (royalty) => {
    const float = new bignumber_js_1.default(royalty);
    return float.dividedBy(100).multipliedBy("1000000000000000000").toString();
};
exports.parseFloatToRoyaltyRate = parseFloatToRoyaltyRate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NhbGN1bGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBcUM7QUFFOUIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUMzQyxPQUFPLElBQUksc0JBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBRUssTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUMxQyxPQUFPLElBQUksc0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBRUssTUFBTSx1QkFBdUIsR0FBRyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtJQUNsRSxNQUFNLEtBQUssR0FBRyxJQUFJLHNCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdFLENBQUMsQ0FBQztBQUpXLFFBQUEsdUJBQXVCLDJCQUlsQyJ9