import {
  calculateFee,
  createProtobufRpcClient,
  decodeCosmosSdkDecFromProto,
  defaultRegistryTypes,
  DeliverTxResponse,
  GasPrice,
  ProtobufRpcClient,
  QueryClient,
  setupStakingExtension,
  SigningStargateClient,
  SigningStargateClientOptions,
  StakingExtension,
  StargateClient,
  StdFee,
} from "@cosmjs/stargate";
import {
  EncodeObject,
  GeneratedType,
  OfflineDirectSigner,
  Registry,
} from "@cosmjs/proto-signing";
import { generateWalletFromMnemonic } from "../utils/wallet";
import { CoreDenoms, CoreumModes } from "../types/core";
import { WalletMethods } from "../types";
import { coreumRegistry } from "../coreum";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";

interface CoreumClientProps {
  client: StargateClient | SigningStargateClient;
  tmClient: Tendermint34Client;
  denom: string;
  mode: CoreumModes;
  wallet?: OfflineDirectSigner;
  gasLimit?: number;
  developer_mode?: CoreumModes.TESTNET | CoreumModes.DEVNET;
  rpcEndpoint: string;
}

interface ConnectOptions {
  signer?: string;
  gasLimit?: number;
  developer_mode?: CoreumModes.TESTNET | CoreumModes.DEVNET;
  broadcastTimeoutMs?: number;
  broadcastPollIntervalMs?: number;
  registry?: ReadonlyArray<[string, GeneratedType]>;
}

let registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...coreumRegistry,
];

class CoreumClient {
  // Properties
  #coreDenom = CoreDenoms.MAINNET;
  #coreumMode = CoreumModes.MAINNET;
  #gasLimit: number = 200_000;
  #rpcEndpoint: string;
  #client: StargateClient | SigningStargateClient;
  #wallet: OfflineDirectSigner | undefined;
  // Clients
  #staking: StakingExtension;
  #feeModel: FeeModelClient;
  #rpcClient: ProtobufRpcClient;
  #tmClient: Tendermint34Client;
  #queryClient: QueryClient;

  static async connect(rpc: string, options: ConnectOptions) {
    const coreDenom = CoreDenoms[options?.developer_mode || "MAINNET"];
    const coreumMode = options?.developer_mode || CoreumModes.MAINNET;

    if (options?.registry)
      registryTypes = [...registryTypes, ...options.registry];

    const registry = new Registry(registryTypes);

    const stargateOptions: SigningStargateClientOptions = {
      broadcastPollIntervalMs: options?.broadcastPollIntervalMs,
      broadcastTimeoutMs: options?.broadcastTimeoutMs,
      registry,
    };

    const wallet = options?.signer
      ? await generateWalletFromMnemonic(options.signer)
      : undefined;

    const tmClient = await Tendermint34Client.connect(rpc);

    const client = wallet
      ? await SigningStargateClient.createWithSigner(
          tmClient,
          wallet,
          stargateOptions
        )
      : await StargateClient.create(tmClient);

    return new CoreumClient({
      rpcEndpoint: rpc,
      denom: coreDenom,
      mode: coreumMode,
      gasLimit: options.gasLimit,
      client,
      tmClient,
      wallet,
    });
  }

  protected constructor(options: CoreumClientProps) {
    const queryClient = new QueryClient(options.tmClient);
    const rpcClient = createProtobufRpcClient(queryClient);
    const feeModel = new FeeModelClient(rpcClient);
    const staking = setupStakingExtension(queryClient);

    this.#tmClient = options.tmClient;
    this.#client = options.client;
    this.#queryClient = queryClient;
    this.#rpcClient = rpcClient;
    this.#feeModel = feeModel;
    this.#staking = staking;
    this.#rpcEndpoint = options.rpcEndpoint;

    if (options?.gasLimit) this.#gasLimit = options.gasLimit;
    if (options?.wallet) this.#wallet = options.wallet;
  }

  // Getters and Setters
  get denom() {
    return this.#coreDenom;
  }

