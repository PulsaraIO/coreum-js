import { Coin } from "../cosmos/base/coin";
import { Feature } from "../coreum/asset/ft/v1/token";
import { ClassFeature } from "../coreum/asset/nft/v1/nft";
import { Any } from "../google/protobuf/any";
import {
  AccessConfig,
  Params as WasmParams,
} from "cosmjs-types/cosmwasm/wasm/v1/types";

// import {
//   Description,
//   CommissionRates,
//   Params as StakingParams,
// } from "../cosmos/staking/v1beta1/staking";
import {
  VoteOption,
  WeightedVoteOption,
} from "cosmjs-types/cosmos/gov/v1beta1/gov";
import {
  Input,
  Output,
  SendEnabled,
  Params as BankParams,
} from "cosmjs-types/cosmos/bank/v1beta1/bank";
import { Params as DistParams } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { Period } from "cosmjs-types/cosmos/vesting/v1beta1/vesting";
import { Grant } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import {
  CommissionRates,
  Description,
  Params as StakingParams,
} from "cosmjs-types/cosmos/staking/v1beta1/staking";
import { DataDynamicIndexedItem } from "../coreum/asset/nft/v1/types";

export namespace FTMsgs {
  export interface MsgIssue {
    issuer: string;
    symbol: string;
    subunit: string;
    precision: number;
    initialAmount: string;
    description?: string;
    features?: Feature[];
    /**
     * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * burn_amount. This value will be burnt on top of the send amount.
     */
    burnRate?: string;
    /**
     * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * amount sent to the token issuer account.
     */
    sendCommissionRate?: string;
    uri?: string;
    uriHash?: string;
  }

  export interface MsgMint {
    sender: string;
    coin: Coin;
  }

  export interface MsgBurn {
    sender: string;
    coin: Coin;
  }

  export interface MsgFreeze {
    sender: string;
    account: string;
    coin: Coin;
  }

  export interface MsgUnfreeze {
    sender: string;
    account: string;
    coin: Coin;
  }

  export interface MsgGloballyFreeze {
    sender: string;
    denom: string;
  }

  export interface MsgGloballyUnfreeze {
    sender: string;
    denom: string;
  }

  export interface MsgSetWhitelistedLimit {
    sender: string;
    account: string;
    coin: Coin;
  }

  export interface MsgClawback {
    sender: string;
    account: string;
    coin: Coin;
  }
}

export namespace NFTMsgs {
  /** MsgUpdateData defines message to update the dynamic data. */
  export interface MsgUpdateData {
    sender: string;
    classId: string;
    id: string;
    items: DataDynamicIndexedItem[];
  }

  /** MsgIssueClass defines message for the IssueClass method. */
  export interface MsgIssueClass {
    issuer: string;
    symbol: string;
    name: string;
    description?: string;
    uri: string;
    uriHash?: string;
    data?: Any;
    features?: ClassFeature[];
    royaltyRate?: string;
  }

  /** MsgMint defines message for the Mint method. */
  export interface MsgMint {
    sender: string;
    classId: string;
    id: string;
    uri: string;
    uriHash: string;
    data?: Any;
    recipient: string;
  }

  /** MsgBurn defines message for the Burn method. */
  export interface MsgBurn {
    sender: string;
    classId: string;
    id: string;
  }

  export interface MsgFreeze {
    sender: string;
    classId: string;
    id: string;
  }

  export interface MsgUnfreeze {
    sender: string;
    classId: string;
    id: string;
  }

  export interface MsgAddToWhitelist {
    sender: string;
    classId: string;
    id: string;
    account: string;
  }

  export interface MsgRemoveFromWhitelist {
    sender: string;
    classId: string;
    id: string;
    account: string;
  }
}

export namespace CWMsgs {
  /** MsgStoreCode submit Wasm code to the system */
  export interface MsgStoreCode {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission: AccessConfig | undefined;
  }

