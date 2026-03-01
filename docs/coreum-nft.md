# Coreum NFT module

The NFT module supports two layers on Coreum:

1. **Asset NFT (v1)** — Full-featured: issue class, mint, send, freeze, whitelist. Use the `NFT` namespace for messages and `client.queryClients?.nft` for queries.
2. **NFT Beta (v1beta1)** — Cosmos-style NFT queries (balance, owner, supply, nfts, class, classes). Use `client.queryClients?.nftbeta`.

## ClassFeature enum

Class behavior is controlled by **class features** set at issue time. Import from `tx-js`:

```typescript
import { ClassFeature } from "@pulsara/tx-js";
```

| Value                          | Description                                 |
| ------------------------------ | ------------------------------------------- |
| `ClassFeature.burning`         | NFTs in the class can be burned.            |
| `ClassFeature.freezing`        | NFTs can be frozen.                         |
| `ClassFeature.whitelisting`    | Whitelist of accounts allowed to hold NFTs. |
| `ClassFeature.disable_sending` | Sending (transfer) is disabled.             |
| `ClassFeature.soulbound`       | NFTs are non-transferable (soulbound).      |
| `ClassFeature.UNRECOGNIZED`    | Unknown feature.                            |

Use `parseClassFeatures()` from [Utilities](utilities.md) to get a boolean map from a feature list.

---

## Message builders (NFT namespace)

All messages return a `{ typeUrl, value }` object for `client.sendTx([msg])` or `client.signTx([msg])`.

### NFT.IssueClass(object)

Creates a new NFT class.

**TypeUrl:** `/coreum.asset.nft.v1.MsgIssueClass`

| Field         | Type              | Description                                                   |
| ------------- | ----------------- | ------------------------------------------------------------- |
| `issuer`      | `string`          | Issuer address.                                               |
| `symbol`      | `string`          | Class symbol.                                                 |
| `name`        | `string`          | Class name.                                                   |
| `description` | `string?`         | Optional description.                                         |
| `uri`         | `string`          | Metadata URI.                                                 |
| `uriHash`     | `string?`         | Hash of metadata.                                             |
| `data`        | `Any?`            | Optional class data.                                          |
| `features`    | `ClassFeature[]?` | Class features.                                               |
| `royaltyRate` | `string?`         | Royalty rate (e.g. from `parseFloatToRoyaltyRate(5)` for 5%). |

Example:

```typescript
import {
  Client,
  NFT,
  ClassFeature,
  parseFloatToRoyaltyRate,
} from "@pulsara/tx-js";

const msg = NFT.IssueClass({
  issuer: client.address!,
  symbol: "MYPASS",
  name: "My Pass",
  description: "Collection description",
  uri: "https://example.com/collection.json",
  uriHash: "",
  features: [ClassFeature.burning, ClassFeature.freezing],
  royaltyRate: parseFloatToRoyaltyRate(5),
});
await client.sendTx([msg]);
```

---

### NFT.Mint(object)

Mints an NFT in a class.

**TypeUrl:** `/coreum.asset.nft.v1.MsgMint`

| Field       | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| `sender`    | `string` | Minter (issuer or authorized).  |
| `classId`   | `string` | Class ID.                       |
| `id`        | `string` | Unique NFT ID within the class. |
| `uri`       | `string` | Token metadata URI.             |
| `uriHash`   | `string` | Hash of metadata.               |
| `data`      | `Any?`   | Optional token data.            |
| `recipient` | `string` | Owner address.                  |

---

### NFT.Send(object)

Sends an NFT from one account to another. Uses Cosmos NFT v1beta1 type URL.

**TypeUrl:** `/cosmos.nft.v1beta1.MsgSend`

| Field      | Type     | Description    |
| ---------- | -------- | -------------- |
| `classId`  | `string` | Class ID.      |
| `id`       | `string` | NFT ID.        |
| `sender`   | `string` | Current owner. |
| `receiver` | `string` | New owner.     |

---

### NFT.Burn(object)

Burns an NFT (class must have `burning` feature).

**TypeUrl:** `/coreum.asset.nft.v1.MsgBurn`

| Field     | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| `sender`  | `string` | Sender (owner or authorized). |
| `classId` | `string` | Class ID.                     |
| `id`      | `string` | NFT ID.                       |

---

### NFT.Freeze(object)

Freezes an NFT (class must have `freezing` feature).

