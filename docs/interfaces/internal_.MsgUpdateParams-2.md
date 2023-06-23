[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgUpdateParams

# Interface: MsgUpdateParams

[<internal>](../modules/internal_.md).MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [authority](internal_.MsgUpdateParams-2.md#authority)
- [params](internal_.MsgUpdateParams-2.md#params)

## Properties

### authority

• **authority**: `string`

authority is the address that controls the module (defaults to x/gov unless overwritten).

#### Defined in

[src/cosmos/distribution/v1beta1/tx.ts:79](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/distribution/v1beta1/tx.ts#L79)

___

### params

• **params**: [`Params`](../modules/internal_.md#params)

params defines the x/distribution parameters to update.

NOTE: All parameters must be supplied.

#### Defined in

[src/cosmos/distribution/v1beta1/tx.ts:85](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/distribution/v1beta1/tx.ts#L85)
