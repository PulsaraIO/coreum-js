"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryWhitelistedBalanceResponse = exports.QueryWhitelistedBalanceRequest = exports.QueryWhitelistedBalancesResponse = exports.QueryWhitelistedBalancesRequest = exports.QueryFrozenBalanceResponse = exports.QueryFrozenBalanceRequest = exports.QueryFrozenBalancesResponse = exports.QueryFrozenBalancesRequest = exports.QueryTokensResponse = exports.QueryTokensRequest = exports.QueryTokenResponse = exports.QueryTokenRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const token_1 = require("./token");
exports.protobufPackage = "coreum.asset.ft.v1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryTokenRequest() {
    return { denom: "" };
}
exports.QueryTokenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { denom: isSet(object.denom) ? String(object.denom) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.QueryTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTokenRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTokenResponse() {
    return { token: undefined };
}
exports.QueryTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.token !== undefined) {
            token_1.Token.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.token = token_1.Token.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? token_1.Token.fromJSON(object.token) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? token_1.Token.toJSON(message.token) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryTokenResponse();
        message.token = (object.token !== undefined && object.token !== null) ? token_1.Token.fromPartial(object.token) : undefined;
        return message;
    },
};
function createBaseQueryTokensRequest() {
    return { pagination: undefined, issuer: "" };
}
exports.QueryTokensRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        return obj;
    },
    create(base) {
        return exports.QueryTokensRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTokensRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.issuer = (_a = object.issuer) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTokensResponse() {
    return { pagination: undefined, tokens: [] };
}
exports.QueryTokensResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokens) {
            token_1.Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.tokens.push(token_1.Token.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            tokens: Array.isArray(object === null || object === void 0 ? void 0 : object.tokens) ? object.tokens.map((e) => token_1.Token.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => e ? token_1.Token.toJSON(e) : undefined);
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryTokensResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTokensResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.tokens = ((_a = object.tokens) === null || _a === void 0 ? void 0 : _a.map((e) => token_1.Token.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFrozenBalancesRequest() {
    return { pagination: undefined, account: "" };
}
exports.QueryFrozenBalancesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return exports.QueryFrozenBalancesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFrozenBalancesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryFrozenBalancesResponse() {
    return { pagination: undefined, balances: [] };
}
exports.QueryFrozenBalancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.balances.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryFrozenBalancesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFrozenBalancesResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFrozenBalanceRequest() {
    return { account: "", denom: "" };
}
exports.QueryFrozenBalanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            account: isSet(object.account) ? String(object.account) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.QueryFrozenBalanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryFrozenBalanceRequest();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryFrozenBalanceResponse() {
    return { balance: undefined };
}
exports.QueryFrozenBalanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toJSON(message.balance) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryFrozenBalanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryFrozenBalanceResponse();
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? coin_1.Coin.fromPartial(object.balance)
            : undefined;
        return message;
    },
};
function createBaseQueryWhitelistedBalancesRequest() {
    return { pagination: undefined, account: "" };
}
exports.QueryWhitelistedBalancesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedBalancesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWhitelistedBalancesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryWhitelistedBalancesResponse() {
    return { pagination: undefined, balances: [] };
}
exports.QueryWhitelistedBalancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.balances.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedBalancesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWhitelistedBalancesResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryWhitelistedBalanceRequest() {
    return { account: "", denom: "" };
}
exports.QueryWhitelistedBalanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            account: isSet(object.account) ? String(object.account) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedBalanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryWhitelistedBalanceRequest();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryWhitelistedBalanceResponse() {
    return { balance: undefined };
}
exports.QueryWhitelistedBalanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toJSON(message.balance) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedBalanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistedBalanceResponse();
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? coin_1.Coin.fromPartial(object.balance)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "coreum.asset.ft.v1.Query";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Tokens = this.Tokens.bind(this);
        this.Token = this.Token.bind(this);
        this.FrozenBalances = this.FrozenBalances.bind(this);
        this.FrozenBalance = this.FrozenBalance.bind(this);
        this.WhitelistedBalances = this.WhitelistedBalances.bind(this);
        this.WhitelistedBalance = this.WhitelistedBalance.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Tokens(request) {
        const data = exports.QueryTokensRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Tokens", data);
        return promise.then((data) => exports.QueryTokensResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Token(request) {
        const data = exports.QueryTokenRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Token", data);
        return promise.then((data) => exports.QueryTokenResponse.decode(minimal_1.default.Reader.create(data)));
    }
    FrozenBalances(request) {
        const data = exports.QueryFrozenBalancesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FrozenBalances", data);
        return promise.then((data) => exports.QueryFrozenBalancesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    FrozenBalance(request) {
        const data = exports.QueryFrozenBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FrozenBalance", data);
        return promise.then((data) => exports.QueryFrozenBalanceResponse.decode(minimal_1.default.Reader.create(data)));
    }
    WhitelistedBalances(request) {
        const data = exports.QueryWhitelistedBalancesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WhitelistedBalances", data);
        return promise.then((data) => exports.QueryWhitelistedBalancesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    WhitelistedBalance(request) {
        const data = exports.QueryWhitelistedBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WhitelistedBalance", data);
        return promise.then((data) => exports.QueryWhitelistedBalanceResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
