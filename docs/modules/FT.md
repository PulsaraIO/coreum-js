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
| `object` | [`MsgBurn`](../interfaces/internal_.MsgBurn.md) | Represents the properties available for this MsgBurn message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgBurn`](internal_.md#msgburn) |

#### Defined in

[src/coreum/index.ts:79](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L79)

___

### Freeze

▸ **Freeze**(`object`): `Object`

MsgFreeze message creator
Freezes a part of the fungible tokens in an account, only if the freezable feature is enabled on that token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgFreeze`](../interfaces/internal_.MsgFreeze.md) | Represents the properties available for this MsgIssue message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgFreeze`](internal_.md#msgfreeze) |

#### Defined in

[src/coreum/index.ts:92](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L92)

___

### GloballyFreeze

▸ **GloballyFreeze**(`object`): `Object`

MsgGloballyFreeze message creator
Freezes fungible token so no operations are allowed with it before unfrozen. This operation is idempotent so global freeze of already frozen token does nothing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgGloballyFreeze`](../interfaces/internal_.MsgGloballyFreeze.md) | Represents the properties available for this MsgGloballyFreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGloballyFreeze`](internal_.md#msggloballyfreeze) |

#### Defined in

[src/coreum/index.ts:105](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L105)

___

### GloballyUnfreeze

▸ **GloballyUnfreeze**(`object`): `Object`

MsgGloballyUnfreeze message creator
Unfreezes fungible token and unblocks basic operations on it. This operation is idempotent so global unfreezing of non-frozen token does nothing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgGloballyUnfreeze`](../interfaces/internal_.MsgGloballyUnfreeze.md) | Represents the properties available for this MsgGloballyUnfreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgGloballyUnfreeze`](internal_.md#msggloballyunfreeze) |

#### Defined in

[src/coreum/index.ts:118](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L118)

___

### Issue

▸ **Issue**(`object`): `Object`

MsgIssue message creator
Defines a method to issue a new fungible token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgIssue`](../interfaces/internal_.MsgIssue.md) | Represents the properties available for this MsgIssue message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgIssue`](internal_.md#msgissue) |

#### Defined in

[src/coreum/index.ts:66](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L66)

___

### Mint

▸ **Mint**(`object`): `Object`

MsgMint message creator
Mints new fungible tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgMint`](../interfaces/internal_.MsgMint.md) | Represents the properties available for this MsgMint message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMint`](internal_.md#msgmint) |

#### Defined in

[src/coreum/index.ts:53](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L53)

___

### SetWhitelistedLimit

▸ **SetWhitelistedLimit**(`object`): `Object`

MsgSetWhitelistedLimit message creator
Sets the limit of how many tokens a specific account may hold.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSetWhitelistedLimit`](../interfaces/internal_.MsgSetWhitelistedLimit.md) | Represents the properties available for this MsgSetWhitelistedLimit message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSetWhitelistedLimit`](internal_.md#msgsetwhitelistedlimit) |

#### Defined in

[src/coreum/index.ts:146](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L146)

___

### Unfreeze

▸ **Unfreeze**(`object`): `Object`

MsgUnfreeze message creator
Unfreezes a part of the frozen fungible tokens in an account, only if there are such frozen tokens on that account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUnfreeze`](../interfaces/internal_.MsgUnfreeze.md) | Represents the properties available for this MsgUnfreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUnfreeze`](internal_.md#msgunfreeze) |

#### Defined in

[src/coreum/index.ts:133](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L133)
