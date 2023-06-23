[coreum-js](../README.md) / [Exports](../modules.md) / Bank

# Namespace: Bank

Module to generate the Messages related to the Bank module of the Blockchain

## Table of contents

### Functions

- [MultiSend](Bank.md#multisend)
- [Send](Bank.md#send)
- [SetSendEnabled](Bank.md#setsendenabled)
- [UpdateParams](Bank.md#updateparams)

## Functions

### MultiSend

▸ **MultiSend**<`I`\>(`object`): `Object`

MsgMultiSend message creator
Defines a method for sending coins from some accounts to other accounts.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `inputs?`: { address?: string; coins?: { denom?: string; amount?: string; }[]; }[] ; `outputs?`: { address?: string; coins?: { denom?: string; amount?: string; }[]; }[]  } & { `inputs?`: { `address?`: `string` ; `coins?`: { denom?: string; amount?: string; }[]  }[] & { `address?`: `string` ; `coins?`: { denom?: string; amount?: string; }[]  } & { address?: string; coins?: { denom?: string; amount?: string; }[] & ({ denom?: string; amount?: string; } & { denom?: string; amount?: string; } & { [K in Exclude<keyof I["inputs"][number]["coins"][number], keyof Coin\>]: never; })[] & { [K in Exclude<...\>]: never; }; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `outputs?`: { `address?`: `string` ; `coins?`: { denom?: string; amount?: string; }[]  }[] & { `address?`: `string` ; `coins?`: { denom?: string; amount?: string; }[]  } & { address?: string; coins?: { denom?: string; amount?: string; }[] & ({ denom?: string; amount?: string; } & { denom?: string; amount?: string; } & { [K in Exclude<keyof I["outputs"][number]["coins"][number], keyof Coin\>]: never; })[] & { [K in Exclude<...\>]: never; }; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgMultiSend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMultiSend`](internal_.md#msgmultisend) |

#### Defined in

[src/cosmos/index.ts:323](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L323)

___

### Send

▸ **Send**<`I`\>(`object`): `Object`

MsgSend message creator
Defines a method for sending coins from one account to another account.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; }[] ; `fromAddress?`: `string` ; `toAddress?`: `string`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `fromAddress?`: `string` ; `toAddress?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgSend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSend`](internal_.md#msgsend-1) |

#### Defined in

[src/cosmos/index.ts:338](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L338)

___

### SetSendEnabled

▸ **SetSendEnabled**<`I`\>(`object`): `Object`

MsgSetSendEnabled message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `sendEnabled?`: { denom?: string; enabled?: boolean; }[] ; `useDefaultFor?`: `string`[]  } & { `authority?`: `string` ; `sendEnabled?`: { `denom?`: `string` ; `enabled?`: `boolean`  }[] & { `denom?`: `string` ; `enabled?`: `boolean`  } & { denom?: string; enabled?: boolean; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `useDefaultFor?`: `string`[] & `string`[] & { [K in string \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgSetSendEnabled message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSetSendEnabled`](internal_.md#msgsetsendenabled) |

#### Defined in

[src/cosmos/index.ts:352](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L352)

___

### UpdateParams

▸ **UpdateParams**<`I`\>(`object`): `Object`

MsgUpdateParams message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `params?`: { sendEnabled?: { denom?: string; enabled?: boolean; }[]; defaultSendEnabled?: boolean; }  } & { `authority?`: `string` ; `params?`: { `defaultSendEnabled?`: `boolean` ; `sendEnabled?`: { denom?: string; enabled?: boolean; }[]  } & { sendEnabled?: { denom?: string; enabled?: boolean; }[] & ({ denom?: string; enabled?: boolean; } & { denom?: string; enabled?: boolean; } & { [K in Exclude<keyof I["params"]["sendEnabled"][number], keyof SendEnabled\>]: never; })[] & { [K in Exclude<...\>]: never; }; defaultSendEnabled?: boolean; } & { [K in string \| number \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

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
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams-1) |

#### Defined in

[src/cosmos/index.ts:366](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L366)
