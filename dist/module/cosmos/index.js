import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted, } from "./gov/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./feegrant/v1beta1/tx";
import { MsgMultiSend, MsgSend, MsgSetSendEnabled, MsgUpdateParams, } from "./bank/v1beta1/tx";
import { MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool, MsgFundCommunityPool, MsgSetWithdrawAddress, MsgUpdateParams as DMsgUpdateParams, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, } from "./distribution/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount, MsgCreatePermanentLockedAccount, MsgCreateVestingAccount, } from "./vesting/v1beta1/tx";
import { MsgBeginRedelegate, MsgCancelUnbondingDelegation, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate, MsgUpdateParams as SMsgUpdateParams, } from "./staking/v1beta1/tx";
const stakeBaseUrl = "/cosmos.staking.v1beta1.";
const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";
const distBaseUrl = "/cosmos.distribution.v1beta1.";
const vestBaseUrl = "/cosmos.vesting.v1beta1.";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29zbW9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxlQUFlLEdBR2hCLE1BQU0sa0JBQWtCLENBQUM7QUFFMUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUUsT0FBTyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDhCQUE4QixFQUM5QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLGVBQWUsSUFBSSxnQkFBZ0IsRUFDbkMsMEJBQTBCLEVBQzFCLDhCQUE4QixHQUMvQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsK0JBQStCLEVBQy9CLHVCQUF1QixHQUN4QixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsNEJBQTRCLEVBQzVCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixlQUFlLElBQUksZ0JBQWdCLEdBQ3BDLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsTUFBTSxZQUFZLEdBQUcsMEJBQTBCLENBQUM7QUFDaEQsTUFBTSxVQUFVLEdBQUcsc0JBQXNCLENBQUM7QUFDMUMsTUFBTSxTQUFTLEdBQUcsMkJBQTJCLENBQUM7QUFDOUMsTUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFDNUMsTUFBTSxXQUFXLEdBQUcsK0JBQStCLENBQUM7QUFDcEQsTUFBTSxXQUFXLEdBQUcsMEJBQTBCLENBQUM7QUFFL0MsTUFBTSxLQUFXLE9BQU8sQ0ErRHZCO0FBL0RELFdBQWlCLE9BQU87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