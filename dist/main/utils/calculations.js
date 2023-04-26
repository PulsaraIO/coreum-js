"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFromMicroDenom = exports.convertDenomToMicroDenom = exports.convertMicroDenomToDenom = exports.parseFloatToRoyaltyRate = exports.coreToUCORE = exports.ucoreToCORE = void 0;
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
const convertMicroDenomToDenom = (amount) => {
    if (typeof amount === "string") {
        amount = Number(amount);
    }
    amount = amount / 1000000;
    return isNaN(amount) ? 0 : amount;
};
exports.convertMicroDenomToDenom = convertMicroDenomToDenom;
const convertDenomToMicroDenom = (amount) => {
    if (typeof amount === "string") {
        amount = Number(amount);
    }
    amount = amount * 1000000;
    return isNaN(amount) ? "0" : String(amount);
};
exports.convertDenomToMicroDenom = convertDenomToMicroDenom;
const convertFromMicroDenom = (denom) => {
    return denom === null || denom === void 0 ? void 0 : denom.substring(1).toUpperCase();
};
exports.convertFromMicroDenom = convertFromMicroDenom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NhbGN1bGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBcUM7QUFFOUIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUMzQyxPQUFPLElBQUksc0JBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBRUssTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUMxQyxPQUFPLElBQUksc0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0FBRlcsUUFBQSxXQUFXLGVBRXRCO0FBRUssTUFBTSx1QkFBdUIsR0FBRyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtJQUNsRSxNQUFNLEtBQUssR0FBRyxJQUFJLHNCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdFLENBQUMsQ0FBQztBQUpXLFFBQUEsdUJBQXVCLDJCQUlsQztBQUVLLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxNQUF1QixFQUFFLEVBQUU7SUFDbEUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QjtJQUNELE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxDQUFDLENBQUM7QUFOVyxRQUFBLHdCQUF3Qiw0QkFNbkM7QUFFSyxNQUFNLHdCQUF3QixHQUFHLENBQUMsTUFBdUIsRUFBVSxFQUFFO0lBQzFFLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7SUFDRCxNQUFNLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBTlcsUUFBQSx3QkFBd0IsNEJBTW5DO0FBRUssTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ3JELE9BQU8sS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBRlcsUUFBQSxxQkFBcUIseUJBRWhDIn0=