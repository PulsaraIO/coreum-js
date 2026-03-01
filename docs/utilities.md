# Utilities

The SDK exports helpers for conversions, wallet generation, feature parsing, and event parsing. Import from `tx-js`.

---

## Calculation utilities (calculations.ts)

All use `bignumber.js` for precision.

### ucoreToCORE(ucore)

Converts minimal denom (ucore) to human-readable CORE (divides by 1,000,000).

```typescript
import { ucoreToCORE } from "tx-js";
ucoreToCORE("1000000"); // "1"
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `ucore` | `string` | Amount in ucore (minimal unit). |

**Returns:** `string` — CORE amount.

---

### coreToUCORE(core)

Converts CORE to ucore (multiplies by 1,000,000).

```typescript
import { coreToUCORE } from "tx-js";
coreToUCORE("1"); // "1000000"
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `core` | `string` | Amount in CORE. |

**Returns:** `string` — ucore amount.

---

### parseFloatToRoyaltyRate(royalty)

Converts a percentage (0–100) to the 18-decimal royalty rate format used by the NFT module (e.g. 5 → 5% of 10^18).

```typescript
import { parseFloatToRoyaltyRate } from "tx-js";
parseFloatToRoyaltyRate(5);   // "50000000000000000"
parseFloatToRoyaltyRate("2.5"); // for 2.5%
```

Use in `NFT.IssueClass({ ..., royaltyRate: parseFloatToRoyaltyRate(5) })`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `royalty` | `number \| string` | Percentage (0–100). |

**Returns:** `string` — Royalty rate for proto.

---

### subunitToUnit(subunit, precision)

Converts subunit amount to unit (human-readable) using the given decimal precision.

```typescript
import { subunitToUnit } from "tx-js";
subunitToUnit("1000000", 6); // "1"
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `subunit` | `string` | Amount in smallest unit. |
| `precision` | `number` | Number of decimals (e.g. 6). |

**Returns:** `string` — Unit amount.

---

### unitToSubunit(unit, precision)

Converts unit amount to subunit (smallest unit).

```typescript
import { unitToSubunit } from "tx-js";
unitToSubunit("1", 6); // "1000000"
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `unit` | `string` | Amount in full units. |
| `precision` | `number` | Number of decimals. |

**Returns:** `string` — Subunit amount.

---

## Wallet utilities (wallet.ts)

### isValidCoreumAddress(address)

Checks that the string is a valid Coreum bech32 address (prefix `core`, `testcore`, or `devcore`).

```typescript
import { isValidCoreumAddress } from "tx-js";
isValidCoreumAddress("core1...");   // true
isValidCoreumAddress("cosmos1...");  // false
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `address` | `string` | Bech32 address. |

**Returns:** `boolean` — Whether the address is valid Coreum.

---

### generateWalletFromMnemonic(mnemonic, prefix)

Creates a CosmJS `DirectSecp256k1HdWallet` (OfflineDirectSigner) with the Coreum derivation path `m/44'/990'/0'/0/0`.

```typescript
import { generateWalletFromMnemonic, CoreumPrefixes } from "tx-js";
const signer = await generateWalletFromMnemonic(
  "word1 word2 ... word24",
  CoreumPrefixes.TESTNET
);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `mnemonic` | `string` | BIP39 mnemonic (12 or 24 words). |
| `prefix` | `CoreumPrefixes` | `"core"`, `"testcore"`, or `"devcore"`. |

**Returns:** `Promise<OfflineDirectSigner>` — Signer for use with CosmJS or `client.addCustomSigner()`.

---

### generateMultisigFromPubkeys(pubkeys, threshold, prefix)

Builds a multisig account from a list of base64-encoded pubkeys and a threshold. Used internally by `client.createMultisigAccount()`; you can use it directly if you already have pubkeys.

```typescript
import { generateMultisigFromPubkeys } from "tx-js";
const multisig = generateMultisigFromPubkeys(
  [pubkey1, pubkey2, pubkey3],
  2,
  "core"
);
// multisig: { pubkey, address, threshold }
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `pubkeys` | `string[]` | Tendermint secp256k1 pubkeys (base64). |
| `threshold` | `number` | Minimum signatures required. |
| `prefix` | `string` | Bech32 prefix for the multisig address. |

**Returns:** `MultisigAccount` — `{ pubkey, address, threshold }`.

---

## Feature parsers

### parseTokenFeatures(features)

Maps an array of FT `Feature` enum values to a boolean object (minting, freezing, burning, whitelisting).

```typescript
import { parseTokenFeatures, Feature } from "tx-js";
const flags = parseTokenFeatures([Feature.minting, Feature.burning]);
// { minting: true, freezing: false, burning: true, whitelisting: false }
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `features` | `Feature[]` | Array of FT features. |

**Returns:** `{ minting, freezing, burning, whitelisting }` (booleans).

---

### parseClassFeatures(features)

Maps an array of NFT `ClassFeature` enum values to a boolean object.

```typescript
import { parseClassFeatures, ClassFeature } from "tx-js";
const flags = parseClassFeatures([ClassFeature.burning, ClassFeature.soulbound]);
// { burning: true, freezing: false, whitelisting: false, disable_sending: false, soulbound: true }
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `features` | `ClassFeature[]` | Array of NFT class features. |

**Returns:** `{ burning, freezing, whitelisting, disable_sending, soulbound }` (booleans).

---

## convertStringToAny(message)

Converts a string to a Cosmos `Any` containing `coreum.asset.nft.v1.DataBytes`. Used when setting NFT class or token `data` (e.g. arbitrary JSON or string payload).

```typescript
import { convertStringToAny } from "tx-js";
const anyData = convertStringToAny(JSON.stringify({ key: "value" }));
// Use in NFT.IssueClass or NFT.Mint as data: anyData
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | `string` | String to wrap (e.g. JSON). |

**Returns:** `Any` — Proto Any with type URL `/coreum.asset.nft.v1.DataBytes`.

**Note:** Depends on `google-protobuf` and Coreum NFT types; ensure the package is available in your environment.

---

## Event parsing (event.ts)

### parseSubscriptionEvents(events)

Parses the raw event map from a WebSocket subscription into a nested object. Keys are split on `.`; values are parsed as JSON when possible. Used internally by `client.subscribeToEvent()` so you get structured `data.events` in the callback.

```typescript
import { parseSubscriptionEvents } from "tx-js";
const parsed = parseSubscriptionEvents({
  "transfer.amount": ["100"],
  "transfer.recipient": ["core1..."],
});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `events` | `{ [key: string]: string[] }` | Raw subscription events. |

**Returns:** Nested object with dot-separated keys and parsed values.

---

## See also

- [Client](client.md) — Uses wallet and event utilities internally
- [Coreum FT](coreum-ft.md) / [Coreum NFT](coreum-nft.md) — Feature enums and message fields
- [Types](types.md) — `CoreumPrefixes`, `MultisigAccount`
