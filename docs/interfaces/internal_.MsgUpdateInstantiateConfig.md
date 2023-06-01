[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgUpdateInstantiateConfig

# Interface: MsgUpdateInstantiateConfig

[<internal>](../modules/internal_.md).MsgUpdateInstantiateConfig

MsgUpdateInstantiateConfig updates instantiate config for a smart contract

## Table of contents

### Properties

- [codeId](internal_.MsgUpdateInstantiateConfig.md#codeid)
- [newInstantiatePermission](internal_.MsgUpdateInstantiateConfig.md#newinstantiatepermission)
- [sender](internal_.MsgUpdateInstantiateConfig.md#sender)

## Properties

### codeId

• **codeId**: `number`

CodeID references the stored WASM code

#### Defined in

[src/wasm/v1/tx.ts:159](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/wasm/v1/tx.ts#L159)

___

### newInstantiatePermission

• **newInstantiatePermission**: [`AccessConfig`](../modules/internal_.md#accessconfig)

NewInstantiatePermission is the new access control

#### Defined in

[src/wasm/v1/tx.ts:161](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/wasm/v1/tx.ts#L161)

___

### sender

• **sender**: `string`

Sender is the that actor that signed the messages

#### Defined in

[src/wasm/v1/tx.ts:157](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/wasm/v1/tx.ts#L157)
