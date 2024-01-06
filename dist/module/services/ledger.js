import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { CosmosApp } from "@zondax/ledger-cosmos-js";
// const COREUM_PATH = [44, 990, 5, 0, 3];
const PATH = [44, 118, 0, 0, 0];
class Message {
    static new(props) {
        return {
            account_number: props.accountNumber,
            chain_id: "coreum-mainnet-1",
            memo: props.memo || "",
            msgs: props.msgs,
            sequence: props.sequence,
            fee: "auto",
        };
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
        return await this.device.sign(PATH, Buffer.from(JSON.stringify(msg_to_sign)));
    }
}
