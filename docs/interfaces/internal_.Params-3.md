[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Params

# Interface: Params

[<internal>](../modules/internal_.md).Params

Params defines the parameters for the x/staking module.

## Table of contents

### Properties

- [bondDenom](internal_.Params-3.md#bonddenom)
- [historicalEntries](internal_.Params-3.md#historicalentries)
- [maxEntries](internal_.Params-3.md#maxentries)
- [maxValidators](internal_.Params-3.md#maxvalidators)
- [minCommissionRate](internal_.Params-3.md#mincommissionrate)
- [unbondingTime](internal_.Params-3.md#unbondingtime)

## Properties

### bondDenom

• **bondDenom**: `string`

bond_denom defines the bondable coin denomination.

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:317](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/staking/v1beta1/staking.ts#L317)

___

### historicalEntries

• **historicalEntries**: `number`

historical_entries is the number of historical entries to persist.

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:315](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/staking/v1beta1/staking.ts#L315)

___

### maxEntries

• **maxEntries**: `number`

max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:313](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/staking/v1beta1/staking.ts#L313)

___

### maxValidators

• **maxValidators**: `number`

max_validators is the maximum number of validators.

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:311](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/staking/v1beta1/staking.ts#L311)

___

### minCommissionRate

• **minCommissionRate**: `string`

min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:319](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/staking/v1beta1/staking.ts#L319)

___

### unbondingTime

• **unbondingTime**: [`Duration`](../modules/internal_.md#duration)

unbonding_time is the time duration of unbonding.

#### Defined in

[src/cosmos/staking/v1beta1/staking.ts:309](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/staking/v1beta1/staking.ts#L309)
