[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ModelParams

# Interface: ModelParams

[<internal>](../modules/internal_.md).ModelParams

ModelParams define fee model params.
There are four regions on the fee model curve
- between 0 and "long average block gas" where gas price goes down exponentially from InitialGasPrice to gas price with maximum discount (InitialGasPrice * (1 - MaxDiscount))
- between "long average block gas" and EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) where we offer gas price with maximum discount all the time
- between EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) and MaxBlockGas where price goes up rapidly (being an output of a power function) from gas price with maximum discount to MaxGasPrice  (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
- above MaxBlockGas (if it happens for any reason) where price is equal to MaxGasPrice (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)

The input (x value) for that function is calculated by taking short block gas average.
Price (y value) being an output of the fee model is used as the minimum gas price for next block.

## Table of contents

### Properties

- [escalationStartFraction](internal_.ModelParams.md#escalationstartfraction)
- [initialGasPrice](internal_.ModelParams.md#initialgasprice)
- [longEmaBlockLength](internal_.ModelParams.md#longemablocklength)
- [maxBlockGas](internal_.ModelParams.md#maxblockgas)
- [maxDiscount](internal_.ModelParams.md#maxdiscount)
- [maxGasPriceMultiplier](internal_.ModelParams.md#maxgaspricemultiplier)
- [shortEmaBlockLength](internal_.ModelParams.md#shortemablocklength)

## Properties

### escalationStartFraction

• **escalationStartFraction**: `string`

escalation_start_fraction defines fraction of max block gas usage where gas price escalation starts if short average block gas is higher than this value.

#### Defined in

[src/coreum/feemodel/v1/params.ts:26](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/feemodel/v1/params.ts#L26)

___

### initialGasPrice

• **initialGasPrice**: `string`

initial_gas_price is used when block gas short average is 0. It happens when there are no transactions being broadcasted. This value is also used to initialize gas price on brand-new chain.

#### Defined in

[src/coreum/feemodel/v1/params.ts:20](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/feemodel/v1/params.ts#L20)

___

### longEmaBlockLength

• **longEmaBlockLength**: `number`

long_ema_block_length defines inertia for long average block gas in EMA model. The equation is: NewAverage = ((LongAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / LongAverageBlockLength
The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.

#### Defined in

[src/coreum/feemodel/v1/params.ts:38](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/feemodel/v1/params.ts#L38)

___

### maxBlockGas

• **maxBlockGas**: `Long`

max_block_gas sets the maximum capacity of block. This is enforced on tendermint level in genesis configuration. Once short average block gas goes above this value, gas price is a flat line equal to MaxGasPrice.

#### Defined in

[src/coreum/feemodel/v1/params.ts:28](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/feemodel/v1/params.ts#L28)

___

### maxDiscount

• **maxDiscount**: `string`

max_discount is th maximum discount we offer on top of initial gas price if short average block gas is between long average block gas and escalation start block gas.

#### Defined in

[src/coreum/feemodel/v1/params.ts:24](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/feemodel/v1/params.ts#L24)

___

### maxGasPriceMultiplier

• **maxGasPriceMultiplier**: `string`

max_gas_price_multiplier is used to compute max_gas_price (max_gas_price = initial_gas_price * max_gas_price_multiplier). Max gas price is charged when block gas short average is greater than or equal to MaxBlockGas. This value is used to limit gas price escalation to avoid having possible infinity GasPrice value otherwise.

#### Defined in

[src/coreum/feemodel/v1/params.ts:22](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/feemodel/v1/params.ts#L22)

___

### shortEmaBlockLength

• **shortEmaBlockLength**: `number`

short_ema_block_length defines inertia for short average long gas in EMA model. The equation is: NewAverage = ((ShortAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / ShortAverageBlockLength
The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.

#### Defined in

[src/coreum/feemodel/v1/params.ts:33](https://github.com/CooperFoundation/coreum-js/blob/54a22f0/src/coreum/feemodel/v1/params.ts#L33)
