[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgCommunityPoolSpend

# Interface: MsgCommunityPoolSpend

[<internal>](../modules/internal_.md).MsgCommunityPoolSpend

MsgCommunityPoolSpend defines a message for sending tokens from the community
pool to another account. This message is typically executed via a governance
proposal with the governance module being the executing authority.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [amount](internal_.MsgCommunityPoolSpend.md#amount)
- [authority](internal_.MsgCommunityPoolSpend.md#authority)
- [recipient](internal_.MsgCommunityPoolSpend.md#recipient)

## Properties

### amount

• **amount**: `Coin`[]

#### Defined in

[src/types/msgs.ts:692](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L692)

___

### authority

• **authority**: `string`

authority is the address that controls the module (defaults to x/gov unless overwritten).

#### Defined in

[src/types/msgs.ts:690](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L690)

___

### recipient

• **recipient**: `string`

#### Defined in

[src/types/msgs.ts:691](https://github.com/PulsaraIO/coreum-js/blob/64a1208/src/types/msgs.ts#L691)
