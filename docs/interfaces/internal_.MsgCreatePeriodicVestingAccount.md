[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCreatePeriodicVestingAccount

# Interface: MsgCreatePeriodicVestingAccount

[<internal>](../modules/internal_.md).MsgCreatePeriodicVestingAccount

MsgCreateVestingAccount defines a message that enables creating a vesting
account.

Since: cosmos-sdk 0.46

## Table of contents

### Properties

- [fromAddress](internal_.MsgCreatePeriodicVestingAccount.md#fromaddress)
- [startTime](internal_.MsgCreatePeriodicVestingAccount.md#starttime)
- [toAddress](internal_.MsgCreatePeriodicVestingAccount.md#toaddress)
- [vestingPeriods](internal_.MsgCreatePeriodicVestingAccount.md#vestingperiods)

## Properties

### fromAddress

• **fromAddress**: `string`

#### Defined in

[src/types/msgs.ts:743](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L743)

___

### startTime

• **startTime**: `number`

start of vesting as unix time (in seconds).

#### Defined in

[src/types/msgs.ts:746](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L746)

___

### toAddress

• **toAddress**: `string`

#### Defined in

[src/types/msgs.ts:744](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L744)

___

### vestingPeriods

• **vestingPeriods**: [`Period`](../modules/internal_.md#period)[]

#### Defined in

[src/types/msgs.ts:747](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L747)
