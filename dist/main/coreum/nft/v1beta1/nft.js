"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = exports.Class = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../google/protobuf/any");
exports.protobufPackage = "coreum.nft.v1beta1";
function createBaseClass() {
    return {
        id: "",
        name: "",
        symbol: "",
        description: "",
        uri: "",
        uriHash: "",
        data: undefined,
    };
}
exports.Class = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.uri !== "") {
            writer.uint32(42).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(50).string(message.uriHash);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.uriHash = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            description: isSet(object.description) ? String(object.description) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.description !== undefined &&
            (obj.description = message.description);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.Class.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseClass();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.uri = (_e = object.uri) !== null && _e !== void 0 ? _e : "";
        message.uriHash = (_f = object.uriHash) !== null && _f !== void 0 ? _f : "";
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        return message;
    },
};
function createBaseNFT() {
    return { classId: "", id: "", uri: "", uriHash: "", data: undefined };
}
exports.NFT = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.uri !== "") {
            writer.uint32(26).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(34).string(message.uriHash);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.uriHash = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    create(base) {
        return exports.NFT.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseNFT();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.uri = (_c = object.uri) !== null && _c !== void 0 ? _c : "";
        message.uriHash = (_d = object.uriHash) !== null && _d !== void 0 ? _d : "";
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmV1bS9uZnQvdjFiZXRhMS9uZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixpRUFBcUM7QUFDckMsbURBQWdEO0FBRW5DLFFBQUEsZUFBZSxHQUFHLG9CQUFvQixDQUFDO0FBa0NwRCxTQUFTLGVBQWU7SUFDdEIsT0FBTztRQUNMLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRSxFQUFFO1FBQ2YsR0FBRyxFQUFFLEVBQUU7UUFDUCxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUM7QUFDSixDQUFDO0FBRVksUUFBQSxLQUFLLEdBQUc7SUFDbkIsTUFBTSxDQUFDLE9BQWMsRUFBRSxTQUFxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDN0QsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLEVBQUUsRUFBRTtZQUM5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