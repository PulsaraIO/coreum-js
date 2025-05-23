[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCancelUnbondingDelegation

# Interface: MsgCancelUnbondingDelegation

[<internal>](../modules/internal_.md).MsgCancelUnbondingDelegation

MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator

Since: cosmos-sdk 0.46

## Table of contents

### Properties

- [amount](internal_.MsgCancelUnbondingDelegation-1.md#amount)
- [creationHeight](internal_.MsgCancelUnbondingDelegation-1.md#creationheight)
- [delegatorAddress](internal_.MsgCancelUnbondingDelegation-1.md#delegatoraddress)
- [validatorAddress](internal_.MsgCancelUnbondingDelegation-1.md#validatoraddress)

## Properties

### amount

• **amount**: [`Coin`](../modules/internal_.md#coin)

amount is always less than or equal to unbonding delegation entry balance

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:108](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/staking/v1beta1/tx.ts#L108)

___

### creationHeight

• **creationHeight**: `number`

creation_height is the height which the unbonding took place.

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:110](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/staking/v1beta1/tx.ts#L110)

___

### delegatorAddress

• **delegatorAddress**: `string`

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:105](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/staking/v1beta1/tx.ts#L105)

___

### validatorAddress

• **validatorAddress**: `string`

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:106](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/staking/v1beta1/tx.ts#L106)
