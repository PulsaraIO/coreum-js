import { QueryClientImpl, } from "../asset/nft/v1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupNFTExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
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
