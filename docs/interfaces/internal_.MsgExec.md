[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgExec

# Interface: MsgExec

[<internal>](../modules/internal_.md).MsgExec

MsgExec attempts to execute the provided messages using
authorizations granted to the grantee. Each message should have only
one signer corresponding to the granter of the authorization.

## Table of contents

### Properties

- [grantee](internal_.MsgExec.md#grantee)
- [msgs](internal_.MsgExec.md#msgs)

## Properties

### grantee

• **grantee**: `string`

#### Defined in

[src/types/msgs.ts:387](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L387)

___

### msgs

• **msgs**: [`Any`](../modules/internal_.md#any)[]

Execute Msg.
The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
triple and validate it.

#### Defined in

[src/types/msgs.ts:393](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L393)
