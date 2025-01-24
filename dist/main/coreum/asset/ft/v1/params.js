"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: coreum-protos/ft/params.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const coin_1 = require("../../../../cosmos/base/coin");
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
exports.protobufPackage = "coreum.asset.ft.v1";
function createBaseParams() {
    return {
        issueFee: undefined,
        tokenUpgradeDecisionTimeout: undefined,
        tokenUpgradeGracePeriod: undefined,
    };
}
exports.Params = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.issueFee !== undefined) {
            coin_1.Coin.encode(message.issueFee, writer.uint32(10).fork()).join();
        }
        if (message.tokenUpgradeDecisionTimeout !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.tokenUpgradeDecisionTimeout), writer.uint32(18).fork()).join();
        }
        if (message.tokenUpgradeGracePeriod !== undefined) {
            duration_1.Duration.encode(message.tokenUpgradeGracePeriod, writer.uint32(26).fork()).join();
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
                    message.issueFee = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.tokenUpgradeDecisionTimeout = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenUpgradeGracePeriod = duration_1.Duration.decode(reader, reader.uint32());
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
            issueFee: isSet(object.issueFee)
                ? coin_1.Coin.fromJSON(object.issueFee)
                : undefined,
            tokenUpgradeDecisionTimeout: isSet(object.tokenUpgradeDecisionTimeout)
                ? fromJsonTimestamp(object.tokenUpgradeDecisionTimeout)
                : undefined,
            tokenUpgradeGracePeriod: isSet(object.tokenUpgradeGracePeriod)
                ? duration_1.Duration.fromJSON(object.tokenUpgradeGracePeriod)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.issueFee !== undefined) {
            obj.issueFee = coin_1.Coin.toJSON(message.issueFee);
        }
        if (message.tokenUpgradeDecisionTimeout !== undefined) {
            obj.tokenUpgradeDecisionTimeout =
                message.tokenUpgradeDecisionTimeout.toISOString();
        }
        if (message.tokenUpgradeGracePeriod !== undefined) {
            obj.tokenUpgradeGracePeriod = duration_1.Duration.toJSON(message.tokenUpgradeGracePeriod);
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.issueFee =
            object.issueFee !== undefined && object.issueFee !== null
                ? coin_1.Coin.fromPartial(object.issueFee)
                : undefined;
        message.tokenUpgradeDecisionTimeout =
            (_a = object.tokenUpgradeDecisionTimeout) !== null && _a !== void 0 ? _a : undefined;
        message.tokenUpgradeGracePeriod =
            object.tokenUpgradeGracePeriod !== undefined &&
                object.tokenUpgradeGracePeriod !== null
                ? duration_1.Duration.fromPartial(object.tokenUpgradeGracePeriod)
                : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
