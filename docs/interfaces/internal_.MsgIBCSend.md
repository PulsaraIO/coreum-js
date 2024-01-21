[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgIBCSend

# Interface: MsgIBCSend

[<internal>](../modules/internal_.md).MsgIBCSend

MsgIBCSend

## Table of contents

### Properties

- [channel](internal_.MsgIBCSend.md#channel)
- [data](internal_.MsgIBCSend.md#data)
- [timeoutHeight](internal_.MsgIBCSend.md#timeoutheight)
- [timeoutTimestamp](internal_.MsgIBCSend.md#timeouttimestamp)

## Properties

### channel

• **channel**: `string`

the channel by which the packet will be sent

#### Defined in

[src/wasm/v1/ibc.ts:10](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/wasm/v1/ibc.ts#L10)

___

### data

• **data**: `Uint8Array`

Data is the payload to transfer. We must not make assumption what format or
content is in here.

#### Defined in

[src/wasm/v1/ibc.ts:25](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/wasm/v1/ibc.ts#L25)

___

### timeoutHeight

• **timeoutHeight**: `number`

Timeout height relative to the current block height.
The timeout is disabled when set to 0.

#### Defined in

[src/wasm/v1/ibc.ts:15](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/wasm/v1/ibc.ts#L15)

___

### timeoutTimestamp

• **timeoutTimestamp**: `number`

Timeout timestamp (in nanoseconds) relative to the current block timestamp.
The timeout is disabled when set to 0.

#### Defined in

[src/wasm/v1/ibc.ts:20](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/wasm/v1/ibc.ts#L20)
