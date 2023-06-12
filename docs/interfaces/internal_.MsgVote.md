[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgVote

# Interface: MsgVote

[<internal>](../modules/internal_.md).MsgVote

MsgVote defines a message to cast a vote.

## Table of contents

### Properties

- [option](internal_.MsgVote.md#option)
- [proposalId](internal_.MsgVote.md#proposalid)
- [voter](internal_.MsgVote.md#voter)

## Properties

### option

• **option**: [`VoteOption`](../enums/internal_.VoteOption.md)

option defines the vote option.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:41](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/gov/v1beta1/tx.ts#L41)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:37](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/gov/v1beta1/tx.ts#L37)

___

### voter

• **voter**: `string`

voter is the voter address for the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:39](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/gov/v1beta1/tx.ts#L39)
