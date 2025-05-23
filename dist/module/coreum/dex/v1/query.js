// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: coreum-protos/dex/query.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { PageRequest, PageResponse, } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Order, OrderBookData, sideFromJSON, sideToJSON } from "./order";
import { Params } from "./params";
export const protobufPackage = "coreum.dex.v1";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryOrderRequest() {
    return { creator: "", id: "" };
}
export const QueryOrderRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderRequest();
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
            creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return QueryOrderRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderRequest();
        message.creator = object.creator ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryOrderResponse() {
    return { order: undefined };
}
export const QueryOrderResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.order = Order.decode(reader, reader.uint32());
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
            order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.order !== undefined) {
            obj.order = Order.toJSON(message.order);
        }
        return obj;
    },
    create(base) {
        return QueryOrderResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderResponse();
        message.order =
            object.order !== undefined && object.order !== null
                ? Order.fromPartial(object.order)
                : undefined;
        return message;
    },
};
function createBaseQueryOrdersRequest() {
    return { creator: "", pagination: undefined };
}
export const QueryOrdersRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersRequest();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryOrdersRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrdersRequest();
        message.creator = object.creator ?? "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOrdersResponse() {
    return { orders: [], pagination: undefined };
}
export const QueryOrdersResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(Order.decode(reader, reader.uint32()));
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            orders: globalThis.Array.isArray(object?.orders)
                ? object.orders.map((e) => Order.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders?.length) {
            obj.orders = message.orders.map((e) => Order.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryOrdersResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrdersResponse();
        message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOrderBooksRequest() {
    return { pagination: undefined };
}
export const QueryOrderBooksRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderBooksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryOrderBooksRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderBooksRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOrderBooksResponse() {
    return { orderBooks: [], pagination: undefined };
}
export const QueryOrderBooksResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.orderBooks) {
            OrderBookData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderBooksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orderBooks.push(OrderBookData.decode(reader, reader.uint32()));
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            orderBooks: globalThis.Array.isArray(object?.orderBooks)
                ? object.orderBooks.map((e) => OrderBookData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orderBooks?.length) {
            obj.orderBooks = message.orderBooks.map((e) => OrderBookData.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryOrderBooksResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderBooksResponse();
        message.orderBooks =
            object.orderBooks?.map((e) => OrderBookData.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOrderBookOrdersRequest() {
    return { baseDenom: "", quoteDenom: "", side: 0, pagination: undefined };
}
export const QueryOrderBookOrdersRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.baseDenom !== "") {
            writer.uint32(10).string(message.baseDenom);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(18).string(message.quoteDenom);
        }
        if (message.side !== 0) {
            writer.uint32(24).int32(message.side);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderBookOrdersRequest();
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
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.side = reader.int32();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            side: isSet(object.side) ? sideFromJSON(object.side) : 0,
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
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
        if (message.side !== 0) {
            obj.side = sideToJSON(message.side);
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryOrderBookOrdersRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderBookOrdersRequest();
        message.baseDenom = object.baseDenom ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.side = object.side ?? 0;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryOrderBookOrdersResponse() {
    return { orders: [], pagination: undefined };
}
export const QueryOrderBookOrdersResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderBookOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.orders.push(Order.decode(reader, reader.uint32()));
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            orders: globalThis.Array.isArray(object?.orders)
                ? object.orders.map((e) => Order.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders?.length) {
            obj.orders = message.orders.map((e) => Order.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryOrderBookOrdersResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryOrderBookOrdersResponse();
        message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAccountDenomOrdersCountRequest() {
    return { account: "", denom: "" };
}
export const QueryAccountDenomOrdersCountRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountDenomOrdersCountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
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
            account: isSet(object.account) ? globalThis.String(object.account) : "",
            denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.account !== "") {
            obj.account = message.account;
        }
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        return obj;
    },
    create(base) {
        return QueryAccountDenomOrdersCountRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountDenomOrdersCountRequest();
        message.account = object.account ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryAccountDenomOrdersCountResponse() {
    return { count: 0 };
}
export const QueryAccountDenomOrdersCountResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.count !== 0) {
            writer.uint32(8).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountDenomOrdersCountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.count = longToNumber(reader.uint64());
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
            count: isSet(object.count) ? globalThis.Number(object.count) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        return obj;
    },
    create(base) {
        return QueryAccountDenomOrdersCountResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountDenomOrdersCountResponse();
        message.count = object.count ?? 0;
        return message;
    },
};
export const QueryServiceName = "coreum.dex.v1.Query";
export class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Order = this.Order.bind(this);
        this.Orders = this.Orders.bind(this);
        this.OrderBooks = this.OrderBooks.bind(this);
        this.OrderBookOrders = this.OrderBookOrders.bind(this);
        this.AccountDenomOrdersCount = this.AccountDenomOrdersCount.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    Order(request) {
        const data = QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Order", data);
        return promise.then((data) => QueryOrderResponse.decode(new BinaryReader(data)));
    }
    Orders(request) {
        const data = QueryOrdersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Orders", data);
        return promise.then((data) => QueryOrdersResponse.decode(new BinaryReader(data)));
    }
    OrderBooks(request) {
        const data = QueryOrderBooksRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "OrderBooks", data);
        return promise.then((data) => QueryOrderBooksResponse.decode(new BinaryReader(data)));
    }
    OrderBookOrders(request) {
        const data = QueryOrderBookOrdersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "OrderBookOrders", data);
        return promise.then((data) => QueryOrderBookOrdersResponse.decode(new BinaryReader(data)));
    }
    AccountDenomOrdersCount(request) {
        const data = QueryAccountDenomOrdersCountRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AccountDenomOrdersCount", data);
        return promise.then((data) => QueryAccountDenomOrdersCountResponse.decode(new BinaryReader(data)));
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
