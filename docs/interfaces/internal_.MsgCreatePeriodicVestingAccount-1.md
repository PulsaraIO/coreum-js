[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCreatePeriodicVestingAccount

# Interface: MsgCreatePeriodicVestingAccount

[<internal>](../modules/internal_.md).MsgCreatePeriodicVestingAccount

MsgCreateVestingAccount defines a message that enables creating a vesting
account.

Since: cosmos-sdk 0.46

## Table of contents

### Properties

- [fromAddress](internal_.MsgCreatePeriodicVestingAccount-1.md#fromaddress)
- [startTime](internal_.MsgCreatePeriodicVestingAccount-1.md#starttime)
- [toAddress](internal_.MsgCreatePeriodicVestingAccount-1.md#toaddress)
- [vestingPeriods](internal_.MsgCreatePeriodicVestingAccount-1.md#vestingperiods)

## Properties

### fromAddress

• **fromAddress**: `string`

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:53](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/vesting/v1beta1/tx.ts#L53)

___

### startTime

• **startTime**: `number`

start of vesting as unix time (in seconds).

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:56](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/vesting/v1beta1/tx.ts#L56)

___

### toAddress

• **toAddress**: `string`

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:54](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/vesting/v1beta1/tx.ts#L54)

___

### vestingPeriods

• **vestingPeriods**: [`Period`](../modules/internal_.md#period)[]

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:57](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/vesting/v1beta1/tx.ts#L57)
