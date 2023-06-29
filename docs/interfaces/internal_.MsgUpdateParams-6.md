[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgUpdateParams

# Interface: MsgUpdateParams

[<internal>](../modules/internal_.md).MsgUpdateParams

MsgUpdateParams is the MsgUpdateParams request type.

Since: 0.40

## Table of contents

### Properties

- [authority](internal_.MsgUpdateParams-6.md#authority)
- [params](internal_.MsgUpdateParams-6.md#params)

## Properties

### authority

• **authority**: `string`

Authority is the address of the governance account.

#### Defined in

[src/wasm/v1/tx.ts:174](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/wasm/v1/tx.ts#L174)

___

### params

• **params**: [`Params`](../modules/internal_.md#params-5)

params defines the x/wasm parameters to update.

NOTE: All parameters must be supplied.

#### Defined in

[src/wasm/v1/tx.ts:180](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/wasm/v1/tx.ts#L180)
