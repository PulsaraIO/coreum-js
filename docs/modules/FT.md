[coreum-js](../README.md) / [Exports](../modules.md) / FT

# Namespace: FT

Transaction Module for the Fungible Tokens module. (assetft)

## Table of contents

### Functions

- [Burn](FT.md#burn)
- [Freeze](FT.md#freeze)
- [GloballyFreeze](FT.md#globallyfreeze)
- [GloballyUnfreeze](FT.md#globallyunfreeze)
- [Issue](FT.md#issue)
- [Mint](FT.md#mint)
- [SetWhitelistedLimit](FT.md#setwhitelistedlimit)
- [Unfreeze](FT.md#unfreeze)

## Functions

### Burn

▸ **Burn**<`I`\>(`object`): `Object`

MsgBurn message creator
Burns the specified fungible tokens from senders balance if the sender has enough balance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `coin?`: { denom?: string; amount?: string; } ; `sender?`: `string`  } & { `coin?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgBurn message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgBurn`](internal_.md#msgburn) |

#### Defined in

[src/coreum/index.ts:82](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L82)

___

### Freeze

▸ **Freeze**<`I`\>(`object`): `Object`

MsgFreeze message creator
Freezes a part of the fungible tokens in an account, only if the freezable feature is enabled on that token.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `account?`: `string` ; `coin?`: { denom?: string; amount?: string; } ; `sender?`: `string`  } & { `account?`: `string` ; `coin?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgIssue message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgFreeze`](internal_.md#msgfreeze) |

#### Defined in

[src/coreum/index.ts:97](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L97)

___

### GloballyFreeze

▸ **GloballyFreeze**<`I`\>(`object`): `Object`

MsgGloballyFreeze message creator
Freezes fungible token so no operations are allowed with it before unfrozen. This operation is idempotent so global freeze of already frozen token does nothing.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `denom?`: `string` ; `sender?`: `string`  } & { `denom?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgGloballyFreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGloballyFreeze`](internal_.md#msggloballyfreeze) |

#### Defined in

[src/coreum/index.ts:112](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L112)

___

### GloballyUnfreeze

▸ **GloballyUnfreeze**<`I`\>(`object`): `Object`

MsgGloballyUnfreeze message creator
Unfreezes fungible token and unblocks basic operations on it. This operation is idempotent so global unfreezing of non-frozen token does nothing.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `denom?`: `string` ; `sender?`: `string`  } & { `denom?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgGloballyUnfreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGloballyUnfreeze`](internal_.md#msggloballyunfreeze) |

#### Defined in

[src/coreum/index.ts:127](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L127)

___

### Issue

▸ **Issue**<`I`\>(`object`): `Object`

MsgIssue message creator
Defines a method to issue a new fungible token.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `burnRate?`: `string` ; `description?`: `string` ; `features?`: [`Feature`](../enums/internal_.Feature.md)[] ; `initialAmount?`: `string` ; `issuer?`: `string` ; `precision?`: `number` ; `sendCommissionRate?`: `string` ; `subunit?`: `string` ; `symbol?`: `string`  } & { `burnRate?`: `string` ; `description?`: `string` ; `features?`: [`Feature`](../enums/internal_.Feature.md)[] & [`Feature`](../enums/internal_.Feature.md)[] & { [K in string \| symbol]: never } ; `initialAmount?`: `string` ; `issuer?`: `string` ; `precision?`: `number` ; `sendCommissionRate?`: `string` ; `subunit?`: `string` ; `symbol?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgIssue message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgIssue`](internal_.md#msgissue) |

#### Defined in

[src/coreum/index.ts:67](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L67)

___

### Mint

▸ **Mint**<`I`\>(`object`): `Object`

MsgMint message creator
Mints new fungible tokens.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `coin?`: { denom?: string; amount?: string; } ; `sender?`: `string`  } & { `coin?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgMint message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMint`](internal_.md#msgmint) |

#### Defined in

[src/coreum/index.ts:52](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L52)

___

### SetWhitelistedLimit

▸ **SetWhitelistedLimit**<`I`\>(`object`): `Object`

MsgSetWhitelistedLimit message creator
Sets the limit of how many tokens a specific account may hold.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `account?`: `string` ; `coin?`: { denom?: string; amount?: string; } ; `sender?`: `string`  } & { `account?`: `string` ; `coin?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgSetWhitelistedLimit message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSetWhitelistedLimit`](internal_.md#msgsetwhitelistedlimit) |

#### Defined in

[src/coreum/index.ts:157](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L157)

___

### Unfreeze

▸ **Unfreeze**<`I`\>(`object`): `Object`

MsgUnfreeze message creator
Unfreezes a part of the frozen fungible tokens in an account, only if there are such frozen tokens on that account.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `account?`: `string` ; `coin?`: { denom?: string; amount?: string; } ; `sender?`: `string`  } & { `account?`: `string` ; `coin?`: { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never } ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgUnfreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUnfreeze`](internal_.md#msgunfreeze) |

#### Defined in

[src/coreum/index.ts:142](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/coreum/index.ts#L142)
