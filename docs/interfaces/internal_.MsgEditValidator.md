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

[src/types/msgs.ts:434](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/types/msgs.ts#L434)

___

### description

• **description**: [`Description`](../modules/internal_.md#description)

#### Defined in

[src/types/msgs.ts:426](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/types/msgs.ts#L426)

___

### minSelfDelegation

• **minSelfDelegation**: `string`

#### Defined in

[src/types/msgs.ts:435](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/types/msgs.ts#L435)

___

### validatorAddress

• **validatorAddress**: `string`

#### Defined in

[src/types/msgs.ts:427](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/types/msgs.ts#L427)
