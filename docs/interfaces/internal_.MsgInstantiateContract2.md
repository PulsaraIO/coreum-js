[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgInstantiateContract2

# Interface: MsgInstantiateContract2

[<internal>](../modules/internal_.md).MsgInstantiateContract2

MsgInstantiateContract2 create a new smart contract instance for the given
code id with a predicable address.

## Table of contents

### Properties

- [admin](internal_.MsgInstantiateContract2.md#admin)
- [codeId](internal_.MsgInstantiateContract2.md#codeid)
- [fixMsg](internal_.MsgInstantiateContract2.md#fixmsg)
- [funds](internal_.MsgInstantiateContract2.md#funds)
- [label](internal_.MsgInstantiateContract2.md#label)
- [msg](internal_.MsgInstantiateContract2.md#msg)
- [salt](internal_.MsgInstantiateContract2.md#salt)
- [sender](internal_.MsgInstantiateContract2.md#sender)

## Properties

### admin

• **admin**: `string`

Admin is an optional address that can execute migrations

#### Defined in

[src/wasm/v1/tx.ts:65](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L65)

___

### codeId

• **codeId**: `number`

CodeID is the reference to the stored WASM code

#### Defined in

[src/wasm/v1/tx.ts:67](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L67)

___

### fixMsg

• **fixMsg**: `boolean`

FixMsg include the msg value into the hash for the predictable address.
Default is false

#### Defined in

[src/wasm/v1/tx.ts:80](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L80)

___

### funds

• **funds**: [`Coin`](../modules/internal_.md#coin)[]

Funds coins that are transferred to the contract on instantiation

#### Defined in

[src/wasm/v1/tx.ts:73](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L73)

___

### label

• **label**: `string`

Label is optional metadata to be stored with a contract instance.

#### Defined in

[src/wasm/v1/tx.ts:69](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L69)

___

### msg

• **msg**: `Uint8Array`

Msg json encoded message to be passed to the contract on instantiation

#### Defined in

[src/wasm/v1/tx.ts:71](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L71)

___

### salt

• **salt**: `Uint8Array`

Salt is an arbitrary value provided by the sender. Size can be 1 to 64.

#### Defined in

[src/wasm/v1/tx.ts:75](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L75)

___

### sender

• **sender**: `string`

Sender is the that actor that signed the messages

#### Defined in

[src/wasm/v1/tx.ts:63](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/wasm/v1/tx.ts#L63)
