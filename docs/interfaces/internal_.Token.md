[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Token

# Interface: Token

[<internal>](../modules/internal_.md).Token

Token is a full representation of the fungible token.

## Table of contents

### Properties

- [burnRate](internal_.Token.md#burnrate)
- [denom](internal_.Token.md#denom)
- [description](internal_.Token.md#description)
- [features](internal_.Token.md#features)
- [globallyFrozen](internal_.Token.md#globallyfrozen)
- [issuer](internal_.Token.md#issuer)
- [precision](internal_.Token.md#precision)
- [sendCommissionRate](internal_.Token.md#sendcommissionrate)
- [subunit](internal_.Token.md#subunit)
- [symbol](internal_.Token.md#symbol)

## Properties

### burnRate

• **burnRate**: `string`

burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
burn_amount. This value will be burnt on top of the send amount.

#### Defined in

[src/coreum/asset/ft/v1/token.ts:84](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L84)

___

### denom

• **denom**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:72](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L72)

___

### description

• **description**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:77](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L77)

___

### features

• **features**: [`Feature`](../enums/internal_.Feature.md)[]

#### Defined in

[src/coreum/asset/ft/v1/token.ts:79](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L79)

___

### globallyFrozen

• **globallyFrozen**: `boolean`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:78](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L78)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:73](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L73)

___

### precision

• **precision**: `number`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:76](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L76)

___

### sendCommissionRate

• **sendCommissionRate**: `string`

send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
amount sent to the token issuer account.

#### Defined in

[src/coreum/asset/ft/v1/token.ts:89](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L89)

___

### subunit

• **subunit**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:75](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L75)

___

### symbol

• **symbol**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:74](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/asset/ft/v1/token.ts#L74)
