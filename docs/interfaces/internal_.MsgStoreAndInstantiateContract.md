[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MsgStoreAndInstantiateContract

# Interface: MsgStoreAndInstantiateContract

[<internal>](../modules/internal_.md).MsgStoreAndInstantiateContract

MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
request type.

Since: 0.40

## Table of contents

### Properties

- [admin](internal_.MsgStoreAndInstantiateContract.md#admin)
- [authority](internal_.MsgStoreAndInstantiateContract.md#authority)
- [builder](internal_.MsgStoreAndInstantiateContract.md#builder)
- [codeHash](internal_.MsgStoreAndInstantiateContract.md#codehash)
- [funds](internal_.MsgStoreAndInstantiateContract.md#funds)
- [instantiatePermission](internal_.MsgStoreAndInstantiateContract.md#instantiatepermission)
- [label](internal_.MsgStoreAndInstantiateContract.md#label)
- [msg](internal_.MsgStoreAndInstantiateContract.md#msg)
- [source](internal_.MsgStoreAndInstantiateContract.md#source)
- [unpinCode](internal_.MsgStoreAndInstantiateContract.md#unpincode)
- [wasmByteCode](internal_.MsgStoreAndInstantiateContract.md#wasmbytecode)

## Properties

### admin

• **admin**: `string`

Admin is an optional address that can execute migrations

#### Defined in

[src/wasm/v1/tx.ts:275](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L275)

___

### authority

• **authority**: `string`

Authority is the address of the governance account.

#### Defined in

[src/wasm/v1/tx.ts:264](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L264)

___

### builder

• **builder**: `string`

Builder is the docker image used to build the code deterministically, used
for smart contract verification

#### Defined in

[src/wasm/v1/tx.ts:291](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L291)

___

### codeHash

• **codeHash**: `Uint8Array`

CodeHash is the SHA256 sum of the code outputted by builder, used for smart
contract verification

#### Defined in

[src/wasm/v1/tx.ts:296](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L296)

___

### funds

• **funds**: [`Coin`](../modules/internal_.md#coin)[]

Funds coins that are transferred from the authority account to the contract
on instantiation

#### Defined in

[src/wasm/v1/tx.ts:284](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L284)

___

### instantiatePermission

• **instantiatePermission**: [`AccessConfig`](../modules/internal_.md#accessconfig)

InstantiatePermission to apply on contract creation, optional

#### Defined in

[src/wasm/v1/tx.ts:268](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L268)

___

### label

• **label**: `string`

Label is optional metadata to be stored with a constract instance.

#### Defined in

[src/wasm/v1/tx.ts:277](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L277)

___

### msg

• **msg**: `Uint8Array`

Msg json encoded message to be passed to the contract on instantiation

#### Defined in

[src/wasm/v1/tx.ts:279](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L279)

___

### source

• **source**: `string`

Source is the URL where the code is hosted

#### Defined in

[src/wasm/v1/tx.ts:286](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L286)

___

### unpinCode

• **unpinCode**: `boolean`

UnpinCode code on upload, optional. As default the uploaded contract is
pinned to cache.

#### Defined in

[src/wasm/v1/tx.ts:273](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L273)

___

### wasmByteCode

• **wasmByteCode**: `Uint8Array`

WASMByteCode can be raw or gzip compressed

#### Defined in

[src/wasm/v1/tx.ts:266](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/wasm/v1/tx.ts#L266)
