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
/**
 * Module to generate the Messages related to the Authz module of the Blockchain
 */
export var Authz;
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
            value: MsgGrant.fromPartial(object),
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
            value: MsgExec.fromPartial(object),
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
            value: MsgRevoke.fromPartial(object),
        };
    };
})(Authz || (Authz = {}));
/**
 * Module to generate the Messages related to the Staking module of the Blockchain
 */
export var Staking;
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
            value: MsgBeginRedelegate.fromPartial(object),
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
            value: MsgCancelUnbondingDelegation.fromPartial(object),
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
            value: MsgCreateValidator.fromPartial(object),
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
            value: MsgDelegate.fromPartial(object),
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
            value: MsgEditValidator.fromPartial(object),
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
            value: MsgUndelegate.fromPartial(object),
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
            value: SMsgUpdateParams.fromPartial(object),
        };
    };
})(Staking || (Staking = {}));
/**
 * Module to generate the Messages related to the Governance module of the Blockchain
 */
export var Governance;
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
            value: MsgDeposit.fromPartial(object),
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
            value: MsgSubmitProposal.fromPartial(object),
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
            value: MsgVote.fromPartial(object),
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
            value: MsgVoteWeighted.fromPartial(object),
        };
    };
})(Governance || (Governance = {}));
/**
 * Module to generate the Messages related to the Feegrant module of the Blockchain
 */
export var Feegrant;
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
            value: MsgGrantAllowance.fromPartial(object),
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
            value: MsgRevokeAllowance.fromPartial(object),
        };
    };
})(Feegrant || (Feegrant = {}));
/**
 * Module to generate the Messages related to the Bank module of the Blockchain
 */
export var Bank;
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
            value: MsgMultiSend.fromPartial(object),
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
            value: MsgSend.fromPartial(object),
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
            value: MsgSetSendEnabled.fromPartial(object),
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
            value: MsgUpdateParams.fromPartial(object),
        };
    };
})(Bank || (Bank = {}));
/**
 * Module to generate the Messages related to the Distribution module of the Blockchain
 */
export var Distribution;
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
            value: MsgWithdrawDelegatorReward.fromPartial(object),
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
            value: DMsgUpdateParams.fromPartial(object),
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
            value: MsgWithdrawValidatorCommission.fromPartial(object),
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
            value: MsgCommunityPoolSpend.fromPartial(object),
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
            value: MsgDepositValidatorRewardsPool.fromPartial(object),
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
            value: MsgFundCommunityPool.fromPartial(object),
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
            value: MsgSetWithdrawAddress.fromPartial(object),
        };
    };
})(Distribution || (Distribution = {}));
/**
 * Module to generate the Messages related to the Vesting module of the Blockchain
 */
export var Vesting;
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