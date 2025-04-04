/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StakingParams } from "./params";
export const protobufPackage = "coreum.customparams.v1";
function createBaseQueryStakingParamsRequest() {
    return {};
}
export const QueryStakingParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStakingParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryStakingParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryStakingParamsRequest();
        return message;
    },
};
function createBaseQueryStakingParamsResponse() {
    return { params: undefined };
}
export const QueryStakingParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            StakingParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStakingParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.params = StakingParams.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? StakingParams.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? StakingParams.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return QueryStakingParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryStakingParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? StakingParams.fromPartial(object.params)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "coreum.customparams.v1.Query";
        this.rpc = rpc;
        this.StakingParams = this.StakingParams.bind(this);
    }
    StakingParams(request) {
        const data = QueryStakingParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "StakingParams", data);
        return promise.then((data) => QueryStakingParamsResponse.decode(_m0.Reader.create(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
