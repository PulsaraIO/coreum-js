import { Uint64 } from "@cosmjs/math";
import { ProposalStatus } from "../gov/v1beta1/gov";
import { PageRequest } from "../gov/v1beta1/pagination";
import { QueryClientImpl } from "../gov/v1beta1/query";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";

export function setupGovExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);

  return {
    gov: {
      params: async (parametersType: "deposit" | "tallying" | "voting") => {
        const response = await queryService.Params({
          paramsType: parametersType,
        });

        return {
          ...response,
        };
      },
      proposals: async (
        proposalStatus: ProposalStatus,
        depositor: string,
        voter: string,
        pagination?: PageRequest
      ) => {
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

      proposal: async (proposal_id: number) => {
        const response = await queryService.Proposal({
          proposalId: proposal_id,
        });

        return { ...response };
      },

      deposits: async (proposal_id: number, pagination?: PageRequest) => {
        const response = await queryService.Deposits({
          proposalId: proposal_id,
          pagination,
        });

        return {
          ...response,
        };
      },

      deposit: async (proposal_id: number, depositor: string) => {
        const response = await queryService.Deposit({
          proposalId: proposal_id,
          depositor,
        });

        return { ...response };
      },

      tally: async (proposal_id: number) => {
        const response = await queryService.TallyResult({
          proposalId: proposal_id,
        });

        return { ...response };
      },

      votes: async (proposal_id: number, pagination?: PageRequest) => {
        const response = await queryService.Votes({
          proposalId: proposal_id,
          pagination,
        });

        return { ...response };
      },

      vote: async (proposal_id: number, voter: string) => {
        const response = await queryService.Vote({
          proposalId: proposal_id,
          voter,
        });

        return { ...response };
      },
    },
  };
}
