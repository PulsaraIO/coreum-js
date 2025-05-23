// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.21.12
// source: coreum-protos/nft/nft.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Any } from "cosmjs-types/google/protobuf/any";
export const protobufPackage = "coreum.asset.nft.v1";
/** ClassFeature defines possible features of non-fungible token class. */
export var ClassFeature;
(function (ClassFeature) {
    ClassFeature[ClassFeature["burning"] = 0] = "burning";
    ClassFeature[ClassFeature["freezing"] = 1] = "freezing";
    ClassFeature[ClassFeature["whitelisting"] = 2] = "whitelisting";
    ClassFeature[ClassFeature["disable_sending"] = 3] = "disable_sending";
    ClassFeature[ClassFeature["soulbound"] = 4] = "soulbound";
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
        case 4:
        case "soulbound":
            return ClassFeature.soulbound;
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
        case ClassFeature.soulbound:
            return "soulbound";
        case ClassFeature.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClassDefinition() {
    return { id: "", issuer: "", features: [], royaltyRate: "" };
}
export const ClassDefinition = {
    encode(message, writer = new BinaryWriter()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                }
                case 3: {
                    if (tag === 24) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.royaltyRate = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
            features: globalThis.Array.isArray(object?.features)
                ? object.features.map((e) => classFeatureFromJSON(e))
                : [],
            royaltyRate: isSet(object.royaltyRate)
                ? globalThis.String(object.royaltyRate)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.features?.length) {
            obj.features = message.features.map((e) => classFeatureToJSON(e));
        }
        if (message.royaltyRate !== "") {
            obj.royaltyRate = message.royaltyRate;
        }
        return obj;
    },
    create(base) {
        return ClassDefinition.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseClassDefinition();
        message.id = object.id ?? "";
        message.issuer = object.issuer ?? "";
        message.features = object.features?.map((e) => e) || [];
        message.royaltyRate = object.royaltyRate ?? "";
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
    encode(message, writer = new BinaryWriter()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.uriHash = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.data = Any.decode(reader, reader.uint32());
                    continue;
                }
                case 9: {
                    if (tag === 72) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag === 74) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.royaltyRate = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            symbol: isSet(object.symbol) ? globalThis.String(object.symbol) : "",
            description: isSet(object.description)
                ? globalThis.String(object.description)
                : "",
            uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? globalThis.String(object.uriHash) : "",
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            features: globalThis.Array.isArray(object?.features)
                ? object.features.map((e) => classFeatureFromJSON(e))
                : [],
            royaltyRate: isSet(object.royaltyRate)
                ? globalThis.String(object.royaltyRate)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.symbol !== "") {
            obj.symbol = message.symbol;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.uri !== "") {
            obj.uri = message.uri;
        }
        if (message.uriHash !== "") {
            obj.uriHash = message.uriHash;
        }
        if (message.data !== undefined) {
            obj.data = Any.toJSON(message.data);
        }
        if (message.features?.length) {
            obj.features = message.features.map((e) => classFeatureToJSON(e));
        }
        if (message.royaltyRate !== "") {
            obj.royaltyRate = message.royaltyRate;
        }
        return obj;
    },
    create(base) {
        return Class.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseClass();
        message.id = object.id ?? "";
        message.issuer = object.issuer ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.description = object.description ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        message.data =
            object.data !== undefined && object.data !== null
                ? Any.fromPartial(object.data)
                : undefined;
        message.features = object.features?.map((e) => e) || [];
        message.royaltyRate = object.royaltyRate ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
