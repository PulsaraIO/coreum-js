[coreum-js](../README.md) / [Exports](../modules.md) / IBC

# Namespace: IBC

Transaction Module for the IBC Module (wasm)

## Table of contents

### Functions

- [IBCCloseChannel](IBC.md#ibcclosechannel)
- [IBCSend](IBC.md#ibcsend)

## Functions

### IBCCloseChannel

▸ **IBCCloseChannel**(`object`): `Object`

MsgIBCCloseChannel message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgIBCCloseChannel`](internal_.md#msgibcclosechannel) | Represents the properties available for this MsgIBCCloseChannel message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgIBCCloseChannel`](internal_.md#msgibcclosechannel) |

#### Defined in

[src/wasm/v1/index.ts:61](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/wasm/v1/index.ts#L61)

___

### IBCSend

▸ **IBCSend**(`object`): `Object`

MsgIBCSend message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgIBCSend`](internal_.md#msgibcsend) | Represents the properties available for this MsgIBCSend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgIBCSend`](internal_.md#msgibcsend) |

#### Defined in

[src/wasm/v1/index.ts:50](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/wasm/v1/index.ts#L50)
