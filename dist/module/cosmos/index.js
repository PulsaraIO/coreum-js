import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted, } from "./gov/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./feegrant/v1beta1/tx";
import { MsgMultiSend, MsgSend, MsgSetSendEnabled, MsgUpdateParams, } from "./bank/v1beta1/tx";
import { MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool, MsgFundCommunityPool, MsgSetWithdrawAddress, MsgUpdateParams as DMsgUpdateParams, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, } from "./distribution/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount, MsgCreatePermanentLockedAccount, MsgCreateVestingAccount, } from "./vesting/v1beta1/tx";
import { MsgBeginRedelegate, MsgCancelUnbondingDelegation, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate, MsgUpdateParams as SMsgUpdateParams, } from "./staking/v1beta1/tx";
import { MsgExec, MsgGrant, MsgRevoke } from "./authz/v1beta1/tx";
const authzBaseUrl = "/cosmos.authz.v1beta1.";
const stakeBaseUrl = "/cosmos.staking.v1beta1.";
const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";
const distBaseUrl = "/cosmos.distribution.v1beta1.";
const vestBaseUrl = "/cosmos.vesting.v1beta1.";
export var Authz;
(function (Authz) {
    Authz.Grant = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgGrant",
            value: MsgGrant.fromPartial(object),
        };
    };
    Authz.Exec = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgExec",
            value: MsgExec.fromPartial(object),
        };
    };
    Authz.Revoke = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgRevoke",
            value: MsgRevoke.fromPartial(object),
        };
    };
})(Authz || (Authz = {}));
export var Staking;
(function (Staking) {
    Staking.BeginRedelegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgBeginRedelegate",
            value: MsgBeginRedelegate.fromPartial(object),
        };
    };
    Staking.CancelUnbondingDelegation = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgCancelUnbondingDelegation",
            value: MsgCancelUnbondingDelegation.fromPartial(object),
        };
    };
    Staking.CreateValidator = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgCreateValidator",
            value: MsgCreateValidator.fromPartial(object),
        };
    };
    Staking.Delegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgDelegate",
            value: MsgDelegate.fromPartial(object),
        };
    };
    Staking.EditValidator = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgEditValidator",
            value: MsgEditValidator.fromPartial(object),
        };
    };
    Staking.Undelegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgUndelegate",
            value: MsgUndelegate.fromPartial(object),
        };
    };
    Staking.UpdateParams = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgUpdateParams",
            value: SMsgUpdateParams.fromPartial(object),
        };
    };
})(Staking || (Staking = {}));
export var Governance;
(function (Governance) {
    Governance.Deposit = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgDeposit",
            value: MsgDeposit.fromPartial(object),
        };
    };
    Governance.SubmitProposal = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgSubmitProposal",
            value: MsgSubmitProposal.fromPartial(object),
        };
    };
    Governance.Vote = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgVote",
            value: MsgVote.fromPartial(object),
        };
    };
    Governance.VoteWeighted = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgVoteWeighted",
            value: MsgVoteWeighted.fromPartial(object),
        };
    };
})(Governance || (Governance = {}));
export var Feegrant;
(function (Feegrant) {
    Feegrant.GrantAllowance = function (object) {
        return {
            typeUrl: fgBaseUrl + "MsgGrantAllowance",
            value: MsgGrantAllowance.fromPartial(object),
        };
    };
    Feegrant.RevokeAllowance = function (object) {
        return {
            typeUrl: fgBaseUrl + "MsgRevokeAllowance",
            value: MsgRevokeAllowance.fromPartial(object),
        };
    };
})(Feegrant || (Feegrant = {}));
export var Bank;
(function (Bank) {
    Bank.MultiSend = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgMultiSend",
            value: MsgMultiSend.fromPartial(object),
        };
    };
    Bank.Send = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgSend",
            value: MsgSend.fromPartial(object),
        };
    };
    Bank.SetSendEnabled = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgSetSendEnabled",
            value: MsgSetSendEnabled.fromPartial(object),
        };
    };
    Bank.UpdateParams = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgUpdateParams",
            value: MsgUpdateParams.fromPartial(object),
        };
    };
})(Bank || (Bank = {}));
export var Distribution;
(function (Distribution) {
    Distribution.WithdrawDelegatorReward = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgWithdrawDelegatorReward",
            value: MsgWithdrawDelegatorReward.fromPartial(object),
        };
    };
    Distribution.UpdateParams = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgUpdateParams",
            value: DMsgUpdateParams.fromPartial(object),
        };
    };
    Distribution.WithdrawValidatorCommission = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgWithdrawValidatorCommission",
            value: MsgWithdrawValidatorCommission.fromPartial(object),
        };
    };
    Distribution.CommunityPoolSpend = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgCommunityPoolSpend",
            value: MsgCommunityPoolSpend.fromPartial(object),
        };
    };
    Distribution.DepositValidatorRewardsPool = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgDepositValidatorRewardsPool",
            value: MsgDepositValidatorRewardsPool.fromPartial(object),
        };
    };
    Distribution.FundCommunityPool = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgFundCommunityPool",
            value: MsgFundCommunityPool.fromPartial(object),
        };
    };
    Distribution.SetWithdrawAddress = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgSetWithdrawAddress",
            value: MsgSetWithdrawAddress.fromPartial(object),
        };
    };
})(Distribution || (Distribution = {}));
export var Vesting;
(function (Vesting) {
    Vesting.CreateVestingAccount = function (object) {
        return {
            typeUrl: vestBaseUrl + "MsgCreateVestingAccount",
            value: MsgCreateVestingAccount.fromPartial(object),
        };
    };
    Vesting.CreatePeriodicVestingAccount = function (object) {
        return {
            typeUrl: vestBaseUrl + "MsgCreatePeriodicVestingAccount",
            value: MsgCreatePeriodicVestingAccount.fromPartial(object),
        };
    };
    Vesting.CreatePermanentLockedAccount = function (object) {
        return {
            typeUrl: vestBaseUrl + "MsgCreatePermanentLockedAccount",
            value: MsgCreatePermanentLockedAccount.fromPartial(object),
        };
    };
})(Vesting || (Vesting = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29zbW9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxlQUFlLEdBR2hCLE1BQU0sa0JBQWtCLENBQUM7QUFFMUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUUsT0FBTyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDhCQUE4QixFQUM5QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLGVBQWUsSUFBSSxnQkFBZ0IsRUFDbkMsMEJBQTBCLEVBQzFCLDhCQUE4QixHQUMvQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsK0JBQStCLEVBQy9CLHVCQUF1QixHQUN4QixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsNEJBQTRCLEVBQzVCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixlQUFlLElBQUksZ0JBQWdCLEdBQ3BDLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsTUFBTSxZQUFZLEdBQUcsd0JBQXdCLENBQUM7QUFDOUMsTUFBTSxZQUFZLEdBQUcsMEJBQTBCLENBQUM7QUFDaEQsTUFBTSxVQUFVLEdBQUcsc0JBQXNCLENBQUM7QUFDMUMsTUFBTSxTQUFTLEdBQUcsMkJBQTJCLENBQUM7QUFDOUMsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFDNUMsTUFBTSxXQUFX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