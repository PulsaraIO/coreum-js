import { QueryClientImpl } from "cosmjs-types/cosmos/gov/v1beta1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupGovExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        gov: {
            params: async (parametersType) => {
                const response = await queryService.Params({
                    paramsType: parametersType,
                });
                return {
                    ...response,
                };
            },
            proposals: async (proposalStatus, depositor, voter, pagination) => {
                const response = await queryService.Proposals({
                    proposalStatus,
                    depositor,
                    voter,
                    pagination,
                });
                return {
                    ...response,
                };
            },
            proposal: async (proposal_id) => {
                const response = await queryService.Proposal({
                    proposalId: proposal_id,
                });
                return { ...response };
            },
            deposits: async (proposal_id, pagination) => {
                const response = await queryService.Deposits({
                    proposalId: proposal_id,
                    pagination,
                });
                return {
                    ...response,
                };
            },
            deposit: async (proposal_id, depositor) => {
                const response = await queryService.Deposit({
                    proposalId: proposal_id,
                    depositor,
                });
                return { ...response };
            },
            tally: async (proposal_id) => {
                const response = await queryService.TallyResult({
                    proposalId: proposal_id,
                });
                return { ...response };
            },
            votes: async (proposal_id, pagination) => {
                const response = await queryService.Votes({
                    proposalId: proposal_id,
                    pagination,
                });
                return { ...response };
            },
            vote: async (proposal_id, voter) => {
                const response = await queryService.Vote({
                    proposalId: proposal_id,
                    voter,
                });
                return { ...response };
            },
        },
    };
}
