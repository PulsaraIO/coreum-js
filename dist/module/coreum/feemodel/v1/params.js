/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "coreum.feemodel.v1";
function createBaseModelParams() {
    return {
        initialGasPrice: "",
        maxGasPriceMultiplier: "",
        maxDiscount: "",
        escalationStartFraction: "",
        maxBlockGas: Long.ZERO,
        shortEmaBlockLength: 0,
        longEmaBlockLength: 0,
    };
}
export const ModelParams = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            maxBlockGas: isSet(object.maxBlockGas) ? Long.fromValue(object.maxBlockGas) : Long.ZERO,
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
        message.maxBlockGas !== undefined && (obj.maxBlockGas = (message.maxBlockGas || Long.ZERO).toString());
        message.shortEmaBlockLength !== undefined && (obj.shortEmaBlockLength = Math.round(message.shortEmaBlockLength));
        message.longEmaBlockLength !== undefined && (obj.longEmaBlockLength = Math.round(message.longEmaBlockLength));
        return obj;
    },
    create(base) {
        return ModelParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseModelParams();
        message.initialGasPrice = object.initialGasPrice ?? "";
        message.maxGasPriceMultiplier = object.maxGasPriceMultiplier ?? "";
        message.maxDiscount = object.maxDiscount ?? "";
        message.escalationStartFraction = object.escalationStartFraction ?? "";
        message.maxBlockGas = (object.maxBlockGas !== undefined && object.maxBlockGas !== null)
            ? Long.fromValue(object.maxBlockGas)
            : Long.ZERO;
        message.shortEmaBlockLength = object.shortEmaBlockLength ?? 0;
        message.longEmaBlockLength = object.longEmaBlockLength ?? 0;
        return message;
    },
};
function createBaseParams() {
    return { model: undefined };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.model !== undefined) {
            ModelParams.encode(message.model, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.model = ModelParams.decode(reader, reader.uint32());
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
        return { model: isSet(object.model) ? ModelParams.fromJSON(object.model) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model ? ModelParams.toJSON(message.model) : undefined);
        return obj;
    },
    create(base) {
        return Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.model = (object.model !== undefined && object.model !== null)
            ? ModelParams.fromPartial(object.model)
            : undefined;
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
