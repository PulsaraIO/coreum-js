/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api";
function createBaseHttp() {
    return { rules: [], fullyDecodeReservedExpansion: false };
}
export const Http = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rules) {
            HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.rules.push(HttpRule.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.fullyDecodeReservedExpansion = reader.bool();
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
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => HttpRule.fromJSON(e)) : [],
            fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion)
                ? Boolean(object.fullyDecodeReservedExpansion)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? HttpRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        message.fullyDecodeReservedExpansion !== undefined &&
            (obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion);
        return obj;
    },
    create(base) {
        return Http.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHttp();
        message.rules = object.rules?.map((e) => HttpRule.fromPartial(e)) || [];
        message.fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion ?? false;
        return message;
    },
};
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        delete: undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        responseBody: "",
        additionalBindings: [],
    };
}
export const HttpRule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        for (const v of message.additionalBindings) {
            HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttpRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.selector = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.get = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.put = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.post = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.delete = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.patch = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.custom = CustomHttpPattern.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.body = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.responseBody = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
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
            selector: isSet(object.selector) ? String(object.selector) : "",
            get: isSet(object.get) ? String(object.get) : undefined,
            put: isSet(object.put) ? String(object.put) : undefined,
            post: isSet(object.post) ? String(object.post) : undefined,
            delete: isSet(object.delete) ? String(object.delete) : undefined,
            patch: isSet(object.patch) ? String(object.patch) : undefined,
            custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: isSet(object.body) ? String(object.body) : "",
            responseBody: isSet(object.responseBody) ? String(object.responseBody) : "",
            additionalBindings: Array.isArray(object?.additionalBindings)
                ? object.additionalBindings.map((e) => HttpRule.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.selector !== undefined && (obj.selector = message.selector);
        message.get !== undefined && (obj.get = message.get);
        message.put !== undefined && (obj.put = message.put);
        message.post !== undefined && (obj.post = message.post);
        message.delete !== undefined && (obj.delete = message.delete);
        message.patch !== undefined && (obj.patch = message.patch);
        message.custom !== undefined &&
            (obj.custom = message.custom ? CustomHttpPattern.toJSON(message.custom) : undefined);
        message.body !== undefined && (obj.body = message.body);
        message.responseBody !== undefined && (obj.responseBody = message.responseBody);
        if (message.additionalBindings) {
            obj.additionalBindings = message.additionalBindings.map((e) => e ? HttpRule.toJSON(e) : undefined);
        }
        else {
            obj.additionalBindings = [];
        }
        return obj;
    },
    create(base) {
        return HttpRule.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHttpRule();
        message.selector = object.selector ?? "";
        message.get = object.get ?? undefined;
        message.put = object.put ?? undefined;
        message.post = object.post ?? undefined;
        message.delete = object.delete ?? undefined;
        message.patch = object.patch ?? undefined;
        message.custom = (object.custom !== undefined && object.custom !== null)
            ? CustomHttpPattern.fromPartial(object.custom)
            : undefined;
        message.body = object.body ?? "";
        message.responseBody = object.responseBody ?? "";
        message.additionalBindings = object.additionalBindings?.map((e) => HttpRule.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCustomHttpPattern() {
    return { kind: "", path: "" };
}
export const CustomHttpPattern = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.path = reader.string();
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
        return { kind: isSet(object.kind) ? String(object.kind) : "", path: isSet(object.path) ? String(object.path) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined && (obj.kind = message.kind);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    create(base) {
        return CustomHttpPattern.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCustomHttpPattern();
        message.kind = object.kind ?? "";
        message.path = object.path ?? "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JldW0vZ29vZ2xlL2FwaS9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxHQUFHLE1BQU0sb0JBQW9CLENBQUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQztBQThTNUMsU0FBUyxjQUFjO0lBQ3JCLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxDQUFDO0FBQzVELENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUc7SUFDbEIsTUFBTSxDQUFDLE9BQWEsRUFBRSxTQUFxQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUM1RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxPQUFPLENBQUMsNEJBQTRCLEtBQUssSUFBSSxFQUFFO1lBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE4QixFQUFFLE1BQWU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7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