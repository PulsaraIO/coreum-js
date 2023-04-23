"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.EmptyResponse = exports.MsgSetWhitelistedLimit = exports.MsgGloballyUnfreeze = exports.MsgGloballyFreeze = exports.MsgUnfreeze = exports.MsgFreeze = exports.MsgBurn = exports.MsgMint = exports.MsgIssue = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = require("long");
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const token_1 = require("./token");
exports.protobufPackage = "coreum.asset.ft.v1";
function createBaseMsgIssue() {
    return {
        issuer: "",
        symbol: "",
        subunit: "",
        precision: 0,
        initialAmount: "",
        description: "",
        features: [],
        burnRate: "",
        sendCommissionRate: "",
    };
}
exports.MsgIssue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.subunit !== "") {
            writer.uint32(26).string(message.subunit);
        }
        if (message.precision !== 0) {
            writer.uint32(32).uint32(message.precision);
        }
        if (message.initialAmount !== "") {
            writer.uint32(42).string(message.initialAmount);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        writer.uint32(58).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.burnRate !== "") {
            writer.uint32(66).string(message.burnRate);
        }
        if (message.sendCommissionRate !== "") {
            writer.uint32(74).string(message.sendCommissionRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIssue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.subunit = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.precision = reader.uint32();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.initialAmount = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 7:
                    if (tag == 56) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag == 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.burnRate = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.sendCommissionRate = reader.string();
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            subunit: isSet(object.subunit) ? String(object.subunit) : "",
            precision: isSet(object.precision) ? Number(object.precision) : 0,
            initialAmount: isSet(object.initialAmount) ? String(object.initialAmount) : "",
            description: isSet(object.description) ? String(object.description) : "",
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features) ? object.features.map((e) => (0, token_1.featureFromJSON)(e)) : [],
            burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
            sendCommissionRate: isSet(object.sendCommissionRate) ? String(object.sendCommissionRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.subunit !== undefined && (obj.subunit = message.subunit);
        message.precision !== undefined && (obj.precision = Math.round(message.precision));
        message.initialAmount !== undefined && (obj.initialAmount = message.initialAmount);
        message.description !== undefined && (obj.description = message.description);
        if (message.features) {
            obj.features = message.features.map((e) => (0, token_1.featureToJSON)(e));
        }
        else {
            obj.features = [];
        }
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        message.sendCommissionRate !== undefined && (obj.sendCommissionRate = message.sendCommissionRate);
        return obj;
    },
    create(base) {
        return exports.MsgIssue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseMsgIssue();
        message.issuer = (_a = object.issuer) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.subunit = (_c = object.subunit) !== null && _c !== void 0 ? _c : "";
        message.precision = (_d = object.precision) !== null && _d !== void 0 ? _d : 0;
        message.initialAmount = (_e = object.initialAmount) !== null && _e !== void 0 ? _e : "";
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.features = ((_g = object.features) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.burnRate = (_h = object.burnRate) !== null && _h !== void 0 ? _h : "";
        message.sendCommissionRate = (_j = object.sendCommissionRate) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseMsgMint() {
    return { sender: "", coin: undefined };
}
exports.MsgMint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgMint.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgMint();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.coin = (object.coin !== undefined && object.coin !== null) ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
};
function createBaseMsgBurn() {
    return { sender: "", coin: undefined };
}
exports.MsgBurn = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgBurn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBurn();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.coin = (object.coin !== undefined && object.coin !== null) ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
};
function createBaseMsgFreeze() {
    return { sender: "", account: "", coin: undefined };
}
exports.MsgFreeze = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFreeze();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgFreeze.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgFreeze();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : "";
        message.coin = (object.coin !== undefined && object.coin !== null) ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
};
function createBaseMsgUnfreeze() {
    return { sender: "", account: "", coin: undefined };
}
exports.MsgUnfreeze = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnfreeze();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUnfreeze.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUnfreeze();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : "";
        message.coin = (object.coin !== undefined && object.coin !== null) ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
};
function createBaseMsgGloballyFreeze() {
    return { sender: "", denom: "" };
}
exports.MsgGloballyFreeze = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGloballyFreeze();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.MsgGloballyFreeze.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgGloballyFreeze();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgGloballyUnfreeze() {
    return { sender: "", denom: "" };
}
exports.MsgGloballyUnfreeze = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGloballyUnfreeze();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.MsgGloballyUnfreeze.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgGloballyUnfreeze();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgSetWhitelistedLimit() {
    return { sender: "", account: "", coin: undefined };
}
exports.MsgSetWhitelistedLimit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWhitelistedLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined && (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgSetWhitelistedLimit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSetWhitelistedLimit();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : "";
        message.coin = (object.coin !== undefined && object.coin !== null) ? coin_1.Coin.fromPartial(object.coin) : undefined;
        return message;
    },
};
function createBaseEmptyResponse() {
    return {};
}
exports.EmptyResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyResponse();
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
        return exports.EmptyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseEmptyResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "coreum.asset.ft.v1.Msg";
        this.rpc = rpc;
        this.Issue = this.Issue.bind(this);
        this.Mint = this.Mint.bind(this);
        this.Burn = this.Burn.bind(this);
        this.Freeze = this.Freeze.bind(this);
        this.Unfreeze = this.Unfreeze.bind(this);
        this.GloballyFreeze = this.GloballyFreeze.bind(this);
        this.GloballyUnfreeze = this.GloballyUnfreeze.bind(this);
        this.SetWhitelistedLimit = this.SetWhitelistedLimit.bind(this);
    }
    Issue(request) {
        const data = exports.MsgIssue.encode(request).finish();
        const promise = this.rpc.request(this.service, "Issue", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Mint(request) {
        const data = exports.MsgMint.encode(request).finish();
        const promise = this.rpc.request(this.service, "Mint", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Burn(request) {
        const data = exports.MsgBurn.encode(request).finish();
        const promise = this.rpc.request(this.service, "Burn", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Freeze(request) {
        const data = exports.MsgFreeze.encode(request).finish();
        const promise = this.rpc.request(this.service, "Freeze", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Unfreeze(request) {
        const data = exports.MsgUnfreeze.encode(request).finish();
        const promise = this.rpc.request(this.service, "Unfreeze", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GloballyFreeze(request) {
        const data = exports.MsgGloballyFreeze.encode(request).finish();
        const promise = this.rpc.request(this.service, "GloballyFreeze", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GloballyUnfreeze(request) {
        const data = exports.MsgGloballyUnfreeze.encode(request).finish();
        const promise = this.rpc.request(this.service, "GloballyUnfreeze", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SetWhitelistedLimit(request) {
        const data = exports.MsgSetWhitelistedLimit.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetWhitelistedLimit", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
