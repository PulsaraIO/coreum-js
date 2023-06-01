[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgVoteWeighted

# Interface: MsgVoteWeighted

[<internal>](../modules/internal_.md).MsgVoteWeighted

MsgVoteWeighted defines a message to cast a vote.

Since: cosmos-sdk 0.43

## Table of contents

### Properties

- [options](internal_.MsgVoteWeighted.md#options)
- [proposalId](internal_.MsgVoteWeighted.md#proposalid)
- [voter](internal_.MsgVoteWeighted.md#voter)

## Properties

### options

• **options**: [`WeightedVoteOption`](../modules/internal_.md#weightedvoteoption)[]

options defines the weighted vote options.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:58](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/tx.ts#L58)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:54](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/tx.ts#L54)

___

### voter

• **voter**: `string`

voter is the voter address for the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:56](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/tx.ts#L56)
