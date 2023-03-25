import { Coin, OfflineDirectSigner } from "@cosmjs/proto-signing";
import {
  calculateFee,
  GasPrice,
  SigningStargateClient,
  SigningStargateClientOptions,
  StargateClient,
} from "@cosmjs/stargate";
import { generateWalletFromMnemonic } from "../utils/wallet";
import { CoreDenoms, CoreumModes } from "../types/coreum";
import { isValidCoreumAddress } from "../utils/wallet";

interface CoreumClientProps {
  client: StargateClient | SigningStargateClient;
  rpc: string;
  wallet?: OfflineDirectSigner;
}

interface ConnectOptions {
  signer?: string;
  gasPrice?: string | number;
  gasLimit?: number;
  developer_mode?: CoreumModes.TESTNET | CoreumModes.DEVNET;
  broadcastTimeoutMs?: number;
  broadcastPollIntervalMs?: number;
}

class CoreumClient {
  // Static Properties & Methods
  private static _coreDenom = CoreDenoms.MAINNET;
  private static _coreumMode = CoreumModes.MAINNET;
  private static _gasLimit: number = 200_000;
  private static _gasPrice: GasPrice;

  static async connect(rpc: string, options?: ConnectOptions) {
    if (options?.developer_mode) {
      this._coreDenom = CoreDenoms[options.developer_mode];
      this._coreumMode = options.developer_mode;
    }

    this._gasPrice = GasPrice.fromString(`0.0625${this._coreDenom}`);

    if (options?.gasLimit) this._gasLimit = options.gasLimit;
    if (options?.gasPrice)
      this._gasPrice = GasPrice.fromString(
        `${options.gasPrice}${this._coreDenom}`
      );

    const stargateOptions: SigningStargateClientOptions = {
      gasPrice: CoreumClient.gasPrice,
      broadcastPollIntervalMs: options?.broadcastPollIntervalMs,
      broadcastTimeoutMs: options?.broadcastTimeoutMs,
    };

    const wallet = options?.signer
      ? await generateWalletFromMnemonic(options.signer)
      : undefined;

    const client = wallet
      ? await SigningStargateClient.connectWithSigner(
          rpc,
          wallet,
          stargateOptions
        )
      : await StargateClient.connect(rpc);

    return new CoreumClient({ client, rpc, wallet });
  }

  // Getters and Setters
  static get denom() {
    return this._coreDenom;
  }

  static get mode() {
    return this._coreumMode;
  }

  static get gasPrice() {
    return this._gasPrice;
  }

  static set gasLimit(limit: number) {
    this._gasLimit = limit;
  }

  static get gasLimit() {
    return this._gasLimit;
  }

  // Class Properties & Methods
  private _rpc: string;
  private _client: StargateClient | SigningStargateClient;
  private _wallet: OfflineDirectSigner | undefined;

  private constructor(props: CoreumClientProps) {
    this._client = props.client;
    this._rpc = props.rpc;
    this._wallet = props.wallet;
  }

  getStargate() {
    return this._client;
  }

  async setAccount(mnemonic: string) {
    this._wallet = await generateWalletFromMnemonic(mnemonic);
    console.log("SWITCHING");
    await this._switchToSigningClient();
  }

  async getAddress() {
    if (!this._wallet) throw new Error("A wallet has not been connected.");

    const accounts = await this._wallet.getAccounts();

    return accounts[0].address;
  }

  async send(to: string, amount: Coin[], memo = "") {
    const signingClient = this.getStargate() as SigningStargateClient;

    if (!isValidCoreumAddress(to))
      throw new Error("Invalid Coreum Address: receipient");

    const sender = await this.getAddress();

    const fee = calculateFee(CoreumClient.gasLimit, CoreumClient.gasPrice);

    const sendTx = await signingClient.sendTokens(
      sender,
      to,
      amount,
      fee,
      memo
    );

    console.log("SENDING", sendTx);
  }

  private async _switchToSigningClient() {
    console.log("SWTICHING NOW");
    this._client = await SigningStargateClient.connectWithSigner(
      this._rpc,
      this._wallet as OfflineDirectSigner,
      { gasPrice: CoreumClient.gasPrice }
    );

    console.log("SWTICHed");
  }
}

export default CoreumClient;
