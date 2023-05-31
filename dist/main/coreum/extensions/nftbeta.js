"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupNFTBetaExtension = void 0;
const query_1 = require("../nft/v1beta1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupNFTBetaExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        nftbeta: {
            balance: async (class_id, owner) => {
                return await queryService.Balance({ classId: class_id, owner });
            },
            owner: async (class_id, nft_id) => {
                return await queryService.Owner({
                    classId: class_id,
                    id: nft_id,
                });
            },
            supply: async (class_id) => {
                return await queryService.Supply({ classId: class_id });
            },
            nfts: async (class_id, owner, pagination) => {
                return await queryService.NFTs({
                    classId: class_id,
                    owner,
                    pagination,
                });
            },
            nft: async (nft_id, class_id) => {
                return await queryService.NFT({ classId: class_id, id: nft_id });
            },
            class: async (class_id) => {
                return await queryService.Class({ classId: class_id });
            },
            classes: async (pagination) => {
                return await queryService.Classes({ pagination });
            },
        },
    };
}
exports.setupNFTBetaExtension = setupNFTBetaExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0YmV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JldW0vZXh0ZW5zaW9ucy9uZnRiZXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdEQVM4QjtBQUM5QiwrQ0FBd0U7QUFFeEUsU0FBZ0IscUJBQXFCLENBQUMsSUFBaUI7SUFDckQsTUFBTSxHQUFHLEdBQUcsSUFBQSxrQ0FBdUIsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxNQUFNLFlBQVksR0FBRyxJQUFJLHVCQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFOUMsT0FBTztRQUNMLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxLQUFLLEVBQ1osUUFBZ0IsRUFDaEIsS0FBYSxFQUNrQixFQUFFO2dCQUNqQyxPQUFPLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsS0FBSyxFQUFFLEtBQUssRUFDVixRQUFnQixFQUNoQixNQUFjLEVBQ2UsRUFBRTtnQkFDL0IsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixFQUFFLEVBQUUsTUFBTTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFnQixFQUFnQyxFQUFFO2dCQUMvRCxPQUFPLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFDRCxJQUFJLEVBQUUsS0FBSyxFQUNULFFBQWdCLEVBQ2hCLEtBQWEsRUFDYixVQUF3QixFQUNJLEVBQUU7Z0JBQzlCLE9BQU8sTUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUM3QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsS0FBSztvQkFDTCxVQUFVO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxHQUFHLEVBQUUsS0FBSyxFQUNSLE1BQWMsRUFDZCxRQUFnQixFQUNXLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNuRSxDQUFDO1lBQ0QsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFnQixFQUErQixFQUFFO2dCQUM3RCxPQUFPLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFDRCxPQUFPLEVBQUUsS0FBSyxFQUNaLFVBQXdCLEVBQ08sRUFBRTtnQkFDakMsT0FBTyxNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDO0FBbkRELHNEQW1EQyJ9