  /**
   * MsgInstantiateContract create a new smart contract instance for the given
   * code id.
   */
  export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
  }

  /**
   * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
   * request type.
   *
   * Since: 0.40
   */
  export interface MsgStoreAndInstantiateContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission: AccessConfig | undefined;
    /**
     * UnpinCode code on upload, optional. As default the uploaded contract is
     * pinned to cache.
     */
    unpinCode: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred from the authority account to the contract
     * on instantiation
     */
    funds: Coin[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
  }

  /**
   * MsgUnpinCodes is the MsgUnpinCodes request type.
   *
   * Since: 0.40
   */
  export interface MsgUnpinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the WASM codes */
    codeIds: number[];
  }

  /**
   * MsgPinCodes is the MsgPinCodes request type.
   *
   * Since: 0.40
   */
  export interface MsgPinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the new WASM codes */
    codeIds: number[];
  }

  /**
   * MsgSudoContract is the MsgSudoContract request type.
   *
   * Since: 0.40
   */
  export interface MsgSudoContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
  }

  /**
   * MsgUpdateParams is the MsgUpdateParams request type.
   *
   * Since: 0.40
   */
  export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/wasm parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: WasmParams | undefined;
  }

  /** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
  export interface MsgUpdateInstantiateConfig {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID references the stored WASM code */
    codeId: number;
    /** NewInstantiatePermission is the new access control */
    newInstantiatePermission: AccessConfig | undefined;
  }

  /** MsgClearAdmin removes any admin stored for a smart contract */
  export interface MsgClearAdmin {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
  }

  /** MsgUpdateAdmin sets a new admin for a smart contract */
  export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
  }

  /** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
  export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: number;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
  }

  /** MsgExecuteContract submits the given message data to a smart contract */
  export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
  }

  /**
   * MsgInstantiateContract2 create a new smart contract instance for the given
   * code id with a predicable address.
   */
  export interface MsgInstantiateContract2 {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
  }
}

export namespace AuthzMsgs {
  /**
   * MsgGrant is a request type for Grant method. It declares authorization to the grantee
   * on behalf of the granter with the provided expiration time.
   */
  export interface MsgGrant {
    granter: string;
    grantee: string;
    grant?: Grant;
  }

  /**
   * MsgExec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  export interface MsgExec {
    grantee: string;
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: Any[];
  }

  /**
   * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
   * granter's account with that has been granted to the grantee.
   */
  export interface MsgRevoke {
    granter: string;
    grantee: string;
    msgTypeUrl: string;
  }
}

export namespace StakingMsgs {
  /** MsgCreateValidator defines a SDK message for creating a new validator. */
  export interface MsgCreateValidator {
    description: Description | undefined;
    commission: CommissionRates | undefined;
    minSelfDelegation: string;
    /**
     * Deprecated: Use of Delegator Address in MsgCreateValidator is deprecated.
     * The validator address bytes and delegator address bytes refer to the same account while creating validator (defer
     * only in bech32 notation).
     *
     * @deprecated
     */
    delegatorAddress: string;
    validatorAddress: string;
    pubkey: Any | undefined;
    value: Coin | undefined;
  }

  /** MsgEditValidator defines a SDK message for editing an existing validator. */
  export interface MsgEditValidator {
    description: Description | undefined;
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commissionRate: string;
    minSelfDelegation: string;
  }

  /**
   * MsgDelegate defines a SDK message for performing a delegation of coins
   * from a delegator to a validator.
   */
  export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin | undefined;
  }

  /**
   * MsgBeginRedelegate defines a SDK message for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: Coin | undefined;
  }

  /**
   * MsgUndelegate defines a SDK message for performing an undelegation from a
   * delegate and a validator.
   */
  export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin | undefined;
  }

  /**
   * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
   *
   * Since: cosmos-sdk 0.46
   */
  export interface MsgCancelUnbondingDelegation {
    delegatorAddress: string;
    validatorAddress: string;
    /** amount is always less than or equal to unbonding delegation entry balance */
    amount: Coin | undefined;
    /** creation_height is the height which the unbonding took place. */
    creationHeight: bigint;
  }

  /**
   * MsgUpdateParams is the Msg/UpdateParams request type.
   *
   * Since: cosmos-sdk 0.47
   */
  export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/staking parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: StakingParams | undefined;
  }
}

export namespace GovMsgs {
  /**
   * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
   * proposal Content.
   */
  export interface MsgSubmitProposal {
    /** content is the proposal's content. */
    content: Any | undefined;
    /** initial_deposit is the deposit value that must be paid at proposal submission. */
    initialDeposit: Coin[];
    /** proposer is the account address of the proposer. */
    proposer: string;
  }

