"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ModelParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = require("long");
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "coreum.feemodel.v1";
function createBaseModelParams() {
    return {
        initialGasPrice: "",
        maxGasPriceMultiplier: "",
        maxDiscount: "",
        escalationStartFraction: "",
        maxBlockGas: long_1.default.ZERO,
        shortEmaBlockLength: 0,
        longEmaBlockLength: 0,
    };
}
exports.ModelParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.initialGasPrice !== "") {
            writer.uint32(10).string(message.initialGasPrice);
        }
        if (message.maxGasPriceMultiplier !== "") {
            writer.uint32(18).string(message.maxGasPriceMultiplier);
        }
        if (message.maxDiscount !== "") {
            writer.uint32(26).string(message.maxDiscount);
        }
        if (message.escalationStartFraction !== "") {
            writer.uint32(34).string(message.escalationStartFraction);
        }
        if (!message.maxBlockGas.isZero()) {
            writer.uint32(40).int64(message.maxBlockGas);
        }
        if (message.shortEmaBlockLength !== 0) {
            writer.uint32(48).uint32(message.shortEmaBlockLength);
        }
        if (message.longEmaBlockLength !== 0) {
            writer.uint32(56).uint32(message.longEmaBlockLength);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModelParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.initialGasPrice = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.maxGasPriceMultiplier = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.maxDiscount = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.escalationStartFraction = reader.string();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.maxBlockGas = reader.int64();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.shortEmaBlockLength = reader.uint32();
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.longEmaBlockLength = reader.uint32();
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
            initialGasPrice: isSet(object.initialGasPrice) ? String(object.initialGasPrice) : "",
            maxGasPriceMultiplier: isSet(object.maxGasPriceMultiplier) ? String(object.maxGasPriceMultiplier) : "",
            maxDiscount: isSet(object.maxDiscount) ? String(object.maxDiscount) : "",
            escalationStartFraction: isSet(object.escalationStartFraction) ? String(object.escalationStartFraction) : "",
            maxBlockGas: isSet(object.maxBlockGas) ? long_1.default.fromValue(object.maxBlockGas) : long_1.default.ZERO,
            shortEmaBlockLength: isSet(object.shortEmaBlockLength) ? Number(object.shortEmaBlockLength) : 0,
            longEmaBlockLength: isSet(object.longEmaBlockLength) ? Number(object.longEmaBlockLength) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.initialGasPrice !== undefined && (obj.initialGasPrice = message.initialGasPrice);
        message.maxGasPriceMultiplier !== undefined && (obj.maxGasPriceMultiplier = message.maxGasPriceMultiplier);
        message.maxDiscount !== undefined && (obj.maxDiscount = message.maxDiscount);
        message.escalationStartFraction !== undefined && (obj.escalationStartFraction = message.escalationStartFraction);
        message.maxBlockGas !== undefined && (obj.maxBlockGas = (message.maxBlockGas || long_1.default.ZERO).toString());
        message.shortEmaBlockLength !== undefined && (obj.shortEmaBlockLength = Math.round(message.shortEmaBlockLength));
        message.longEmaBlockLength !== undefined && (obj.longEmaBlockLength = Math.round(message.longEmaBlockLength));
        return obj;
    },
    create(base) {
        return exports.ModelParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseModelParams();
        message.initialGasPrice = (_a = object.initialGasPrice) !== null && _a !== void 0 ? _a : "";
        message.maxGasPriceMultiplier = (_b = object.maxGasPriceMultiplier) !== null && _b !== void 0 ? _b : "";
        message.maxDiscount = (_c = object.maxDiscount) !== null && _c !== void 0 ? _c : "";
        message.escalationStartFraction = (_d = object.escalationStartFraction) !== null && _d !== void 0 ? _d : "";
        message.maxBlockGas = (object.maxBlockGas !== undefined && object.maxBlockGas !== null)
            ? long_1.default.fromValue(object.maxBlockGas)
            : long_1.default.ZERO;
        message.shortEmaBlockLength = (_e = object.shortEmaBlockLength) !== null && _e !== void 0 ? _e : 0;
        message.longEmaBlockLength = (_f = object.longEmaBlockLength) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseParams() {
    return { model: undefined };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.model !== undefined) {
            exports.ModelParams.encode(message.model, writer.uint32(10).fork()).ldelim();
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
                    message.model = exports.ModelParams.decode(reader, reader.uint32());
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
        return { model: isSet(object.model) ? exports.ModelParams.fromJSON(object.model) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model ? exports.ModelParams.toJSON(message.model) : undefined);
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.model = (object.model !== undefined && object.model !== null)
            ? exports.ModelParams.fromPartial(object.model)
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
