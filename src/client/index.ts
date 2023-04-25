import {
  calculateFee,
  createProtobufRpcClient,
  decodeCosmosSdkDecFromProto,
  defaultRegistryTypes,
  DeliverTxResponse,
  GasPrice,
  ProtobufRpcClient,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupStakingExtension,
  setupTxExtension,
  SigningStargateClient,
  SigningStargateClientOptions,
  StargateClient,
  accountFromAny,
  StdFee,
} from "@cosmjs/stargate";
import {
  EncodeObject,
  GeneratedType,
  OfflineDirectSigner,
  Registry,
  makeAuthInfoBytes,
  makeSignDoc,
} from "@cosmjs/proto-signing";
import { generateWalletFromMnemonic } from "../utils/wallet";
import { MantleQueryClient } from "../types/core";
import { FeeCalculation, FeeOptions, WalletMethods } from "../types";
import { coreumRegistry } from "../coreum";
import { TxRaw, TxBody, Tx } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Tendermint34Client, WebsocketClient } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl as FeeModelClient } from "../coreum/feemodel/v1/query";
import { setupFTExtension } from "../coreum/extensions/ft";
import { setupNFTExtension } from "../coreum/extensions/nft";
import { setupNFTBetaExtension } from "../coreum/extensions/nftbeta";
import { parseSubscriptionEvents } from "../utils/event";
import EventEmitter from "eventemitter3";
import BigNumber from "bignumber.js";

interface MantleProps {
  client: StargateClient | SigningStargateClient;
  wsClient?: WebsocketClient;
  tmClient: Tendermint34Client;
  wallet?: OfflineDirectSigner;
  gasLimit?: number;
  node: string;
}

interface ConnectOptions {
  signer?: string;
  gasLimit?: number;
  withWS?: boolean;
  // developer_mode?: MantleModes.TESTNET | MantleModes.DEVNET;
  broadcastTimeoutMs?: number;
  broadcastPollIntervalMs?: number;
  registry?: ReadonlyArray<[string, GeneratedType]>;
}

let registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...coreumRegistry,
];

export class Mantle {
  // Properties
  private _gasLimit: number = Infinity;
  private _node: string;
  private _client: StargateClient | SigningStargateClient;
  private _wallet: OfflineDirectSigner | undefined;
  private _eventSequence: number = 0;
  // Clients
  private _feeModel: FeeModelClient;
  private _rpcClient: ProtobufRpcClient;
  private _tmClient: Tendermint34Client;
  private _queryClient: MantleQueryClient;
  private _wsClient: WebsocketClient;

  static async connect(node: string, options: ConnectOptions) {
    // const coreDenom = CoreDenoms[options?.developer_mode || "MAINNET"];
    // const coreumMode = options?.developer_mode || MantleModes.MAINNET;

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

    const wsClient = !!options.withWS
      ? new WebsocketClient(`wss://${node}`)
      : undefined;

    return new Mantle({
      node,
      gasLimit: options.gasLimit,
      wsClient,
      client,
      tmClient,
      wallet,
    });
  }

  protected constructor(options: MantleProps) {
    const queryClient = QueryClient.withExtensions(
      options.tmClient,
      setupFTExtension,
      setupNFTExtension,
      setupNFTBetaExtension,
      setupStakingExtension,
      setupBankExtension,
      setupTxExtension,
      setupAuthExtension
    );
    const rpcClient = createProtobufRpcClient(queryClient);
    const feeModel = new FeeModelClient(rpcClient);

    this._node = options.node;
    this._tmClient = options.tmClient;
    this._wsClient = options.wsClient;
    this._client = options.client;
    this._queryClient = queryClient;
    this._rpcClient = rpcClient;
    this._feeModel = feeModel;

    if (options?.gasLimit) this._gasLimit = options.gasLimit;
    if (options?.wallet) this._wallet = options.wallet;
  }

  // Getters and Setters
  setGasLimit(limit: number) {
    this._gasLimit = limit;
  }

  getGasLimit() {
    return this._gasLimit;
  }

  getQueryClients(): MantleQueryClient {
    return this._queryClient;
  }

  getStargate() {
    return this._client;
  }

