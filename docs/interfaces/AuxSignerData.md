[coreum-js](../README.md) / [Exports](../modules.md) / AuxSignerData

# Interface: AuxSignerData

AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
tipper) builds and sends to the fee payer (who will build and broadcast the
actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
by the node if sent directly as-is.

Since: cosmos-sdk 0.46

## Table of contents

### Properties

- [address](AuxSignerData.md#address)
- [mode](AuxSignerData.md#mode)
- [sig](AuxSignerData.md#sig)
- [signDoc](AuxSignerData.md#signdoc)

## Properties

### address

• **address**: `string`

address is the bech32-encoded address of the auxiliary signer. If using
AuxSignerData across different chains, the bech32 prefix of the target
chain (where the final transaction is broadcasted) should be used.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:288](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L288)

___

### mode

• **mode**: [`SignMode`](../enums/internal_.SignMode.md)

mode is the signing mode of the single signer.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:296](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L296)

___

### sig

• **sig**: `Uint8Array`

sig is the signature of the sign doc.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:298](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L298)

___

### signDoc

• **signDoc**: [`SignDocDirectAux`](../modules.md#signdocdirectaux)

sign_doc is the SIGN_MODE_DIRECT_AUX sign doc that the auxiliary signer
signs. Note: we use the same sign doc even if we're signing with
LEGACY_AMINO_JSON.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:294](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L294)
