[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgDeposit

# Interface: MsgDeposit

[<internal>](../modules/internal_.md).MsgDeposit

MsgDeposit defines a message to submit a deposit to an existing proposal.

## Table of contents

### Properties

- [amount](internal_.MsgDeposit.md#amount)
- [depositor](internal_.MsgDeposit.md#depositor)
- [proposalId](internal_.MsgDeposit.md#proposalid)

## Properties

### amount

• **amount**: `Coin`[]

amount to be deposited by depositor.

#### Defined in

[src/types/msgs.ts:547](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L547)

___

### depositor

• **depositor**: `string`

depositor defines the deposit addresses from the proposals.

#### Defined in

[src/types/msgs.ts:545](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L545)

___

### proposalId

• **proposalId**: `number`

proposal_id defines the unique id of the proposal.

#### Defined in

[src/types/msgs.ts:543](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L543)
