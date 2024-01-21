[coreum-js](../README.md) / [Exports](../modules.md) / SignerInfo

# Interface: SignerInfo

SignerInfo describes the public key and signing mode of a single top-level
signer.

## Table of contents

### Properties

- [modeInfo](SignerInfo.md#modeinfo)
- [publicKey](SignerInfo.md#publickey)
- [sequence](SignerInfo.md#sequence)

## Properties

### modeInfo

• **modeInfo**: [`ModeInfo`](../modules.md#modeinfo)

mode_info describes the signing mode of the signer and is a nested
structure to support nested multisig pubkey's

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:197](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L197)

___

### publicKey

• **publicKey**: [`Any`](../modules/internal_.md#any)

public_key is the public key of the signer. It is optional for accounts
that already exist in state. If unset, the verifier can use the required \
signer address for this position and lookup the public key.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:192](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L192)

___

### sequence

• **sequence**: `number`

sequence is the sequence of the account, which describes the
number of committed transactions signed by a given address. It is used to
prevent replay attacks.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:203](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L203)
