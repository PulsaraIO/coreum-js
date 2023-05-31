"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGovExtension = void 0;
const query_1 = require("../gov/v1beta1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupGovExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        gov: {
            params: async (parametersType) => {
                const response = await queryService.Params({
                    paramsType: parametersType,
                });
                return Object.assign({}, response);
            },
            proposals: async (proposalStatus, depositor, voter, pagination) => {
                const response = await queryService.Proposals({
                    proposalStatus,
                    depositor,
                    voter,
                    pagination,
                });
                return Object.assign({}, response);
            },
            proposal: async (proposal_id) => {
                const response = await queryService.Proposal({
                    proposalId: proposal_id,
                });
                return Object.assign({}, response);
            },
            deposits: async (proposal_id, pagination) => {
                const response = await queryService.Deposits({
                    proposalId: proposal_id,
                    pagination,
                });
                return Object.assign({}, response);
            },
            deposit: async (proposal_id, depositor) => {
                const response = await queryService.Deposit({
                    proposalId: proposal_id,
                    depositor,
                });
                return Object.assign({}, response);
            },
            tally: async (proposal_id) => {
                const response = await queryService.TallyResult({
                    proposalId: proposal_id,
                });
                return Object.assign({}, response);
            },
            votes: async (proposal_id, pagination) => {
                const response = await queryService.Votes({
                    proposalId: proposal_id,
                    pagination,
                });
                return Object.assign({}, response);
            },
            vote: async (proposal_id, voter) => {
                const response = await queryService.Vote({
                    proposalId: proposal_id,
                    voter,
                });
                return Object.assign({}, response);
            },
        },
    };
}
exports.setupGovExtension = setupGovExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ292LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nvc21vcy9leHRlbnNpb25zL2dvdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxnREFBdUQ7QUFDdkQsK0NBQXdFO0FBRXhFLFNBQWdCLGlCQUFpQixDQUFDLElBQWlCO0lBQ2pELE1BQU0sR0FBRyxHQUFHLElBQUEsa0NBQXVCLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLE9BQU87UUFDTCxHQUFHLEVBQUU7WUFDSCxNQUFNLEVBQUUsS0FBSyxFQUFFLGNBQWlELEVBQUUsRUFBRTtnQkFDbEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDO29CQUN6QyxVQUFVLEVBQUUsY0FBYztpQkFDM0IsQ0FBQyxDQUFDO2dCQUVILHlCQUNLLFFBQVEsRUFDWDtZQUNKLENBQUM7WUFDRCxTQUFTLEVBQUUsS0FBSyxFQUNkLGNBQThCLEVBQzlCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixVQUF3QixFQUN4QixFQUFFO2dCQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLFNBQVMsQ0FBQztvQkFDNUMsY0FBYztvQkFDZCxTQUFTO29CQUNULEtBQUs7b0JBQ0wsVUFBVTtpQkFDWCxDQUFDLENBQUM7Z0JBRUgseUJBQ0ssUUFBUSxFQUNYO1lBQ0osQ0FBQztZQUVELFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBbUIsRUFBRSxFQUFFO2dCQUN0QyxNQUFNLFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQzNDLFVBQVUsRUFBRSxXQUFXO2lCQUN4QixDQUFDLENBQUM7Z0JBRUgseUJBQVksUUFBUSxFQUFHO1lBQ3pCLENBQUM7WUFFRCxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQW1CLEVBQUUsVUFBd0IsRUFBRSxFQUFFO2dCQUNoRSxNQUFNLFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUM7b0JBQzNDLFVBQVUsRUFBRSxXQUFXO29CQUN2QixVQUFVO2lCQUNYLENBQUMsQ0FBQztnQkFFSCx5QkFDSyxRQUFRLEVBQ1g7WUFDSixDQUFDO1lBRUQsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFtQixFQUFFLFNBQWlCLEVBQUUsRUFBRTtnQkFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsT0FBTyxDQUFDO29CQUMxQyxVQUFVLEVBQUUsV0FBVztvQkFDdkIsU0FBUztpQkFDVixDQUFDLENBQUM7Z0JBRUgseUJBQVksUUFBUSxFQUFHO1lBQ3pCLENBQUM7WUFFRCxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQW1CLEVBQUUsRUFBRTtnQkFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsV0FBVyxDQUFDO29CQUM5QyxVQUFVLEVBQUUsV0FBVztpQkFDeEIsQ0FBQyxDQUFDO2dCQUVILHlCQUFZLFFBQVEsRUFBRztZQUN6QixDQUFDO1lBRUQsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFtQixFQUFFLFVBQXdCLEVBQUUsRUFBRTtnQkFDN0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFDO29CQUN4QyxVQUFVLEVBQUUsV0FBVztvQkFDdkIsVUFBVTtpQkFDWCxDQUFDLENBQUM7Z0JBRUgseUJBQVksUUFBUSxFQUFHO1lBQ3pCLENBQUM7WUFFRCxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQW1CLEVBQUUsS0FBYSxFQUFFLEVBQUU7Z0JBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDdkMsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLEtBQUs7aUJBQ04sQ0FBQyxDQUFDO2dCQUVILHlCQUFZLFFBQVEsRUFBRztZQUN6QixDQUFDO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQXhGRCw4Q0F3RkMifQ==