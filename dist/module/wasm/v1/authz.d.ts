import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    /** Grants for contract executions */
    grants: ContractGrant[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit: Any | undefined;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter: Any | undefined;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    /** Remaining number that is decremented on each execution */
    remaining: number;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    /** Remaining number that is decremented on each execution */
    callsRemaining: number;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    /** Messages is the list of unique keys */
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export declare const ContractExecutionAuthorization: {
    encode(message: ContractExecutionAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractExecutionAuthorization;
    fromJSON(object: any): ContractExecutionAuthorization;
    toJSON(message: ContractExecutionAuthorization): unknown;
    create<I extends Exact<DeepPartial<ContractExecutionAuthorization>, I>>(base?: I): ContractExecutionAuthorization;
    fromPartial<I extends Exact<DeepPartial<ContractExecutionAuthorization>, I>>(object: I): ContractExecutionAuthorization;
};
export declare const ContractMigrationAuthorization: {
    encode(message: ContractMigrationAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractMigrationAuthorization;
    fromJSON(object: any): ContractMigrationAuthorization;
    toJSON(message: ContractMigrationAuthorization): unknown;
    create<I extends Exact<DeepPartial<ContractMigrationAuthorization>, I>>(base?: I): ContractMigrationAuthorization;
    fromPartial<I extends Exact<DeepPartial<ContractMigrationAuthorization>, I>>(object: I): ContractMigrationAuthorization;
};
export declare const ContractGrant: {
    encode(message: ContractGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractGrant;
    fromJSON(object: any): ContractGrant;
    toJSON(message: ContractGrant): unknown;
    create<I extends Exact<DeepPartial<ContractGrant>, I>>(base?: I): ContractGrant;
    fromPartial<I extends Exact<DeepPartial<ContractGrant>, I>>(object: I): ContractGrant;
};
export declare const MaxCallsLimit: {
    encode(message: MaxCallsLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaxCallsLimit;
    fromJSON(object: any): MaxCallsLimit;
    toJSON(message: MaxCallsLimit): unknown;
    create<I extends Exact<DeepPartial<MaxCallsLimit>, I>>(base?: I): MaxCallsLimit;
    fromPartial<I extends Exact<DeepPartial<MaxCallsLimit>, I>>(object: I): MaxCallsLimit;
};
export declare const MaxFundsLimit: {
    encode(message: MaxFundsLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaxFundsLimit;
    fromJSON(object: any): MaxFundsLimit;
    toJSON(message: MaxFundsLimit): unknown;
    create<I extends Exact<DeepPartial<MaxFundsLimit>, I>>(base?: I): MaxFundsLimit;
    fromPartial<I extends Exact<DeepPartial<MaxFundsLimit>, I>>(object: I): MaxFundsLimit;
};
export declare const CombinedLimit: {
    encode(message: CombinedLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CombinedLimit;
    fromJSON(object: any): CombinedLimit;
    toJSON(message: CombinedLimit): unknown;
    create<I extends Exact<DeepPartial<CombinedLimit>, I>>(base?: I): CombinedLimit;
    fromPartial<I extends Exact<DeepPartial<CombinedLimit>, I>>(object: I): CombinedLimit;
};
export declare const AllowAllMessagesFilter: {
    encode(_: AllowAllMessagesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowAllMessagesFilter;
    fromJSON(_: any): AllowAllMessagesFilter;
    toJSON(_: AllowAllMessagesFilter): unknown;
    create<I extends Exact<DeepPartial<AllowAllMessagesFilter>, I>>(base?: I): AllowAllMessagesFilter;
    fromPartial<I extends Exact<DeepPartial<AllowAllMessagesFilter>, I>>(_: I): AllowAllMessagesFilter;
};
export declare const AcceptedMessageKeysFilter: {
    encode(message: AcceptedMessageKeysFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessageKeysFilter;
    fromJSON(object: any): AcceptedMessageKeysFilter;
    toJSON(message: AcceptedMessageKeysFilter): unknown;
    create<I extends Exact<DeepPartial<AcceptedMessageKeysFilter>, I>>(base?: I): AcceptedMessageKeysFilter;
    fromPartial<I extends Exact<DeepPartial<AcceptedMessageKeysFilter>, I>>(object: I): AcceptedMessageKeysFilter;
};
export declare const AcceptedMessagesFilter: {
    encode(message: AcceptedMessagesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedMessagesFilter;
    fromJSON(object: any): AcceptedMessagesFilter;
    toJSON(message: AcceptedMessagesFilter): unknown;
    create<I extends Exact<DeepPartial<AcceptedMessagesFilter>, I>>(base?: I): AcceptedMessagesFilter;
    fromPartial<I extends Exact<DeepPartial<AcceptedMessagesFilter>, I>>(object: I): AcceptedMessagesFilter;
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
