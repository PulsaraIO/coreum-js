import {
  QueryClientImpl,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryFrozenBalanceRequest,
  QueryFrozenBalanceResponse,
  QueryFrozenBalancesRequest,
  QueryFrozenBalancesResponse,
  QueryTokenRequest,
  QueryTokenResponse,
  QueryTokensRequest,
  QueryTokensResponse,
  QueryWhitelistedBalanceRequest,
  QueryWhitelistedBalanceResponse,
  QueryWhitelistedBalancesRequest,
  QueryWhitelistedBalancesResponse,
} from "../asset/ft/v1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupFTExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    ft: {
      params: async (
        request: QueryParamsRequest
      ): Promise<QueryParamsResponse> => {
        return await queryService.Params(request);
      },
      tokens: async (
        request: QueryTokensRequest
      ): Promise<QueryTokensResponse> => {
        return await queryService.Tokens(request);
      },
      token: async (
        request: QueryTokenRequest
      ): Promise<QueryTokenResponse> => {
        return await queryService.Token(request);
      },
      frozenBalances: async (
        request: QueryFrozenBalancesRequest
      ): Promise<QueryFrozenBalancesResponse> => {
        return await queryService.FrozenBalances(request);
      },
      frozenBalance: async (
        request: QueryFrozenBalanceRequest
      ): Promise<QueryFrozenBalanceResponse> => {
        return await queryService.FrozenBalance(request);
      },
      whitelistedBalances: async (
        request: QueryWhitelistedBalancesRequest
      ): Promise<QueryWhitelistedBalancesResponse> => {
        return await queryService.WhitelistedBalances(request);
      },
      whitelistedBalance: async (
        request: QueryWhitelistedBalanceRequest
      ): Promise<QueryWhitelistedBalanceResponse> => {
        return await queryService.WhitelistedBalance(request);
      },
    },
  };
}
