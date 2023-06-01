[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DepositParams

# Interface: DepositParams

[<internal>](../modules/internal_.md).DepositParams

DepositParams defines the params for deposits on governance proposals.

## Table of contents

### Properties

- [maxDepositPeriod](internal_.DepositParams.md#maxdepositperiod)
- [minDeposit](internal_.DepositParams.md#mindeposit)

## Properties

### maxDepositPeriod

• **maxDepositPeriod**: [`Duration`](../modules/internal_.md#duration)

Maximum period for Atom holders to deposit on a proposal. Initial value: 2
months.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:254](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L254)

___

### minDeposit

• **minDeposit**: [`Coin`](../modules/internal_.md#coin)[]

Minimum deposit for a proposal to enter voting period.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:249](https://github.com/CooperFoundation/coreum-js/blob/1aa4fb5/src/cosmos/gov/v1beta1/gov.ts#L249)
