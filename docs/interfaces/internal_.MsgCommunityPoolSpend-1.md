[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCommunityPoolSpend

# Interface: MsgCommunityPoolSpend

[<internal>](../modules/internal_.md).MsgCommunityPoolSpend

MsgCommunityPoolSpend defines a message for sending tokens from the community
pool to another account. This message is typically executed via a governance
proposal with the governance module being the executing authority.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [amount](internal_.MsgCommunityPoolSpend-1.md#amount)
- [authority](internal_.MsgCommunityPoolSpend-1.md#authority)
- [recipient](internal_.MsgCommunityPoolSpend-1.md#recipient)

## Properties

### amount

• **amount**: [`Coin`](../modules/internal_.md#coin)[]

#### Defined in

[src/cosmos/distribution/v1beta1/tx.ts:108](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/cosmos/distribution/v1beta1/tx.ts#L108)

___

### authority

• **authority**: `string`

authority is the address that controls the module (defaults to x/gov unless overwritten).

#### Defined in

[src/cosmos/distribution/v1beta1/tx.ts:106](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/cosmos/distribution/v1beta1/tx.ts#L106)

___

### recipient

• **recipient**: `string`

#### Defined in

[src/cosmos/distribution/v1beta1/tx.ts:107](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/cosmos/distribution/v1beta1/tx.ts#L107)
