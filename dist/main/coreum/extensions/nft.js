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
            params: async () => {
                return await queryService.Params({});
            },
            class: async (class_id) => {
                return await queryService.Class({ id: class_id });
            },
            frozen: async (nft_id, class_id) => {
                return await queryService.Frozen({ id: nft_id, classId: class_id });
            },
            whitelisted: async (nft_id, class_id, account) => {
                return await queryService.Whitelisted({
                    id: nft_id,
                    classId: class_id,
                    account,
                });
            },
            whitelistedAccountsForNFT: async (nft_id, class_id, pagination) => {
                return await queryService.WhitelistedAccountsForNFT({
                    id: nft_id,
                    classId: class_id,
                    pagination,
                });
            },
        },
    };
}
exports.setupNFTExtension = setupNFTExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmV1bS9leHRlbnNpb25zL25mdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpREFPK0I7QUFDL0IsK0NBQXdFO0FBRXhFLFNBQWdCLGlCQUFpQixDQUFDLElBQWlCO0lBQ2pELE1BQU0sR0FBRyxHQUFHLElBQUEsa0NBQXVCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLE9BQU87UUFDTCxHQUFHLEVBQUU7WUFDSCxNQUFNLEVBQUUsS0FBSyxJQUFrQyxFQUFFO2dCQUMvQyxPQUFPLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQ0QsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFnQixFQUErQixFQUFFO2dCQUM3RCxPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxNQUFNLEVBQUUsS0FBSyxFQUNYLE1BQWMsRUFDZCxRQUFnQixFQUNjLEVBQUU7Z0JBQ2hDLE9BQU8sTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN0RSxDQUFDO1lBQ0QsV0FBVyxFQUFFLEtBQUssRUFDaEIsTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLE9BQWUsRUFDb0IsRUFBRTtnQkFDckMsT0FBTyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUM7b0JBQ3BDLEVBQUUsRUFBRSxNQUFNO29CQUNWLE9BQU8sRUFBRSxRQUFRO29CQUNqQixPQUFPO2lCQUNSLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCx5QkFBeUIsRUFBRSxLQUFLLEVBQzlCLE1BQWMsRUFDZCxRQUFnQixFQUNoQixVQUF3QixFQUN5QixFQUFFO2dCQUNuRCxPQUFPLE1BQU0sWUFBWSxDQUFDLHlCQUF5QixDQUFDO29CQUNsRCxFQUFFLEVBQUUsTUFBTTtvQkFDVixPQUFPLEVBQUUsUUFBUTtvQkFDakIsVUFBVTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQTFDRCw4Q0EwQ0MifQ==