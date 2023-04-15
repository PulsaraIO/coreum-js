var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _DCentSigner_signerID;
import { WalletMethods } from "../types/signing";
import Signer from "./signer";
const DcentWebConnector = require("dcent-web-connector");
class DCentSigner extends Signer {
    constructor() {
        super(...arguments);
        _DCentSigner_signerID.set(this, WalletMethods.DCENT);
    }
    sign() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    requestConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const info = yield DcentWebConnector.getAccountInfo();
                const coreum_account = info.body.parameter.account.find((acc) => acc.coin_name === "COREUM");
                if (typeof coreum_account === "undefined") {
                    throw new Error("Ripple Account Not Found.");
                }
                const coreum_address = yield DcentWebConnector.getAddress("coreum", coreum_account.address_path);
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
        });
    }
}
_DCentSigner_signerID = new WeakMap();
