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

- [authority](internal_.MsgSetSendEnabled.md#authority)
- [sendEnabled](internal_.MsgSetSendEnabled.md#sendenabled)
- [useDefaultFor](internal_.MsgSetSendEnabled.md#usedefaultfor)

## Properties

### authority

• **authority**: `string`

#### Defined in

[src/types/msgs.ts:616](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/types/msgs.ts#L616)

___

### sendEnabled

• **sendEnabled**: `SendEnabled`[]

send_enabled is the list of entries to add or update.

#### Defined in

[src/types/msgs.ts:618](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/types/msgs.ts#L618)

___

### useDefaultFor

• **useDefaultFor**: `string`[]

use_default_for is a list of denoms that should use the params.default_send_enabled value.
Denoms listed here will have their SendEnabled entries deleted.
If a denom is included that doesn't have a SendEnabled entry,
it will be ignored.

#### Defined in

[src/types/msgs.ts:625](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/types/msgs.ts#L625)
