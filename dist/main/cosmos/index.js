"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
__exportStar(require("./tx/v1beta1/tx"), exports);
/**
 * Module to generate the Messages related to the Authz module of the Blockchain
 */
var Authz;
(function (Authz) {
    /** MsgGrant message creator
     * Grants the provided authorization to the grantee on the granter's account with the provided expiration time. If there is already a grant for the given (granter, grantee, Authorization) triple, then the grant will be overwritten.
     *
     * @param object Represents the properties available for this MsgGrant message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Authz.Grant = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgGrant",
            value: tx_7.MsgGrant.fromPartial(object),
        };
    };
    /** MsgExec message creator
     * Attempts to execute the provided messages using authorizations granted to the grantee. Each message should have only one signer corresponding to the granter of the authorization.
     *
     * @param object Represents the properties available for this MsgExec message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Authz.Exec = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgExec",
            value: tx_7.MsgExec.fromPartial(object),
        };
    };
    /** MsgRevoke message creator
     * Revokes any authorization corresponding to the provided method name on the granter's account that has been granted to the grantee.
     *
     * @param object Represents the properties available for this MsgRevoke message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Authz.Revoke = function (object) {
        return {
            typeUrl: authzBaseUrl + "MsgRevoke",
            value: tx_7.MsgRevoke.fromPartial(object),
        };
    };
})(Authz || (exports.Authz = Authz = {}));
/**
 * Module to generate the Messages related to the Staking module of the Blockchain
 */
var Staking;
(function (Staking) {
    /** MsgBeginRedelegate message creator
     * Defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator.
     *
     * @param object Represents the properties available for this MsgBeginRedelegate message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Staking.BeginRedelegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgBeginRedelegate",
            value: tx_6.MsgBeginRedelegate.fromPartial(object),
        };
    };
    /** MsgCancelUnbondingDelegation message creator
     *
     * @param object Represents the properties available for this MsgCancelUnbondingDelegation message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Staking.CancelUnbondingDelegation = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgCancelUnbondingDelegation",
            value: tx_6.MsgCancelUnbondingDelegation.fromPartial(object),
        };
    };
    /** MsgCreateValidator message creator
     * Defines a method for creating a new validator.
     *
     * @param object Represents the properties available for this MsgCreateValidator message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Staking.CreateValidator = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgCreateValidator",
            value: tx_6.MsgCreateValidator.fromPartial(object),
        };
    };
    /** MsgDelegate message creator
     * Defines a method for performing a delegation of coins from a delegator to a validator.
     *
     * @param object Represents the properties available for this MsgDelegate message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Staking.Delegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgDelegate",
            value: tx_6.MsgDelegate.fromPartial(object),
        };
    };
    /** MsgEditValidator message creator
     * Defines a method for editing an existing validator.
     *
     * @param object Represents the properties available for this MsgEditValidator message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Staking.EditValidator = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgEditValidator",
            value: tx_6.MsgEditValidator.fromPartial(object),
        };
    };
    /** MsgUndelegate message creator
     * Defines a method for performing an undelegation from a delegate and a validator.
     *
     * @param object Represents the properties available for this MsgUndelegate message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Staking.Undelegate = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgUndelegate",
            value: tx_6.MsgUndelegate.fromPartial(object),
        };
    };
    /** MsgUpdateParams message creator
     *
     * @param object Represents the properties available for this MsgUpdateParams message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Staking.UpdateParams = function (object) {
        return {
            typeUrl: stakeBaseUrl + "MsgUpdateParams",
            value: tx_6.MsgUpdateParams.fromPartial(object),
        };
    };
})(Staking || (exports.Staking = Staking = {}));
/**
 * Module to generate the Messages related to the Governance module of the Blockchain
 */
var Governance;
(function (Governance) {
    /** MsgDeposit message creator
     * Defines a method to add deposit on a specific proposal.
     *
     * @param object Represents the properties available for this MsgDeposit message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Governance.Deposit = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgDeposit",
            value: tx_1.MsgDeposit.fromPartial(object),
        };
    };
    /** MsgSubmitProposal message creator
     * Defines a method to create new proposal given a content.
     *
     * @param object Represents the properties available for this MsgSubmitProposal message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Governance.SubmitProposal = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgSubmitProposal",
            value: tx_1.MsgSubmitProposal.fromPartial(object),
        };
    };
    /** MsgVote message creator
     * Defines a method to add a vote on a specific proposal.
     *
     * @param object Represents the properties available for this MsgVote message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Governance.Vote = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgVote",
            value: tx_1.MsgVote.fromPartial(object),
        };
    };
    /** MsgVoteWeighted message creator
     * Defines a method to add a weighted vote on a specific proposal.
     *
     * @param object Represents the properties available for this MsgVoteWeighted message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Governance.VoteWeighted = function (object) {
        return {
            typeUrl: govBaseUrl + "MsgVoteWeighted",
            value: tx_1.MsgVoteWeighted.fromPartial(object),
        };
    };
})(Governance || (exports.Governance = Governance = {}));
/**
 * Module to generate the Messages related to the Feegrant module of the Blockchain
 */
var Feegrant;
(function (Feegrant) {
    /** MsgGrantAllowance message creator
     * Grants fee allowance to the grantee on the granter's account with the provided expiration time.
     *
     * @param object Represents the properties available for this MsgGrantAllowance message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Feegrant.GrantAllowance = function (object) {
        return {
            typeUrl: fgBaseUrl + "MsgGrantAllowance",
            value: tx_2.MsgGrantAllowance.fromPartial(object),
        };
    };
    /** MsgRevokeAllowance message creator
     * Revokes any fee allowance of granter's account that has been granted to the grantee.
     *
     * @param object Represents the properties available for this MsgRevokeAllowance message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Feegrant.RevokeAllowance = function (object) {
        return {
            typeUrl: fgBaseUrl + "MsgRevokeAllowance",
            value: tx_2.MsgRevokeAllowance.fromPartial(object),
        };
    };
})(Feegrant || (exports.Feegrant = Feegrant = {}));
/**
 * Module to generate the Messages related to the Bank module of the Blockchain
 */
var Bank;
(function (Bank) {
    /** MsgMultiSend message creator
     * Defines a method for sending coins from some accounts to other accounts.
     *
     * @param object Represents the properties available for this MsgMultiSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Bank.MultiSend = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgMultiSend",
            value: tx_3.MsgMultiSend.fromPartial(object),
        };
    };
    /** MsgSend message creator
     * Defines a method for sending coins from one account to another account.
     *
     * @param object Represents the properties available for this MsgSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Bank.Send = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgSend",
            value: tx_3.MsgSend.fromPartial(object),
        };
    };
    /** MsgSetSendEnabled message creator
     *
     * @param object Represents the properties available for this MsgSetSendEnabled message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Bank.SetSendEnabled = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgSetSendEnabled",
            value: tx_3.MsgSetSendEnabled.fromPartial(object),
        };
    };
    /** MsgUpdateParams message creator
     *
     * @param object Represents the properties available for this MsgUpdateParams message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Bank.UpdateParams = function (object) {
        return {
            typeUrl: bankBaseUrl + "MsgUpdateParams",
            value: tx_3.MsgUpdateParams.fromPartial(object),
        };
    };
})(Bank || (exports.Bank = Bank = {}));
/**
 * Module to generate the Messages related to the Distribution module of the Blockchain
 */
var Distribution;
(function (Distribution) {
    /** MsgWithdrawDelegatorReward message creator
     * Defines a method to withdraw rewards of delegator from a single validator.
     *
     * @param object Represents the properties available for this MsgWithdrawDelegatorReward message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Distribution.WithdrawDelegatorReward = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgWithdrawDelegatorReward",
            value: tx_4.MsgWithdrawDelegatorReward.fromPartial(object),
        };
    };
    /** MsgUpdateParams message creator
     *
     * @param object Represents the properties available for this MsgUpdateParams message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Distribution.UpdateParams = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgUpdateParams",
            value: tx_4.MsgUpdateParams.fromPartial(object),
        };
    };
    /** MsgWithdrawValidatorCommission message creator
     * Defines a method to withdraw the full commission to the validator address.
     *
     * @param object Represents the properties available for this MsgWithdrawValidatorCommission message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Distribution.WithdrawValidatorCommission = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgWithdrawValidatorCommission",
            value: tx_4.MsgWithdrawValidatorCommission.fromPartial(object),
        };
    };
    /** MsgCommunityPoolSpend message creator
     *
     * @param object Represents the properties available for this MsgCommunityPoolSpend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Distribution.CommunityPoolSpend = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgCommunityPoolSpend",
            value: tx_4.MsgCommunityPoolSpend.fromPartial(object),
        };
    };
    /** MsgDepositValidatorRewardsPool message creator
     *
     * @param object Represents the properties available for this MsgDepositValidatorRewardsPool message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Distribution.DepositValidatorRewardsPool = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgDepositValidatorRewardsPool",
            value: tx_4.MsgDepositValidatorRewardsPool.fromPartial(object),
        };
    };
    /** MsgFundCommunityPool message creator
     * Defines a method to allow an account to directly fund the community pool.
     *
     * @param object Represents the properties available for this MsgUpdateParams message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Distribution.FundCommunityPool = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgFundCommunityPool",
            value: tx_4.MsgFundCommunityPool.fromPartial(object),
        };
    };
    /** MsgSetWithdrawAddress message creator
     * Defines a method to change the withdraw address for a delegator (or validator self-delegation).
     *
     * @param object Represents the properties available for this MsgSetWithdrawAddress message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    Distribution.SetWithdrawAddress = function (object) {
        return {
            typeUrl: distBaseUrl + "MsgSetWithdrawAddress",
            value: tx_4.MsgSetWithdrawAddress.fromPartial(object),
        };
    };
})(Distribution || (exports.Distribution = Distribution = {}));
/**
 * Module to generate the Messages related to the Vesting module of the Blockchain
 */
var Vesting;
(function (Vesting) {
    /** MsgCreateVestingAccount message creator
     * Defines a method that enables creating a vesting account.
     *
     * @param object Represents the properties available for this MsgCreateVestingAccount message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
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
})(Vesting || (exports.Vesting = Vesting = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29zbW9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBSzBCO0FBRTFCLDhDQUE4RTtBQUU5RSwwQ0FLMkI7QUFFM0Isa0RBUW1DO0FBRW5DLDZDQUk4QjtBQUU5Qiw2Q0FROEI7QUFFOUIsMkNBQWtFO0FBWWxFLE1BQU0sWUFBWSxHQUFHLHdCQUF3QixDQUFDO0FBQzlDLE1BQU0sWUFBWSxHQUFHLDBCQUEwQixDQUFDO0FBQ2hELE1BQU0sVUFBVSxHQUFHLHNCQUFzQixDQUFDO0FBQzFDLE1BQU0sU0FBUyxHQUFHLDJCQUEyQixDQUFDO0FBQzlDLE1BQU0sV0FBVyxHQUFHLHVCQUF1QixDQUFDO0FBQzVDLE1BQU0sV0FBVyxHQUFHLCtCQUErQixDQUFDO0FBQ3BELE1BQU0sV0FBVyxHQUFHLDBCQUEwQixDQUFDO0FBRS9DLGtEQUFnQztBQUVoQzs7R0FFRztBQUNILElBQWlCLEtBQUssQ0F1Q3JCO0FBdkNELFdBQWlCLEtBQUs7SUFDcEI7Ozs7O09BS0c7SUFDVSxXQUFLLEdBQUcsVUFBVSxNQUEwQjtRQUN2RCxPQUFPO1lBQ0wsT0FBTyxFQUFFLFlBQVksR0FBRyxVQUFVO1lBQ2xDLEtBQUssRUFBRSxhQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNwQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDVSxVQUFJLEdBQUcsVUFBVSxNQUF5QjtRQUNyRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLFlBQVksR0FBRyxTQUFTO1lBQ2pDLEtBQUssRUFBRSxZQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDVSxZQUFNLEdBQUcsVUFBVSxNQUEyQjtRQUN6RCxPQUFPO1lBQ0wsT0FBTyxFQUFFLFlBQVksR0FBRyxX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