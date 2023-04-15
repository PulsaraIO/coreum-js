/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export const protobufPackage = "coreum.asset.nft.v1";
/** ClassFeature defines possible features of non-fungible token class. */
export var ClassFeature;
(function (ClassFeature) {
    ClassFeature[ClassFeature["burning"] = 0] = "burning";
    ClassFeature[ClassFeature["freezing"] = 1] = "freezing";
    ClassFeature[ClassFeature["whitelisting"] = 2] = "whitelisting";
    ClassFeature[ClassFeature["disable_sending"] = 3] = "disable_sending";
    ClassFeature[ClassFeature["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClassFeature || (ClassFeature = {}));
export function classFeatureFromJSON(object) {
    switch (object) {
        case 0:
        case "burning":
            return ClassFeature.burning;
        case 1:
        case "freezing":
            return ClassFeature.freezing;
        case 2:
        case "whitelisting":
            return ClassFeature.whitelisting;
        case 3:
        case "disable_sending":
            return ClassFeature.disable_sending;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClassFeature.UNRECOGNIZED;
    }
}
export function classFeatureToJSON(object) {
    switch (object) {
        case ClassFeature.burning:
            return "burning";
        case ClassFeature.freezing:
            return "freezing";
        case ClassFeature.whitelisting:
            return "whitelisting";
        case ClassFeature.disable_sending:
            return "disable_sending";
        case ClassFeature.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClassDefinition() {
    return { id: "", issuer: "", features: [], royaltyRate: "" };
}
export const ClassDefinition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        writer.uint32(26).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.royaltyRate !== "") {
            writer.uint32(34).string(message.royaltyRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassDefinition();
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
                    message.royaltyRate = reader.string();
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => classFeatureFromJSON(e))
                : [],
            royaltyRate: isSet(object.royaltyRate) ? String(object.royaltyRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        if (message.features) {
            obj.features = message.features.map((e) => classFeatureToJSON(e));
        }
        else {
            obj.features = [];
        }
        message.royaltyRate !== undefined &&
            (obj.royaltyRate = message.royaltyRate);
        return obj;
    },
    create(base) {
        return ClassDefinition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseClassDefinition();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.features = ((_c = object.features) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.royaltyRate = (_d = object.royaltyRate) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseClass() {
    return {
        id: "",
        issuer: "",
        name: "",
        symbol: "",
        description: "",
        uri: "",
        uriHash: "",
        data: undefined,
        features: [],
        royaltyRate: "",
    };
}
export const Class = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(34).string(message.symbol);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.uri !== "") {
            writer.uint32(50).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(58).string(message.uriHash);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(66).fork()).ldelim();
        }
        writer.uint32(74).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.royaltyRate !== "") {
            writer.uint32(82).string(message.royaltyRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
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
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.uriHash = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.data = Any.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag == 72) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag == 74) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.royaltyRate = reader.string();
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            description: isSet(object.description) ? String(object.description) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => classFeatureFromJSON(e))
                : [],
            royaltyRate: isSet(object.royaltyRate) ? String(object.royaltyRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.description !== undefined &&
            (obj.description = message.description);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.data !== undefined &&
            (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        if (message.features) {
            obj.features = message.features.map((e) => classFeatureToJSON(e));
        }
        else {
            obj.features = [];
        }
        message.royaltyRate !== undefined &&
            (obj.royaltyRate = message.royaltyRate);
        return obj;
    },
    create(base) {
        return Class.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseClass();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.symbol = (_d = object.symbol) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        message.uri = (_f = object.uri) !== null && _f !== void 0 ? _f : "";
        message.uriHash = (_g = object.uriHash) !== null && _g !== void 0 ? _g : "";
        message.data =
            object.data !== undefined && object.data !== null
                ? Any.fromPartial(object.data)
                : undefined;
        message.features = ((_h = object.features) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.royaltyRate = (_j = object.royaltyRate) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
