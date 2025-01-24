"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const keys_1 = require("../crypto/keys");
exports.protobufPackage = "tendermint.types";
function createBaseValidatorSet() {
    return { validators: [], proposer: undefined, totalVotingPower: 0 };
}
exports.ValidatorSet = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(10).fork()).join();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).join();
        }
        if (message.totalVotingPower !== 0) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.totalVotingPower = Number(reader.uint64());
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => exports.Validator.fromJSON(e))
                : [],
            proposer: isSet(object.proposer)
                ? exports.Validator.fromJSON(object.proposer)
                : undefined,
            totalVotingPower: isSet(object.totalVotingPower)
                ? Number(object.totalVotingPower)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined &&
            (obj.proposer = message.proposer
                ? exports.Validator.toJSON(message.proposer)
                : undefined);
        message.totalVotingPower !== undefined &&
            (obj.totalVotingPower = Math.round(message.totalVotingPower));
        return obj;
    },
    create(base) {
        return exports.ValidatorSet.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorSet();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Validator.fromPartial(e))) || [];
        message.proposer =
            object.proposer !== undefined && object.proposer !== null
                ? exports.Validator.fromPartial(object.proposer)
                : undefined;
        message.totalVotingPower = (_b = object.totalVotingPower) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        pubKey: undefined,
        votingPower: 0,
        proposerPriority: 0,
    };
}
exports.Validator = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(18).fork()).join();
        }
        if (message.votingPower !== 0) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== 0) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.votingPower = Number(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.proposerPriority = Number(reader.uint64());
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
            address: isSet(object.address)
                ? bytesFromBase64(object.address)
                : new Uint8Array(),
            pubKey: isSet(object.pubKey)
                ? keys_1.PublicKey.fromJSON(object.pubKey)
                : undefined,
            votingPower: isSet(object.votingPower) ? Number(object.votingPower) : 0,
            proposerPriority: isSet(object.proposerPriority)
                ? Number(object.proposerPriority)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey
                ? keys_1.PublicKey.toJSON(message.pubKey)
                : undefined);
        message.votingPower !== undefined &&
            (obj.votingPower = Math.round(message.votingPower));
        message.proposerPriority !== undefined &&
            (obj.proposerPriority = Math.round(message.proposerPriority));
        return obj;
    },
    create(base) {
        return exports.Validator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? keys_1.PublicKey.fromPartial(object.pubKey)
                : undefined;
        message.votingPower = (_b = object.votingPower) !== null && _b !== void 0 ? _b : 0;
        message.proposerPriority = (_c = object.proposerPriority) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseSimpleValidator() {
    return { pubKey: undefined, votingPower: 0 };
}
exports.SimpleValidator = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).join();
        }
        if (message.votingPower !== 0) {
            writer.uint32(16).int64(message.votingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimpleValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.votingPower = Number(reader.uint64());
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
            pubKey: isSet(object.pubKey)
                ? keys_1.PublicKey.fromJSON(object.pubKey)
                : undefined,
            votingPower: isSet(object.votingPower) ? Number(object.votingPower) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey
                ? keys_1.PublicKey.toJSON(message.pubKey)
                : undefined);
        message.votingPower !== undefined &&
            (obj.votingPower = Math.round(message.votingPower));
        return obj;
    },
    create(base) {
        return exports.SimpleValidator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSimpleValidator();
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? keys_1.PublicKey.fromPartial(object.pubKey)
                : undefined;
        message.votingPower = (_a = object.votingPower) !== null && _a !== void 0 ? _a : 0;
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
