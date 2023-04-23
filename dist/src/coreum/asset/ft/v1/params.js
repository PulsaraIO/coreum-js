"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = require("long");
const minimal_1 = require("protobufjs/minimal");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "coreum.asset.ft.v1";
function createBaseParams() {
    return { issueFee: undefined };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.issueFee !== undefined) {
            coin_1.Coin.encode(message.issueFee, writer.uint32(10).fork()).ldelim();
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
                    if (tag != 10) {
                        break;
                    }
                    message.issueFee = coin_1.Coin.decode(reader, reader.uint32());
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
        return { issueFee: isSet(object.issueFee) ? coin_1.Coin.fromJSON(object.issueFee) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.issueFee !== undefined && (obj.issueFee = message.issueFee ? coin_1.Coin.toJSON(message.issueFee) : undefined);
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.issueFee = (object.issueFee !== undefined && object.issueFee !== null)
            ? coin_1.Coin.fromPartial(object.issueFee)
            : undefined;
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
