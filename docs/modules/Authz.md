[coreum-js](../README.md) / [Exports](../modules.md) / Authz

# Namespace: Authz

Module to generate the Messages related to the Authz module of the Blockchain

## Table of contents

### Functions

- [Exec](Authz.md#exec)
- [Grant](Authz.md#grant)
- [Revoke](Authz.md#revoke)

## Functions

### Exec

▸ **Exec**(`object`): `Object`

MsgExec message creator
Attempts to execute the provided messages using authorizations granted to the grantee. Each message should have only one signer corresponding to the granter of the authorization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgExec`](../interfaces/internal_.MsgExec.md) | Represents the properties available for this MsgExec message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgExec`](internal_.md#msgexec) |

#### Defined in

[src/cosmos/index.ts:88](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/index.ts#L88)

___

### Grant

▸ **Grant**(`object`): `Object`

MsgGrant message creator
Grants the provided authorization to the grantee on the granter's account with the provided expiration time. If there is already a grant for the given (granter, grantee, Authorization) triple, then the grant will be overwritten.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgGrant`](../interfaces/internal_.MsgGrant.md) | Represents the properties available for this MsgGrant message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGrant`](internal_.md#msggrant) |

#### Defined in

[src/cosmos/index.ts:75](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/index.ts#L75)

___

### Revoke

▸ **Revoke**(`object`): `Object`

MsgRevoke message creator
Revokes any authorization corresponding to the provided method name on the granter's account that has been granted to the grantee.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgRevoke`](../interfaces/internal_.MsgRevoke.md) | Represents the properties available for this MsgRevoke message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgRevoke`](internal_.md#msgrevoke) |

#### Defined in

[src/cosmos/index.ts:101](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/index.ts#L101)
