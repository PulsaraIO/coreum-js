"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptedMessagesFilter = exports.AcceptedMessageKeysFilter = exports.AllowAllMessagesFilter = exports.CombinedLimit = exports.MaxFundsLimit = exports.MaxCallsLimit = exports.ContractGrant = exports.ContractMigrationAuthorization = exports.ContractExecutionAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const any_1 = require("../../google/protobuf/any");
exports.protobufPackage = "cosmwasm.wasm.v1";
function createBaseContractExecutionAuthorization() {
    return { grants: [] };
}
exports.ContractExecutionAuthorization = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.grants) {
            exports.ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractExecutionAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grants.push(exports.ContractGrant.decode(reader, reader.uint32()));
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
            grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants)
                ? object.grants.map((e) => exports.ContractGrant.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map((e) => e ? exports.ContractGrant.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    create(base) {
        return exports.ContractExecutionAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractExecutionAuthorization();
        message.grants =
            ((_a = object.grants) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ContractGrant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseContractMigrationAuthorization() {
    return { grants: [] };
}
exports.ContractMigrationAuthorization = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.grants) {
            exports.ContractGrant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractMigrationAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.grants.push(exports.ContractGrant.decode(reader, reader.uint32()));
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
            grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants)
                ? object.grants.map((e) => exports.ContractGrant.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map((e) => e ? exports.ContractGrant.toJSON(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    create(base) {
        return exports.ContractMigrationAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractMigrationAuthorization();
        message.grants =
            ((_a = object.grants) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ContractGrant.fromPartial(e))) || [];
        return message;
    },
};
function createBaseContractGrant() {
    return { contract: "", limit: undefined, filter: undefined };
}
exports.ContractGrant = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.limit !== undefined) {
            any_1.Any.encode(message.limit, writer.uint32(18).fork()).ldelim();
        }
        if (message.filter !== undefined) {
            any_1.Any.encode(message.filter, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contract = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.limit = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.filter = any_1.Any.decode(reader, reader.uint32());
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
            contract: isSet(object.contract) ? String(object.contract) : "",
            limit: isSet(object.limit) ? any_1.Any.fromJSON(object.limit) : undefined,
            filter: isSet(object.filter) ? any_1.Any.fromJSON(object.filter) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.limit !== undefined &&
            (obj.limit = message.limit ? any_1.Any.toJSON(message.limit) : undefined);
        message.filter !== undefined &&
            (obj.filter = message.filter ? any_1.Any.toJSON(message.filter) : undefined);
        return obj;
    },
    create(base) {
        return exports.ContractGrant.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractGrant();
        message.contract = (_a = object.contract) !== null && _a !== void 0 ? _a : "";
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? any_1.Any.fromPartial(object.limit)
                : undefined;
        message.filter =
            object.filter !== undefined && object.filter !== null
                ? any_1.Any.fromPartial(object.filter)
                : undefined;
        return message;
    },
};
function createBaseMaxCallsLimit() {
    return { remaining: 0 };
}
exports.MaxCallsLimit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.remaining !== 0) {
            writer.uint32(8).uint64(message.remaining);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxCallsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.remaining = longToNumber(reader.uint64());
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
            remaining: isSet(object.remaining) ? Number(object.remaining) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.remaining !== undefined &&
            (obj.remaining = Math.round(message.remaining));
        return obj;
    },
    create(base) {
        return exports.MaxCallsLimit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMaxCallsLimit();
        message.remaining = (_a = object.remaining) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMaxFundsLimit() {
    return { amounts: [] };
}
exports.MaxFundsLimit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.amounts) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMaxFundsLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amounts.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts)
                ? object.amounts.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    create(base) {
        return exports.MaxFundsLimit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMaxFundsLimit();
        message.amounts = ((_a = object.amounts) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCombinedLimit() {
    return { callsRemaining: 0, amounts: [] };
}
exports.CombinedLimit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.callsRemaining !== 0) {
            writer.uint32(8).uint64(message.callsRemaining);
        }
        for (const v of message.amounts) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCombinedLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.callsRemaining = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amounts.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            callsRemaining: isSet(object.callsRemaining)
                ? Number(object.callsRemaining)
                : 0,
            amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts)
                ? object.amounts.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.callsRemaining !== undefined &&
            (obj.callsRemaining = Math.round(message.callsRemaining));
        if (message.amounts) {
            obj.amounts = message.amounts.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    create(base) {
        return exports.CombinedLimit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCombinedLimit();
        message.callsRemaining = (_a = object.callsRemaining) !== null && _a !== void 0 ? _a : 0;
        message.amounts = ((_b = object.amounts) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAllowAllMessagesFilter() {
    return {};
}
exports.AllowAllMessagesFilter = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowAllMessagesFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
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
        return exports.AllowAllMessagesFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseAllowAllMessagesFilter();
        return message;
    },
};
function createBaseAcceptedMessageKeysFilter() {
    return { keys: [] };
}
exports.AcceptedMessageKeysFilter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessageKeysFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.keys.push(reader.string());
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
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys)
                ? object.keys.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    create(base) {
        return exports.AcceptedMessageKeysFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAcceptedMessageKeysFilter();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseAcceptedMessagesFilter() {
    return { messages: [] };
}
exports.AcceptedMessagesFilter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.messages) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptedMessagesFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.messages.push(reader.bytes());
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
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages)
                ? object.messages.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    create(base) {
        return exports.AcceptedMessagesFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAcceptedMessagesFilter();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
