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

▸ **Deposit**<`I`\>(`object`): `Object`

MsgDeposit message creator
Defines a method to add deposit on a specific proposal.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `amount?`: { denom?: string; amount?: string; }[] ; `depositor?`: `string` ; `proposalId?`: `number`  } & { `amount?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `depositor?`: `string` ; `proposalId?`: `number`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgDeposit message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgDeposit`](internal_.md#msgdeposit) |

#### Defined in

[src/cosmos/index.ts:223](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/cosmos/index.ts#L223)

___

### SubmitProposal

▸ **SubmitProposal**<`I`\>(`object`): `Object`

MsgSubmitProposal message creator
Defines a method to create new proposal given a content.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `content?`: { typeUrl?: string; value?: Uint8Array; } ; `initialDeposit?`: { denom?: string; amount?: string; }[] ; `proposer?`: `string`  } & { `content?`: { `typeUrl?`: `string` ; `value?`: `Uint8Array`  } & { typeUrl?: string; value?: Uint8Array; } & { [K in string \| number \| symbol]: never } ; `initialDeposit?`: { `amount?`: `string` ; `denom?`: `string`  }[] & { `amount?`: `string` ; `denom?`: `string`  } & { denom?: string; amount?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `proposer?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgSubmitProposal message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgSubmitProposal`](internal_.md#msgsubmitproposal) |

#### Defined in

[src/cosmos/index.ts:238](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/cosmos/index.ts#L238)

___

### Vote

▸ **Vote**<`I`\>(`object`): `Object`

MsgVote message creator
Defines a method to add a vote on a specific proposal.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `option?`: [`VoteOption`](../enums/internal_.VoteOption.md) ; `proposalId?`: `number` ; `voter?`: `string`  } & { `option?`: [`VoteOption`](../enums/internal_.VoteOption.md) ; `proposalId?`: `number` ; `voter?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgVote message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgVote`](internal_.md#msgvote) |

#### Defined in

[src/cosmos/index.ts:253](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/cosmos/index.ts#L253)

___

### VoteWeighted

▸ **VoteWeighted**<`I`\>(`object`): `Object`

MsgVoteWeighted message creator
Defines a method to add a weighted vote on a specific proposal.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends { `options?`: { option?: VoteOption; weight?: string; }[] ; `proposalId?`: `number` ; `voter?`: `string`  } & { `options?`: { `option?`: [`VoteOption`](../enums/internal_.VoteOption.md) ; `weight?`: `string`  }[] & { `option?`: [`VoteOption`](../enums/internal_.VoteOption.md) ; `weight?`: `string`  } & { option?: VoteOption; weight?: string; } & { [K in string \| number \| symbol]: never }[] & { [K in string \| symbol]: never } ; `proposalId?`: `number` ; `voter?`: `string`  } & { [K in string \| number \| symbol]: never } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | Represents the properties available for this MsgVoteWeighted message. |

#### Returns

`Object`

A Msg object with the typeUrl and value object for the proper message

| Name | Type |
| :------ | :------ |
| `typeUrl` | `string` |
| `value` | [`MsgVoteWeighted`](internal_.md#msgvoteweighted) |

#### Defined in

[src/cosmos/index.ts:268](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/cosmos/index.ts#L268)
