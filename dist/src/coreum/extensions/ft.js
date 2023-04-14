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
exports.setupFTExtension = void 0;
const query_1 = require("../asset/ft/v1/query");
const stargate_1 = require("@cosmjs/stargate");
function setupFTExtension(base) {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new query_1.QueryClientImpl(rpc);
    return {
        ft: {
            params: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.Params(request);
            }),
            tokens: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.Tokens(request);
            }),
            token: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.Token(request);
            }),
            frozenBalances: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.FrozenBalances(request);
            }),
            frozenBalance: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.FrozenBalance(request);
            }),
            whitelistedBalances: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.WhitelistedBalances(request);
            }),
            whitelistedBalance: (request) => __awaiter(this, void 0, void 0, function* () {
                return yield queryService.WhitelistedBalance(request);
            }),
        },
    };
}
exports.setupFTExtension = setupFTExtension;
