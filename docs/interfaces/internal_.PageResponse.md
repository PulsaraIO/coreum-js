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

- [nextKey](internal_.PageResponse.md#nextkey)
- [total](internal_.PageResponse.md#total)

## Properties

### nextKey

• **nextKey**: `Uint8Array`

next_key is the key to be passed to PageRequest.key to
query the next page most efficiently. It will be empty if
there are no more results.

#### Defined in

[src/cosmos/bank/v1beta1/pagination.ts:64](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/bank/v1beta1/pagination.ts#L64)

___

### total

• **total**: `number`

total is total number of results available if PageRequest.count_total
was set, its value is undefined otherwise

#### Defined in

[src/cosmos/bank/v1beta1/pagination.ts:69](https://github.com/CooperFoundation/coreum-js/blob/d106c53/src/cosmos/bank/v1beta1/pagination.ts#L69)
