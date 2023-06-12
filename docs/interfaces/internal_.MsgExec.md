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

[src/cosmos/authz/v1beta1/tx.ts:31](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/cosmos/authz/v1beta1/tx.ts#L31)

___

### msgs

• **msgs**: [`Any`](../modules/internal_.md#any)[]

Execute Msg.
The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
triple and validate it.

#### Defined in

[src/cosmos/authz/v1beta1/tx.ts:37](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/cosmos/authz/v1beta1/tx.ts#L37)
