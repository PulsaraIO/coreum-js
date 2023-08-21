[coreum-js](../README.md) / [Exports](../modules.md) / Feegrant

# Namespace: Feegrant

Module to generate the Messages related to the Feegrant module of the Blockchain

## Table of contents

### Functions

- [GrantAllowance](Feegrant.md#grantallowance)
- [RevokeAllowance](Feegrant.md#revokeallowance)

## Functions

### GrantAllowance

▸ **GrantAllowance**(`object`): `Object`

MsgGrantAllowance message creator
Grants fee allowance to the grantee on the granter's account with the provided expiration time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgGrantAllowance`](../interfaces/internal_.MsgGrantAllowance.md) | Represents the properties available for this MsgGrantAllowance message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGrantAllowance`](internal_.md#msggrantallowance) |

#### Defined in

[src/cosmos/index.ts:274](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/index.ts#L274)

___

### RevokeAllowance

▸ **RevokeAllowance**(`object`): `Object`

MsgRevokeAllowance message creator
Revokes any fee allowance of granter's account that has been granted to the grantee.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgRevokeAllowance`](../interfaces/internal_.MsgRevokeAllowance.md) | Represents the properties available for this MsgRevokeAllowance message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgRevokeAllowance`](internal_.md#msgrevokeallowance) |

#### Defined in

[src/cosmos/index.ts:289](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/index.ts#L289)
