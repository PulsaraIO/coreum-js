import { pubkeyToAddress } from "@cosmjs/amino";
import { EncodeObject } from "@cosmjs/proto-signing";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { CosmosApp } from "@zondax/ledger-cosmos-js";

// const COREUM_PATH = [44, 990, 5, 0, 3];
const PATH = [44, 118, 0, 0, 0];

interface LedgerMsg {
  //   {"account_number":"6571","chain_id":"cosmoshub-2","fee":{"amount":[{"amount":"5000","denom":"uatom"}],"gas":"200000"},"memo":"Delegated with Ledger from union.market","msgs":[{"type":"cosmos-sdk/MsgDelegate","value":{"amount":{"amount":"1000000","denom":"uatom"},"delegator_address":"cosmos102hty0jv2s29lyc4u0tv97z9v298e24t3vwtpl","validator_address":"cosmosvaloper1grgelyng2v6v3t8z87wu3sxgt9m5s03xfytvz7"}}],"sequence":"0"}
}

interface ILedgerDeviceProps {
  app: CosmosApp;
}

interface IMessageProps {
  msgs: readonly EncodeObject[];
  memo?: string;
  sequence: number | string;
  accountNumber: number | string;
}

class Message {
  static new(props: IMessageProps) {
    return String.raw`{"account_number":"7804","chain_id":"coreum-mainnet-1","fee":{"amount":[{"amount":"5000","denom":"ucore"}],"gas":"200000"},"memo":"","msgs":[{"typeUrl":"/cosmos.bank.v1beta1.MsgSend","value":{"from_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","to_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","amount":[{"denom":"ucore","amount":"1000000"}]}}],"sequence":"0"}`;
    // return String.raw`{"account_number":"${
    //   props.accountNumber
    // }","chain_id":"coreum-mainnet-1","fee":{"amount":[{"amount":"5000","denom":"ucore"}],"gas":"200000"},"memo":"${
    //   props.memo || ""
    // }","msgs":${JSON.stringify(props.msgs)},"sequence":"${props.sequence}"}`;

    // return String.raw`{"account_number":"${props.accountNumber}","chain_id":"coreum-mainnet-1","fee":,"memo":"","msgs":["type":"cosmos-sdk/MsgSend","value":{"from_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","to_address":"core1tr3v6fne0sutsaefcqlkmljwe4pjgytjm8yg0z","amount":[{"denom":"ucore","amount":"1000000"}]}],"sequence":"${props.sequence}"}`;
  }
}

export class LedgerDevice {
  device: CosmosApp;

  private constructor(props: ILedgerDeviceProps) {
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

  async sign(
    msgs: readonly EncodeObject[],
    sequence: string | number,
    accountNumber: string | number,
    memo: string = ""
  ) {
    const msg_to_sign = Message.new({ msgs, memo, sequence, accountNumber });

    console.log({ msg_to_sign });

    return await this.device.sign(PATH, Buffer.from(msg_to_sign));
  }
}
