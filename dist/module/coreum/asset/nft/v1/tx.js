/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { classFeatureFromJSON, classFeatureToJSON } from "./nft";
export const protobufPackage = "coreum.asset.nft.v1";
function createBaseMsgIssueClass() {
    return {
        issuer: "",
        symbol: "",
        name: "",
        description: "",
        uri: "",
        uriHash: "",
        data: undefined,
        features: [],
        royaltyRate: "",
    };
}
export const MsgIssueClass = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
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
            Any.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        writer.uint32(66).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.royaltyRate !== "") {
            writer.uint32(74).string(message.royaltyRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIssueClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.name = reader.string();
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
                    message.data = Any.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag == 64) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag == 66) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.royaltyRate = reader.string();
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            features: Array.isArray(object?.features)
                ? object.features.map((e) => classFeatureFromJSON(e))
                : [],
            royaltyRate: isSet(object.royaltyRate) ? String(object.royaltyRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.data !== undefined &&
            (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        if (message.features) {
            obj.features = message.features.map((e) => classFeatureToJSON(e));
        }
        else {
            obj.features = [];
        }
        message.royaltyRate !== undefined &&
            (obj.royaltyRate = message.royaltyRate);
        return obj;
    },
    create(base) {
        return MsgIssueClass.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgIssueClass();
        message.issuer = object.issuer ?? "";
        message.symbol = object.symbol ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        message.data =
            object.data !== undefined && object.data !== null
                ? Any.fromPartial(object.data)
                : undefined;
        message.features = object.features?.map((e) => e) || [];
        message.royaltyRate = object.royaltyRate ?? "";
        return message;
    },
};
function createBaseMsgMint() {
    return {
        sender: "",
        classId: "",
        id: "",
        uri: "",
        uriHash: "",
        data: undefined,
        recipient: "",
    };
}
export const MsgMint = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.uri !== "") {
            writer.uint32(34).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(42).string(message.uriHash);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(50).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(58).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.uriHash = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.data = Any.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.recipient = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.data !== undefined &&
            (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    create(base) {
        return MsgMint.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.sender = object.sender ?? "";
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        message.data =
            object.data !== undefined && object.data !== null
                ? Any.fromPartial(object.data)
                : undefined;
        message.recipient = object.recipient ?? "";
        return message;
    },
};
function createBaseMsgBurn() {
    return { sender: "", classId: "", id: "" };
}
export const MsgBurn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return MsgBurn.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.sender = object.sender ?? "";
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMsgFreeze() {
    return { sender: "", classId: "", id: "" };
}
export const MsgFreeze = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFreeze();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return MsgFreeze.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgFreeze();
        message.sender = object.sender ?? "";
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMsgUnfreeze() {
    return { sender: "", classId: "", id: "" };
}
export const MsgUnfreeze = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnfreeze();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return MsgUnfreeze.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUnfreeze();
        message.sender = object.sender ?? "";
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMsgAddToWhitelist() {
    return { sender: "", classId: "", id: "", account: "" };
}
export const MsgAddToWhitelist = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.account !== "") {
            writer.uint32(34).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToWhitelist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.account = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return MsgAddToWhitelist.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgAddToWhitelist();
        message.sender = object.sender ?? "";
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseMsgRemoveFromWhitelist() {
    return { sender: "", classId: "", id: "", account: "" };
}
export const MsgRemoveFromWhitelist = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.account !== "") {
            writer.uint32(34).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveFromWhitelist();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.account = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return MsgRemoveFromWhitelist.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveFromWhitelist();
        message.sender = object.sender ?? "";
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseEmptyResponse() {
    return {};
}
export const EmptyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyResponse();
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
        return EmptyResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseEmptyResponse();
        return message;
    },
};
export class MsgClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "coreum.asset.nft.v1.Msg";
        this.rpc = rpc;
        this.IssueClass = this.IssueClass.bind(this);
        this.Mint = this.Mint.bind(this);
        this.Burn = this.Burn.bind(this);
        this.Freeze = this.Freeze.bind(this);
        this.Unfreeze = this.Unfreeze.bind(this);
        this.AddToWhitelist = this.AddToWhitelist.bind(this);
        this.RemoveFromWhitelist = this.RemoveFromWhitelist.bind(this);
    }
    IssueClass(request) {
        const data = MsgIssueClass.encode(request).finish();
        const promise = this.rpc.request(this.service, "IssueClass", data);
        return promise.then((data) => EmptyResponse.decode(_m0.Reader.create(data)));
    }
    Mint(request) {
        const data = MsgMint.encode(request).finish();
        const promise = this.rpc.request(this.service, "Mint", data);
        return promise.then((data) => EmptyResponse.decode(_m0.Reader.create(data)));
    }
    Burn(request) {
        const data = MsgBurn.encode(request).finish();
        const promise = this.rpc.request(this.service, "Burn", data);
        return promise.then((data) => EmptyResponse.decode(_m0.Reader.create(data)));
    }
    Freeze(request) {
        const data = MsgFreeze.encode(request).finish();
        const promise = this.rpc.request(this.service, "Freeze", data);
        return promise.then((data) => EmptyResponse.decode(_m0.Reader.create(data)));
    }
    Unfreeze(request) {
        const data = MsgUnfreeze.encode(request).finish();
        const promise = this.rpc.request(this.service, "Unfreeze", data);
        return promise.then((data) => EmptyResponse.decode(_m0.Reader.create(data)));
    }
    AddToWhitelist(request) {
        const data = MsgAddToWhitelist.encode(request).finish();
        const promise = this.rpc.request(this.service, "AddToWhitelist", data);
        return promise.then((data) => EmptyResponse.decode(_m0.Reader.create(data)));
    }
    RemoveFromWhitelist(request) {
        const data = MsgRemoveFromWhitelist.encode(request).finish();
        const promise = this.rpc.request(this.service, "RemoveFromWhitelist", data);
        return promise.then((data) => EmptyResponse.decode(_m0.Reader.create(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
