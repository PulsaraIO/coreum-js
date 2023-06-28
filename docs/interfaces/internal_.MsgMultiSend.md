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

• **inputs**: `Input`[]

Inputs, despite being `repeated`, only allows one sender input. This is
checked in MsgMultiSend's ValidateBasic.

#### Defined in

src/types/msgs.ts:586

___

### outputs

• **outputs**: `Output`[]

#### Defined in

src/types/msgs.ts:587
