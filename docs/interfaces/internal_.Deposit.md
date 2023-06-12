[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Deposit

# Interface: Deposit

[<internal>](../modules/internal_.md).Deposit

Deposit defines an amount deposited by an account address to an active
proposal.

## Table of contents

### Properties

- [amount](internal_.Deposit.md#amount)
- [depositor](internal_.Deposit.md#depositor)
- [proposalId](internal_.Deposit.md#proposalid)

## Properties

### amount

• **amount**: [`Coin`](../modules/internal_.md#coin)[]

amount to be deposited by depositor.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:180](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/gov/v1beta1/gov.ts#L180)

___

### depositor

• **depositor**: `string`

depositor defines the deposit addresses from the proposals.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:178](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/gov/v1beta1/gov.ts#L178)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:176](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/gov/v1beta1/gov.ts#L176)
