[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PageRequest

# Interface: PageRequest

[<internal>](../modules/internal_.md).PageRequest

PageRequest is to be embedded in gRPC request messages for efficient
pagination. Ex:

 message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }

## Table of contents

### Properties

- [countTotal](internal_.PageRequest.md#counttotal)
- [key](internal_.PageRequest.md#key)
- [limit](internal_.PageRequest.md#limit)
- [offset](internal_.PageRequest.md#offset)
- [reverse](internal_.PageRequest.md#reverse)

## Properties

### countTotal

• **countTotal**: `boolean`

count_total is set to true  to indicate that the result set should include
a count of the total number of items available for pagination in UIs.
count_total is only respected when offset is used. It is ignored when key
is set.

#### Defined in

[src/cosmos/bank/v1beta1/pagination.ts:40](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/bank/v1beta1/pagination.ts#L40)

___

### key

• **key**: `Uint8Array`

key is a value returned in PageResponse.next_key to begin
querying the next page most efficiently. Only one of offset or key
should be set.

#### Defined in

[src/cosmos/bank/v1beta1/pagination.ts:22](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/bank/v1beta1/pagination.ts#L22)

___

### limit

• **limit**: `number`

limit is the total number of results to be returned in the result page.
If left empty it will default to a value to be set by each app.

#### Defined in

[src/cosmos/bank/v1beta1/pagination.ts:33](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/bank/v1beta1/pagination.ts#L33)

___

### offset

• **offset**: `number`

offset is a numeric offset that can be used when key is unavailable.
It is less efficient than using key. Only one of offset or key should
be set.

#### Defined in

[src/cosmos/bank/v1beta1/pagination.ts:28](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/bank/v1beta1/pagination.ts#L28)

___

### reverse

• **reverse**: `boolean`

reverse is set to true if results are to be returned in the descending order.

Since: cosmos-sdk 0.43

#### Defined in

[src/cosmos/bank/v1beta1/pagination.ts:46](https://github.com/PyramydLabs/coreum-js/blob/987bc3b/src/cosmos/bank/v1beta1/pagination.ts#L46)
