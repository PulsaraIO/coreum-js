[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCreateValidator

# Interface: MsgCreateValidator

[<internal>](../modules/internal_.md).MsgCreateValidator

MsgCreateValidator defines a SDK message for creating a new validator.

## Table of contents

### Properties

- [commission](internal_.MsgCreateValidator-1.md#commission)
- [delegatorAddress](internal_.MsgCreateValidator-1.md#delegatoraddress)
- [description](internal_.MsgCreateValidator-1.md#description)
- [minSelfDelegation](internal_.MsgCreateValidator-1.md#minselfdelegation)
- [pubkey](internal_.MsgCreateValidator-1.md#pubkey)
- [validatorAddress](internal_.MsgCreateValidator-1.md#validatoraddress)
- [value](internal_.MsgCreateValidator-1.md#value)

## Properties

### commission

• **commission**: [`CommissionRates`](../modules/internal_.md#commissionrates)

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:14](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/staking/v1beta1/tx.ts#L14)

___

### delegatorAddress

• **delegatorAddress**: `string`

Deprecated: Use of Delegator Address in MsgCreateValidator is deprecated.
The validator address bytes and delegator address bytes refer to the same account while creating validator (defer
only in bech32 notation).

**`Deprecated`**

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:23](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/staking/v1beta1/tx.ts#L23)

___

### description

• **description**: [`Description`](../modules/internal_.md#description)

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:13](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/staking/v1beta1/tx.ts#L13)

___

### minSelfDelegation

• **minSelfDelegation**: `string`

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:15](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/staking/v1beta1/tx.ts#L15)

___

### pubkey

• **pubkey**: [`Any`](../modules/internal_.md#any)

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:25](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/staking/v1beta1/tx.ts#L25)

___

### validatorAddress

• **validatorAddress**: `string`

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:24](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/staking/v1beta1/tx.ts#L24)

___

### value

• **value**: [`Coin`](../modules/internal_.md#coin)

#### Defined in

[src/cosmos/staking/v1beta1/tx.ts:26](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/staking/v1beta1/tx.ts#L26)
