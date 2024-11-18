"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.EmptyResponse = exports.MsgUpdateDEXWhitelistedDenoms = exports.MsgUpdateDEXUnifiedRefAmount = exports.MsgUpdateParams = exports.MsgUpgradeTokenV1 = exports.MsgClearAdmin = exports.MsgTransferAdmin = exports.MsgSetWhitelistedLimit = exports.MsgClawback = exports.MsgGloballyUnfreeze = exports.MsgGloballyFreeze = exports.MsgSetFrozen = exports.MsgUnfreeze = exports.MsgFreeze = exports.MsgBurn = exports.MsgMint = exports.ExtensionIssueSettings = exports.MsgIssue = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("cosmjs-types/cosmos/base/v1beta1/coin");
const params_1 = require("./params");
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
        uri: "",
        uriHash: "",
        extensionSettings: undefined,
        dexSettings: undefined,
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
        if (message.uri !== "") {
            writer.uint32(82).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(90).string(message.uriHash);
        }
        if (message.extensionSettings !== undefined) {
            exports.ExtensionIssueSettings.encode(message.extensionSettings, writer.uint32(98).fork()).ldelim();
        }
        if (message.dexSettings !== undefined) {
            token_1.DEXSettings.encode(message.dexSettings, writer.uint32(106).fork()).ldelim();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.subunit = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.precision = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.initialAmount = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 7:
                    if (tag === 56) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.burnRate = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.sendCommissionRate = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.uriHash = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.extensionSettings = exports.ExtensionIssueSettings.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.dexSettings = token_1.DEXSettings.decode(reader, reader.uint32());
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            subunit: isSet(object.subunit) ? String(object.subunit) : "",
            precision: isSet(object.precision) ? Number(object.precision) : 0,
            initialAmount: isSet(object.initialAmount)
                ? String(object.initialAmount)
                : "",
            description: isSet(object.description) ? String(object.description) : "",
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => (0, token_1.featureFromJSON)(e))
                : [],
            burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
            sendCommissionRate: isSet(object.sendCommissionRate)
                ? String(object.sendCommissionRate)
                : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
            extensionSettings: isSet(object.extensionSettings)
                ? exports.ExtensionIssueSettings.fromJSON(object.extensionSettings)
                : undefined,
            dexSettings: isSet(object.dexSettings)
                ? token_1.DEXSettings.fromJSON(object.dexSettings)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.subunit !== undefined && (obj.subunit = message.subunit);
        message.precision !== undefined &&
            (obj.precision = Math.round(message.precision));
        message.initialAmount !== undefined &&
            (obj.initialAmount = message.initialAmount);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.features) {
            obj.features = message.features.map((e) => (0, token_1.featureToJSON)(e));
        }
        else {
            obj.features = [];
        }
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        message.sendCommissionRate !== undefined &&
            (obj.sendCommissionRate = message.sendCommissionRate);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.extensionSettings !== undefined &&
            (obj.extensionSettings = message.extensionSettings
                ? exports.ExtensionIssueSettings.toJSON(message.extensionSettings)
                : undefined);
        message.dexSettings !== undefined &&
            (obj.dexSettings = message.dexSettings
                ? token_1.DEXSettings.toJSON(message.dexSettings)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgIssue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
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
        message.uri = (_k = object.uri) !== null && _k !== void 0 ? _k : "";
        message.uriHash = (_l = object.uriHash) !== null && _l !== void 0 ? _l : "";
        message.extensionSettings =
            object.extensionSettings !== undefined &&
                object.extensionSettings !== null
                ? exports.ExtensionIssueSettings.fromPartial(object.extensionSettings)
                : undefined;
        message.dexSettings =
            object.dexSettings !== undefined && object.dexSettings !== null
                ? token_1.DEXSettings.fromPartial(object.dexSettings)
                : undefined;
        return message;
    },
};
function createBaseExtensionIssueSettings() {
    return { codeId: 0, label: "", funds: [], issuanceMsg: new Uint8Array() };
}
exports.ExtensionIssueSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(18).string(message.label);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.issuanceMsg.length !== 0) {
            writer.uint32(34).bytes(message.issuanceMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionIssueSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.codeId = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.label = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.issuanceMsg = reader.bytes();
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
            codeId: isSet(object.codeId) ? Number(object.codeId) : 0,
            label: isSet(object.label) ? String(object.label) : "",
            funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds)
                ? object.funds.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            issuanceMsg: isSet(object.issuanceMsg)
                ? bytesFromBase64(object.issuanceMsg)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = Math.round(message.codeId));
        message.label !== undefined && (obj.label = message.label);
        if (message.funds) {
            obj.funds = message.funds.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.funds = [];
        }
        message.issuanceMsg !== undefined &&
            (obj.issuanceMsg = base64FromBytes(message.issuanceMsg !== undefined
                ? message.issuanceMsg
                : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.ExtensionIssueSettings.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseExtensionIssueSettings();
        message.codeId = (_a = object.codeId) !== null && _a !== void 0 ? _a : 0;
        message.label = (_b = object.label) !== null && _b !== void 0 ? _b : "";
        message.funds = ((_c = object.funds) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.issuanceMsg = (_d = object.issuanceMsg) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseMsgMint() {
    return { sender: "", coin: undefined, recipient: "" };
}
exports.MsgMint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
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
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.recipient = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    create(base) {
        return exports.MsgMint.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgMint();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        message.recipient = (_b = object.recipient) !== null && _b !== void 0 ? _b : "";
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
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgBurn.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBurn();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
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
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
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
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
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
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
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
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
};
function createBaseMsgSetFrozen() {
    return { sender: "", account: "", coin: undefined };
}
exports.MsgSetFrozen = {
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
        const message = createBaseMsgSetFrozen();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgSetFrozen.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSetFrozen();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : "";
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
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
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
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
function createBaseMsgClawback() {
    return { sender: "", account: "", coin: undefined };
}
exports.MsgClawback = {
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
        const message = createBaseMsgClawback();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgClawback.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgClawback();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : "";
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
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
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
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
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
};
function createBaseMsgTransferAdmin() {
    return { sender: "", account: "", denom: "" };
}
exports.MsgTransferAdmin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.denom = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            account: isSet(object.account) ? String(object.account) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.account !== undefined && (obj.account = message.account);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return exports.MsgTransferAdmin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgTransferAdmin();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.account = (_b = object.account) !== null && _b !== void 0 ? _b : "";
        message.denom = (_c = object.denom) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgClearAdmin() {
    return { sender: "", denom: "" };
}
exports.MsgClearAdmin = {
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
        const message = createBaseMsgClearAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
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
        return exports.MsgClearAdmin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgClearAdmin();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpgradeTokenV1() {
    return { sender: "", denom: "", ibcEnabled: false };
}
exports.MsgUpgradeTokenV1 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.ibcEnabled === true) {
            writer.uint32(24).bool(message.ibcEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeTokenV1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.ibcEnabled = reader.bool();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            ibcEnabled: isSet(object.ibcEnabled) ? Boolean(object.ibcEnabled) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.ibcEnabled !== undefined && (obj.ibcEnabled = message.ibcEnabled);
        return obj;
    },
    create(base) {
        return exports.MsgUpgradeTokenV1.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpgradeTokenV1();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.ibcEnabled = (_c = object.ibcEnabled) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseMsgUpdateDEXUnifiedRefAmount() {
    return { sender: "", denom: "", unifiedRefAmount: "" };
}
exports.MsgUpdateDEXUnifiedRefAmount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.unifiedRefAmount !== "") {
            writer.uint32(26).string(message.unifiedRefAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDEXUnifiedRefAmount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.unifiedRefAmount = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            unifiedRefAmount: isSet(object.unifiedRefAmount)
                ? String(object.unifiedRefAmount)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.unifiedRefAmount !== undefined &&
            (obj.unifiedRefAmount = message.unifiedRefAmount);
        return obj;
    },
    create(base) {
        return exports.MsgUpdateDEXUnifiedRefAmount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateDEXUnifiedRefAmount();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.unifiedRefAmount = (_c = object.unifiedRefAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateDEXWhitelistedDenoms() {
    return { sender: "", denom: "", whitelistedDenoms: [] };
}
exports.MsgUpdateDEXWhitelistedDenoms = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        for (const v of message.whitelistedDenoms) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDEXWhitelistedDenoms();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.whitelistedDenoms.push(reader.string());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            whitelistedDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedDenoms)
                ? object.whitelistedDenoms.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        if (message.whitelistedDenoms) {
            obj.whitelistedDenoms = message.whitelistedDenoms.map((e) => e);
        }
        else {
            obj.whitelistedDenoms = [];
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateDEXWhitelistedDenoms.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateDEXWhitelistedDenoms();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        message.whitelistedDenoms = ((_c = object.whitelistedDenoms) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
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
        this.SetFrozen = this.SetFrozen.bind(this);
        this.GloballyFreeze = this.GloballyFreeze.bind(this);
        this.GloballyUnfreeze = this.GloballyUnfreeze.bind(this);
        this.Clawback = this.Clawback.bind(this);
        this.SetWhitelistedLimit = this.SetWhitelistedLimit.bind(this);
        this.TransferAdmin = this.TransferAdmin.bind(this);
        this.ClearAdmin = this.ClearAdmin.bind(this);
        this.UpgradeTokenV1 = this.UpgradeTokenV1.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
        this.UpdateDEXUnifiedRefAmount = this.UpdateDEXUnifiedRefAmount.bind(this);
        this.UpdateDEXWhitelistedDenoms =
            this.UpdateDEXWhitelistedDenoms.bind(this);
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
    SetFrozen(request) {
        const data = exports.MsgSetFrozen.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetFrozen", data);
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
    Clawback(request) {
        const data = exports.MsgClawback.encode(request).finish();
        const promise = this.rpc.request(this.service, "Clawback", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SetWhitelistedLimit(request) {
        const data = exports.MsgSetWhitelistedLimit.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetWhitelistedLimit", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TransferAdmin(request) {
        const data = exports.MsgTransferAdmin.encode(request).finish();
        const promise = this.rpc.request(this.service, "TransferAdmin", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ClearAdmin(request) {
        const data = exports.MsgClearAdmin.encode(request).finish();
        const promise = this.rpc.request(this.service, "ClearAdmin", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpgradeTokenV1(request) {
        const data = exports.MsgUpgradeTokenV1.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpgradeTokenV1", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateDEXUnifiedRefAmount(request) {
        const data = exports.MsgUpdateDEXUnifiedRefAmount.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDEXUnifiedRefAmount", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateDEXWhitelistedDenoms(request) {
        const data = exports.MsgUpdateDEXWhitelistedDenoms.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDEXWhitelistedDenoms", data);
        return promise.then((data) => exports.EmptyResponse.decode(minimal_1.default.Reader.create(data)));
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
