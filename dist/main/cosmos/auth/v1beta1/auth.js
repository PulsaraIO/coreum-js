"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ModuleCredential = exports.ModuleAccount = exports.BaseAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseBaseAccount() {
    return { address: "", pubKey: undefined, accountNumber: 0, sequence: 0 };
}
exports.BaseAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountNumber !== 0) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (message.sequence !== 0) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.accountNumber = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sequence = longToNumber(reader.uint64());
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
            address: isSet(object.address) ? String(object.address) : "",
            pubKey: isSet(object.pubKey) ? any_1.Any.fromJSON(object.pubKey) : undefined,
            accountNumber: isSet(object.accountNumber)
                ? Number(object.accountNumber)
                : 0,
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey ? any_1.Any.toJSON(message.pubKey) : undefined);
        message.accountNumber !== undefined &&
            (obj.accountNumber = Math.round(message.accountNumber));
        message.sequence !== undefined &&
            (obj.sequence = Math.round(message.sequence));
        return obj;
    },
    create(base) {
        return exports.BaseAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBaseAccount();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? any_1.Any.fromPartial(object.pubKey)
                : undefined;
        message.accountNumber = (_b = object.accountNumber) !== null && _b !== void 0 ? _b : 0;
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseModuleAccount() {
    return { baseAccount: undefined, name: "", permissions: [] };
}
exports.ModuleAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseAccount !== undefined) {
            exports.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseAccount = exports.BaseAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permissions.push(reader.string());
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
            baseAccount: isSet(object.baseAccount)
                ? exports.BaseAccount.fromJSON(object.baseAccount)
                : undefined,
            name: isSet(object.name) ? String(object.name) : "",
            permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions)
                ? object.permissions.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? exports.BaseAccount.toJSON(message.baseAccount)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    create(base) {
        return exports.ModuleAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModuleAccount();
        message.baseAccount =
            object.baseAccount !== undefined && object.baseAccount !== null
                ? exports.BaseAccount.fromPartial(object.baseAccount)
                : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.permissions = ((_b = object.permissions) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseModuleCredential() {
    return { moduleName: "", derivationKeys: [] };
}
exports.ModuleCredential = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        for (const v of message.derivationKeys) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleCredential();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.derivationKeys.push(reader.bytes());
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
            moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
            derivationKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.derivationKeys)
                ? object.derivationKeys.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.moduleName !== undefined && (obj.moduleName = message.moduleName);
        if (message.derivationKeys) {
            obj.derivationKeys = message.derivationKeys.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.derivationKeys = [];
        }
        return obj;
    },
    create(base) {
        return exports.ModuleCredential.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModuleCredential();
        message.moduleName = (_a = object.moduleName) !== null && _a !== void 0 ? _a : "";
        message.derivationKeys = ((_b = object.derivationKeys) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        maxMemoCharacters: 0,
        txSigLimit: 0,
        txSizeCostPerByte: 0,
        sigVerifyCostEd25519: 0,
        sigVerifyCostSecp256k1: 0,
    };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxMemoCharacters !== 0) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (message.txSigLimit !== 0) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (message.txSizeCostPerByte !== 0) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (message.sigVerifyCostEd25519 !== 0) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (message.sigVerifyCostSecp256k1 !== 0) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.maxMemoCharacters = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.txSigLimit = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.txSizeCostPerByte = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sigVerifyCostEd25519 = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.sigVerifyCostSecp256k1 = longToNumber(reader.uint64());
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
            maxMemoCharacters: isSet(object.maxMemoCharacters)
                ? Number(object.maxMemoCharacters)
                : 0,
            txSigLimit: isSet(object.txSigLimit) ? Number(object.txSigLimit) : 0,
            txSizeCostPerByte: isSet(object.txSizeCostPerByte)
                ? Number(object.txSizeCostPerByte)
                : 0,
            sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519)
                ? Number(object.sigVerifyCostEd25519)
                : 0,
            sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1)
                ? Number(object.sigVerifyCostSecp256k1)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxMemoCharacters !== undefined &&
            (obj.maxMemoCharacters = Math.round(message.maxMemoCharacters));
        message.txSigLimit !== undefined &&
            (obj.txSigLimit = Math.round(message.txSigLimit));
        message.txSizeCostPerByte !== undefined &&
            (obj.txSizeCostPerByte = Math.round(message.txSizeCostPerByte));
        message.sigVerifyCostEd25519 !== undefined &&
            (obj.sigVerifyCostEd25519 = Math.round(message.sigVerifyCostEd25519));
        message.sigVerifyCostSecp256k1 !== undefined &&
            (obj.sigVerifyCostSecp256k1 = Math.round(message.sigVerifyCostSecp256k1));
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseParams();
        message.maxMemoCharacters = (_a = object.maxMemoCharacters) !== null && _a !== void 0 ? _a : 0;
        message.txSigLimit = (_b = object.txSigLimit) !== null && _b !== void 0 ? _b : 0;
        message.txSizeCostPerByte = (_c = object.txSizeCostPerByte) !== null && _c !== void 0 ? _c : 0;
        message.sigVerifyCostEd25519 = (_d = object.sigVerifyCostEd25519) !== null && _d !== void 0 ? _d : 0;
        message.sigVerifyCostSecp256k1 = (_e = object.sigVerifyCostSecp256k1) !== null && _e !== void 0 ? _e : 0;
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
