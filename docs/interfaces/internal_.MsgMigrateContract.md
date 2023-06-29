[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgMigrateContract

# Interface: MsgMigrateContract

[<internal>](../modules/internal_.md).MsgMigrateContract

MsgMigrateContract runs a code upgrade/ downgrade for a smart contract

## Table of contents

### Properties

- [codeId](internal_.MsgMigrateContract.md#codeid)
- [contract](internal_.MsgMigrateContract.md#contract)
- [msg](internal_.MsgMigrateContract.md#msg)
- [sender](internal_.MsgMigrateContract.md#sender)

## Properties

### codeId

• **codeId**: `number`

CodeID references the new WASM code

#### Defined in

[src/wasm/v1/tx.ts:116](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/wasm/v1/tx.ts#L116)

___

### contract

• **contract**: `string`

Contract is the address of the smart contract

#### Defined in

[src/wasm/v1/tx.ts:114](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/wasm/v1/tx.ts#L114)

___

### msg

• **msg**: `Uint8Array`

Msg json encoded message to be passed to the contract on migration

#### Defined in

[src/wasm/v1/tx.ts:118](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/wasm/v1/tx.ts#L118)

___

### sender

• **sender**: `string`

Sender is the that actor that signed the messages

#### Defined in

[src/wasm/v1/tx.ts:112](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/wasm/v1/tx.ts#L112)
