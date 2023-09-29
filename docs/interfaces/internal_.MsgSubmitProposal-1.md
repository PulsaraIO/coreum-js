[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgSubmitProposal

# Interface: MsgSubmitProposal

[<internal>](../modules/internal_.md).MsgSubmitProposal

MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
proposal Content.

## Table of contents

### Properties

- [content](internal_.MsgSubmitProposal-1.md#content)
- [initialDeposit](internal_.MsgSubmitProposal-1.md#initialdeposit)
- [proposer](internal_.MsgSubmitProposal-1.md#proposer)

## Properties

### content

• **content**: [`Any`](../modules/internal_.md#any)

content is the proposal's content.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:21](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/gov/v1beta1/tx.ts#L21)

___

### initialDeposit

• **initialDeposit**: [`Coin`](../modules/internal_.md#coin)[]

initial_deposit is the deposit value that must be paid at proposal submission.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:23](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/gov/v1beta1/tx.ts#L23)

___

### proposer

• **proposer**: `string`

proposer is the account address of the proposer.

#### Defined in

[src/cosmos/gov/v1beta1/tx.ts:25](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/cosmos/gov/v1beta1/tx.ts#L25)
