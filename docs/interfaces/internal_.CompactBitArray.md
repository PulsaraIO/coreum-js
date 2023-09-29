[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CompactBitArray

# Interface: CompactBitArray

[<internal>](../modules/internal_.md).CompactBitArray

CompactBitArray is an implementation of a space efficient bit array.
This is used to ensure that the encoded data takes up a minimal amount of
space after proto encoding.
This is not thread safe, and is not intended for concurrent usage.

## Table of contents

### Properties

- [elems](internal_.CompactBitArray.md#elems)
- [extraBitsStored](internal_.CompactBitArray.md#extrabitsstored)

## Properties

### elems

• **elems**: `Uint8Array`

#### Defined in

[src/cosmos/crypto/multisig/v1beta1/multisig.ts:23](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/crypto/multisig/v1beta1/multisig.ts#L23)

___

### extraBitsStored

• **extraBitsStored**: `number`

#### Defined in

[src/cosmos/crypto/multisig/v1beta1/multisig.ts:22](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/crypto/multisig/v1beta1/multisig.ts#L22)
