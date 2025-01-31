"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: coreum-protos/dex/params.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const coin_1 = require("../../../cosmos/base/coin");
exports.protobufPackage = "coreum.dex.v1";
function createBaseParams() {
    return {
        defaultUnifiedRefAmount: "",
        priceTickExponent: 0,
        maxOrdersPerDenom: 0,
        orderReserve: undefined,
    };
}
exports.Params = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.defaultUnifiedRefAmount !== "") {
            writer.uint32(10).string(message.defaultUnifiedRefAmount);
        }
        if (message.priceTickExponent !== 0) {
            writer.uint32(16).int32(message.priceTickExponent);
        }
        if (message.maxOrdersPerDenom !== 0) {
            writer.uint32(24).uint64(message.maxOrdersPerDenom);
        }
        if (message.orderReserve !== undefined) {
            coin_1.Coin.encode(message.orderReserve, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.defaultUnifiedRefAmount = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.priceTickExponent = reader.int32();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.maxOrdersPerDenom = longToNumber(reader.uint64());
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.orderReserve = coin_1.Coin.decode(reader, reader.uint32());
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
            defaultUnifiedRefAmount: isSet(object.defaultUnifiedRefAmount)
                ? globalThis.String(object.defaultUnifiedRefAmount)
                : "",
            priceTickExponent: isSet(object.priceTickExponent)
                ? globalThis.Number(object.priceTickExponent)
                : 0,
            maxOrdersPerDenom: isSet(object.maxOrdersPerDenom)
                ? globalThis.Number(object.maxOrdersPerDenom)
                : 0,
            orderReserve: isSet(object.orderReserve)
                ? coin_1.Coin.fromJSON(object.orderReserve)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.defaultUnifiedRefAmount !== "") {
            obj.defaultUnifiedRefAmount = message.defaultUnifiedRefAmount;
        }
        if (message.priceTickExponent !== 0) {
            obj.priceTickExponent = Math.round(message.priceTickExponent);
        }
        if (message.maxOrdersPerDenom !== 0) {
            obj.maxOrdersPerDenom = Math.round(message.maxOrdersPerDenom);
        }
        if (message.orderReserve !== undefined) {
            obj.orderReserve = coin_1.Coin.toJSON(message.orderReserve);
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseParams();
        message.defaultUnifiedRefAmount = (_a = object.defaultUnifiedRefAmount) !== null && _a !== void 0 ? _a : "";
        message.priceTickExponent = (_b = object.priceTickExponent) !== null && _b !== void 0 ? _b : 0;
        message.maxOrdersPerDenom = (_c = object.maxOrdersPerDenom) !== null && _c !== void 0 ? _c : 0;
        message.orderReserve =
            object.orderReserve !== undefined && object.orderReserve !== null
                ? coin_1.Coin.fromPartial(object.orderReserve)
                : undefined;
        return message;
    },
};
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
