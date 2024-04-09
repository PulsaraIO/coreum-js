/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
export const protobufPackage = "coreum.asset.nft.v1";
function createBaseParams() {
    return { mintFee: undefined };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintFee !== undefined) {
            Coin.encode(message.mintFee, writer.uint32(10).fork()).ldelim();
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
                    message.mintFee = Coin.decode(reader, reader.uint32());
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
        return { mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.mintFee !== undefined && (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
        return obj;
    },
    create(base) {
        return Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintFee = (object.mintFee !== undefined && object.mintFee !== null)
            ? Coin.fromPartial(object.mintFee)
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
