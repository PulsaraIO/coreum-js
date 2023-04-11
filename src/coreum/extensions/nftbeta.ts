import {
  QueryClientImpl,
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryClassRequest,
  QueryClassResponse,
  QueryClassesRequest,
  QueryClassesResponse,
  QueryNFTRequest,
  QueryNFTResponse,
  QueryNFTsRequest,
  QueryNFTsResponse,
  QueryOwnerRequest,
  QueryOwnerResponse,
  QuerySupplyRequest,
  QuerySupplyResponse,
} from "../nft/v1beta1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupNFTBetaExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    nftbeta: {
      balance: async (
        request: QueryBalanceRequest
      ): Promise<QueryBalanceResponse> => {
        return await queryService.Balance(request);
      },
      owner: async (
        request: QueryOwnerRequest
      ): Promise<QueryOwnerResponse> => {
        return await queryService.Owner(request);
      },
      supply: async (
        request: QuerySupplyRequest
      ): Promise<QuerySupplyResponse> => {
        return await queryService.Supply(request);
      },
      nfts: async (request: QueryNFTsRequest): Promise<QueryNFTsResponse> => {
        return await queryService.NFTs(request);
      },
      nft: async (request: QueryNFTRequest): Promise<QueryNFTResponse> => {
        return await queryService.NFT(request);
      },
      class: async (
        request: QueryClassRequest
      ): Promise<QueryClassResponse> => {
        return await queryService.Class(request);
      },
      classes: async (
        request: QueryClassesRequest
      ): Promise<QueryClassesResponse> => {
        return await queryService.Classes(request);
      },
    },
  };
}
