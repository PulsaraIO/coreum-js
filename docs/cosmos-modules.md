# Cosmos modules

The SDK re-exports Cosmos SDK message builders and query extensions for Bank, Staking, Distribution, Governance, Authz, Feegrant, and Vesting. Use the namespaces (e.g. `Bank`, `Staking`) for messages and `client.queryClients?.bank`, `client.queryClients?.gov`, `client.queryClients?.distribution` for queries.

All message builders return `{ typeUrl, value }` for use with `client.sendTx([msg])` or `client.signTx([msg])`. Message types and interfaces come from `cosmjs-types`; the SDK wraps them with type URLs.

---

## Bank

**Type URL prefix:** `/cosmos.bank.v1beta1.`

### Message builders

| Function                      | TypeUrl             | Description                                                                                   |
| ----------------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| `Bank.Send(object)`           | `MsgSend`           | Send coins from one account to another. Fields: `fromAddress`, `toAddress`, `amount: Coin[]`. |
| `Bank.MultiSend(object)`      | `MsgMultiSend`      | Send coins from multiple inputs to multiple outputs.                                          |
| `Bank.SetSendEnabled(object)` | `MsgSetSendEnabled` | Set send-enabled flags for denoms.                                                            |
| `Bank.UpdateParams(object)`   | `MsgUpdateParams`   | Update bank module params (authority).                                                        |

### Query extension (client.queryClients.bank)

| Method                        | Parameters                         | Description                 |
| ----------------------------- | ---------------------------------- | --------------------------- |
| `balance(address, denom)`     | `address: string`, `denom: string` | Balance for one denom.      |
| `allBalances(address)`        | `address: string`                  | All balances for address.   |
| `totalSupply(pagination?)`    | optional `PageRequest`             | Total supply of all denoms. |
| `supplyOf(denom)`             | `denom: string`                    | Total supply of one denom.  |
| `denomMetadata(denom)`        | `denom: string`                    | Metadata for denom.         |
| `denomsMetadata(pagination?)` | optional `PageRequest`             | Metadata for all denoms.    |

Example:

```typescript
import { Bank } from "@pulsara/tx-js";
const msg = Bank.Send({
  fromAddress: client.address!,
  toAddress: "core1...",
  amount: [{ denom: "ucore", amount: "1000000" }],
});
await client.sendTx([msg]);
const bal = await client.queryClients?.bank.balance("core1...", "ucore");
```

---

## Staking

**Type URL prefix:** `/cosmos.staking.v1beta1.`

### Message builders

| Function                                    | TypeUrl                        | Description                               |
| ------------------------------------------- | ------------------------------ | ----------------------------------------- |
| `Staking.Delegate(object)`                  | `MsgDelegate`                  | Delegate coins to a validator.            |
| `Staking.Undelegate(object)`                | `MsgUndelegate`                | Undelegate from a validator.              |
| `Staking.BeginRedelegate(object)`           | `MsgBeginRedelegate`           | Redelegate from one validator to another. |
| `Staking.CancelUnbondingDelegation(object)` | `MsgCancelUnbondingDelegation` | Cancel unbonding and re-bond.             |
| `Staking.CreateValidator(object)`           | `MsgCreateValidator`           | Create a new validator.                   |
| `Staking.EditValidator(object)`             | `MsgEditValidator`             | Edit validator description/commission.    |
| `Staking.UpdateParams(object)`              | `MsgUpdateParams`              | Update staking module params (authority). |

---

## Distribution

**Type URL prefix:** `/cosmos.distribution.v1beta1.`

### Message builders

| Function                                           | TypeUrl                          | Description                                    |
| -------------------------------------------------- | -------------------------------- | ---------------------------------------------- |
| `Distribution.WithdrawDelegatorReward(object)`     | `MsgWithdrawDelegatorReward`     | Withdraw delegator rewards from a validator.   |
| `Distribution.WithdrawValidatorCommission(object)` | `MsgWithdrawValidatorCommission` | Withdraw validator commission.                 |
| `Distribution.SetWithdrawAddress(object)`          | `MsgSetWithdrawAddress`          | Set withdraw address for rewards.              |
| `Distribution.FundCommunityPool(object)`           | `MsgFundCommunityPool`           | Fund the community pool.                       |
| `Distribution.CommunityPoolSpend(object)`          | `MsgCommunityPoolSpend`          | Spend from community pool (authority).         |
| `Distribution.UpdateParams(object)`                | `MsgUpdateParams`                | Update distribution module params (authority). |

### Query extension (client.queryClients.distribution)

