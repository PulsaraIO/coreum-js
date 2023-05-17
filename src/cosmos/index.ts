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

const stakeBaseUrl = "/cosmos.staking.v1beta1.";
const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";
const distBaseUrl = "/cosmos.distribution.v1beta1.";
const vestBaseUrl = "/cosmos.vesting.v1beta1.";

export namespace Staking {
  export const BeginRedelegate = function <
    I extends Exact<DeepPartial<MsgBeginRedelegate>, I>
  >(object: I) {
    return {
      typeUrl: stakeBaseUrl + "MsgBeginRedelegate",
      value: MsgBeginRedelegate.fromPartial(object),
    };
  };

  export const CancelUnbondingDelegation = function <
    I extends Exact<DeepPartial<MsgCancelUnbondingDelegation>, I>
  >(object: I) {
    return {
      typeUrl: stakeBaseUrl + "MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.fromPartial(object),
    };
  };

  export const CreateValidator = function <
    I extends Exact<DeepPartial<MsgCreateValidator>, I>
  >(object: I) {
    return {
      typeUrl: stakeBaseUrl + "MsgCreateValidator",
      value: MsgCreateValidator.fromPartial(object),
    };
  };

  export const Delegate = function <
    I extends Exact<DeepPartial<MsgDelegate>, I>
  >(object: I) {
    return {
      typeUrl: stakeBaseUrl + "MsgDelegate",
      value: MsgDelegate.fromPartial(object),
    };
  };

  export const EditValidator = function <
    I extends Exact<DeepPartial<MsgEditValidator>, I>
  >(object: I) {
    return {
      typeUrl: stakeBaseUrl + "MsgEditValidator",
      value: MsgEditValidator.fromPartial(object),
    };
  };

  export const Undelegate = function <
    I extends Exact<DeepPartial<MsgUndelegate>, I>
  >(object: I) {
    return {
      typeUrl: stakeBaseUrl + "MsgUndelegate",
      value: MsgUndelegate.fromPartial(object),
    };
  };

  export const UpdateParams = function <
    I extends Exact<DeepPartial<SMsgUpdateParams>, I>
  >(object: I) {
    return {
      typeUrl: stakeBaseUrl + "MsgUpdateParams",
      value: SMsgUpdateParams.fromPartial(object),
    };
  };
}

export namespace Governance {
  export const Deposit = function <I extends Exact<DeepPartial<MsgDeposit>, I>>(
    object: I
  ) {
    return {
      typeUrl: govBaseUrl + "MsgDeposit",
      value: MsgDeposit.fromPartial(object),
    };
  };

  export const SubmitProposal = function <
    I extends Exact<DeepPartial<MsgSubmitProposal>, I>
  >(object: I) {
    return {
      typeUrl: govBaseUrl + "MsgSubmitProposal",
      value: MsgSubmitProposal.fromPartial(object),
    };
  };

  export const Vote = function <I extends Exact<DeepPartial<MsgVote>, I>>(
    object: I
  ) {
    return {
      typeUrl: govBaseUrl + "MsgVote",
      value: MsgVote.fromPartial(object),
    };
  };

  export const VoteWeighted = function <
    I extends Exact<DeepPartial<MsgVoteWeighted>, I>
  >(object: I) {
    return {
      typeUrl: govBaseUrl + "MsgVoteWeighted",
      value: MsgVoteWeighted.fromPartial(object),
    };
  };
}

export namespace Feegrant {
  export const GrantAllowance = function <
    I extends Exact<DeepPartial<MsgGrantAllowance>, I>
  >(object: I) {
    return {
      typeUrl: fgBaseUrl + "MsgGrantAllowance",
      value: MsgGrantAllowance.fromPartial(object),
    };
  };

  export const RevokeAllowance = function <
    I extends Exact<DeepPartial<MsgRevokeAllowance>, I>
  >(object: I) {
    return {
      typeUrl: fgBaseUrl + "MsgRevokeAllowance",
      value: MsgRevokeAllowance.fromPartial(object),
    };
  };
}

export namespace Bank {
  export const MultiSend = function <
    I extends Exact<DeepPartial<MsgMultiSend>, I>
  >(object: I) {
    return {
      typeUrl: bankBaseUrl + "MsgMultiSend",
      value: MsgMultiSend.fromPartial(object),
    };
  };

  export const Send = function <I extends Exact<DeepPartial<MsgSend>, I>>(
    object: I
  ) {
    return {
      typeUrl: bankBaseUrl + "MsgSend",
      value: MsgSend.fromPartial(object),
    };
  };

  export const SetSendEnabled = function <
    I extends Exact<DeepPartial<MsgSetSendEnabled>, I>
  >(object: I) {
    return {
      typeUrl: bankBaseUrl + "MsgSetSendEnabled",
      value: MsgSetSendEnabled.fromPartial(object),
    };
  };

  export const UpdateParams = function <
    I extends Exact<DeepPartial<MsgUpdateParams>, I>
  >(object: I) {
    return {
      typeUrl: bankBaseUrl + "MsgUpdateParams",
      value: MsgUpdateParams.fromPartial(object),
    };
  };
}

export namespace Distribution {
  export const WithdrawDelegatorReward = function <
    I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.fromPartial(object),
    };
  };

  export const UpdateParams = function <
    I extends Exact<DeepPartial<DMsgUpdateParams>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgUpdateParams",
      value: DMsgUpdateParams.fromPartial(object),
    };
  };

  export const WithdrawValidatorCommission = function <
    I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.fromPartial(object),
    };
  };

  export const CommunityPoolSpend = function <
    I extends Exact<DeepPartial<MsgCommunityPoolSpend>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.fromPartial(object),
    };
  };

  export const DepositValidatorRewardsPool = function <
    I extends Exact<DeepPartial<MsgDepositValidatorRewardsPool>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgDepositValidatorRewardsPool",
      value: MsgDepositValidatorRewardsPool.fromPartial(object),
    };
  };

  export const FundCommunityPool = function <
    I extends Exact<DeepPartial<MsgFundCommunityPool>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgFundCommunityPool",
      value: MsgFundCommunityPool.fromPartial(object),
    };
  };

  export const SetWithdrawAddress = function <
    I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>
  >(object: I) {
    return {
      typeUrl: distBaseUrl + "MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.fromPartial(object),
    };
  };
}

export namespace Vesting {
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
