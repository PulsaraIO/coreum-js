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

• **options**: `WeightedVoteOption`[]

options defines the weighted vote options.

#### Defined in

[src/types/msgs.ts:537](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L537)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/types/msgs.ts:533](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L533)

___

### voter

• **voter**: `string`

voter is the voter address for the proposal.

#### Defined in

[src/types/msgs.ts:535](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L535)
