[coreum-js](../README.md) / [Exports](../modules.md) / Staking

# Namespace: Staking

Module to generate the Messages related to the Staking module of the Blockchain

## Table of contents

### Functions

- [BeginRedelegate](Staking.md#beginredelegate)
- [CancelUnbondingDelegation](Staking.md#cancelunbondingdelegation)
- [CreateValidator](Staking.md#createvalidator)
- [Delegate](Staking.md#delegate)
- [EditValidator](Staking.md#editvalidator)
- [Undelegate](Staking.md#undelegate)
- [UpdateParams](Staking.md#updateparams)

## Functions

### BeginRedelegate

▸ **BeginRedelegate**(`object`): `Object`

MsgBeginRedelegate message creator
Defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgBeginRedelegate`](../interfaces/internal_.MsgBeginRedelegate.md) | Represents the properties available for this MsgBeginRedelegate message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgBeginRedelegate`](internal_.md#msgbeginredelegate) |

#### Defined in

[src/cosmos/index.ts:119](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L119)

___

### CancelUnbondingDelegation

▸ **CancelUnbondingDelegation**(`object`): `Object`

MsgCancelUnbondingDelegation message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgCancelUnbondingDelegation`](../interfaces/internal_.MsgCancelUnbondingDelegation.md) | Represents the properties available for this MsgCancelUnbondingDelegation message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCancelUnbondingDelegation`](internal_.md#msgcancelunbondingdelegation) |

#### Defined in

[src/cosmos/index.ts:133](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L133)

___

### CreateValidator

▸ **CreateValidator**(`object`): `Object`

MsgCreateValidator message creator
Defines a method for creating a new validator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgCreateValidator`](../interfaces/internal_.MsgCreateValidator.md) | Represents the properties available for this MsgCreateValidator message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreateValidator`](internal_.md#msgcreatevalidator) |

#### Defined in

[src/cosmos/index.ts:148](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L148)

___

### Delegate

▸ **Delegate**(`object`): `Object`

MsgDelegate message creator
Defines a method for performing a delegation of coins from a delegator to a validator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgDelegate`](../interfaces/internal_.MsgDelegate.md) | Represents the properties available for this MsgDelegate message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgDelegate`](internal_.md#msgdelegate) |

#### Defined in

[src/cosmos/index.ts:163](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L163)

___

### EditValidator

▸ **EditValidator**(`object`): `Object`

MsgEditValidator message creator
Defines a method for editing an existing validator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgEditValidator`](../interfaces/internal_.MsgEditValidator.md) | Represents the properties available for this MsgEditValidator message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgEditValidator`](internal_.md#msgeditvalidator) |

#### Defined in

[src/cosmos/index.ts:176](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L176)

___

### Undelegate

▸ **Undelegate**(`object`): `Object`

MsgUndelegate message creator
Defines a method for performing an undelegation from a delegate and a validator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUndelegate`](../interfaces/internal_.MsgUndelegate.md) | Represents the properties available for this MsgUndelegate message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUndelegate`](internal_.md#msgundelegate) |

#### Defined in

[src/cosmos/index.ts:189](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L189)

___

### UpdateParams

▸ **UpdateParams**(`object`): `Object`

MsgUpdateParams message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUpdateParams`](../interfaces/internal_.MsgUpdateParams.md) | Represents the properties available for this MsgUpdateParams message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams) |

#### Defined in

[src/cosmos/index.ts:201](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L201)
