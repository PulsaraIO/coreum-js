import { SigningMethods } from "../types/signing";
import Signer from "./signer";

const DcentWebConnector = require("dcent-web-connector");
class DCentSigner extends Signer {
  #signerID = SigningMethods.DCENT;

  async sign(): Promise<void> {}

  async requestConnection(): Promise<{ address: string }> {
    try {
      const info = await DcentWebConnector.getAccountInfo();

      const coreum_account = info.body.parameter.account.find(
        (acc: { coin_name: string }) => acc.coin_name === "COREUM"
      );

      if (typeof coreum_account === "undefined") {
        throw new Error("Ripple Account Not Found.");
      }

      const coreum_address = await DcentWebConnector.getAddress(
        "coreum",
        coreum_account.address_path
      );

      if (coreum_address.body.parameter.address) {
        DcentWebConnector.popupWindowClose();
      }

      return {
        address: coreum_address.body.parameter.address,
      };
    } catch (e: any) {
      console.log(e);
      throw {
        thrower: e.thrower || "requestConnection: Dcent",
        error: e,
      };
    }
  }
}
