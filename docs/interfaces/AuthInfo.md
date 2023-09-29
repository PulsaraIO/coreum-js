[coreum-js](../README.md) / [Exports](../modules.md) / AuthInfo

# Interface: AuthInfo

AuthInfo describes the fee and signer modes that are used to sign a
transaction.

## Table of contents

### Properties

- [fee](AuthInfo.md#fee)
- [signerInfos](AuthInfo.md#signerinfos)
- [tip](AuthInfo.md#tip)

## Properties

### fee

• **fee**: [`Fee`](../modules.md#fee)

Fee is the fee and gas limit for the transaction. The first signer is the
primary signer and the one which pays the fee. The fee can be calculated
based on the cost of evaluating the body and doing signature verification
of the signers. This can be estimated via simulation.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:170](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L170)

___

### signerInfos

• **signerInfos**: [`SignerInfo`](../modules.md#signerinfo)[]

signer_infos defines the signing modes for the required signers. The number
and order of elements must match the required signers from TxBody's
messages. The first element is the primary signer and the one which pays
the fee.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:163](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L163)

___

### tip

• **tip**: [`Tip`](../modules.md#tip)

Tip is the optional tip used for transactions fees paid in another denom.

This field is ignored if the chain didn't enable tips, i.e. didn't add the
`TipDecorator` in its posthandler.

Since: cosmos-sdk 0.46

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:179](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L179)
