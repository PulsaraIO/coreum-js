[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / WeightedVoteOption

# Interface: WeightedVoteOption

[<internal>](../modules/internal_.md).WeightedVoteOption

WeightedVoteOption defines a unit of vote for vote split.

Since: cosmos-sdk 0.43

## Table of contents

### Properties

- [option](internal_.WeightedVoteOption.md#option)
- [weight](internal_.WeightedVoteOption.md#weight)

## Properties

### option

• **option**: [`VoteOption`](../enums/internal_.VoteOption.md)

option defines the valid vote options, it must not contain duplicate vote options.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:154](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/gov/v1beta1/gov.ts#L154)

___

### weight

• **weight**: `string`

weight is the vote weight associated with the vote option.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:156](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/gov/v1beta1/gov.ts#L156)
