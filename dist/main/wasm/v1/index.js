"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmWasm = exports.IBC = exports.cosmwasmRegistry = void 0;
const tx_1 = require("./tx");
const ibc_1 = require("./ibc");
const baseUrl = "/cosmwasm.wasm.v1.";
exports.cosmwasmRegistry = [
    [baseUrl + "MsgStoreAndInstantiateContract", tx_1.MsgStoreAndInstantiateContract],
    [baseUrl + "MsgUpdateParams", tx_1.MsgUpdateParams],
    [baseUrl + "MsgSudoContract", tx_1.MsgSudoContract],
    [baseUrl + "MsgUnpinCodes", tx_1.MsgUnpinCodes],
    [baseUrl + "MsgPinCodes", tx_1.MsgPinCodes],
    [baseUrl + "MsgStoreCode", tx_1.MsgStoreCode],
    [baseUrl + "MsgInstantiateContract", tx_1.MsgInstantiateContract],
    [baseUrl + "MsgInstantiateContract2", tx_1.MsgInstantiateContract2],
    [baseUrl + "MsgExecuteContract", tx_1.MsgExecuteContract],
    [baseUrl + "MsgMigrateContract", tx_1.MsgMigrateContract],
    [baseUrl + "MsgUpdateAdmin", tx_1.MsgUpdateAdmin],
    [baseUrl + "MsgClearAdmin", tx_1.MsgClearAdmin],
    [baseUrl + "MsgUpdateInstantiateConfig", tx_1.MsgUpdateInstantiateConfig],
    [baseUrl + "MsgIBCSend", ibc_1.MsgIBCSend],
    [baseUrl + "MsgIBCCloseChannel", ibc_1.MsgIBCCloseChannel],
];
/**
 * Transaction Module for the IBC Module (wasm)
 */
var IBC;
(function (IBC) {
    /** MsgIBCSend message creator
     *
     * @param object Represents the properties available for this MsgIBCSend message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    IBC.IBCSend = function (object) {
        return {
            typeUrl: baseUrl + "MsgIBCSend",
            value: ibc_1.MsgIBCSend.fromPartial(object),
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
            value: ibc_1.MsgIBCCloseChannel.fromPartial(object),
        };
    };
})(IBC = exports.IBC || (exports.IBC = {}));
/**
 * Transaction Module for the Smart Contracts Module (wasm)
 */
var CosmWasm;
(function (CosmWasm) {
    /** MsgStoreAndInstantiateContract message creator
     *
     * @param object Represents the properties available for this MsgStoreAndInstantiateContract message.
     * @returns A Msg object with the typeUrl and value object for the proper message
     */
    CosmWasm.StoreAndInstantiateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgStoreAndInstantiateContract",
            value: tx_1.MsgStoreAndInstantiateContract.fromPartial(object),
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
            value: tx_1.MsgUnpinCodes.fromPartial(object),
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
            value: tx_1.MsgPinCodes.fromPartial(object),
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
            value: tx_1.MsgSudoContract.fromPartial(object),
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
            value: tx_1.MsgUpdateParams.fromPartial(object),
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
            value: tx_1.MsgUpdateInstantiateConfig.fromPartial(object),
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
            value: tx_1.MsgStoreCode.fromPartial(object),
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
            value: tx_1.MsgInstantiateContract.fromPartial(object),
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
            value: tx_1.MsgInstantiateContract2.fromPartial(object),
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
            value: tx_1.MsgClearAdmin.fromPartial(object),
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
            value: tx_1.MsgUpdateAdmin.fromPartial(object),
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
            value: tx_1.MsgExecuteContract.fromPartial(object),
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
            value: tx_1.MsgMigrateContract.fromPartial(object),
        };
    };
})(CosmWasm = exports.CosmWasm || (exports.CosmWasm = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2FzbS92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2QkFnQmM7QUFDZCwrQkFBdUQ7QUFFdkQsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUM7QUFFeEIsUUFBQSxnQkFBZ0IsR0FBMkM7SUFDdEUsQ0FBQyxPQUFPLEdBQUcsZ0NBQWdDLEVBQUUsbUNBQThCLENBQUM7SUFDNUUsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLEVBQUUsb0JBQWUsQ0FBQztJQUM5QyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxvQkFBZSxDQUFDO0lBQzlDLENBQUMsT0FBTyxHQUFHLGVBQWUsRUFBRSxrQkFBYSxDQUFDO0lBQzFDLENBQUMsT0FBTyxHQUFHLGFBQWEsRUFBRSxnQkFBVyxDQUFDO0lBQ3RDLENBQUMsT0FBTyxHQUFHLGNBQWMsRUFBRSxpQkFBWSxDQUFDO0lBQ3hDLENBQUMsT0FBTyxHQUFHLHdCQUF3QixFQUFFLDJCQUFzQixDQUFDO0lBQzVELENBQUMsT0FBTyxHQUFHLHlCQUF5QixFQUFFLDRCQUF1QixDQUFDO0lBQzlELENBQUMsT0FBTyxHQUFHLG9CQUFvQixFQUFFLHVCQUFrQixDQUFDO0lBQ3BELENBQUMsT0FBTyxHQUFHLG9CQUFvQixFQUFFLHVCQUFrQixDQUFDO0lBQ3BELENBQUMsT0FBTyxHQUFHLGdCQUFnQixFQUFFLG1CQUFjLENBQUM7SUFDNUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxFQUFFLGtCQUFhLENBQUM7SUFDMUMsQ0FBQyxPQUFPLEdBQUcsNEJBQTRCLEVBQUUsK0JBQTBCLENBQUM7SUFDcEUsQ0FBQyxPQUFPLEdBQUcsWUFBWSxFQUFFLGdCQUFVLENBQUM7SUFDcEMsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLEVBQUUsd0JBQWtCLENBQUM7Q0FDckQsQ0FBQztBQUVGOztHQUVHO0FBQ0gsSUFBaUIsR0FBRyxDQXVC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