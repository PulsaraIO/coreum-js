"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupWasmExtension = void 0;
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("../query");
function setupWasmExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        wasm: {
            smartContractState: async (request) => {
                return await queryService.SmartContractState(request);
            },
            rawContractState: async (request) => {
                return await queryService.RawContractState(request);
            },
            pinnedCodes: async (request) => {
                return await queryService.PinnedCodes(request);
            },
            contractsByCreator: async (request) => {
                return await queryService.ContractsByCreator(request);
            },
            contractsByCode: async (request) => {
                return await queryService.ContractsByCode(request);
            },
            contractInfo: async (request) => {
                return await queryService.ContractInfo(request);
            },
            contractHistory: async (request) => {
                return await queryService.ContractHistory(request);
            },
            allContractState: async (request) => {
                return await queryService.AllContractState(request);
            },
            params: async (request) => {
                return await queryService.Params(request);
            },
            code: async (request) => {
                return await queryService.Code(request);
            },
            codes: async (request) => {
                return await queryService.Codes(request);
            },
        },
    };
}
exports.setupWasmExtension = setupWasmExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FzbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93YXNtL3YxL2V4dGVuc2lvbnMvd2FzbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBd0U7QUFDeEUsb0NBd0JrQjtBQUVsQixTQUFnQixrQkFBa0IsQ0FBQyxJQUFpQjtJQUNsRCxNQUFNLEdBQUcsR0FBRyxJQUFBLGtDQUF1QixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sWUFBWSxHQUFHLElBQUksdUJBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QyxPQUFPO1FBQ0wsSUFBSSxFQUFFO1lBQ0osa0JBQWtCLEVBQUUsS0FBSyxFQUN2QixPQUF1QyxFQUNHLEVBQUU7Z0JBQzVDLE9BQU8sTUFBTSxZQUFZLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUVELGdCQUFnQixFQUFFLEtBQUssRUFDckIsT0FBcUMsRUFDRyxFQUFFO2dCQUMxQyxPQUFPLE1BQU0sWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFFRCxXQUFXLEVBQUUsS0FBSyxFQUNoQixPQUFnQyxFQUNHLEVBQUU7Z0JBQ3JDLE9BQU8sTUFBTSxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFFRCxrQkFBa0IsRUFBRSxLQUFLLEVBQ3ZCLE9BQXVDLEVBQ0csRUFBRTtnQkFDNUMsT0FBTyxNQUFNLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBRUQsZUFBZSxFQUFFLEtBQUssRUFDcEIsT0FBb0MsRUFDRyxFQUFFO2dCQUN6QyxPQUFPLE1BQU0sWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsWUFBWSxFQUFFLEtBQUssRUFDakIsT0FBaUMsRUFDRyxFQUFFO2dCQUN0QyxPQUFPLE1BQU0sWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBRUQsZUFBZSxFQUFFLEtBQUssRUFDcEIsT0FBb0MsRUFDRyxFQUFFO2dCQUN6QyxPQUFPLE1BQU0sWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsZ0JBQWdCLEVBQUUsS0FBSyxFQUNyQixPQUFxQyxFQUNHLEVBQUU7Z0JBQzFDLE9BQU8sTUFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEQsQ0FBQztZQUVELE1BQU0sRUFBRSxLQUFLLEVBQ1gsT0FBMkIsRUFDRyxFQUFFO2dCQUNoQyxPQUFPLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUF5QixFQUE4QixFQUFFO2dCQUNwRSxPQUFPLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBRUQsS0FBSyxFQUFFLEtBQUssRUFDVixPQUEwQixFQUNHLEVBQUU7Z0JBQy9CLE9BQU8sTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLENBQUM7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDO0FBdkVELGdEQXVFQyJ9