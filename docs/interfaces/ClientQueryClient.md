[coreum-js](../README.md) / [Exports](../modules.md) / ClientQueryClient

# Interface: ClientQueryClient

## Hierarchy

- `QueryClient`

  ↳ **`ClientQueryClient`**

## Table of contents

### Properties

- [auth](ClientQueryClient.md#auth)
- [bank](ClientQueryClient.md#bank)
- [distribution](ClientQueryClient.md#distribution)
- [feegrant](ClientQueryClient.md#feegrant)
- [ft](ClientQueryClient.md#ft)
- [gov](ClientQueryClient.md#gov)
- [ibc](ClientQueryClient.md#ibc)
- [mint](ClientQueryClient.md#mint)
- [nft](ClientQueryClient.md#nft)
- [nftbeta](ClientQueryClient.md#nftbeta)
- [staking](ClientQueryClient.md#staking)
- [tx](ClientQueryClient.md#tx)
- [wasm](ClientQueryClient.md#wasm)

## Properties

### auth

• **auth**: `Object`

#### Defined in

[src/types/core.ts:44](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L44)

___

### bank

• **bank**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allBalances` | (`address`: `string`) => `Promise`<[`Coin`](../modules/internal_.md#coin)[]\> |
| `balance` | (`address`: `string`, `denom`: `string`) => `Promise`<[`Coin`](../modules/internal_.md#coin)\> |
| `denomMetadata` | (`denom`: `string`) => `Promise`<[`Metadata`](../modules/internal_.md#metadata)\> |
| `denomsMetadata` | (`pagination?`: [`PageRequest`](../modules/internal_.md#pagerequest)) => `Promise`<[`Metadata`](../modules/internal_.md#metadata)[]\> |
| `supplyOf` | (`denom`: `string`) => `Promise`<[`Coin`](../modules/internal_.md#coin)\> |
| `totalSupply` | (`pagination?`: [`PageRequest`](../modules/internal_.md#pagerequest)) => `Promise`<{ `pagination`: [`PageResponse`](../modules/internal_.md#pageresponse) = supplyResponse.pagination; `supply`: [`Coin`](../modules/internal_.md#coin)[] = supplyResponse.supply }\> |

#### Defined in

[src/types/core.ts:36](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L36)

___

### distribution

• **distribution**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `communityPool` | () => `Promise`<{ `pool`: [`DecCoin`](../modules/internal_.md#deccoin)[]  }\> |
| `delegationRewards` | (`delegator`: `string`, `validator`: `string`) => `Promise`<{ `rewards`: [`DecCoin`](../modules/internal_.md#deccoin)[]  }\> |
| `delegationTotalRewards` | (`delegator`: `string`) => `Promise`<{ `rewards`: [`DelegationDelegatorReward`](../modules/internal_.md#delegationdelegatorreward)[] ; `total`: [`DecCoin`](../modules/internal_.md#deccoin)[]  }\> |
| `delegatorValidators` | (`delegator`: `string`) => `Promise`<{ `validators`: `string`[]  }\> |
| `delegatorWithdrawAddress` | (`delegator`: `string`) => `Promise`<{ `withdrawAddress`: `string`  }\> |
| `params` | () => `Promise`<{ `params`: [`Params`](../modules/internal_.md#params)  }\> |
| `validatorCommission` | (`validator`: `string`) => `Promise`<{ `commission`: [`ValidatorAccumulatedCommission`](../modules/internal_.md#validatoraccumulatedcommission)  }\> |
| `validatorOutstandingRewards` | (`validator`: `string`) => `Promise`<{ `rewards`: [`ValidatorOutstandingRewards`](../modules/internal_.md#validatoroutstandingrewards)  }\> |
| `validatorSlashes` | (`validator`: `string`, `starting_height`: `number`, `ending_height`: `number`, `pagination?`: [`PageRequest`](../modules/internal_.md#pagerequest-2)) => `Promise`<{ `pagination`: [`PageResponse`](../modules/internal_.md#pageresponse-2) ; `slashes`: [`ValidatorSlashEvent`](../modules/internal_.md#validatorslashevent)[]  }\> |

#### Defined in

[src/types/core.ts:40](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L40)

___

### feegrant

• **feegrant**: `Object`

#### Defined in

[src/types/core.ts:46](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L46)

___

### ft

• **ft**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `frozenBalance` | (`account`: `string`, `denom`: `string`) => `Promise`<[`QueryFrozenBalanceResponse`](../modules/internal_.md#queryfrozenbalanceresponse)\> |
| `frozenBalances` | (`account`: `string`, `pagination?`: `PageRequest`) => `Promise`<[`QueryFrozenBalancesResponse`](../modules/internal_.md#queryfrozenbalancesresponse)\> |
| `params` | () => `Promise`<[`QueryParamsResponse`](../modules/internal_.md#queryparamsresponse)\> |
| `token` | (`denom`: `string`) => `Promise`<[`QueryTokenResponse`](../modules/internal_.md#querytokenresponse)\> |
| `tokens` | (`issuer`: `string`, `pagination?`: `PageRequest`) => `Promise`<[`QueryTokensResponse`](../modules/internal_.md#querytokensresponse)\> |
| `whitelistedBalance` | (`account`: `string`, `denom`: `string`) => `Promise`<[`QueryWhitelistedBalanceResponse`](../modules/internal_.md#querywhitelistedbalanceresponse)\> |
| `whitelistedBalances` | (`account`: `string`, `pagination?`: `PageRequest`) => `Promise`<[`QueryWhitelistedBalancesResponse`](../modules/internal_.md#querywhitelistedbalancesresponse)\> |

#### Defined in

[src/types/core.ts:33](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L33)

___

### gov

• **gov**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deposit` | (`proposal_id`: `number`, `depositor`: `string`) => `Promise`<{ `deposit`: [`Deposit`](../modules/internal_.md#deposit)  }\> |
| `deposits` | (`proposal_id`: `number`, `pagination?`: [`PageRequest`](../modules/internal_.md#pagerequest-1)) => `Promise`<{ `deposits`: [`Deposit`](../modules/internal_.md#deposit)[] ; `pagination`: [`PageResponse`](../modules/internal_.md#pageresponse-1)  }\> |
| `params` | (`parametersType`: ``"deposit"`` \| ``"tallying"`` \| ``"voting"``) => `Promise`<{ `depositParams`: [`DepositParams`](../modules/internal_.md#depositparams) ; `tallyParams`: [`TallyParams`](../modules/internal_.md#tallyparams) ; `votingParams`: [`VotingParams`](../modules/internal_.md#votingparams)  }\> |
| `proposal` | (`proposal_id`: `number`) => `Promise`<{ `proposal`: [`Proposal`](../modules/internal_.md#proposal)  }\> |
| `proposals` | (`proposalStatus`: [`ProposalStatus`](../enums/internal_.ProposalStatus.md), `depositor`: `string`, `voter`: `string`, `pagination?`: [`PageRequest`](../modules/internal_.md#pagerequest-1)) => `Promise`<{ `pagination`: [`PageResponse`](../modules/internal_.md#pageresponse-1) ; `proposals`: [`Proposal`](../modules/internal_.md#proposal)[]  }\> |
| `tally` | (`proposal_id`: `number`) => `Promise`<{ `tally`: [`TallyResult`](../modules/internal_.md#tallyresult)  }\> |
| `vote` | (`proposal_id`: `number`, `voter`: `string`) => `Promise`<{ `vote`: [`Vote`](../modules/internal_.md#vote)  }\> |
| `votes` | (`proposal_id`: `number`, `pagination?`: [`PageRequest`](../modules/internal_.md#pagerequest-1)) => `Promise`<{ `pagination`: [`PageResponse`](../modules/internal_.md#pageresponse-1) ; `votes`: [`Vote`](../modules/internal_.md#vote)[]  }\> |

#### Defined in

[src/types/core.ts:38](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L38)

___

### ibc

• **ibc**: `Object`

#### Defined in

[src/types/core.ts:47](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L47)

___

### mint

• **mint**: `Object`

#### Defined in

[src/types/core.ts:45](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L45)

___

### nft

• **nft**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `class` | (`class_id`: `string`) => `Promise`<[`QueryClassResponse`](../modules/internal_.md#queryclassresponse)\> |
| `frozen` | (`nft_id`: `string`, `class_id`: `string`) => `Promise`<[`QueryFrozenResponse`](../modules/internal_.md#queryfrozenresponse)\> |
| `params` | () => `Promise`<[`QueryParamsResponse`](../modules/internal_.md#queryparamsresponse-1)\> |
| `whitelisted` | (`nft_id`: `string`, `class_id`: `string`, `account`: `string`) => `Promise`<[`QueryWhitelistedResponse`](../modules/internal_.md#querywhitelistedresponse)\> |
| `whitelistedAccountsForNFT` | (`nft_id`: `string`, `class_id`: `string`, `pagination?`: `PageRequest`) => `Promise`<[`QueryWhitelistedAccountsForNFTResponse`](../modules/internal_.md#querywhitelistedaccountsfornftresponse)\> |

#### Defined in

[src/types/core.ts:34](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L34)

___

### nftbeta

• **nftbeta**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balance` | (`class_id`: `string`, `owner`: `string`) => `Promise`<[`QueryBalanceResponse`](../modules/internal_.md#querybalanceresponse)\> |
| `class` | (`class_id`: `string`) => `Promise`<[`QueryClassResponse`](../modules/internal_.md#queryclassresponse-1)\> |
| `classes` | (`pagination?`: `PageRequest`) => `Promise`<[`QueryClassesResponse`](../modules/internal_.md#queryclassesresponse)\> |
| `nft` | (`nft_id`: `string`, `class_id`: `string`) => `Promise`<[`QueryNFTResponse`](../modules/internal_.md#querynftresponse)\> |
| `nfts` | (`class_id`: `string`, `owner`: `string`, `pagination?`: `PageRequest`) => `Promise`<[`QueryNFTsResponse`](../modules/internal_.md#querynftsresponse)\> |
| `owner` | (`class_id`: `string`, `nft_id`: `string`) => `Promise`<[`QueryOwnerResponse`](../modules/internal_.md#queryownerresponse)\> |
| `supply` | (`class_id`: `string`) => `Promise`<[`QuerySupplyResponse`](../modules/internal_.md#querysupplyresponse)\> |

#### Defined in

[src/types/core.ts:35](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L35)

___

### staking

• **staking**: `Object`

#### Defined in

[src/types/core.ts:43](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L43)

___

### tx

• **tx**: `Object`

#### Defined in

[src/types/core.ts:49](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L49)

___

### wasm

• **wasm**: `Object`

#### Defined in

[src/types/core.ts:48](https://github.com/CooperFoundation/coreum-js/blob/bdb622b/src/types/core.ts#L48)
