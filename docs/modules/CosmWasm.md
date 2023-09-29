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

▸ **ClearAdmin**(`object`): `Object`

MsgClearAdmin message creator
Removes any admin stored for a smart contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgClearAdmin`](internal_.md#msgclearadmin) | Represents the properties available for this MsgClearAdmin message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgClearAdmin`](internal_.md#msgclearadmin) |

#### Defined in

[src/wasm/v1/index.ts:198](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L198)

___

### ExecuteContract

▸ **ExecuteContract**(`object`): `Object`

MsgExecuteContract message creator
Submits the given message data to a smart contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgExecuteContract`](internal_.md#msgexecutecontract) | Represents the properties available for this MsgExecuteContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgExecuteContract`](internal_.md#msgexecutecontract) |

#### Defined in

[src/wasm/v1/index.ts:224](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L224)

___

### InstantiateContract

▸ **InstantiateContract**(`object`): `Object`

MsgInstantiateContract message creator
Creates a new smart contract instance for the given code id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgInstantiateContract`](internal_.md#msginstantiatecontract) | Represents the properties available for this MsgInstantiateContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgInstantiateContract`](internal_.md#msginstantiatecontract) |

#### Defined in

[src/wasm/v1/index.ts:170](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L170)

___

### InstantiateContract2

▸ **InstantiateContract2**(`object`): `Object`

MsgInstantiateContract2 message creator
Creates a new smart contract instance for the given code id with a predictable address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgInstantiateContract2`](internal_.md#msginstantiatecontract2) | Represents the properties available for this MsgInstantiateContract2 message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgInstantiateContract2`](internal_.md#msginstantiatecontract2) |

#### Defined in

[src/wasm/v1/index.ts:183](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L183)

___

### MigrateContract

▸ **MigrateContract**(`object`): `Object`

MsgMigrateContract message creator
 Runs a code upgrade/ downgrade for a smart contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgMigrateContract`](internal_.md#msgmigratecontract) | Represents the properties available for this MsgMigrateContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMigrateContract`](internal_.md#msgmigratecontract) |

#### Defined in

[src/wasm/v1/index.ts:237](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L237)

___

### PinCodes

▸ **PinCodes**(`object`): `Object`

MsgPinCodes message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgPinCodes`](internal_.md#msgpincodes) | Represents the properties available for this MsgPinCodes message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgPinCodes`](internal_.md#msgpincodes) |

#### Defined in

[src/wasm/v1/index.ts:104](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L104)

___

### StoreAndInstantiateContract

▸ **StoreAndInstantiateContract**(`object`): `Object`

MsgStoreAndInstantiateContract message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgStoreAndInstantiateContract`](internal_.md#msgstoreandinstantiatecontract) | Represents the properties available for this MsgStoreAndInstantiateContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgStoreAndInstantiateContract`](internal_.md#msgstoreandinstantiatecontract) |

#### Defined in

[src/wasm/v1/index.ts:78](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L78)

___

### StoreCode

▸ **StoreCode**(`object`): `Object`

MsgStoreCode message creator
Submit Wasm code to the system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgStoreCode`](internal_.md#msgstorecode) | Represents the properties available for this MsgStoreCode message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgStoreCode`](internal_.md#msgstorecode) |

#### Defined in

[src/wasm/v1/index.ts:156](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L156)

___

### SudoContract

▸ **SudoContract**(`object`): `Object`

MsgSudoContract message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSudoContract`](internal_.md#msgsudocontract) | Represents the properties available for this MsgSudoContract message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSudoContract`](internal_.md#msgsudocontract) |

#### Defined in

[src/wasm/v1/index.ts:116](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L116)

___

### UnpinCodes

▸ **UnpinCodes**(`object`): `Object`

MsgUnpinCodes message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUnpinCodes`](internal_.md#msgunpincodes) | Represents the properties available for this MsgUnpinCodes message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUnpinCodes`](internal_.md#msgunpincodes) |

#### Defined in

[src/wasm/v1/index.ts:92](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L92)

___

### UpdateAdmin

▸ **UpdateAdmin**(`object`): `Object`

MsgUpdateAdmin message creator
Sets a new admin for a smart contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUpdateAdmin`](internal_.md#msgupdateadmin) | Represents the properties available for this MsgUpdateAdmin message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateAdmin`](internal_.md#msgupdateadmin) |

#### Defined in

[src/wasm/v1/index.ts:211](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L211)

___

### UpdateInstantiateConfig

▸ **UpdateInstantiateConfig**(`object`): `Object`

MsgUpdateInstantiateConfig message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUpdateInstantiateConfig`](internal_.md#msgupdateinstantiateconfig) | Represents the properties available for this MsgUpdateInstantiateConfig message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateInstantiateConfig`](internal_.md#msgupdateinstantiateconfig) |

#### Defined in

[src/wasm/v1/index.ts:140](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L140)

___

### UpdateParams

▸ **UpdateParams**(`object`): `Object`

MsgUpdateParams message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUpdateParams`](internal_.md#msgupdateparams-3) | Represents the properties available for this MsgUpdateParams message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams-3) |

#### Defined in

[src/wasm/v1/index.ts:128](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/wasm/v1/index.ts#L128)
