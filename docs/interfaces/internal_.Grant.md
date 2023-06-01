[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Grant

# Interface: Grant

[<internal>](../modules/internal_.md).Grant

Grant gives permissions to execute
the provide method with expiration time.

## Table of contents

### Properties

- [authorization](internal_.Grant.md#authorization)
- [expiration](internal_.Grant.md#expiration)

## Properties

### authorization

• **authorization**: [`Any`](../modules/internal_.md#any)

#### Defined in

[src/cosmos/authz/v1beta1/authz.ts:24](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/cosmos/authz/v1beta1/authz.ts#L24)

___

### expiration

• **expiration**: `Date`

time when the grant will expire and will be pruned. If null, then the grant
doesn't have a time expiration (other conditions  in `authorization`
may apply to invalidate the grant)

#### Defined in

[src/cosmos/authz/v1beta1/authz.ts:30](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/cosmos/authz/v1beta1/authz.ts#L30)
