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

▸ **Exec**<`I`\>(`object`): `Object`

MsgExec message creator
Attempts to execute the provided messages using authorizations granted to the grantee. Each message should have only one signer corresponding to the granter of the authorization.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `grantee?`: `string` ; `msgs?`: { typeUrl?: string; value?: Uint8Array; }[]  } & { `grantee?`: `string` ; `msgs?`: { `typeUrl?`: `string` ; `value?`: `Uint8Array`  }[] & { `typeUrl?`: `string` ; `value?`: `Uint8Array`  } & { typeUrl?: string; value?: Uint8Array; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgExec message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgExec`](internal_.md#msgexec) |

#### Defined in

[src/cosmos/index.ts:80](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/index.ts#L80)

___

### Grant

▸ **Grant**<`I`\>(`object`): `Object`

MsgGrant message creator
Grants the provided authorization to the grantee on the granter's account with the provided expiration time. If there is already a grant for the given (granter, grantee, Authorization) triple, then the grant will be overwritten.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `grant?`: { authorization?: { typeUrl?: string; value?: Uint8Array; }; expiration?: Date; } ; `grantee?`: `string` ; `granter?`: `string`  } & { `grant?`: { `authorization?`: { typeUrl?: string; value?: Uint8Array; } ; `expiration?`: `Date`  } & { authorization?: { typeUrl?: string; value?: Uint8Array; } & { typeUrl?: string; value?: Uint8Array; } & { [K in Exclude<keyof I["grant"]["authorization"], keyof Any\>]: never; }; expiration?: Date; } & { [K in string \| number \| symbol]: never } ; `grantee?`: `string` ; `granter?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgGrant message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGrant`](internal_.md#msggrant) |

#### Defined in

[src/cosmos/index.ts:65](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/index.ts#L65)

___

### Revoke

▸ **Revoke**<`I`\>(`object`): `Object`

MsgRevoke message creator
Revokes any authorization corresponding to the provided method name on the granter's account that has been granted to the grantee.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `grantee?`: `string` ; `granter?`: `string` ; `msgTypeUrl?`: `string`  } & { `grantee?`: `string` ; `granter?`: `string` ; `msgTypeUrl?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgRevoke message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgRevoke`](internal_.md#msgrevoke) |

#### Defined in

[src/cosmos/index.ts:95](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/index.ts#L95)
