# Coreum Fungible Token (FT) module

The FT module lets you issue, mint, burn, freeze, whitelist, and manage fungible tokens on Coreum. Use the `FT` namespace for messages and `client.queryClients?.ft` for queries.

## Feature enum

Token behavior is controlled by **features** set at issue time. Import from `tx-js`:

```typescript
import { Feature } from "tx-js";
```

| Value | Description |
|-------|-------------|
| `Feature.minting` | Token supply can be increased by minting. |
| `Feature.burning` | Tokens can be burned. |
| `Feature.freezing` | Per-account freezing is allowed. |
| `Feature.whitelisting` | Whitelisted limits per account. |
| `Feature.ibc` | Token can be used in IBC transfers. |
| `Feature.block_smart_contracts` | Block sending to smart contracts. |
| `Feature.clawback` | Issuer can claw back tokens. |
| `Feature.extension` | Token supports extension (e.g. contract at issue). |
| `Feature.dex_block` | Token can be blocked from DEX. |
| `Feature.dex_whitelisted_denoms` | DEX whitelisted denoms can be updated. |
| `Feature.dex_order_cancellation` | DEX order cancellation enabled. |
| `Feature.dex_unified_ref_amount_change` | DEX unified ref amount can be updated. |
| `Feature.UNRECOGNIZED` | Unknown feature. |

Use `parseTokenFeatures()` from [Utilities](utilities.md) to get a boolean map from a feature list.

---

## Message builders (FT namespace)

All messages are built with `FT.*` and return a `{ typeUrl, value }` object suitable for `client.sendTx([msg])` or `client.signTx([msg])`.

### FT.Issue(object)

Issues a new fungible token.

**TypeUrl:** `/coreum.asset.ft.v1.MsgIssue`

| Field | Type | Description |
|-------|------|-------------|
| `issuer` | `string` | Issuer address. |
| `symbol` | `string` | Token symbol (e.g. `"MYTOKEN"`). |
| `subunit` | `string` | Subunit name (e.g. `"mytoken"`). |
| `precision` | `number` | Decimal places. |
| `initialAmount` | `string` | Initial supply (integer string). |
| `description` | `string?` | Optional description. |
| `features` | `Feature[]?` | Token features. |
| `burnRate` | `string?` | Burn rate 0–1 (e.g. `"0.01"`). |
| `sendCommissionRate` | `string?` | Send commission 0–1 to issuer. |
| `uri` | `string?` | Metadata URI. |
| `uriHash` | `string?` | Hash of metadata. |

Example:

```typescript
import { Client, FT, Feature } from "tx-js";

const msg = FT.Issue({
  issuer: client.address!,
  symbol: "MYT",
  subunit: "myt",
  precision: 6,
  initialAmount: "1000000000",
  description: "My token",
  features: [Feature.minting, Feature.burning],
  burnRate: "0",
  sendCommissionRate: "0",
});
await client.sendTx([msg]);
```

---

### FT.Mint(object)

Mints new tokens (token must have `minting` feature).

**TypeUrl:** `/coreum.asset.ft.v1.MsgMint`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Sender (must be issuer or authorized). |
| `coin` | `Coin` | `{ denom, amount }`. |

Example:

```typescript
const msg = FT.Mint({
  sender: client.address!,
  coin: { denom: "custom_issuer_subunit", amount: "1000" },
});
await client.sendTx([msg]);
```

---

### FT.Burn(object)

Burns tokens (token must have `burning` feature).

**TypeUrl:** `/coreum.asset.ft.v1.MsgBurn`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Sender address. |
| `coin` | `Coin` | `{ denom, amount }` to burn. |

---

### FT.Freeze(object)

Freezes a balance in an account (token must have `freezing` feature).

**TypeUrl:** `/coreum.asset.ft.v1.MsgFreeze`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Freezer (issuer/authorized). |
| `account` | `string` | Account to freeze. |
| `coin` | `Coin` | `{ denom, amount }` to freeze. |

---

### FT.Unfreeze(object)

Unfreezes a previously frozen balance.

