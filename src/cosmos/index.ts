import {
  MsgDeposit,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
  Exact,
  DeepPartial,
} from "./gov/v1beta1/tx";

import { MsgGrantAllowance, MsgRevokeAllowance } from "./feegrant/v1beta1/tx";

import {
  MsgMultiSend,
  MsgSend,
  MsgSetSendEnabled,
  MsgUpdateParams,
} from "./bank/v1beta1/tx";

import {
  MsgCommunityPoolSpend,
  MsgDepositValidatorRewardsPool,
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgUpdateParams as DMsgUpdateParams,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from "./distribution/v1beta1/tx";

import {
  MsgCreatePeriodicVestingAccount,
  MsgCreatePermanentLockedAccount,
  MsgCreateVestingAccount,
} from "./vesting/v1beta1/tx";

import {
  MsgBeginRedelegate,
  MsgCancelUnbondingDelegation,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
  MsgUpdateParams as SMsgUpdateParams,
} from "./staking/v1beta1/tx";

import { MsgExec, MsgGrant, MsgRevoke } from "./authz/v1beta1/tx";

const authzBaseUrl = "/cosmos.authz.v1beta1.";
const stakeBaseUrl = "/cosmos.staking.v1beta1.";
const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";
const distBaseUrl = "/cosmos.distribution.v1beta1.";
const vestBaseUrl = "/cosmos.vesting.v1beta1.";

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
  export const Grant = function <I extends Exact<DeepPartial<MsgGrant>, I>>(
    object: I
  ) {
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
  export const Exec = function <I extends Exact<DeepPartial<MsgExec>, I>>(
    object: I
  ) {
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
  export const Revoke = function <I extends Exact<DeepPartial<MsgRevoke>, I>>(
    object: I
  ) {
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
  export const BeginRedelegate = function <
    I extends Exact<DeepPartial<MsgBeginRedelegate>, I>
  >(object: I) {
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
  export const CancelUnbondingDelegation = function <
    I extends Exact<DeepPartial<MsgCancelUnbondingDelegation>, I>
  >(object: I) {
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
  export const CreateValidator = function <
    I extends Exact<DeepPartial<MsgCreateValidator>, I>
  >(object: I) {
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
  export const Delegate = function <
    I extends Exact<DeepPartial<MsgDelegate>, I>
  >(object: I) {
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
  export const EditValidator = function <
    I extends Exact<DeepPartial<MsgEditValidator>, I>
  >(object: I) {
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
  export const Undelegate = function <
    I extends Exact<DeepPartial<MsgUndelegate>, I>
  >(object: I) {
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
  export const UpdateParams = function <
    I extends Exact<DeepPartial<SMsgUpdateParams>, I>
  >(object: I) {
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
  export const Deposit = function <I extends Exact<DeepPartial<MsgDeposit>, I>>(
    object: I
  ) {
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
  export const SubmitProposal = function <
    I extends Exact<DeepPartial<MsgSubmitProposal>, I>
  >(object: I) {
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
  export const Vote = function <I extends Exact<DeepPartial<MsgVote>, I>>(
    object: I
  ) {
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
  export const VoteWeighted = function <
    I extends Exact<DeepPartial<MsgVoteWeighted>, I>
  >(object: I) {
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
  export const GrantAllowance = function <
    I extends Exact<DeepPartial<MsgGrantAllowance>, I>
  >(object: I) {
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
  export const RevokeAllowance = function <
    I extends Exact<DeepPartial<MsgRevokeAllowance>, I>
  >(object: I) {
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
  export const MultiSend = function <
    I extends Exact<DeepPartial<MsgMultiSend>, I>
  >(object: I) {
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
  export const Send = function <I extends Exact<DeepPartial<MsgSend>, I>>(
    object: I
  ) {
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
  export const SetSendEnabled = function <
    I extends Exact<DeepPartial<MsgSetSendEnabled>, I>
  >(object: I) {
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
  export const UpdateParams = function <
    I extends Exact<DeepPartial<MsgUpdateParams>, I>
  >(object: I) {
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
  export const WithdrawDelegatorReward = function <
    I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>
  >(object: I) {
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
  export const UpdateParams = function <
    I extends Exact<DeepPartial<DMsgUpdateParams>, I>
  >(object: I) {
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
  export const WithdrawValidatorCommission = function <
    I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>
  >(object: I) {
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
  export const CommunityPoolSpend = function <
    I extends Exact<DeepPartial<MsgCommunityPoolSpend>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.fromPartial(object),
    };
  };

  /** MsgDepositValidatorRewardsPool message creator
   *
   * @param object Represents the properties available for this MsgDepositValidatorRewardsPool message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const DepositValidatorRewardsPool = function <
    I extends Exact<DeepPartial<MsgDepositValidatorRewardsPool>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgDepositValidatorRewardsPool",
      value: MsgDepositValidatorRewardsPool.fromPartial(object),
    };
  };

  /** MsgFundCommunityPool message creator
   * Defines a method to allow an account to directly fund the community pool.
   *
   * @param object Represents the properties available for this MsgUpdateParams message.
   * @returns A Msg object with the typeUrl and value object for the proper message
   */
  export const FundCommunityPool = function <
    I extends Exact<DeepPartial<MsgFundCommunityPool>, I>
  >(object: I) {
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
  export const SetWithdrawAddress = function <
    I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>
  >(object: I) {
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
  export const CreateVestingAccount = function <
    I extends Exact<DeepPartial<MsgCreateVestingAccount>, I>
  >(object: I) {
    return {
      typeUrl: vestBaseUrl + "MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.fromPartial(object),
    };
  };

  export const CreatePeriodicVestingAccount = function <
    I extends Exact<DeepPartial<MsgCreatePeriodicVestingAccount>, I>
  >(object: I) {
    return {
      typeUrl: vestBaseUrl + "MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.fromPartial(object),
    };
  };

  export const CreatePermanentLockedAccount = function <
    I extends Exact<DeepPartial<MsgCreatePermanentLockedAccount>, I>
  >(object: I) {
    return {
      typeUrl: vestBaseUrl + "MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.fromPartial(object),
    };
  };
}
