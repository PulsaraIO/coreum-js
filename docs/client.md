# Client

The `Client` class is the main entry point for interacting with the Coreum chain. It manages the RPC connection, optional WebSocket client, query extensions (FT, NFT, DEX, Bank, Gov, etc.), fee model, and—when used with a wallet or mnemonic—a signing client for broadcasting transactions.

## Constructor

```typescript
constructor(props?: ClientProps)
```

### ClientProps

| Property               | Type                                 | Description                                              |
| ---------------------- | ------------------------------------ | -------------------------------------------------------- |
| `network`              | `"mainnet" \| "testnet" \| "devnet"` | Network to use. Defaults to `mainnet` if omitted.        |
| `custom_ws_endpoint`   | `string`                             | Override WebSocket endpoint.                             |
| `custom_node_endpoint` | `string`                             | Override RPC endpoint. **Requires** `network` to be set. |
| `tx_memo`              | `string`                             | Default memo prepended to every transaction memo.        |

Example:

```typescript
const client = new Client({
  network: "testnet",
  tx_memo: "MyApp",
});
```

---

## Connection methods

### connect(options?)

Connects for **query-only** use (no signer). Use this when you only need to read chain state.

```typescript
await client.connect();
// With WebSocket for subscriptions:
await client.connect({ withWS: true });
```

| Option   | Type      | Description                                                     |
| -------- | --------- | --------------------------------------------------------------- |
| `withWS` | `boolean` | If `true`, creates a WebSocket client for `subscribeToEvent()`. |

**Requires:** No signer. After this, `queryClients` and fee-model queries work; `sendTx` / `signTx` / `getTxFee` are not available.

---

### connectWithExtension(extension?, options?)

Connects using a browser extension wallet (Keplr, Cosmostation, or Leap). The extension is used to get an `OfflineSigner` and the client is created with it.

```typescript
import { Client, ExtensionWallets } from "@pulsara/tx-js";

const client = new Client({ network: "testnet" });
await client.connectWithExtension(ExtensionWallets.KEPLR);
// or ExtensionWallets.COSMOSTATION | ExtensionWallets.LEAP

await client.connectWithExtension(ExtensionWallets.LEAP, { withWS: true });
```

| Parameter        | Type               | Description                                   |
| ---------------- | ------------------ | --------------------------------------------- |
| `extension`      | `ExtensionWallets` | `KEPLR` (default), `COSMOSTATION`, or `LEAP`. |
| `options.withWS` | `boolean`          | Create WebSocket client.                      |

**Errors:** May throw with `code: 4000` (extension not installed) or `code: 4001` (user rejected). See [Wallets](wallets.md).

---

### connectWithMnemonic(mnemonic, options?)

Connects using a 12- or 24-word mnemonic. The signer is created with the Coreum derivation path (`m/44'/990'/0'/0/0`).

```typescript
await client.connectWithMnemonic("word1 word2 ... word24");
await client.connectWithMnemonic(mnemonic, { withWS: true });
```

| Parameter        | Type      | Description              |
| ---------------- | --------- | ------------------------ |
| `mnemonic`       | `string`  | BIP39 mnemonic.          |
| `options.withWS` | `boolean` | Create WebSocket client. |

---

### addCustomSigner(offlineSigner)

Sets a custom `OfflineSigner` and creates the signing client with it. Requires an existing Tendermint connection (e.g. after `connect()` or one of the other connection methods that set it up).

```typescript
await client.connect(); // or connectWithExtension, etc.
await client.addCustomSigner(myOfflineSigner);
```

---

### disconnect()

Disconnects all clients and clears internal state (`_client`, `_tmClient`, `_address`, `_queryClient`, `_feeModel`). Call only when the client has been connected.

```typescript
client.disconnect();
```

---

## Getters

| Getter         | Type                                                   | Description                                                                                                                                             |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `queryClients` | `ClientQueryClient \| undefined`                       | Query client with extensions: `ft`, `nft`, `nftbeta`, `bank`, `gov`, `distribution`, `dex`, `staking`, `auth`, `mint`, `feegrant`, `ibc`, `wasm`, `tx`. |
| `address`      | `string \| undefined`                                  | Connected wallet address (only set when using a signer).                                                                                                |
| `stargate`     | `SigningCosmWasmClient \| StargateClient \| undefined` | Underlying Stargate/CosmWasm client.                                                                                                                    |
| `config`       | `CoreumNetworkConfig`                                  | Current network config (chain_id, RPC, REST, WS, etc.).                                                                                                 |

