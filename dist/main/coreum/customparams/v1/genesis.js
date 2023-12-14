"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
exports.protobufPackage = "coreum.customparams.v1";
function createBaseGenesisState() {
    return { stakingParams: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.stakingParams !== undefined) {
            params_1.StakingParams.encode(message.stakingParams, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.stakingParams = params_1.StakingParams.decode(reader, reader.uint32());
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
        return { stakingParams: isSet(object.stakingParams) ? params_1.StakingParams.fromJSON(object.stakingParams) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.stakingParams !== undefined &&
            (obj.stakingParams = message.stakingParams ? params_1.StakingParams.toJSON(message.stakingParams) : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.stakingParams = (object.stakingParams !== undefined && object.stakingParams !== null)
            ? params_1.StakingParams.fromPartial(object.stakingParams)
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
