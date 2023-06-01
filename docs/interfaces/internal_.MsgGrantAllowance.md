[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgGrantAllowance

# Interface: MsgGrantAllowance

[<internal>](../modules/internal_.md).MsgGrantAllowance

MsgGrantAllowance adds permission for Grantee to spend up to Allowance
of fees from the account of Granter.

## Table of contents

### Properties

- [allowance](internal_.MsgGrantAllowance.md#allowance)
- [grantee](internal_.MsgGrantAllowance.md#grantee)
- [granter](internal_.MsgGrantAllowance.md#granter)

## Properties

### allowance

• **allowance**: [`Any`](../modules/internal_.md#any)

allowance can be any of basic, periodic, allowed fee allowance.

#### Defined in

[src/cosmos/feegrant/v1beta1/tx.ts:19](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/feegrant/v1beta1/tx.ts#L19)

___

### grantee

• **grantee**: `string`

grantee is the address of the user being granted an allowance of another user's funds.

#### Defined in

[src/cosmos/feegrant/v1beta1/tx.ts:17](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/feegrant/v1beta1/tx.ts#L17)

___

### granter

• **granter**: `string`

granter is the address of the user granting an allowance of their funds.

#### Defined in

[src/cosmos/feegrant/v1beta1/tx.ts:15](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/feegrant/v1beta1/tx.ts#L15)
