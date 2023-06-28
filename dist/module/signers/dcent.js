import { WalletMethods } from "../types/signing";
import Signer from "./signer";
const DcentWebConnector = require("dcent-web-connector");
class DCentSigner extends Signer {
    #signerID = WalletMethods.DCENT;
    async sign() { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lnbmVycy9kY2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBRTlCLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxXQUFZLFNBQVEsTUFBTTtJQUM5QixTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUVoQyxLQUFLLENBQUMsSUFBSSxLQUFtQixDQUFDO0lBRTlCLEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDckQsQ0FBQyxHQUEwQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FDM0QsQ0FBQztZQUVGLElBQUksT0FBTyxjQUFjLEtBQUssV0FBVyxFQUFFO2dCQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDOUM7WUFFRCxNQUFNLGNBQWMsR0FBRyxNQUFNLGlCQUFpQixDQUFDLFVBQVUsQ0FDdkQsUUFBUSxFQUNSLGNBQWMsQ0FBQyxZQUFZLENBQzVCLENBQUM7WUFFRixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDekMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN0QztZQUVELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87YUFDL0MsQ0FBQztTQUNIO1FBQUMsT0FBTyxDQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTTtnQkFDSixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSwwQkFBMEI7Z0JBQ2hELEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGIn0=