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
- [uri](internal_.Token.md#uri)
- [uriHash](internal_.Token.md#urihash)
- [version](internal_.Token.md#version)

## Properties

### burnRate

• **burnRate**: `string`

burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
burn_amount. This value will be burnt on top of the send amount.

#### Defined in

[src/coreum/asset/ft/v1/token.ts:99](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L99)

___

### denom

• **denom**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:87](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L87)

___

### description

• **description**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:92](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L92)

___

### features

• **features**: [`Feature`](../enums/Feature.md)[]

#### Defined in

[src/coreum/asset/ft/v1/token.ts:94](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L94)

___

### globallyFrozen

• **globallyFrozen**: `boolean`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:93](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L93)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:88](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L88)

___

### precision

• **precision**: `number`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:91](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L91)

___

### sendCommissionRate

• **sendCommissionRate**: `string`

send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
amount sent to the token issuer account.

#### Defined in

[src/coreum/asset/ft/v1/token.ts:104](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L104)

___

### subunit

• **subunit**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:90](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L90)

___

### symbol

• **symbol**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:89](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L89)

___

### uri

• **uri**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:106](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L106)

___

### uriHash

• **uriHash**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:107](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L107)

___

### version

• **version**: `number`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:105](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/asset/ft/v1/token.ts#L105)
