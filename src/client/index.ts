import Tendermint34Client from "@cosmjs/tendermint-rpc";
import {
  AccountData,
  OfflineDirectSigner,
  Registry,
} from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargetTypes,
  QueryClient,
  SigningStargateClient,
  StargateClient,
} from "@cosmjs/stargate";
import { generateWalletFromMnemonic } from "../utils/generate_mnemonic";

interface CoreumClientProps {
  client: StargateClient | SigningStargateClient;
  rpc: string;
}

interface ConnectOptions {
  signer: OfflineDirectSigner;
}

class CoreumClient {
  private _rpc: string;
  private _client: StargateClient | SigningStargateClient;
  private _wallet: OfflineDirectSigner | undefined;

  static async connect(rpc: string, options?: ConnectOptions) {
    const client = options?.signer
      ? await SigningStargateClient.connectWithSigner(rpc, options.signer)
      : await StargateClient.connect(rpc);

    return new CoreumClient({ client, rpc });
  }

  private constructor(props: CoreumClientProps) {
    this._client = props.client;
    this._rpc = props.rpc;
  }

  async getStargate() {
    return this._client;
  }

  async setAccount(mnemonic: string) {
    this._wallet = await generateWalletFromMnemonic(mnemonic);
    const wallet = await this._wallet.getAccounts();

    await this._switchToSigningClient();

    return wallet[0].address;
  }

  private async _switchToSigningClient() {
    this._client = await SigningStargateClient.connectWithSigner(
      this._rpc,
      this._wallet as OfflineDirectSigner
    );
  }
}

export default CoreumClient;
