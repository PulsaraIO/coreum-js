"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectLedgerDevice = void 0;
const hw_transport_webusb_1 = __importDefault(require("@ledgerhq/hw-transport-webusb"));
const ledger_amino_1 = require("@cosmjs/ledger-amino");
const amino_1 = require("@cosmjs/amino");
const connectLedgerDevice = async (config) => {
    try {
        const ledgerTransport = await hw_transport_webusb_1.default.create();
        return new ledger_amino_1.LedgerSigner(ledgerTransport, {
            hdPaths: [(0, amino_1.makeCosmoshubPath)(0)],
            prefix: config.chain_bech32_prefix,
        });
    }
    catch (e) {
        console.log("E_CONNECT_LEDGER =>", e);
        throw e;
    }
};
exports.connectLedgerDevice = connectLedgerDevice;