  /** MsgVote defines a message to cast a vote. */
  export interface MsgVote {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** voter is the voter address for the proposal. */
    voter: string;
    /** option defines the vote option. */
    option: VoteOption;
  }

  /**
   * MsgVoteWeighted defines a message to cast a vote.
   *
   * Since: cosmos-sdk 0.43
   */
  export interface MsgVoteWeighted {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** voter is the voter address for the proposal. */
    voter: string;
    /** options defines the weighted vote options. */
    options: WeightedVoteOption[];
  }

  /** MsgDeposit defines a message to submit a deposit to an existing proposal. */
  export interface MsgDeposit {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** amount to be deposited by depositor. */
    amount: Coin[];
  }
}

export namespace FeegrantMsgs {
  /**
   * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
   * of fees from the account of Granter.
   */
  export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance: Any | undefined;
  }

  /** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
  export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
  }
}

export namespace BankMsgs {
  /** MsgSend represents a message to send coins from one account to another. */
  export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
  }

  /** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
  export interface MsgMultiSend {
    /**
     * Inputs, despite being `repeated`, only allows one sender input. This is
     * checked in MsgMultiSend's ValidateBasic.
     */
    inputs: Input[];
    outputs: Output[];
  }

  /**
   * MsgUpdateParams is the Msg/UpdateParams request type.
   *
   * Since: cosmos-sdk 0.47
   */
  export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/bank parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: BankParams | undefined;
  }

  /**
   * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
   *
   * Only entries to add/update/delete need to be included.
   * Existing SendEnabled entries that are not included in this
   * message are left unchanged.
   *
   * Since: cosmos-sdk 0.47
   */
  export interface MsgSetSendEnabled {
    authority: string;
    /** send_enabled is the list of entries to add or update. */
    sendEnabled: SendEnabled[];
    /**
     * use_default_for is a list of denoms that should use the params.default_send_enabled value.
     * Denoms listed here will have their SendEnabled entries deleted.
     * If a denom is included that doesn't have a SendEnabled entry,
     * it will be ignored.
     */
    useDefaultFor: string[];
  }
}

export namespace DistributionMsgs {
  /**
   * MsgSetWithdrawAddress sets the withdraw address for
   * a delegator (or validator self-delegation).
   */
  export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
  }

  /**
   * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
   * from a single validator.
   */
  export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
  }

  /**
   * MsgWithdrawValidatorCommission withdraws the full commission to the validator
   * address.
   */
  export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
  }

  /**
   * MsgFundCommunityPool allows an account to directly
   * fund the community pool.
   */
  export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
  }

  /**
   * MsgUpdateParams is the Msg/UpdateParams request type.
   *
   * Since: cosmos-sdk 0.47
   */
  export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: DistParams | undefined;
  }

  /**
   * MsgCommunityPoolSpend defines a message for sending tokens from the community
   * pool to another account. This message is typically executed via a governance
   * proposal with the governance module being the executing authority.
   *
   * Since: cosmos-sdk 0.47
   */
  export interface MsgCommunityPoolSpend {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    recipient: string;
    amount: Coin[];
  }

  /**
   * DepositValidatorRewardsPool defines the request structure to provide
   * additional rewards to delegators from a specific validator.
   *
   * Since: cosmos-sdk 0.48
   */
  export interface MsgDepositValidatorRewardsPool {
    depositor: string;
    validatorAddress: string;
    amount: Coin[];
  }
}

export namespace VestingMsgs {
  /**
   * MsgCreateVestingAccount defines a message that enables creating a vesting
   * account.
   */
  export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    /** end of vesting as unix time (in seconds). */
    endTime: bigint;
    delayed: boolean;
  }

  /**
   * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
   * locked account.
   *
   * Since: cosmos-sdk 0.46
   */
  export interface MsgCreatePermanentLockedAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
  }

  /**
   * MsgCreateVestingAccount defines a message that enables creating a vesting
   * account.
   *
   * Since: cosmos-sdk 0.46
   */
  export interface MsgCreatePeriodicVestingAccount {
    fromAddress: string;
    toAddress: string;
    /** start of vesting as unix time (in seconds). */
    startTime: bigint;
    vestingPeriods: Period[];
  }
}
