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

▸ **CreatePeriodicVestingAccount**<`I`\>(`object`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `fromAddress?`: `string` ; `startTime?`: `number` ; `toAddress?`: `string` ; `vestingPeriods?`: { length?: number; amount?: { denom?: string; amount?: string; }[]; }[]  } & { `fromAddress?`: `string` ; `startTime?`: `number` ; `toAddress?`: `string` ; `vestingPeriods?`: { `amount?`: { denom?: string; amount?: string; }[] ; `length?`: `number`  }[] & { `amount?`: { denom?: string; amount?: string; }[] ; `length?`: `number`  } & { length?: number; amount?: { denom?: string; amount?: string; }[] & ({ denom?: string; amount?: string; } & { denom?: string; amount?: string; } & { [K in Exclude<keyof I["vestingPeriods"][number]["amount"][number], keyof Coin\>]: never; })[] & { [K in Exclude<...\>]: never; }; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreatePeriodicVestingAccount`](internal_.md#msgcreateperiodicvestingaccount) |

#### Defined in

[src/cosmos/index.ts:502](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L502)

___

### CreatePermanentLockedAccount

▸ **CreatePermanentLockedAccount**<`I`\>(`object`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; }[] ; `fromAddress?`: `string` ; `toAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `fromAddress?`: `string` ; `toAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreatePermanentLockedAccount`](internal_.md#msgcreatepermanentlockedaccount) |

#### Defined in

[src/cosmos/index.ts:511](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L511)

___

### CreateVestingAccount

▸ **CreateVestingAccount**<`I`\>(`object`): `Object`

MsgCreateVestingAccount message creator
Defines a method that enables creating a vesting account.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; }[] ; `delayed?`: `boolean` ; `endTime?`: `number` ; `fromAddress?`: `string` ; `toAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `delayed?`: `boolean` ; `endTime?`: `number` ; `fromAddress?`: `string` ; `toAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgCreateVestingAccount message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreateVestingAccount`](internal_.md#msgcreatevestingaccount) |

#### Defined in

[src/cosmos/index.ts:493](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L493)
