[coreum-js](../README.md) / [Exports](../modules.md) / SignDocDirectAux

# Interface: SignDocDirectAux

SignDocDirectAux is the type used for generating sign bytes for
SIGN_MODE_DIRECT_AUX.

Since: cosmos-sdk 0.46

## Table of contents

### Properties

- [accountNumber](SignDocDirectAux.md#accountnumber)
- [bodyBytes](SignDocDirectAux.md#bodybytes)
- [chainId](SignDocDirectAux.md#chainid)
- [publicKey](SignDocDirectAux.md#publickey)
- [sequence](SignDocDirectAux.md#sequence)
- [tip](SignDocDirectAux.md#tip)

## Properties

### accountNumber

• **accountNumber**: `number`

account_number is the account number of the account in state.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:101](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L101)

___

### bodyBytes

• **bodyBytes**: `Uint8Array`

body_bytes is protobuf serialization of a TxBody that matches the
representation in TxRaw.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:91](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L91)

___

### chainId

• **chainId**: `string`

chain_id is the identifier of the chain this transaction targets.
It prevents signed transactions from being used on another chain by an
attacker.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:99](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L99)

___

### publicKey

• **publicKey**: [`Any`](../modules/internal_.md#any)

public_key is the public key of the signing account.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:93](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L93)

___

### sequence

• **sequence**: `number`

sequence is the sequence number of the signing account.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:103](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L103)

___

### tip

• **tip**: [`Tip`](../modules.md#tip)

Tip is the optional tip used for transactions fees paid in another denom.
It should be left empty if the signer is not the tipper for this
transaction.

This field is ignored if the chain didn't enable tips, i.e. didn't add the
`TipDecorator` in its posthandler.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:112](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L112)
