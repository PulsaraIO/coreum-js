# Network configuration

The SDK ships with built-in configuration for Coreum **mainnet**, **testnet**, and **devnet**. You can use these as-is or override RPC and WebSocket endpoints per client.

---

## COREUM_CONFIG

`COREUM_CONFIG` is an object with three keys: `mainnet`, `testnet`, and `devnet`. Each value is a **CoreumNetworkConfig** with the following fields:

| Field | Description |
|-------|-------------|
| `chain_name` | Display name (e.g. "Coreum", "Coreum Testnet"). |
| `chain_id` | Chain ID (`coreum-mainnet-1`, `coreum-testnet-1`, `coreum-devnet-1`). |
| `chain_bech32_prefix` | Bech32 prefix (`core`, `testcore`, `devcore`). |
| `chain_rpc_endpoint` | RPC URL (Tendermint). |
| `chain_rest_endpoint` | REST/LCD URL. |
| `chain_ws_endpoint` | WebSocket URL. |
| `chain_explorer` | Explorer base URL. |
| `staking_denom` | Minimal staking denom (`ucore`, `utestcore`, `udevcore`). |
| `coin_type` | BIP44 coin type (`"990"`). |
| `site_title` | Site title. |
| `gas_price` | Default gas price string (e.g. `"0.0625ucore"`). |

### Default endpoints

| Network | RPC | REST | WebSocket |
|---------|-----|------|-----------|
| Mainnet | `https://full-node.mainnet-1.coreum.dev:26657` | `https://full-node.mainnet-1.coreum.dev:1317` | `wss://full-node.mainnet-1.coreum.dev:26657` |
| Testnet | `https://full-node.testnet-1.coreum.dev:26657` | `https://full-node.testnet-1.coreum.dev:1317` | `wss://full-node.testnet-1.coreum.dev:26657` |
| Devnet | `https://full-node.devnet-1.coreum.dev:26657` | `https://full-node.devnet-1.coreum.dev:1317` | `wss://full-node.devnet-1.coreum.dev:26657` |

Explorer base URLs follow the pattern `https://explorer.<network>-1.coreum.dev`.

---

## Using the Client with a network

Set the network in the constructor; the client loads the corresponding config from `COREUM_CONFIG`:

```typescript
import { Client, CoreumNetwork } from "tx-js";

// Mainnet (default if omitted)
const client = new Client({ network: CoreumNetwork.MAINNET });
// or
const client = new Client({ network: "mainnet" });

// Testnet
const client = new Client({ network: CoreumNetwork.TESTNET });

// Devnet
const client = new Client({ network: CoreumNetwork.DEVNET });
```

After connection, `client.config` holds the active `CoreumNetworkConfig` (e.g. for wallet services or custom logic).

---

## Custom endpoints

You can override the RPC and WebSocket endpoints while still using the rest of the network config (chain_id, prefix, etc.). This is useful for private or local nodes.

**Rules:**

- You **must** set `network` when using `custom_node_endpoint`. The SDK uses the network to resolve chain_id, prefix, and other fields.
- `custom_node_endpoint` overrides the RPC URL.
- `custom_ws_endpoint` overrides the WebSocket URL (for subscriptions).

Example:

```typescript
const client = new Client({
  network: "testnet",
  custom_node_endpoint: "https://my-rpc.example.com:26657",
  custom_ws_endpoint: "wss://my-rpc.example.com:26657",
});

await client.connect();
// Uses my-rpc.example.com for RPC and WS; chain_id and prefix remain testnet.
```

When connecting with a wallet (`connectWithExtension`), the client uses `config.chain_rpc_endpoint` for the Stargate/CosmWasm connection. So if you set `custom_node_endpoint`, that custom RPC is used for the signing client as well. The wallet (Keplr, etc.) still uses the chain_id from the selected network; ensure your custom node serves that chain.

---

## Accessing config

After creating the client, you can read the current config:

```typescript
const client = new Client({ network: "testnet" });
console.log(client.config.chain_id);           // "coreum-testnet-1"
console.log(client.config.chain_rpc_endpoint); // default or custom
console.log(client.config.staking_denom);      // "utestcore"
```

Wallet services (`connectKeplr`, `connectCosmostation`, `connectLeap`) take a `CoreumNetworkConfig`; you can pass `client.config` or any object that matches that shape (e.g. from `COREUM_CONFIG.testnet`).

---

## Enums and constants

- **CoreumNetwork** — `MAINNET`, `TESTNET`, `DEVNET` (values: `"mainnet"`, `"testnet"`, `"devnet"`).
- **CoreumChainID** — `MAINNET = "coreum-mainnet-1"`, `TESTNET = "coreum-testnet-1"`, `DEVNET = "coreum-devnet-1"`.
- **CoreumPrefixes** — `MAINNET = "core"`, `TESTNET = "testcore"`, `DEVNET = "devcore"`.
- **CoreumDenom** — `MAINNET = "ucore"`, `TESTNET = "utestcore"`, `DEVNET = "udevcore"`.

Use these when you need type-safe network/chain/prefix/denom values (e.g. in `generateWalletFromMnemonic(mnemonic, CoreumPrefixes.TESTNET)` or for validation).

---

## See also

- [Client](client.md) — Constructor options and connection
- [Wallets](wallets.md) — Wallet services use `CoreumNetworkConfig`
- [Types](types.md) — `CoreumNetworkConfig`, `COREUM_CONFIG`, enums
