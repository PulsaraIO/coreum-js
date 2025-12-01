"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const coreum_1 = require("../coreum");
const v1_1 = require("../wasm/v1");
const ft_1 = require("../coreum/extensions/ft");
const nft_1 = require("../coreum/extensions/nft");
const nftbeta_1 = require("../coreum/extensions/nftbeta");
const dex_1 = require("../coreum/extensions/dex");
const services_1 = require("../services");
const coreum_2 = require("../types/coreum");
const query_1 = require("../coreum/feemodel/v1/query");
const proto_signing_1 = require("@cosmjs/proto-signing");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const cosmos_1 = require("../cosmos");
const signing_1 = require("cosmjs-types/cosmos/tx/signing/v1beta1/signing");
const service_1 = require("cosmjs-types/cosmos/tx/v1beta1/service");
const keys_1 = require("cosmjs-types/cosmos/crypto/secp256k1/keys");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const types_1 = require("../types");
const utils_1 = require("../utils");
const stargate_1 = require("@cosmjs/stargate");
const encoding_1 = require("@cosmjs/encoding");
const crypto_1 = require("@cosmjs/crypto");
const extensions_1 = require("../cosmos/extensions");
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const event_1 = require("../utils/event");
const extension_client_1 = require("@cosmostation/extension-client");
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
function isSigningClient(object) {
    return "signAndBroadcast" in object;
}
class Client {
    get queryClients() {
        return this._queryClient;
    }
    constructor(props) {
        this._eventSequence = 0;
        this.config = props?.network
            ? coreum_2.COREUM_CONFIG[props.network]
            : coreum_2.COREUM_CONFIG.mainnet;
        this._tx_memo = props?.tx_memo || undefined;
        this._custom_ws_endpoint = props?.custom_ws_endpoint || undefined;
        this._custom_node_endpoint = props?.custom_node_endpoint || undefined;
        if (props?.custom_node_endpoint && !props.network)
            throw new Error("If using a custom node, please specify the type of network.");
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
    get address() {
        return this._address;
    }
    /**
     * Accessor to get the Stargate Client
     * @returns A Stargate client or undefined if the connection hasn't been created
     */
    get stargate() {
        return this._client;
    }
    /**
     * Adds a custom offlineSigner
     *
     * @param offlineSigner Defines the signer to be used to create the client
     *
     */
    async addCustomSigner(offlineSigner) {
        try {
            await this._createClient(offlineSigner, "addCustomSigner");
        }
        catch (e) {
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
    async connect(options) {
        await this._initTendermintClient(this._custom_node_endpoint || this.config.chain_rpc_endpoint);
        await this._createClient();
        this._initQueryClient();
        this._initFeeModel();
        if (options?.withWS) {
            await this._initWsClient(this._custom_ws_endpoint || this.config.chain_ws_endpoint);
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
    async connectWithExtension(extension = types_1.ExtensionWallets.KEPLR, options) {
        try {
            switch (extension) {
                case types_1.ExtensionWallets.COSMOSTATION:
                    await this._connectWithCosmostation();
                    break;
                case types_1.ExtensionWallets.LEAP:
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
        catch (e) {
            let thrower = e.thrower || "connectWithExtension";
            let error = e.thrower ? e.error : e;
            let code = e.code || null;
            if (e.error === "Extension not installed.") {
                code = 4000;
            }
            if (["User rejected the request.", "Request rejected"].includes(e.error?.message)) {
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
    async connectWithMnemonic(mnemonic, options) {
        try {
            const offlineSigner = await (0, utils_1.generateWalletFromMnemonic)(mnemonic, this.config.chain_bech32_prefix);
            await this._initTendermintClient(this.config.chain_rpc_endpoint);
            this._initQueryClient();
            this._initFeeModel();
            await this._createClient(offlineSigner);
            if (options?.withWS) {
                await this._initWsClient(this.config.chain_ws_endpoint);
            }
        }
        catch (e) {
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
    async getTxFee(msgs) {
        this._isSigningClientInit();
        const signer = this._client;
        const gasPrice = await this._getGasPrice();
        const gas_wanted = await signer.simulate(this._address, msgs, "");
        const total_gas_wanted = new bignumber_js_1.default(gas_wanted)
            .multipliedBy(1.2)
            .integerValue()
            .toNumber();
        return {
            gas_wanted: total_gas_wanted,
            fee: (0, stargate_1.calculateFee)(total_gas_wanted, gasPrice),
        };
    }
    /**
     * Calculates gas by simulating the transaction with a dummy signer.
     * Similar to Go's CalculateGas function - works without a signing client.
     *
     * @param msgs Messages to simulate
     * @param options Optional configuration
     * @param options.fromAddress Address to simulate from (optional, uses dummy if not provided)
     * @param options.gasAdjustment Multiplier for gas (default: 1.2)
     * @returns The estimated gas amount
     */
    async calculateGas(msgs, options) {
        if (!this._queryClient) {
            throw new Error("Query client not initialized. Call connect() first.");
        }
        const { fromAddress, gasAdjustment = 1.2 } = options || {};
        // Use provided address or generate a valid dummy bech32 address
        let simAddress;
        if (fromAddress) {
            simAddress = fromAddress;
        }
        else {
            // Generate a valid bech32 address from a dummy hash
            // This creates a valid address format that the RPC will accept
            const dummyHash = (0, crypto_1.sha256)(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
            const addressBytes = dummyHash.slice(0, 20); // Use first 20 bytes for address
            simAddress = (0, encoding_1.toBech32)(this.config.chain_bech32_prefix, addressBytes);
        }
        // Get account info if address is provided and client is available
        let accountNumber = 0;
        let sequence = 0;
        if (fromAddress && this._client) {
            try {
                const account = await this._client.getAccount(fromAddress);
                accountNumber = account.accountNumber;
                sequence = account.sequence;
            }
            catch {
                // If account doesn't exist, use defaults (0, 0)
            }
        }
        // Build transaction for simulation
        // Note: We'll derive the address from the dummy pubkey in _buildTxForSimulation
        // to ensure the fee payer address matches the signer
        const txBytes = await this._buildTxForSimulation(msgs, simAddress, // This will be overridden by derived address if not provided
        accountNumber, sequence);
        // Use tx service client to simulate
        const rpcClient = (0, stargate_1.createProtobufRpcClient)(this._queryClient);
        const txService = new service_1.ServiceClientImpl(rpcClient);
        const simulateResponse = await txService.Simulate({
            txBytes: txBytes,
        });
        if (!simulateResponse.gasInfo) {
            throw new Error("Simulation failed: no gas info returned");
        }
        const gasUsed = Number(simulateResponse.gasInfo.gasUsed || 0);
        const adjustedGas = Math.ceil(gasUsed * gasAdjustment);
        return adjustedGas;
    }
    /**
     * Gets the current gas price without transaction simulation.
     * Equivalent to Go's GetGasPrice function.
     *
     * @returns GasPrice object
     */
    async getGasPrice() {
        return await this._getGasPrice();
    }
    /**
     *
     * @param transaction Transaction to be submitted
     * @returns The response of the chain
     */
    async broadcastTx(transaction, options) {
        try {
            return await this._client.broadcastTx(transaction, options?.timeoutMs || undefined, options?.pollIntervalMs || undefined);
        }
        catch (e) {
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
    async sendTx(msgs, memo) {
        try {
            this._isSigningClientInit();
            const { fee } = await this.getTxFee(msgs);
            return await this._client.signAndBroadcast(this._address, msgs, fee, this._tx_memo
                ? `${this._tx_memo} ${memo ? `- ${memo}` : ""}`
                : memo || "");
        }
        catch (e) {
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
    async signTx(msgs, memo = "", custom_sequence) {
        try {
            this._isSigningClientInit();
            const signingClient = this._client;
            const { accountNumber, sequence } = await this._client.getAccount(this.address);
            const { fee } = await this.getTxFee(msgs);
            const signerData = {
                accountNumber,
                sequence: custom_sequence || sequence,
                chainId: this.config.chain_id,
            };
            const signed = await signingClient.sign(this.address, msgs, fee, this._tx_memo
                ? `${this._tx_memo} ${memo ? `- ${memo}` : ""}`
                : memo || "", signerData);
            return signed;
        }
        catch (e) {
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
    async subscribeToEvent(event) {
        try {
            if (this._wsClient === undefined)
                throw new Error("No Websocket client initialized");
            const emitter = new eventemitter3_1.default();
            const stream = this._wsClient.listen({
                jsonrpc: "2.0",
                method: "subscribe",
                id: this._eventSequence,
                params: { query: event },
            });
            const listener = {
                next(x) {
                    emitter.emit(event, {
                        data: x.data,
                        events: x.events ? (0, event_1.parseSubscriptionEvents)(x.events) : x,
                    });
                },
                error(err) {
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
        }
        catch (e) {
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
    async createMultisigAccount(addresses, threshold = 2) {
        try {
            if (addresses.length < 2)
                throw {
                    thrower: "createMultisigAccount",
                    error: new Error("addresses param must be at least of length: 2"),
                };
            const pubkeys = [];
            for (var i = 0; i < addresses.length; i++) {
                const account = await this._client.getAccount(addresses[i]);
                if (!account || !account.pubkey)
                    throw {
                        thrower: "createMultisigAccount",
                        error: new Error(addresses[i] +
                            " has no pubkey on chain, this address will need to send a transaction to appear on chain."),
                    };
                pubkeys.push(account.pubkey.value);
            }
            return (0, utils_1.generateMultisigFromPubkeys)(pubkeys, threshold, this.config.chain_bech32_prefix);
        }
        catch (e) {
            throw {
                thrower: e.thrower || "createMultisigAccount",
                error: e.error || e,
            };
        }
    }
    async _getGasPrice() {
        const gasPriceMultiplier = 1.1;
        // the param can be change via governance
        const feemodelParams = await this._feeModel.Params({});
        const minGasPriceRes = await this._feeModel.MinGasPrice({});
        const minGasPrice = (0, stargate_1.decodeCosmosSdkDecFromProto)(minGasPriceRes.minGasPrice?.amount || "");
        let gasPrice = minGasPrice.toFloatApproximation() * gasPriceMultiplier;
        const initialGasPrice = (0, stargate_1.decodeCosmosSdkDecFromProto)(feemodelParams.params?.model?.initialGasPrice || "").toFloatApproximation();
        if (gasPrice > initialGasPrice) {
            gasPrice = initialGasPrice;
        }
        return stargate_1.GasPrice.fromString(`${gasPrice}${minGasPriceRes.minGasPrice?.denom || ""}`);
    }
    /**
     * Builds a transaction for simulation with a dummy signer.
     * Similar to Go's BuildTxForSimulation function.
     *
     * @private
     * @param msgs Messages to simulate
     * @param fromAddress Address to simulate from
     * @param accountNumber Account number
     * @param sequence Sequence number
     * @returns Encoded transaction bytes ready for simulation
     */
    async _buildTxForSimulation(msgs, fromAddress, accountNumber = 0, sequence = 0) {
        if (!this._queryClient) {
            throw new Error("Query client not initialized. Call connect() first.");
        }
        const registry = Client.getRegistry();
        // Create dummy public key (33 bytes for secp256k1 compressed pubkey)
        const dummyPubKeyBytes = new Uint8Array(33).fill(0);
        dummyPubKeyBytes[0] = 0x02; // Set compression flag
        const dummyPubKey = {
            key: dummyPubKeyBytes,
        };
        // Derive address from the dummy pubkey to ensure consistency
        // Cosmos SDK derives addresses as: RIPEMD160(SHA256(pubkey))
        const pubkeyHash = (0, crypto_1.sha256)(dummyPubKeyBytes);
        const addressBytes = (0, crypto_1.ripemd160)(pubkeyHash).slice(0, 20);
        const derivedAddress = (0, encoding_1.toBech32)(this.config.chain_bech32_prefix, addressBytes);
        // Use derived address to ensure fee payer matches signer
        // This is important for simulation - the RPC expects consistency
        const finalAddress = fromAddress || derivedAddress;
        // Create dummy signer info
        const signerInfo = {
            publicKey: {
                typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                value: keys_1.PubKey.encode(dummyPubKey).finish(),
            },
            modeInfo: {
                single: {
                    mode: signing_1.SignMode.SIGN_MODE_DIRECT,
                },
            },
            sequence: BigInt(sequence),
        };
        // Create dummy fee
        // Leave payer empty for simulation - RPC will use the first signer as payer
        const fee = {
            amount: [],
            gasLimit: BigInt(0),
            payer: "",
            granter: "",
        };
        // Create auth info
        const authInfo = {
            signerInfos: [signerInfo],
            fee: fee,
        };
        // Build the transaction body
        const body = {
            messages: msgs.map((msg) => {
                // EncodeObject.value is already a Uint8Array, but we need to encode
                // the message object itself using the registry
                const encoded = registry.encode(msg);
                return {
                    typeUrl: msg.typeUrl,
                    value: encoded,
                };
            }),
            memo: "",
            timeoutHeight: BigInt(0),
            extensionOptions: [],
            nonCriticalExtensionOptions: [],
        };
        // Encode body and auth info using protobuf encoders
        const bodyBytes = tx_1.TxBody.encode(body).finish();
        const authInfoBytes = tx_1.AuthInfo.encode(authInfo).finish();
        // Create dummy signature (64 bytes for secp256k1 signature)
        const dummySignature = new Uint8Array(64).fill(0);
        // Create TxRaw
        const txRaw = {
            bodyBytes: bodyBytes,
            authInfoBytes: authInfoBytes,
            signatures: [dummySignature],
        };
        // Serialize TxRaw to bytes for simulation
        // TxRaw is already in the correct format, we just need to encode it
        const txBytes = cosmos_1.TxRaw.encode(txRaw).finish();
        return txBytes;
    }
    _isSigningClientInit() {
        if (!this._client || !isSigningClient(this._client))
            throw new Error("Signing Client is not initialized");
    }
    async _initTendermintClient(rpcEndpoint) {
        this._tmClient = await tendermint_rpc_1.Tendermint37Client.connect(rpcEndpoint);
    }
    _initQueryClient() {
        this._queryClient = stargate_1.QueryClient.withExtensions(this._tmClient, ft_1.setupFTExtension, nft_1.setupNFTExtension, nftbeta_1.setupNFTBetaExtension, stargate_1.setupStakingExtension, extensions_1.setupBankExtension, extensions_1.setupDistributionExtension, stargate_1.setupTxExtension, stargate_1.setupAuthExtension, stargate_1.setupMintExtension, stargate_1.setupFeegrantExtension, extensions_1.setupGovExtension, stargate_1.setupIbcExtension, cosmwasm_stargate_1.setupWasmExtension, dex_1.setupDexExtension);
    }
    _initFeeModel() {
        const rpcClient = (0, stargate_1.createProtobufRpcClient)(this._queryClient);
        this._feeModel = new query_1.QueryClientImpl(rpcClient);
    }
    async _initWsClient(wsEndpoint) {
        this._wsClient = new tendermint_rpc_1.WebsocketClient(wsEndpoint);
        this.subscribeToEvent("tm.event='NewBlock'");
    }
    async _createClient(offlineSigner, type = "notAddCustomSigner") {
        try {
            if (!offlineSigner) {
                this._client = await stargate_1.StargateClient.create(this._tmClient);
                return;
            }
            const [{ address }] = await offlineSigner.getAccounts();
            this._address = address;
            const registry = Client.getRegistry();
            // signing client
            this._client = await cosmwasm_stargate_1.SigningCosmWasmClient.connectWithSigner(this.config.chain_rpc_endpoint, offlineSigner, {
                registry: registry,
                gasPrice: stargate_1.GasPrice.fromString(this.config.gas_price),
            });
            this._client.aminoTypes.register = {
                ...this._client.aminoTypes.register,
                ...coreum_1.coreumAminoConverters,
            };
        }
        catch (e) {
            throw {
                thrower: e.thrower || "_createClient",
                error: e,
            };
        }
    }
    async _connectWithKplr() {
        try {
            await (0, services_1.connectKeplr)(this.config);
            await window.keplr.enable(this.config.chain_id);
            // get offline signer for signing txs
            const offlineSigner = await window.getOfflineSignerAuto(this.config.chain_id);
            await this._createClient(offlineSigner);
        }
        catch (e) {
            throw {
                thrower: "_connectWithKplr",
                error: e.thrower ? e.error : e,
            };
        }
    }
    async _connectWithCosmostation() {
        try {
            await (0, services_1.connectCosmostation)(this.config);
            const provider = await (0, extension_client_1.cosmos)();
            await provider.requestAccount(this.config.chain_name);
            const offlineSigner = await (0, services_1.getCosmosOfflineSigner)(this.config.chain_id);
            await this._createClient(offlineSigner);
        }
        catch (e) {
            throw {
                thrower: e.thrower || "_connectWithCosmosation",
                error: e.thrower ? e.error : e,
            };
        }
    }
    async _connectWithLeap() {
        try {
            await (0, services_1.connectLeap)(this.config);
            const offlineSigner = await (0, services_1.getLeapOfflineSigner)(this.config.chain_id);
            await this._createClient(offlineSigner);
        }
        catch (e) {
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
        let registryTypes = [
            ...stargate_1.defaultRegistryTypes,
            ...coreum_1.coreumRegistry,
            ...v1_1.cosmwasmRegistry,
        ];
        return new proto_signing_1.Registry(registryTypes);
    }
}
exports.Client = Client;
