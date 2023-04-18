var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DirectSecp256k1HdWallet, } from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { bech32 } from "bech32";
export var CoreumPrefixes;
(function (CoreumPrefixes) {
    CoreumPrefixes["MAINNET"] = "core";
    CoreumPrefixes["TESTNET"] = "testcore";
    CoreumPrefixes["DEVNET"] = "devcore";
})(CoreumPrefixes || (CoreumPrefixes = {}));
export const isValidCoreumAddress = (address) => {
    try {
        const { prefix = null } = bech32.decode(address);
        if (prefix !== CoreumPrefixes.MAINNET &&
            prefix !== CoreumPrefixes.DEVNET &&
            prefix !== CoreumPrefixes.TESTNET)
            return false;
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
export const generateKey = () => __awaiter(void 0, void 0, void 0, function* () {
    const wallet = yield DirectSecp256k1HdWallet.generate(24);
    return wallet.mnemonic;
});
export const generateWalletFromMnemonic = (mnemonic) => __awaiter(void 0, void 0, void 0, function* () {
    const hdPath = "m/44'/990'/0'/0/0";
    const prefix = "testcore";
    const wallet = yield DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix,
        hdPaths: [stringToPath(hdPath)],
    });
    return wallet;
});
