"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupBankExtension = void 0;
const query_1 = require("../bank/v1beta1/query");
const query_2 = require("../bank/v1beta1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupBankExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_2.QueryClientImpl(rpc);
    return {
        bank: {
            balance: async (address, denom) => {
                const { balance } = await queryService.Balance({ address, denom });
                return balance;
            },
            allBalances: async (address) => {
                const { balances } = await queryService.AllBalances(query_1.QueryAllBalancesRequest.fromPartial({ address }));
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
exports.setupBankExtension = setupBankExtension;
