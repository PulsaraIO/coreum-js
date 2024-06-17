import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClientImpl } from "cosmjs-types/cosmos/distribution/v1beta1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupDistributionExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    distribution: {
      communityPool: async () => {
        const response = await queryService.CommunityPool({});
        return { ...response };
      },
      delegationRewards: async (delegator: string, validator: string) => {
        const response = await queryService.DelegationRewards({
          delegatorAddress: delegator,
          validatorAddress: validator,
        });

        return { ...response };
      },
      delegationTotalRewards: async (delegator: string) => {
        const response = await queryService.DelegationTotalRewards({
          delegatorAddress: delegator,
        });

        return { ...response };
      },
      delegatorValidators: async (delegator: string) => {
        const response = await queryService.DelegatorValidators({
          delegatorAddress: delegator,
        });
        return { ...response };
      },
      delegatorWithdrawAddress: async (delegator: string) => {
        const response = await queryService.DelegatorWithdrawAddress({
          delegatorAddress: delegator,
        });

        return { ...response };
      },
      params: async () => {
        const response = await queryService.Params({});

        return { ...response };
      },
      validatorCommission: async (validator: string) => {
        const response = await queryService.ValidatorCommission({
          validatorAddress: validator,
        });

        return { ...response };
      },
      validatorOutstandingRewards: async (validator: string) => {
        const response = await queryService.ValidatorOutstandingRewards({
          validatorAddress: validator,
        });

        return { ...response };
      },
      validatorSlashes: async (
        validator: string,
        starting_height: Long,
        ending_height: Long,
        pagination?: PageRequest
      ) => {
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
