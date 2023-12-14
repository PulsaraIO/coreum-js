"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMultisigFromPubkeys = exports.generateWalletFromMnemonic = exports.isValidCoreumAddress = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const crypto_1 = require("@cosmjs/crypto");
const bech32_1 = require("bech32");
const coreum_1 = require("../types/coreum");
const amino_1 = require("@cosmjs/amino");
/**
 *
 * @param address String representing an address on the Coreum blockchain
 * @returns A boolean defining if the passed address is a valid address on the Coreum Blockchain
 */
const isValidCoreumAddress = (address) => {
    try {
        const { prefix = null } = bech32_1.bech32.decode(address);
        if (prefix !== coreum_1.CoreumPrefixes.MAINNET &&
            prefix !== coreum_1.CoreumPrefixes.DEVNET &&
            prefix !== coreum_1.CoreumPrefixes.TESTNET)
            return false;
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
exports.isValidCoreumAddress = isValidCoreumAddress;
/**
 *
 * @param mnemonic Mnemonic words of a Cosmos SDK wallet
 * @param prefix The prefix to use - "core" | "testcore" | "devcore"
 * @returns A wallet with the default hdPath for the Coreum Blockchain, and with the selected prefix.
 */
const generateWalletFromMnemonic = async (mnemonic, prefix) => {
    const hdPath = "m/44'/990'/0'/0/0";
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix,
        hdPaths: [(0, crypto_1.stringToPath)(hdPath)],
    });
    return wallet;
};
exports.generateWalletFromMnemonic = generateWalletFromMnemonic;
const generateMultisigFromPubkeys = (pubkeys, threshold, prefix) => {
    const secpPubkeys = pubkeys.map((p) => {
        return {
            type: "tendermint/PubKeySecp256k1",
            value: p,
        };
    });
    const multisigPubkey = (0, amino_1.createMultisigThresholdPubkey)(secpPubkeys, threshold);
    return {
        pubkey: multisigPubkey,
        address: (0, amino_1.pubkeyToAddress)(multisigPubkey, prefix),
        threshold,
    };
};
exports.generateMultisigFromPubkeys = generateMultisigFromPubkeys;
