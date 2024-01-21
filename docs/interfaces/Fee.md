[coreum-js](../README.md) / [Exports](../modules.md) / Fee

# Interface: Fee

Fee includes the amount of coins paid in fees and the maximum
gas to be used by the transaction. The ratio yields an effective "gasprice",
which must be above some miminum to be accepted into the mempool.

## Table of contents

### Properties

- [amount](Fee.md#amount)
- [gasLimit](Fee.md#gaslimit)
- [granter](Fee.md#granter)
- [payer](Fee.md#payer)

## Properties

### amount

• **amount**: [`Coin`](../modules/internal_.md#coin)[]

amount is the amount of coins to be paid as a fee

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:242](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L242)

___

### gasLimit

• **gasLimit**: `number`

gas_limit is the maximum gas that can be used in transaction processing
before an out of gas error occurs

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:247](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L247)

___

### granter

• **granter**: `string`

if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
not support fee grants, this will fail

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:259](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L259)

___

### payer

• **payer**: `string`

if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
the payer must be a tx signer (and thus have signed this field in AuthInfo).
setting this field does *not* change the ordering of required signers for the transaction.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:253](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L253)
