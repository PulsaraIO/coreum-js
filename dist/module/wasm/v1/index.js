import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, } from "./tx";
import { MsgIBCSend, MsgIBCCloseChannel } from "./ibc";
const baseUrl = "/cosmwasm.wasm.v1.";
export const cosmwasmRegistry = [
    [baseUrl + "MsgStoreAndInstantiateContract", MsgStoreAndInstantiateContract],
    [baseUrl + "MsgUpdateParams", MsgUpdateParams],
    [baseUrl + "MsgSudoContract", MsgSudoContract],
    [baseUrl + "MsgUnpinCodes", MsgUnpinCodes],
    [baseUrl + "MsgPinCodes", MsgPinCodes],
    [baseUrl + "MsgStoreCode", MsgStoreCode],
    [baseUrl + "MsgInstantiateContract", MsgInstantiateContract],
    [baseUrl + "MsgInstantiateContract2", MsgInstantiateContract2],
    [baseUrl + "MsgExecuteContract", MsgExecuteContract],
    [baseUrl + "MsgMigrateContract", MsgMigrateContract],
    [baseUrl + "MsgUpdateAdmin", MsgUpdateAdmin],
    [baseUrl + "MsgClearAdmin", MsgClearAdmin],
    [baseUrl + "MsgUpdateInstantiateConfig", MsgUpdateInstantiateConfig],
    [baseUrl + "MsgIBCSend", MsgIBCSend],
    [baseUrl + "MsgIBCCloseChannel", MsgIBCCloseChannel],
];
/**
 * Transaction Module for the IBC Module (wasm)
 */
export var IBC;
(function (IBC) {
    /** MsgIBCSend message creator
     *
     * @param object Represents the properties available for this MsgIBCSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    IBC.IBCSend = function (object) {
        return {
            typeUrl: baseUrl + "MsgIBCSend",
            value: MsgIBCSend.fromPartial(object),
        };
    };
    /** MsgIBCCloseChannel message creator
     *
     * @param object Represents the properties available for this MsgIBCCloseChannel message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    IBC.IBCCloseChannel = function (object) {
        return {
            typeUrl: baseUrl + "MsgIBCCloseChannel",
            value: MsgIBCCloseChannel.fromPartial(object),
        };
    };
})(IBC || (IBC = {}));
/**
 * Transaction Module for the Smart Contracts Module (wasm)
 */
export var CosmWasm;
(function (CosmWasm) {
    /** MsgStoreAndInstantiateContract message creator
     *
     * @param object Represents the properties available for this MsgStoreAndInstantiateContract message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.StoreAndInstantiateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgStoreAndInstantiateContract",
            value: MsgStoreAndInstantiateContract.fromPartial(object),
        };
    };
    /** MsgUnpinCodes message creator
     *
     * @param object Represents the properties available for this MsgUnpinCodes message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.UnpinCodes = function (object) {
        return {
            typeUrl: baseUrl + "MsgUnpinCodes",
            value: MsgUnpinCodes.fromPartial(object),
        };
    };
    /** MsgPinCodes message creator
     *
     * @param object Represents the properties available for this MsgPinCodes message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.PinCodes = function (object) {
        return {
            typeUrl: baseUrl + "MsgPinCodes",
            value: MsgPinCodes.fromPartial(object),
        };
    };
    /** MsgSudoContract message creator
     *
     * @param object Represents the properties available for this MsgSudoContract message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.SudoContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgSudoContract",
            value: MsgSudoContract.fromPartial(object),
        };
    };
    /** MsgUpdateParams message creator
     *
     * @param object Represents the properties available for this MsgUpdateParams message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.UpdateParams = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateParams",
            value: MsgUpdateParams.fromPartial(object),
        };
    };
    /** MsgUpdateInstantiateConfig message creator
     *
     * @param object Represents the properties available for this MsgUpdateInstantiateConfig message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.UpdateInstantiateConfig = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateInstantiateConfig",
            value: MsgUpdateInstantiateConfig.fromPartial(object),
        };
    };
    /**
     * MsgStoreCode message creator
     * Submit Wasm code to the system
     *
     * @param object Represents the properties available for this MsgStoreCode message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.StoreCode = function (object) {
        return {
            typeUrl: baseUrl + "MsgStoreCode",
            value: MsgStoreCode.fromPartial(object),
        };
    };
    /**
     * MsgInstantiateContract message creator
     * Creates a new smart contract instance for the given code id.
     *
     * @param object Represents the properties available for this MsgInstantiateContract message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.InstantiateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgInstantiateContract",
            value: MsgInstantiateContract.fromPartial(object),
        };
    };
    /** MsgInstantiateContract2 message creator
     * Creates a new smart contract instance for the given code id with a predictable address
     *
     * @param object Represents the properties available for this MsgInstantiateContract2 message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.InstantiateContract2 = function (object) {
        return {
            typeUrl: baseUrl + "MsgInstantiateContract2",
            value: MsgInstantiateContract2.fromPartial(object),
        };
    };
    /** MsgClearAdmin message creator
     * Removes any admin stored for a smart contract
     *
     * @param object Represents the properties available for this MsgClearAdmin message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.ClearAdmin = function (object) {
        return {
            typeUrl: baseUrl + "MsgClearAdmin",
            value: MsgClearAdmin.fromPartial(object),
        };
    };
    /** MsgUpdateAdmin message creator
     * Sets a new admin for a smart contract
     *
     * @param object Represents the properties available for this MsgUpdateAdmin message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.UpdateAdmin = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateAdmin",
            value: MsgUpdateAdmin.fromPartial(object),
        };
    };
    /** MsgExecuteContract message creator
     * Submits the given message data to a smart contract
     *
     * @param object Represents the properties available for this MsgExecuteContract message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.ExecuteContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgExecuteContract",
            value: MsgExecuteContract.fromPartial(object),
        };
    };
    /** MsgMigrateContract message creator
     *  Runs a code upgrade/ downgrade for a smart contract
     *
     * @param object Represents the properties available for this MsgMigrateContract message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.MigrateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgMigrateContract",
            value: MsgMigrateContract.fromPartial(object),
        };
    };
})(CosmWasm || (CosmWasm = {}));
