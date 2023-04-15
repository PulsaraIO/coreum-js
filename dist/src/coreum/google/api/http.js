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
            rules: Array.isArray(object === null || object === void 0 ? void 0 : object.rules) ? object.rules.map((e) => HttpRule.fromJSON(e)) : [],
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
        return Http.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHttp();
        message.rules = ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map((e) => HttpRule.fromPartial(e))) || [];
        message.fullyDecodeReservedExpansion = (_b = object.fullyDecodeReservedExpansion) !== null && _b !== void 0 ? _b : false;
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
            additionalBindings: Array.isArray(object === null || object === void 0 ? void 0 : object.additionalBindings)
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
        return HttpRule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseHttpRule();
        message.selector = (_a = object.selector) !== null && _a !== void 0 ? _a : "";
        message.get = (_b = object.get) !== null && _b !== void 0 ? _b : undefined;
        message.put = (_c = object.put) !== null && _c !== void 0 ? _c : undefined;
        message.post = (_d = object.post) !== null && _d !== void 0 ? _d : undefined;
        message.delete = (_e = object.delete) !== null && _e !== void 0 ? _e : undefined;
        message.patch = (_f = object.patch) !== null && _f !== void 0 ? _f : undefined;
        message.custom = (object.custom !== undefined && object.custom !== null)
            ? CustomHttpPattern.fromPartial(object.custom)
            : undefined;
        message.body = (_g = object.body) !== null && _g !== void 0 ? _g : "";
        message.responseBody = (_h = object.responseBody) !== null && _h !== void 0 ? _h : "";
        message.additionalBindings = ((_j = object.additionalBindings) === null || _j === void 0 ? void 0 : _j.map((e) => HttpRule.fromPartial(e))) || [];
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
        return CustomHttpPattern.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCustomHttpPattern();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
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
