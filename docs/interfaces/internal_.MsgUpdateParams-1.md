[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgUpdateParams

# Interface: MsgUpdateParams

[<internal>](../modules/internal_.md).MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [authority](internal_.MsgUpdateParams-1.md#authority)
- [params](internal_.MsgUpdateParams-1.md#params)

## Properties

### authority

• **authority**: `string`

authority is the address that controls the module (defaults to x/gov unless overwritten).

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:127](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/staking/v1beta1/tx.ts#L127)

___

### params

• **params**: [`Params`](../modules/internal_.md#params-3)

params defines the x/staking parameters to update.

NOTE: All parameters must be supplied.

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:133](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/staking/v1beta1/tx.ts#L133)
