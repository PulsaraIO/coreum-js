import { QueryClientImpl, } from "../asset/nft/v1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupNFTExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmV1bS9leHRlbnNpb25zL25mdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBU0wsZUFBZSxHQUdoQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBZSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhFLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFpQjtJQUNqRCxNQUFNLEdBQUcsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QyxPQUFPO1FBQ0wsR0FBRyxFQUFFO1lBQ0gsTUFBTSxFQUFFLEtBQUssRUFDWCxPQUEyQixFQUNHLEVBQUU7Z0JBQ2hDLE9BQU8sTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFDRCxLQUFLLEVBQUUsS0FBSyxFQUNWLE9BQTBCLEVBQ0csRUFBRTtnQkFDL0IsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNELE1BQU0sRUFBRSxLQUFLLEVBQ1gsT0FBMkIsRUFDRyxFQUFFO2dCQUNoQyxPQUFPLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsV0FBVyxFQUFFLEtBQUssRUFDaEIsT0FBZ0MsRUFDRyxFQUFFO2dCQUNyQyxPQUFPLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QseUJBQXlCLEVBQUUsS0FBSyxFQUM5QixPQUE4QyxFQUNHLEVBQUU7Z0JBQ25ELE9BQU8sTUFBTSxZQUFZLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsQ0FBQztTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMifQ==