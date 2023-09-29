[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgIssue

# Interface: MsgIssue

[<internal>](../modules/internal_.md).MsgIssue

## Table of contents

### Properties

- [burnRate](internal_.MsgIssue.md#burnrate)
- [description](internal_.MsgIssue.md#description)
- [features](internal_.MsgIssue.md#features)
- [initialAmount](internal_.MsgIssue.md#initialamount)
- [issuer](internal_.MsgIssue.md#issuer)
- [precision](internal_.MsgIssue.md#precision)
- [sendCommissionRate](internal_.MsgIssue.md#sendcommissionrate)
- [subunit](internal_.MsgIssue.md#subunit)
- [symbol](internal_.MsgIssue.md#symbol)

## Properties

### burnRate

• `Optional` **burnRate**: `string`

burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
burn_amount. This value will be burnt on top of the send amount.

#### Defined in

[src/types/msgs.ts:42](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L42)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/types/msgs.ts:36](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L36)

___

### features

• `Optional` **features**: [`Feature`](../enums/Feature.md)[]

#### Defined in

[src/types/msgs.ts:37](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L37)

___

### initialAmount

• **initialAmount**: `string`

#### Defined in

[src/types/msgs.ts:35](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L35)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/types/msgs.ts:31](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L31)

___

### precision

• **precision**: `number`

#### Defined in

[src/types/msgs.ts:34](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L34)

___

### sendCommissionRate

• `Optional` **sendCommissionRate**: `string`

send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
amount sent to the token issuer account.

#### Defined in

[src/types/msgs.ts:47](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L47)

___

### subunit

• **subunit**: `string`

#### Defined in

[src/types/msgs.ts:33](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L33)

___

### symbol

• **symbol**: `string`

#### Defined in

[src/types/msgs.ts:32](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L32)
