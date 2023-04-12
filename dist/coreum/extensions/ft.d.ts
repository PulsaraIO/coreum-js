import { QueryParamsRequest, QueryParamsResponse, QueryFrozenBalanceRequest, QueryFrozenBalanceResponse, QueryFrozenBalancesRequest, QueryFrozenBalancesResponse, QueryTokenRequest, QueryTokenResponse, QueryTokensRequest, QueryTokensResponse, QueryWhitelistedBalanceRequest, QueryWhitelistedBalanceResponse, QueryWhitelistedBalancesRequest, QueryWhitelistedBalancesResponse } from "../asset/ft/v1/query";
import { QueryClient } from "@cosmjs/stargate";
export declare function setupFTExtension(base: QueryClient): {
    ft: {
        params: (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
        tokens: (request: QueryTokensRequest) => Promise<QueryTokensResponse>;
        token: (request: QueryTokenRequest) => Promise<QueryTokenResponse>;
        frozenBalances: (request: QueryFrozenBalancesRequest) => Promise<QueryFrozenBalancesResponse>;
        frozenBalance: (request: QueryFrozenBalanceRequest) => Promise<QueryFrozenBalanceResponse>;
        whitelistedBalances: (request: QueryWhitelistedBalancesRequest) => Promise<QueryWhitelistedBalancesResponse>;
        whitelistedBalance: (request: QueryWhitelistedBalanceRequest) => Promise<QueryWhitelistedBalanceResponse>;
    };
};
