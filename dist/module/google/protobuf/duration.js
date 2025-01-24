/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "google.protobuf";
function createBaseDuration() {
    return { seconds: 0, nanos: 0 };
}
export const Duration = {
    encode(message, writer = new BinaryWriter()) {
        if (message.seconds !== 0) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.seconds = Number(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.nanos = reader.int32();
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
            seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
            nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined &&
            (obj.seconds = Math.round(message.seconds));
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    create(base) {
        return Duration.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDuration();
        message.seconds = object.seconds ?? 0;
        message.nanos = object.nanos ?? 0;
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
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
