import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClient } from "@cosmjs/stargate";
export declare function setupDistributionExtension(base: QueryClient): {
    distribution: {
        communityPool: () => Promise<{
            pool: import("cosmjs-types/cosmos/base/v1beta1/coin").DecCoin[];
        }>;
        delegationRewards: (delegator: string, validator: string) => Promise<{
            rewards: import("cosmjs-types/cosmos/base/v1beta1/coin").DecCoin[];
        }>;
        delegationTotalRewards: (delegator: string) => Promise<{
            rewards: import("cosmjs-types/cosmos/distribution/v1beta1/distribution").DelegationDelegatorReward[];
            total: import("cosmjs-types/cosmos/base/v1beta1/coin").DecCoin[];
        }>;
        delegatorValidators: (delegator: string) => Promise<{
            validators: string[];
        }>;
        delegatorWithdrawAddress: (delegator: string) => Promise<{
            withdrawAddress: string;
        }>;
        params: () => Promise<{
            params?: import("cosmjs-types/cosmos/distribution/v1beta1/distribution").Params;
        }>;
        validatorCommission: (validator: string) => Promise<{
            commission?: import("cosmjs-types/cosmos/distribution/v1beta1/distribution").ValidatorAccumulatedCommission;
        }>;
        validatorOutstandingRewards: (validator: string) => Promise<{
            rewards?: import("cosmjs-types/cosmos/distribution/v1beta1/distribution").ValidatorOutstandingRewards;
        }>;
        validatorSlashes: (validator: string, starting_height: Long, ending_height: Long, pagination?: PageRequest) => Promise<{
            slashes: import("cosmjs-types/cosmos/distribution/v1beta1/distribution").ValidatorSlashEvent[];
            pagination?: import("cosmjs-types/cosmos/base/query/v1beta1/pagination").PageResponse;
        }>;
    };
};
