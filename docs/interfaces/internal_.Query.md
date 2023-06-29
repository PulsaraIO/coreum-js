[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Query

# Interface: Query

[<internal>](../modules/internal_.md).Query

Query defines the gRPC querier service.

## Implemented by

- [`QueryClientImpl`](../classes/internal_.QueryClientImpl.md)

## Table of contents

### Methods

- [MinGasPrice](internal_.Query.md#mingasprice)
- [Params](internal_.Query.md#params)

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

#### Defined in

[src/coreum/feemodel/v1/query.ts:236](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/coreum/feemodel/v1/query.ts#L236)

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

#### Defined in

[src/coreum/feemodel/v1/query.ts:238](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/coreum/feemodel/v1/query.ts#L238)
