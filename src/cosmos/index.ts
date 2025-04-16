import {
  MsgDeposit,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
} from "cosmjs-types/cosmos/gov/v1beta1/tx";

import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";

// import {
//   MsgMultiSend,
//   MsgSend,
//   MsgSetSendEnabled,
//   MsgUpdateParams,
// } from "./bank/v1beta1/tx";

import {
  MsgCommunityPoolSpend,
  // MsgDepositValidatorRewardsPool,
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgUpdateParams as DMsgUpdateParams,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from "cosmjs-types/cosmos/distribution/v1beta1/tx";

import {
  MsgCreatePeriodicVestingAccount,
  MsgCreatePermanentLockedAccount,
  MsgCreateVestingAccount,
} from "cosmjs-types/cosmos/vesting/v1beta1/tx";

import {
  MsgBeginRedelegate,
  MsgCancelUnbondingDelegation,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
  MsgUpdateParams as SMsgUpdateParams,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";

import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from "cosmjs-types/cosmos/authz/v1beta1/tx";

import {
  MsgMultiSend,
  MsgSend,
  MsgSetSendEnabled,
  MsgUpdateParams,
} from "cosmjs-types/cosmos/bank/v1beta1/tx";

import {
  StakingMsgs,
  DistributionMsgs,
  BankMsgs,
  FeegrantMsgs,
  VestingMsgs,
  // AuthzMsgs,
  GovMsgs,
} from "../types/msgs";

const authzBaseUrl = "/cosmos.authz.v1beta1.";
const stakeBaseUrl = "/cosmos.staking.v1beta1.";
const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";
const distBaseUrl = "/cosmos.distribution.v1beta1.";
const vestBaseUrl = "/cosmos.vesting.v1beta1.";

export * from "cosmjs-types/cosmos/tx/v1beta1/tx";

/**
 * Module to generate the Messages related to the Authz module of the Blockchain
 */
export namespace Authz {
  /** MsgGrant message creator
   * Grants the provided authorization to the grantee on the granter's account with the provided expiration time. If there is already a grant for the given (granter, grantee, Authorization) triple, then the grant will be overwritten.
   *
   * @param object Represents the properties available for this MsgGrant message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Grant = function (object: MsgGrant) {
    return {
      typeUrl: authzBaseUrl + "MsgGrant",
      value: MsgGrant.fromPartial(object),
    };
  };

  /** MsgExec message creator
   * Attempts to execute the provided messages using authorizations granted to the grantee. Each message should have only one signer corresponding to the granter of the authorization.
   *
   * @param object Represents the properties available for this MsgExec message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Exec = function (object: MsgExec) {
    return {
      typeUrl: authzBaseUrl + "MsgExec",
      value: MsgExec.fromPartial(object),
    };
  };

  /** MsgRevoke message creator
   * Revokes any authorization corresponding to the provided method name on the granter's account that has been granted to the grantee.
   *
   * @param object Represents the properties available for this MsgRevoke message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Revoke = function (object: MsgRevoke) {
    return {
      typeUrl: authzBaseUrl + "MsgRevoke",
      value: MsgRevoke.fromPartial(object),
    };
  };
}

/**
 * Module to generate the Messages related to the Staking module of the Blockchain
 */
export namespace Staking {
  /** MsgBeginRedelegate message creator
   * Defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator.
   *
   * @param object Represents the properties available for this MsgBeginRedelegate message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const BeginRedelegate = function (
    object: StakingMsgs.MsgBeginRedelegate
  ) {
    return {
      typeUrl: stakeBaseUrl + "MsgBeginRedelegate",
      value: MsgBeginRedelegate.fromPartial(object),
    };
  };

  /** MsgCancelUnbondingDelegation message creator
   *
   * @param object Represents the properties available for this MsgCancelUnbondingDelegation message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const CancelUnbondingDelegation = function (
    object: MsgCancelUnbondingDelegation
  ) {
    return {
      typeUrl: stakeBaseUrl + "MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.fromPartial(object),
    };
  };

  /** MsgCreateValidator message creator
   * Defines a method for creating a new validator.
   *
   * @param object Represents the properties available for this MsgCreateValidator message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const CreateValidator = function (
    object: StakingMsgs.MsgCreateValidator
  ) {
    return {
      typeUrl: stakeBaseUrl + "MsgCreateValidator",
      value: MsgCreateValidator.fromPartial(object),
    };
  };

  /** MsgDelegate message creator
   * Defines a method for performing a delegation of coins from a delegator to a validator.
   *
   * @param object Represents the properties available for this MsgDelegate message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Delegate = function (object: StakingMsgs.MsgDelegate) {
    return {
      typeUrl: stakeBaseUrl + "MsgDelegate",
      value: MsgDelegate.fromPartial(object),
    };
  };

  /** MsgEditValidator message creator
   * Defines a method for editing an existing validator.
   *
   * @param object Represents the properties available for this MsgEditValidator message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const EditValidator = function (object: StakingMsgs.MsgEditValidator) {
    return {
      typeUrl: stakeBaseUrl + "MsgEditValidator",
      value: MsgEditValidator.fromPartial(object),
    };
  };

  /** MsgUndelegate message creator
   * Defines a method for performing an undelegation from a delegate and a validator.
   *
   * @param object Represents the properties available for this MsgUndelegate message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Undelegate = function (object: StakingMsgs.MsgUndelegate) {
    return {
      typeUrl: stakeBaseUrl + "MsgUndelegate",
      value: MsgUndelegate.fromPartial(object),
    };
  };

  /** MsgUpdateParams message creator
   *
   * @param object Represents the properties available for this MsgUpdateParams message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const UpdateParams = function (object: StakingMsgs.MsgUpdateParams) {
    return {
      typeUrl: stakeBaseUrl + "MsgUpdateParams",
      value: SMsgUpdateParams.fromPartial(object),
    };
  };
}

/**
 * Module to generate the Messages related to the Governance module of the Blockchain
 */
export namespace Governance {
  /** MsgDeposit message creator
   * Defines a method to add deposit on a specific proposal.
   *
   * @param object Represents the properties available for this MsgDeposit message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Deposit = function (object: MsgDeposit) {
    return {
      typeUrl: govBaseUrl + "MsgDeposit",
      value: MsgDeposit.fromPartial(object),
    };
  };

  /** MsgSubmitProposal message creator
   * Defines a method to create new proposal given a content.
   *
   * @param object Represents the properties available for this MsgSubmitProposal message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const SubmitProposal = function (object: GovMsgs.MsgSubmitProposal) {
    return {
      typeUrl: govBaseUrl + "MsgSubmitProposal",
      value: MsgSubmitProposal.fromPartial(object),
    };
  };

  /** MsgVote message creator
   * Defines a method to add a vote on a specific proposal.
   *
   * @param object Represents the properties available for this MsgVote message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Vote = function (object: MsgVote) {
    return {
      typeUrl: govBaseUrl + "MsgVote",
      value: MsgVote.fromPartial(object),
    };
  };

  /** MsgVoteWeighted message creator
   * Defines a method to add a weighted vote on a specific proposal.
   *
   * @param object Represents the properties available for this MsgVoteWeighted message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const VoteWeighted = function (object: MsgVoteWeighted) {
    return {
      typeUrl: govBaseUrl + "MsgVoteWeighted",
      value: MsgVoteWeighted.fromPartial(object),
    };
  };
}

/**
 * Module to generate the Messages related to the Feegrant module of the Blockchain
 */
export namespace Feegrant {
  /** MsgGrantAllowance message creator
   * Grants fee allowance to the grantee on the granter's account with the provided expiration time.
   *
   * @param object Represents the properties available for this MsgGrantAllowance message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const GrantAllowance = function (
    object: FeegrantMsgs.MsgGrantAllowance
  ) {
    return {
      typeUrl: fgBaseUrl + "MsgGrantAllowance",
      value: MsgGrantAllowance.fromPartial(object),
    };
  };

  /** MsgRevokeAllowance message creator
   * Revokes any fee allowance of granter's account that has been granted to the grantee.
   *
   * @param object Represents the properties available for this MsgRevokeAllowance message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const RevokeAllowance = function (
    object: FeegrantMsgs.MsgRevokeAllowance
  ) {
    return {
      typeUrl: fgBaseUrl + "MsgRevokeAllowance",
      value: MsgRevokeAllowance.fromPartial(object),
    };
  };
}

/**
 * Module to generate the Messages related to the Bank module of the Blockchain
 */
export namespace Bank {
  /** MsgMultiSend message creator
   * Defines a method for sending coins from some accounts to other accounts.
   *
   * @param object Represents the properties available for this MsgMultiSend message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const MultiSend = function (object: BankMsgs.MsgMultiSend) {
    return {
      typeUrl: bankBaseUrl + "MsgMultiSend",
      value: MsgMultiSend.fromPartial(object),
    };
  };

  /** MsgSend message creator
   * Defines a method for sending coins from one account to another account.
   *
   * @param object Represents the properties available for this MsgSend message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const Send = function (object: BankMsgs.MsgSend) {
    return {
      typeUrl: bankBaseUrl + "MsgSend",
      value: MsgSend.fromPartial(object),
    };
  };

  /** MsgSetSendEnabled message creator
   *
   * @param object Represents the properties available for this MsgSetSendEnabled message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const SetSendEnabled = function (object: BankMsgs.MsgSetSendEnabled) {
    return {
      typeUrl: bankBaseUrl + "MsgSetSendEnabled",
      value: MsgSetSendEnabled.fromPartial(object),
    };
  };

  /** MsgUpdateParams message creator
   *
   * @param object Represents the properties available for this MsgUpdateParams message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const UpdateParams = function (object: BankMsgs.MsgUpdateParams) {
    return {
      typeUrl: bankBaseUrl + "MsgUpdateParams",
      value: MsgUpdateParams.fromPartial(object),
    };
  };
}

/**
 * Module to generate the Messages related to the Distribution module of the Blockchain
 */
export namespace Distribution {
  /** MsgWithdrawDelegatorReward message creator
   * Defines a method to withdraw rewards of delegator from a single validator.
   *
   * @param object Represents the properties available for this MsgWithdrawDelegatorReward message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const WithdrawDelegatorReward = function (
    object: DistributionMsgs.MsgWithdrawDelegatorReward
  ) {
    return {
      typeUrl: distBaseUrl + "MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.fromPartial(object),
    };
  };

  /** MsgUpdateParams message creator
   *
   * @param object Represents the properties available for this MsgUpdateParams message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const UpdateParams = function (
    object: DistributionMsgs.MsgUpdateParams
  ) {
    return {
      typeUrl: distBaseUrl + "MsgUpdateParams",
      value: DMsgUpdateParams.fromPartial(object),
    };
  };

  /** MsgWithdrawValidatorCommission message creator
   * Defines a method to withdraw the full commission to the validator address.
   *
   * @param object Represents the properties available for this MsgWithdrawValidatorCommission message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const WithdrawValidatorCommission = function (
    object: DistributionMsgs.MsgWithdrawValidatorCommission
  ) {
    return {
      typeUrl: distBaseUrl + "MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.fromPartial(object),
    };
  };

  /** MsgCommunityPoolSpend message creator
   *
   * @param object Represents the properties available for this MsgCommunityPoolSpend message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const CommunityPoolSpend = function (
    object: DistributionMsgs.MsgCommunityPoolSpend
  ) {
    return {
      typeUrl: distBaseUrl + "MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.fromPartial(object),
    };
  };

  // /** MsgDepositValidatorRewardsPool message creator
  //  *
  //  * @param object Represents the properties available for this MsgDepositValidatorRewardsPool message.
  //  * @returns A Msg object with the typeUrl and value object for the proper message
  //  */
  // export const DepositValidatorRewardsPool = function (
  //   object: DistributionMsgs.MsgDepositValidatorRewardsPool
  // ) {
  //   return {
  //     typeUrl: distBaseUrl + "MsgDepositValidatorRewardsPool",
  //     value: MsgDepositValidatorRewardsPool.fromPartial(object),
  //   };
  // };

  /** MsgFundCommunityPool message creator
   * Defines a method to allow an account to directly fund the community pool.
   *
   * @param object Represents the properties available for this MsgUpdateParams message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const FundCommunityPool = function (
    object: DistributionMsgs.MsgFundCommunityPool
  ) {
    return {
      typeUrl: distBaseUrl + "MsgFundCommunityPool",
      value: MsgFundCommunityPool.fromPartial(object),
    };
  };

  /** MsgSetWithdrawAddress message creator
   * Defines a method to change the withdraw address for a delegator (or validator self-delegation).
   *
   * @param object Represents the properties available for this MsgSetWithdrawAddress message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const SetWithdrawAddress = function (
    object: DistributionMsgs.MsgSetWithdrawAddress
  ) {
    return {
      typeUrl: distBaseUrl + "MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.fromPartial(object),
    };
  };
}

/**
 * Module to generate the Messages related to the Vesting module of the Blockchain
 */
export namespace Vesting {
  /** MsgCreateVestingAccount message creator
   * Defines a method that enables creating a vesting account.
   *
   * @param object Represents the properties available for this MsgCreateVestingAccount message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const CreateVestingAccount = function (
    object: MsgCreateVestingAccount
  ) {
    return {
      typeUrl: vestBaseUrl + "MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.fromPartial(object),
    };
  };

  export const CreatePeriodicVestingAccount = function (
    object: MsgCreatePeriodicVestingAccount
  ) {
    return {
      typeUrl: vestBaseUrl + "MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.fromPartial(object),
    };
  };

  export const CreatePermanentLockedAccount = function (
    object: MsgCreatePermanentLockedAccount
  ) {
    return {
      typeUrl: vestBaseUrl + "MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.fromPartial(object),
    };
  };
}
