import { QueryClassRequest, QueryClassResponse, QueryFrozenRequest, QueryFrozenResponse, QueryWhitelistedAccountsForNFTRequest, QueryWhitelistedAccountsForNFTResponse, QueryWhitelistedRequest, QueryWhitelistedResponse, QueryParamsRequest, QueryParamsResponse } from "../asset/nft/v1/query";
import { QueryClient } from "@cosmjs/stargate";
export declare function setupNFTExtension(base: QueryClient): {
    nft: {
        params: (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
        class: (request: QueryClassRequest) => Promise<QueryClassResponse>;
        frozen: (request: QueryFrozenRequest) => Promise<QueryFrozenResponse>;
        whitelisted: (request: QueryWhitelistedRequest) => Promise<QueryWhitelistedResponse>;
        whitelistedAccountsForNFT: (request: QueryWhitelistedAccountsForNFTRequest) => Promise<QueryWhitelistedAccountsForNFTResponse>;
    };
};
