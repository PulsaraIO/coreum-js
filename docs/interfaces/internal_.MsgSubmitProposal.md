[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgSubmitProposal

# Interface: MsgSubmitProposal

[<internal>](../modules/internal_.md).MsgSubmitProposal

MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
proposal Content.

## Table of contents

### Properties

- [content](internal_.MsgSubmitProposal.md#content)
- [initialDeposit](internal_.MsgSubmitProposal.md#initialdeposit)
- [proposer](internal_.MsgSubmitProposal.md#proposer)

## Properties

### content

• **content**: [`Any`](../modules/internal_.md#any)

content is the proposal's content.

#### Defined in

[src/types/msgs.ts:507](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L507)

___

### initialDeposit

• **initialDeposit**: `Coin`[]

initial_deposit is the deposit value that must be paid at proposal submission.

#### Defined in

[src/types/msgs.ts:509](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L509)

___

### proposer

• **proposer**: `string`

proposer is the account address of the proposer.

#### Defined in

[src/types/msgs.ts:511](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/types/msgs.ts#L511)
