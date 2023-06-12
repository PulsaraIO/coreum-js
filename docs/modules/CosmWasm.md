[coreum-js](../README.md) / [Exports](../modules.md) / CosmWasm

# Namespace: CosmWasm

Transaction Module for the Smart Contracts Module (wasm)

## Table of contents

### Functions

- [ClearAdmin](CosmWasm.md#clearadmin)
- [ExecuteContract](CosmWasm.md#executecontract)
- [InstantiateContract](CosmWasm.md#instantiatecontract)
- [InstantiateContract2](CosmWasm.md#instantiatecontract2)
- [MigrateContract](CosmWasm.md#migratecontract)
- [PinCodes](CosmWasm.md#pincodes)
- [StoreAndInstantiateContract](CosmWasm.md#storeandinstantiatecontract)
- [StoreCode](CosmWasm.md#storecode)
- [SudoContract](CosmWasm.md#sudocontract)
- [UnpinCodes](CosmWasm.md#unpincodes)
- [UpdateAdmin](CosmWasm.md#updateadmin)
- [UpdateInstantiateConfig](CosmWasm.md#updateinstantiateconfig)
- [UpdateParams](CosmWasm.md#updateparams)

## Functions

### ClearAdmin

▸ **ClearAdmin**<`I`\>(`object`): `Object`

MsgClearAdmin message creator
Removes any admin stored for a smart contract

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `contract?`: `string` ; `sender?`: `string`  } & { `contract?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgClearAdmin message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgClearAdmin`](internal_.md#msgclearadmin) |

#### Defined in

[src/wasm/v1/index.ts:162](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L162)

___

### ExecuteContract

▸ **ExecuteContract**<`I`\>(`object`): `Object`

MsgExecuteContract message creator
Submits the given message data to a smart contract

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `contract?`: `string` ; `funds?`: { denom?: string; amount?: string; }[] ; `msg?`: `Uint8Array` ; `sender?`: `string`  } & { `contract?`: `string` ; `funds?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `msg?`: `Uint8Array` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgExecuteContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgExecuteContract`](internal_.md#msgexecutecontract) |

#### Defined in

[src/wasm/v1/index.ts:192](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L192)

___

### InstantiateContract

▸ **InstantiateContract**<`I`\>(`object`): `Object`

MsgInstantiateContract message creator
Creates a new smart contract instance for the given code id.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `admin?`: `string` ; `codeId?`: `number` ; `funds?`: { denom?: string; amount?: string; }[] ; `label?`: `string` ; `msg?`: `Uint8Array` ; `sender?`: `string`  } & { `admin?`: `string` ; `codeId?`: `number` ; `funds?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `label?`: `string` ; `msg?`: `Uint8Array` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgInstantiateContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgInstantiateContract`](internal_.md#msginstantiatecontract) |

#### Defined in

[src/wasm/v1/index.ts:132](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L132)

___

### InstantiateContract2

▸ **InstantiateContract2**<`I`\>(`object`): `Object`

MsgInstantiateContract2 message creator
Creates a new smart contract instance for the given code id with a predictable address

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `admin?`: `string` ; `codeId?`: `number` ; `fixMsg?`: `boolean` ; `funds?`: { denom?: string; amount?: string; }[] ; `label?`: `string` ; `msg?`: `Uint8Array` ; `salt?`: `Uint8Array` ; `sender?`: `string`  } & { `admin?`: `string` ; `codeId?`: `number` ; `fixMsg?`: `boolean` ; `funds?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `label?`: `string` ; `msg?`: `Uint8Array` ; `salt?`: `Uint8Array` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgInstantiateContract2 message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgInstantiateContract2`](internal_.md#msginstantiatecontract2) |

#### Defined in

[src/wasm/v1/index.ts:147](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L147)

___

### MigrateContract

▸ **MigrateContract**<`I`\>(`object`): `Object`

MsgMigrateContract message creator
 Runs a code upgrade/ downgrade for a smart contract

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `codeId?`: `number` ; `contract?`: `string` ; `msg?`: `Uint8Array` ; `sender?`: `string`  } & { `codeId?`: `number` ; `contract?`: `string` ; `msg?`: `Uint8Array` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgMigrateContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMigrateContract`](internal_.md#msgmigratecontract) |

#### Defined in

[src/wasm/v1/index.ts:207](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L207)

___

### PinCodes

▸ **PinCodes**<`I`\>(`object`): `Object`

MsgPinCodes message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `codeIds?`: `number`[]  } & { `authority?`: `string` ; `codeIds?`: `number`[] & `number`[] & { [K in string \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgPinCodes message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgPinCodes`](internal_.md#msgpincodes) |

#### Defined in

[src/wasm/v1/index.ts:58](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L58)

___

### StoreAndInstantiateContract

▸ **StoreAndInstantiateContract**<`I`\>(`object`): `Object`

MsgStoreAndInstantiateContract message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `admin?`: `string` ; `authority?`: `string` ; `builder?`: `string` ; `codeHash?`: `Uint8Array` ; `funds?`: { denom?: string; amount?: string; }[] ; `instantiatePermission?`: { permission?: AccessType; address?: string; addresses?: string[]; } ; `label?`: `string` ; `msg?`: `Uint8Array` ; `source?`: `string` ; `unpinCode?`: `boolean` ; `wasmByteCode?`: `Uint8Array`  } & { `admin?`: `string` ; `authority?`: `string` ; `builder?`: `string` ; `codeHash?`: `Uint8Array` ; `funds?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `instantiatePermission?`: { `address?`: `string` ; `addresses?`: `string`[] ; `permission?`: [`AccessType`](../enums/internal_.AccessType.md)  } & { permission?: AccessType; address?: string; addresses?: string[] & string[] & { [K in Exclude<keyof I["instantiatePermission"]["addresses"], keyof string[]\>]: never; }; } & { [K in string \| number \| symbol]: never } ; `label?`: `string` ; `msg?`: `Uint8Array` ; `source?`: `string` ; `unpinCode?`: `boolean` ; `wasmByteCode?`: `Uint8Array`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgStoreAndInstantiateContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgStoreAndInstantiateContract`](internal_.md#msgstoreandinstantiatecontract) |

#### Defined in

[src/wasm/v1/index.ts:30](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L30)

___

### StoreCode

▸ **StoreCode**<`I`\>(`object`): `Object`

MsgStoreCode message creator
Submit Wasm code to the system

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `instantiatePermission?`: { permission?: AccessType; address?: string; addresses?: string[]; } ; `sender?`: `string` ; `wasmByteCode?`: `Uint8Array`  } & { `instantiatePermission?`: { `address?`: `string` ; `addresses?`: `string`[] ; `permission?`: [`AccessType`](../enums/internal_.AccessType.md)  } & { permission?: AccessType; address?: string; addresses?: string[] & string[] & { [K in Exclude<keyof I["instantiatePermission"]["addresses"], keyof string[]\>]: never; }; } & { [K in string \| number \| symbol]: never } ; `sender?`: `string` ; `wasmByteCode?`: `Uint8Array`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgStoreCode message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgStoreCode`](internal_.md#msgstorecode) |

#### Defined in

[src/wasm/v1/index.ts:116](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L116)

___

### SudoContract

▸ **SudoContract**<`I`\>(`object`): `Object`

MsgSudoContract message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `contract?`: `string` ; `msg?`: `Uint8Array`  } & { `authority?`: `string` ; `contract?`: `string` ; `msg?`: `Uint8Array`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgSudoContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSudoContract`](internal_.md#msgsudocontract) |

#### Defined in

[src/wasm/v1/index.ts:72](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L72)

___

### UnpinCodes

▸ **UnpinCodes**<`I`\>(`object`): `Object`

MsgUnpinCodes message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `codeIds?`: `number`[]  } & { `authority?`: `string` ; `codeIds?`: `number`[] & `number`[] & { [K in string \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgUnpinCodes message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUnpinCodes`](internal_.md#msgunpincodes) |

#### Defined in

[src/wasm/v1/index.ts:44](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L44)

___

### UpdateAdmin

▸ **UpdateAdmin**<`I`\>(`object`): `Object`

MsgUpdateAdmin message creator
Sets a new admin for a smart contract

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `contract?`: `string` ; `newAdmin?`: `string` ; `sender?`: `string`  } & { `contract?`: `string` ; `newAdmin?`: `string` ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgUpdateAdmin message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateAdmin`](internal_.md#msgupdateadmin) |

#### Defined in

[src/wasm/v1/index.ts:177](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L177)

___

### UpdateInstantiateConfig

▸ **UpdateInstantiateConfig**<`I`\>(`object`): `Object`

MsgUpdateInstantiateConfig message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `codeId?`: `number` ; `newInstantiatePermission?`: { permission?: AccessType; address?: string; addresses?: string[]; } ; `sender?`: `string`  } & { `codeId?`: `number` ; `newInstantiatePermission?`: { `address?`: `string` ; `addresses?`: `string`[] ; `permission?`: [`AccessType`](../enums/internal_.AccessType.md)  } & { permission?: AccessType; address?: string; addresses?: string[] & string[] & { [K in Exclude<keyof I["newInstantiatePermission"]["addresses"], keyof string[]\>]: never; }; } & { [K in string \| number \| symbol]: never } ; `sender?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgUpdateInstantiateConfig message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateInstantiateConfig`](internal_.md#msgupdateinstantiateconfig) |

#### Defined in

[src/wasm/v1/index.ts:100](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L100)

___

### UpdateParams

▸ **UpdateParams**<`I`\>(`object`): `Object`

MsgUpdateParams message creator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `authority?`: `string` ; `params?`: { codeUploadAccess?: { permission?: AccessType; address?: string; addresses?: string[]; }; instantiateDefaultPermission?: AccessType; }  } & { `authority?`: `string` ; `params?`: { `codeUploadAccess?`: { permission?: AccessType; address?: string; addresses?: string[]; } ; `instantiateDefaultPermission?`: [`AccessType`](../enums/internal_.AccessType.md)  } & { codeUploadAccess?: { permission?: AccessType; address?: string; addresses?: string[]; } & { permission?: AccessType; address?: string; addresses?: string[] & string[] & { [K in Exclude<...\>]: never; }; } & { [K in Exclude<...\>]: never; }; instantiateDefaultPermission?: AccessType; } & { [K in string \| number \| symbol]: never }  } & { [K in string \| number \| symbol]: never } |

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
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams-3) |

#### Defined in

[src/wasm/v1/index.ts:86](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/wasm/v1/index.ts#L86)
