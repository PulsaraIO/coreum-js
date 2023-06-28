[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Params

# Interface: Params

[<internal>](../modules/internal_.md).Params

Params defines the parameters for the bank module.

## Table of contents

### Properties

- [defaultSendEnabled](internal_.Params-4.md#defaultsendenabled)
- [sendEnabled](internal_.Params-4.md#sendenabled)

## Properties

### defaultSendEnabled

• **defaultSendEnabled**: `boolean`

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:19](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/bank/v1beta1/bank.ts#L19)

___

### sendEnabled

• **sendEnabled**: [`SendEnabled`](../modules/internal_.md#sendenabled)[]

Deprecated: Use of SendEnabled in params is deprecated.
For genesis, use the newly added send_enabled field in the genesis object.
Storage, lookup, and manipulation of this information is now in the keeper.

As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files.

**`Deprecated`**

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:18](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/bank/v1beta1/bank.ts#L18)
