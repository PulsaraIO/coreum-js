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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWalletFromMnemonic = exports.generateKey = exports.isValidCoreumAddress = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const crypto_1 = require("@cosmjs/crypto");
const bech32_1 = require("bech32");
const core_1 = require("../types/core");
const isValidCoreumAddress = (address) => {
    try {
        const { prefix = null } = bech32_1.bech32.decode(address);
        if (prefix !== core_1.CoreumPrefixes.MAINNET &&
            prefix !== core_1.CoreumPrefixes.DEVNET &&
            prefix !== core_1.CoreumPrefixes.TESTNET)
            return false;
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.isValidCoreumAddress = isValidCoreumAddress;
const generateKey = () => __awaiter(void 0, void 0, void 0, function* () {
    const wallet = yield proto_signing_1.DirectSecp256k1HdWallet.generate(24);
    return wallet.mnemonic;
});
exports.generateKey = generateKey;
const generateWalletFromMnemonic = (mnemonic) => __awaiter(void 0, void 0, void 0, function* () {
    const hdPath = "m/44'/990'/0'/0/0";
    const prefix = "testcore";
    const wallet = yield proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix,
        hdPaths: [(0, crypto_1.stringToPath)(hdPath)],
    });
    return wallet;
});
exports.generateWalletFromMnemonic = generateWalletFromMnemonic;
