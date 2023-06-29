[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ValidatorSlashEvent

# Interface: ValidatorSlashEvent

[<internal>](../modules/internal_.md).ValidatorSlashEvent

ValidatorSlashEvent represents a validator slash event.
Height is implicit within the store key.
This is needed to calculate appropriate amount of staking tokens
for delegations which are withdrawn after a slash has occurred.

## Table of contents

### Properties

- [fraction](internal_.ValidatorSlashEvent.md#fraction)
- [validatorPeriod](internal_.ValidatorSlashEvent.md#validatorperiod)

## Properties

### fraction

• **fraction**: `string`

#### Defined in

[src/cosmos/distribution/v1beta1/distribution.ts:81](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/cosmos/distribution/v1beta1/distribution.ts#L81)

___

### validatorPeriod

• **validatorPeriod**: `number`

#### Defined in

[src/cosmos/distribution/v1beta1/distribution.ts:80](https://github.com/PyramydLabs/coreum-js/blob/1b17c7f/src/cosmos/distribution/v1beta1/distribution.ts#L80)
