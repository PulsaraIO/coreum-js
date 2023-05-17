import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted, } from "./gov/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./feegrant/v1beta1/tx";
import { MsgMultiSend, MsgSend, MsgSetSendEnabled, MsgUpdateParams, } from "./bank/v1beta1/tx";
import { MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool, MsgFundCommunityPool, MsgSetWithdrawAddress, MsgUpdateParams as DMsgUpdateParams, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, } from "./distribution/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount, MsgCreatePermanentLockedAccount, MsgCreateVestingAccount, } from "./vesting/v1beta1/tx";
const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";
const distBaseUrl = "/cosmos.distribution.v1beta1.";
const vestBaseUrl = "/cosmos.vesting.v1beta1.";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29zbW9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxlQUFlLEdBR2hCLE1BQU0sa0JBQWtCLENBQUM7QUFFMUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUUsT0FBTyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDhCQUE4QixFQUM5QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLGVBQWUsSUFBSSxnQkFBZ0IsRUFDbkMsMEJBQTBCLEVBQzFCLDhCQUE4QixHQUMvQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsK0JBQStCLEVBQy9CLHVCQUF1QixHQUN4QixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE1BQU0sVUFBVSxHQUFHLHNCQUFzQixDQUFDO0FBQzFDLE1BQU0sU0FBUyxHQUFHLDJCQUEyQixDQUFDO0FBQzlDLE1BQU0sV0FBVyxHQUFHLHVCQUF1QixDQUFDO0FBQzVDLE1BQU0sV0FBVyxHQUFHLCtCQUErQixDQUFDO0FBQ3BELE1BQU0sV0FBVyxHQUFHLDBCQUEwQixDQUFDO0FBRS9DLE1BQU0sS0FBVyxVQUFVLENBb0MxQjtBQXBDRCxXQUFpQixVQUFVO0lBQ1osa0JBQU8sR0FBRyxVQUNyQixNQUFTO1FBRVQsT0FBTztZQUNMLE9BQU8sRUFBRSxVQUFVLEdBQUcsWUFBWTtZQUNsQyxLQUFLLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLHlCQUFjLEdBQUcsVUFFNUIs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