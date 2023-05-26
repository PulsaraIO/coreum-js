"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vesting = exports.Distribution = exports.Bank = exports.Feegrant = exports.Governance = exports.Staking = exports.Authz = void 0;
const tx_1 = require("./gov/v1beta1/tx");
const tx_2 = require("./feegrant/v1beta1/tx");
const tx_3 = require("./bank/v1beta1/tx");
const tx_4 = require("./distribution/v1beta1/tx");
const tx_5 = require("./vesting/v1beta1/tx");
const tx_6 = require("./staking/v1beta1/tx");
const tx_7 = require("./authz/v1beta1/tx");
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
var Authz;
(function (Authz) {
    Authz.Grant = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgGrant",
            value: tx_7.MsgGrant.fromPartial(object),
        };
    };
    Authz.Exec = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgExec",
            value: tx_7.MsgExec.fromPartial(object),
        };
    };
    Authz.Revoke = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgRevoke",
            value: tx_7.MsgRevoke.fromPartial(object),
        };
    };
})(Authz = exports.Authz || (exports.Authz = {}));
/**
 * Module to generate the Messages related to the Staking module of the Blockchain
 */
var Staking;
(function (Staking) {
    Staking.BeginRedelegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgBeginRedelegate",
            value: tx_6.MsgBeginRedelegate.fromPartial(object),
        };
    };
    Staking.CancelUnbondingDelegation = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgCancelUnbondingDelegation",
            value: tx_6.MsgCancelUnbondingDelegation.fromPartial(object),
        };
    };
    Staking.CreateValidator = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgCreateValidator",
            value: tx_6.MsgCreateValidator.fromPartial(object),
        };
    };
    Staking.Delegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgDelegate",
            value: tx_6.MsgDelegate.fromPartial(object),
        };
    };
    Staking.EditValidator = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgEditValidator",
            value: tx_6.MsgEditValidator.fromPartial(object),
        };
    };
    Staking.Undelegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgUndelegate",
            value: tx_6.MsgUndelegate.fromPartial(object),
        };
    };
    Staking.UpdateParams = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgUpdateParams",
            value: tx_6.MsgUpdateParams.fromPartial(object),
        };
    };
})(Staking = exports.Staking || (exports.Staking = {}));
/**
 * Module to generate the Messages related to the Governance module of the Blockchain
 */
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
/**
 * Module to generate the Messages related to the Feegrant module of the Blockchain
 */
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
/**
 * Module to generate the Messages related to the Bank module of the Blockchain
 */
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
/**
 * Module to generate the Messages related to the Distribution module of the Blockchain
 */
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
/**
 * Module to generate the Messages related to the Vesting module of the Blockchain
 */
var Vesting;
(function (Vesting) {
    Vesting.CreateVestingAccount = function (object) {
        return {
            typeUrl: vestBaseUrl + "MsgCreateVestingAccount",
            value: tx_5.MsgCreateVestingAccount.fromPartial(object),
        };
    };
    Vesting.CreatePeriodicVestingAccount = function (object) {
        return {
            typeUrl: vestBaseUrl + "MsgCreatePeriodicVestingAccount",
            value: tx_5.MsgCreatePeriodicVestingAccount.fromPartial(object),
        };
    };
    Vesting.CreatePermanentLockedAccount = function (object) {
        return {
            typeUrl: vestBaseUrl + "MsgCreatePermanentLockedAccount",
            value: tx_5.MsgCreatePermanentLockedAccount.fromPartial(object),
        };
    };
})(Vesting = exports.Vesting || (exports.Vesting = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29zbW9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQU8wQjtBQUUxQiw4Q0FBOEU7QUFFOUUsMENBSzJCO0FBRTNCLGtEQVFtQztBQUVuQyw2Q0FJOEI7QUFFOUIsNkNBUThCO0FBRTlCLDJDQUFrRTtBQUVsRSxNQUFNLFlBQVksR0FBRyx3QkFBd0IsQ0FBQztBQUM5QyxNQUFNLFlBQVksR0FBRywwQkFBMEIsQ0FBQztBQUNoRCxNQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQztBQUMxQyxNQUFNLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztBQUM5QyxNQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztBQUM1QyxNQUFNLFdBQVcsR0FBRywrQkFBK0IsQ0FBQztBQUNwRCxNQUFNLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztBQUUvQzs7R0FFRztBQUNILElBQWlCLEtBQUssQ0EyQnJCO0FBM0JELFdBQWlCLEtBQUs7SUFDUCxXQUFLLEdBQUcsVUFDbkIsTUFBUztRQUVULE9BQU87WUFDTCxPQUFPLEVBQUUsWUFBWSxHQUFHLFVBQVU7WUFDbEMsS0FBSyxFQUFFLGFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3BDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxVQUFJLEdBQUcsVUFDbEIsTUFBUztRQUVULE9BQU87WUFDTCxPQUFPLEVBQUUsWUFBWSxHQUFHLFNBQVM7WUFDakMsS0FBSyxFQUFFLFlBQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxZQUFNLEdBQUcsVUFDcEIsTUFBUztRQUVULE9BQU87WUFDTCxPQUFPLEVBQUUsWUFBWSxHQUFHLFdBQVc7WUFDbkMsS0FBSyxFQUFFLGNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3JDLENBQUM7SUFDSixDQUFDLENB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