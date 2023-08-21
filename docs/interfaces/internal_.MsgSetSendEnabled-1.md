[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgSetSendEnabled

# Interface: MsgSetSendEnabled

[<internal>](../modules/internal_.md).MsgSetSendEnabled

MsgSetSendEnabled is the Msg/SetSendEnabled request type.

Only entries to add/update/delete need to be included.
Existing SendEnabled entries that are not included in this
message are left unchanged.

Since: cosmos-sdk 0.47

## Table of contents

### Properties

- [authority](internal_.MsgSetSendEnabled-1.md#authority)
- [sendEnabled](internal_.MsgSetSendEnabled-1.md#sendenabled)
- [useDefaultFor](internal_.MsgSetSendEnabled-1.md#usedefaultfor)

## Properties

### authority

• **authority**: `string`

#### Defined in

[src/cosmos/bank/v1beta1/tx.ts:68](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/bank/v1beta1/tx.ts#L68)

___

### sendEnabled

• **sendEnabled**: [`SendEnabled`](../modules/internal_.md#sendenabled)[]

send_enabled is the list of entries to add or update.

#### Defined in

[src/cosmos/bank/v1beta1/tx.ts:70](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/bank/v1beta1/tx.ts#L70)

___

### useDefaultFor

• **useDefaultFor**: `string`[]

use_default_for is a list of denoms that should use the params.default_send_enabled value.
Denoms listed here will have their SendEnabled entries deleted.
If a denom is included that doesn't have a SendEnabled entry,
it will be ignored.

#### Defined in

[src/cosmos/bank/v1beta1/tx.ts:77](https://github.com/PyramydLabs/coreum-js/blob/37d165f/src/cosmos/bank/v1beta1/tx.ts#L77)
