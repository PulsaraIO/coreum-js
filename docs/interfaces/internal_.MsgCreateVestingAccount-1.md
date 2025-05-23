[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCreateVestingAccount

# Interface: MsgCreateVestingAccount

[<internal>](../modules/internal_.md).MsgCreateVestingAccount

MsgCreateVestingAccount defines a message that enables creating a vesting
account.

## Table of contents

### Properties

- [amount](internal_.MsgCreateVestingAccount-1.md#amount)
- [delayed](internal_.MsgCreateVestingAccount-1.md#delayed)
- [endTime](internal_.MsgCreateVestingAccount-1.md#endtime)
- [fromAddress](internal_.MsgCreateVestingAccount-1.md#fromaddress)
- [toAddress](internal_.MsgCreateVestingAccount-1.md#toaddress)

## Properties

### amount

• **amount**: [`Coin`](../modules/internal_.md#coin)[]

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:16](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/vesting/v1beta1/tx.ts#L16)

___

### delayed

• **delayed**: `boolean`

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:19](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/vesting/v1beta1/tx.ts#L19)

___

### endTime

• **endTime**: `number`

end of vesting as unix time (in seconds).

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:18](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/vesting/v1beta1/tx.ts#L18)

___

### fromAddress

• **fromAddress**: `string`

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:14](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/vesting/v1beta1/tx.ts#L14)

___

### toAddress

• **toAddress**: `string`

#### Defined in

[src/cosmos/vesting/v1beta1/tx.ts:15](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/vesting/v1beta1/tx.ts#L15)
