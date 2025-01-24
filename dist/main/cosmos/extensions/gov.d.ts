import { ProposalStatus } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClient } from "@cosmjs/stargate";
export declare function setupGovExtension(base: QueryClient): {
    gov: {
        params: (parametersType: "deposit" | "tallying" | "voting") => Promise<{
            votingParams: import("cosmjs-types/cosmos/gov/v1beta1/gov").VotingParams;
            depositParams: import("cosmjs-types/cosmos/gov/v1beta1/gov").DepositParams;
            tallyParams: import("cosmjs-types/cosmos/gov/v1beta1/gov").TallyParams;
        }>;
        proposals: (proposalStatus: ProposalStatus, depositor: string, voter: string, pagination?: PageRequest) => Promise<{
            proposals: import("cosmjs-types/cosmos/gov/v1beta1/gov").Proposal[];
            pagination?: import("cosmjs-types/cosmos/base/query/v1beta1/pagination").PageResponse;
        }>;
        proposal: (proposal_id: bigint) => Promise<{
            proposal: import("cosmjs-types/cosmos/gov/v1beta1/gov").Proposal;
        }>;
        deposits: (proposal_id: bigint, pagination?: PageRequest) => Promise<{
            deposits: import("cosmjs-types/cosmos/gov/v1beta1/gov").Deposit[];
            pagination?: import("cosmjs-types/cosmos/base/query/v1beta1/pagination").PageResponse;
        }>;
        deposit: (proposal_id: bigint, depositor: string) => Promise<{
            deposit: import("cosmjs-types/cosmos/gov/v1beta1/gov").Deposit;
        }>;
        tally: (proposal_id: bigint) => Promise<{
            tally: import("cosmjs-types/cosmos/gov/v1beta1/gov").TallyResult;
        }>;
        votes: (proposal_id: bigint, pagination?: PageRequest) => Promise<{
            votes: import("cosmjs-types/cosmos/gov/v1beta1/gov").Vote[];
            pagination?: import("cosmjs-types/cosmos/base/query/v1beta1/pagination").PageResponse;
        }>;
        vote: (proposal_id: bigint, voter: string) => Promise<{
            vote: import("cosmjs-types/cosmos/gov/v1beta1/gov").Vote;
        }>;
    };
};
