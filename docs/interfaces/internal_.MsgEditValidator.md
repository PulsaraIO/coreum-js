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

[src/cosmos/staking/v1beta1/tx.ts:42](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/staking/v1beta1/tx.ts#L42)

___

### description

• **description**: [`Description`](../modules/internal_.md#description)

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:34](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/staking/v1beta1/tx.ts#L34)

___

### minSelfDelegation

• **minSelfDelegation**: `string`

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:43](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/staking/v1beta1/tx.ts#L43)

___

### validatorAddress

• **validatorAddress**: `string`

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:35](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/staking/v1beta1/tx.ts#L35)
