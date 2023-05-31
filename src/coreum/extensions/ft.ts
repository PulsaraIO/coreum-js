import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
  QueryClientImpl,
  QueryParamsResponse,
  QueryFrozenBalanceResponse,
  QueryFrozenBalancesResponse,
  QueryTokenResponse,
  QueryTokensResponse,
  QueryWhitelistedBalanceResponse,
  QueryWhitelistedBalancesResponse,
} from "../asset/ft/v1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupFTExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    ft: {
      params: async (): Promise<QueryParamsResponse> => {
        return await queryService.Params({});
      },
      tokens: async (
        issuer: string,
        pagination?: PageRequest
      ): Promise<QueryTokensResponse> => {
        return await queryService.Tokens({ issuer, pagination });
      },
      token: async (denom: string): Promise<QueryTokenResponse> => {
        return await queryService.Token({ denom });
      },
      frozenBalances: async (
        account: string,
        pagination?: PageRequest
      ): Promise<QueryFrozenBalancesResponse> => {
        return await queryService.FrozenBalances({ account, pagination });
      },
      frozenBalance: async (
        account: string,
        denom: string
      ): Promise<QueryFrozenBalanceResponse> => {
        return await queryService.FrozenBalance({ account, denom });
      },
      whitelistedBalances: async (
        account: string,
        pagination?: PageRequest
      ): Promise<QueryWhitelistedBalancesResponse> => {
        return await queryService.WhitelistedBalances({ account, pagination });
      },
      whitelistedBalance: async (
        account: string,
        denom: string
      ): Promise<QueryWhitelistedBalanceResponse> => {
        return await queryService.WhitelistedBalance({ account, denom });
      },
    },
  };
}
