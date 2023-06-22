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

▸ **CommunityPoolSpend**<`I`\>(`object`): `Object`

MsgCommunityPoolSpend message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; }[] ; `authority?`: `string` ; `recipient?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `authority?`: `string` ; `recipient?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgCommunityPoolSpend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCommunityPoolSpend`](internal_.md#msgcommunitypoolspend) |

#### Defined in

[src/cosmos/index.ts:429](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/cosmos/index.ts#L429)

___

### DepositValidatorRewardsPool

▸ **DepositValidatorRewardsPool**<`I`\>(`object`): `Object`

MsgDepositValidatorRewardsPool message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; }[] ; `depositor?`: `string` ; `validatorAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `depositor?`: `string` ; `validatorAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgDepositValidatorRewardsPool message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgDepositValidatorRewardsPool`](internal_.md#msgdepositvalidatorrewardspool) |

#### Defined in

[src/cosmos/index.ts:443](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/cosmos/index.ts#L443)

___

### FundCommunityPool

▸ **FundCommunityPool**<`I`\>(`object`): `Object`

MsgFundCommunityPool message creator
Defines a method to allow an account to directly fund the community pool.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; }[] ; `depositor?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `depositor?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgUpdateParams message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgFundCommunityPool`](internal_.md#msgfundcommunitypool) |

#### Defined in

[src/cosmos/index.ts:458](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/cosmos/index.ts#L458)

___

### SetWithdrawAddress

▸ **SetWithdrawAddress**<`I`\>(`object`): `Object`

MsgSetWithdrawAddress message creator
Defines a method to change the withdraw address for a delegator (or validator self-delegation).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `delegatorAddress?`: `string` ; `withdrawAddress?`: `string`  } & { `delegatorAddress?`: `string` ; `withdrawAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgSetWithdrawAddress message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSetWithdrawAddress`](internal_.md#msgsetwithdrawaddress) |

#### Defined in

[src/cosmos/index.ts:473](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/cosmos/index.ts#L473)

___

### UpdateParams

▸ **UpdateParams**<`I`\>(`object`): `Object`

MsgUpdateParams message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `params?`: { communityTax?: string; baseProposerReward?: string; bonusProposerReward?: string; withdrawAddrEnabled?: boolean; }  } & { `authority?`: `string` ; `params?`: { `baseProposerReward?`: `string` ; `bonusProposerReward?`: `string` ; `communityTax?`: `string` ; `withdrawAddrEnabled?`: `boolean`  } & { communityTax?: string; baseProposerReward?: string; bonusProposerReward?: string; withdrawAddrEnabled?: boolean; } & { [K in string \| number \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgUpdateParams message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams-2) |

#### Defined in

[src/cosmos/index.ts:400](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/cosmos/index.ts#L400)

___

### WithdrawDelegatorReward

▸ **WithdrawDelegatorReward**<`I`\>(`object`): `Object`

MsgWithdrawDelegatorReward message creator
Defines a method to withdraw rewards of delegator from a single validator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgWithdrawDelegatorReward message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgWithdrawDelegatorReward`](internal_.md#msgwithdrawdelegatorreward) |

#### Defined in

[src/cosmos/index.ts:386](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/cosmos/index.ts#L386)

___

### WithdrawValidatorCommission

▸ **WithdrawValidatorCommission**<`I`\>(`object`): `Object`

MsgWithdrawValidatorCommission message creator
Defines a method to withdraw the full commission to the validator address.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `validatorAddress?`: `string`  } & { `validatorAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgWithdrawValidatorCommission message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgWithdrawValidatorCommission`](internal_.md#msgwithdrawvalidatorcommission) |

#### Defined in

[src/cosmos/index.ts:415](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/cosmos/index.ts#L415)
