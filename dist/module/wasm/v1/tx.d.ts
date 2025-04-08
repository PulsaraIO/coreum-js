import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { AccessConfig, Params } from "./types";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission: AccessConfig | undefined;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: number;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: number;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfig {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID references the stored WASM code */
    codeId: number;
    /** NewInstantiatePermission is the new access control */
    newInstantiatePermission: AccessConfig | undefined;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponse {
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.40
 */
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/wasm parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.40
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 *
 * Since: 0.40
 */
export interface MsgSudoContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 *
 * Since: 0.40
 */
export interface MsgSudoContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgPinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the new WASM codes */
    codeIds: number[];
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 *
 * Since: 0.40
 */
export interface MsgPinCodesResponse {
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the WASM codes */
    codeIds: number[];
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodesResponse {
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission: AccessConfig | undefined;
    /**
     * UnpinCode code on upload, optional. As default the uploaded contract is
     * pinned to cache.
     */
    unpinCode: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred from the authority account to the contract
     * on instantiation
     */
    funds: Coin[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    create<I extends Exact<DeepPartial<MsgStoreCode>, I>>(base?: I): MsgStoreCode;
    fromPartial<I extends Exact<DeepPartial<MsgStoreCode>, I>>(object: I): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgStoreCodeResponse>, I>>(base?: I): MsgStoreCodeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgStoreCodeResponse>, I>>(object: I): MsgStoreCodeResponse;
};
export declare const MsgInstantiateContract: {
    encode(message: MsgInstantiateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    create<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(base?: I): MsgInstantiateContract;
    fromPartial<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(object: I): MsgInstantiateContract;
};
export declare const MsgInstantiateContractResponse: {
    encode(message: MsgInstantiateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse;
    fromJSON(object: any): MsgInstantiateContractResponse;
    toJSON(message: MsgInstantiateContractResponse): unknown;
    create<I extends Exact<DeepPartial<MsgInstantiateContractResponse>, I>>(base?: I): MsgInstantiateContractResponse;
    fromPartial<I extends Exact<DeepPartial<MsgInstantiateContractResponse>, I>>(object: I): MsgInstantiateContractResponse;
};
export declare const MsgInstantiateContract2: {
    encode(message: MsgInstantiateContract2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract2;
    fromJSON(object: any): MsgInstantiateContract2;
    toJSON(message: MsgInstantiateContract2): unknown;
    create<I extends Exact<DeepPartial<MsgInstantiateContract2>, I>>(base?: I): MsgInstantiateContract2;
    fromPartial<I extends Exact<DeepPartial<MsgInstantiateContract2>, I>>(object: I): MsgInstantiateContract2;
};
export declare const MsgInstantiateContract2Response: {
    encode(message: MsgInstantiateContract2Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract2Response;
    fromJSON(object: any): MsgInstantiateContract2Response;
    toJSON(message: MsgInstantiateContract2Response): unknown;
    create<I extends Exact<DeepPartial<MsgInstantiateContract2Response>, I>>(base?: I): MsgInstantiateContract2Response;
    fromPartial<I extends Exact<DeepPartial<MsgInstantiateContract2Response>, I>>(object: I): MsgInstantiateContract2Response;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    create<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(base?: I): MsgExecuteContract;
    fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(object: I): MsgExecuteContract;
};
export declare const MsgExecuteContractResponse: {
    encode(message: MsgExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse;
    fromJSON(object: any): MsgExecuteContractResponse;
    toJSON(message: MsgExecuteContractResponse): unknown;
    create<I extends Exact<DeepPartial<MsgExecuteContractResponse>, I>>(base?: I): MsgExecuteContractResponse;
    fromPartial<I extends Exact<DeepPartial<MsgExecuteContractResponse>, I>>(object: I): MsgExecuteContractResponse;
};
export declare const MsgMigrateContract: {
    encode(message: MsgMigrateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    create<I extends Exact<DeepPartial<MsgMigrateContract>, I>>(base?: I): MsgMigrateContract;
    fromPartial<I extends Exact<DeepPartial<MsgMigrateContract>, I>>(object: I): MsgMigrateContract;
};
export declare const MsgMigrateContractResponse: {
    encode(message: MsgMigrateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromJSON(object: any): MsgMigrateContractResponse;
    toJSON(message: MsgMigrateContractResponse): unknown;
    create<I extends Exact<DeepPartial<MsgMigrateContractResponse>, I>>(base?: I): MsgMigrateContractResponse;
    fromPartial<I extends Exact<DeepPartial<MsgMigrateContractResponse>, I>>(object: I): MsgMigrateContractResponse;
};
export declare const MsgUpdateAdmin: {
    encode(message: MsgUpdateAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdmin;
    fromJSON(object: any): MsgUpdateAdmin;
    toJSON(message: MsgUpdateAdmin): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateAdmin>, I>>(base?: I): MsgUpdateAdmin;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateAdmin>, I>>(object: I): MsgUpdateAdmin;
};
export declare const MsgUpdateAdminResponse: {
    encode(_: MsgUpdateAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdminResponse;
    fromJSON(_: any): MsgUpdateAdminResponse;
    toJSON(_: MsgUpdateAdminResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateAdminResponse>, I>>(base?: I): MsgUpdateAdminResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateAdminResponse>, I>>(_: I): MsgUpdateAdminResponse;
};
export declare const MsgClearAdmin: {
    encode(message: MsgClearAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    create<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(base?: I): MsgClearAdmin;
    fromPartial<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(object: I): MsgClearAdmin;
};
export declare const MsgClearAdminResponse: {
    encode(_: MsgClearAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdminResponse;
    fromJSON(_: any): MsgClearAdminResponse;
    toJSON(_: MsgClearAdminResponse): unknown;
    create<I extends Exact<DeepPartial<MsgClearAdminResponse>, I>>(base?: I): MsgClearAdminResponse;
    fromPartial<I extends Exact<DeepPartial<MsgClearAdminResponse>, I>>(_: I): MsgClearAdminResponse;
};
export declare const MsgUpdateInstantiateConfig: {
    encode(message: MsgUpdateInstantiateConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInstantiateConfig;
    fromJSON(object: any): MsgUpdateInstantiateConfig;
    toJSON(message: MsgUpdateInstantiateConfig): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateInstantiateConfig>, I>>(base?: I): MsgUpdateInstantiateConfig;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInstantiateConfig>, I>>(object: I): MsgUpdateInstantiateConfig;
};
export declare const MsgUpdateInstantiateConfigResponse: {
    encode(_: MsgUpdateInstantiateConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInstantiateConfigResponse;
    fromJSON(_: any): MsgUpdateInstantiateConfigResponse;
    toJSON(_: MsgUpdateInstantiateConfigResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateInstantiateConfigResponse>, I>>(base?: I): MsgUpdateInstantiateConfigResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInstantiateConfigResponse>, I>>(_: I): MsgUpdateInstantiateConfigResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
export declare const MsgSudoContract: {
    encode(message: MsgSudoContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSudoContract;
    fromJSON(object: any): MsgSudoContract;
    toJSON(message: MsgSudoContract): unknown;
    create<I extends Exact<DeepPartial<MsgSudoContract>, I>>(base?: I): MsgSudoContract;
    fromPartial<I extends Exact<DeepPartial<MsgSudoContract>, I>>(object: I): MsgSudoContract;
};
export declare const MsgSudoContractResponse: {
    encode(message: MsgSudoContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSudoContractResponse;
    fromJSON(object: any): MsgSudoContractResponse;
    toJSON(message: MsgSudoContractResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSudoContractResponse>, I>>(base?: I): MsgSudoContractResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSudoContractResponse>, I>>(object: I): MsgSudoContractResponse;
};
export declare const MsgPinCodes: {
    encode(message: MsgPinCodes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPinCodes;
    fromJSON(object: any): MsgPinCodes;
    toJSON(message: MsgPinCodes): unknown;
    create<I extends Exact<DeepPartial<MsgPinCodes>, I>>(base?: I): MsgPinCodes;
    fromPartial<I extends Exact<DeepPartial<MsgPinCodes>, I>>(object: I): MsgPinCodes;
};
export declare const MsgPinCodesResponse: {
    encode(_: MsgPinCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPinCodesResponse;
    fromJSON(_: any): MsgPinCodesResponse;
    toJSON(_: MsgPinCodesResponse): unknown;
    create<I extends Exact<DeepPartial<MsgPinCodesResponse>, I>>(base?: I): MsgPinCodesResponse;
    fromPartial<I extends Exact<DeepPartial<MsgPinCodesResponse>, I>>(_: I): MsgPinCodesResponse;
};
export declare const MsgUnpinCodes: {
    encode(message: MsgUnpinCodes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnpinCodes;
    fromJSON(object: any): MsgUnpinCodes;
    toJSON(message: MsgUnpinCodes): unknown;
    create<I extends Exact<DeepPartial<MsgUnpinCodes>, I>>(base?: I): MsgUnpinCodes;
    fromPartial<I extends Exact<DeepPartial<MsgUnpinCodes>, I>>(object: I): MsgUnpinCodes;
};
export declare const MsgUnpinCodesResponse: {
    encode(_: MsgUnpinCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnpinCodesResponse;
    fromJSON(_: any): MsgUnpinCodesResponse;
    toJSON(_: MsgUnpinCodesResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUnpinCodesResponse>, I>>(base?: I): MsgUnpinCodesResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUnpinCodesResponse>, I>>(_: I): MsgUnpinCodesResponse;
};
export declare const MsgStoreAndInstantiateContract: {
    encode(message: MsgStoreAndInstantiateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreAndInstantiateContract;
    fromJSON(object: any): MsgStoreAndInstantiateContract;
    toJSON(message: MsgStoreAndInstantiateContract): unknown;
    create<I extends Exact<DeepPartial<MsgStoreAndInstantiateContract>, I>>(base?: I): MsgStoreAndInstantiateContract;
    fromPartial<I extends Exact<DeepPartial<MsgStoreAndInstantiateContract>, I>>(object: I): MsgStoreAndInstantiateContract;
};
export declare const MsgStoreAndInstantiateContractResponse: {
    encode(message: MsgStoreAndInstantiateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreAndInstantiateContractResponse;
    fromJSON(object: any): MsgStoreAndInstantiateContractResponse;
    toJSON(message: MsgStoreAndInstantiateContractResponse): unknown;
    create<I extends Exact<DeepPartial<MsgStoreAndInstantiateContractResponse>, I>>(base?: I): MsgStoreAndInstantiateContractResponse;
    fromPartial<I extends Exact<DeepPartial<MsgStoreAndInstantiateContractResponse>, I>>(object: I): MsgStoreAndInstantiateContractResponse;
};
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /**
     * InstantiateContract creates a new smart contract instance for the given
     *  code id.
     */
    InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /**
     * InstantiateContract2 creates a new smart contract instance for the given
     *  code id with a predictable address
     */
    InstantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
    /** Execute submits the given message data to a smart contract */
    ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    /** UpdateAdmin sets a new   admin for a smart contract */
    UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    /** ClearAdmin removes any admin stored for a smart contract */
    ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
    /** UpdateInstantiateConfig updates instantiate config for a smart contract */
    UpdateInstantiateConfig(request: MsgUpdateInstantiateConfig): Promise<MsgUpdateInstantiateConfigResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/wasm
     * module parameters. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * SudoContract defines a governance operation for calling sudo
     * on a contract. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    SudoContract(request: MsgSudoContract): Promise<MsgSudoContractResponse>;
    /**
     * PinCodes defines a governance operation for pinning a set of
     * code ids in the wasmvm cache. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    PinCodes(request: MsgPinCodes): Promise<MsgPinCodesResponse>;
    /**
     * UnpinCodes defines a governance operation for unpinning a set of
     * code ids in the wasmvm cache. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    UnpinCodes(request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse>;
    /**
     * StoreAndInstantiateContract defines a governance operation for storing
     * and instantiating the contract. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    StoreAndInstantiateContract(request: MsgStoreAndInstantiateContract): Promise<MsgStoreAndInstantiateContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    InstantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
    ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
    UpdateInstantiateConfig(request: MsgUpdateInstantiateConfig): Promise<MsgUpdateInstantiateConfigResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    SudoContract(request: MsgSudoContract): Promise<MsgSudoContractResponse>;
    PinCodes(request: MsgPinCodes): Promise<MsgPinCodesResponse>;
    UnpinCodes(request: MsgUnpinCodes): Promise<MsgUnpinCodesResponse>;
    StoreAndInstantiateContract(request: MsgStoreAndInstantiateContract): Promise<MsgStoreAndInstantiateContractResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
