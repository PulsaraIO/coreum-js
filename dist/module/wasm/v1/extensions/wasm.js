import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientImpl, } from "../query";
export function setupWasmExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        wasm: {
            smartContractState: async (request) => {
                return await queryService.SmartContractState(request);
            },
            rawContractState: async (request) => {
                return await queryService.RawContractState(request);
            },
            pinnedCodes: async (request) => {
                return await queryService.PinnedCodes(request);
            },
            contractsByCreator: async (request) => {
                return await queryService.ContractsByCreator(request);
            },
            contractsByCode: async (request) => {
                return await queryService.ContractsByCode(request);
            },
            contractInfo: async (request) => {
                return await queryService.ContractInfo(request);
            },
            contractHistory: async (request) => {
                return await queryService.ContractHistory(request);
            },
            allContractState: async (request) => {
                return await queryService.AllContractState(request);
            },
            params: async (request) => {
                return await queryService.Params(request);
            },
            code: async (request) => {
                return await queryService.Code(request);
            },
            codes: async (request) => {
                return await queryService.Codes(request);
            },
        },
    };
}
