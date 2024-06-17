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
            params: async () => {
                return await queryService.Params({});
            },
            tokens: async (issuer, pagination) => {
                return await queryService.Tokens({ issuer, pagination });
            },
            token: async (denom) => {
                return await queryService.Token({ denom });
            },
            frozenBalances: async (account, pagination) => {
                return await queryService.FrozenBalances({ account, pagination });
            },
            frozenBalance: async (account, denom) => {
                return await queryService.FrozenBalance({ account, denom });
            },
            whitelistedBalances: async (account, pagination) => {
                return await queryService.WhitelistedBalances({ account, pagination });
            },
            whitelistedBalance: async (account, denom) => {
                return await queryService.WhitelistedBalance({ account, denom });
            },
        },
    };
}
exports.setupFTExtension = setupFTExtension;
