import { QueryBalanceRequest, QueryBalanceResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse, QueryNFTRequest, QueryNFTResponse, QueryNFTsRequest, QueryNFTsResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse } from "../nft/v1beta1/query";
import { QueryClient } from "@cosmjs/stargate";
export declare function setupNFTBetaExtension(base: QueryClient): {
    nftbeta: {
        balance: (request: QueryBalanceRequest) => Promise<QueryBalanceResponse>;
        owner: (request: QueryOwnerRequest) => Promise<QueryOwnerResponse>;
        supply: (request: QuerySupplyRequest) => Promise<QuerySupplyResponse>;
        nfts: (request: QueryNFTsRequest) => Promise<QueryNFTsResponse>;
        nft: (request: QueryNFTRequest) => Promise<QueryNFTResponse>;
        class: (request: QueryClassRequest) => Promise<QueryClassResponse>;
        classes: (request: QueryClassesRequest) => Promise<QueryClassesResponse>;
    };
};
