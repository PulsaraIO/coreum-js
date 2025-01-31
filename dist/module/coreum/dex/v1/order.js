// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: coreum-protos/dex/order.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
export const protobufPackage = "coreum.dex.v1";
/** Side is order side. */
export var Side;
(function (Side) {
    /** SIDE_UNSPECIFIED - SIDE_UNSPECIFIED reserves the default value, to protect against unexpected settings. */
    Side[Side["SIDE_UNSPECIFIED"] = 0] = "SIDE_UNSPECIFIED";
    /** SIDE_BUY - SIDE_BUY means that the order is to buy base_denom quantity with the price. */
    Side[Side["SIDE_BUY"] = 1] = "SIDE_BUY";
    /** SIDE_SELL - SIDE_SELL means that the order is to sell base_denom quantity with the price. */
    Side[Side["SIDE_SELL"] = 2] = "SIDE_SELL";
    Side[Side["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Side || (Side = {}));
export function sideFromJSON(object) {
    switch (object) {
        case 0:
        case "SIDE_UNSPECIFIED":
            return Side.SIDE_UNSPECIFIED;
        case 1:
        case "SIDE_BUY":
            return Side.SIDE_BUY;
        case 2:
        case "SIDE_SELL":
            return Side.SIDE_SELL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Side.UNRECOGNIZED;
    }
}
export function sideToJSON(object) {
    switch (object) {
        case Side.SIDE_UNSPECIFIED:
            return "SIDE_UNSPECIFIED";
        case Side.SIDE_BUY:
            return "SIDE_BUY";
        case Side.SIDE_SELL:
            return "SIDE_SELL";
        case Side.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Type is order type. */
export var OrderType;
(function (OrderType) {
    /** ORDER_TYPE_UNSPECIFIED - order_type_unspecified reserves the default value, to protect against unexpected settings. */
    OrderType[OrderType["ORDER_TYPE_UNSPECIFIED"] = 0] = "ORDER_TYPE_UNSPECIFIED";
    /** ORDER_TYPE_LIMIT - order_type_limit means that the order is limit order. */
    OrderType[OrderType["ORDER_TYPE_LIMIT"] = 1] = "ORDER_TYPE_LIMIT";
    /** ORDER_TYPE_MARKET - limit order_type_market that the order is market order. */
    OrderType[OrderType["ORDER_TYPE_MARKET"] = 2] = "ORDER_TYPE_MARKET";
    OrderType[OrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderType || (OrderType = {}));
export function orderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_TYPE_UNSPECIFIED":
            return OrderType.ORDER_TYPE_UNSPECIFIED;
        case 1:
        case "ORDER_TYPE_LIMIT":
            return OrderType.ORDER_TYPE_LIMIT;
        case 2:
        case "ORDER_TYPE_MARKET":
            return OrderType.ORDER_TYPE_MARKET;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderType.UNRECOGNIZED;
    }
}
export function orderTypeToJSON(object) {
    switch (object) {
        case OrderType.ORDER_TYPE_UNSPECIFIED:
            return "ORDER_TYPE_UNSPECIFIED";
        case OrderType.ORDER_TYPE_LIMIT:
            return "ORDER_TYPE_LIMIT";
        case OrderType.ORDER_TYPE_MARKET:
            return "ORDER_TYPE_MARKET";
        case OrderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** TimeInForce is order time in force. */
export var TimeInForce;
(function (TimeInForce) {
    /** TIME_IN_FORCE_UNSPECIFIED - time_in_force_unspecified reserves the default value, to protect against unexpected settings. */
    TimeInForce[TimeInForce["TIME_IN_FORCE_UNSPECIFIED"] = 0] = "TIME_IN_FORCE_UNSPECIFIED";
    /** TIME_IN_FORCE_GTC - time_in_force_gtc means that the order remains active until it is fully executed or manually canceled. */
    TimeInForce[TimeInForce["TIME_IN_FORCE_GTC"] = 1] = "TIME_IN_FORCE_GTC";
    /**
     * TIME_IN_FORCE_IOC - time_in_force_ioc  means that order must be executed immediately, either in full or partially. Any portion of the
     *  order that cannot be filled immediately is canceled.
     */
    TimeInForce[TimeInForce["TIME_IN_FORCE_IOC"] = 2] = "TIME_IN_FORCE_IOC";
    /** TIME_IN_FORCE_FOK - time_in_force_fok means that order must be fully executed or canceled. */
    TimeInForce[TimeInForce["TIME_IN_FORCE_FOK"] = 3] = "TIME_IN_FORCE_FOK";
    TimeInForce[TimeInForce["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TimeInForce || (TimeInForce = {}));
export function timeInForceFromJSON(object) {
    switch (object) {
        case 0:
        case "TIME_IN_FORCE_UNSPECIFIED":
            return TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
        case 1:
        case "TIME_IN_FORCE_GTC":
            return TimeInForce.TIME_IN_FORCE_GTC;
        case 2:
        case "TIME_IN_FORCE_IOC":
            return TimeInForce.TIME_IN_FORCE_IOC;
        case 3:
        case "TIME_IN_FORCE_FOK":
            return TimeInForce.TIME_IN_FORCE_FOK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TimeInForce.UNRECOGNIZED;
    }
}
export function timeInForceToJSON(object) {
    switch (object) {
        case TimeInForce.TIME_IN_FORCE_UNSPECIFIED:
            return "TIME_IN_FORCE_UNSPECIFIED";
        case TimeInForce.TIME_IN_FORCE_GTC:
            return "TIME_IN_FORCE_GTC";
        case TimeInForce.TIME_IN_FORCE_IOC:
            return "TIME_IN_FORCE_IOC";
        case TimeInForce.TIME_IN_FORCE_FOK:
            return "TIME_IN_FORCE_FOK";
        case TimeInForce.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseGoodTil() {
    return { goodTilBlockHeight: 0, goodTilBlockTime: undefined };
}
export const GoodTil = {
    encode(message, writer = new BinaryWriter()) {
        if (message.goodTilBlockHeight !== 0) {
            writer.uint32(8).uint64(message.goodTilBlockHeight);
        }
        if (message.goodTilBlockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.goodTilBlockTime), writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGoodTil();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.goodTilBlockHeight = longToNumber(reader.uint64());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.goodTilBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            goodTilBlockHeight: isSet(object.goodTilBlockHeight)
                ? globalThis.Number(object.goodTilBlockHeight)
                : 0,
            goodTilBlockTime: isSet(object.goodTilBlockTime)
                ? fromJsonTimestamp(object.goodTilBlockTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.goodTilBlockHeight !== 0) {
            obj.goodTilBlockHeight = Math.round(message.goodTilBlockHeight);
        }
        if (message.goodTilBlockTime !== undefined) {
            obj.goodTilBlockTime = message.goodTilBlockTime.toISOString();
        }
        return obj;
    },
    create(base) {
        return GoodTil.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGoodTil();
        message.goodTilBlockHeight = object.goodTilBlockHeight ?? 0;
        message.goodTilBlockTime = object.goodTilBlockTime ?? undefined;
        return message;
    },
};
function createBaseCancelGoodTil() {
    return { creator: "", orderSequence: 0 };
}
export const CancelGoodTil = {
    encode(message, writer = new BinaryWriter()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.orderSequence !== 0) {
            writer.uint32(16).uint64(message.orderSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelGoodTil();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.orderSequence = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
            orderSequence: isSet(object.orderSequence)
                ? globalThis.Number(object.orderSequence)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.orderSequence !== 0) {
            obj.orderSequence = Math.round(message.orderSequence);
        }
        return obj;
    },
    create(base) {
        return CancelGoodTil.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCancelGoodTil();
        message.creator = object.creator ?? "";
        message.orderSequence = object.orderSequence ?? 0;
        return message;
    },
};
function createBaseOrder() {
    return {
        creator: "",
        type: 0,
        id: "",
        sequence: 0,
        baseDenom: "",
        quoteDenom: "",
        price: "",
        quantity: "",
        side: 0,
        remainingQuantity: "",
        remainingBalance: "",
        goodTil: undefined,
        timeInForce: 0,
        reserve: undefined,
    };
}
export const Order = {
    encode(message, writer = new BinaryWriter()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.sequence !== 0) {
            writer.uint32(32).uint64(message.sequence);
        }
        if (message.baseDenom !== "") {
            writer.uint32(42).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(50).string(message.quoteDenom);
        }
        if (message.price !== "") {
            writer.uint32(58).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(66).string(message.quantity);
        }
        if (message.side !== 0) {
            writer.uint32(72).int32(message.side);
        }
        if (message.remainingQuantity !== "") {
            writer.uint32(82).string(message.remainingQuantity);
        }
        if (message.remainingBalance !== "") {
            writer.uint32(90).string(message.remainingBalance);
        }
        if (message.goodTil !== undefined) {
            GoodTil.encode(message.goodTil, writer.uint32(98).fork()).join();
        }
        if (message.timeInForce !== 0) {
            writer.uint32(104).int32(message.timeInForce);
        }
        if (message.reserve !== undefined) {
            Coin.encode(message.reserve, writer.uint32(114).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.creator = reader.string();
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
                    if (tag !== 32) {
                        break;
                    }
                    message.sequence = longToNumber(reader.uint64());
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.baseDenom = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.quoteDenom = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 72) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.remainingQuantity = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.remainingBalance = reader.string();
                    continue;
                }
                case 12: {
                    if (tag !== 98) {
                        break;
                    }
                    message.goodTil = GoodTil.decode(reader, reader.uint32());
                    continue;
                }
                case 13: {
                    if (tag !== 104) {
                        break;
                    }
                    message.timeInForce = reader.int32();
                    continue;
                }
                case 14: {
                    if (tag !== 114) {
                        break;
                    }
                    message.reserve = Coin.decode(reader, reader.uint32());
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
            creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
            type: isSet(object.type) ? orderTypeFromJSON(object.type) : 0,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            sequence: isSet(object.sequence) ? globalThis.Number(object.sequence) : 0,
            baseDenom: isSet(object.baseDenom)
                ? globalThis.String(object.baseDenom)
                : "",
            quoteDenom: isSet(object.quoteDenom)
                ? globalThis.String(object.quoteDenom)
                : "",
            price: isSet(object.price) ? globalThis.String(object.price) : "",
            quantity: isSet(object.quantity)
                ? globalThis.String(object.quantity)
                : "",
            side: isSet(object.side) ? sideFromJSON(object.side) : 0,
            remainingQuantity: isSet(object.remainingQuantity)
                ? globalThis.String(object.remainingQuantity)
                : "",
            remainingBalance: isSet(object.remainingBalance)
                ? globalThis.String(object.remainingBalance)
                : "",
            goodTil: isSet(object.goodTil)
                ? GoodTil.fromJSON(object.goodTil)
                : undefined,
            timeInForce: isSet(object.timeInForce)
                ? timeInForceFromJSON(object.timeInForce)
                : 0,
            reserve: isSet(object.reserve)
                ? Coin.fromJSON(object.reserve)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.type !== 0) {
            obj.type = orderTypeToJSON(message.type);
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sequence !== 0) {
            obj.sequence = Math.round(message.sequence);
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
        if (message.remainingQuantity !== "") {
            obj.remainingQuantity = message.remainingQuantity;
        }
        if (message.remainingBalance !== "") {
            obj.remainingBalance = message.remainingBalance;
        }
        if (message.goodTil !== undefined) {
            obj.goodTil = GoodTil.toJSON(message.goodTil);
        }
        if (message.timeInForce !== 0) {
            obj.timeInForce = timeInForceToJSON(message.timeInForce);
        }
        if (message.reserve !== undefined) {
            obj.reserve = Coin.toJSON(message.reserve);
        }
        return obj;
    },
    create(base) {
        return Order.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrder();
        message.creator = object.creator ?? "";
        message.type = object.type ?? 0;
        message.id = object.id ?? "";
        message.sequence = object.sequence ?? 0;
        message.baseDenom = object.baseDenom ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        message.side = object.side ?? 0;
        message.remainingQuantity = object.remainingQuantity ?? "";
        message.remainingBalance = object.remainingBalance ?? "";
        message.goodTil =
            object.goodTil !== undefined && object.goodTil !== null
                ? GoodTil.fromPartial(object.goodTil)
                : undefined;
        message.timeInForce = object.timeInForce ?? 0;
        message.reserve =
            object.reserve !== undefined && object.reserve !== null
                ? Coin.fromPartial(object.reserve)
                : undefined;
        return message;
    },
};
function createBaseOrderData() {
    return {
        orderId: "",
        orderBookId: 0,
        price: "",
        quantity: "",
        side: 0,
        goodTil: undefined,
        reserve: undefined,
    };
}
export const OrderData = {
    encode(message, writer = new BinaryWriter()) {
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        if (message.orderBookId !== 0) {
            writer.uint32(16).uint32(message.orderBookId);
        }
        if (message.price !== "") {
            writer.uint32(26).string(message.price);
        }
        if (message.quantity !== "") {
            writer.uint32(34).string(message.quantity);
        }
        if (message.side !== 0) {
            writer.uint32(40).int32(message.side);
        }
        if (message.goodTil !== undefined) {
            GoodTil.encode(message.goodTil, writer.uint32(50).fork()).join();
        }
        if (message.reserve !== undefined) {
            Coin.encode(message.reserve, writer.uint32(58).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orderId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.orderBookId = reader.uint32();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.quantity = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.goodTil = GoodTil.decode(reader, reader.uint32());
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.reserve = Coin.decode(reader, reader.uint32());
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
            orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
            orderBookId: isSet(object.orderBookId)
                ? globalThis.Number(object.orderBookId)
                : 0,
            price: isSet(object.price) ? globalThis.String(object.price) : "",
            quantity: isSet(object.quantity)
                ? globalThis.String(object.quantity)
                : "",
            side: isSet(object.side) ? sideFromJSON(object.side) : 0,
            goodTil: isSet(object.goodTil)
                ? GoodTil.fromJSON(object.goodTil)
                : undefined,
            reserve: isSet(object.reserve)
                ? Coin.fromJSON(object.reserve)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderId !== "") {
            obj.orderId = message.orderId;
        }
        if (message.orderBookId !== 0) {
            obj.orderBookId = Math.round(message.orderBookId);
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
        if (message.reserve !== undefined) {
            obj.reserve = Coin.toJSON(message.reserve);
        }
        return obj;
    },
    create(base) {
        return OrderData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrderData();
        message.orderId = object.orderId ?? "";
        message.orderBookId = object.orderBookId ?? 0;
        message.price = object.price ?? "";
        message.quantity = object.quantity ?? "";
        message.side = object.side ?? 0;
        message.goodTil =
            object.goodTil !== undefined && object.goodTil !== null
                ? GoodTil.fromPartial(object.goodTil)
                : undefined;
        message.reserve =
            object.reserve !== undefined && object.reserve !== null
                ? Coin.fromPartial(object.reserve)
                : undefined;
        return message;
    },
};
function createBaseOrderBookData() {
    return { baseDenom: "", quoteDenom: "" };
}
export const OrderBookData = {
    encode(message, writer = new BinaryWriter()) {
        if (message.baseDenom !== "") {
            writer.uint32(10).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(18).string(message.quoteDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.baseDenom = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.quoteDenom = reader.string();
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
            baseDenom: isSet(object.baseDenom)
                ? globalThis.String(object.baseDenom)
                : "",
            quoteDenom: isSet(object.quoteDenom)
                ? globalThis.String(object.quoteDenom)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseDenom !== "") {
            obj.baseDenom = message.baseDenom;
        }
        if (message.quoteDenom !== "") {
            obj.quoteDenom = message.quoteDenom;
        }
        return obj;
    },
    create(base) {
        return OrderBookData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrderBookData();
        message.baseDenom = object.baseDenom ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        return message;
    },
};
function createBaseOrderBookRecord() {
    return {
        orderBookId: 0,
        side: 0,
        price: "",
        orderSequence: 0,
        orderId: "",
        accountNumber: 0,
        remainingQuantity: "",
        remainingBalance: "",
    };
}
export const OrderBookRecord = {
    encode(message, writer = new BinaryWriter()) {
        if (message.orderBookId !== 0) {
            writer.uint32(8).uint32(message.orderBookId);
        }
        if (message.side !== 0) {
            writer.uint32(16).int32(message.side);
        }
        if (message.price !== "") {
            writer.uint32(26).string(message.price);
        }
        if (message.orderSequence !== 0) {
            writer.uint32(32).uint64(message.orderSequence);
        }
        if (message.orderId !== "") {
            writer.uint32(42).string(message.orderId);
        }
        if (message.accountNumber !== 0) {
            writer.uint32(48).uint64(message.accountNumber);
        }
        if (message.remainingQuantity !== "") {
            writer.uint32(58).string(message.remainingQuantity);
        }
        if (message.remainingBalance !== "") {
            writer.uint32(66).string(message.remainingBalance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.orderBookId = reader.uint32();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.price = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.orderSequence = longToNumber(reader.uint64());
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.orderId = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.accountNumber = longToNumber(reader.uint64());
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.remainingQuantity = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.remainingBalance = reader.string();
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
            orderBookId: isSet(object.orderBookId)
                ? globalThis.Number(object.orderBookId)
                : 0,
            side: isSet(object.side) ? sideFromJSON(object.side) : 0,
            price: isSet(object.price) ? globalThis.String(object.price) : "",
            orderSequence: isSet(object.orderSequence)
                ? globalThis.Number(object.orderSequence)
                : 0,
            orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
            accountNumber: isSet(object.accountNumber)
                ? globalThis.Number(object.accountNumber)
                : 0,
            remainingQuantity: isSet(object.remainingQuantity)
                ? globalThis.String(object.remainingQuantity)
                : "",
            remainingBalance: isSet(object.remainingBalance)
                ? globalThis.String(object.remainingBalance)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderBookId !== 0) {
            obj.orderBookId = Math.round(message.orderBookId);
        }
        if (message.side !== 0) {
            obj.side = sideToJSON(message.side);
        }
        if (message.price !== "") {
            obj.price = message.price;
        }
        if (message.orderSequence !== 0) {
            obj.orderSequence = Math.round(message.orderSequence);
        }
        if (message.orderId !== "") {
            obj.orderId = message.orderId;
        }
        if (message.accountNumber !== 0) {
            obj.accountNumber = Math.round(message.accountNumber);
        }
        if (message.remainingQuantity !== "") {
            obj.remainingQuantity = message.remainingQuantity;
        }
        if (message.remainingBalance !== "") {
            obj.remainingBalance = message.remainingBalance;
        }
        return obj;
    },
    create(base) {
        return OrderBookRecord.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrderBookRecord();
        message.orderBookId = object.orderBookId ?? 0;
        message.side = object.side ?? 0;
        message.price = object.price ?? "";
        message.orderSequence = object.orderSequence ?? 0;
        message.orderId = object.orderId ?? "";
        message.accountNumber = object.accountNumber ?? 0;
        message.remainingQuantity = object.remainingQuantity ?? "";
        message.remainingBalance = object.remainingBalance ?? "";
        return message;
    },
};
function createBaseOrderBookRecordData() {
    return {
        orderId: "",
        accountNumber: 0,
        remainingQuantity: "",
        remainingBalance: "",
    };
}
export const OrderBookRecordData = {
    encode(message, writer = new BinaryWriter()) {
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        if (message.accountNumber !== 0) {
            writer.uint32(16).uint64(message.accountNumber);
        }
        if (message.remainingQuantity !== "") {
            writer.uint32(26).string(message.remainingQuantity);
        }
        if (message.remainingBalance !== "") {
            writer.uint32(34).string(message.remainingBalance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookRecordData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orderId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.accountNumber = longToNumber(reader.uint64());
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.remainingQuantity = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.remainingBalance = reader.string();
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
            orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
            accountNumber: isSet(object.accountNumber)
                ? globalThis.Number(object.accountNumber)
                : 0,
            remainingQuantity: isSet(object.remainingQuantity)
                ? globalThis.String(object.remainingQuantity)
                : "",
            remainingBalance: isSet(object.remainingBalance)
                ? globalThis.String(object.remainingBalance)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderId !== "") {
            obj.orderId = message.orderId;
        }
        if (message.accountNumber !== 0) {
            obj.accountNumber = Math.round(message.accountNumber);
        }
        if (message.remainingQuantity !== "") {
            obj.remainingQuantity = message.remainingQuantity;
        }
        if (message.remainingBalance !== "") {
            obj.remainingBalance = message.remainingBalance;
        }
        return obj;
    },
    create(base) {
        return OrderBookRecordData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOrderBookRecordData();
        message.orderId = object.orderId ?? "";
        message.accountNumber = object.accountNumber ?? 0;
        message.remainingQuantity = object.remainingQuantity ?? "";
        message.remainingBalance = object.remainingBalance ?? "";
        return message;
    },
};
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(int64) {
    const num = globalThis.Number(int64.toString());
    if (num > globalThis.Number.MAX_SAFE_INTEGER) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (num < globalThis.Number.MIN_SAFE_INTEGER) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return num;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
