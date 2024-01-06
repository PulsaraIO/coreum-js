"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerDevice = void 0;
const hw_transport_webusb_1 = __importDefault(require("@ledgerhq/hw-transport-webusb"));
const ledger_cosmos_js_1 = require("@zondax/ledger-cosmos-js");
// const COREUM_PATH = [44, 990, 0, 0, 0];
const PATH = [44, 118, 5, 0, 3];
class LedgerDevice {
    constructor(props) {
        this.device = props.app;
    }
    static async connect() {
        const transport = await hw_transport_webusb_1.default.create();
        const app = new ledger_cosmos_js_1.CosmosApp(transport);
        const info = await app.appInfo();
        const x = await app.getVersion();
        console.log({ info, x });
        return new LedgerDevice({ app });
    }
    async getAddress() {
        return await this.device.getAddressAndPubKey(PATH, "core");
    }
}
exports.LedgerDevice = LedgerDevice;