  getWsClient() {
    return this._wsClient;
  }

  encodeSignedDoc(tx: Tx) {
    return Tx.encode(tx).finish();
  }

  async prepareSignDoc(
    signer: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo = ""
  ) {
    const { auth } = this.getQueryClients();

    const acc = await auth.account(signer);

    const { accountNumber, sequence } = accountFromAny(acc);

    const authBytes = makeAuthInfoBytes(
      [
        {
          pubkey: acc,
          sequence,
        },
      ],
      fee.amount,
      Number(fee.gas),
      fee.granter,
      fee.payer
    );
    const bodyBytes = TxBody.encode(
      TxBody.fromPartial({ messages, memo })
    ).finish();

    const signDoc = makeSignDoc(
      bodyBytes,
      authBytes,
      "coreum-1",
      accountNumber
    );

    return signDoc;
  }

  async broadcast(tx: Uint8Array) {
    return await this.getStargate().broadcastTx(tx);
  }

  async connectWallet(method: WalletMethods, data?: { mnemonic: string }) {
    switch (method) {
      case WalletMethods.MNEMONIC:
        if (data?.mnemonic) {
          return await this._setMnemonicAccount(data.mnemonic);
        }

        throw new Error("Mnemonic method requires a mnemonic phrase");
      case WalletMethods.COSMOSTATION:
        const connection = await this._connectCosmostation();
        break;
      case WalletMethods.DCENT:
        break;
    }
  }

  async getAddress() {
    if (!this._wallet) throw new Error("A wallet has not been connected.");

    const accounts = await this._wallet.getAccounts();

    return accounts[0].address;
  }

  async submit(
    messages: EncodeObject[],
    options?: { memo?: string; submit?: boolean }
  ): Promise<TxRaw | DeliverTxResponse> {
    try {
      if (!this._wallet)
        throw { thrower: "wallet", error: new Error("Wallet not connected") };

      let shouldSubmit = true;

      if (options?.hasOwnProperty("submit"))
        shouldSubmit = options?.submit as boolean;

      const signingClient = this.getStargate() as SigningStargateClient;

      const sender = await this.getAddress();
      const { fee } = await this.getFee(messages);

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

  async getFee(
    msgs: EncodeObject[],
    options?: FeeOptions
  ): Promise<FeeCalculation> {
    const signingClient = this.getStargate() as SigningStargateClient;
    const sender = options?.address || (await this.getAddress());
    const gasPrice = await this._getGasPrice();

    let txGas: number;

    try {
      txGas =
        options?.gasLimit || (await signingClient.simulate(sender, msgs, ""));
    } catch (e: any) {
      txGas = 200_000;
    }

    if (new BigNumber(txGas).isGreaterThan(this._gasLimit))
      throw {
        thrower: "getFee",
        error: new Error("Transaction gas exceeds the gas limit set."),
      };

    return {
      gas_wanted: txGas,
      fee: calculateFee(txGas, gasPrice),
    };
  }

  async subscribeToEvent(event: any) {
    if (this._wsClient === undefined)
      throw {
        thrower: "subscribeToEvent",
        error: new Error("No Websocket client initialized"),
      };

    const emitter = new EventEmitter();

    const stream = this._wsClient.listen({
      jsonrpc: "2.0",
      method: "subscribe",
      id: this._eventSequence,
      params: { query: event },
    });

    const subscription = stream.subscribe({
      next(x: any) {
        emitter.emit(event, {
          data: x.data,
          events: x.events ? parseSubscriptionEvents(x.events) : x,
        });
      },
      error(err) {
        subscription.unsubscribe();
        emitter.emit("subscription-error", err);
      },
      complete() {
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
  }

  // Private methods
  private async _setMnemonicAccount(mnemonic: string) {
    this._wallet = await generateWalletFromMnemonic(mnemonic);
    await this._switchToSigningClient();
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

  private async _switchToSigningClient() {
    this._client = await SigningStargateClient.createWithSigner(
      this._tmClient,
      this._wallet as OfflineDirectSigner,
      { registry: new Registry(registryTypes) }
    );
  }

  private async _connectCosmostation() {}
}
