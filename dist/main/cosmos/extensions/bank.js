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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3Ntb3MvZXh0ZW5zaW9ucy9iYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlEQUFnRTtBQUNoRSxpREFBd0Q7QUFDeEQsK0NBQXdFO0FBRXhFLFNBQWdCLGtCQUFrQixDQUFDLElBQWlCO0lBQ2xELE1BQU0sR0FBRyxHQUFHLElBQUEsa0NBQXVCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLE9BQU87UUFDTCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQWUsRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDaEQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBQ0QsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFlLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FDakQsK0JBQXVCLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FDakQsQ0FBQztnQkFDRixPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDO1lBRUQsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUF3QixFQUFFLEVBQUU7Z0JBQzlDLE1BQU0sY0FBYyxHQUFHLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBRXRFLE9BQU87b0JBQ0wsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO29CQUM3QixVQUFVLEVBQUUsY0FBYyxDQUFDLFVBQVU7aUJBQ3RDLENBQUM7WUFDSixDQUFDO1lBRUQsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDaEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzFELE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7WUFFRCxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUNyQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFFakUsT0FBTyxRQUFRLENBQUM7WUFDbEIsQ0FBQztZQUVELGNBQWMsRUFBRSxLQUFLLEVBQUUsVUFBd0IsRUFBRSxFQUFFO2dCQUNqRCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFFeEUsT0FBTyxTQUFTLENBQUM7WUFDbkIsQ0FBQztTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUE1Q0QsZ0RBNENDIn0=