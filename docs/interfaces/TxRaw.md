[coreum-js](../README.md) / [Exports](../modules.md) / TxRaw

# Interface: TxRaw

TxRaw is a variant of Tx that pins the signer's exact binary representation
of body and auth_info. This is used for signing, broadcasting and
verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
as the transaction ID.

## Table of contents

### Properties

- [authInfoBytes](TxRaw.md#authinfobytes)
- [bodyBytes](TxRaw.md#bodybytes)
- [signatures](TxRaw.md#signatures)

## Properties

### authInfoBytes

• **authInfoBytes**: `Uint8Array`

auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
representation in SignDoc.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:49](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L49)

___

### bodyBytes

• **bodyBytes**: `Uint8Array`

body_bytes is a protobuf serialization of a TxBody that matches the
representation in SignDoc.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:44](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L44)

___

### signatures

• **signatures**: `Uint8Array`[]

signatures is a list of signatures that matches the length and order of
AuthInfo's signer_infos to allow connecting signature meta information like
public key and signing mode by position.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:55](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L55)
