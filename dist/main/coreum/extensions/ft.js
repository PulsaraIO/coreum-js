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
            params: async (request) => {
                return await queryService.Params(request);
            },
            tokens: async (request) => {
                return await queryService.Tokens(request);
            },
            token: async (request) => {
                return await queryService.Token(request);
            },
            frozenBalances: async (request) => {
                return await queryService.FrozenBalances(request);
            },
            frozenBalance: async (request) => {
                return await queryService.FrozenBalance(request);
            },
            whitelistedBalances: async (request) => {
                return await queryService.WhitelistedBalances(request);
            },
            whitelistedBalance: async (request) => {
                return await queryService.WhitelistedBalance(request);
            },
        },
    };
}
exports.setupFTExtension = setupFTExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZXVtL2V4dGVuc2lvbnMvZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBZ0I4QjtBQUM5QiwrQ0FBd0U7QUFFeEUsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBaUI7SUFDaEQsTUFBTSxHQUFHLEdBQUcsSUFBQSxrQ0FBdUIsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxNQUFNLFlBQVksR0FBRyxJQUFJLHVCQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFOUMsT0FBTztRQUNMLEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSxLQUFLLEVBQ1gsT0FBMkIsRUFDRyxFQUFFO2dCQUNoQyxPQUFPLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsTUFBTSxFQUFFLEtBQUssRUFDWCxPQUEyQixFQUNHLEVBQUU7Z0JBQ2hDLE9BQU8sTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFDRCxLQUFLLEVBQUUsS0FBSyxFQUNWLE9BQTBCLEVBQ0csRUFBRTtnQkFDL0IsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNELGNBQWMsRUFBRSxLQUFLLEVBQ25CLE9BQW1DLEVBQ0csRUFBRTtnQkFDeEMsT0FBTyxNQUFNLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUNELGFBQWEsRUFBRSxLQUFLLEVBQ2xCLE9BQWtDLEVBQ0csRUFBRTtnQkFDdkMsT0FBTyxNQUFNLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUNELG1CQUFtQixFQUFFLEtBQUssRUFDeEIsT0FBd0MsRUFDRyxFQUFFO2dCQUM3QyxPQUFPLE1BQU0sWUFBWSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFDRCxrQkFBa0IsRUFBRSxLQUFLLEVBQ3ZCLE9BQXVDLEVBQ0csRUFBRTtnQkFDNUMsT0FBTyxNQUFNLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RCxDQUFDO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQTNDRCw0Q0EyQ0MifQ==