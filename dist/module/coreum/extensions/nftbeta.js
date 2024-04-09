import { QueryClientImpl, } from "../nft/v1beta1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupNFTBetaExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
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
