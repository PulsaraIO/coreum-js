[coreum-js](../README.md) / [Exports](../modules.md) / NFT

# Namespace: NFT

Transaction Module for the Non-Fungible Tokens modules (assetnft, nftbeta).

## Table of contents

### Functions

- [AddToWhitelist](NFT.md#addtowhitelist)
- [Burn](NFT.md#burn)
- [Freeze](NFT.md#freeze)
- [IssueClass](NFT.md#issueclass)
- [Mint](NFT.md#mint)
- [RemoveFromWhitelist](NFT.md#removefromwhitelist)
- [Send](NFT.md#send)
- [Unfreeze](NFT.md#unfreeze)

## Functions

### AddToWhitelist

▸ **AddToWhitelist**(`object`): `Object`

MsgAddToWhitelist message creator
Sets the account as whitelisted to hold the NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgAddToWhitelist`](../interfaces/internal_.MsgAddToWhitelist.md) | Represents the properties available for this MsgAddToWhitelist message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgAddToWhitelist`](internal_.md#msgaddtowhitelist) |

#### Defined in

[src/coreum/index.ts:177](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L177)

___

### Burn

▸ **Burn**(`object`): `Object`

MsgBurn message creator
Burns the existing non-fungible token in the class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgBurn`](../interfaces/internal_.MsgBurn-2.md) | Represents the properties available for this MsgBurn message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgBurn`](internal_.md#msgburn-1) |

#### Defined in

[src/coreum/index.ts:205](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L205)

___

### Freeze

▸ **Freeze**(`object`): `Object`

MsgFreeze message creator
Freezes an NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgFreeze`](../interfaces/internal_.MsgFreeze-2.md) | Represents the properties available for this MsgFreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgFreeze`](internal_.md#msgfreeze-1) |

#### Defined in

[src/coreum/index.ts:218](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L218)

___

### IssueClass

▸ **IssueClass**(`object`): `Object`

MsgIssueClass message creator
Creates new non-fungible token class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgIssueClass`](internal_.md#msgissueclass) | Represents the properties available for this MsgIssueClass message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgIssueClass`](internal_.md#msgissueclass) |

#### Defined in

[src/coreum/index.ts:244](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L244)

___

### Mint

▸ **Mint**(`object`): `Object`

MsgMint message creator
Mints new non-fungible token in the class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgMint`](../interfaces/internal_.MsgMint-2.md) | Represents the properties available for this MsgMint message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMint`](internal_.md#msgmint-1) |

#### Defined in

[src/coreum/index.ts:164](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L164)

___

### RemoveFromWhitelist

▸ **RemoveFromWhitelist**(`object`): `Object`

MsgRemoveFromWhitelist message creator
Removes an account from whitelisted list of the NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgRemoveFromWhitelist`](../interfaces/internal_.MsgRemoveFromWhitelist.md) | Represents the properties available for this MsgRemoveFromWhitelist message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgRemoveFromWhitelist`](internal_.md#msgremovefromwhitelist) |

#### Defined in

[src/coreum/index.ts:190](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L190)

___

### Send

▸ **Send**(`object`): `Object`

MsgSend message creator
Represents a message to send a nft from one account to another account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSend`](../interfaces/internal_.MsgSend.md) | Represents the properties available for this MsgSend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSend`](internal_.md#msgsend) |

#### Defined in

[src/coreum/index.ts:257](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L257)

___

### Unfreeze

▸ **Unfreeze**(`object`): `Object`

MsgUnfreeze message creator
Removes the freeze effect already put on an NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUnfreeze`](../interfaces/internal_.MsgUnfreeze-2.md) | Represents the properties available for this MsgUnfreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUnfreeze`](internal_.md#msgunfreeze-1) |

#### Defined in

[src/coreum/index.ts:231](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/coreum/index.ts#L231)
