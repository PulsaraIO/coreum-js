[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgExecuteContract

# Interface: MsgExecuteContract

[<internal>](../modules/internal_.md).MsgExecuteContract

MsgExecuteContract submits the given message data to a smart contract

## Table of contents

### Properties

- [contract](internal_.MsgExecuteContract.md#contract)
- [funds](internal_.MsgExecuteContract.md#funds)
- [msg](internal_.MsgExecuteContract.md#msg)
- [sender](internal_.MsgExecuteContract.md#sender)

## Properties

### contract

• **contract**: `string`

Contract is the address of the smart contract

#### Defined in

[src/wasm/v1/tx.ts:96](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/wasm/v1/tx.ts#L96)

___

### funds

• **funds**: [`Coin`](../modules/internal_.md#coin)[]

Funds coins that are transferred to the contract on execution

#### Defined in

[src/wasm/v1/tx.ts:100](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/wasm/v1/tx.ts#L100)

___

### msg

• **msg**: `Uint8Array`

Msg json encoded message to be passed to the contract

#### Defined in

[src/wasm/v1/tx.ts:98](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/wasm/v1/tx.ts#L98)

___

### sender

• **sender**: `string`

Sender is the that actor that signed the messages

#### Defined in

[src/wasm/v1/tx.ts:94](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/wasm/v1/tx.ts#L94)
