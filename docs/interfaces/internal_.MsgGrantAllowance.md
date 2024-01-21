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

[src/types/msgs.ts:562](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L562)

___

### grantee

• **grantee**: `string`

grantee is the address of the user being granted an allowance of another user's funds.

#### Defined in

[src/types/msgs.ts:560](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L560)

___

### granter

• **granter**: `string`

granter is the address of the user granting an allowance of their funds.

#### Defined in

[src/types/msgs.ts:558](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/msgs.ts#L558)
