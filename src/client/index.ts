import { coreumRegistry } from "../coreum";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import {
  connectKeplr,
  connectCosmostation,
  getCosmosOfflineSigner,
  connectLeap,
  getLeapOfflineSigner,
} from "../services";
import { COREUM_CONFIG, CoreumNetworkConfig } from "../types/coreum";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import {
  EncodeObject,
  GeneratedType,
  OfflineSigner,
  Registry,
} from "@cosmjs/proto-signing";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import {
  ExtensionWallets,
  FeeCalculation,
  ClientQueryClient,
  generateWalletFromMnemonic,
} from "..";
import {
  DeliverTxResponse,
  GasPrice,
  QueryClient,
  SigningStargateClient,
  StargateClient,
  calculateFee,
  createProtobufRpcClient,
  decodeCosmosSdkDecFromProto,
  defaultRegistryTypes,
  setupAuthExtension,
  setupBankExtension,
  setupDistributionExtension,
  setupFeegrantExtension,
  setupGovExtension,
  setupIbcExtension,
  setupMintExtension,
  setupStakingExtension,
  setupTxExtension,
} from "@cosmjs/stargate";
import EventEmitter from "eventemitter3";
import { parseSubscriptionEvents } from "../utils/event";
import { cosmos } from "@cosmostation/extension-client";
import {
  SigningCosmWasmClient,
  setupWasmExtension,
} from "@cosmjs/cosmwasm-stargate";

declare let window: any;

function isSigningClient(object: any): object is SigningStargateClient {
  return "signAndBroadcast" in object;
}

interface WithExtensionOptions {
  withWS?: boolean;
}

interface WithMnemonicOptions {
  withWS?: boolean;
}

interface ClientProps {
  network?: string;
  custom_ws_endpoint?: string;
}

export class Client {
  private _tmClient: Tendermint34Client | undefined;
  private _queryClient: ClientQueryClient | undefined;
  private _wsClient: WebsocketClient | undefined;
  private _client:
    | SigningCosmWasmClient
    | SigningStargateClient
    | StargateClient
    | undefined;
  private _address: string | undefined;
  private _feeModel: FeeModelClient | undefined;
  private _eventSequence: number = 0;
  private _custom_ws_endpoint: string;

  config: CoreumNetworkConfig;

  get queryClients() {
    return this._queryClient;
  }

  constructor(props?: ClientProps) {
    this.config = props?.network
      ? COREUM_CONFIG[props.network]
      : COREUM_CONFIG.mainnet;

    this._custom_ws_endpoint = props?.custom_ws_endpoint || undefined;
  }

  disconnect() {
    this._client.disconnect();
    this._client = undefined;
    this._tmClient.disconnect();
    this._tmClient = undefined;
    this._address = undefined;
    this._queryClient = undefined;
    this._eventSequence = 0;
    this._feeModel = undefined;
  }

  get address(): string | undefined {
    return this._address;
  }

  /**
   * Initializes the connection to the Chain, without a signer. Just for querying purposes
   */
  async connect(options?: { withWS?: boolean }) {
    await this._initTendermintClient(this.config.chain_rpc_endpoint);
    this._initQueryClient();
    this._initFeeModel();

    if (options?.withWS) {
      await this._initWsClient(
        this._custom_ws_endpoint || this.config.chain_ws_endpoint
      );
    }
  }

  /**
   * Initializes the connection to the Chain, with the selected extension wallet as signer.
   *
   * @param extension Defines which wallet extension to use to initialize the client.
   * @param options Defines the options
   *
   * If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client
   */
  async connectWithExtension(
    extension = ExtensionWallets.KEPLR,
    options?: WithExtensionOptions
  ) {
    switch (extension) {
      case ExtensionWallets.COSMOSTATION:
        await this._connectWithCosmostation();
        break;
      case ExtensionWallets.LEAP:
        await this._connectWithLeap();
        break;
      default:
        await this._connectWithKplr();
    }

    await this._initTendermintClient(this.config.chain_rpc_endpoint);
    this._initQueryClient();
    this._initFeeModel();

    if (options?.withWS) {
      await this._initWsClient(this.config.chain_ws_endpoint);
    }
  }

  /**
   * Initializes the connection to the Chain, using the Mnemonic words to create the Signer.
   *
   * @param mnemonic Defines the Mnemonic words to use to create the signer
   * @param options Defines the options
   *
   * If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client
   */
  async connectWithMnemonic(mnemonic: string, options?: WithMnemonicOptions) {
    try {
      const offlineSigner = await generateWalletFromMnemonic(
        mnemonic,
        this.config.chain_bech32_prefix
      );

      await this._initTendermintClient(this.config.chain_rpc_endpoint);
      this._initQueryClient();
      this._initFeeModel();

      await this._createClient(offlineSigner);

      if (options?.withWS) {
        await this._initWsClient(this.config.chain_ws_endpoint);
      }
    } catch (e: any) {
      throw {
        thrower: e.thrower || "connectWithMnemonic",
        error: e,
      };
    }
  }

  /**
   * Simulates the Transaction and returns the estimated gas for the transaction plus the gas price.
   *
   * @param msgs An array of messages for the transaction
   * @returns An Object that includes the following properties
   *  - fee: StdFee
   *  - gas_wanted: number
   */
  async getTxFee(msgs: readonly EncodeObject[]): Promise<FeeCalculation> {
    this._isSigningClientInit();

    const signer = this._client as SigningStargateClient;

    const gasPrice = await this._getGasPrice();

    const gas_wanted = await signer.simulate(this._address, msgs, "");

    return {
      gas_wanted: gas_wanted,
      fee: calculateFee(gas_wanted, gasPrice),
    };
  }

