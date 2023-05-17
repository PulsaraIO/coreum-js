import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from "./gov/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./feegrant/v1beta1/tx";
import { MsgMultiSend, MsgSend, MsgSetSendEnabled, MsgUpdateParams } from "./bank/v1beta1/tx";
import { MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool, MsgFundCommunityPool, MsgSetWithdrawAddress, MsgUpdateParams as DMsgUpdateParams, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from "./distribution/v1beta1/tx";
export declare namespace Governance {
    const Deposit: <I extends {
        proposalId?: number;
        depositor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        proposalId?: number;
        depositor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["amount"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgDeposit>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgDeposit;
    };
    const SubmitProposal: <I extends {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        initialDeposit?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
    } & {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["content"], keyof import("../google/protobuf/any").Any>]: never; };
        initialDeposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_1 in Exclude<keyof I["initialDeposit"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_2 in Exclude<keyof I["initialDeposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        proposer?: string;
    } & { [K_3 in Exclude<keyof I, keyof MsgSubmitProposal>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgSubmitProposal;
    };
    const Vote: <I extends {
        proposalId?: number;
        voter?: string;
        option?: import("./gov/v1beta1/gov").VoteOption;
    } & {
        proposalId?: number;
        voter?: string;
        option?: import("./gov/v1beta1/gov").VoteOption;
    } & { [K in Exclude<keyof I, keyof MsgVote>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgVote;
    };
    const VoteWeighted: <I extends {
        proposalId?: number;
        voter?: string;
        options?: {
            option?: import("./gov/v1beta1/gov").VoteOption;
            weight?: string;
        }[];
    } & {
        proposalId?: number;
        voter?: string;
        options?: {
            option?: import("./gov/v1beta1/gov").VoteOption;
            weight?: string;
        }[] & ({
            option?: import("./gov/v1beta1/gov").VoteOption;
            weight?: string;
        } & {
            option?: import("./gov/v1beta1/gov").VoteOption;
            weight?: string;
        } & { [K in Exclude<keyof I["options"][number], keyof import("./gov/v1beta1/gov").WeightedVoteOption>]: never; })[] & { [K_1 in Exclude<keyof I["options"], keyof {
            option?: import("./gov/v1beta1/gov").VoteOption;
            weight?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgVoteWeighted>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgVoteWeighted;
    };
}
export declare namespace Feegrant {
    const GrantAllowance: <I extends {
        granter?: string;
        grantee?: string;
        allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        granter?: string;
        grantee?: string;
        allowance?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["allowance"], keyof import("../google/protobuf/any").Any>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgGrantAllowance>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgGrantAllowance;
    };
    const RevokeAllowance: <I extends {
        granter?: string;
        grantee?: string;
    } & {
        granter?: string;
        grantee?: string;
    } & { [K in Exclude<keyof I, keyof MsgRevokeAllowance>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgRevokeAllowance;
    };
}
export declare namespace Bank {
    const MultiSend: <I extends {
        inputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        outputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        inputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K in Exclude<keyof I["inputs"][number]["coins"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["inputs"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["inputs"][number], keyof import("./bank/v1beta1/bank").Input>]: never; })[] & { [K_3 in Exclude<keyof I["inputs"], keyof {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>]: never; };
        outputs?: {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_4 in Exclude<keyof I["outputs"][number]["coins"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_5 in Exclude<keyof I["outputs"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I["outputs"][number], keyof import("./bank/v1beta1/bank").Output>]: never; })[] & { [K_7 in Exclude<keyof I["outputs"], keyof {
            address?: string;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>]: never; };
    } & { [K_8 in Exclude<keyof I, keyof MsgMultiSend>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgMultiSend;
    };
    const Send: <I extends {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        fromAddress?: string;
        toAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["amount"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgSend>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgSend;
    };
    const SetSendEnabled: <I extends {
        authority?: string;
        sendEnabled?: {
            denom?: string;
            enabled?: boolean;
        }[];
        useDefaultFor?: string[];
    } & {
        authority?: string;
        sendEnabled?: {
            denom?: string;
            enabled?: boolean;
        }[] & ({
            denom?: string;
            enabled?: boolean;
        } & {
            denom?: string;
            enabled?: boolean;
        } & { [K in Exclude<keyof I["sendEnabled"][number], keyof import("./bank/v1beta1/bank").SendEnabled>]: never; })[] & { [K_1 in Exclude<keyof I["sendEnabled"], keyof {
            denom?: string;
            enabled?: boolean;
        }[]>]: never; };
        useDefaultFor?: string[] & string[] & { [K_2 in Exclude<keyof I["useDefaultFor"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof MsgSetSendEnabled>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgSetSendEnabled;
    };
    const UpdateParams: <I extends {
        authority?: string;
        params?: {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
        };
    } & {
        authority?: string;
        params?: {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[];
            defaultSendEnabled?: boolean;
        } & {
            sendEnabled?: {
                denom?: string;
                enabled?: boolean;
            }[] & ({
                denom?: string;
                enabled?: boolean;
            } & {
                denom?: string;
                enabled?: boolean;
            } & { [K in Exclude<keyof I["params"]["sendEnabled"][number], keyof import("./bank/v1beta1/bank").SendEnabled>]: never; })[] & { [K_1 in Exclude<keyof I["params"]["sendEnabled"], keyof {
                denom?: string;
                enabled?: boolean;
            }[]>]: never; };
            defaultSendEnabled?: boolean;
        } & { [K_2 in Exclude<keyof I["params"], keyof import("./bank/v1beta1/bank").Params>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgUpdateParams;
    };
}
export declare namespace Distribution {
    const WithdrawDelegatorReward: <I extends {
        delegatorAddress?: string;
        validatorAddress?: string;
    } & {
        delegatorAddress?: string;
        validatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgWithdrawDelegatorReward>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgWithdrawDelegatorReward;
    };
    const UpdateParams: <I extends {
        authority?: string;
        params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        };
    } & {
        authority?: string;
        params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        } & {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        } & { [K in Exclude<keyof I["params"], keyof import("./distribution/v1beta1/distribution").Params>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof DMsgUpdateParams>]: never; }>(object: I) => {
        typeUrl: string;
        value: DMsgUpdateParams;
    };
    const WithdrawValidatorCommission: <I extends {
        validatorAddress?: string;
    } & {
        validatorAddress?: string;
    } & { [K in Exclude<keyof I, "validatorAddress">]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgWithdrawValidatorCommission;
    };
    const CommunityPoolSpend: <I extends {
        authority?: string;
        recipient?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        authority?: string;
        recipient?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["amount"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgCommunityPoolSpend>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgCommunityPoolSpend;
    };
    const DepositValidatorRewardsPool: <I extends {
        depositor?: string;
        validatorAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        depositor?: string;
        validatorAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["amount"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgDepositValidatorRewardsPool>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgDepositValidatorRewardsPool;
    };
    const FundCommunityPool: <I extends {
        amount?: {
            denom?: string;
            amount?: string;
        }[];
        depositor?: string;
    } & {
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["amount"][number], keyof import("./base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        depositor?: string;
    } & { [K_2 in Exclude<keyof I, keyof MsgFundCommunityPool>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgFundCommunityPool;
    };
    const SetWithdrawAddress: <I extends {
        delegatorAddress?: string;
        withdrawAddress?: string;
    } & {
        delegatorAddress?: string;
        withdrawAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgSetWithdrawAddress>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgSetWithdrawAddress;
    };
}
