"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDistributionExtension = void 0;
const query_1 = require("cosmjs-types/cosmos/distribution/v1beta1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupDistributionExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
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
exports.setupDistributionExtension = setupDistributionExtension;
