[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCreateValidator

# Interface: MsgCreateValidator

[<internal>](../modules/internal_.md).MsgCreateValidator

MsgCreateValidator defines a SDK message for creating a new validator.

## Table of contents

### Properties

- [commission](internal_.MsgCreateValidator.md#commission)
- [delegatorAddress](internal_.MsgCreateValidator.md#delegatoraddress)
- [description](internal_.MsgCreateValidator.md#description)
- [minSelfDelegation](internal_.MsgCreateValidator.md#minselfdelegation)
- [pubkey](internal_.MsgCreateValidator.md#pubkey)
- [validatorAddress](internal_.MsgCreateValidator.md#validatoraddress)
- [value](internal_.MsgCreateValidator.md#value)

## Properties

### commission

• **commission**: [`CommissionRates`](../modules/internal_.md#commissionrates)

#### Defined in

[src/types/msgs.ts:409](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L409)

___

### delegatorAddress

• **delegatorAddress**: `string`

Deprecated: Use of Delegator Address in MsgCreateValidator is deprecated.
The validator address bytes and delegator address bytes refer to the same account while creating validator (defer
only in bech32 notation).

**`Deprecated`**

#### Defined in

[src/types/msgs.ts:418](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L418)

___

### description

• **description**: [`Description`](../modules/internal_.md#description)

#### Defined in

[src/types/msgs.ts:408](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L408)

___

### minSelfDelegation

• **minSelfDelegation**: `string`

#### Defined in

[src/types/msgs.ts:410](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L410)

___

### pubkey

• **pubkey**: [`Any`](../modules/internal_.md#any)

#### Defined in

[src/types/msgs.ts:420](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L420)

___

### validatorAddress

• **validatorAddress**: `string`

#### Defined in

[src/types/msgs.ts:419](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L419)

___

### value

• **value**: `Coin`

#### Defined in

[src/types/msgs.ts:421](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L421)
