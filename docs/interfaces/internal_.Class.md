[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Class

# Interface: Class

[<internal>](../modules/internal_.md).Class

Class is a full representation of the non-fungible token class.

## Table of contents

### Properties

- [data](internal_.Class.md#data)
- [description](internal_.Class.md#description)
- [features](internal_.Class.md#features)
- [id](internal_.Class.md#id)
- [issuer](internal_.Class.md#issuer)
- [name](internal_.Class.md#name)
- [royaltyRate](internal_.Class.md#royaltyrate)
- [symbol](internal_.Class.md#symbol)
- [uri](internal_.Class.md#uri)
- [uriHash](internal_.Class.md#urihash)

## Properties

### data

• `Optional` **data**: [`Any`](../modules/internal_.md#any)

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:76](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L76)

___

### description

• **description**: `string`

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:73](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L73)

___

### features

• **features**: [`ClassFeature`](../enums/internal_.ClassFeature.md)[]

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:77](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L77)

___

### id

• **id**: `string`

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:69](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L69)

___

### issuer

• **issuer**: `string`

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:70](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L70)

___

### name

• **name**: `string`

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:71](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L71)

___

### royaltyRate

• **royaltyRate**: `string`

royalty_rate is a number between 0 and 1,which will be used in coreum native Dex.
whenever an NFT this class is traded on the Dex, the traded amount will be multiplied by this value
that will be transferred to the issuer of the NFT.

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:83](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L83)

___

### symbol

• **symbol**: `string`

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:72](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L72)

___

### uri

• **uri**: `string`

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:74](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L74)

___

### uriHash

• **uriHash**: `string`

#### Defined in

[src/coreum/asset/nft/v1/nft.ts:75](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/asset/nft/v1/nft.ts#L75)
