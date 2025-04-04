import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "coreum.asset.ft.v1";
/** Feature defines possible features of fungible token. */
export declare enum Feature {
    minting = 0,
    burning = 1,
    freezing = 2,
    whitelisting = 3,
    ibc = 4,
    block_smart_contracts = 5,
    clawback = 6,
    extension = 7,
    dex_block = 8,
    dex_whitelisted_denoms = 9,
    dex_order_cancellation = 10,
    dex_unified_ref_amount_change = 11,
    UNRECOGNIZED = -1
}
export declare function featureFromJSON(object: any): Feature;
export declare function featureToJSON(object: Feature): string;
/** Definition defines the fungible token settings to store. */
export interface Definition {
    denom: string;
    issuer: string;
    features: Feature[];
    /**
     * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * burn_amount. This value will be burnt on top of the send amount.
     */
    burnRate: string;
    /**
     * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * amount sent to the token admin account.
     */
    sendCommissionRate: string;
    version: number;
    uri: string;
    uriHash: string;
    extensionCwAddress: string;
    admin: string;
}
/** Token is a full representation of the fungible token. */
export interface Token {
    denom: string;
    issuer: string;
    symbol: string;
    subunit: string;
    precision: number;
    description: string;
    globallyFrozen: boolean;
    features: Feature[];
    /**
     * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * burn_amount. This value will be burnt on top of the send amount.
     */
    burnRate: string;
    /**
     * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
     * amount sent to the token admin account.
     */
    sendCommissionRate: string;
    version: number;
    uri: string;
    uriHash: string;
    extensionCwAddress: string;
    admin: string;
    dexSettings: DEXSettings | undefined;
}
/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1 {
    denom: string;
}
/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1Status {
    ibcEnabled: boolean;
    startTime: Date | undefined;
    endTime: Date | undefined;
}
/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatuses {
    v1: TokenUpgradeV1Status | undefined;
}
/** DEXSettings defines the token settings of the dex. */
export interface DEXSettings {
    /** unified_ref_amount is the approximate amount you need to by 1USD, used to define the price tick size */
    unifiedRefAmount: string;
    /** whitelisted_denoms is the list of denoms to trade with. */
    whitelistedDenoms: string[];
}
export declare const Definition: {
    encode(message: Definition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Definition;
    fromJSON(object: any): Definition;
    toJSON(message: Definition): unknown;
    create<I extends {
        denom?: string;
        issuer?: string;
        features?: Feature[];
        burnRate?: string;
        sendCommissionRate?: string;
        version?: number;
        uri?: string;
        uriHash?: string;
        extensionCwAddress?: string;
        admin?: string;
    } & {
        denom?: string;
        issuer?: string;
        features?: Feature[] & Feature[] & { [K in Exclude<keyof I["features"], keyof Feature[]>]: never; };
        burnRate?: string;
        sendCommissionRate?: string;
        version?: number;
        uri?: string;
        uriHash?: string;
        extensionCwAddress?: string;
        admin?: string;
    } & { [K_1 in Exclude<keyof I, keyof Definition>]: never; }>(base?: I): Definition;
    fromPartial<I_1 extends {
        denom?: string;
        issuer?: string;
        features?: Feature[];
        burnRate?: string;
        sendCommissionRate?: string;
        version?: number;
        uri?: string;
        uriHash?: string;
        extensionCwAddress?: string;
        admin?: string;
    } & {
        denom?: string;
        issuer?: string;
        features?: Feature[] & Feature[] & { [K_2 in Exclude<keyof I_1["features"], keyof Feature[]>]: never; };
        burnRate?: string;
        sendCommissionRate?: string;
        version?: number;
        uri?: string;
        uriHash?: string;
        extensionCwAddress?: string;
        admin?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof Definition>]: never; }>(object: I_1): Definition;
};
export declare const Token: {
    encode(message: Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Token;
    fromJSON(object: any): Token;
    toJSON(message: Token): unknown;
    create<I extends {
        denom?: string;
        issuer?: string;
        symbol?: string;
        subunit?: string;
        precision?: number;
        description?: string;
        globallyFrozen?: boolean;
        features?: Feature[];
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
        features?: Feature[] & Feature[] & { [K in Exclude<keyof I["features"], keyof Feature[]>]: never; };
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
            whitelistedDenoms?: string[] & string[] & { [K_1 in Exclude<keyof I["dexSettings"]["whitelistedDenoms"], keyof string[]>]: never; };
        } & { [K_2 in Exclude<keyof I["dexSettings"], keyof DEXSettings>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof Token>]: never; }>(base?: I): Token;
    fromPartial<I_1 extends {
        denom?: string;
        issuer?: string;
        symbol?: string;
        subunit?: string;
        precision?: number;
        description?: string;
        globallyFrozen?: boolean;
        features?: Feature[];
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
        features?: Feature[] & Feature[] & { [K_4 in Exclude<keyof I_1["features"], keyof Feature[]>]: never; };
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
            whitelistedDenoms?: string[] & string[] & { [K_5 in Exclude<keyof I_1["dexSettings"]["whitelistedDenoms"], keyof string[]>]: never; };
        } & { [K_6 in Exclude<keyof I_1["dexSettings"], keyof DEXSettings>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof Token>]: never; }>(object: I_1): Token;
};
export declare const DelayedTokenUpgradeV1: {
    encode(message: DelayedTokenUpgradeV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelayedTokenUpgradeV1;
    fromJSON(object: any): DelayedTokenUpgradeV1;
    toJSON(message: DelayedTokenUpgradeV1): unknown;
    create<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & { [K in Exclude<keyof I, "denom">]: never; }>(base?: I): DelayedTokenUpgradeV1;
    fromPartial<I_1 extends {
        denom?: string;
    } & {
        denom?: string;
    } & { [K_1 in Exclude<keyof I_1, "denom">]: never; }>(object: I_1): DelayedTokenUpgradeV1;
};
export declare const TokenUpgradeV1Status: {
    encode(message: TokenUpgradeV1Status, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenUpgradeV1Status;
    fromJSON(object: any): TokenUpgradeV1Status;
    toJSON(message: TokenUpgradeV1Status): unknown;
    create<I extends {
        ibcEnabled?: boolean;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
    } & {
        ibcEnabled?: boolean;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof TokenUpgradeV1Status>]: never; }>(base?: I): TokenUpgradeV1Status;
    fromPartial<I_1 extends {
        ibcEnabled?: boolean;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
    } & {
        ibcEnabled?: boolean;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TokenUpgradeV1Status>]: never; }>(object: I_1): TokenUpgradeV1Status;
};
export declare const TokenUpgradeStatuses: {
    encode(message: TokenUpgradeStatuses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenUpgradeStatuses;
    fromJSON(object: any): TokenUpgradeStatuses;
    toJSON(message: TokenUpgradeStatuses): unknown;
    create<I extends {
        v1?: {
            ibcEnabled?: boolean;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
        };
    } & {
        v1?: {
            ibcEnabled?: boolean;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
        } & {
            ibcEnabled?: boolean;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
        } & { [K in Exclude<keyof I["v1"], keyof TokenUpgradeV1Status>]: never; };
    } & { [K_1 in Exclude<keyof I, "v1">]: never; }>(base?: I): TokenUpgradeStatuses;
    fromPartial<I_1 extends {
        v1?: {
            ibcEnabled?: boolean;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
        };
    } & {
        v1?: {
            ibcEnabled?: boolean;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
        } & {
            ibcEnabled?: boolean;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
        } & { [K_2 in Exclude<keyof I_1["v1"], keyof TokenUpgradeV1Status>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "v1">]: never; }>(object: I_1): TokenUpgradeStatuses;
};
export declare const DEXSettings: {
    encode(message: DEXSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DEXSettings;
    fromJSON(object: any): DEXSettings;
    toJSON(message: DEXSettings): unknown;
    create<I extends {
        unifiedRefAmount?: string;
        whitelistedDenoms?: string[];
    } & {
        unifiedRefAmount?: string;
        whitelistedDenoms?: string[] & string[] & { [K in Exclude<keyof I["whitelistedDenoms"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof DEXSettings>]: never; }>(base?: I): DEXSettings;
    fromPartial<I_1 extends {
        unifiedRefAmount?: string;
        whitelistedDenoms?: string[];
    } & {
        unifiedRefAmount?: string;
        whitelistedDenoms?: string[] & string[] & { [K_2 in Exclude<keyof I_1["whitelistedDenoms"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof DEXSettings>]: never; }>(object: I_1): DEXSettings;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
