# Amino types

Amino encoding is a legacy Cosmos format still used by some wallets (e.g. Ledger) and by tools that expect Amino JSON. The SDK provides Coreum-specific Amino type registration and converters so that Coreum messages can be signed and broadcast in Amino-compatible flows.

---

## When to use Amino

- **Ledger** and other hardware wallets that only support Amino signing.
- **Cosmostation** or other clients that request Amino-signed transactions.
- Building **Amino JSON** payloads for broadcast or display.

When using the SDK’s **Client** with `connectWithExtension()` or `connectWithMnemonic()`, the client already registers the Coreum Amino converters on the signing client. You don’t need to call `createCoreumAminoTypes()` yourself for normal signing unless you are constructing a custom CosmJS client or need to convert messages to/from Amino JSON explicitly.

---

## createCoreumAminoTypes()

Returns an `AminoTypes` instance (from `@cosmjs/stargate`) with all Coreum Amino converters registered. Use it when you need to convert between protobuf and Amino JSON for Coreum messages.

```typescript
import { createCoreumAminoTypes } from "@pulsara/tx-js";
import { AminoTypes } from "@cosmjs/stargate";

const aminoTypes = createCoreumAminoTypes();

// Protobuf message (e.g. from FT.Issue(...))
const msg = { typeUrl: "/coreum.asset.ft.v1.MsgIssue", value: { ... } };

// To Amino JSON (snake_case, for signing or display)
const amino = aminoTypes.toAmino(msg);

// From Amino JSON back to protobuf-like
const back = aminoTypes.fromAmino(amino);
```

---

## Exported converters

You can merge Coreum converters into your own `AminoTypes` or use the combined object that the Client uses:

| Export                     | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `createCoreumAminoTypes()` | New `AminoTypes` with all Coreum types.                          |
| `coreumAminoConverters`    | Combined object of all Coreum Amino converters (used by Client). |
| `ftAminoConverters`        | FT module only.                                                  |
| `dexAminoConverters`       | DEX module only.                                                 |
| `nftAminoConverters`       | NFT (asset) module only.                                         |
| `nftBetaAminoConverters`   | NFT Beta (cosmos.nft.v1beta1.MsgSend) only.                      |

Example: combine with your own converters:

```typescript
import { createCoreumAminoTypes } from "@pulsara/tx-js";
import { AminoTypes } from "@cosmjs/stargate";

const customAminoTypes = new AminoTypes({
  ...createCoreumAminoTypes(),
  // your custom converters
});
```

---

## TypeUrl ↔ AminoType mapping

Amino uses string type names (AminoType); the SDK maps each Coreum TypeUrl to the correct AminoType and implements `toAmino` (protobuf → Amino JSON) and `fromAmino` (Amino JSON → protobuf). Field names are converted between **camelCase** (proto) and **snake_case** (Amino).

### FT (prefix `aseestft/`)

| TypeUrl                                             | AminoType                                |
| --------------------------------------------------- | ---------------------------------------- |
| `/coreum.asset.ft.v1.MsgIssue`                      | `aseestft/MsgIssue`                      |
| `/coreum.asset.ft.v1.MsgMint`                       | `aseestft/MsgMint`                       |
| `/coreum.asset.ft.v1.MsgBurn`                       | `aseestft/MsgBurn`                       |
| `/coreum.asset.ft.v1.MsgFreeze`                     | `aseestft/MsgFreeze`                     |
| `/coreum.asset.ft.v1.MsgUnfreeze`                   | `aseestft/MsgUnfreeze`                   |
| `/coreum.asset.ft.v1.MsgSetFrozen`                  | `aseestft/MsgSetFrozen`                  |
| `/coreum.asset.ft.v1.MsgGloballyFreeze`             | `aseestft/MsgGloballyFreeze`             |
| `/coreum.asset.ft.v1.MsgGloballyUnfreeze`           | `aseestft/MsgGloballyUnfreeze`           |
| `/coreum.asset.ft.v1.MsgClawback`                   | `aseestft/MsgClawback`                   |
| `/coreum.asset.ft.v1.MsgSetWhitelistedLimit`        | `aseestft/MsgSetWhitelistedLimit`        |
| `/coreum.asset.ft.v1.MsgTransferAdmin`              | `aseestft/MsgTransferAdmin`              |
| `/coreum.asset.ft.v1.MsgClearAdmin`                 | `aseestft/MsgClearAdmin`                 |
| `/coreum.asset.ft.v1.MsgUpgradeTokenV1`             | `aseestft/MsgUpgradeTokenV1`             |
| `/coreum.asset.ft.v1.MsgUpdateParams`               | `aseestft/MsgUpdateParams`               |
| `/coreum.asset.ft.v1.MsgUpdateDEXUnifiedRefAmount`  | `aseestft/MsgUpdateDEXUnifiedRefAmount`  |
| `/coreum.asset.ft.v1.MsgUpdateDEXWhitelistedDenoms` | `aseestft/MsgUpdateDEXWhitelistedDenoms` |

### DEX (prefix `dex/`)

| TypeUrl                                 | AminoType                    |
| --------------------------------------- | ---------------------------- |
| `/coreum.dex.v1.MsgUpdateParams`        | `dex/MsgUpdateParams`        |
| `/coreum.dex.v1.MsgPlaceOrder`          | `dex/MsgPlaceOrder`          |
| `/coreum.dex.v1.MsgCancelOrder`         | `dex/MsgCancelOrder`         |
| `/coreum.dex.v1.MsgCancelOrdersByDenom` | `dex/MsgCancelOrdersByDenom` |

### NFT Asset (prefix `assetnft/`)

| TypeUrl                              | AminoType                |
| ------------------------------------ | ------------------------ |
| `/coreum.asset.nft.v1.MsgIssueClass` | `assetnft/MsgIssueClass` |
| `/coreum.asset.nft.v1.MsgMint`       | `assetnft/MsgMint`       |
| … (other NFT asset messages)         | `assetnft/Msg*`          |

### NFT Beta (prefix `cosmos-sdk/`)

| TypeUrl                       | AminoType            |
| ----------------------------- | -------------------- |
| `/cosmos.nft.v1beta1.MsgSend` | `cosmos-sdk/MsgSend` |

---

## Example (from examples/amino-types-usage.ts)

```typescript
import { createCoreumAminoTypes, FT, DEX, NFT } from "@pulsara/tx-js";
import { AminoTypes } from "@cosmjs/stargate";

const aminoTypes = createCoreumAminoTypes();

// Build messages with SDK builders (protobuf)
const ftMsg = FT.Issue({ issuer: "core1...", symbol: "MYT", ... });
const dexMsg = DEX.PlaceOrder({ sender: "core1...", type: 1, ... });
const nftMsg = NFT.IssueClass({ issuer: "core1...", symbol: "MYNFT", ... });

// Convert to Amino JSON (e.g. for Ledger or display)
console.log(aminoTypes.toAmino(ftMsg));
console.log(aminoTypes.toAmino(dexMsg));
console.log(aminoTypes.toAmino(nftMsg));

// Merge into custom AminoTypes
const custom = new AminoTypes({ ...createCoreumAminoTypes() });
```

Note: In the example, DEX `goodTil` uses `blockHeight`; in the proto it is `goodTilBlockHeight`. The Amino converters handle the correct field names for the chain.

---

## See also

- [Client](client.md) — Registers Coreum Amino on the signing client automatically
- [Coreum FT](coreum-ft.md), [Coreum NFT](coreum-nft.md), [Coreum DEX](coreum-dex.md) — Message builders and fields
- [Wallets](wallets.md) — Ledger/custom signer flows
