"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryStakingParamsResponse = exports.QueryStakingParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZXVtL2N1c3RvbXBhcmFtcy92MS9xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLGlFQUFxQztBQUNyQyxxQ0FBeUM7QUFFNUIsUUFBQSxlQUFlLEdBQUcsd0JBQXdCLENBQUM7QUFXeEQsU0FBUyxtQ0FBbUM7SUFDMUMsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRVksUUFBQSx5QkFBeUIsR0FBRztJQUN2QyxNQUFNLENBQUMsQ0FBNEIsRUFBRSxTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDM0UsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLGlCQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RSxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNsRSxNQUFNLE9BQU8sR0FBRyxtQ0FBbUMsRUFBRSxDQUFDO1FBQ3RELE9BQU8sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRTthQUNsQjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQzlC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