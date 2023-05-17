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

const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";

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
