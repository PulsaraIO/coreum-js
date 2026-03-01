# Types reference

This page lists the main enums, interfaces, and type groupings used by the SDK. All are exported from `tx-js` unless noted.

---

## Network and chain (coreum.ts)

### CoreumNetwork

```typescript
enum CoreumNetwork {
  MAINNET = "mainnet",
  TESTNET = "testnet",
  DEVNET = "devnet",
}
```

### CoreumChainID

```typescript
enum CoreumChainID {
  MAINNET = "coreum-mainnet-1",
  TESTNET = "coreum-testnet-1",
  DEVNET = "coreum-devnet-1",
}
```

### CoreumPrefixes

Bech32 address prefix per network.

```typescript
enum CoreumPrefixes {
  MAINNET = "core",
  TESTNET = "testcore",
  DEVNET = "devcore",
}
```

### CoreumDenom

Staking/minimal denom per network.

```typescript
enum CoreumDenom {
  MAINNET = "ucore",
  TESTNET = "utestcore",
  DEVNET = "udevcore",
}
```

### CoreumNetworkConfig

Full chain configuration (used by the Client and wallet services). Not exported as a public API type in some setups; fields include:

| Field | Type | Description |
|-------|------|-------------|
| `chain_name` | `string` | Display name. |
| `chain_id` | `CoreumChainID` | Chain ID. |
| `chain_bech32_prefix` | `CoreumPrefixes` | Bech32 prefix. |
| `chain_rpc_endpoint` | `string` | RPC URL. |
| `chain_rest_endpoint` | `string` | REST URL. |
| `chain_ws_endpoint` | `string` | WebSocket URL. |
| `chain_explorer` | `string` | Explorer base URL. |
| `staking_denom` | `CoreumDenom` | Staking denom. |
| `coin_type` | `string \| number` | BIP44 coin type (e.g. 990). |
| `site_title` | `string` | Site title. |
| `gas_price` | `string` | Gas price string (e.g. `"0.0625ucore"`). |

### COREUM_CONFIG

Constant object: `{ mainnet, testnet, devnet }`, each a `CoreumNetworkConfig`. Used by the Client constructor.

---

## Client and queries (core.ts)

### CoreumTypeUrl

Internal enum of type URL prefixes for Coreum modules (NFT, FT, NFTBeta, DEX). Used for encoding/registry.

### ClientQueryClient

Extended `QueryClient` (from CosmJS) with all SDK query extensions:

- `ft` — FT extension
- `nft` — NFT (asset) extension
- `nftbeta` — NFT Beta extension
- `bank` — Bank extension
- `gov` — Governance extension
- `distribution` — Distribution extension
- `dex` — DEX extension
- `staking` — Staking extension (CosmJS)
- `auth` — Auth extension (CosmJS)
- `mint` — Mint extension (CosmJS)
- `feegrant` — Feegrant extension (CosmJS)
- `ibc` — IBC extension (CosmJS)
- `wasm` — WASM extension (CosmJS)
- `tx` — Tx extension (CosmJS)

So `client.queryClients` is typed as `ClientQueryClient | undefined`.

---

## Signing and fees (signing.ts)

### MultisigAccount

```typescript
interface MultisigAccount {
  pubkey: MultisigThresholdPubkey;  // from @cosmjs/amino
  address: string;
  threshold: number;
}
```

Returned by `client.createMultisigAccount()`.

### FeeCalculation

```typescript
interface FeeCalculation {
  fee: StdFee;       // from @cosmjs/amino
  gas_wanted: number;
}
```

Returned by `client.getTxFee()`.

### FeeOptions

```typescript
interface FeeOptions {
  address?: string;
  gasLimit?: number;
}
```

Used in options for fee/gas estimation where applicable.

### WalletMethods

```typescript
enum WalletMethods {
  OFFLINE = "offline",
  COSMOSTATION = "cosmostation",
  MNEMONIC = "mnemonic",
  LEAP = "leap",
}
```

### ExtensionWallets

```typescript
enum ExtensionWallets {
  KEPLR = "keplr",
  COSMOSTATION = "cosmostation",
  LEAP = "leap",
}
```

Use with `client.connectWithExtension(ExtensionWallets.KEPLR)`.

---

## Coreum enums (from coreum module)

### Feature (FT)

Exported from `tx-js`. See [Coreum FT](coreum-ft.md#feature-enum) for values (e.g. `minting`, `burning`, `freezing`, `whitelisting`, `ibc`, `clawback`, etc.).

### ClassFeature (NFT)

Exported from `tx-js`. See [Coreum NFT](coreum-nft.md#classfeature-enum) for values (e.g. `burning`, `freezing`, `whitelisting`, `disable_sending`, `soulbound`).

---

## Message type interfaces (msgs.ts)

The file `src/types/msgs.ts` defines interfaces used by the Bank, Staking, Governance, Distribution, Authz, Feegrant, Vesting, FT, and NFT message builders. They are not re-exported from the main package but match the shapes expected by the namespace functions (e.g. `Bank.Send`, `FT.Issue`). Main namespaces:

- **FTMsgs** — `MsgIssue`, `MsgMint`, `MsgBurn`, `MsgFreeze`, `MsgUnfreeze`, `MsgGloballyFreeze`, `MsgGloballyUnfreeze`, `MsgSetWhitelistedLimit`, `MsgClawback`
- **NFTMsgs** — `MsgSend`, `MsgIssueClass`, `MsgMint`, `MsgBurn`, `MsgFreeze`, `MsgUnfreeze`, `MsgAddToWhitelist`, `MsgRemoveFromWhitelist`
- **BankMsgs** — `MsgSend`, `MsgMultiSend`, `MsgSetSendEnabled`, `MsgUpdateParams`
- **StakingMsgs** — `MsgDelegate`, `MsgUndelegate`, `MsgBeginRedelegate`, `MsgCreateValidator`, `MsgEditValidator`, `MsgCancelUnbondingDelegation`, `MsgUpdateParams`
- **GovMsgs** — `MsgSubmitProposal`, `MsgVote`, `MsgVoteWeighted`, `MsgDeposit`
- **DistributionMsgs** — `MsgWithdrawDelegatorReward`, `MsgWithdrawValidatorCommission`, `MsgSetWithdrawAddress`, `MsgFundCommunityPool`, `MsgCommunityPoolSpend`, `MsgUpdateParams`
- **FeegrantMsgs** — `MsgGrantAllowance`, `MsgRevokeAllowance`
- **VestingMsgs** — `MsgCreateVestingAccount`, `MsgCreatePeriodicVestingAccount`, `MsgCreatePermanentLockedAccount`

Cosmos message types (e.g. `MsgGrant`, `MsgDeposit`) come from `cosmjs-types` and are used via the Cosmos namespace builders.

---

## CoreumMessage

Internal interface: `{ typeUrl: string; value: any }`. Matches the shape of messages returned by `FT.*`, `NFT.*`, `DEX.*`, `Bank.*`, etc.

---

## See also

- [Network config](network-config.md) — `COREUM_CONFIG` and custom endpoints
- [Client](client.md) — Usage of `ClientQueryClient`, `address`, and signers
- [Coreum FT](coreum-ft.md) / [Coreum NFT](coreum-nft.md) — `Feature` and `ClassFeature`
