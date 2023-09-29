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

[src/cosmos/index.ts:219](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L219)

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

[src/cosmos/index.ts:232](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L232)

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

[src/cosmos/index.ts:245](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L245)

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

[src/cosmos/index.ts:258](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/index.ts#L258)
