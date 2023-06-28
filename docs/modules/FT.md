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

▸ **Burn**(`object`): `Object`

MsgBurn message creator
Burns the specified fungible tokens from senders balance if the sender has enough balance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgBurn`](internal_.md#msgburn) | Represents the properties available for this MsgBurn message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgBurn`](internal_.md#msgburn) |

#### Defined in

[src/coreum/index.ts:76](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L76)

___

### Freeze

▸ **Freeze**(`object`): `Object`

MsgFreeze message creator
Freezes a part of the fungible tokens in an account, only if the freezable feature is enabled on that token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgFreeze`](internal_.md#msgfreeze) | Represents the properties available for this MsgIssue message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgFreeze`](internal_.md#msgfreeze) |

#### Defined in

[src/coreum/index.ts:89](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L89)

___

### GloballyFreeze

▸ **GloballyFreeze**(`object`): `Object`

MsgGloballyFreeze message creator
Freezes fungible token so no operations are allowed with it before unfrozen. This operation is idempotent so global freeze of already frozen token does nothing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgGloballyFreeze`](internal_.md#msggloballyfreeze) | Represents the properties available for this MsgGloballyFreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGloballyFreeze`](internal_.md#msggloballyfreeze) |

#### Defined in

[src/coreum/index.ts:102](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L102)

___

### GloballyUnfreeze

▸ **GloballyUnfreeze**(`object`): `Object`

MsgGloballyUnfreeze message creator
Unfreezes fungible token and unblocks basic operations on it. This operation is idempotent so global unfreezing of non-frozen token does nothing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgGloballyUnfreeze`](internal_.md#msggloballyunfreeze) | Represents the properties available for this MsgGloballyUnfreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGloballyUnfreeze`](internal_.md#msggloballyunfreeze) |

#### Defined in

[src/coreum/index.ts:115](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L115)

___

### Issue

▸ **Issue**(`object`): `Object`

MsgIssue message creator
Defines a method to issue a new fungible token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgIssue`](internal_.md#msgissue) | Represents the properties available for this MsgIssue message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgIssue`](internal_.md#msgissue) |

#### Defined in

[src/coreum/index.ts:63](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L63)

___

### Mint

▸ **Mint**(`object`): `Object`

MsgMint message creator
Mints new fungible tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgMint`](internal_.md#msgmint) | Represents the properties available for this MsgMint message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMint`](internal_.md#msgmint) |

#### Defined in

[src/coreum/index.ts:50](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L50)

___

### SetWhitelistedLimit

▸ **SetWhitelistedLimit**(`object`): `Object`

MsgSetWhitelistedLimit message creator
Sets the limit of how many tokens a specific account may hold.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSetWhitelistedLimit`](internal_.md#msgsetwhitelistedlimit) | Represents the properties available for this MsgSetWhitelistedLimit message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSetWhitelistedLimit`](internal_.md#msgsetwhitelistedlimit) |

#### Defined in

[src/coreum/index.ts:141](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L141)

___

### Unfreeze

▸ **Unfreeze**(`object`): `Object`

MsgUnfreeze message creator
Unfreezes a part of the frozen fungible tokens in an account, only if there are such frozen tokens on that account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUnfreeze`](internal_.md#msgunfreeze) | Represents the properties available for this MsgUnfreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUnfreeze`](internal_.md#msgunfreeze) |

#### Defined in

[src/coreum/index.ts:128](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L128)
