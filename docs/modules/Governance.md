[coreum-js](../README.md) / [Exports](../modules.md) / Governance

# Namespace: Governance

Module to generate the Messages related to the Governance module of the Blockchain

## Table of contents

### Functions

- [Deposit](Governance.md#deposit)
- [SubmitProposal](Governance.md#submitproposal)
- [Vote](Governance.md#vote)
- [VoteWeighted](Governance.md#voteweighted)

## Functions

### Deposit

▸ **Deposit**(`object`): `Object`

MsgDeposit message creator
Defines a method to add deposit on a specific proposal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgDeposit`](../interfaces/internal_.MsgDeposit.md) | Represents the properties available for this MsgDeposit message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgDeposit`](internal_.md#msgdeposit) |

#### Defined in

[src/cosmos/index.ts:217](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/index.ts#L217)

___

### SubmitProposal

▸ **SubmitProposal**(`object`): `Object`

MsgSubmitProposal message creator
Defines a method to create new proposal given a content.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgSubmitProposal`](../interfaces/internal_.MsgSubmitProposal.md) | Represents the properties available for this MsgSubmitProposal message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSubmitProposal`](internal_.md#msgsubmitproposal) |

#### Defined in

[src/cosmos/index.ts:230](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/index.ts#L230)

___

### Vote

▸ **Vote**(`object`): `Object`

MsgVote message creator
Defines a method to add a vote on a specific proposal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgVote`](../interfaces/internal_.MsgVote.md) | Represents the properties available for this MsgVote message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgVote`](internal_.md#msgvote) |

#### Defined in

[src/cosmos/index.ts:243](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/index.ts#L243)

___

### VoteWeighted

▸ **VoteWeighted**(`object`): `Object`

MsgVoteWeighted message creator
Defines a method to add a weighted vote on a specific proposal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`MsgVoteWeighted`](../interfaces/internal_.MsgVoteWeighted.md) | Represents the properties available for this MsgVoteWeighted message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgVoteWeighted`](internal_.md#msgvoteweighted) |

#### Defined in

[src/cosmos/index.ts:256](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/index.ts#L256)
