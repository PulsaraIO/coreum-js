[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgSudoContract

# Interface: MsgSudoContract

[<internal>](../modules/internal_.md).MsgSudoContract

MsgSudoContract is the MsgSudoContract request type.

Since: 0.40

## Table of contents

### Properties

- [authority](internal_.MsgSudoContract.md#authority)
- [contract](internal_.MsgSudoContract.md#contract)
- [msg](internal_.MsgSudoContract.md#msg)

## Properties

### authority

• **authority**: `string`

Authority is the address of the governance account.

#### Defined in

[src/wasm/v1/tx.ts:198](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L198)

___

### contract

• **contract**: `string`

Contract is the address of the smart contract

#### Defined in

[src/wasm/v1/tx.ts:200](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L200)

___

### msg

• **msg**: `Uint8Array`

Msg json encoded message to be passed to the contract as sudo

#### Defined in

[src/wasm/v1/tx.ts:202](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/wasm/v1/tx.ts#L202)
