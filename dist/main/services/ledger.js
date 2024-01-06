"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerDevice = void 0;
const hw_transport_webusb_1 = __importDefault(require("@ledgerhq/hw-transport-webusb"));
const ledger_cosmos_js_1 = require("@zondax/ledger-cosmos-js");
// const COREUM_PATH = [44, 990, 5, 0, 3];
const PATH = [44, 118, 0, 0, 0];
class Message {
    static new(props) {
        return String.raw `{"account_number":${props.accountNumber},"chain_id":"coreum-mainnet-1","fee":"auto","memo":${props.memo || ""},"msgs":${props.msgs},"sequence":${props.sequence}}`;
    }
}
class LedgerDevice {
    constructor(props) {
        this.device = props.app;
    }
    static async connect() {
        const transport = await hw_transport_webusb_1.default.create();
        const app = new ledger_cosmos_js_1.CosmosApp(transport);
        return new LedgerDevice({ app });
    }
    async getAddress() {
        return await this.device.getAddressAndPubKey(PATH, "core");
    }
    async sign(msgs, sequence, accountNumber, memo = "") {
        const msg_to_sign = Message.new({ msgs, memo, sequence, accountNumber });
        return await this.device.sign(PATH, Buffer.from(msg_to_sign));
    }
}
exports.LedgerDevice = LedgerDevice;
