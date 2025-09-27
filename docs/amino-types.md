# Coreum AminoTypes

This document describes the AminoTypes implementation for Coreum transaction messages, which enables support for both protobuf and amino JSON signing formats.

## Overview

AminoTypes provide a bridge between protobuf message types and the legacy amino JSON format used for transaction signing. This is essential for compatibility with various wallet implementations and signing methods.

## Available AminoTypes

### FT (Fungible Token) Messages

The following FT module messages are supported:

- `MsgIssue` - Issue new fungible tokens
- `MsgMint` - Mint additional tokens
- `MsgBurn` - Burn tokens
- `MsgFreeze` - Freeze tokens in an account
- `MsgUnfreeze` - Unfreeze tokens in an account
- `MsgSetFrozen` - Set frozen amount
- `MsgGloballyFreeze` - Globally freeze a token
- `MsgGloballyUnfreeze` - Globally unfreeze a token
- `MsgClawback` - Clawback tokens from an account
- `MsgSetWhitelistedLimit` - Set whitelisted limit for an account
- `MsgTransferAdmin` - Transfer admin rights
- `MsgClearAdmin` - Clear admin rights
- `MsgUpgradeTokenV1` - Upgrade token to V1
- `MsgUpdateParams` - Update module parameters
- `MsgUpdateDEXUnifiedRefAmount` - Update DEX unified reference amount
- `MsgUpdateDEXWhitelistedDenoms` - Update DEX whitelisted denominations

### DEX Messages

The following DEX module messages are supported:

- `MsgUpdateParams` - Update DEX module parameters
- `MsgPlaceOrder` - Place an order on the DEX
- `MsgCancelOrder` - Cancel a specific order
- `MsgCancelOrdersByDenom` - Cancel all orders for a specific denomination

### NFT Messages

The following NFT module messages are supported:

- `MsgIssueClass` - Issue new NFT class
- `MsgMint` - Mint new NFT
- `MsgUpdateData` - Update NFT data
- `MsgBurn` - Burn NFT
- `MsgFreeze` - Freeze NFT
- `MsgUnfreeze` - Unfreeze NFT
- `MsgClassFreeze` - Freeze NFT class for account
- `MsgClassUnfreeze` - Unfreeze NFT class for account
- `MsgAddToWhitelist` - Add account to NFT whitelist
- `MsgRemoveFromWhitelist` - Remove account from NFT whitelist
- `MsgAddToClassWhitelist` - Add account to NFT class whitelist
- `MsgRemoveFromClassWhitelist` - Remove account from NFT class whitelist
- `MsgUpdateParams` - Update NFT module parameters

### NFT Beta Messages

The following NFT Beta module messages are supported:

- `MsgSend` - Send NFT from one account to another

## Usage

### Basic Usage

```typescript
import { createCoreumAminoTypes } from "@coreum-js/coreum";

// Create AminoTypes instance
const aminoTypes = createCoreumAminoTypes();

// Convert protobuf message to amino JSON
const aminoMsg = aminoTypes.toAmino(protobufMessage);

// Convert amino JSON back to protobuf
const protobufMsg = aminoTypes.fromAmino(aminoMessage);
```

### Integration with Client

The AminoTypes are automatically integrated with the Coreum client:

```typescript
import { Client } from "@coreum-js";

const client = new Client();

// Connect with any signer - AminoTypes are automatically configured
await client.connectWithExtension();
// or
await client.connectWithMnemonic("your mnemonic...");
```

### Custom Configuration

You can create custom AminoTypes configurations:

```typescript
import { AminoTypes, createDefaultAminoConverters } from "@cosmjs/stargate";
import { createCoreumAminoTypes } from "@coreum-js/coreum";

const customAminoTypes = new AminoTypes({
  ...createDefaultAminoConverters(),
  ...createCoreumAminoTypes(),
  // Add other custom converters if needed
});
```

## Field Mapping

### FT Messages

