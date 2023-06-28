"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmWasm = exports.cosmwasmRegistry = void 0;
const tx_1 = require("./tx");
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2FzbS92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2QkFnQmM7QUFFZCxNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztBQUV4QixRQUFBLGdCQUFnQixHQUEyQztJQUN0RSxDQUFDLE9BQU8sR0FBRyxnQ0FBZ0MsRUFBRSxtQ0FBOEIsQ0FBQztJQUM1RSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxvQkFBZSxDQUFDO0lBQzlDLENBQUMsT0FBTyxHQUFHLGlCQUFpQixFQUFFLG9CQUFlLENBQUM7SUFDOUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxFQUFFLGtCQUFhLENBQUM7SUFDMUMsQ0FBQyxPQUFPLEdBQUcsYUFBYSxFQUFFLGdCQUFXLENBQUM7SUFDdEMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxFQUFFLGlCQUFZLENBQUM7SUFDeEMsQ0FBQyxPQUFPLEdBQUcsd0JBQXdCLEVBQUUsMkJBQXNCLENBQUM7SUFDNUQsQ0FBQyxPQUFPLEdBQUcseUJBQXlCLEVBQUUsNEJBQXVCLENBQUM7SUFDOUQsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLEVBQUUsdUJBQWtCLENBQUM7SUFDcEQsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLEVBQUUsdUJBQWtCLENBQUM7SUFDcEQsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLEVBQUUsbUJBQWMsQ0FBQztJQUM1QyxDQUFDLE9BQU8sR0FBRyxlQUFlLEVBQUUsa0JBQWEsQ0FBQztJQUMxQyxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsRUFBRSwrQkFBMEIsQ0FBQztDQUNyRSxDQUFDO0FBRUY7O0dBRUc7QUFDSCxJQUFpQixRQUFRLENBMkt4QjtBQTNLRCxXQUFpQixRQUFRO0lBQ3ZCOzs7O09BSUc7SUFDVSxvQ0FBMkIsR0FBRyxVQUN6QyxNQUFzQztRQUV0QyxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxn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