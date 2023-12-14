"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAllowancesByGranterResponse = exports.QueryAllowancesByGranterRequest = exports.QueryAllowancesResponse = exports.QueryAllowancesRequest = exports.QueryAllowanceResponse = exports.QueryAllowanceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("./pagination");
const feegrant_1 = require("./feegrant");
exports.protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseQueryAllowanceRequest() {
    return { granter: "", grantee: "" };
}
exports.QueryAllowanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.granter = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.grantee = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    create(base) {
        return exports.QueryAllowanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAllowanceRequest();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryAllowanceResponse() {
    return { allowance: undefined };
}
exports.QueryAllowanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.allowance !== undefined) {
            feegrant_1.Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.allowance = feegrant_1.Grant.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            allowance: isSet(object.allowance)
                ? feegrant_1.Grant.fromJSON(object.allowance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined &&
            (obj.allowance = message.allowance
                ? feegrant_1.Grant.toJSON(message.allowance)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAllowanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceResponse();
        message.allowance =
            object.allowance !== undefined && object.allowance !== null
                ? feegrant_1.Grant.fromPartial(object.allowance)
                : undefined;
        return message;
    },
};
function createBaseQueryAllowancesRequest() {
    return { grantee: "", pagination: undefined };
}
exports.QueryAllowancesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grantee = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAllowancesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllowancesRequest();
        message.grantee = (_a = object.grantee) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllowancesResponse() {
    return { allowances: [], pagination: undefined };
}
exports.QueryAllowancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            allowances: Array.isArray(object === null || object === void 0 ? void 0 : object.allowances)
                ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map((e) => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAllowancesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllowancesResponse();
        message.allowances =
            ((_a = object.allowances) === null || _a === void 0 ? void 0 : _a.map((e) => feegrant_1.Grant.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllowancesByGranterRequest() {
    return { granter: "", pagination: undefined };
}
exports.QueryAllowancesByGranterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.granter = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            granter: isSet(object.granter) ? String(object.granter) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAllowancesByGranterRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllowancesByGranterRequest();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllowancesByGranterResponse() {
    return { allowances: [], pagination: undefined };
}
exports.QueryAllowancesByGranterResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.allowances) {
            feegrant_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.allowances.push(feegrant_1.Grant.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            allowances: Array.isArray(object === null || object === void 0 ? void 0 : object.allowances)
                ? object.allowances.map((e) => feegrant_1.Grant.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map((e) => e ? feegrant_1.Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAllowancesByGranterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllowancesByGranterResponse();
        message.allowances =
            ((_a = object.allowances) === null || _a === void 0 ? void 0 : _a.map((e) => feegrant_1.Grant.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.feegrant.v1beta1.Query";
        this.rpc = rpc;
        this.Allowance = this.Allowance.bind(this);
        this.Allowances = this.Allowances.bind(this);
        this.AllowancesByGranter = this.AllowancesByGranter.bind(this);
    }
    Allowance(request) {
        const data = exports.QueryAllowanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Allowance", data);
        return promise.then((data) => exports.QueryAllowanceResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Allowances(request) {
        const data = exports.QueryAllowancesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Allowances", data);
        return promise.then((data) => exports.QueryAllowancesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllowancesByGranter(request) {
        const data = exports.QueryAllowancesByGranterRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllowancesByGranter", data);
        return promise.then((data) => exports.QueryAllowancesByGranterResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
