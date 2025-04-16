"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.21.12
// source: wasmd/proto/cosmwasm/wasm/v1/ibc.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgIBCCloseChannel = exports.MsgIBCSendResponse = exports.MsgIBCSend = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("cosmjs-types/binary");
exports.protobufPackage = "cosmwasm.wasm.v1";
function createBaseMsgIBCSend() {
    return {
        channel: "",
        timeoutHeight: 0,
        timeoutTimestamp: 0,
        data: new Uint8Array(0),
    };
}
exports.MsgIBCSend = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (message.timeoutHeight !== 0) {
            writer.uint32(32).uint64(message.timeoutHeight);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(40).uint64(message.timeoutTimestamp);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.channel = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.timeoutHeight = longToNumber(reader.uint64());
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.data = reader.bytes();
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
            channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
            timeoutHeight: isSet(object.timeoutHeight)
                ? globalThis.Number(object.timeoutHeight)
                : 0,
            timeoutTimestamp: isSet(object.timeoutTimestamp)
                ? globalThis.Number(object.timeoutTimestamp)
                : 0,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channel !== "") {
            obj.channel = message.channel;
        }
        if (message.timeoutHeight !== 0) {
            obj.timeoutHeight = Math.round(message.timeoutHeight);
        }
        if (message.timeoutTimestamp !== 0) {
            obj.timeoutTimestamp = Math.round(message.timeoutTimestamp);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        return obj;
    },
    create(base) {
        return exports.MsgIBCSend.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSend();
        message.channel = object.channel ?? "";
        message.timeoutHeight = object.timeoutHeight ?? 0;
        message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
        message.data = object.data ?? new Uint8Array(0);
        return message;
    },
};
function createBaseMsgIBCSendResponse() {
    return { sequence: 0 };
}
exports.MsgIBCSendResponse = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.sequence !== 0) {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.sequence = longToNumber(reader.uint64());
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
            sequence: isSet(object.sequence) ? globalThis.Number(object.sequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequence !== 0) {
            obj.sequence = Math.round(message.sequence);
        }
        return obj;
    },
    create(base) {
        return exports.MsgIBCSendResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSendResponse();
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseMsgIBCCloseChannel() {
    return { channel: "" };
}
exports.MsgIBCCloseChannel = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCCloseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.channel = reader.string();
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
            channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channel !== "") {
            obj.channel = message.channel;
        }
        return obj;
    },
    create(base) {
        return exports.MsgIBCCloseChannel.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgIBCCloseChannel();
        message.channel = object.channel ?? "";
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function longToNumber(int64) {
    const num = globalThis.Number(int64.toString());
    if (num > globalThis.Number.MAX_SAFE_INTEGER) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (num < globalThis.Number.MIN_SAFE_INTEGER) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return num;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
