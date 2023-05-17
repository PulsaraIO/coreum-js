"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distribution = exports.Bank = exports.Feegrant = exports.Governance = void 0;
const tx_1 = require("./gov/v1beta1/tx");
const tx_2 = require("./feegrant/v1beta1/tx");
const tx_3 = require("./bank/v1beta1/tx");
const tx_4 = require("./distribution/v1beta1/tx");
const govBaseUrl = "/cosmos.gov.v1beta1.";
const fgBaseUrl = "/cosmos.feegrant.v1beta1.";
const bankBaseUrl = "/cosmos.bank.v1beta1.";
const distBaseUrl = "/cosmos.distribution.v1beta1.";
var Governance;
(function (Governance) {
    Governance.Deposit = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgDeposit",
            value: tx_1.MsgDeposit.fromPartial(object),
        };
    };
    Governance.SubmitProposal = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgSubmitProposal",
            value: tx_1.MsgSubmitProposal.fromPartial(object),
        };
    };
    Governance.Vote = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgVote",
            value: tx_1.MsgVote.fromPartial(object),
        };
    };
    Governance.VoteWeighted = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgVoteWeighted",
            value: tx_1.MsgVoteWeighted.fromPartial(object),
        };
    };
})(Governance = exports.Governance || (exports.Governance = {}));
var Feegrant;
(function (Feegrant) {
    Feegrant.GrantAllowance = function (object) {
        return {
            typeUrl: fgBaseUrl + "MsgGrantAllowance",
            value: tx_2.MsgGrantAllowance.fromPartial(object),
        };
    };
    Feegrant.RevokeAllowance = function (object) {
        return {
            typeUrl: fgBaseUrl + "MsgRevokeAllowance",
            value: tx_2.MsgRevokeAllowance.fromPartial(object),
        };
    };
})(Feegrant = exports.Feegrant || (exports.Feegrant = {}));
var Bank;
(function (Bank) {
    Bank.MultiSend = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgMultiSend",
            value: tx_3.MsgMultiSend.fromPartial(object),
        };
    };
    Bank.Send = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgSend",
            value: tx_3.MsgSend.fromPartial(object),
        };
    };
    Bank.SetSendEnabled = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgSetSendEnabled",
            value: tx_3.MsgSetSendEnabled.fromPartial(object),
        };
    };
    Bank.UpdateParams = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgUpdateParams",
            value: tx_3.MsgUpdateParams.fromPartial(object),
        };
    };
})(Bank = exports.Bank || (exports.Bank = {}));
var Distribution;
(function (Distribution) {
    Distribution.WithdrawDelegatorReward = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgWithdrawDelegatorReward",
            value: tx_4.MsgWithdrawDelegatorReward.fromPartial(object),
        };
    };
    Distribution.UpdateParams = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgUpdateParams",
            value: tx_4.MsgUpdateParams.fromPartial(object),
        };
    };
    Distribution.WithdrawValidatorCommission = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgWithdrawValidatorCommission",
            value: tx_4.MsgWithdrawValidatorCommission.fromPartial(object),
        };
    };
    Distribution.CommunityPoolSpend = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgCommunityPoolSpend",
            value: tx_4.MsgCommunityPoolSpend.fromPartial(object),
        };
    };
    Distribution.DepositValidatorRewardsPool = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgDepositValidatorRewardsPool",
            value: tx_4.MsgDepositValidatorRewardsPool.fromPartial(object),
        };
    };
    Distribution.FundCommunityPool = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgFundCommunityPool",
            value: tx_4.MsgFundCommunityPool.fromPartial(object),
        };
    };
    Distribution.SetWithdrawAddress = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgSetWithdrawAddress",
            value: tx_4.MsgSetWithdrawAddress.fromPartial(object),
        };
    };
})(Distribution = exports.Distribution || (exports.Distribution = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29zbW9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQU8wQjtBQUUxQiw4Q0FBOEU7QUFFOUUsMENBSzJCO0FBRTNCLGtEQVFtQztBQUVuQyxNQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQztBQUMxQyxNQUFNLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztBQUM5QyxNQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztBQUM1QyxNQUFNLFdBQVcsR0FBRywrQkFBK0IsQ0FBQztBQUVwRCxJQUFpQixVQUFVLENBb0MxQjtBQXBDRCxXQUFpQixVQUFVO0lBQ1osa0JBQU8sR0FBRyxVQUNyQixNQUFTO1FBRVQsT0FBTztZQUNMLE9BQU8sRUFBRSxVQUFVLEdBQUcsWUFBWTtZQUNsQyxLQUFLLEVBQUUsZUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLHlCQUFjLEdBQUcsVUFFNUIsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsVUFBVSxHQUFHLG1CQUFtQjtZQUN6QyxLQUFLLEVBQUUsc0JBQWlCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUM3QyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsZUFBSSxHQUFHLFVBQ2xCLE1BQVM7UUFFVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLFVBQVUsR0FBRyxTQUFTO1lBQy9CLEtBQUssRUFBRSxZQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsdUJBQVksR0FBRyxVQUUxQixNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxVQUFVLEdBQUcsaUJBQWlCO1lBQ3ZDLEtBQUssRUFBRSxvQkFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDM0MsQ0FBQztJQUNKLENBQUMsQ0FB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