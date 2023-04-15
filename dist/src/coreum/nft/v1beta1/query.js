/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Class, NFT } from "./nft";
export const protobufPackage = "coreum.nft.v1beta1";
function createBaseQueryBalanceRequest() {
    return { classId: "", owner: "" };
}
export const QueryBalanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryBalanceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
    return { amount: Long.UZERO };
}
export const QueryBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return { amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return QueryBalanceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Long.fromValue(object.amount)
            : Long.UZERO;
        return message;
    },
};
function createBaseQueryOwnerRequest() {
    return { classId: "", id: "" };
}
export const QueryOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOwnerRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryOwnerResponse.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QuerySupplyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QuerySupplyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySupplyRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyResponse() {
    return { amount: Long.UZERO };
}
export const QuerySupplyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return { amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return QuerySupplyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Long.fromValue(object.amount)
            : Long.UZERO;
        return message;
    },
};
function createBaseQueryNFTsRequest() {
    return { classId: "", owner: "", pagination: undefined };
}
export const QueryNFTsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryNFTsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNFTsRequest();
        message.classId = (_a = object.classId) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryNFTsResponse() {
    return { nfts: [], pagination: undefined };
}
export const QueryNFTsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nfts) {
            NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.nfts.push(NFT.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map((e) => NFT.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map((e) => e ? NFT.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryNFTsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryNFTsResponse();
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map((e) => NFT.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryNFTRequest() {
    return { classId: "", id: "" };
}
export const QueryNFTRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryNFTRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryNFTResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nft !== undefined) {
            NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.nft = NFT.decode(reader, reader.uint32());
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
        return { nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    create(base) {
        return QueryNFTResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryNFTResponse();
        message.nft = (object.nft !== undefined && object.nft !== null) ? NFT.fromPartial(object.nft) : undefined;
        return message;
    },
};
function createBaseQueryClassRequest() {
    return { classId: "" };
}
export const QueryClassRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return QueryClassRequest.fromPartial(base !== null && base !== void 0 ? base : {});
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
export const QueryClassResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.class !== undefined) {
            Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.class = Class.decode(reader, reader.uint32());
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
        return { class: isSet(object.class) ? Class.fromJSON(object.class) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
        return obj;
    },
    create(base) {
        return QueryClassResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class = (object.class !== undefined && object.class !== null) ? Class.fromPartial(object.class) : undefined;
        return message;
    },
};
function createBaseQueryClassesRequest() {
    return { pagination: undefined };
}
export const QueryClassesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryClassesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryClassesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryClassesResponse() {
    return { classes: [], pagination: undefined };
}
export const QueryClassesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.classes) {
            Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classes.push(Class.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map((e) => Class.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map((e) => e ? Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryClassesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClassesResponse();
        message.classes = ((_a = object.classes) === null || _a === void 0 ? void 0 : _a.map((e) => Class.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "coreum.nft.v1beta1.Query";
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
        const data = QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Balance", data);
        return promise.then((data) => QueryBalanceResponse.decode(_m0.Reader.create(data)));
    }
    Owner(request) {
        const data = QueryOwnerRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Owner", data);
        return promise.then((data) => QueryOwnerResponse.decode(_m0.Reader.create(data)));
    }
    Supply(request) {
        const data = QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Supply", data);
        return promise.then((data) => QuerySupplyResponse.decode(_m0.Reader.create(data)));
    }
    NFTs(request) {
        const data = QueryNFTsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NFTs", data);
        return promise.then((data) => QueryNFTsResponse.decode(_m0.Reader.create(data)));
    }
    NFT(request) {
        const data = QueryNFTRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NFT", data);
        return promise.then((data) => QueryNFTResponse.decode(_m0.Reader.create(data)));
    }
    Class(request) {
        const data = QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Class", data);
        return promise.then((data) => QueryClassResponse.decode(_m0.Reader.create(data)));
    }
    Classes(request) {
        const data = QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Classes", data);
        return promise.then((data) => QueryClassesResponse.decode(_m0.Reader.create(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
