[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CommissionRates

# Interface: CommissionRates

[<internal>](../modules/internal_.md).CommissionRates

CommissionRates defines the initial commission rates to be used for creating
a validator.

## Table of contents

### Properties

- [maxChangeRate](internal_.CommissionRates.md#maxchangerate)
- [maxRate](internal_.CommissionRates.md#maxrate)
- [rate](internal_.CommissionRates.md#rate)

## Properties

### maxChangeRate

• **maxChangeRate**: `string`

max_change_rate defines the maximum daily increase of the validator commission, as a fraction.

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:127](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/staking/v1beta1/staking.ts#L127)

___

### maxRate

• **maxRate**: `string`

max_rate defines the maximum commission rate which validator can ever charge, as a fraction.

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:125](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/staking/v1beta1/staking.ts#L125)

___

### rate

• **rate**: `string`

rate is the commission rate charged to delegators, as a fraction.

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:123](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/cosmos/staking/v1beta1/staking.ts#L123)
