"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _DCentSigner_signerID;
Object.defineProperty(exports, "__esModule", { value: true });
const signing_1 = require("../types/signing");
const signer_1 = __importDefault(require("./signer"));
const DcentWebConnector = require("dcent-web-connector");
class DCentSigner extends signer_1.default {
    constructor() {
        super(...arguments);
        _DCentSigner_signerID.set(this, signing_1.WalletMethods.DCENT);
    }
    async requestConnection() {
        try {
            const info = await DcentWebConnector.getAccountInfo();
            const coreum_account = info.body.parameter.account.find((acc) => acc.coin_name === "COREUM");
            if (typeof coreum_account === "undefined") {
                throw new Error("Ripple Account Not Found.");
            }
            const coreum_address = await DcentWebConnector.getAddress("coreum", coreum_account.address_path);
            if (coreum_address.body.parameter.address) {
                DcentWebConnector.popupWindowClose();
            }
            return {
                address: coreum_address.body.parameter.address,
            };
        }
        catch (e) {
            console.log(e);
            throw {
                thrower: e.thrower || "requestConnection: Dcent",
                error: e,
            };
        }
    }
}
exports.default = DCentSigner;
_DCentSigner_signerID = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lnbmVycy9kY2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4Q0FBaUQ7QUFDakQsc0RBQThCO0FBRTlCLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBcUIsV0FBWSxTQUFRLGdCQUFNO0lBQS9DOztRQUNFLGdDQUFZLHVCQUFhLENBQUMsS0FBSyxFQUFDO0lBa0NsQyxDQUFDO0lBaENDLEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDckQsQ0FBQyxHQUEwQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FDM0QsQ0FBQztZQUVGLElBQUksT0FBTyxjQUFjLEtBQUssV0FBVyxFQUFFO2dCQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDOUM7WUFFRCxNQUFNLGNBQWMsR0FBRyxNQUFNLGlCQUFpQixDQUFDLFVBQVUsQ0FDdkQsUUFBUSxFQUNSLGNBQWMsQ0FBQyxZQUFZLENBQzVCLENBQUM7WUFFRixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDekMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN0QztZQUVELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87YUFDL0MsQ0FBQztTQUNIO1FBQUMsT0FBTyxDQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTTtnQkFDSixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSwwQkFBMEI7Z0JBQ2hELEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGO0FBbkNELDhCQW1DQyJ9