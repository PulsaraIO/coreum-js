[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TallyParams

# Interface: TallyParams

[<internal>](../modules/internal_.md).TallyParams

TallyParams defines the params for tallying votes on governance proposals.

## Table of contents

### Properties

- [quorum](internal_.TallyParams.md#quorum)
- [threshold](internal_.TallyParams.md#threshold)
- [vetoThreshold](internal_.TallyParams.md#vetothreshold)

## Properties

### quorum

• **quorum**: `Uint8Array`

Minimum percentage of total stake needed to vote for a result to be
considered valid.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:269](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/gov/v1beta1/gov.ts#L269)

___

### threshold

• **threshold**: `Uint8Array`

Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:271](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/gov/v1beta1/gov.ts#L271)

___

### vetoThreshold

• **vetoThreshold**: `Uint8Array`

Minimum value of Veto votes to Total votes ratio for proposal to be
vetoed. Default value: 1/3.

#### Defined in

[src/cosmos/gov/v1beta1/gov.ts:276](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/cosmos/gov/v1beta1/gov.ts#L276)
