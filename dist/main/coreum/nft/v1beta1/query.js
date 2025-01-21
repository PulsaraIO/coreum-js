"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryClassesResponse = exports.QueryClassesRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryNFTResponse = exports.QueryNFTRequest = exports.QueryNFTsResponse = exports.QueryNFTsRequest = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryOwnerResponse = exports.QueryOwnerRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("cosmjs-types/cosmos/base/query/v1beta1/pagination");
const nft_1 = require("./nft");
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseQueryBalanceRequest() {
    return { classId: "", owner: "" };
}
exports.QueryBalanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
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
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    create(base) {
        return exports.QueryBalanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryBalanceRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryBalanceResponse() {
    return { amount: long_1.default.UZERO };
}
exports.QueryBalanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.amount = reader.uint64();
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
            amount: isSet(object.amount) ? long_1.default.fromValue(object.amount) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined &&
            (obj.amount = (message.amount || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryBalanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? long_1.default.fromValue(object.amount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryOwnerRequest() {
    return { classId: "", id: "" };
}
exports.QueryOwnerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerRequest();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.QueryOwnerRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryOwnerRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryOwnerResponse() {
    return { owner: "" };
}
exports.QueryOwnerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.owner = reader.string();
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
        return { owner: isSet(object.owner) ? String(object.owner) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    create(base) {
        return exports.QueryOwnerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOwnerResponse();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyRequest() {
    return { classId: "" };
}
exports.QuerySupplyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classId = reader.string();
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
        return { classId: isSet(object.classId) ? String(object.classId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    create(base) {
        return exports.QuerySupplyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySupplyRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyResponse() {
    return { amount: long_1.default.UZERO };
}
exports.QuerySupplyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.amount = reader.uint64();
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
            amount: isSet(object.amount) ? long_1.default.fromValue(object.amount) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined &&
            (obj.amount = (message.amount || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QuerySupplyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? long_1.default.fromValue(object.amount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryNFTsRequest() {
    return { classId: "", owner: "", pagination: undefined };
}
exports.QueryNFTsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsRequest();
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
                    message.owner = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryNFTsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNFTsRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryNFTsResponse() {
    return { nfts: [], pagination: undefined };
}
exports.QueryNFTsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nfts) {
            nft_1.NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts)
                ? object.nfts.map((e) => nft_1.NFT.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map((e) => (e ? nft_1.NFT.toJSON(e) : undefined));
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryNFTsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryNFTsResponse();
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map((e) => nft_1.NFT.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryNFTRequest() {
    return { classId: "", id: "" };
}
exports.QueryNFTRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTRequest();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.QueryNFTRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNFTRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryNFTResponse() {
    return { nft: undefined };
}
exports.QueryNFTResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nft !== undefined) {
            nft_1.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.nft = nft_1.NFT.decode(reader, reader.uint32());
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
        return { nft: isSet(object.nft) ? nft_1.NFT.fromJSON(object.nft) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.nft !== undefined &&
            (obj.nft = message.nft ? nft_1.NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryNFTResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryNFTResponse();
        message.nft =
            object.nft !== undefined && object.nft !== null
                ? nft_1.NFT.fromPartial(object.nft)
                : undefined;
        return message;
    },
};
function createBaseQueryClassRequest() {
    return { classId: "" };
}
exports.QueryClassRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classId = reader.string();
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
        return { classId: isSet(object.classId) ? String(object.classId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    create(base) {
        return exports.QueryClassRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClassRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClassResponse() {
    return { class: undefined };
}
exports.QueryClassResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.class !== undefined) {
            nft_1.Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.class = nft_1.Class.decode(reader, reader.uint32());
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
            class: isSet(object.class) ? nft_1.Class.fromJSON(object.class) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined &&
            (obj.class = message.class ? nft_1.Class.toJSON(message.class) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryClassResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class =
            object.class !== undefined && object.class !== null
                ? nft_1.Class.fromPartial(object.class)
                : undefined;
        return message;
    },
};
function createBaseQueryClassesRequest() {
    return { pagination: undefined };
}
exports.QueryClassesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryClassesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClassesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryClassesResponse() {
    return { classes: [], pagination: undefined };
}
exports.QueryClassesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.classes) {
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes)
                ? object.classes.map((e) => nft_1.Class.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map((e) => e ? nft_1.Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryClassesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClassesResponse();
        message.classes = ((_a = object.classes) === null || _a === void 0 ? void 0 : _a.map((e) => nft_1.Class.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.nft.v1beta1.Query";
        this.rpc = rpc;
        this.Balance = this.Balance.bind(this);
        this.Owner = this.Owner.bind(this);
        this.Supply = this.Supply.bind(this);
        this.NFTs = this.NFTs.bind(this);
        this.NFT = this.NFT.bind(this);
        this.Class = this.Class.bind(this);
        this.Classes = this.Classes.bind(this);
    }
    Balance(request) {
        const data = exports.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Balance", data);
        return promise.then((data) => exports.QueryBalanceResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Owner(request) {
        const data = exports.QueryOwnerRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Owner", data);
        return promise.then((data) => exports.QueryOwnerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Supply(request) {
        const data = exports.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Supply", data);
        return promise.then((data) => exports.QuerySupplyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    NFTs(request) {
        const data = exports.QueryNFTsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NFTs", data);
        return promise.then((data) => exports.QueryNFTsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    NFT(request) {
        const data = exports.QueryNFTRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NFT", data);
        return promise.then((data) => exports.QueryNFTResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Class(request) {
        const data = exports.QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Class", data);
        return promise.then((data) => exports.QueryClassResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Classes(request) {
        const data = exports.QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Classes", data);
        return promise.then((data) => exports.QueryClassesResponse.decode(minimal_1.default.Reader.create(data)));
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
