import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, } from "./tx";
const baseUrl = "/cosmwasm.wasm.v1.";
export var CosmWasm;
(function (CosmWasm) {
    CosmWasm.StoreAndInstantiateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgStoreAndInstantiateContract",
            value: MsgStoreAndInstantiateContract.fromPartial(object),
        };
    };
    CosmWasm.UnpinCodes = function (object) {
        return {
            typeUrl: baseUrl + "MsgUnpinCodes",
            value: MsgUnpinCodes.fromPartial(object),
        };
    };
    CosmWasm.PinCodes = function (object) {
        return {
            typeUrl: baseUrl + "MsgPinCodes",
            value: MsgPinCodes.fromPartial(object),
        };
    };
    CosmWasm.SudoContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgSudoContract",
            value: MsgSudoContract.fromPartial(object),
        };
    };
    CosmWasm.UpdateParams = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateParams",
            value: MsgUpdateParams.fromPartial(object),
        };
    };
    CosmWasm.UpdateInstantiateConfig = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateInstantiateConfig",
            value: MsgUpdateInstantiateConfig.fromPartial(object),
        };
    };
    CosmWasm.StoreCode = function (object) {
        return {
            typeUrl: baseUrl + "MsgStoreCode",
            value: MsgStoreCode.fromPartial(object),
        };
    };
    CosmWasm.InstantiateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgInstantiateContract",
            value: MsgInstantiateContract.fromPartial(object),
        };
    };
    CosmWasm.InstantiateContract2 = function (object) {
        return {
            typeUrl: baseUrl + "MsgInstantiateContract2",
            value: MsgInstantiateContract2.fromPartial(object),
        };
    };
    CosmWasm.ClearAdmin = function (object) {
        return {
            typeUrl: baseUrl + "MsgClearAdmin",
            value: MsgClearAdmin.fromPartial(object),
        };
    };
    CosmWasm.UpdateAdmin = function (object) {
        return {
            typeUrl: baseUrl + "MsgUpdateAdmin",
            value: MsgUpdateAdmin.fromPartial(object),
        };
    };
    CosmWasm.ExecuteContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgExecuteContract",
            value: MsgExecuteContract.fromPartial(object),
        };
    };
    CosmWasm.MigrateContract = function (object) {
        return {
            typeUrl: baseUrl + "MsgMigrateContract",
            value: MsgMigrateContract.fromPartial(object),
        };
    };
})(CosmWasm || (CosmWasm = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2FzbS92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUNaLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLDBCQUEwQixFQUMxQixlQUFlLEVBQ2YsZUFBZSxFQUNmLFdBQVcsRUFDWCxhQUFhLEVBQ2IsOEJBQThCLEdBRy9CLE1BQU0sTUFBTSxDQUFDO0FBRWQsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUM7QUFFckMsTUFBTSxLQUFXLFFBQVEsQ0FvSHhCO0FBcEhELFdBQWlCLFFBQVE7SUFDVixvQ0FBMkIsR0FBRyxVQUV6QyxNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsZ0NBQWdDO1lBQ25ELEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzFELENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxtQkFBVSxHQUFHLFVBRXhCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxlQUFlO1lBQ2xDLEtBQUssRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsaUJBQVEsR0FBRyxVQUV0QixNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsYUFBYTtZQUNoQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdkMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLHFCQUFZLEdBQUcsVUFFMUIsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLGlCQUFpQjtZQUNwQyxLQUFLLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDM0MsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLHFCQUFZLEdBQUcsVUFFMUIsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLGlCQUFpQjtZQUNwQyxLQUFLLEVBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDM0MsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNXLGdDQUF1QixHQUFHLFVBRXJDLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyw0QkFBNEI7WUFDL0MsS0FBSyxFQUFFLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDdEQsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVXLGtCQUFTLEdBQUcsVUFFdkIsTUFBUztRQUNULE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxHQUFHLGNBQWM7WUFDakMsS0FBSyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyw0QkFBbUIsR0FBRyxVQUVqQyxNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsd0JBQXdCO1lBQzNDLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ2xELENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyw2QkFBb0IsR0FBRyxVQUVsQyxNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcseUJBQXlCO1lBQzVDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ25ELENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyxtQkFBVSxHQUFHLFVBRXhCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxlQUFlO1lBQ2xDLEtBQUssRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsb0JBQVcsR0FBRyxVQUV6QixNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsZ0JBQWdCO1lBQ25DLEtBQUssRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUMxQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRVcsd0JBQWUsR0FBRyxVQUU3QixNQUFTO1FBQ1QsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLEdBQUcsb0JBQW9CO1lBQ3ZDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQzlDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFVyx3QkFBZSxHQUFHLFVBRTdCLE1BQVM7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sR0FBRyxvQkFBb0I7WUFDdkMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDOUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsRUFwSGdCLFFBQVEsS0FBUixRQUFRLFFBb0h4QiJ9