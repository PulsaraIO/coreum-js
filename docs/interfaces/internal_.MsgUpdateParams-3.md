[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgUpdateParams

# Interface: MsgUpdateParams

[<internal>](../modules/internal_.md).MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [authority](internal_.MsgUpdateParams-3.md#authority)
- [params](internal_.MsgUpdateParams-3.md#params)

## Properties

### authority

• **authority**: `string`

authority is the address that controls the module (defaults to x/gov unless overwritten).

#### Defined in

[src/cosmos/bank/v1beta1/tx.ts:40](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/bank/v1beta1/tx.ts#L40)

___

### params

• **params**: [`Params`](../modules/internal_.md#params-4)

params defines the x/bank parameters to update.

NOTE: All parameters must be supplied.

#### Defined in

[src/cosmos/bank/v1beta1/tx.ts:46](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/bank/v1beta1/tx.ts#L46)
