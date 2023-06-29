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

[src/types/msgs.ts:597](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L597)

___

### params

• **params**: `Params`

params defines the x/bank parameters to update.

NOTE: All parameters must be supplied.

#### Defined in

[src/types/msgs.ts:603](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L603)
