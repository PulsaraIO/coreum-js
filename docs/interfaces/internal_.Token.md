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

[src/coreum/asset/ft/v1/token.ts:78](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L78)

___

### denom

• **denom**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:66](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L66)

___

### description

• **description**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:71](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L71)

___

### features

• **features**: [`Feature`](../enums/Feature.md)[]

#### Defined in

[src/coreum/asset/ft/v1/token.ts:73](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L73)

___

### globallyFrozen

• **globallyFrozen**: `boolean`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:72](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L72)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:67](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L67)

___

### precision

• **precision**: `number`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:70](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L70)

___

### sendCommissionRate

• **sendCommissionRate**: `string`

send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
amount sent to the token issuer account.

#### Defined in

[src/coreum/asset/ft/v1/token.ts:83](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L83)

___

### subunit

• **subunit**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:69](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L69)

___

### symbol

• **symbol**: `string`

#### Defined in

[src/coreum/asset/ft/v1/token.ts:68](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/coreum/asset/ft/v1/token.ts#L68)
