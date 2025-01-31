// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: coreum-protos/dex/tx.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { GoodTil, orderTypeFromJSON, orderTypeToJSON, sideFromJSON, sideToJSON, timeInForceFromJSON, timeInForceToJSON, } from "./order";
import { Params } from "./params";
export const protobufPackage = "coreum.dex.v1";
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
export const MsgUpdateParams = {
    encode(message, writer = new BinaryWriter()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return MsgUpdateParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgPlaceOrder() {
    return {
        sender: "",
        type: 0,
        id: "",
        baseDenom: "",
        quoteDenom: "",
        price: "",
        quantity: "",
        side: 0,
        goodTil: undefined,
        timeInForce: 0,
    };
}
export const MsgPlaceOrder = {
    encode(message, writer = new BinaryWriter()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.baseDenom !== "") {
            writer.uint32(34).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(42).string(message.quoteDenom);
        }
        if (message.price !== "") {
            writer.uint32(50).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(58).string(message.quantity);
        }
        if (message.side !== 0) {
            writer.uint32(64).int32(message.side);
        }
        if (message.goodTil !== undefined) {
            GoodTil.encode(message.goodTil, writer.uint32(74).fork()).join();
        }
        if (message.timeInForce !== 0) {
            writer.uint32(80).int32(message.timeInForce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.baseDenom = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 64) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.goodTil = GoodTil.decode(reader, reader.uint32());
                    continue;
                }
                case 10: {
                    if (tag !== 80) {
                        break;
                    }
                    message.timeInForce = reader.int32();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
            type: isSet(object.type) ? orderTypeFromJSON(object.type) : 0,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            baseDenom: isSet(object.baseDenom) ? globalThis.String(object.baseDenom) : "",
            quoteDenom: isSet(object.quoteDenom) ? globalThis.String(object.quoteDenom) : "",
            price: isSet(object.price) ? globalThis.String(object.price) : "",
            quantity: isSet(object.quantity) ? globalThis.String(object.quantity) : "",
            side: isSet(object.side) ? sideFromJSON(object.side) : 0,
            goodTil: isSet(object.goodTil) ? GoodTil.fromJSON(object.goodTil) : undefined,
            timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sender !== "") {
            obj.sender = message.sender;
        }
        if (message.type !== 0) {
            obj.type = orderTypeToJSON(message.type);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.baseDenom !== "") {
            obj.baseDenom = message.baseDenom;
        }
        if (message.quoteDenom !== "") {
            obj.quoteDenom = message.quoteDenom;
        }
        if (message.price !== "") {
            obj.price = message.price;
        }
        if (message.quantity !== "") {
            obj.quantity = message.quantity;
        }
        if (message.side !== 0) {
            obj.side = sideToJSON(message.side);
        }
        if (message.goodTil !== undefined) {
            obj.goodTil = GoodTil.toJSON(message.goodTil);
        }
        if (message.timeInForce !== 0) {
            obj.timeInForce = timeInForceToJSON(message.timeInForce);
        }
        return obj;
    },
    create(base) {
        return MsgPlaceOrder.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPlaceOrder();
        message.sender = object.sender ?? "";
        message.type = object.type ?? 0;
        message.id = object.id ?? "";
        message.baseDenom = object.baseDenom ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        message.side = object.side ?? 0;
        message.goodTil = (object.goodTil !== undefined && object.goodTil !== null)
            ? GoodTil.fromPartial(object.goodTil)
            : undefined;
        message.timeInForce = object.timeInForce ?? 0;
        return message;
    },
};
function createBaseMsgCancelOrder() {
    return { sender: "", id: "" };
}
export const MsgCancelOrder = {
    encode(message, writer = new BinaryWriter()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sender !== "") {
            obj.sender = message.sender;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return MsgCancelOrder.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCancelOrder();
        message.sender = object.sender ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMsgCancelOrdersByDenom() {
    return { sender: "", account: "", denom: "" };
}
export const MsgCancelOrdersByDenom = {
    encode(message, writer = new BinaryWriter()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrdersByDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
            account: isSet(object.account) ? globalThis.String(object.account) : "",
            denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sender !== "") {
            obj.sender = message.sender;
        }
        if (message.account !== "") {
            obj.account = message.account;
        }
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        return obj;
    },
    create(base) {
        return MsgCancelOrdersByDenom.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCancelOrdersByDenom();
        message.sender = object.sender ?? "";
        message.account = object.account ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseEmptyResponse() {
    return {};
}
export const EmptyResponse = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
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
export const MsgServiceName = "coreum.dex.v1.Msg";
export class MsgClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.PlaceOrder = this.PlaceOrder.bind(this);
        this.CancelOrder = this.CancelOrder.bind(this);
        this.CancelOrdersByDenom = this.CancelOrdersByDenom.bind(this);
    }
    UpdateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => EmptyResponse.decode(new BinaryReader(data)));
    }
    PlaceOrder(request) {
        const data = MsgPlaceOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "PlaceOrder", data);
        return promise.then((data) => EmptyResponse.decode(new BinaryReader(data)));
    }
    CancelOrder(request) {
        const data = MsgCancelOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelOrder", data);
        return promise.then((data) => EmptyResponse.decode(new BinaryReader(data)));
    }
    CancelOrdersByDenom(request) {
        const data = MsgCancelOrdersByDenom.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelOrdersByDenom", data);
        return promise.then((data) => EmptyResponse.decode(new BinaryReader(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
