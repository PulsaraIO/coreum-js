"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDistributionExtension = setupDistributionExtension;
const query_1 = require("cosmjs-types/cosmos/distribution/v1beta1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupDistributionExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        distribution: {
            communityPool: async () => {
                const response = await queryService.CommunityPool({});
                return Object.assign({}, response);
            },
            delegationRewards: async (delegator, validator) => {
                const response = await queryService.DelegationRewards({
                    delegatorAddress: delegator,
                    validatorAddress: validator,
                });
                return Object.assign({}, response);
            },
            delegationTotalRewards: async (delegator) => {
                const response = await queryService.DelegationTotalRewards({
                    delegatorAddress: delegator,
                });
                return Object.assign({}, response);
            },
            delegatorValidators: async (delegator) => {
                const response = await queryService.DelegatorValidators({
                    delegatorAddress: delegator,
                });
                return Object.assign({}, response);
            },
            delegatorWithdrawAddress: async (delegator) => {
                const response = await queryService.DelegatorWithdrawAddress({
                    delegatorAddress: delegator,
                });
                return Object.assign({}, response);
            },
            params: async () => {
                const response = await queryService.Params({});
                return Object.assign({}, response);
            },
            validatorCommission: async (validator) => {
                const response = await queryService.ValidatorCommission({
                    validatorAddress: validator,
                });
                return Object.assign({}, response);
            },
            validatorOutstandingRewards: async (validator) => {
                const response = await queryService.ValidatorOutstandingRewards({
                    validatorAddress: validator,
                });
                return Object.assign({}, response);
            },
            validatorSlashes: async (validator, starting_height, ending_height, pagination) => {
                const response = await queryService.ValidatorSlashes({
                    validatorAddress: validator,
                    startingHeight: starting_height,
                    endingHeight: ending_height,
                    pagination,
                });
                return Object.assign({}, response);
            },
        },
    };
}
