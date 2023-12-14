"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
const vesting_1 = require("./vesting");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseMsgCreateVestingAccount() {
    return { fromAddress: "", toAddress: "", amount: [], endTime: 0, delayed: false };
}
exports.MsgCreateVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== 0) {
            writer.uint32(32).int64(message.endTime);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fromAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.toAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.endTime = longToNumber(reader.int64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.delayed = reader.bool();
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
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
            delayed: isSet(object.delayed) ? Boolean(object.delayed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.endTime !== undefined && (obj.endTime = Math.round(message.endTime));
        message.delayed !== undefined && (obj.delayed = message.delayed);
        return obj;
    },
    create(base) {
        return exports.MsgCreateVestingAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgCreateVestingAccount();
        message.fromAddress = (_a = object.fromAddress) !== null && _a !== void 0 ? _a : "";
        message.toAddress = (_b = object.toAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.endTime = (_d = object.endTime) !== null && _d !== void 0 ? _d : 0;
        message.delayed = (_e = object.delayed) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
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
        return exports.MsgCreateVestingAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
};
function createBaseMsgCreatePermanentLockedAccount() {
    return { fromAddress: "", toAddress: "", amount: [] };
}
exports.MsgCreatePermanentLockedAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fromAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.toAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreatePermanentLockedAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreatePermanentLockedAccount();
        message.fromAddress = (_a = object.fromAddress) !== null && _a !== void 0 ? _a : "";
        message.toAddress = (_b = object.toAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
    return {};
}
exports.MsgCreatePermanentLockedAccountResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
        return exports.MsgCreatePermanentLockedAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
};
function createBaseMsgCreatePeriodicVestingAccount() {
    return { fromAddress: "", toAddress: "", startTime: 0, vestingPeriods: [] };
}
exports.MsgCreatePeriodicVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        if (message.startTime !== 0) {
            writer.uint32(24).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            vesting_1.Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fromAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.toAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.startTime = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.vestingPeriods.push(vesting_1.Period.decode(reader, reader.uint32()));
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
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
            startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
            vestingPeriods: Array.isArray(object === null || object === void 0 ? void 0 : object.vestingPeriods)
                ? object.vestingPeriods.map((e) => vesting_1.Period.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map((e) => e ? vesting_1.Period.toJSON(e) : undefined);
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreatePeriodicVestingAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgCreatePeriodicVestingAccount();
        message.fromAddress = (_a = object.fromAddress) !== null && _a !== void 0 ? _a : "";
        message.toAddress = (_b = object.toAddress) !== null && _b !== void 0 ? _b : "";
        message.startTime = (_c = object.startTime) !== null && _c !== void 0 ? _c : 0;
        message.vestingPeriods = ((_d = object.vestingPeriods) === null || _d === void 0 ? void 0 : _d.map((e) => vesting_1.Period.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
    return {};
}
exports.MsgCreatePeriodicVestingAccountResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
        return exports.MsgCreatePeriodicVestingAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.vesting.v1beta1.Msg";
        this.rpc = rpc;
        this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
        this.CreatePermanentLockedAccount = this.CreatePermanentLockedAccount.bind(this);
        this.CreatePeriodicVestingAccount = this.CreatePeriodicVestingAccount.bind(this);
    }
    CreateVestingAccount(request) {
        const data = exports.MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateVestingAccount", data);
        return promise.then((data) => exports.MsgCreateVestingAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreatePermanentLockedAccount(request) {
        const data = exports.MsgCreatePermanentLockedAccount.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreatePermanentLockedAccount", data);
        return promise.then((data) => exports.MsgCreatePermanentLockedAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreatePeriodicVestingAccount(request) {
        const data = exports.MsgCreatePeriodicVestingAccount.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreatePeriodicVestingAccount", data);
        return promise.then((data) => exports.MsgCreatePeriodicVestingAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
