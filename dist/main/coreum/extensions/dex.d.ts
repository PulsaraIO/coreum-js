import { QueryParamsResponse, QueryOrderRequest, QueryAccountDenomOrdersCountRequest, QueryAccountDenomOrdersCountResponse, QueryOrderBookOrdersRequest, QueryOrderBookOrdersResponse, QueryOrderBooksRequest, QueryOrderBooksResponse, QueryOrderResponse, QueryOrdersRequest, QueryOrdersResponse, QueryParamsRequest } from "../dex/v1/query";
import { QueryClient } from "@cosmjs/stargate";
export declare function setupDexExtension(base: QueryClient): {
    dex: {
        params: (params: QueryParamsRequest) => Promise<QueryParamsResponse>;
        order: (params: QueryOrderRequest) => Promise<QueryOrderResponse>;
        orders: (params: QueryOrdersRequest) => Promise<QueryOrdersResponse>;
        ordersCountByDenomAndAccount: (params: QueryAccountDenomOrdersCountRequest) => Promise<QueryAccountDenomOrdersCountResponse>;
        orderbook: (params: QueryOrderBookOrdersRequest) => Promise<QueryOrderBookOrdersResponse>;
        orderbooks: (params: QueryOrderBooksRequest) => Promise<QueryOrderBooksResponse>;
    };
};
