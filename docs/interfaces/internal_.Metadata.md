[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Metadata

# Interface: Metadata

[<internal>](../modules/internal_.md).Metadata

Metadata represents a struct that describes
a basic token.

## Table of contents

### Properties

- [base](internal_.Metadata.md#base)
- [denomUnits](internal_.Metadata.md#denomunits)
- [description](internal_.Metadata.md#description)
- [display](internal_.Metadata.md#display)
- [name](internal_.Metadata.md#name)
- [symbol](internal_.Metadata.md#symbol)
- [uri](internal_.Metadata.md#uri)
- [uriHash](internal_.Metadata.md#urihash)

## Properties

### base

• **base**: `string`

base represents the base denom (should be the DenomUnit with exponent = 0).

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:82](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L82)

___

### denomUnits

• **denomUnits**: [`DenomUnit`](../modules/internal_.md#denomunit)[]

denom_units represents the list of DenomUnit's for a given coin

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:80](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L80)

___

### description

• **description**: `string`

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:78](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L78)

___

### display

• **display**: `string`

display indicates the suggested denom that should be
displayed in clients.

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:87](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L87)

___

### name

• **name**: `string`

name defines the name of the token (eg: Cosmos Atom)

Since: cosmos-sdk 0.43

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:93](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L93)

___

### symbol

• **symbol**: `string`

symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
be the same as the display.

Since: cosmos-sdk 0.43

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:100](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L100)

___

### uri

• **uri**: `string`

URI to a document (on or off-chain) that contains additional information. Optional.

Since: cosmos-sdk 0.46

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:106](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L106)

___

### uriHash

• **uriHash**: `string`

URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
the document didn't change. Optional.

Since: cosmos-sdk 0.46

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:113](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/bank/v1beta1/bank.ts#L113)