  get mode() {
    return this.#coreumMode;
  }

  set gasLimit(limit: number) {
    this.#gasLimit = limit;
  }

  get gasLimit() {
    return this.#gasLimit;
  }

  get rpcEndpoint() {
    return this.#rpcEndpoint;
  }

  getStargate() {
    return this.#client;
  }

  async connectWallet(method: WalletMethods, data?: { mnemonic: string }) {
    switch (method) {
      case WalletMethods.MNEMONIC:
        if (data?.mnemonic) {
          return await this.setMnemonicAccount(data.mnemonic);
        }

        throw new Error("Mnemonic method requires a mnemonic phrase");
      case WalletMethods.COSMOSTATION:
        const connection = await this.#connectCosmostation();
        break;
      case WalletMethods.DCENT:
        break;
    }
  }

  async setMnemonicAccount(mnemonic: string) {
    this.#wallet = await generateWalletFromMnemonic(mnemonic);
    await this.#switchToSigningClient();
  }

  async getAddress() {
    if (!this.#wallet) throw new Error("A wallet has not been connected.");

    const accounts = await this.#wallet.getAccounts();

    return accounts[0].address;
  }

  async submit(
    messages: EncodeObject[],
    options?: { memo?: string; submit?: boolean }
  ): Promise<TxRaw | DeliverTxResponse> {
    try {
      if (!this.#wallet)
        throw { thrower: "wallet", error: new Error("Wallet not connected") };

      let shouldSubmit = true;

      if (options?.hasOwnProperty("submit"))
        shouldSubmit = options?.submit as boolean;

      const signingClient = this.getStargate() as SigningStargateClient;

      const sender = await this.getAddress();
      const fee = await this.getFee(messages);

      if (shouldSubmit) {
        return await signingClient.signAndBroadcast(
          sender,
          messages,
          fee,
          options?.memo || ""
        );
      }

      return await signingClient.sign(
        sender,
        messages,
        fee,
        options?.memo || ""
      );
    } catch (e: any) {
      console.log("E_SUBMIT_MESSAGES =>", e);
      throw {
        thrower: e.thrower || "submit",
        error: e,
      };
    }
  }

  async query(query: { path: string; data: any }) {
    const { path = null, data = null } = query;

    if (path === null || data === null)
      throw {
        thrower: "query",
        error: new Error("Path or Data is null"),
      };

    return await this.#queryClient.queryAbci(path, data);
  }

  async getFee(msgs: EncodeObject[]): Promise<StdFee> {
    const signingClient = this.getStargate() as SigningStargateClient;
    const sender = await this.getAddress();
    const txGas = await signingClient.simulate(sender, msgs, "");
    const gasPrice = await this.getGasPrice();

    return calculateFee(txGas, gasPrice);
  }

  async getGasPrice() {
    const gasPriceMultiplier = 1.1;
    // the param can be change via governance
    const feemodelParams = await this.#feeModel.Params({});
    const minGasPriceRes = await this.#feeModel.MinGasPrice({});
    const minGasPrice = decodeCosmosSdkDecFromProto(
      minGasPriceRes.minGasPrice?.amount || ""
    );
    let gasPrice = minGasPrice.toFloatApproximation() * gasPriceMultiplier;

    const initialGasPrice = decodeCosmosSdkDecFromProto(
      feemodelParams.params?.model?.initialGasPrice || ""
    ).toFloatApproximation();
    if (gasPrice > initialGasPrice) {
      gasPrice = initialGasPrice;
    }

    return GasPrice.fromString(
      `${gasPrice}${minGasPriceRes.minGasPrice?.denom || ""}`
    );
  }

  async getValidators() {
    return await this.#staking.staking.validators("BOND_STATUS_BONDED");
  }

  async #switchToSigningClient() {
    this.#client = await SigningStargateClient.createWithSigner(
      this.#tmClient,
      this.#wallet as OfflineDirectSigner,
      { registry: new Registry(registryTypes) }
    );
  }

  async #connectCosmostation() {}
}

export default CoreumClient;
