"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: coreum-protos/nft/authz.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTIdentifier = exports.SendAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "coreum.asset.nft.v1";
function createBaseSendAuthorization() {
    return { nfts: [] };
}
exports.SendAuthorization = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.nfts) {
            exports.NFTIdentifier.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.nfts.push(exports.NFTIdentifier.decode(reader, reader.uint32()));
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
            nfts: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map((e) => exports.NFTIdentifier.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.nfts) === null || _a === void 0 ? void 0 : _a.length) {
            obj.nfts = message.nfts.map((e) => exports.NFTIdentifier.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SendAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendAuthorization();
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map((e) => exports.NFTIdentifier.fromPartial(e))) || [];
        return message;
    },
};
function createBaseNFTIdentifier() {
    return { classId: "", id: "" };
}
exports.NFTIdentifier = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNFTIdentifier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
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
            classId: isSet(object.classId) ? globalThis.String(object.classId) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classId !== "") {
            obj.classId = message.classId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.NFTIdentifier.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNFTIdentifier();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
