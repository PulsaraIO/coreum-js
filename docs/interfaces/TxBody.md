[coreum-js](../README.md) / [Exports](../modules.md) / TxBody

# Interface: TxBody

TxBody is the body of a transaction that all signers sign over.

## Table of contents

### Properties

- [extensionOptions](TxBody.md#extensionoptions)
- [memo](TxBody.md#memo)
- [messages](TxBody.md#messages)
- [nonCriticalExtensionOptions](TxBody.md#noncriticalextensionoptions)
- [timeoutHeight](TxBody.md#timeoutheight)

## Properties

### extensionOptions

• **extensionOptions**: [`Any`](../modules/internal_.md#any)[]

extension_options are arbitrary options that can be added by chains
when the default options are not sufficient. If any of these are present
and can't be handled, the transaction will be rejected

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:143](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L143)

___

### memo

• **memo**: `string`

memo is any arbitrary note/comment to be added to the transaction.
WARNING: in clients, any publicly exposed text should not be called memo,
but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:132](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L132)

___

### messages

• **messages**: [`Any`](../modules/internal_.md#any)[]

messages is a list of messages to be executed. The required signers of
those messages define the number and order of elements in AuthInfo's
signer_infos and Tx's signatures. Each required signer address is added to
the list only the first time it occurs.
By convention, the first required signer (usually from the first message)
is referred to as the primary signer and pays the fee for the whole
transaction.

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:126](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L126)

___

### nonCriticalExtensionOptions

• **nonCriticalExtensionOptions**: [`Any`](../modules/internal_.md#any)[]

extension_options are arbitrary options that can be added by chains
when the default options are not sufficient. If any of these are present
and can't be handled, they will be ignored

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:149](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L149)

___

### timeoutHeight

• **timeoutHeight**: `number`

timeout is the block height after which this transaction will not
be processed by the chain

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:137](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/v1beta1/tx.ts#L137)
