"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryWhitelistedAccountsForNFTResponse = exports.QueryWhitelistedAccountsForNFTRequest = exports.QueryWhitelistedResponse = exports.QueryWhitelistedRequest = exports.QueryFrozenResponse = exports.QueryFrozenRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const nft_1 = require("./nft");
const params_1 = require("./params");
exports.protobufPackage = "coreum.asset.nft.v1";
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
function createBaseQueryClassRequest() {
    return { id: "" };
}
exports.QueryClassRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.QueryClassRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClassRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClassResponse() {
    return { class: undefined };
}
exports.QueryClassResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.class !== undefined) {
            nft_1.Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.class = nft_1.Class.decode(reader, reader.uint32());
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
        return { class: isSet(object.class) ? nft_1.Class.fromJSON(object.class) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? nft_1.Class.toJSON(message.class) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryClassResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class = (object.class !== undefined && object.class !== null) ? nft_1.Class.fromPartial(object.class) : undefined;
        return message;
    },
};
function createBaseQueryFrozenRequest() {
    return { id: "", classId: "" };
}
exports.QueryFrozenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    create(base) {
        return exports.QueryFrozenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryFrozenRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryFrozenResponse() {
    return { frozen: false };
}
exports.QueryFrozenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.frozen === true) {
            writer.uint32(8).bool(message.frozen);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.frozen = reader.bool();
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
        return { frozen: isSet(object.frozen) ? Boolean(object.frozen) : false };
    },
    toJSON(message) {
        const obj = {};
        message.frozen !== undefined && (obj.frozen = message.frozen);
        return obj;
    },
    create(base) {
        return exports.QueryFrozenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFrozenResponse();
        message.frozen = (_a = object.frozen) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryWhitelistedRequest() {
    return { id: "", classId: "", account: "" };
}
exports.QueryWhitelistedRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.account !== "") {
            writer.uint32(26).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
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
            id: isSet(object.id) ? String(object.id) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.classId !== undefined && (obj.classId = message.classId);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryWhitelistedRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : "";
        message.account = (_c = object.account) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseQueryWhitelistedResponse() {
    return { whitelisted: false };
}
exports.QueryWhitelistedResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.whitelisted === true) {
            writer.uint32(8).bool(message.whitelisted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.whitelisted = reader.bool();
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
        return { whitelisted: isSet(object.whitelisted) ? Boolean(object.whitelisted) : false };
    },
    toJSON(message) {
        const obj = {};
        message.whitelisted !== undefined && (obj.whitelisted = message.whitelisted);
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWhitelistedResponse();
        message.whitelisted = (_a = object.whitelisted) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryWhitelistedAccountsForNFTRequest() {
    return { pagination: undefined, id: "", classId: "" };
}
exports.QueryWhitelistedAccountsForNFTRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.classId !== "") {
            writer.uint32(26).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedAccountsForNFTRequest();
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
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.classId = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedAccountsForNFTRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryWhitelistedAccountsForNFTRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.classId = (_b = object.classId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryWhitelistedAccountsForNFTResponse() {
    return { pagination: undefined, accounts: [] };
}
exports.QueryWhitelistedAccountsForNFTResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.accounts) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedAccountsForNFTResponse();
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
                    message.accounts.push(reader.string());
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
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    create(base) {
        return exports.QueryWhitelistedAccountsForNFTResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWhitelistedAccountsForNFTResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "coreum.asset.nft.v1.Query";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Class = this.Class.bind(this);
        this.Frozen = this.Frozen.bind(this);
        this.Whitelisted = this.Whitelisted.bind(this);
        this.WhitelistedAccountsForNFT = this.WhitelistedAccountsForNFT.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Class(request) {
        const data = exports.QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Class", data);
        return promise.then((data) => exports.QueryClassResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Frozen(request) {
        const data = exports.QueryFrozenRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Frozen", data);
        return promise.then((data) => exports.QueryFrozenResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Whitelisted(request) {
        const data = exports.QueryWhitelistedRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Whitelisted", data);
        return promise.then((data) => exports.QueryWhitelistedResponse.decode(minimal_1.default.Reader.create(data)));
    }
    WhitelistedAccountsForNFT(request) {
        const data = exports.QueryWhitelistedAccountsForNFTRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WhitelistedAccountsForNFT", data);
        return promise.then((data) => exports.QueryWhitelistedAccountsForNFTResponse.decode(minimal_1.default.Reader.create(data)));
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
