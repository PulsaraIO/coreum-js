[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgMultiSend

# Interface: MsgMultiSend

[<internal>](../modules/internal_.md).MsgMultiSend

MsgMultiSend represents an arbitrary multi-in, multi-out send message.

## Table of contents

### Properties

- [inputs](internal_.MsgMultiSend.md#inputs)
- [outputs](internal_.MsgMultiSend.md#outputs)

## Properties

### inputs

• **inputs**: [`Input`](../modules/internal_.md#input)[]

Inputs, despite being `repeated`, only allows one sender input. This is
checked in MsgMultiSend's ValidateBasic.

#### Defined in

[src/cosmos/bank/v1beta1/tx.ts:25](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/cosmos/bank/v1beta1/tx.ts#L25)

___

### outputs

• **outputs**: [`Output`](../modules/internal_.md#output)[]

#### Defined in

[src/cosmos/bank/v1beta1/tx.ts:26](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/cosmos/bank/v1beta1/tx.ts#L26)
