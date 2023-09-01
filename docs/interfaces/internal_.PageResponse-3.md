[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PageResponse

# Interface: PageResponse

[<internal>](../modules/internal_.md).PageResponse

PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }

## Table of contents

### Properties

- [nextKey](internal_.PageResponse-3.md#nextkey)
- [total](internal_.PageResponse-3.md#total)

## Properties

### nextKey

• **nextKey**: `Uint8Array`

next_key is the key to be passed to PageRequest.key to
query the next page most efficiently

#### Defined in

[src/cosmos/base/query/v1beta1/pagination.ts:63](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/cosmos/base/query/v1beta1/pagination.ts#L63)

___

### total

• **total**: `Long`

total is total number of results available if PageRequest.count_total
was set, its value is undefined otherwise

#### Defined in

[src/cosmos/base/query/v1beta1/pagination.ts:68](https://github.com/PyramydLabs/coreum-js/blob/75debec/src/cosmos/base/query/v1beta1/pagination.ts#L68)
