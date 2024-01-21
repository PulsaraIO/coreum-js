[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgUpdateParams

# Interface: MsgUpdateParams

[<internal>](../modules/internal_.md).MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [authority](internal_.MsgUpdateParams-4.md#authority)
- [params](internal_.MsgUpdateParams-4.md#params)

## Properties

### authority

• **authority**: `string`

authority is the address that controls the module (defaults to x/gov unless overwritten).

#### Defined in

[src/types/msgs.ts:674](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L674)

___

### params

• **params**: `Params`

params defines the x/distribution parameters to update.

NOTE: All parameters must be supplied.

#### Defined in

[src/types/msgs.ts:680](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L680)
