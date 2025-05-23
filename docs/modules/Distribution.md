[coreum-js](../README.md) / [Exports](../modules.md) / Distribution

# Namespace: Distribution

Module to generate the Messages related to the Distribution module of the Blockchain

## Table of contents

### Functions

- [CommunityPoolSpend](Distribution.md#communitypoolspend)
- [DepositValidatorRewardsPool](Distribution.md#depositvalidatorrewardspool)
- [FundCommunityPool](Distribution.md#fundcommunitypool)
- [SetWithdrawAddress](Distribution.md#setwithdrawaddress)
- [UpdateParams](Distribution.md#updateparams)
- [WithdrawDelegatorReward](Distribution.md#withdrawdelegatorreward)
- [WithdrawValidatorCommission](Distribution.md#withdrawvalidatorcommission)

## Functions

### CommunityPoolSpend

▸ **CommunityPoolSpend**(`object`): `Object`

MsgCommunityPoolSpend message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgCommunityPoolSpend`](../interfaces/internal_.MsgCommunityPoolSpend.md) | Represents the properties available for this MsgCommunityPoolSpend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCommunityPoolSpend`](internal_.md#msgcommunitypoolspend) |

#### Defined in

[src/cosmos/index.ts:409](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L409)

___

### DepositValidatorRewardsPool

▸ **DepositValidatorRewardsPool**(`object`): `Object`

MsgDepositValidatorRewardsPool message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgDepositValidatorRewardsPool`](../interfaces/internal_.MsgDepositValidatorRewardsPool.md) | Represents the properties available for this MsgDepositValidatorRewardsPool message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgDepositValidatorRewardsPool`](internal_.md#msgdepositvalidatorrewardspool) |

#### Defined in

[src/cosmos/index.ts:423](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L423)

___

### FundCommunityPool

▸ **FundCommunityPool**(`object`): `Object`

MsgFundCommunityPool message creator
Defines a method to allow an account to directly fund the community pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgFundCommunityPool`](../interfaces/internal_.MsgFundCommunityPool.md) | Represents the properties available for this MsgUpdateParams message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgFundCommunityPool`](internal_.md#msgfundcommunitypool) |

#### Defined in

[src/cosmos/index.ts:438](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L438)

___

### SetWithdrawAddress

▸ **SetWithdrawAddress**(`object`): `Object`

MsgSetWithdrawAddress message creator
Defines a method to change the withdraw address for a delegator (or validator self-delegation).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSetWithdrawAddress`](../interfaces/internal_.MsgSetWithdrawAddress.md) | Represents the properties available for this MsgSetWithdrawAddress message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSetWithdrawAddress`](internal_.md#msgsetwithdrawaddress) |

#### Defined in

[src/cosmos/index.ts:453](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L453)

___

### UpdateParams

▸ **UpdateParams**(`object`): `Object`

MsgUpdateParams message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUpdateParams`](../interfaces/internal_.MsgUpdateParams-4.md) | Represents the properties available for this MsgUpdateParams message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams-2) |

#### Defined in

[src/cosmos/index.ts:380](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L380)

___

### WithdrawDelegatorReward

▸ **WithdrawDelegatorReward**(`object`): `Object`

MsgWithdrawDelegatorReward message creator
Defines a method to withdraw rewards of delegator from a single validator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgWithdrawDelegatorReward`](../interfaces/internal_.MsgWithdrawDelegatorReward.md) | Represents the properties available for this MsgWithdrawDelegatorReward message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgWithdrawDelegatorReward`](internal_.md#msgwithdrawdelegatorreward) |

#### Defined in

[src/cosmos/index.ts:366](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L366)

___

### WithdrawValidatorCommission

▸ **WithdrawValidatorCommission**(`object`): `Object`

MsgWithdrawValidatorCommission message creator
Defines a method to withdraw the full commission to the validator address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgWithdrawValidatorCommission`](../interfaces/internal_.MsgWithdrawValidatorCommission.md) | Represents the properties available for this MsgWithdrawValidatorCommission message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgWithdrawValidatorCommission`](internal_.md#msgwithdrawvalidatorcommission) |

#### Defined in

[src/cosmos/index.ts:395](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/index.ts#L395)
