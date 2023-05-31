import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
  QueryClientImpl,
  QueryBalanceResponse,
  QueryClassResponse,
  QueryClassesResponse,
  QueryNFTResponse,
  QueryNFTsResponse,
  QueryOwnerResponse,
  QuerySupplyResponse,
} from "../nft/v1beta1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupNFTBetaExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    nftbeta: {
      balance: async (
        class_id: string,
        owner: string
      ): Promise<QueryBalanceResponse> => {
        return await queryService.Balance({ classId: class_id, owner });
      },
      owner: async (
        class_id: string,
        nft_id: string
      ): Promise<QueryOwnerResponse> => {
        return await queryService.Owner({
          classId: class_id,
          id: nft_id,
        });
      },
      supply: async (class_id: string): Promise<QuerySupplyResponse> => {
        return await queryService.Supply({ classId: class_id });
      },
      nfts: async (
        class_id: string,
        owner: string,
        pagination?: PageRequest
      ): Promise<QueryNFTsResponse> => {
        return await queryService.NFTs({
          classId: class_id,
          owner,
          pagination,
        });
      },
      nft: async (
        nft_id: string,
        class_id: string
      ): Promise<QueryNFTResponse> => {
        return await queryService.NFT({ classId: class_id, id: nft_id });
      },
      class: async (class_id: string): Promise<QueryClassResponse> => {
        return await queryService.Class({ classId: class_id });
      },
      classes: async (
        pagination?: PageRequest
      ): Promise<QueryClassesResponse> => {
        return await queryService.Classes({ pagination });
      },
    },
  };
}
