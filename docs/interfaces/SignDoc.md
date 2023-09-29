[coreum-js](../README.md) / [Exports](../modules.md) / SignDoc

# Interface: SignDoc

SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.

## Table of contents

### Properties

- [accountNumber](SignDoc.md#accountnumber)
- [authInfoBytes](SignDoc.md#authinfobytes)
- [bodyBytes](SignDoc.md#bodybytes)
- [chainId](SignDoc.md#chainid)

## Properties

### accountNumber

• **accountNumber**: `number`

account_number is the account number of the account in state

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:77](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L77)

___

### authInfoBytes

• **authInfoBytes**: `Uint8Array`

auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
representation in TxRaw.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:69](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L69)

___

### bodyBytes

• **bodyBytes**: `Uint8Array`

body_bytes is protobuf serialization of a TxBody that matches the
representation in TxRaw.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:64](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L64)

___

### chainId

• **chainId**: `string`

chain_id is the unique identifier of the chain this transaction targets.
It prevents signed transactions from being used on another chain by an
attacker

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:75](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L75)
