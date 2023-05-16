"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmWasm = void 0;
const tx_1 = require("./tx");
const baseUrl = "/cosmwasm.wasm.v1.";
var CosmWasm;
(function (CosmWasm) {
    CosmWasm.StoreAndInstantiateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgStoreAndInstantiateContract",
            value: tx_1.MsgStoreAndInstantiateContract.fromPartial(object),
        };
    };
    CosmWasm.UnpinCodes = function (object) {
        return {
            typeUrl: baseUrl + "MsgUnpinCodes",
            value: tx_1.MsgUnpinCodes.fromPartial(object),
        };
    };
    CosmWasm.PinCodes = function (object) {
        return {
            typeUrl: baseUrl + "MsgPinCodes",
            value: tx_1.MsgPinCodes.fromPartial(object),
        };
    };
    CosmWasm.SudoContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgSudoContract",
            value: tx_1.MsgSudoContract.fromPartial(object),
        };
    };
    CosmWasm.UpdateParams = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateParams",
            value: tx_1.MsgUpdateParams.fromPartial(object),
        };
    };
    CosmWasm.UpdateInstantiateConfig = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateInstantiateConfig",
            value: tx_1.MsgUpdateInstantiateConfig.fromPartial(object),
        };
    };
    CosmWasm.StoreCode = function (object) {
        return {
            typeUrl: baseUrl + "MsgStoreCode",
            value: tx_1.MsgStoreCode.fromPartial(object),
        };
    };
    CosmWasm.InstantiateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgInstantiateContract",
            value: tx_1.MsgInstantiateContract.fromPartial(object),
        };
    };
    CosmWasm.InstantiateContract2 = function (object) {
        return {
            typeUrl: baseUrl + "MsgInstantiateContract2",
            value: tx_1.MsgInstantiateContract2.fromPartial(object),
        };
    };
    CosmWasm.ClearAdmin = function (object) {
        return {
            typeUrl: baseUrl + "MsgClearAdmin",
            value: tx_1.MsgClearAdmin.fromPartial(object),
        };
    };
    CosmWasm.UpdateAdmin = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateAdmin",
            value: tx_1.MsgUpdateAdmin.fromPartial(object),
        };
    };
    CosmWasm.ExecuteContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgExecuteContract",
            value: tx_1.MsgExecuteContract.fromPartial(object),
        };
    };
    CosmWasm.MigrateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgMigrateContract",
            value: tx_1.MsgMigrateContract.fromPartial(object),
        };
    };
})(CosmWasm = exports.CosmWasm || (exports.CosmWasm = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2FzbS92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFnQmM7QUFFZCxNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztBQUVyQyxJQUFpQixRQUFRLENBb0h4QjtBQXBIRCxXQUFpQixRQUFRO0lBQ1Ysb0NBQTJCLEdBQUcsVUFFekMsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLGdDQUFnQztZQUNuRCxLQUFLLEVBQUUsbUNBQThCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUMxRCxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsbUJBQVUsR0FBRyxVQUV4QixNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsZUFBZTtZQUNsQyxLQUFLLEVBQUUsa0JBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3pDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxpQkFBUSxHQUFHLFVBRXRCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxhQUFhO1lBQ2hDLEtBQUssRUFBRSxnQkFBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdkMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLHFCQUFZLEdBQUcsVUFFMUIsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLGlCQUFpQjtZQUNwQyxLQUFLLEVBQUUsb0JBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzNDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxxQkFBWSxHQUFHLFVBRTFCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxpQkFBaUI7WUFDcEMsS0FBSyxFQUFFLG9CQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUMzQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ1csZ0NBQXVCLEdBQUcsVUFFckMsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLDRCQUE0QjtZQUMvQyxLQUFLLEVBQUUsK0JBQTBCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUN0RCxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsa0JBQVMsR0FBRyxVQUV2QixNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsY0FBYztZQUNqQyxLQUFLLEVBQUUsaUJBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyw0QkFBbUIsR0FBRyxVQUVqQyxNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsd0JBQXdCO1lBQzNDLEtBQUssRUFBRSwyQkFBc0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ2xELENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyw2QkFBb0IsR0FBRyxVQUVsQyxNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcseUJBQXlCO1lBQzVDLEtBQUssRUFBRSw0QkFBdUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ25ELENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxtQkFBVSxHQUFHLFVBRXhCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxlQUFlO1lBQ2xDLEtBQUssRUFBRSxrQkFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDekMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLG9CQUFXLEdBQUcsVUFFekIsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLGdCQUFnQjtZQUNuQyxLQUFLLEVBQUUsbUJBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyx3QkFBZSxHQUFHLFVBRTdCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxvQkFBb0I7WUFDdkMsS0FBSyxFQUFFLHVCQUFrQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDOUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLHdCQUFlLEdBQUcsVUFFN0IsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLG9CQUFvQjtZQUN2QyxLQUFLLEVBQUUsdUJBQWtCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUM5QyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQXBIZ0IsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFvSHhCIn0=