  /**
   *
   * @param msgs An array of messages for the Transaction
   * @param memo An arbitrary string to add as Memo for the transaction
   * @returns Response Object from the blockchain
   */
  async sendTx(
    msgs: readonly EncodeObject[],
    memo?: string
  ): Promise<DeliverTxResponse> {
    try {
      this._isSigningClientInit();

      const { fee } = await this.getTxFee(msgs);

      return await (this._client as SigningStargateClient).signAndBroadcast(
        this._address,
        msgs,
        fee,
        memo || ""
      );
    } catch (e: any) {
      throw {
        thrower: "sendTx",
        error: e,
      };
    }
  }

  /**
   *
   * @param event String describing the event to subscribe to.
   * @returns A susbcription object with the next properties
   *  - events: EventEmitter
   *  - unsubscribe: Method to kill the subscription to the blockchain
   */
  async subscribeToEvent(event: string) {
    try {
      if (this._wsClient === undefined)
        throw new Error("No Websocket client initialized");

      const emitter = new EventEmitter();

      const stream = this._wsClient.listen({
        jsonrpc: "2.0",
        method: "subscribe",
        id: this._eventSequence,
        params: { query: event },
      });

      console.log("Subscription Stream =>", stream);

      const subscription = stream.subscribe({
        next(x: any) {
          console.log("Subscription event => ", x);
          emitter.emit(event, {
            data: x.data,
            events: x.events ? parseSubscriptionEvents(x.events) : x,
          });
        },
        error(err) {
          console.log("Subscription error");
          subscription.unsubscribe();
          emitter.emit("subscription-error", err);
        },
        complete() {
          console.log("Subscription Completed");
          subscription.unsubscribe();
          emitter.emit("subscription-complete", {
            event,
          });
        },
      });

      this._eventSequence++;

      return {
        events: emitter,
        unsubscribe: subscription.unsubscribe,
      };
    } catch (e: any) {
      throw {
        thrower: e.thrower || "subscribeToEvent",
        error: e,
      };
    }
  }

  private async _getGasPrice() {
    const gasPriceMultiplier = 1.1;
    // the param can be change via governance
    const feemodelParams = await this._feeModel.Params({});
    const minGasPriceRes = await this._feeModel.MinGasPrice({});
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

  private _isSigningClientInit() {
    if (!this._client || !isSigningClient(this._client))
      throw new Error("Signing Client is not initialized");
  }

  private async _initTendermintClient(rpcEndpoint: string) {
    this._tmClient = await Tendermint34Client.connect(rpcEndpoint);
  }

  private _initQueryClient() {
    this._queryClient = QueryClient.withExtensions(
      this._tmClient,
      setupFTExtension,
      setupNFTExtension,
      setupNFTBetaExtension,
      setupStakingExtension,
      setupBankExtension,
      setupTxExtension,
      setupAuthExtension,
      setupMintExtension,
      setupFeegrantExtension,
      setupGovExtension,
      setupIbcExtension,
      setupDistributionExtension,
      setupWasmExtension
    );
  }

  private _initFeeModel() {
    const rpcClient = createProtobufRpcClient(this._queryClient);
    this._feeModel = new FeeModelClient(rpcClient);
  }

  private async _initWsClient(wsEndpoint: string) {
    this._wsClient = new WebsocketClient(wsEndpoint);
  }

  private async _createClient(offlineSigner: OfflineSigner) {
    try {
      const [{ address }] = await offlineSigner.getAccounts();
      this._address = address;

      const registry = Client.getRegistry();

      // signing client
      this._client = await SigningCosmWasmClient.connectWithSigner(
        this.config.chain_rpc_endpoint,
        offlineSigner,
        {
          registry: registry,
          gasPrice: GasPrice.fromString(this.config.gas_price),
        }
      );
    } catch (e: any) {
      throw {
        thrower: e.thrower || "_createClient",
        error: e,
      };
    }
  }

  private async _connectWithKplr() {
    try {
      await connectKeplr(this.config);

      await window.keplr.enable(this.config.chain_id);
      // get offline signer for signing txs
      const offlineSigner = await (window as any).getOfflineSigner(
        this.config.chain_id
      );

      await this._createClient(offlineSigner);
    } catch (e: any) {
      throw {
        thrower: "_connectWithKplr",
        error: e,
      };
    }
  }

  private async _connectWithCosmostation() {
    try {
      await connectCosmostation(this.config);

      const provider = await cosmos();
      await provider.requestAccount(this.config.chain_name);

      const offlineSigner = await getCosmosOfflineSigner(this.config.chain_id);

      await this._createClient(offlineSigner);
    } catch (e: any) {
      throw {
        thrower: e.thrower || "_connectWithCosmosation",
        error: e,
      };
    }
  }

  private async _connectWithLeap() {
    // throw new Error("Leap extension connected not yet implemented");
    try {
      await connectLeap(this.config);

      const offlineSigner = await getLeapOfflineSigner(this.config.chain_id);

      await this._createClient(offlineSigner);
    } catch (e: any) {
      throw {
        thrower: e.thrower || "_connectWithLeap",
        error: e,
      };
    }
  }

  /**
   *
   * @returns A Registry of the Cosmos + Coreum Custom Messages.
   */
  static getRegistry() {
    // register default and custom messages
    let registryTypes: ReadonlyArray<[string, GeneratedType]> = [
      ...defaultRegistryTypes,
      ...coreumRegistry,
    ];
    return new Registry(registryTypes);
  }
}
