/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse, } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Token } from "./token";
export const protobufPackage = "coreum.asset.ft.v1";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
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
function createBaseQueryTokenRequest() {
    return { denom: "" };
}
export const QueryTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
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
        return { denom: isSet(object.denom) ? String(object.denom) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return QueryTokenRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTokenRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryTokenResponse() {
    return { token: undefined };
}
export const QueryTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            Token.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.token = Token.decode(reader, reader.uint32());
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
            token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined &&
            (obj.token = message.token ? Token.toJSON(message.token) : undefined);
        return obj;
    },
    create(base) {
        return QueryTokenResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTokenResponse();
        message.token =
            object.token !== undefined && object.token !== null
                ? Token.fromPartial(object.token)
                : undefined;
        return message;
    },
};
function createBaseQueryTokensRequest() {
    return { pagination: undefined, issuer: "" };
}
export const QueryTokensRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.issuer = reader.string();
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
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        return obj;
    },
    create(base) {
        return QueryTokensRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTokensRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        message.issuer = object.issuer ?? "";
        return message;
    },
};
function createBaseQueryTokensResponse() {
    return { pagination: undefined, tokens: [] };
}
export const QueryTokensResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokens) {
            Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.tokens.push(Token.decode(reader, reader.uint32()));
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
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
            tokens: Array.isArray(object?.tokens)
                ? object.tokens.map((e) => Token.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => (e ? Token.toJSON(e) : undefined));
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    create(base) {
        return QueryTokensResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTokensResponse();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryFrozenBalancesRequest() {
    return { pagination: undefined, account: "" };
}
export const QueryFrozenBalancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
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
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return QueryFrozenBalancesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFrozenBalancesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseQueryFrozenBalancesResponse() {
    return { pagination: undefined, balances: [] };
}
export const QueryFrozenBalancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.balances.push(Coin.decode(reader, reader.uint32()));
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
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
            balances: Array.isArray(object?.balances)
                ? object.balances.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return QueryFrozenBalancesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFrozenBalancesResponse();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryFrozenBalanceRequest() {
    return { account: "", denom: "" };
}
export const QueryFrozenBalanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.denom = reader.string();
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
            account: isSet(object.account) ? String(object.account) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return QueryFrozenBalanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFrozenBalanceRequest();
        message.account = object.account ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryFrozenBalanceResponse() {
    return { balance: undefined };
}
export const QueryFrozenBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFrozenBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.balance = Coin.decode(reader, reader.uint32());
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
            balance: isSet(object.balance)
                ? Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    create(base) {
        return QueryFrozenBalanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFrozenBalanceResponse();
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseQueryWhitelistedBalancesRequest() {
    return { pagination: undefined, account: "" };
}
export const QueryWhitelistedBalancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
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
            pagination: isSet(object.pagination)
                ? PageRequest.fromJSON(object.pagination)
                : undefined,
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    create(base) {
        return QueryWhitelistedBalancesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistedBalancesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseQueryWhitelistedBalancesResponse() {
    return { pagination: undefined, balances: [] };
}
export const QueryWhitelistedBalancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.balances.push(Coin.decode(reader, reader.uint32()));
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
                ? PageResponse.fromJSON(object.pagination)
                : undefined,
            balances: Array.isArray(object?.balances)
                ? object.balances.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        if (message.balances) {
            obj.balances = message.balances.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    create(base) {
        return QueryWhitelistedBalancesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistedBalancesResponse();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryWhitelistedBalanceRequest() {
    return { account: "", denom: "" };
}
export const QueryWhitelistedBalanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.account = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.denom = reader.string();
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
            account: isSet(object.account) ? String(object.account) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    create(base) {
        return QueryWhitelistedBalanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistedBalanceRequest();
        message.account = object.account ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryWhitelistedBalanceResponse() {
    return { balance: undefined };
}
export const QueryWhitelistedBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.balance = Coin.decode(reader, reader.uint32());
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
            balance: isSet(object.balance)
                ? Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    create(base) {
        return QueryWhitelistedBalanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryWhitelistedBalanceResponse();
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
export class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "coreum.asset.ft.v1.Query";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Tokens = this.Tokens.bind(this);
        this.Token = this.Token.bind(this);
        this.FrozenBalances = this.FrozenBalances.bind(this);
        this.FrozenBalance = this.FrozenBalance.bind(this);
        this.WhitelistedBalances = this.WhitelistedBalances.bind(this);
        this.WhitelistedBalance = this.WhitelistedBalance.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
    }
    Tokens(request) {
        const data = QueryTokensRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Tokens", data);
        return promise.then((data) => QueryTokensResponse.decode(_m0.Reader.create(data)));
    }
    Token(request) {
        const data = QueryTokenRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Token", data);
        return promise.then((data) => QueryTokenResponse.decode(_m0.Reader.create(data)));
    }
    FrozenBalances(request) {
        const data = QueryFrozenBalancesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FrozenBalances", data);
        return promise.then((data) => QueryFrozenBalancesResponse.decode(_m0.Reader.create(data)));
    }
    FrozenBalance(request) {
        const data = QueryFrozenBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FrozenBalance", data);
        return promise.then((data) => QueryFrozenBalanceResponse.decode(_m0.Reader.create(data)));
    }
    WhitelistedBalances(request) {
        const data = QueryWhitelistedBalancesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WhitelistedBalances", data);
        return promise.then((data) => QueryWhitelistedBalancesResponse.decode(_m0.Reader.create(data)));
    }
    WhitelistedBalance(request) {
        const data = QueryWhitelistedBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WhitelistedBalance", data);
        return promise.then((data) => QueryWhitelistedBalanceResponse.decode(_m0.Reader.create(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
