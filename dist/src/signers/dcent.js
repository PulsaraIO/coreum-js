"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
