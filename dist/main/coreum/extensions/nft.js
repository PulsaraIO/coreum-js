"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupNFTExtension = void 0;
const query_1 = require("../asset/nft/v1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupNFTExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        nft: {
            params: async (request) => {
                return await queryService.Params(request);
            },
            class: async (request) => {
                return await queryService.Class(request);
            },
            frozen: async (request) => {
                return await queryService.Frozen(request);
            },
            whitelisted: async (request) => {
                return await queryService.Whitelisted(request);
            },
            whitelistedAccountsForNFT: async (request) => {
                return await queryService.WhitelistedAccountsForNFT(request);
            },
        },
    };
}
exports.setupNFTExtension = setupNFTExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmV1bS9leHRlbnNpb25zL25mdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFZK0I7QUFDL0IsK0NBQXdFO0FBRXhFLFNBQWdCLGlCQUFpQixDQUFDLElBQWlCO0lBQ2pELE1BQU0sR0FBRyxHQUFHLElBQUEsa0NBQXVCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLE9BQU87UUFDTCxHQUFHLEVBQUU7WUFDSCxNQUFNLEVBQUUsS0FBSyxFQUNYLE9BQTJCLEVBQ0csRUFBRTtnQkFDaEMsT0FBTyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELEtBQUssRUFBRSxLQUFLLEVBQ1YsT0FBMEIsRUFDRyxFQUFFO2dCQUMvQixPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsTUFBTSxFQUFFLEtBQUssRUFDWCxPQUEyQixFQUNHLEVBQUU7Z0JBQ2hDLE9BQU8sTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFDRCxXQUFXLEVBQUUsS0FBSyxFQUNoQixPQUFnQyxFQUNHLEVBQUU7Z0JBQ3JDLE9BQU8sTUFBTSxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFDRCx5QkFBeUIsRUFBRSxLQUFLLEVBQzlCLE9BQThDLEVBQ0csRUFBRTtnQkFDbkQsT0FBTyxNQUFNLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRCxDQUFDO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQWpDRCw4Q0FpQ0MifQ==