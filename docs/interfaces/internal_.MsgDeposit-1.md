[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgDeposit

# Interface: MsgDeposit

[<internal>](../modules/internal_.md).MsgDeposit

MsgDeposit defines a message to submit a deposit to an existing proposal.

## Table of contents

### Properties

- [amount](internal_.MsgDeposit-1.md#amount)
- [depositor](internal_.MsgDeposit-1.md#depositor)
- [proposalId](internal_.MsgDeposit-1.md#proposalid)

## Properties

### amount

• **amount**: [`Coin`](../modules/internal_.md#coin)[]

amount to be deposited by depositor.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:75](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/gov/v1beta1/tx.ts#L75)

___

### depositor

• **depositor**: `string`

depositor defines the deposit addresses from the proposals.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:73](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/gov/v1beta1/tx.ts#L73)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:71](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/gov/v1beta1/tx.ts#L71)
