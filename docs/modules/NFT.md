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

▸ **AddToWhitelist**<`I`\>(`object`): `Object`

MsgAddToWhitelist message creator
Sets the account as whitelisted to hold the NFT

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `account?`: `string` ; `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { `account?`: `string` ; `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgAddToWhitelist message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgAddToWhitelist`](internal_.md#msgaddtowhitelist) |

#### Defined in

[src/coreum/index.ts:192](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L192)

___

### Burn

▸ **Burn**<`I`\>(`object`): `Object`

MsgBurn message creator
Burns the existing non-fungible token in the class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

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
| `value` | [`MsgBurn`](internal_.md#msgburn-1) |

#### Defined in

[src/coreum/index.ts:222](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L222)

___

### Freeze

▸ **Freeze**<`I`\>(`object`): `Object`

MsgFreeze message creator
Freezes an NFT

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgFreeze message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgFreeze`](internal_.md#msgfreeze-1) |

#### Defined in

[src/coreum/index.ts:237](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L237)

___

### IssueClass

▸ **IssueClass**<`I`\>(`object`): `Object`

MsgIssueClass message creator
Creates new non-fungible token class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `data?`: { typeUrl?: string; value?: Uint8Array; } ; `description?`: `string` ; `features?`: [`ClassFeature`](../enums/internal_.ClassFeature.md)[] ; `issuer?`: `string` ; `name?`: `string` ; `royaltyRate?`: `string` ; `symbol?`: `string` ; `uri?`: `string` ; `uriHash?`: `string`  } & { `data?`: { `typeUrl?`: `string` ; `value?`: `Uint8Array`  } & { typeUrl?: string; value?: Uint8Array; } & { [K in string \| number \| symbol]: never } ; `description?`: `string` ; `features?`: [`ClassFeature`](../enums/internal_.ClassFeature.md)[] & [`ClassFeature`](../enums/internal_.ClassFeature.md)[] & { [K in string \| symbol]: never } ; `issuer?`: `string` ; `name?`: `string` ; `royaltyRate?`: `string` ; `symbol?`: `string` ; `uri?`: `string` ; `uriHash?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgIssueClass message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgIssueClass`](internal_.md#msgissueclass) |

#### Defined in

[src/coreum/index.ts:267](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L267)

___

### Mint

▸ **Mint**<`I`\>(`object`): `Object`

MsgMint message creator
Mints new non-fungible token in the class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `classId?`: `string` ; `data?`: { typeUrl?: string; value?: Uint8Array; } ; `id?`: `string` ; `sender?`: `string` ; `uri?`: `string` ; `uriHash?`: `string`  } & { `classId?`: `string` ; `data?`: { `typeUrl?`: `string` ; `value?`: `Uint8Array`  } & { typeUrl?: string; value?: Uint8Array; } & { [K in string \| number \| symbol]: never } ; `id?`: `string` ; `sender?`: `string` ; `uri?`: `string` ; `uriHash?`: `string`  } & { [K in string \| number \| symbol]: never } |

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
| `value` | [`MsgMint`](internal_.md#msgmint-1) |

#### Defined in

[src/coreum/index.ts:177](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L177)

___

### RemoveFromWhitelist

▸ **RemoveFromWhitelist**<`I`\>(`object`): `Object`

MsgRemoveFromWhitelist message creator
Removes an account from whitelisted list of the NFT

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `account?`: `string` ; `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { `account?`: `string` ; `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgRemoveFromWhitelist message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgRemoveFromWhitelist`](internal_.md#msgremovefromwhitelist) |

#### Defined in

[src/coreum/index.ts:207](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L207)

___

### Send

▸ **Send**<`I`\>(`object`): `Object`

MsgSend message creator
Represents a message to send a nft from one account to another account.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `classId?`: `string` ; `id?`: `string` ; `receiver?`: `string` ; `sender?`: `string`  } & { `classId?`: `string` ; `id?`: `string` ; `receiver?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

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
| `value` | [`MsgSend`](internal_.md#msgsend) |

#### Defined in

[src/coreum/index.ts:282](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L282)

___

### Unfreeze

▸ **Unfreeze**<`I`\>(`object`): `Object`

MsgUnfreeze message creator
Removes the freeze effect already put on an NFT

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { `classId?`: `string` ; `id?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

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
| `value` | [`MsgUnfreeze`](internal_.md#msgunfreeze-1) |

#### Defined in

[src/coreum/index.ts:252](https://github.com/CooperFoundation/coreum-js/blob/b574423/src/coreum/index.ts#L252)
