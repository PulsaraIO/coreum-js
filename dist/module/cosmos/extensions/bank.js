import { QueryAllBalancesRequest } from "cosmjs-types/cosmos/bank/v1beta1/query";
import { QueryClientImpl } from "cosmjs-types/cosmos/bank/v1beta1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupBankExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        bank: {
            balance: async (address, denom) => {
                const { balance } = await queryService.Balance({ address, denom });
                return balance;
            },
            allBalances: async (address) => {
                const { balances } = await queryService.AllBalances(QueryAllBalancesRequest.fromPartial({ address }));
                return balances;
            },
            totalSupply: async (pagination) => {
                const supplyResponse = await queryService.TotalSupply({ pagination });
                return {
                    supply: supplyResponse.supply,
                    pagination: supplyResponse.pagination,
                };
            },
            supplyOf: async (denom) => {
                const { amount } = await queryService.SupplyOf({ denom });
                return amount;
            },
            denomMetadata: async (denom) => {
                const { metadata } = await queryService.DenomMetadata({ denom });
                return metadata;
            },
            denomsMetadata: async (pagination) => {
                const { metadatas } = await queryService.DenomsMetadata({ pagination });
                return metadatas;
            },
        },
    };
}
