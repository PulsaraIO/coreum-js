"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupNFTExtension = setupNFTExtension;
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