**TypeUrl:** `/coreum.asset.ft.v1.MsgUnfreeze`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Unfreezer. |
| `account` | `string` | Account to unfreeze. |
| `coin` | `Coin` | `{ denom, amount }` to unfreeze. |

---

### FT.GloballyFreeze(object)

Globally freezes the token (no transfers until unfrozen).

**TypeUrl:** `/coreum.asset.ft.v1.MsgGloballyFreeze`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Sender (issuer/authorized). |
| `denom` | `string` | Token denom. |

---

### FT.GloballyUnfreeze(object)

Removes global freeze.

**TypeUrl:** `/coreum.asset.ft.v1.MsgGloballyUnfreeze`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Sender. |
| `denom` | `string` | Token denom. |

---

### FT.SetWhitelistedLimit(object)

Sets the whitelisted balance limit for an account (token must have `whitelisting`).

**TypeUrl:** `/coreum.asset.ft.v1.MsgSetWhitelistedLimit`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Sender (issuer/authorized). |
| `account` | `string` | Account. |
| `coin` | `Coin` | `{ denom, amount }` limit. |

---

### FT.Clawback(object)

Clawbacks tokens from an account (token must have `clawback` feature).

**TypeUrl:** `/coreum.asset.ft.v1.MsgClawback`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Clawback sender (issuer/authorized). |
| `account` | `string` | Account to claw from. |
| `coin` | `Coin` | `{ denom, amount }`. |

---

### FT.UpdateDEXUnifiedRefAmount(object)

Updates the DEX unified ref amount for the token.

**TypeUrl:** `/coreum.asset.ft.v1.MsgUpdateDEXUnifiedRefAmount`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Sender. |
| `denom` | `string` | Token denom. |
| `unifiedRefAmount` | `string` | New unified ref amount. |

---

### FT.UpdateDEXWhitelistedDenoms(object)

Updates DEX whitelisted denoms for the token.

**TypeUrl:** `/coreum.asset.ft.v1.MsgUpdateDEXWhitelistedDenoms`

| Field | Type | Description |
|-------|------|-------------|
| `sender` | `string` | Sender. |
| `denom` | `string` | Token denom. |
| `whitelistedDenoms` | `string[]` | List of denoms. |

---

## Query extension (client.queryClients.ft)

After `client.connect()` or any connection method, use `client.queryClients?.ft`:

| Method | Parameters | Returns | Description |
|--------|-------------|---------|-------------|
| `params()` | — | `QueryParamsResponse` | Module parameters. |
| `tokens(issuer, pagination?)` | `issuer: string`, optional `PageRequest` | `QueryTokensResponse` | Tokens issued by `issuer`. |
| `token(denom)` | `denom: string` | `QueryTokenResponse` | Token definition for `denom`. |
| `frozenBalances(account, pagination?)` | `account: string`, optional pagination | `QueryFrozenBalancesResponse` | Frozen balances of account. |
| `frozenBalance(account, denom)` | `account: string`, `denom: string` | `QueryFrozenBalanceResponse` | Frozen balance for one denom. |
| `whitelistedBalances(account, pagination?)` | `account: string`, optional pagination | `QueryWhitelistedBalancesResponse` | Whitelisted balances. |
| `whitelistedBalance(account, denom)` | `account: string`, `denom: string` | `QueryWhitelistedBalanceResponse` | Whitelisted balance for one denom. |

Example:

```typescript
await client.connect();
const token = await client.queryClients?.ft.token("custom_core1..._myt");
const frozen = await client.queryClients?.ft.frozenBalance("core1...", "custom_core1..._myt");
```

The underlying FT query service also supports `Balance(account, denom)` and `DEXSettings(denom)`; these are available when using the low-level query client from the FT module directly.

---

## Denom format

Coreum FT denoms follow the pattern: `custom_{issuer_bech32}_{subunit}`. For example, `custom_core1abc...xyz_myt` for subunit `myt` issued by `core1abc...xyz`.

---

## See also

- [Client](client.md) — Connection and sending transactions
- [Utilities](utilities.md) — `parseTokenFeatures`, `subunitToUnit`, `unitToSubunit`
- [Amino types](amino-types.md) — Using FT messages with Amino/Ledger
