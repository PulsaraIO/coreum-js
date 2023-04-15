/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StakingParams } from "./params";
export const protobufPackage = "coreum.customparams.v1";
function createBaseGenesisState() {
    return { stakingParams: undefined };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stakingParams !== undefined) {
            StakingParams.encode(message.stakingParams, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.stakingParams = StakingParams.decode(reader, reader.uint32());
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
        return { stakingParams: isSet(object.stakingParams) ? StakingParams.fromJSON(object.stakingParams) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.stakingParams !== undefined &&
            (obj.stakingParams = message.stakingParams ? StakingParams.toJSON(message.stakingParams) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.stakingParams = (object.stakingParams !== undefined && object.stakingParams !== null)
            ? StakingParams.fromPartial(object.stakingParams)
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
