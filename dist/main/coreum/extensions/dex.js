"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDexExtension = void 0;
const query_1 = require("../dex/v1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupDexExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
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
        },
    };
}
exports.setupDexExtension = setupDexExtension;