**TypeUrl:** `/coreum.asset.nft.v1.MsgFreeze`

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| `sender`  | `string` | Freezer.    |
| `classId` | `string` | Class ID.   |
| `id`      | `string` | NFT ID.     |

---

### NFT.Unfreeze(object)

Unfreezes an NFT.

**TypeUrl:** `/coreum.asset.nft.v1.MsgUnfreeze`

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| `sender`  | `string` | Sender.     |
| `classId` | `string` | Class ID.   |
| `id`      | `string` | NFT ID.     |

---

### NFT.AddToWhitelist(object)

Adds an account to the whitelist for an NFT (class must have `whitelisting`).

**TypeUrl:** `/coreum.asset.nft.v1.MsgAddToWhitelist`

| Field     | Type     | Description           |
| --------- | -------- | --------------------- |
| `sender`  | `string` | Sender.               |
| `classId` | `string` | Class ID.             |
| `id`      | `string` | NFT ID.               |
| `account` | `string` | Account to whitelist. |

---

### NFT.RemoveFromWhitelist(object)

Removes an account from the NFT whitelist.

**TypeUrl:** `/coreum.asset.nft.v1.MsgRemoveFromWhitelist`

| Field     | Type     | Description        |
| --------- | -------- | ------------------ |
| `sender`  | `string` | Sender.            |
| `classId` | `string` | Class ID.          |
| `id`      | `string` | NFT ID.            |
| `account` | `string` | Account to remove. |

---

## Query extension: Asset NFT (client.queryClients.nft)

After connecting, use `client.queryClients?.nft` for asset NFT v1 queries:

| Method                                                     | Parameters                                | Returns                                  | Description                             |
| ---------------------------------------------------------- | ----------------------------------------- | ---------------------------------------- | --------------------------------------- |
| `params()`                                                 | —                                         | `QueryParamsResponse`                    | Module parameters.                      |
| `class(class_id)`                                          | `class_id: string`                        | `QueryClassResponse`                     | Class definition.                       |
| `frozen(nft_id, class_id)`                                 | `nft_id`, `class_id`                      | `QueryFrozenResponse`                    | Whether NFT is frozen.                  |
| `whitelisted(nft_id, class_id, account)`                   | `nft_id`, `class_id`, `account`           | `QueryWhitelistedResponse`               | Whether account is whitelisted for NFT. |
| `whitelistedAccountsForNFT(nft_id, class_id, pagination?)` | `nft_id`, `class_id`, optional pagination | `QueryWhitelistedAccountsForNFTResponse` | Whitelisted accounts for the NFT.       |

Example:

```typescript
await client.connect();
const classDef = await client.queryClients?.nft.class("myclassid");
const isFrozen = await client.queryClients?.nft.frozen("nft-id-1", "myclassid");
```

---

## Query extension: NFT Beta (client.queryClients.nftbeta)

Use `client.queryClients?.nftbeta` for Cosmos-style NFT queries:

| Method                               | Parameters                               | Returns                | Description                    |
| ------------------------------------ | ---------------------------------------- | ---------------------- | ------------------------------ |
| `balance(class_id, owner)`           | `class_id`, `owner`                      | `QueryBalanceResponse` | Number of NFTs of class owned. |
| `owner(class_id, nft_id)`            | `class_id`, `nft_id`                     | `QueryOwnerResponse`   | Owner of the NFT.              |
| `supply(class_id)`                   | `class_id`                               | `QuerySupplyResponse`  | Total supply of the class.     |
| `nfts(class_id, owner, pagination?)` | `class_id`, `owner`, optional pagination | `QueryNFTsResponse`    | NFTs of class owned by owner.  |
| `nft(nft_id, class_id)`              | `nft_id`, `class_id`                     | `QueryNFTResponse`     | Single NFT details.            |
| `class(class_id)`                    | `class_id`                               | `QueryClassResponse`   | Class definition (beta).       |
| `classes(pagination?)`               | optional pagination                      | `QueryClassesResponse` | All classes.                   |

Example:

```typescript
const balance = await client.queryClients?.nftbeta.balance(
  "myclassid",
  "core1..."
);
const owner = await client.queryClients?.nftbeta.owner("myclassid", "nft-1");
const nfts = await client.queryClients?.nftbeta.nfts("myclassid", "core1...");
```

---

## See also

- [Client](client.md) — Connection and sending transactions
- [Utilities](utilities.md) — `parseClassFeatures`, `parseFloatToRoyaltyRate`, `convertStringToAny`
- [Amino types](amino-types.md) — Using NFT messages with Amino/Ledger
