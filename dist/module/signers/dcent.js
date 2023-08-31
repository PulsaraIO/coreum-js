import { WalletMethods } from "../types/signing";
import Signer from "./signer";
const DcentWebConnector = require("dcent-web-connector");
export default class DCentSigner extends Signer {
    #signerID = WalletMethods.DCENT;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGNlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lnbmVycy9kY2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBRTlCLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxDQUFDLE9BQU8sT0FBTyxXQUFZLFNBQVEsTUFBTTtJQUM3QyxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUVoQyxLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXRELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3JELENBQUMsR0FBMEIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQzNELENBQUM7WUFFRixJQUFJLE9BQU8sY0FBYyxLQUFLLFdBQVcsRUFBRTtnQkFDekMsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsTUFBTSxjQUFjLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxVQUFVLENBQ3ZELFFBQVEsRUFDUixjQUFjLENBQUMsWUFBWSxDQUM1QixDQUFDO1lBRUYsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDdEM7WUFFRCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO2FBQy9DLENBQUM7U0FDSDtRQUFDLE9BQU8sQ0FBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU07Z0JBQ0osT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksMEJBQTBCO2dCQUNoRCxLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRiJ9