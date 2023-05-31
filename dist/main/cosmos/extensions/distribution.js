"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDistributionExtension = void 0;
const query_1 = require("../distribution/v1beta1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupDistributionExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        distribution: {
            communityPool: async () => {
                const response = await queryService.CommunityPool({});
                return Object.assign({}, response);
            },
            delegationRewards: async (delegator, validator) => {
                const response = await queryService.DelegationRewards({
                    delegatorAddress: delegator,
                    validatorAddress: validator,
                });
                return Object.assign({}, response);
            },
            delegationTotalRewards: async (delegator) => {
                const response = await queryService.DelegationTotalRewards({
                    delegatorAddress: delegator,
                });
                return Object.assign({}, response);
            },
            delegatorValidators: async (delegator) => {
                const response = await queryService.DelegatorValidators({
                    delegatorAddress: delegator,
                });
                return Object.assign({}, response);
            },
            delegatorWithdrawAddress: async (delegator) => {
                const response = await queryService.DelegatorWithdrawAddress({
                    delegatorAddress: delegator,
                });
                return Object.assign({}, response);
            },
            params: async () => {
                const response = await queryService.Params({});
                return Object.assign({}, response);
            },
            validatorCommission: async (validator) => {
                const response = await queryService.ValidatorCommission({
                    validatorAddress: validator,
                });
                return Object.assign({}, response);
            },
            validatorOutstandingRewards: async (validator) => {
                const response = await queryService.ValidatorOutstandingRewards({
                    validatorAddress: validator,
                });
                return Object.assign({}, response);
            },
            validatorSlashes: async (validator, starting_height, ending_height, pagination) => {
                const response = await queryService.ValidatorSlashes({
                    validatorAddress: validator,
                    startingHeight: starting_height,
                    endingHeight: ending_height,
                    pagination,
                });
                return Object.assign({}, response);
            },
        },
    };
}
exports.setupDistributionExtension = setupDistributionExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdHJpYnV0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nvc21vcy9leHRlbnNpb25zL2Rpc3RyaWJ1dGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx5REFBZ0U7QUFDaEUsK0NBQXdFO0FBRXhFLFNBQWdCLDBCQUEwQixDQUFDLElBQWlCO0lBQzFELE1BQU0sR0FBRyxHQUFHLElBQUEsa0NBQXVCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLE9BQU87UUFDTCxZQUFZLEVBQUU7WUFDWixhQUFhLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLE1BQU0sUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEQseUJBQVksUUFBUSxFQUFHO1lBQ3pCLENBQUM7WUFDRCxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBaUIsRUFBRSxTQUFpQixFQUFFLEVBQUU7Z0JBQ2hFLE1BQU0sUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLGlCQUFpQixDQUFDO29CQUNwRCxnQkFBZ0IsRUFBRSxTQUFTO29CQUMzQixnQkFBZ0IsRUFBRSxTQUFTO2lCQUM1QixDQUFDLENBQUM7Z0JBRUgseUJBQVksUUFBUSxFQUFHO1lBQ3pCLENBQUM7WUFDRCxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsU0FBaUIsRUFBRSxFQUFFO2dCQUNsRCxNQUFNLFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztvQkFDekQsZ0JBQWdCLEVBQUUsU0FBUztpQkFDNUIsQ0FBQyxDQUFDO2dCQUVILHlCQUFZLFFBQVEsRUFBRztZQUN6QixDQUFDO1lBQ0QsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFNBQWlCLEVBQUUsRUFBRTtnQkFDL0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsbUJBQW1CLENBQUM7b0JBQ3RELGdCQUFnQixFQUFFLFNBQVM7aUJBQzVCLENBQUMsQ0FBQztnQkFDSCx5QkFBWSxRQUFRLEVBQUc7WUFDekIsQ0FBQztZQUNELHdCQUF3QixFQUFFLEtBQUssRUFBRSxTQUFpQixFQUFFLEVBQUU7Z0JBQ3BELE1BQU0sUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLHdCQUF3QixDQUFDO29CQUMzRCxnQkFBZ0IsRUFBRSxTQUFTO2lCQUM1QixDQUFDLENBQUM7Z0JBRUgseUJBQVksUUFBUSxFQUFHO1lBQ3pCLENBQUM7WUFDRCxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLE1BQU0sUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFL0MseUJBQVksUUFBUSxFQUFHO1lBQ3pCLENBQUM7WUFDRCxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsU0FBaUIsRUFBRSxFQUFFO2dCQUMvQyxNQUFNLFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztvQkFDdEQsZ0JBQWdCLEVBQUUsU0FBUztpQkFDNUIsQ0FBQyxDQUFDO2dCQUVILHlCQUFZLFFBQVEsRUFBRztZQUN6QixDQUFDO1lBQ0QsMkJBQTJCLEVBQUUsS0FBSyxFQUFFLFNBQWlCLEVBQUUsRUFBRTtnQkFDdkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsMkJBQTJCLENBQUM7b0JBQzlELGdCQUFnQixFQUFFLFNBQVM7aUJBQzVCLENBQUMsQ0FBQztnQkFFSCx5QkFBWSxRQUFRLEVBQUc7WUFDekIsQ0FBQztZQUNELGdCQUFnQixFQUFFLEtBQUssRUFDckIsU0FBaUIsRUFDakIsZUFBdUIsRUFDdkIsYUFBcUIsRUFDckIsVUFBd0IsRUFDeEIsRUFBRTtnQkFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDbkQsZ0JBQWdCLEVBQUUsU0FBUztvQkFDM0IsY0FBYyxFQUFFLGVBQWU7b0JBQy9CLFlBQVksRUFBRSxhQUFhO29CQUMzQixVQUFVO2lCQUNYLENBQUMsQ0FBQztnQkFFSCx5QkFBWSxRQUFRLEVBQUc7WUFDekIsQ0FBQztTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUExRUQsZ0VBMEVDIn0=