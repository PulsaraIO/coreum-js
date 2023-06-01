[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Proposal

# Interface: Proposal

[<internal>](../modules/internal_.md).Proposal

Proposal defines the core field members of a governance proposal.

## Table of contents

### Properties

- [content](internal_.Proposal.md#content)
- [depositEndTime](internal_.Proposal.md#depositendtime)
- [finalTallyResult](internal_.Proposal.md#finaltallyresult)
- [proposalId](internal_.Proposal.md#proposalid)
- [status](internal_.Proposal.md#status)
- [submitTime](internal_.Proposal.md#submittime)
- [totalDeposit](internal_.Proposal.md#totaldeposit)
- [votingEndTime](internal_.Proposal.md#votingendtime)
- [votingStartTime](internal_.Proposal.md#votingstarttime)

## Properties

### content

• **content**: [`Any`](../modules/internal_.md#any)

content is the proposal's content.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:188](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L188)

___

### depositEndTime

• **depositEndTime**: `Date`

deposit_end_time is the end time for deposition.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:200](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L200)

___

### finalTallyResult

• **finalTallyResult**: [`TallyResult`](../modules/internal_.md#tallyresult)

final_tally_result is the final tally result of the proposal. When
querying a proposal via gRPC, this field is not populated until the
proposal's voting period has ended.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:196](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L196)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:186](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L186)

___

### status

• **status**: [`ProposalStatus`](../enums/internal_.ProposalStatus.md)

status defines the proposal status.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:190](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L190)

___

### submitTime

• **submitTime**: `Date`

submit_time is the time of proposal submission.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:198](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L198)

___

### totalDeposit

• **totalDeposit**: [`Coin`](../modules/internal_.md#coin)[]

total_deposit is the total deposit on the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:202](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L202)

___

### votingEndTime

• **votingEndTime**: `Date`

voting_end_time is the end time of voting on a proposal.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:206](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L206)

___

### votingStartTime

• **votingStartTime**: `Date`

voting_start_time is the starting time to vote on a proposal.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:204](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L204)
