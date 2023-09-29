[coreum-js](../README.md) / [Exports](../modules.md) / Tx

# Interface: Tx

Tx is the standard type used for broadcasting transactions.

## Table of contents

### Properties

- [authInfo](Tx.md#authinfo)
- [body](Tx.md#body)
- [signatures](Tx.md#signatures)

## Properties

### authInfo

• **authInfo**: [`AuthInfo`](../modules.md#authinfo)

auth_info is the authorization related content of the transaction,
specifically signers, signer modes and fee

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:23](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/tx/v1beta1/tx.ts#L23)

___

### body

• **body**: [`TxBody`](../modules.md#txbody)

body is the processable content of the transaction

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:18](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/tx/v1beta1/tx.ts#L18)

___

### signatures

• **signatures**: `Uint8Array`[]

signatures is a list of signatures that matches the length and order of
AuthInfo's signer_infos to allow connecting signature meta information like
public key and signing mode by position.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:29](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/tx/v1beta1/tx.ts#L29)
