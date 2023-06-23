[coreum-js](../README.md) / [Exports](../modules.md) / Feegrant

# Namespace: Feegrant

Module to generate the Messages related to the Feegrant module of the Blockchain

## Table of contents

### Functions

- [GrantAllowance](Feegrant.md#grantallowance)
- [RevokeAllowance](Feegrant.md#revokeallowance)

## Functions

### GrantAllowance

▸ **GrantAllowance**<`I`\>(`object`): `Object`

MsgGrantAllowance message creator
Grants fee allowance to the grantee on the granter's account with the provided expiration time.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `allowance?`: { typeUrl?: string; value?: Uint8Array; } ; `grantee?`: `string` ; `granter?`: `string`  } & { `allowance?`: { `typeUrl?`: `string` ; `value?`: `Uint8Array`  } & { typeUrl?: string; value?: Uint8Array; } & { [K in string \| number \| symbol]: never } ; `grantee?`: `string` ; `granter?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgGrantAllowance message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGrantAllowance`](internal_.md#msggrantallowance) |

#### Defined in

[src/cosmos/index.ts:288](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L288)

___

### RevokeAllowance

▸ **RevokeAllowance**<`I`\>(`object`): `Object`

MsgRevokeAllowance message creator
Revokes any fee allowance of granter's account that has been granted to the grantee.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `grantee?`: `string` ; `granter?`: `string`  } & { `grantee?`: `string` ; `granter?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgRevokeAllowance message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgRevokeAllowance`](internal_.md#msgrevokeallowance) |

#### Defined in

[src/cosmos/index.ts:303](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/index.ts#L303)
