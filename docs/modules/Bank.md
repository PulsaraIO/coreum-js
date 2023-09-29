[coreum-js](../README.md) / [Exports](../modules.md) / Bank

# Namespace: Bank

Module to generate the Messages related to the Bank module of the Blockchain

## Table of contents

### Functions

- [MultiSend](Bank.md#multisend)
- [Send](Bank.md#send)
- [SetSendEnabled](Bank.md#setsendenabled)
- [UpdateParams](Bank.md#updateparams)

## Functions

### MultiSend

▸ **MultiSend**(`object`): `Object`

MsgMultiSend message creator
Defines a method for sending coins from some accounts to other accounts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgMultiSend`](../interfaces/internal_.MsgMultiSend.md) | Represents the properties available for this MsgMultiSend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgMultiSend`](internal_.md#msgmultisend) |

#### Defined in

[src/cosmos/index.ts:311](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L311)

___

### Send

▸ **Send**(`object`): `Object`

MsgSend message creator
Defines a method for sending coins from one account to another account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSend`](../interfaces/internal_.MsgSend-2.md) | Represents the properties available for this MsgSend message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSend`](internal_.md#msgsend-1) |

#### Defined in

[src/cosmos/index.ts:324](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L324)

___

### SetSendEnabled

▸ **SetSendEnabled**(`object`): `Object`

MsgSetSendEnabled message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSetSendEnabled`](../interfaces/internal_.MsgSetSendEnabled.md) | Represents the properties available for this MsgSetSendEnabled message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSetSendEnabled`](internal_.md#msgsetsendenabled) |

#### Defined in

[src/cosmos/index.ts:336](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L336)

___

### UpdateParams

▸ **UpdateParams**(`object`): `Object`

MsgUpdateParams message creator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgUpdateParams`](../interfaces/internal_.MsgUpdateParams-2.md) | Represents the properties available for this MsgUpdateParams message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgUpdateParams`](internal_.md#msgupdateparams-1) |

#### Defined in

[src/cosmos/index.ts:348](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L348)