| Protobuf Field       | Amino Field            | Description          |
| -------------------- | ---------------------- | -------------------- |
| `initialAmount`      | `initial_amount`       | Initial token amount |
| `burnRate`           | `burn_rate`            | Burn rate percentage |
| `sendCommissionRate` | `send_commission_rate` | Send commission rate |
| `uriHash`            | `uri_hash`             | URI hash             |
| `extensionSettings`  | `extension_settings`   | Extension settings   |
| `dexSettings`        | `dex_settings`         | DEX settings         |

### DEX Messages

| Protobuf Field      | Amino Field          | Description               |
| ------------------- | -------------------- | ------------------------- |
| `baseDenom`         | `base_denom`         | Base denomination         |
| `quoteDenom`        | `quote_denom`        | Quote denomination        |
| `goodTil`           | `good_til`           | Good until condition      |
| `timeInForce`       | `time_in_force`      | Time in force setting     |
| `unifiedRefAmount`  | `unified_ref_amount` | Unified reference amount  |
| `whitelistedDenoms` | `whitelisted_denoms` | Whitelisted denominations |

### NFT Messages

| Protobuf Field | Amino Field    | Description             |
| -------------- | -------------- | ----------------------- |
| `classId`      | `class_id`     | NFT class identifier    |
| `uriHash`      | `uri_hash`     | URI hash                |
| `royaltyRate`  | `royalty_rate` | Royalty rate percentage |

### NFT Beta Messages

| Protobuf Field | Amino Field | Description          |
| -------------- | ----------- | -------------------- |
| `classId`      | `class_id`  | NFT class identifier |

## Examples

### FT Token Issue

```typescript
const msgIssue = {
  typeUrl: "/coreum.asset.ft.v1.MsgIssue",
  value: {
    issuer: "core1abc123...",
    symbol: "MYTOKEN",
    subunit: "mytoken",
    precision: 6,
    initialAmount: "1000000",
    description: "My custom token",
    features: [1],
    burnRate: "0.01",
    sendCommissionRate: "0.005",
  },
};

const aminoMsg = aminoTypes.toAmino(msgIssue);
```

### DEX Order Placement

```typescript
const msgPlaceOrder = {
  typeUrl: "/coreum.dex.v1.MsgPlaceOrder",
  value: {
    sender: "core1abc123...",
    type: 1,
    id: "order123",
    baseDenom: "ucore",
    quoteDenom: "mytoken",
    price: "100",
    quantity: "1000",
    side: 1,
    goodTil: { blockHeight: 1000 },
    timeInForce: 1,
  },
};

const aminoMsg = aminoTypes.toAmino(msgPlaceOrder);
```

### NFT Class Issue

```typescript
const msgIssueClass = {
  typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
  value: {
    issuer: "core1abc123...",
    symbol: "MYNFT",
    name: "My NFT Collection",
    description: "A collection of unique NFTs",
    uri: "https://example.com/nft",
    uriHash: "hash123",
    data: undefined,
    features: [1],
    royaltyRate: "0.05",
  },
};

const aminoMsg = aminoTypes.toAmino(msgIssueClass);
```

### NFT Send

```typescript
const msgSend = {
  typeUrl: "/cosmos.nft.v1beta1.MsgSend",
  value: {
    classId: "class123",
    id: "nft456",
    sender: "core1abc123...",
    receiver: "core1def789...",
  },
};

const aminoMsg = aminoTypes.toAmino(msgSend);
```

## Type Safety

All AminoTypes are fully typed with TypeScript, providing compile-time type checking and IntelliSense support in your IDE.

## Compatibility

These AminoTypes are compatible with:

- Keplr wallet
- Cosmostation wallet
- Leap wallet
- Ledger hardware wallets
- Other Cosmos SDK compatible wallets

## Error Handling

The AminoTypes include proper error handling for:

- Invalid message types
- Missing required fields
- Type mismatches between protobuf and amino formats

## Performance Considerations

- AminoTypes conversion is lightweight and fast
- Minimal memory overhead
- Optimized for high-frequency transaction processing
