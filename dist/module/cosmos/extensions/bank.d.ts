import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClient } from "@cosmjs/stargate";
export declare function setupBankExtension(base: QueryClient): {
    bank: {
        balance: (address: string, denom: string) => Promise<import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>;
        allBalances: (address: string) => Promise<import("cosmjs-types/cosmos/base/v1beta1/coin").Coin[]>;
        totalSupply: (pagination?: PageRequest) => Promise<{
            supply: import("cosmjs-types/cosmos/base/v1beta1/coin").Coin[];
            pagination: import("cosmjs-types/cosmos/base/query/v1beta1/pagination").PageResponse;
        }>;
        supplyOf: (denom: string) => Promise<import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>;
        denomMetadata: (denom: string) => Promise<import("cosmjs-types/cosmos/bank/v1beta1/bank").Metadata>;
        denomsMetadata: (pagination?: PageRequest) => Promise<import("cosmjs-types/cosmos/bank/v1beta1/bank").Metadata[]>;
    };
};
