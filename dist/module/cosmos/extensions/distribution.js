import { QueryClientImpl } from "cosmjs-types/cosmos/distribution/v1beta1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupDistributionExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        distribution: {
            communityPool: async () => {
                const response = await queryService.CommunityPool({});
                return { ...response };
            },
            delegationRewards: async (delegator, validator) => {
                const response = await queryService.DelegationRewards({
                    delegatorAddress: delegator,
                    validatorAddress: validator,
                });
                return { ...response };
            },
            delegationTotalRewards: async (delegator) => {
                const response = await queryService.DelegationTotalRewards({
                    delegatorAddress: delegator,
                });
                return { ...response };
            },
            delegatorValidators: async (delegator) => {
                const response = await queryService.DelegatorValidators({
                    delegatorAddress: delegator,
                });
                return { ...response };
            },
            delegatorWithdrawAddress: async (delegator) => {
                const response = await queryService.DelegatorWithdrawAddress({
                    delegatorAddress: delegator,
                });
                return { ...response };
            },
            params: async () => {
                const response = await queryService.Params({});
                return { ...response };
            },
            validatorCommission: async (validator) => {
                const response = await queryService.ValidatorCommission({
                    validatorAddress: validator,
                });
                return { ...response };
            },
            validatorOutstandingRewards: async (validator) => {
                const response = await queryService.ValidatorOutstandingRewards({
                    validatorAddress: validator,
                });
                return { ...response };
            },
            validatorSlashes: async (validator, starting_height, ending_height, pagination) => {
                const response = await queryService.ValidatorSlashes({
                    validatorAddress: validator,
                    startingHeight: starting_height,
                    endingHeight: ending_height,
                    pagination,
                });
                return { ...response };
            },
        },
    };
}