| Method                                                 | Parameters                                                           | Description                  |
| ------------------------------------------------------ | -------------------------------------------------------------------- | ---------------------------- |
| `communityPool()`                                      | —                                                                    | Community pool balance.      |
| `delegationRewards(delegator, validator)`              | `delegator`, `validator`                                             | Rewards for one delegation.  |
| `delegationTotalRewards(delegator)`                    | `delegator`                                                          | Total rewards for delegator. |
| `delegatorValidators(delegator)`                       | `delegator`                                                          | Validators delegated to.     |
| `delegatorWithdrawAddress(delegator)`                  | `delegator`                                                          | Withdraw address.            |
| `params()`                                             | —                                                                    | Module params.               |
| `validatorCommission(validator)`                       | `validator`                                                          | Validator commission.        |
| `validatorOutstandingRewards(validator)`               | `validator`                                                          | Outstanding rewards.         |
| `validatorSlashes(validator, start, end, pagination?)` | `validator`, `starting_height`, `ending_height`, optional pagination | Validator slashes.           |

---

## Governance

**Type URL prefix:** `/cosmos.gov.v1beta1.`

### Message builders

| Function                            | TypeUrl             | Description                   |
| ----------------------------------- | ------------------- | ----------------------------- |
| `Governance.SubmitProposal(object)` | `MsgSubmitProposal` | Submit a governance proposal. |
| `Governance.Vote(object)`           | `MsgVote`           | Vote on a proposal.           |
| `Governance.VoteWeighted(object)`   | `MsgVoteWeighted`   | Weighted vote on a proposal.  |
| `Governance.Deposit(object)`        | `MsgDeposit`        | Deposit on a proposal.        |

### Query extension (client.queryClients.gov)

| Method                                                     | Parameters                                    | Description            |
| ---------------------------------------------------------- | --------------------------------------------- | ---------------------- |
| `params(parametersType)`                                   | `"deposit" \| "tallying" \| "voting"`         | Gov params by type.    |
| `proposals(proposalStatus, depositor, voter, pagination?)` | status, depositor, voter, optional pagination | List proposals.        |
| `proposal(proposal_id)`                                    | `proposal_id: bigint`                         | Single proposal.       |
| `deposits(proposal_id, pagination?)`                       | `proposal_id`, optional pagination            | Deposits for proposal. |
| `deposit(proposal_id, depositor)`                          | `proposal_id`, `depositor`                    | One deposit.           |
| `tally(proposal_id)`                                       | `proposal_id`                                 | Tally result.          |
| `votes(proposal_id, pagination?)`                          | `proposal_id`, optional pagination            | Votes for proposal.    |
| `vote(proposal_id, voter)`                                 | `proposal_id`, `voter`                        | One vote.              |

---

## Authz

**Type URL prefix:** `/cosmos.authz.v1beta1.`

### Message builders

| Function               | TypeUrl     | Description                           |
| ---------------------- | ----------- | ------------------------------------- |
| `Authz.Grant(object)`  | `MsgGrant`  | Grant authorization to a grantee.     |
| `Authz.Exec(object)`   | `MsgExec`   | Execute messages using granted authz. |
| `Authz.Revoke(object)` | `MsgRevoke` | Revoke a grant.                       |

---

## Feegrant

**Type URL prefix:** `/cosmos.feegrant.v1beta1.`

### Message builders

| Function                           | TypeUrl              | Description                       |
| ---------------------------------- | -------------------- | --------------------------------- |
| `Feegrant.GrantAllowance(object)`  | `MsgGrantAllowance`  | Grant fee allowance to a grantee. |
| `Feegrant.RevokeAllowance(object)` | `MsgRevokeAllowance` | Revoke fee allowance.             |

---

## Vesting

**Type URL prefix:** `/cosmos.vesting.v1beta1.`

### Message builders

| Function                                       | TypeUrl                           | Description                        |
| ---------------------------------------------- | --------------------------------- | ---------------------------------- |
| `Vesting.CreateVestingAccount(object)`         | `MsgCreateVestingAccount`         | Create a vesting account.          |
| `Vesting.CreatePeriodicVestingAccount(object)` | `MsgCreatePeriodicVestingAccount` | Create periodic vesting account.   |
| `Vesting.CreatePermanentLockedAccount(object)` | `MsgCreatePermanentLockedAccount` | Create permanently locked account. |

---

## Staking / Auth / Mint / IBC / Tx

The client’s query client also includes CosmJS extensions for **staking**, **auth**, **mint**, **feegrant**, **ibc**, and **tx**. These are set up internally; use `client.queryClients` and the corresponding methods from CosmJS/Stargate for queries (e.g. staking validators, account info, etc.). Message builders for the modules above are the main SDK surface; for other Cosmos messages you can use the registry from `Client.getRegistry()` and encode messages manually.

---

## See also

- [Client](client.md) — Connection and `queryClients`
- [Types](types.md) — Message interfaces (e.g. `BankMsgs`, `StakingMsgs`)
