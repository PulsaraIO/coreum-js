/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "coreum.customparams.v1";
function createBaseStakingParams() {
    return { minSelfDelegation: "" };
}
export const StakingParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.minSelfDelegation !== "") {
            writer.uint32(10).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.minSelfDelegation = reader.string();
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
        return { minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    create(base) {
        return StakingParams.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStakingParams();
        message.minSelfDelegation = (_a = object.minSelfDelegation) !== null && _a !== void 0 ? _a : "";
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
