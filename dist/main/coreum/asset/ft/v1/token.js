"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.Definition = exports.featureToJSON = exports.featureFromJSON = exports.Feature = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "coreum.asset.ft.v1";
/** Feature defines possible features of fungible token. */
var Feature;
(function (Feature) {
    Feature[Feature["minting"] = 0] = "minting";
    Feature[Feature["burning"] = 1] = "burning";
    Feature[Feature["freezing"] = 2] = "freezing";
    Feature[Feature["whitelisting"] = 3] = "whitelisting";
    Feature[Feature["ibc"] = 4] = "ibc";
    Feature[Feature["block_smart_contracts"] = 5] = "block_smart_contracts";
})(Feature || (exports.Feature = Feature = {}));
function featureFromJSON(object) {
    switch (object) {
        case 0:
        case "minting":
            return Feature.minting;
        case 1:
        case "burning":
            return Feature.burning;
        case 2:
        case "freezing":
            return Feature.freezing;
        case 3:
        case "whitelisting":
            return Feature.whitelisting;
        case 4:
        case "ibc":
            return Feature.ibc;
        case 5:
        case "block_smart_contracts":
            return Feature.block_smart_contracts;
        default:
            return undefined;
    }
}
exports.featureFromJSON = featureFromJSON;
function featureToJSON(object) {
    switch (object) {
        case Feature.minting:
            return "minting";
        case Feature.burning:
            return "burning";
        case Feature.freezing:
            return "freezing";
        case Feature.whitelisting:
            return "whitelisting";
        case Feature.ibc:
            return "ibc";
        case Feature.block_smart_contracts:
            return "block_smart_contracts";
    }
}
exports.featureToJSON = featureToJSON;
function createBaseDefinition() {
    return {
        denom: "",
        issuer: "",
        features: [],
        burnRate: "",
        sendCommissionRate: "",
    };
}
exports.Definition = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        writer.uint32(26).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.burnRate !== "") {
            writer.uint32(34).string(message.burnRate);
        }
        if (message.sendCommissionRate !== "") {
            writer.uint32(42).string(message.sendCommissionRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag == 24) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag == 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.burnRate = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => featureFromJSON(e))
                : [],
            burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
            sendCommissionRate: isSet(object.sendCommissionRate)
                ? String(object.sendCommissionRate)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        if (message.features) {
            obj.features = message.features.map((e) => featureToJSON(e));
        }
        else {
            obj.features = [];
        }
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        message.sendCommissionRate !== undefined &&
            (obj.sendCommissionRate = message.sendCommissionRate);
        return obj;
    },
    create(base) {
        return exports.Definition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDefinition();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.features = ((_c = object.features) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.burnRate = (_d = object.burnRate) !== null && _d !== void 0 ? _d : "";
        message.sendCommissionRate = (_e = object.sendCommissionRate) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseToken() {
    return {
        denom: "",
        issuer: "",
        symbol: "",
        subunit: "",
        precision: 0,
        description: "",
        globallyFrozen: false,
        features: [],
        burnRate: "",
        sendCommissionRate: "",
        uri: "",
        uriHash: "",
    };
}
exports.Token = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.subunit !== "") {
            writer.uint32(34).string(message.subunit);
        }
        if (message.precision !== 0) {
            writer.uint32(40).uint32(message.precision);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.globallyFrozen === true) {
            writer.uint32(56).bool(message.globallyFrozen);
        }
        writer.uint32(66).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.burnRate !== "") {
            writer.uint32(74).string(message.burnRate);
        }
        if (message.sendCommissionRate !== "") {
            writer.uint32(82).string(message.sendCommissionRate);
        }
        if (message.uri !== "") {
            writer.uint32(90).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(98).string(message.uriHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.subunit = reader.string();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.precision = reader.uint32();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.globallyFrozen = reader.bool();
                    continue;
                case 8:
                    if (tag == 64) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag == 66) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.burnRate = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.sendCommissionRate = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.uriHash = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            subunit: isSet(object.subunit) ? String(object.subunit) : "",
            precision: isSet(object.precision) ? Number(object.precision) : 0,
            description: isSet(object.description) ? String(object.description) : "",
            globallyFrozen: isSet(object.globallyFrozen)
                ? Boolean(object.globallyFrozen)
                : false,
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => featureFromJSON(e))
                : [],
            burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
            sendCommissionRate: isSet(object.sendCommissionRate)
                ? String(object.sendCommissionRate)
                : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.subunit !== undefined && (obj.subunit = message.subunit);
        message.precision !== undefined &&
            (obj.precision = Math.round(message.precision));
        message.description !== undefined &&
            (obj.description = message.description);
        message.globallyFrozen !== undefined &&
            (obj.globallyFrozen = message.globallyFrozen);
        if (message.features) {
            obj.features = message.features.map((e) => featureToJSON(e));
        }
        else {
            obj.features = [];
        }
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        message.sendCommissionRate !== undefined &&
            (obj.sendCommissionRate = message.sendCommissionRate);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        return obj;
    },
    create(base) {
        return exports.Token.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseToken();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : "";
        message.subunit = (_d = object.subunit) !== null && _d !== void 0 ? _d : "";
        message.precision = (_e = object.precision) !== null && _e !== void 0 ? _e : 0;
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.globallyFrozen = (_g = object.globallyFrozen) !== null && _g !== void 0 ? _g : false;
        message.features = ((_h = object.features) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.burnRate = (_j = object.burnRate) !== null && _j !== void 0 ? _j : "";
        message.sendCommissionRate = (_k = object.sendCommissionRate) !== null && _k !== void 0 ? _k : "";
        message.uri = (_l = object.uri) !== null && _l !== void 0 ? _l : "";
        message.uriHash = (_m = object.uriHash) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
