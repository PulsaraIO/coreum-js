import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryAllBalancesRequest } from "cosmjs-types/cosmos/bank/v1beta1/query";
import { QueryClientImpl } from "cosmjs-types/cosmos/bank/v1beta1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupBankExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    bank: {
      balance: async (address: string, denom: string) => {
        const { balance } = await queryService.Balance({ address, denom });
        return balance;
      },
      allBalances: async (address: string) => {
        const { balances } = await queryService.AllBalances(
          QueryAllBalancesRequest.fromPartial({ address })
        );
        return balances;
      },

      totalSupply: async (pagination?: PageRequest) => {
        const supplyResponse = await queryService.TotalSupply({ pagination });

        return {
          supply: supplyResponse.supply,
          pagination: supplyResponse.pagination,
        };
      },

      supplyOf: async (denom: string) => {
        const { amount } = await queryService.SupplyOf({ denom });
        return amount;
      },

      denomMetadata: async (denom: string) => {
        const { metadata } = await queryService.DenomMetadata({ denom });

        return metadata;
      },

      denomsMetadata: async (pagination?: PageRequest) => {
        const { metadatas } = await queryService.DenomsMetadata({ pagination });

        return metadatas;
      },
    },
  };
}
