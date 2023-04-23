"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupNFTExtension = void 0;
const query_1 = require("../asset/nft/v1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupNFTExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        nft: {
            params: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.Params(request);
            }),
            class: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.Class(request);
            }),
            frozen: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.Frozen(request);
            }),
            whitelisted: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.Whitelisted(request);
            }),
            whitelistedAccountsForNFT: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.WhitelistedAccountsForNFT(request);
            }),
        },
    };
}
exports.setupNFTExtension = setupNFTExtension;
