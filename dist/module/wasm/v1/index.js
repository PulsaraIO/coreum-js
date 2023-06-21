import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, } from "./tx";
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2FzbS92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsWUFBWSxFQUNaLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLDBCQUEwQixFQUMxQixlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCxhQUFhLEVBQ2IsOEJBQThCLEdBRy9CLE1BQU0sTUFBTSxDQUFDO0FBRWQsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQTJDO0lBQ3RFLENBQUMsT0FBTyxHQUFHLGdDQUFnQyxFQUFFLDhCQUE4QixDQUFDO0lBQzVFLENBQUMsT0FBTyxHQUFHLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztJQUM5QyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7SUFDOUMsQ0FBQyxPQUFPLEdBQUcsZUFBZSxFQUFFLGFBQWEsQ0FBQztJQUMxQyxDQUFDLE9BQU8sR0FBRyxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQ3RDLENBQUMsT0FBTyxHQUFHLGNBQWMsRUFBRSxZQUFZLENBQUM7SUFDeEMsQ0FBQyxPQUFPLEdBQUcsd0JBQXdCLEVBQUUsc0JBQXNCLENBQUM7SUFDNUQsQ0FBQyxPQUFPLEdBQUcseUJBQXlCLEVBQUUsdUJBQXVCLENBQUM7SUFDOUQsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUM7SUFDcEQsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUM7SUFDcEQsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO0lBQzVDLENBQUMsT0FBTyxHQUFHLGVBQWUsRUFBRSxhQUFhLENBQUM7SUFDMUMsQ0FBQyxPQUFPLEdBQUcs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