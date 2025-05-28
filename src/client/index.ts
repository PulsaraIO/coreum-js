import { coreumRegistry } from "../coreum";
import { cosmwasmRegistry } from "../wasm/v1";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { setupDexExtension } from "../coreum/extensions/dex";
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
import { Tendermint37Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { TxRaw } from "../cosmos";
import { ExtensionWallets, FeeCalculation, ClientQueryClient } from "../types";
import {
  generateWalletFromMnemonic,
  generateMultisigFromPubkeys,
} from "../utils";
import {
  DeliverTxResponse,
  GasPrice,
  QueryClient,
  StargateClient,
  calculateFee,
  createProtobufRpcClient,
  decodeCosmosSdkDecFromProto,
  defaultRegistryTypes,
  setupAuthExtension,
  setupFeegrantExtension,
  setupIbcExtension,
  setupMintExtension,
  setupStakingExtension,
  setupTxExtension,
} from "@cosmjs/stargate";
import {
  setupBankExtension,
  setupGovExtension,
  setupDistributionExtension,
} from "../cosmos/extensions";
import EventEmitter from "eventemitter3";
import { parseSubscriptionEvents } from "../utils/event";
import { cosmos } from "@cosmostation/extension-client";
import {
  SigningCosmWasmClient,
  setupWasmExtension,
} from "@cosmjs/cosmwasm-stargate";
import BigNumber from "bignumber.js";

declare let window: any;

function isSigningClient(object: any): object is SigningCosmWasmClient {
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
  custom_node_endpoint?: string;
  tx_memo?: string;
}

export class Client {
  private _tmClient: Tendermint37Client | undefined;
  private _queryClient: ClientQueryClient | undefined;
  private _wsClient: WebsocketClient | undefined;
  private _client: SigningCosmWasmClient | StargateClient | undefined;
  private _address: string | undefined;
  private _feeModel: FeeModelClient | undefined;
  private _eventSequence: number = 0;
  private _custom_ws_endpoint: string;
  private _custom_node_endpoint: string;
  private _tx_memo: string;

  config: CoreumNetworkConfig;

  get queryClients() {
    return this._queryClient;
  }

  constructor(props?: ClientProps) {
    console.log("Coreum JS => Test");
    this.config = props?.network
      ? COREUM_CONFIG[props.network]
      : COREUM_CONFIG.mainnet;

    this._tx_memo = props?.tx_memo || undefined;
    this._custom_ws_endpoint = props?.custom_ws_endpoint || undefined;
    this._custom_node_endpoint = props?.custom_node_endpoint || undefined;

    if (props?.custom_node_endpoint && !props.network)
      throw new Error(
        "If using a custom node, please specify the type of network."
      );
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

  /**
   * Accessor to get the address of the current connected wallet
   * @returns A string that represents the address or undefined, if no wallet is connected.
   */
  get address(): string | undefined {
    return this._address;
  }

  /**
   * Accessor to get the Stargate Client
   * @returns A Stargate client or undefined if the connection hasn't been created
   */
  get stargate(): SigningCosmWasmClient | StargateClient | undefined {
    return this._client;
  }

  /**
   * Adds a custom offlineSigner
   *
   * @param offlineSigner Defines the signer to be used to create the client
   *
   */
  async addCustomSigner(offlineSigner: OfflineSigner) {
    try {
      await this._createClient(offlineSigner);
    } catch (e) {
      throw {
        thrower: e.thrower || "addCustomSigner",
        error: e,
      };
    }
  }

  /**
   * Initializes the connection to the Chain, without a signer. Just for querying purposes
   *
   * @param options Defines the options for the connection
   *
   * If `withWS` is passed on the options object, a Websocket Connection will be created alongside the RPC client
   */
  async connect(options?: { withWS?: boolean }) {
    await this._initTendermintClient(
      this._custom_node_endpoint || this.config.chain_rpc_endpoint
    );
    await this._createClient();
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
    try {
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
    } catch (e) {
      let thrower = e.thrower || "connectWithExtension";
      let error = e.thrower ? e.error : e;
      let code = e.code || null;

      if (e.error === "Extension not installed.") {
        code = 4000;
      }

      if (
        ["User rejected the request.", "Request rejected"].includes(
          e.error?.message
        )
      ) {
        error = "Request rejected";
        code = 4001;
      }

      throw {
        thrower,
        error,
        code,
      };
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

    const signer = this._client as SigningCosmWasmClient;

    const gasPrice = await this._getGasPrice();

    const gas_wanted = await signer.simulate(this._address, msgs, "");

    const total_gas_wanted = new BigNumber(gas_wanted)
      .multipliedBy(1.2)
      .integerValue()
      .toNumber();

    return {
      gas_wanted: total_gas_wanted,
      fee: calculateFee(total_gas_wanted, gasPrice),
    };
  }

  /**
   *
   * @param transaction Transaction to be submitted
   * @returns The response of the chain
   */
  async broadcastTx(
    transaction: Uint8Array,
    options?: { timeoutMs?: number; pollIntervalMs?: number }
  ) {
    try {
      return await this._client.broadcastTx(
        transaction,
        options?.timeoutMs || undefined,
        options?.pollIntervalMs || undefined
      );
    } catch (e: any) {
      throw {
        thrower: e.thrower || "broadcastTx",
        error: e.error || e,
      };
    }
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

      return await (this._client as SigningCosmWasmClient).signAndBroadcast(
        this._address,
        msgs,
        fee,
        this._tx_memo
          ? `${this._tx_memo} ${memo ? `- ${memo}` : ""}`
          : memo || ""
      );
    } catch (e: any) {
      throw {
        thrower: "sendTx",
        error: e,
      };
    }
  }

  //  async signTx(msgs, memo, custom_sequence) {
  //       try {
  //           this._isSigningClientInit();
  //           const signingClient = this._client;
  //           const { accountNumber, sequence } = await this._client.getAccount(this.address);
  //           const { fee } = await this.getTxFee(msgs);
  //           const signerData = {
  //               accountNumber,
  //               sequence: custom_sequence || sequence,
  //               chainId: this.config.chain_id,
  //           };
  //           const signed = await signingClient.sign(this.address, msgs, fee, this._tx_memo
  //               ? `${this._tx_memo} ${memo ? `- ${memo}` : ""}`
  //               : memo || "", signerData);
  //           return signed;
  //       }
  //       catch (e) {
  //           throw {
  //               thrower: e.thrower || "addSignature",
  //               error: e.error || e,
  //           };
  //       }
  //   }

  /**
   *
   * @param msgs An array of messages for the Transaction
   * @param memo An arbitrary string to add as Memo for the transaction
   * @returns TxRaw object to be submitted to the chain
   */
  async signTx(
    msgs: readonly EncodeObject[],
    memo: string = "",
    custom_sequence?: number
  ): Promise<TxRaw> {
    try {
      this._isSigningClientInit();

      const signingClient = this._client as SigningCosmWasmClient;

      const { accountNumber, sequence } = await this._client.getAccount(
        this.address
      );
      const { fee } = await this.getTxFee(msgs);

      const signerData = {
        accountNumber,
        sequence: custom_sequence || sequence,
        chainId: this.config.chain_id,
      };

      const signed = await signingClient.sign(
        this.address,
        msgs,
        fee,
        this._tx_memo
          ? `${this._tx_memo} ${memo ? `- ${memo}` : ""}`
          : memo || "",
        signerData
      );

      return signed;
    } catch (e: any) {
      throw {
        thrower: e.thrower || "addSignature",
        error: e.error || e,
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

      const listener = {
        next(x: any) {
          emitter.emit(event, {
            data: x.data,
            events: x.events ? parseSubscriptionEvents(x.events) : x,
          });
        },
        error(err: any) {
          emitter.emit("subscription-error", err);
        },
        complete() {
          emitter.emit("subscription-complete", {
            event,
          });
        },
      };

      const subscription = stream.subscribe(listener);

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

  /**
   *
   * @param addresses An array of addresses that should be added to the Multisig Account
   * @param threshold The minimum amount of signatures required for the transaction to be valid
   * @returns A MultisigAccount object
   */
  async createMultisigAccount(addresses: string[], threshold = 2) {
    try {
      if (addresses.length < 2)
        throw {
          thrower: "createMultisigAccount",
          error: new Error("addresses param must be at least of length: 2"),
        };

      const pubkeys = [];

      for (var i = 0; i < addresses.length; i++) {
        const account = await this._client.getAccount(addresses[i]);
        console.log(addresses[i] + " data => ", account);

        if (!account || !account.pubkey)
          throw {
            thrower: "createMultisigAccount",
            error: new Error(
              addresses[i] +
                " has no pubkey on chain, this address will need to send a transaction to appear on chain."
            ),
          };

        pubkeys.push(account.pubkey.value);
      }

      return generateMultisigFromPubkeys(
        pubkeys,
        threshold,
        this.config.chain_bech32_prefix
      );
    } catch (e: any) {
      throw {
        thrower: e.thrower || "createMultisigAccount",
        error: e.error || e,
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
    this._tmClient = await Tendermint37Client.connect(rpcEndpoint);
  }

  private _initQueryClient() {
    this._queryClient = QueryClient.withExtensions(
      this._tmClient,
      setupFTExtension,
      setupNFTExtension,
      setupNFTBetaExtension,
      setupStakingExtension,
      setupBankExtension,
      setupDistributionExtension,
      setupTxExtension,
      setupAuthExtension,
      setupMintExtension,
      setupFeegrantExtension,
      setupGovExtension,
      setupIbcExtension,
      setupWasmExtension,
      setupDexExtension
    );
  }

  private _initFeeModel() {
    const rpcClient = createProtobufRpcClient(this._queryClient);
    this._feeModel = new FeeModelClient(rpcClient);
  }

  private async _initWsClient(wsEndpoint: string) {
    this._wsClient = new WebsocketClient(wsEndpoint);
    this.subscribeToEvent("tm.event='NewBlock'");
  }

  private async _createClient(offlineSigner?: OfflineSigner) {
    try {
      if (!offlineSigner) {
        this._client = await StargateClient.create(this._tmClient);
        return;
      }

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
      const offlineSigner = await (window as any).getOfflineSignerAuto(
        this.config.chain_id
      );

      await this._createClient(offlineSigner);
    } catch (e: any) {
      throw {
        thrower: "_connectWithKplr",
        error: e.thrower ? e.error : e,
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
        error: e.thrower ? e.error : e,
      };
    }
  }

  private async _connectWithLeap() {
    try {
      await connectLeap(this.config);

      const offlineSigner = await getLeapOfflineSigner(this.config.chain_id);

      await this._createClient(offlineSigner);
    } catch (e: any) {
      throw {
        thrower: e.thrower || "_connectWithLeap",
        error: e.thrower ? e.error : e,
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
      ...cosmwasmRegistry,
    ];
    return new Registry(registryTypes);
  }
}
