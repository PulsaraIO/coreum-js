[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DenomUnit

# Interface: DenomUnit

[<internal>](../modules/internal_.md).DenomUnit

DenomUnit represents a struct that describes a given
denomination unit of the basic token.

## Table of contents

### Properties

- [aliases](internal_.DenomUnit.md#aliases)
- [denom](internal_.DenomUnit.md#denom)
- [exponent](internal_.DenomUnit.md#exponent)

## Properties

### aliases

• **aliases**: `string`[]

aliases is a list of string aliases for the given denom

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:70](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/bank/v1beta1/bank.ts#L70)

___

### denom

• **denom**: `string`

denom represents the string name of the given denom unit (e.g uatom).

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:60](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/bank/v1beta1/bank.ts#L60)

___

### exponent

• **exponent**: `number`

exponent represents power of 10 exponent that one must
raise the base_denom to in order to equal the given DenomUnit's denom
1 denom = 10^exponent base_denom
(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
exponent = 6, thus: 1 atom = 10^6 uatom).

#### Defined in

[src/cosmos/bank/v1beta1/bank.ts:68](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/bank/v1beta1/bank.ts#L68)
