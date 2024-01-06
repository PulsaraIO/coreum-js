import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { CosmosApp } from "@zondax/ledger-cosmos-js";
// const COREUM_PATH = [44, 990, 5, 0, 3];
const PATH = [44, 118, 0, 0, 0];
class Message {
    static new(props) {
        // return String.raw`{"account_number":"${
        //   props.accountNumber
        // }","chain_id":"coreum-mainnet-1","fee":"auto","memo":"${
        //   props.memo || ""
        // }","msgs":${JSON.stringify(
        //   props.msgs.map((m) => ({ type: m.typeUrl, value: m.value }))
        // )},"sequence":"${props.sequence}"}`;
        return String.raw `{"account_number":"${props.accountNumber}","chain_id":"coreum-mainnet-1","fee":"auto","memo":"","msgs":["type":"cosmos-sdk/MsgSend","value":{"from_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","to_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","amount":[{"denom":"ucore","amount":"1000000"}]}],"sequence":"${props.sequence}"}`;
    }
}
export class LedgerDevice {
    device;
    constructor(props) {
        this.device = props.app;
    }
    static async connect() {
        const transport = await TransportWebUSB.create();
        const app = new CosmosApp(transport);
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
