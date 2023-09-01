[coreum-js](../README.md) / [Exports](../modules.md) / Vesting

# Namespace: Vesting

Module to generate the Messages related to the Vesting module of the Blockchain

## Table of contents

### Functions

- [CreatePeriodicVestingAccount](Vesting.md#createperiodicvestingaccount)
- [CreatePermanentLockedAccount](Vesting.md#createpermanentlockedaccount)
- [CreateVestingAccount](Vesting.md#createvestingaccount)

## Functions

### CreatePeriodicVestingAccount

▸ **CreatePeriodicVestingAccount**(`object`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`MsgCreatePeriodicVestingAccount`](../interfaces/internal_.MsgCreatePeriodicVestingAccount.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreatePeriodicVestingAccount`](internal_.md#msgcreateperiodicvestingaccount) |

#### Defined in

[src/cosmos/index.ts:482](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/cosmos/index.ts#L482)

___

### CreatePermanentLockedAccount

▸ **CreatePermanentLockedAccount**(`object`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`MsgCreatePermanentLockedAccount`](../interfaces/internal_.MsgCreatePermanentLockedAccount.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreatePermanentLockedAccount`](internal_.md#msgcreatepermanentlockedaccount) |

#### Defined in

[src/cosmos/index.ts:491](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/cosmos/index.ts#L491)

___

### CreateVestingAccount

▸ **CreateVestingAccount**(`object`): `Object`

MsgCreateVestingAccount message creator
Defines a method that enables creating a vesting account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgCreateVestingAccount`](../interfaces/internal_.MsgCreateVestingAccount.md) | Represents the properties available for this MsgCreateVestingAccount message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreateVestingAccount`](internal_.md#msgcreatevestingaccount) |

#### Defined in

[src/cosmos/index.ts:473](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/cosmos/index.ts#L473)
