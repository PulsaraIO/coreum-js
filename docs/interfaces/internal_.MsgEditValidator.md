[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgEditValidator

# Interface: MsgEditValidator

[<internal>](../modules/internal_.md).MsgEditValidator

MsgEditValidator defines a SDK message for editing an existing validator.

## Table of contents

### Properties

- [commissionRate](internal_.MsgEditValidator.md#commissionrate)
- [description](internal_.MsgEditValidator.md#description)
- [minSelfDelegation](internal_.MsgEditValidator.md#minselfdelegation)
- [validatorAddress](internal_.MsgEditValidator.md#validatoraddress)

## Properties

### commissionRate

• **commissionRate**: `string`

We pass a reference to the new commission rate and min self delegation as
it's not mandatory to update. If not updated, the deserialized rate will be
zero with no way to distinguish if an update was intended.
REF: #2373

#### Defined in

[src/types/msgs.ts:436](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L436)

___

### description

• **description**: [`Description`](../modules/internal_.md#description)

#### Defined in

[src/types/msgs.ts:428](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L428)

___

### minSelfDelegation

• **minSelfDelegation**: `string`

#### Defined in

[src/types/msgs.ts:437](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L437)

___

### validatorAddress

• **validatorAddress**: `string`

#### Defined in

[src/types/msgs.ts:429](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L429)
