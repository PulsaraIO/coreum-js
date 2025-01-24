import { PageRequest } from "../../cosmos/base/pagination";
import {
  QueryClassResponse,
  QueryFrozenResponse,
  QueryWhitelistedAccountsForNFTResponse,
  QueryWhitelistedResponse,
  QueryClientImpl,
  QueryParamsResponse,
} from "../asset/nft/v1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupNFTExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    nft: {
      params: async (): Promise<QueryParamsResponse> => {
        return await queryService.Params({});
      },
      class: async (class_id: string): Promise<QueryClassResponse> => {
        return await queryService.Class({ id: class_id });
      },
      frozen: async (
        nft_id: string,
        class_id: string
      ): Promise<QueryFrozenResponse> => {
        return await queryService.Frozen({ id: nft_id, classId: class_id });
      },
      whitelisted: async (
        nft_id: string,
        class_id: string,
        account: string
      ): Promise<QueryWhitelistedResponse> => {
        return await queryService.Whitelisted({
          id: nft_id,
          classId: class_id,
          account,
        });
      },
      whitelistedAccountsForNFT: async (
        nft_id: string,
        class_id: string,
        pagination?: PageRequest
      ): Promise<QueryWhitelistedAccountsForNFTResponse> => {
        return await queryService.WhitelistedAccountsForNFT({
          id: nft_id,
          classId: class_id,
          pagination,
        });
      },
    },
  };
}
