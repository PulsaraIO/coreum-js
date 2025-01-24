"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = exports.Contract = exports.Code = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const types_1 = require("./types");
exports.protobufPackage = "cosmwasm.wasm.v1";
function createBaseGenesisState() {
    return { params: undefined, codes: [], contracts: [], sequences: [] };
}
exports.GenesisState = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).join();
        }
        for (const v of message.codes) {
            exports.Code.encode(v, writer.uint32(18).fork()).join();
        }
        for (const v of message.contracts) {
            exports.Contract.encode(v, writer.uint32(26).fork()).join();
        }
        for (const v of message.sequences) {
            exports.Sequence.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.codes.push(exports.Code.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.contracts.push(exports.Contract.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
                    continue;
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
            params: isSet(object.params) ? types_1.Params.fromJSON(object.params) : undefined,
            codes: Array.isArray(object === null || object === void 0 ? void 0 : object.codes)
                ? object.codes.map((e) => exports.Code.fromJSON(e))
                : [],
            contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts)
                ? object.contracts.map((e) => exports.Contract.fromJSON(e))
                : [],
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences)
                ? object.sequences.map((e) => exports.Sequence.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? types_1.Params.toJSON(message.params) : undefined);
        if (message.codes) {
            obj.codes = message.codes.map((e) => (e ? exports.Code.toJSON(e) : undefined));
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map((e) => e ? exports.Contract.toJSON(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e ? exports.Sequence.toJSON(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? types_1.Params.fromPartial(object.params)
                : undefined;
        message.codes = ((_a = object.codes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Code.fromPartial(e))) || [];
        message.contracts =
            ((_b = object.contracts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Contract.fromPartial(e))) || [];
        message.sequences =
            ((_c = object.sequences) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Sequence.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCode() {
    return {
        codeId: 0,
        codeInfo: undefined,
        codeBytes: new Uint8Array(),
        pinned: false,
    };
}
exports.Code = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            types_1.CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).join();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.codeId = Number(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.codeInfo = types_1.CodeInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.codeBytes = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.pinned = reader.bool();
                    continue;
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
            codeId: isSet(object.codeId) ? Number(object.codeId) : 0,
            codeInfo: isSet(object.codeInfo)
                ? types_1.CodeInfo.fromJSON(object.codeInfo)
                : undefined,
            codeBytes: isSet(object.codeBytes)
                ? bytesFromBase64(object.codeBytes)
                : new Uint8Array(),
            pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = Math.round(message.codeId));
        message.codeInfo !== undefined &&
            (obj.codeInfo = message.codeInfo
                ? types_1.CodeInfo.toJSON(message.codeInfo)
                : undefined);
        message.codeBytes !== undefined &&
            (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
        message.pinned !== undefined && (obj.pinned = message.pinned);
        return obj;
    },
    create(base) {
        return exports.Code.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCode();
        message.codeId = (_a = object.codeId) !== null && _a !== void 0 ? _a : 0;
        message.codeInfo =
            object.codeInfo !== undefined && object.codeInfo !== null
                ? types_1.CodeInfo.fromPartial(object.codeInfo)
                : undefined;
        message.codeBytes = (_b = object.codeBytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.pinned = (_c = object.pinned) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseContract() {
    return {
        contractAddress: "",
        contractInfo: undefined,
        contractState: [],
        contractCodeHistory: [],
    };
}
exports.Contract = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            types_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).join();
        }
        for (const v of message.contractState) {
            types_1.Model.encode(v, writer.uint32(26).fork()).join();
        }
        for (const v of message.contractCodeHistory) {
            types_1.ContractCodeHistoryEntry.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contractAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.contractInfo = types_1.ContractInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.contractState.push(types_1.Model.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.contractCodeHistory.push(types_1.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
                    continue;
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
            contractAddress: isSet(object.contractAddress)
                ? String(object.contractAddress)
                : "",
            contractInfo: isSet(object.contractInfo)
                ? types_1.ContractInfo.fromJSON(object.contractInfo)
                : undefined,
            contractState: Array.isArray(object === null || object === void 0 ? void 0 : object.contractState)
                ? object.contractState.map((e) => types_1.Model.fromJSON(e))
                : [],
            contractCodeHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.contractCodeHistory)
                ? object.contractCodeHistory.map((e) => types_1.ContractCodeHistoryEntry.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        message.contractInfo !== undefined &&
            (obj.contractInfo = message.contractInfo
                ? types_1.ContractInfo.toJSON(message.contractInfo)
                : undefined);
        if (message.contractState) {
            obj.contractState = message.contractState.map((e) => e ? types_1.Model.toJSON(e) : undefined);
        }
        else {
            obj.contractState = [];
        }
        if (message.contractCodeHistory) {
            obj.contractCodeHistory = message.contractCodeHistory.map((e) => e ? types_1.ContractCodeHistoryEntry.toJSON(e) : undefined);
        }
        else {
            obj.contractCodeHistory = [];
        }
        return obj;
    },
    create(base) {
        return exports.Contract.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseContract();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.contractInfo =
            object.contractInfo !== undefined && object.contractInfo !== null
                ? types_1.ContractInfo.fromPartial(object.contractInfo)
                : undefined;
        message.contractState =
            ((_b = object.contractState) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.Model.fromPartial(e))) || [];
        message.contractCodeHistory =
            ((_c = object.contractCodeHistory) === null || _c === void 0 ? void 0 : _c.map((e) => types_1.ContractCodeHistoryEntry.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSequence() {
    return { idKey: new Uint8Array(), value: 0 };
}
exports.Sequence = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (message.value !== 0) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idKey = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.value = Number(reader.uint64());
                    continue;
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
            idKey: isSet(object.idKey)
                ? bytesFromBase64(object.idKey)
                : new Uint8Array(),
            value: isSet(object.value) ? Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idKey !== undefined &&
            (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    create(base) {
        return exports.Sequence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSequence();
        message.idKey = (_a = object.idKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
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
function isSet(value) {
    return value !== null && value !== undefined;
}
