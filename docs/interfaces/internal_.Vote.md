[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Vote

# Interface: Vote

[<internal>](../modules/internal_.md).Vote

Vote defines a vote on a governance proposal.
A Vote consists of a proposal ID, the voter, and the vote option.

## Table of contents

### Properties

- [option](internal_.Vote.md#option)
- [options](internal_.Vote.md#options)
- [proposalId](internal_.Vote.md#proposalid)
- [voter](internal_.Vote.md#voter)

## Properties

### option

• **option**: [`VoteOption`](../enums/internal_.VoteOption.md)

Deprecated: Prefer to use `options` instead. This field is set in queries
if and only if `len(options) == 1` and that option has weight 1. In all
other cases, this field will default to VOTE_OPTION_UNSPECIFIED.

**`Deprecated`**

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:237](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/gov/v1beta1/gov.ts#L237)

___

### options

• **options**: [`WeightedVoteOption`](../modules/internal_.md#weightedvoteoption)[]

options is the weighted vote options.

Since: cosmos-sdk 0.43

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:243](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/gov/v1beta1/gov.ts#L243)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:227](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/gov/v1beta1/gov.ts#L227)

___

### voter

• **voter**: `string`

voter is the voter address of the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:229](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/gov/v1beta1/gov.ts#L229)
