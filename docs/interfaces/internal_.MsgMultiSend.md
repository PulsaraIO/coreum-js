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

[src/types/msgs.ts:586](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L586)

___

### outputs

• **outputs**: `Output`[]

#### Defined in

[src/types/msgs.ts:587](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/types/msgs.ts#L587)
