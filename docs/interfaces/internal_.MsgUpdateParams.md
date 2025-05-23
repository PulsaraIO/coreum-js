[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgUpdateParams

# Interface: MsgUpdateParams

[<internal>](../modules/internal_.md).MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [authority](internal_.MsgUpdateParams.md#authority)
- [params](internal_.MsgUpdateParams.md#params)

## Properties

### authority

• **authority**: `string`

authority is the address that controls the module (defaults to x/gov unless overwritten).

#### Defined in

[src/types/msgs.ts:492](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L492)

___

### params

• **params**: [`Params`](../modules/internal_.md#params-3)

params defines the x/staking parameters to update.

NOTE: All parameters must be supplied.

#### Defined in

[src/types/msgs.ts:498](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L498)
