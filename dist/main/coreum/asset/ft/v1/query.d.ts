import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Token } from "./token";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** QueryParamsRequest defines the request type for querying x/asset/ft parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/asset/ft parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryTokenRequest {
    denom: string;
}
export interface QueryTokenResponse {
    token?: Token;
}
export interface QueryTokensRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    issuer: string;
}
export interface QueryTokensResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
    tokens: Token[];
}
export interface QueryFrozenBalancesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** account specifies the account onto which we query frozen balances */
    account: string;
}
export interface QueryFrozenBalancesResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
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
    balance?: Coin;
}
export interface QueryWhitelistedBalancesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** account specifies the account onto which we query whitelisted balances */
    account: string;
}
export interface QueryWhitelistedBalancesResponse {
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
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
    balance?: Coin;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {
            issueFee?: {
                denom?: string;
                amount?: string;
            };
            tokenUpgradeDecisionTimeout?: Date;
            tokenUpgradeGracePeriod?: {
                seconds?: number;
                nanos?: number;
            };
        };
    } & {
        params?: {
            issueFee?: {
                denom?: string;
                amount?: string;
            };
            tokenUpgradeDecisionTimeout?: Date;
            tokenUpgradeGracePeriod?: {
                seconds?: number;
                nanos?: number;
            };
        } & {
            issueFee?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K in Exclude<keyof I["params"]["issueFee"], keyof Coin>]: never; };
            tokenUpgradeDecisionTimeout?: Date;
            tokenUpgradeGracePeriod?: {
                seconds?: number;
                nanos?: number;
            } & {
                seconds?: number;
                nanos?: number;
            } & { [K_1 in Exclude<keyof I["params"]["tokenUpgradeGracePeriod"], keyof import("../../../../google/protobuf/duration").Duration>]: never; };
        } & { [K_2 in Exclude<keyof I["params"], keyof Params>]: never; };
    } & { [K_3 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {
            issueFee?: {
                denom?: string;
                amount?: string;
            };
            tokenUpgradeDecisionTimeout?: Date;
            tokenUpgradeGracePeriod?: {
                seconds?: number;
                nanos?: number;
            };
        };
    } & {
        params?: {
            issueFee?: {
                denom?: string;
                amount?: string;
            };
            tokenUpgradeDecisionTimeout?: Date;
            tokenUpgradeGracePeriod?: {
                seconds?: number;
                nanos?: number;
            };
        } & {
            issueFee?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_4 in Exclude<keyof I_1["params"]["issueFee"], keyof Coin>]: never; };
            tokenUpgradeDecisionTimeout?: Date;
            tokenUpgradeGracePeriod?: {
                seconds?: number;
                nanos?: number;
            } & {
                seconds?: number;
                nanos?: number;
            } & { [K_5 in Exclude<keyof I_1["params"]["tokenUpgradeGracePeriod"], keyof import("../../../../google/protobuf/duration").Duration>]: never; };
        } & { [K_6 in Exclude<keyof I_1["params"], keyof Params>]: never; };
    } & { [K_7 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryTokenRequest: {
    encode(message: QueryTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest;
    fromJSON(object: any): QueryTokenRequest;
    toJSON(message: QueryTokenRequest): unknown;
    create<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & { [K in Exclude<keyof I, "denom">]: never; }>(base?: I): QueryTokenRequest;
    fromPartial<I_1 extends {
        denom?: string;
    } & {
        denom?: string;
    } & { [K_1 in Exclude<keyof I_1, "denom">]: never; }>(object: I_1): QueryTokenRequest;
};
export declare const QueryTokenResponse: {
    encode(message: QueryTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse;
    fromJSON(object: any): QueryTokenResponse;
    toJSON(message: QueryTokenResponse): unknown;
    create<I extends {
        token?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        };
    } & {
        token?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        } & {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[] & import("./token").Feature[] & { [K in Exclude<keyof I["token"]["features"], keyof import("./token").Feature[]>]: never; };
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            } & {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[] & string[] & { [K_1 in Exclude<keyof I["token"]["dexSettings"]["whitelistedDenoms"], keyof string[]>]: never; };
            } & { [K_2 in Exclude<keyof I["token"]["dexSettings"], keyof import("./token").DEXSettings>]: never; };
        } & { [K_3 in Exclude<keyof I["token"], keyof Token>]: never; };
    } & { [K_4 in Exclude<keyof I, "token">]: never; }>(base?: I): QueryTokenResponse;
    fromPartial<I_1 extends {
        token?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        };
    } & {
        token?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        } & {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[] & import("./token").Feature[] & { [K_5 in Exclude<keyof I_1["token"]["features"], keyof import("./token").Feature[]>]: never; };
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            } & {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[] & string[] & { [K_6 in Exclude<keyof I_1["token"]["dexSettings"]["whitelistedDenoms"], keyof string[]>]: never; };
            } & { [K_7 in Exclude<keyof I_1["token"]["dexSettings"], keyof import("./token").DEXSettings>]: never; };
        } & { [K_8 in Exclude<keyof I_1["token"], keyof Token>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "token">]: never; }>(object: I_1): QueryTokenResponse;
};
export declare const QueryTokensRequest: {
    encode(message: QueryTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest;
    fromJSON(object: any): QueryTokensRequest;
    toJSON(message: QueryTokensRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
        issuer?: string;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint & { [K in Exclude<keyof I["pagination"]["offset"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            limit?: bigint & { [K_1 in Exclude<keyof I["pagination"]["limit"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
        issuer?: string;
    } & { [K_3 in Exclude<keyof I, keyof QueryTokensRequest>]: never; }>(base?: I): QueryTokensRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
        issuer?: string;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint & { [K_4 in Exclude<keyof I_1["pagination"]["offset"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            limit?: bigint & { [K_5 in Exclude<keyof I_1["pagination"]["limit"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
        issuer?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof QueryTokensRequest>]: never; }>(object: I_1): QueryTokensRequest;
};
export declare const QueryTokensResponse: {
    encode(message: QueryTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse;
    fromJSON(object: any): QueryTokensResponse;
    toJSON(message: QueryTokensResponse): unknown;
    create<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
        tokens?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint & { [K in Exclude<keyof I["pagination"]["total"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
        } & { [K_1 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
        tokens?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        }[] & ({
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        } & {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[] & import("./token").Feature[] & { [K_2 in Exclude<keyof I["tokens"][number]["features"], keyof import("./token").Feature[]>]: never; };
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            } & {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[] & string[] & { [K_3 in Exclude<keyof I["tokens"][number]["dexSettings"]["whitelistedDenoms"], keyof string[]>]: never; };
            } & { [K_4 in Exclude<keyof I["tokens"][number]["dexSettings"], keyof import("./token").DEXSettings>]: never; };
        } & { [K_5 in Exclude<keyof I["tokens"][number], keyof Token>]: never; })[] & { [K_6 in Exclude<keyof I["tokens"], keyof {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof QueryTokensResponse>]: never; }>(base?: I): QueryTokensResponse;
    fromPartial<I_1 extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
        tokens?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint & { [K_8 in Exclude<keyof I_1["pagination"]["total"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
        } & { [K_9 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
        tokens?: {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        }[] & ({
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        } & {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[] & import("./token").Feature[] & { [K_10 in Exclude<keyof I_1["tokens"][number]["features"], keyof import("./token").Feature[]>]: never; };
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            } & {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[] & string[] & { [K_11 in Exclude<keyof I_1["tokens"][number]["dexSettings"]["whitelistedDenoms"], keyof string[]>]: never; };
            } & { [K_12 in Exclude<keyof I_1["tokens"][number]["dexSettings"], keyof import("./token").DEXSettings>]: never; };
        } & { [K_13 in Exclude<keyof I_1["tokens"][number], keyof Token>]: never; })[] & { [K_14 in Exclude<keyof I_1["tokens"], keyof {
            denom?: string;
            issuer?: string;
            symbol?: string;
            subunit?: string;
            precision?: number;
            description?: string;
            globallyFrozen?: boolean;
            features?: import("./token").Feature[];
            burnRate?: string;
            sendCommissionRate?: string;
            version?: number;
            uri?: string;
            uriHash?: string;
            extensionCwAddress?: string;
            admin?: string;
            dexSettings?: {
                unifiedRefAmount?: string;
                whitelistedDenoms?: string[];
            };
        }[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof QueryTokensResponse>]: never; }>(object: I_1): QueryTokensResponse;
};
export declare const QueryFrozenBalancesRequest: {
    encode(message: QueryFrozenBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesRequest;
    fromJSON(object: any): QueryFrozenBalancesRequest;
    toJSON(message: QueryFrozenBalancesRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
        account?: string;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint & { [K in Exclude<keyof I["pagination"]["offset"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            limit?: bigint & { [K_1 in Exclude<keyof I["pagination"]["limit"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
        account?: string;
    } & { [K_3 in Exclude<keyof I, keyof QueryFrozenBalancesRequest>]: never; }>(base?: I): QueryFrozenBalancesRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
        account?: string;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint & { [K_4 in Exclude<keyof I_1["pagination"]["offset"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            limit?: bigint & { [K_5 in Exclude<keyof I_1["pagination"]["limit"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
        account?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof QueryFrozenBalancesRequest>]: never; }>(object: I_1): QueryFrozenBalancesRequest;
};
export declare const QueryFrozenBalancesResponse: {
    encode(message: QueryFrozenBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalancesResponse;
    fromJSON(object: any): QueryFrozenBalancesResponse;
    toJSON(message: QueryFrozenBalancesResponse): unknown;
    create<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
        balances?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint & { [K in Exclude<keyof I["pagination"]["total"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
        } & { [K_1 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
        balances?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["balances"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["balances"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof QueryFrozenBalancesResponse>]: never; }>(base?: I): QueryFrozenBalancesResponse;
    fromPartial<I_1 extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
        balances?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint & { [K_5 in Exclude<keyof I_1["pagination"]["total"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
        balances?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_7 in Exclude<keyof I_1["balances"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I_1["balances"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof QueryFrozenBalancesResponse>]: never; }>(object: I_1): QueryFrozenBalancesResponse;
};
export declare const QueryFrozenBalanceRequest: {
    encode(message: QueryFrozenBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceRequest;
    fromJSON(object: any): QueryFrozenBalanceRequest;
    toJSON(message: QueryFrozenBalanceRequest): unknown;
    create<I extends {
        account?: string;
        denom?: string;
    } & {
        account?: string;
        denom?: string;
    } & { [K in Exclude<keyof I, keyof QueryFrozenBalanceRequest>]: never; }>(base?: I): QueryFrozenBalanceRequest;
    fromPartial<I_1 extends {
        account?: string;
        denom?: string;
    } & {
        account?: string;
        denom?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryFrozenBalanceRequest>]: never; }>(object: I_1): QueryFrozenBalanceRequest;
};
export declare const QueryFrozenBalanceResponse: {
    encode(message: QueryFrozenBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFrozenBalanceResponse;
    fromJSON(object: any): QueryFrozenBalanceResponse;
    toJSON(message: QueryFrozenBalanceResponse): unknown;
    create<I extends {
        balance?: {
            denom?: string;
            amount?: string;
        };
    } & {
        balance?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["balance"], keyof Coin>]: never; };
    } & { [K_1 in Exclude<keyof I, "balance">]: never; }>(base?: I): QueryFrozenBalanceResponse;
    fromPartial<I_1 extends {
        balance?: {
            denom?: string;
            amount?: string;
        };
    } & {
        balance?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I_1["balance"], keyof Coin>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "balance">]: never; }>(object: I_1): QueryFrozenBalanceResponse;
};
export declare const QueryWhitelistedBalancesRequest: {
    encode(message: QueryWhitelistedBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesRequest;
    fromJSON(object: any): QueryWhitelistedBalancesRequest;
    toJSON(message: QueryWhitelistedBalancesRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
        account?: string;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint & { [K in Exclude<keyof I["pagination"]["offset"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            limit?: bigint & { [K_1 in Exclude<keyof I["pagination"]["limit"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
        account?: string;
    } & { [K_3 in Exclude<keyof I, keyof QueryWhitelistedBalancesRequest>]: never; }>(base?: I): QueryWhitelistedBalancesRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        };
        account?: string;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: bigint;
            limit?: bigint;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: bigint & { [K_4 in Exclude<keyof I_1["pagination"]["offset"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            limit?: bigint & { [K_5 in Exclude<keyof I_1["pagination"]["limit"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
        account?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof QueryWhitelistedBalancesRequest>]: never; }>(object: I_1): QueryWhitelistedBalancesRequest;
};
export declare const QueryWhitelistedBalancesResponse: {
    encode(message: QueryWhitelistedBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalancesResponse;
    fromJSON(object: any): QueryWhitelistedBalancesResponse;
    toJSON(message: QueryWhitelistedBalancesResponse): unknown;
    create<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
        balances?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint & { [K in Exclude<keyof I["pagination"]["total"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
        } & { [K_1 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
        balances?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["balances"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["balances"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof QueryWhitelistedBalancesResponse>]: never; }>(base?: I): QueryWhitelistedBalancesResponse;
    fromPartial<I_1 extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        };
        balances?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: bigint;
        } & {
            nextKey?: Uint8Array;
            total?: bigint & { [K_5 in Exclude<keyof I_1["pagination"]["total"], typeof Symbol.toStringTag | "toString" | "valueOf" | "toLocaleString">]: never; };
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
        balances?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_7 in Exclude<keyof I_1["balances"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I_1["balances"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof QueryWhitelistedBalancesResponse>]: never; }>(object: I_1): QueryWhitelistedBalancesResponse;
};
export declare const QueryWhitelistedBalanceRequest: {
    encode(message: QueryWhitelistedBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceRequest;
    fromJSON(object: any): QueryWhitelistedBalanceRequest;
    toJSON(message: QueryWhitelistedBalanceRequest): unknown;
    create<I extends {
        account?: string;
        denom?: string;
    } & {
        account?: string;
        denom?: string;
    } & { [K in Exclude<keyof I, keyof QueryWhitelistedBalanceRequest>]: never; }>(base?: I): QueryWhitelistedBalanceRequest;
    fromPartial<I_1 extends {
        account?: string;
        denom?: string;
    } & {
        account?: string;
        denom?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryWhitelistedBalanceRequest>]: never; }>(object: I_1): QueryWhitelistedBalanceRequest;
};
export declare const QueryWhitelistedBalanceResponse: {
    encode(message: QueryWhitelistedBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWhitelistedBalanceResponse;
    fromJSON(object: any): QueryWhitelistedBalanceResponse;
    toJSON(message: QueryWhitelistedBalanceResponse): unknown;
    create<I extends {
        balance?: {
            denom?: string;
            amount?: string;
        };
    } & {
        balance?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["balance"], keyof Coin>]: never; };
    } & { [K_1 in Exclude<keyof I, "balance">]: never; }>(base?: I): QueryWhitelistedBalanceResponse;
    fromPartial<I_1 extends {
        balance?: {
            denom?: string;
            amount?: string;
        };
    } & {
        balance?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I_1["balance"], keyof Coin>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "balance">]: never; }>(object: I_1): QueryWhitelistedBalanceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/asset/ft module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Tokens queries the fungible tokens of the module. */
    Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    /** Token queries the fungible token of the module. */
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    /** FrozenBalances returns all the frozen balances for the account. */
    FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
    /** FrozenBalance returns frozen balance of the denom for the account. */
    FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
    /** WhitelistedBalances returns all the whitelisted balances for the account. */
    WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
    /** WhitelistedBalance returns whitelisted balance of the denom for the account. */
    WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    FrozenBalances(request: QueryFrozenBalancesRequest): Promise<QueryFrozenBalancesResponse>;
    FrozenBalance(request: QueryFrozenBalanceRequest): Promise<QueryFrozenBalanceResponse>;
    WhitelistedBalances(request: QueryWhitelistedBalancesRequest): Promise<QueryWhitelistedBalancesResponse>;
    WhitelistedBalance(request: QueryWhitelistedBalanceRequest): Promise<QueryWhitelistedBalanceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