---

## Transaction methods

### sendTx(msgs, memo?)

Signs and broadcasts a transaction with automatic fee estimation (simulation + 1.2× gas multiplier).

```typescript
const result = await client.sendTx([msg], "optional memo");
console.log(result.transactionHash);
```

**Requires:** Signing client (`connectWithExtension` or `connectWithMnemonic` or `addCustomSigner`).

---

### signTx(msgs, memo?, custom_sequence?)

Signs a transaction and returns a `TxRaw` without broadcasting. Use with `broadcastTx()` for custom broadcast flows or multisig.

```typescript
const txRaw = await client.signTx([msg], "memo", customSequence);
const txBytes = TxRaw.encode(txRaw).finish();
await client.broadcastTx(txBytes);
```

| Parameter         | Type     | Description                                                          |
| ----------------- | -------- | -------------------------------------------------------------------- |
| `memo`            | `string` | Memo (default `""`). Prepended with `tx_memo` if set in constructor. |
| `custom_sequence` | `number` | Override sequence for signing.                                       |

**Requires:** Signing client.

---

### broadcastTx(transaction, options?)

Broadcasts a raw transaction (e.g. encoded `TxRaw`).

```typescript
const result = await client.broadcastTx(txBytes, {
  timeoutMs: 60_000,
  pollIntervalMs: 1000,
});
```

| Option           | Type     | Description                     |
| ---------------- | -------- | ------------------------------- |
| `timeoutMs`      | `number` | Broadcast timeout.              |
| `pollIntervalMs` | `number` | Polling interval for tx status. |

---

### getTxFee(msgs)

Estimates fee by simulating the transaction and applying a 1.2× gas multiplier. Returns `gas_wanted` and `StdFee`.

```typescript
const { fee, gas_wanted } = await client.getTxFee(msgs);
```

**Requires:** Signing client.

---

### calculateGas(msgs, options?)

Estimates gas by simulating with a dummy signer. Does **not** require a signing client; only `connect()` is needed.

```typescript
await client.connect();
const gas = await client.calculateGas(msgs, {
  fromAddress: "core1...", // optional; uses dummy address if omitted
  gasAdjustment: 1.2, // default 1.2
});
```

| Option          | Type     | Description                     |
| --------------- | -------- | ------------------------------- |
| `fromAddress`   | `string` | Address to simulate from.       |
| `gasAdjustment` | `number` | Gas multiplier (default `1.2`). |

---

### getGasPrice()

Returns the current gas price from the fee model (no simulation).

```typescript
const gasPrice = await client.getGasPrice();
```

---

## WebSocket subscriptions

### subscribeToEvent(event)

Subscribes to blockchain events over WebSocket. Requires a WebSocket client (e.g. `connect({ withWS: true })` or equivalent).

```typescript
const { events, unsubscribe } = await client.subscribeToEvent(
  "tm.event='NewBlock'"
);
events.on("tm.event='NewBlock'", (data) => {
  console.log(data.events);
});
// later
unsubscribe();
```

**Returns:** `{ events: EventEmitter, unsubscribe: () => void }`.

---

## Multisig

### createMultisigAccount(addresses, threshold?)

Creates a multisig account from a list of addresses and threshold. Fetches each address’s pubkey from chain; all must have sent at least one tx to have a pubkey.

```typescript
const multisig = await client.createMultisigAccount(
  ["core1...", "core1...", "core1..."],
  2 // default 2
);
// multisig: { pubkey, address, threshold }
```

**Requires:** Connected client (with or without signer). Throws if any address has no on-chain pubkey.

---

## Static methods

### Client.getRegistry()

Returns a CosmJS `Registry` with Cosmos, Coreum, and CosmWasm message types for encoding/decoding. Used internally and useful for custom encoding.

```typescript
const registry = Client.getRegistry();
const encoded = registry.encode(msg);
```

---

## Query access

After any connection method, use `client.queryClients` to access:

- **Coreum:** `ft`, `nft`, `nftbeta`, `dex`
- **Cosmos:** `bank`, `gov`, `distribution`, `staking`, `auth`, `mint`, `feegrant`, `ibc`, `tx`

Example:

```typescript
await client.connect();
const token = await client.queryClients?.ft.token(denom);
const balance = await client.queryClients?.bank.balance(address, denom);
```

See [Coreum FT](coreum-ft.md), [Coreum NFT](coreum-nft.md), [Coreum DEX](coreum-dex.md), and [Cosmos modules](cosmos-modules.md) for each extension’s API.
