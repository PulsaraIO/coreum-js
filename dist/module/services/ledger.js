import { pubkeyToAddress } from "@cosmjs/amino";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { CosmosApp } from "@zondax/ledger-cosmos-js";
// const COREUM_PATH = [44, 990, 0, 0, 0];
const PATH = [44, 118, 0, 0, 0];
export class LedgerDevice {
    device;
    constructor(props) {
        this.device = props.app;
    }
    static async connect() {
        const transport = await TransportWebUSB.create();
        const app = new CosmosApp(transport);
        const info = await app.appInfo();
        const x = await app.getVersion();
        console.log({ info, x });
        return new LedgerDevice({ app });
    }
    async getAddress() {
        const pubkey = await this.device.publicKey(PATH);
        console.log({ pubkey });
        return pubkeyToAddress(pubkey, "core");
    }
}
