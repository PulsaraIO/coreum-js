import {
  QueryClassRequest,
  QueryClassResponse,
  QueryFrozenRequest,
  QueryFrozenResponse,
  QueryWhitelistedAccountsForNFTRequest,
  QueryWhitelistedAccountsForNFTResponse,
  QueryWhitelistedRequest,
  QueryWhitelistedResponse,
  QueryClientImpl,
  QueryParamsRequest,
  QueryParamsResponse,
} from "../asset/nft/v1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupNFTExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    nft: {
      params: async (
        request: QueryParamsRequest
      ): Promise<QueryParamsResponse> => {
        return await queryService.Params(request);
      },
      class: async (
        request: QueryClassRequest
      ): Promise<QueryClassResponse> => {
        return await queryService.Class(request);
      },
      frozen: async (
        request: QueryFrozenRequest
      ): Promise<QueryFrozenResponse> => {
        return await queryService.Frozen(request);
      },
      whitelisted: async (
        request: QueryWhitelistedRequest
      ): Promise<QueryWhitelistedResponse> => {
        return await queryService.Whitelisted(request);
      },
      whitelistedAccountsForNFT: async (
        request: QueryWhitelistedAccountsForNFTRequest
      ): Promise<QueryWhitelistedAccountsForNFTResponse> => {
        return await queryService.WhitelistedAccountsForNFT(request);
      },
    },
  };
}
