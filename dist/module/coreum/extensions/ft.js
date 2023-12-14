import { QueryClientImpl, } from "../asset/ft/v1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupFTExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
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
