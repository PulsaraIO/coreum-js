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
import { CoreDenoms, CoreumModes, CoreumQueryClient } from "../types/core";
import { WalletMethods } from "../types";
import { coreumRegistry } from "../coreum";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { EventEmitter } from "events";

// var ws = WebSocket;

// if (ws === undefined) ws = require("ws");

interface CoreumClientProps {
  client: StargateClient | SigningStargateClient;
  wsClient: WebsocketClient;
  tmClient: Tendermint34Client;
  denom: string;
  mode: CoreumModes;
  wallet?: OfflineDirectSigner;
  gasLimit?: number;
  developer_mode?: CoreumModes.TESTNET | CoreumModes.DEVNET;
  node: string;
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

class CoreumClient extends EventEmitter {
  // Properties
  #gasLimit: number = Infinity;
  #node: string;
  #client: StargateClient | SigningStargateClient;
  #wallet: OfflineDirectSigner | undefined;
  #eventSequence: number = 0;
  // Clients
  #feeModel: FeeModelClient;
  #rpcClient: ProtobufRpcClient;
  #tmClient: Tendermint34Client;
  #queryClient: CoreumQueryClient;
  #wsClient: WebsocketClient;

  static async connect(node: string, options: ConnectOptions) {
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

    const tmClient = await Tendermint34Client.connect(`https://${node}`);

    const client = wallet
      ? await SigningStargateClient.createWithSigner(
          tmClient,
          wallet,
          stargateOptions
        )
      : await StargateClient.create(tmClient);

    const wsClient = new WebsocketClient(`wss://${node}`);

    return new CoreumClient({
      node,
      denom: coreDenom,
      mode: coreumMode,
      gasLimit: options.gasLimit,
      wsClient,
      client,
      tmClient,
      wallet,
    });
  }

  protected constructor(options: CoreumClientProps) {
    super();
    const queryClient = QueryClient.withExtensions(
      options.tmClient,
      setupFTExtension,
      setupNFTExtension,
      setupNFTBetaExtension,
      setupStakingExtension
    );
    const rpcClient = createProtobufRpcClient(queryClient);
    const feeModel = new FeeModelClient(rpcClient);

    this.#node = options.node;
    this.#tmClient = options.tmClient;
    this.#wsClient = options.wsClient;
    this.#client = options.client;
    this.#queryClient = queryClient;
    this.#rpcClient = rpcClient;
    this.#feeModel = feeModel;

    if (options?.gasLimit) this.#gasLimit = options.gasLimit;
    if (options?.wallet) this.#wallet = options.wallet;
  }

  // Getters and Setters
  set gasLimit(limit: number) {
    this.#gasLimit = limit;
  }

  get gasLimit() {
    return this.#gasLimit;
  }

  get queryClients(): CoreumQueryClient {
    return this.#queryClient;
  }

  get stargate() {
    return this.#client;
  }

  get wsClient() {
    return this.#wsClient;
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

      const signingClient = this.stargate as SigningStargateClient;

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

  async getFee(msgs: EncodeObject[]): Promise<StdFee> {
    const signingClient = this.stargate as SigningStargateClient;
    const sender = await this.getAddress();
    const txGas = await signingClient.simulate(sender, msgs, "");
    const gasPrice = await this.#getGasPrice();

    return calculateFee(txGas, gasPrice);
  }

  async subscribeToEvent(event: any) {
    if (this.#wsClient === undefined)
      throw {
        thrower: "subscribeToEvent",
        error: new Error("No Websocket client initialized"),
      };

    const subscription = this.#wsClient.listen({
      jsonrpc: "2.0",
      method: "subscribe",
      id: this.#eventSequence,
      params: { query: event },
    });

    this.#eventSequence++;

    return subscription;
  }

  // Private methods

  async #getGasPrice() {
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
