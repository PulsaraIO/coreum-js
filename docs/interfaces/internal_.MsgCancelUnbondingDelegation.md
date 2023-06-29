[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCancelUnbondingDelegation

# Interface: MsgCancelUnbondingDelegation

[<internal>](../modules/internal_.md).MsgCancelUnbondingDelegation

MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator

Since: cosmos-sdk 0.46

## Table of contents

### Properties

- [amount](internal_.MsgCancelUnbondingDelegation.md#amount)
- [creationHeight](internal_.MsgCancelUnbondingDelegation.md#creationheight)
- [delegatorAddress](internal_.MsgCancelUnbondingDelegation.md#delegatoraddress)
- [validatorAddress](internal_.MsgCancelUnbondingDelegation.md#validatoraddress)

## Properties

### amount

• **amount**: `Coin`

amount is always less than or equal to unbonding delegation entry balance

#### Defined in

[src/types/msgs.ts:478](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L478)

___

### creationHeight

• **creationHeight**: `number`

creation_height is the height which the unbonding took place.

#### Defined in

[src/types/msgs.ts:480](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L480)

___

### delegatorAddress

• **delegatorAddress**: `string`

#### Defined in

[src/types/msgs.ts:475](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L475)

___

### validatorAddress

• **validatorAddress**: `string`

#### Defined in

[src/types/msgs.ts:476](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L476)
