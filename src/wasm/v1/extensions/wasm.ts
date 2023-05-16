import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import {
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
  QueryClientImpl,
  QueryCodeRequest,
  QueryCodeResponse,
  QueryCodesRequest,
  QueryCodesResponse,
  QueryContractHistoryRequest,
  QueryContractHistoryResponse,
  QueryContractInfoRequest,
  QueryContractInfoResponse,
  QueryContractsByCodeRequest,
  QueryContractsByCodeResponse,
  QueryContractsByCreatorRequest,
  QueryContractsByCreatorResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPinnedCodesRequest,
  QueryPinnedCodesResponse,
  QueryRawContractStateRequest,
  QueryRawContractStateResponse,
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
} from "../query";

export function setupWasmExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    wasm: {
      smartContractState: async (
        request: QuerySmartContractStateRequest
      ): Promise<QuerySmartContractStateResponse> => {
        return await queryService.SmartContractState(request);
      },

      rawContractState: async (
        request: QueryRawContractStateRequest
      ): Promise<QueryRawContractStateResponse> => {
        return await queryService.RawContractState(request);
      },

      pinnedCodes: async (
        request: QueryPinnedCodesRequest
      ): Promise<QueryPinnedCodesResponse> => {
        return await queryService.PinnedCodes(request);
      },

      contractsByCreator: async (
        request: QueryContractsByCreatorRequest
      ): Promise<QueryContractsByCreatorResponse> => {
        return await queryService.ContractsByCreator(request);
      },

      contractsByCode: async (
        request: QueryContractsByCodeRequest
      ): Promise<QueryContractsByCodeResponse> => {
        return await queryService.ContractsByCode(request);
      },

      contractInfo: async (
        request: QueryContractInfoRequest
      ): Promise<QueryContractInfoResponse> => {
        return await queryService.ContractInfo(request);
      },

      contractHistory: async (
        request: QueryContractHistoryRequest
      ): Promise<QueryContractHistoryResponse> => {
        return await queryService.ContractHistory(request);
      },

      allContractState: async (
        request: QueryAllContractStateRequest
      ): Promise<QueryAllContractStateResponse> => {
        return await queryService.AllContractState(request);
      },

      params: async (
        request: QueryParamsRequest
      ): Promise<QueryParamsResponse> => {
        return await queryService.Params(request);
      },

      code: async (request: QueryCodeRequest): Promise<QueryCodeResponse> => {
        return await queryService.Code(request);
      },

      codes: async (
        request: QueryCodesRequest
      ): Promise<QueryCodesResponse> => {
        return await queryService.Codes(request);
      },
    },
  };
}
