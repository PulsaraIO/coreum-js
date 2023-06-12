[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / QueryClientImpl

# Class: QueryClientImpl

[<internal>](../modules/internal_.md).QueryClientImpl

Query defines the gRPC querier service.

## Implements

- [`Query`](../interfaces/internal_.Query.md)

## Table of contents

### Constructors

- [constructor](internal_.QueryClientImpl.md#constructor)

### Properties

- [rpc](internal_.QueryClientImpl.md#rpc)
- [service](internal_.QueryClientImpl.md#service)

### Methods

- [MinGasPrice](internal_.QueryClientImpl.md#mingasprice)
- [Params](internal_.QueryClientImpl.md#params)

## Constructors

### constructor

• **new QueryClientImpl**(`rpc`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`Rpc`](../interfaces/internal_.Rpc.md) |
| `opts?` | `Object` |
| `opts.service?` | `string` |

#### Defined in

[src/coreum/feemodel/v1/query.ts:244](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/feemodel/v1/query.ts#L244)

## Properties

### rpc

• `Private` `Readonly` **rpc**: [`Rpc`](../interfaces/internal_.Rpc.md)

#### Defined in

[src/coreum/feemodel/v1/query.ts:242](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/feemodel/v1/query.ts#L242)

___

### service

• `Private` `Readonly` **service**: `string`

#### Defined in

[src/coreum/feemodel/v1/query.ts:243](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/feemodel/v1/query.ts#L243)

## Methods

### MinGasPrice

▸ **MinGasPrice**(`request`): `Promise`<[`QueryMinGasPriceResponse`](../modules/internal_.md#querymingaspriceresponse)\>

MinGasPrice queries the current minimum gas price required by the network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`QueryMinGasPriceRequest`](../modules/internal_.md#querymingaspricerequest) |

#### Returns

`Promise`<[`QueryMinGasPriceResponse`](../modules/internal_.md#querymingaspriceresponse)\>

#### Implementation of

[Query](../interfaces/internal_.Query.md).[MinGasPrice](../interfaces/internal_.Query.md#mingasprice)

#### Defined in

[src/coreum/feemodel/v1/query.ts:250](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/feemodel/v1/query.ts#L250)

___

### Params

▸ **Params**(`request`): `Promise`<[`QueryParamsResponse`](../modules/internal_.md#queryparamsresponse-2)\>

Params queries the parameters of x/feemodel module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`QueryParamsRequest`](../modules/internal_.md#queryparamsrequest) |

#### Returns

`Promise`<[`QueryParamsResponse`](../modules/internal_.md#queryparamsresponse-2)\>

#### Implementation of

[Query](../interfaces/internal_.Query.md).[Params](../interfaces/internal_.Query.md#params)

#### Defined in

[src/coreum/feemodel/v1/query.ts:256](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/coreum/feemodel/v1/query.ts#L256)
