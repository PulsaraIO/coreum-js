"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryStakingParamsResponse = exports.QueryStakingParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = require("long");
const minimal_1 = require("protobufjs/minimal");
const params_1 = require("./params");
exports.protobufPackage = "coreum.customparams.v1";
function createBaseQueryStakingParamsRequest() {
    return {};
}
exports.QueryStakingParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.QueryStakingParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryStakingParamsRequest();
        return message;
    },
};
function createBaseQueryStakingParamsResponse() {
    return { params: undefined };
}
exports.QueryStakingParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.StakingParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStakingParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.params = params_1.StakingParams.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? params_1.StakingParams.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.StakingParams.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryStakingParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryStakingParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.StakingParams.fromPartial(object.params)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "coreum.customparams.v1.Query";
        this.rpc = rpc;
        this.StakingParams = this.StakingParams.bind(this);
    }
    StakingParams(request) {
        const data = exports.QueryStakingParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "StakingParams", data);
        return promise.then((data) => exports.QueryStakingParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
