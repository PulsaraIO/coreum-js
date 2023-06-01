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

▸ **BeginRedelegate**<`I`\>(`object`): `Object`

MsgBeginRedelegate message creator
Defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; } ; `delegatorAddress?`: `string` ; `validatorDstAddress?`: `string` ; `validatorSrcAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `delegatorAddress?`: `string` ; `validatorDstAddress?`: `string` ; `validatorSrcAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgBeginRedelegate message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgBeginRedelegate`](internal_.md#msgbeginredelegate) |

#### Defined in

[src/cosmos/index.ts:115](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/index.ts#L115)

___

### CancelUnbondingDelegation

▸ **CancelUnbondingDelegation**<`I`\>(`object`): `Object`

MsgCancelUnbondingDelegation message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; } ; `creationHeight?`: `number` ; `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `creationHeight?`: `number` ; `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgCancelUnbondingDelegation message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCancelUnbondingDelegation`](internal_.md#msgcancelunbondingdelegation) |

#### Defined in

[src/cosmos/index.ts:129](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/index.ts#L129)

___

### CreateValidator

▸ **CreateValidator**<`I`\>(`object`): `Object`

MsgCreateValidator message creator
Defines a method for creating a new validator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `commission?`: { rate?: string; maxRate?: string; maxChangeRate?: string; } ; `delegatorAddress?`: `string` ; `description?`: { moniker?: string; identity?: string; website?: string; securityContact?: string; details?: string; } ; `minSelfDelegation?`: `string` ; `pubkey?`: { typeUrl?: string; value?: Uint8Array; } ; `validatorAddress?`: `string` ; `value?`: { denom?: string; amount?: string; }  } & { `commission?`: { `maxChangeRate?`: `string` ; `maxRate?`: `string` ; `rate?`: `string`  } & { rate?: string; maxRate?: string; maxChangeRate?: string; } & { [K in string \| number \| symbol]: never } ; `delegatorAddress?`: `string` ; `description?`: { `details?`: `string` ; `identity?`: `string` ; `moniker?`: `string` ; `securityContact?`: `string` ; `website?`: `string`  } & { moniker?: string; identity?: string; website?: string; securityContact?: string; details?: string; } & { [K in string \| number \| symbol]: never } ; `minSelfDelegation?`: `string` ; `pubkey?`: { `typeUrl?`: `string` ; `value?`: `Uint8Array`  } & { typeUrl?: string; value?: Uint8Array; } & { [K in string \| number \| symbol]: never } ; `validatorAddress?`: `string` ; `value?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgCreateValidator message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgCreateValidator`](internal_.md#msgcreatevalidator) |

#### Defined in

[src/cosmos/index.ts:144](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/index.ts#L144)

___

### Delegate

▸ **Delegate**<`I`\>(`object`): `Object`

MsgDelegate message creator
Defines a method for performing a delegation of coins from a delegator to a validator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; } ; `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgDelegate message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgDelegate`](internal_.md#msgdelegate) |

#### Defined in

[src/cosmos/index.ts:159](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/index.ts#L159)

___

### EditValidator

▸ **EditValidator**<`I`\>(`object`): `Object`

MsgEditValidator message creator
Defines a method for editing an existing validator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `commissionRate?`: `string` ; `description?`: { moniker?: string; identity?: string; website?: string; securityContact?: string; details?: string; } ; `minSelfDelegation?`: `string` ; `validatorAddress?`: `string`  } & { `commissionRate?`: `string` ; `description?`: { `details?`: `string` ; `identity?`: `string` ; `moniker?`: `string` ; `securityContact?`: `string` ; `website?`: `string`  } & { moniker?: string; identity?: string; website?: string; securityContact?: string; details?: string; } & { [K in string \| number \| symbol]: never } ; `minSelfDelegation?`: `string` ; `validatorAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgEditValidator message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgEditValidator`](internal_.md#msgeditvalidator) |

#### Defined in

[src/cosmos/index.ts:174](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/index.ts#L174)

___

### Undelegate

▸ **Undelegate**<`I`\>(`object`): `Object`

MsgUndelegate message creator
Defines a method for performing an undelegation from a delegate and a validator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; } ; `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `delegatorAddress?`: `string` ; `validatorAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgUndelegate message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUndelegate`](internal_.md#msgundelegate) |

#### Defined in

[src/cosmos/index.ts:189](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/index.ts#L189)

___

### UpdateParams

▸ **UpdateParams**<`I`\>(`object`): `Object`

MsgUpdateParams message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `params?`: { unbondingTime?: { seconds?: number; nanos?: number; }; maxValidators?: number; maxEntries?: number; historicalEntries?: number; bondDenom?: string; minCommissionRate?: string; }  } & { `authority?`: `string` ; `params?`: { `bondDenom?`: `string` ; `historicalEntries?`: `number` ; `maxEntries?`: `number` ; `maxValidators?`: `number` ; `minCommissionRate?`: `string` ; `unbondingTime?`: { seconds?: number; nanos?: number; }  } & { unbondingTime?: { seconds?: number; nanos?: number; } & { seconds?: number; nanos?: number; } & { [K in Exclude<keyof I["params"]["unbondingTime"], keyof Duration\>]: never; }; ... 4 more ...; minCommissionRate?: string; } & { [K in string \| number \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

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
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams) |

#### Defined in

[src/cosmos/index.ts:203](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/index.ts#L203)
