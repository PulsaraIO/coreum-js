[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgInstantiateContract

# Interface: MsgInstantiateContract

[<internal>](../modules/internal_.md).MsgInstantiateContract

MsgInstantiateContract create a new smart contract instance for the given
code id.

## Table of contents

### Properties

- [admin](internal_.MsgInstantiateContract.md#admin)
- [codeId](internal_.MsgInstantiateContract.md#codeid)
- [funds](internal_.MsgInstantiateContract.md#funds)
- [label](internal_.MsgInstantiateContract.md#label)
- [msg](internal_.MsgInstantiateContract.md#msg)
- [sender](internal_.MsgInstantiateContract.md#sender)

## Properties

### admin

• **admin**: `string`

Admin is an optional address that can execute migrations

#### Defined in

[src/wasm/v1/tx.ts:38](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L38)

___

### codeId

• **codeId**: `number`

CodeID is the reference to the stored WASM code

#### Defined in

[src/wasm/v1/tx.ts:40](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L40)

___

### funds

• **funds**: [`Coin`](../modules/internal_.md#coin)[]

Funds coins that are transferred to the contract on instantiation

#### Defined in

[src/wasm/v1/tx.ts:46](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L46)

___

### label

• **label**: `string`

Label is optional metadata to be stored with a contract instance.

#### Defined in

[src/wasm/v1/tx.ts:42](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L42)

___

### msg

• **msg**: `Uint8Array`

Msg json encoded message to be passed to the contract on instantiation

#### Defined in

[src/wasm/v1/tx.ts:44](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L44)

___

### sender

• **sender**: `string`

Sender is the that actor that signed the messages

#### Defined in

[src/wasm/v1/tx.ts:36](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L36)
