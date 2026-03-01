# Wallet integration

The SDK supports browser extension wallets (Keplr, Cosmostation, Leap) and mnemonic-based signing. The recommended way to connect is `client.connectWithExtension()` or `client.connectWithMnemonic()`; the client then uses the appropriate service and signer internally.

---

## Preferred API: Client.connectWithExtension

Use the Client’s built-in wallet flow so the SDK handles chain suggestion and signer creation:

```typescript
import { Client, CoreumNetwork, ExtensionWallets } from "@pulsara/tx-js";

const client = new Client({ network: CoreumNetwork.TESTNET });

// Keplr (default)
await client.connectWithExtension(ExtensionWallets.KEPLR);

// Cosmostation
await client.connectWithExtension(ExtensionWallets.COSMOSTATION);

// Leap
await client.connectWithExtension(ExtensionWallets.LEAP);

// With WebSocket for subscriptions
await client.connectWithExtension(ExtensionWallets.KEPLR, { withWS: true });

console.log(client.address);
```

After this, `client.address` is set and you can call `sendTx`, `signTx`, `getTxFee`, etc.

---

## Extension-specific behavior

### Keplr

- **Used when:** `ExtensionWallets.KEPLR` (or default).
- **Flow:** `connectKeplr(config)` is called first. It uses `window.keplr.experimentalSuggestChain()` to add the chain (chain_id, chain_name, RPC, REST, staking denom, bech32 prefixes, coin type, gas price). Then the client enables the chain and gets the signer via `window.getOfflineSignerAuto(chain_id)`.
- **Requirements:** Keplr extension installed; `window.keplr` and `window.getOfflineSigner` must exist. Recent Keplr version that supports `experimentalSuggestChain`.

### Cosmostation

- **Used when:** `ExtensionWallets.COSMOSTATION`.
- **Flow:** `connectCosmostation(config)` adds the chain via `provider.addChain()` (chainId, chainName, addressPrefix, baseDenom, displayDenom, restURL, coinType, decimals, gasRate). Then the client requests the account and gets the signer via `getCosmosOfflineSigner(chain_id)` from `@cosmostation/cosmos-client`.
- **Requirements:** Cosmostation extension installed.

### Leap

- **Used when:** `ExtensionWallets.LEAP`.
- **Flow:** `connectLeap(config)` calls `window.leap.enable(config.chain_id)`. The signer is obtained via `window.leap.getOfflineSignerAuto(chain_id)`.
- **Requirements:** Leap extension installed; `window.leap` must exist.

---

## Low-level service functions

You can use the wallet services directly if you are building a custom flow (e.g. suggesting the chain without creating the Client’s signing client yet):

| Function                           | Parameter             | Description                                               |
| ---------------------------------- | --------------------- | --------------------------------------------------------- |
| `connectKeplr(config)`             | `CoreumNetworkConfig` | Suggests the chain to Keplr. Does not return a signer.    |
| `connectCosmostation(config)`      | `CoreumNetworkConfig` | Adds the chain to Cosmostation. Does not return a signer. |
| `connectLeap(config)`              | `CoreumNetworkConfig` | Enables the chain in Leap. Does not return a signer.      |
| `getCosmosOfflineSigner(chain_id)` | `chain_id: string`    | Returns Cosmostation `OfflineSigner` for the chain.       |
| `getLeapOfflineSigner(chain_id)`   | `chain_id: string`    | Returns Leap `OfflineSigner` for the chain.               |

For Keplr, the Client uses `window.getOfflineSignerAuto(chain_id)` after `connectKeplr`; there is no separate exported “get Keplr signer” function.

Example (custom flow with Cosmostation):

```typescript
import { connectCosmostation, getCosmosOfflineSigner } from "@pulsara/tx-js";
import { COREUM_CONFIG } from "@pulsara/tx-js";

const config = COREUM_CONFIG.testnet;
await connectCosmostation(config);
const signer = await getCosmosOfflineSigner(config.chain_id);
// Then pass signer to client.addCustomSigner(signer) after client.connect()
```

---

## Custom signer

To use your own signer (e.g. from a different wallet or HSM):

1. Connect the client without a wallet (e.g. `await client.connect()`).
2. Call `await client.addCustomSigner(offlineSigner)` with an `OfflineSigner` compatible with CosmJS.

The client will create the signing client with your signer and set `client.address` from the signer’s first account.

---

## Error handling

When using `connectWithExtension`, the SDK normalizes errors:

- **Extension not installed:** Thrown with `code: 4000` (and message like `"Extension not installed."`).
- **User rejection:** When the user rejects the connection or chain suggestion, thrown with `code: 4001` and message `"Request rejected"`.

Other errors are thrown with a `{ thrower, error, code? }` shape. Always wrap in try/catch and check `code` or `error` to show a clear message in the UI.

---

## See also

- [Client](client.md) — `connectWithExtension`, `connectWithMnemonic`, `addCustomSigner`
- [Network config](network-config.md) — `CoreumNetworkConfig` and `COREUM_CONFIG`
- [Types](types.md) — `ExtensionWallets` enum
