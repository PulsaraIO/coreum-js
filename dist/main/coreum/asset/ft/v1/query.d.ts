import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { DEXSettings, Token, TokenUpgradeStatuses } from "./token";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** QueryParamsRequest defines the request type for querying x/asset/ft parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/asset/ft parameters. */
export interface QueryParamsResponse {
    params: Params | undefined;
}
export interface QueryTokenRequest {
    denom: string;
}
export interface QueryTokenResponse {
    token: Token | undefined;
}
export interface QueryTokenUpgradeStatusesRequest {
    denom: string;
}
export interface QueryTokenUpgradeStatusesResponse {
    statuses: TokenUpgradeStatuses | undefined;
}
export interface QueryTokensRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    issuer: string;
}
export interface QueryTokensResponse {
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
    tokens: Token[];
}
export interface QueryBalanceRequest {
    /** account specifies the account onto which we query balances */
    account: string;
    /** denom specifies balances on a specific denom */
    denom: string;
}
export interface QueryBalanceResponse {
    /** balance contains the balance with the queried account and denom */
    balance: string;
    /** whitelisted is the whitelisted amount of the denom on the account. */
    whitelisted: string;
    /** frozen is the frozen amount of the denom on the account. */
    frozen: string;
    /** locked is the balance locked in vesting and DEX. */
    locked: string;
    /** locked_in_vesting is the balance locked in bank vesting. */
    lockedInVesting: string;
    /** locked_in_dex is the balance locked in DEX. */
    lockedInDex: string;
    expectedToReceiveInDex: string;
}
export interface QueryFrozenBalancesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    /** account specifies the account onto which we query frozen balances */
    account: string;
}
export interface QueryFrozenBalancesResponse {
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
    /** balances contains the frozen balances on the queried account */
    balances: Coin[];
}
export interface QueryFrozenBalanceRequest {
    /** account specifies the account onto which we query frozen balances */
    account: string;
    /** denom specifies frozen balances on a specific denom */
    denom: string;
}
export interface QueryFrozenBalanceResponse {
    /** balance contains the frozen balance with the queried account and denom */
    balance: Coin | undefined;
}
export interface QueryWhitelistedBalancesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    /** account specifies the account onto which we query whitelisted balances */
    account: string;
}
export interface QueryWhitelistedBalancesResponse {
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
    /** balances contains the whitelisted balances on the queried account */
    balances: Coin[];
}
export interface QueryWhitelistedBalanceRequest {
    /** account specifies the account onto which we query whitelisted balances */
    account: string;
    /** denom specifies whitelisted balances on a specific denom */
    denom: string;
}
export interface QueryWhitelistedBalanceResponse {
    /** balance contains the whitelisted balance with the queried account and denom */
    balance: Coin | undefined;
}
export interface QueryDEXSettingsRequest {
    /** denom specifies the denom onto which we query DEX settings */
    denom: string;
}
export interface QueryDEXSettingsResponse {
    /** dex_settings contains the DEX settings */
    dexSettings: DEXSettings | undefined;
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryTokenRequest: MessageFns<QueryTokenRequest>;
export declare const QueryTokenResponse: MessageFns<QueryTokenResponse>;
export declare const QueryTokenUpgradeStatusesRequest: MessageFns<QueryTokenUpgradeStatusesRequest>;
export declare const QueryTokenUpgradeStatusesResponse: MessageFns<QueryTokenUpgradeStatusesResponse>;
export declare const QueryTokensRequest: MessageFns<QueryTokensRequest>;
export declare const QueryTokensResponse: MessageFns<QueryTokensResponse>;
export declare const QueryBalanceRequest: MessageFns<QueryBalanceRequest>;
export declare const QueryBalanceResponse: MessageFns<QueryBalanceResponse>;
export declare const QueryFrozenBalancesRequest: MessageFns<QueryFrozenBalancesRequest>;
export declare const QueryFrozenBalancesResponse: MessageFns<QueryFrozenBalancesResponse>;
export declare const QueryFrozenBalanceRequest: MessageFns<QueryFrozenBalanceRequest>;
export declare const QueryFrozenBalanceResponse: MessageFns<QueryFrozenBalanceResponse>;
export declare const QueryWhitelistedBalancesRequest: MessageFns<QueryWhitelistedBalancesRequest>;
export declare const QueryWhitelistedBalancesResponse: MessageFns<QueryWhitelistedBalancesResponse>;
export declare const QueryWhitelistedBalanceRequest: MessageFns<QueryWhitelistedBalanceRequest>;
export declare const QueryWhitelistedBalanceResponse: MessageFns<QueryWhitelistedBalanceResponse>;
export declare const QueryDEXSettingsRequest: MessageFns<QueryDEXSettingsRequest>;
export declare const QueryDEXSettingsResponse: MessageFns<QueryDEXSettingsResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/asset/ft module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Tokens queries the fungible tokens of the module. */
    Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    /** Token queries the fungible token of the module. */
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    /** TokenUpgradeStatuses returns token upgrades info. */
    TokenUpgradeStatuses(request: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponse>;
    /** Balance returns balance of the denom for the account. */
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** FrozenBalances returns all the frozen balances for the account. */
    FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
    /** FrozenBalance returns frozen balance of the denom for the account. */
    FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
    /** WhitelistedBalances returns all the whitelisted balances for the account. */
    WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
    /** WhitelistedBalance returns whitelisted balance of the denom for the account. */
    WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
    /** DEXSettings returns DEX settings of the denom. */
    DEXSettings(request: QueryDEXSettingsRequest): Promise<QueryDEXSettingsResponse>;
}
export declare const QueryServiceName = "coreum.asset.ft.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    TokenUpgradeStatuses(request: QueryTokenUpgradeStatusesRequest): Promise<QueryTokenUpgradeStatusesResponse>;
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
    FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
    WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
    WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
    DEXSettings(request: QueryDEXSettingsRequest): Promise<QueryDEXSettingsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
