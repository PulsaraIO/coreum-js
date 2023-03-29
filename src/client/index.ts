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
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";

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
  static #coreDenom = CoreDenoms.MAINNET;
  static #coreumMode = CoreumModes.MAINNET;
  static #gasLimit: number = 200_000;
  static #gasPrice: GasPrice;

  static async connect(rpc: string, options?: ConnectOptions) {
    if (options?.developer_mode) {
      this.#coreDenom = CoreDenoms[options.developer_mode];
      this.#coreumMode = options.developer_mode;
    }

    this.#gasPrice = GasPrice.fromString(`0.0625${this.#coreDenom}`);

    if (options?.gasLimit) this.#gasLimit = options.gasLimit;
    if (options?.gasPrice)
      this.#gasPrice = GasPrice.fromString(
        `${options.gasPrice}${this.#coreDenom}`
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
    return this.#coreDenom;
  }

  static get mode() {
    return this.#coreumMode;
  }

  static get gasPrice() {
    return this.#gasPrice;
  }

  static set gasLimit(limit: number) {
    this.#gasLimit = limit;
  }

  static get gasLimit() {
    return this.#gasLimit;
  }

  // Class Properties & Methods
  #rpc: string;
  #client: StargateClient | SigningStargateClient;
  #wallet: OfflineDirectSigner | undefined;

  private constructor(props: CoreumClientProps) {
    this.#client = props.client;
    this.#rpc = props.rpc;
    this.#wallet = props.wallet;
  }

  getStargate() {
    return this.#client;
  }

  async setAccount(mnemonic: string) {
    this.#wallet = await generateWalletFromMnemonic(mnemonic);
    await this.#switchToSigningClient();
  }

  async getAddress() {
    if (!this.#wallet) throw new Error("A wallet has not been connected.");

    const accounts = await this.#wallet.getAccounts();

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

    return sendTx;
  }

  async #switchToSigningClient() {
    this.#client = await SigningStargateClient.connectWithSigner(
      this.#rpc,
      this.#wallet as OfflineDirectSigner,
      { gasPrice: CoreumClient.gasPrice }
    );
  }
}

export default CoreumClient;
