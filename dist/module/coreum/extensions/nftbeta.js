import { QueryClientImpl, } from "../nft/v1beta1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupNFTBetaExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        nftbeta: {
            balance: async (request) => {
                return await queryService.Balance(request);
            },
            owner: async (request) => {
                return await queryService.Owner(request);
            },
            supply: async (request) => {
                return await queryService.Supply(request);
            },
            nfts: async (request) => {
                return await queryService.NFTs(request);
            },
            nft: async (request) => {
                return await queryService.NFT(request);
            },
            class: async (request) => {
                return await queryService.Class(request);
            },
            classes: async (request) => {
                return await queryService.Classes(request);
            },
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0YmV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JldW0vZXh0ZW5zaW9ucy9uZnRiZXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxlQUFlLEdBZWhCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFlLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEUsTUFBTSxVQUFVLHFCQUFxQixDQUFDLElBQWlCO0lBQ3JELE1BQU0sR0FBRyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLE9BQU87UUFDTCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsS0FBSyxFQUNaLE9BQTRCLEVBQ0csRUFBRTtnQkFDakMsT0FBTyxNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsQ0FBQztZQUNELEtBQUssRUFBRSxLQUFLLEVBQ1YsT0FBMEIsRUFDRyxFQUFFO2dCQUMvQixPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsTUFBTSxFQUFFLEtBQUssRUFDWCxPQUEyQixFQUNHLEVBQUU7Z0JBQ2hDLE9BQU8sTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFDRCxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQXlCLEVBQThCLEVBQUU7Z0JBQ3BFLE9BQU8sTUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFDRCxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQXdCLEVBQTZCLEVBQUU7Z0JBQ2pFLE9BQU8sTUFBTSxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFDRCxLQUFLLEVBQUUsS0FBSyxFQUNWLE9BQTBCLEVBQ0csRUFBRTtnQkFDL0IsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNELE9BQU8sRUFBRSxLQUFLLEVBQ1osT0FBNEIsRUFDRyxFQUFFO2dCQUNqQyxPQUFPLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyJ9