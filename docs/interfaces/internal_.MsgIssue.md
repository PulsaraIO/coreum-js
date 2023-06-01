[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgIssue

# Interface: MsgIssue

[<internal>](../modules/internal_.md).MsgIssue

MsgIssue defines message to issue new fungible token.

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

• **burnRate**: `string`

burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
burn_amount. This value will be burnt on top of the send amount.

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:22](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L22)

___

### description

• **description**: `string`

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:16](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L16)

___

### features

• **features**: [`Feature`](../enums/internal_.Feature.md)[]

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:17](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L17)

___

### initialAmount

• **initialAmount**: `string`

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:15](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L15)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:11](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L11)

___

### precision

• **precision**: `number`

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:14](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L14)

___

### sendCommissionRate

• **sendCommissionRate**: `string`

send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
amount sent to the token issuer account.

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:27](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L27)

___

### subunit

• **subunit**: `string`

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:13](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L13)

___

### symbol

• **symbol**: `string`

#### Defined in

[src/coreum/asset/ft/v1/tx.ts:12](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/tx.ts#L12)
