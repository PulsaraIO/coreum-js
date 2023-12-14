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
