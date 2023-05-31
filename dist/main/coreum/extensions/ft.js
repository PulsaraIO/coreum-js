"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupFTExtension = void 0;
const query_1 = require("../asset/ft/v1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupFTExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        ft: {
            params: async () => {
                return await queryService.Params({});
            },
            tokens: async (issuer, pagination) => {
                return await queryService.Tokens({ issuer, pagination });
            },
            token: async (denom) => {
                return await queryService.Token({ denom });
            },
            frozenBalances: async (account, pagination) => {
                return await queryService.FrozenBalances({ account, pagination });
            },
            frozenBalance: async (account, denom) => {
                return await queryService.FrozenBalance({ account, denom });
            },
            whitelistedBalances: async (account, pagination) => {
                return await queryService.WhitelistedBalances({ account, pagination });
            },
            whitelistedBalance: async (account, denom) => {
                return await queryService.WhitelistedBalance({ account, denom });
            },
        },
    };
}
exports.setupFTExtension = setupFTExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZXVtL2V4dGVuc2lvbnMvZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0RBUzhCO0FBQzlCLCtDQUF3RTtBQUV4RSxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFpQjtJQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFBLGtDQUF1QixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sWUFBWSxHQUFHLElBQUksdUJBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QyxPQUFPO1FBQ0wsRUFBRSxFQUFFO1lBQ0YsTUFBTSxFQUFFLEtBQUssSUFBa0MsRUFBRTtnQkFDL0MsT0FBTyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELE1BQU0sRUFBRSxLQUFLLEVBQ1gsTUFBYyxFQUNkLFVBQXdCLEVBQ00sRUFBRTtnQkFDaEMsT0FBTyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUMzRCxDQUFDO1lBQ0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFhLEVBQStCLEVBQUU7Z0JBQzFELE9BQU8sTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQ0QsY0FBYyxFQUFFLEtBQUssRUFDbkIsT0FBZSxFQUNmLFVBQXdCLEVBQ2MsRUFBRTtnQkFDeEMsT0FBTyxNQUFNLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBQ0QsYUFBYSxFQUFFLEtBQUssRUFDbEIsT0FBZSxFQUNmLEtBQWEsRUFDd0IsRUFBRTtnQkFDdkMsT0FBTyxNQUFNLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQ0QsbUJBQW1CLEVBQUUsS0FBSyxFQUN4QixPQUFlLEVBQ2YsVUFBd0IsRUFDbUIsRUFBRTtnQkFDN0MsT0FBTyxNQUFNLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLENBQUM7WUFDRCxrQkFBa0IsRUFBRSxLQUFLLEVBQ3ZCLE9BQWUsRUFDZixLQUFhLEVBQzZCLEVBQUU7Z0JBQzVDLE9BQU8sTUFBTSxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNuRSxDQUFDO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQTVDRCw0Q0E0Q0MifQ==