import { QueryClientImpl, } from "../dex/v1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupDexExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        dex: {
            params: async (params) => {
                return await queryService.Params(params);
            },
            order: async (params) => {
                return await queryService.Order(params);
            },
            orders: async (params) => {
                return await queryService.Orders(params);
            },
            ordersCountByDenomAndAccount: async (params) => {
                return await queryService.AccountDenomOrdersCount(params);
            },
            orderbook: async (params) => {
                return await queryService.OrderBookOrders(params);
            },
            orderbooks: async (params) => {
                return await queryService.OrderBooks(params);
            },
            orderbookParams: async (params) => {
                return await queryService.OrderBookParams(params);
            },
        },
    };
}
