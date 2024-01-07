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
        return String.raw `{"account_number":"7804","chain_id":"coreum-mainnet-1","fee":{"amount":[{"amount":"5000","denom":"ucore"}],"gas":"200000"},"memo":"","msgs":[{"type":"cosmos-sdk/MsgSend","value":{"from_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","to_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","amount":[{"denom":"ucore","amount":"1000000"}]}}],"sequence":"0"}`;
        // return String.raw`{"account_number":"${
        //   props.accountNumber
        // }","chain_id":"coreum-mainnet-1","fee":{"amount":[{"amount":"5000","denom":"ucore"}],"gas":"200000"},"memo":"${
        //   props.memo || ""
        // }","msgs":${JSON.stringify(props.msgs)},"sequence":"${props.sequence}"}`;
        // return String.raw`{"account_number":"${props.accountNumber}","chain_id":"coreum-mainnet-1","fee":,"memo":"","msgs":["type":"cosmos-sdk/MsgSend","value":{"from_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","to_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","amount":[{"denom":"ucore","amount":"1000000"}]}],"sequence":"${props.sequence}"}`;
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
        console.log({ msg_to_sign });
        return await this.device.sign(PATH, Buffer.from(msg_to_sign));
    }
}
exports.LedgerDevice = LedgerDevice;
