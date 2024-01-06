import { pubkeyToAddress } from "@cosmjs/amino";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { CosmosApp } from "@zondax/ledger-cosmos-js";

const COREUM_PATH = [44, 990, 0, 0, 0];
// const PATH = [44, 118, 0, 0, 0];

interface LedgerMsg {
  //   {"account_number":"6571","chain_id":"cosmoshub-2","fee":{"amount":[{"amount":"5000","denom":"uatom"}],"gas":"200000"},"memo":"Delegated with Ledger from union.market","msgs":[{"type":"cosmos-sdk/MsgDelegate","value":{"amount":{"amount":"1000000","denom":"uatom"},"delegator_address":"cosmos102hty0jv2s29lyc4u0tv97z9v298e24t3vwtpl","validator_address":"cosmosvaloper1grgelyng2v6v3t8z87wu3sxgt9m5s03xfytvz7"}}],"sequence":"0"}
}

interface LedgerDeviceProps {
  app: CosmosApp;
}

export class LedgerDevice {
  device: CosmosApp;

  private constructor(props: LedgerDeviceProps) {
    this.device = props.app;
  }

  static async connect() {
    const transport = await TransportWebUSB.create();

    const app = new CosmosApp(transport);

    return new LedgerDevice({ app });
  }

  async getAddress() {
    return await this.device.getAddressAndPubKey(COREUM_PATH, "core", true);
  }

  //   async sign() {
  //     return await this.device.sign()
  //   }
}
