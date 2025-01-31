import {
  QueryClientImpl,
  QueryParamsResponse,
  QueryOrderRequest,
  QueryAccountDenomOrdersCountRequest,
  QueryAccountDenomOrdersCountResponse,
  QueryOrderBookOrdersRequest,
  QueryOrderBookOrdersResponse,
  QueryOrderBooksRequest,
  QueryOrderBooksResponse,
  QueryOrderResponse,
  QueryOrdersRequest,
  QueryOrdersResponse,
  QueryParamsRequest,
} from "../dex/v1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupDexExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    dex: {
      params: async (
        params: QueryParamsRequest
      ): Promise<QueryParamsResponse> => {
        return await queryService.Params(params);
      },
      order: async (params: QueryOrderRequest): Promise<QueryOrderResponse> => {
        return await queryService.Order(params);
      },
      orders: async (
        params: QueryOrdersRequest
      ): Promise<QueryOrdersResponse> => {
        return await queryService.Orders(params);
      },
      ordersCountByDenomAndAccount: async (
        params: QueryAccountDenomOrdersCountRequest
      ): Promise<QueryAccountDenomOrdersCountResponse> => {
        return await queryService.AccountDenomOrdersCount(params);
      },
      orderbook: async (
        params: QueryOrderBookOrdersRequest
      ): Promise<QueryOrderBookOrdersResponse> => {
        return await queryService.OrderBookOrders(params);
      },
      orderbooks: async (
        params: QueryOrderBooksRequest
      ): Promise<QueryOrderBooksResponse> => {
        return await queryService.OrderBooks(params);
      },
    },
  };
}
