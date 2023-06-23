[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgStoreCode

# Interface: MsgStoreCode

[<internal>](../modules/internal_.md).MsgStoreCode

MsgStoreCode submit Wasm code to the system

## Table of contents

### Properties

- [instantiatePermission](internal_.MsgStoreCode.md#instantiatepermission)
- [sender](internal_.MsgStoreCode.md#sender)
- [wasmByteCode](internal_.MsgStoreCode.md#wasmbytecode)

## Properties

### instantiatePermission

• **instantiatePermission**: [`AccessConfig`](../modules/internal_.md#accessconfig)

InstantiatePermission access control to apply on contract creation,
optional

#### Defined in

[src/wasm/v1/tx.ts:19](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/wasm/v1/tx.ts#L19)

___

### sender

• **sender**: `string`

Sender is the actor that signed the messages

#### Defined in

[src/wasm/v1/tx.ts:12](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/wasm/v1/tx.ts#L12)

___

### wasmByteCode

• **wasmByteCode**: `Uint8Array`

WASMByteCode can be raw or gzip compressed

#### Defined in

[src/wasm/v1/tx.ts:14](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/wasm/v1/tx.ts#L14)
