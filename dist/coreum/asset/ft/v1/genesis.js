"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const token_1 = require("./token");
exports.protobufPackage = "coreum.asset.ft.v1";
function createBaseGenesisState() {
    return { params: undefined, tokens: [], frozenBalances: [], whitelistedBalances: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokens) {
            token_1.Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.frozenBalances) {
            exports.Balance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.whitelistedBalances) {
            exports.Balance.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.tokens.push(token_1.Token.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.frozenBalances.push(exports.Balance.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.whitelistedBalances.push(exports.Balance.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            tokens: Array.isArray(object === null || object === void 0 ? void 0 : object.tokens) ? object.tokens.map((e) => token_1.Token.fromJSON(e)) : [],
            frozenBalances: Array.isArray(object === null || object === void 0 ? void 0 : object.frozenBalances)
                ? object.frozenBalances.map((e) => exports.Balance.fromJSON(e))
                : [],
            whitelistedBalances: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedBalances)
                ? object.whitelistedBalances.map((e) => exports.Balance.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => e ? token_1.Token.toJSON(e) : undefined);
        }
        else {
            obj.tokens = [];
        }
        if (message.frozenBalances) {
            obj.frozenBalances = message.frozenBalances.map((e) => e ? exports.Balance.toJSON(e) : undefined);
        }
        else {
            obj.frozenBalances = [];
        }
        if (message.whitelistedBalances) {
            obj.whitelistedBalances = message.whitelistedBalances.map((e) => e ? exports.Balance.toJSON(e) : undefined);
        }
        else {
            obj.whitelistedBalances = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.tokens = ((_a = object.tokens) === null || _a === void 0 ? void 0 : _a.map((e) => token_1.Token.fromPartial(e))) || [];
        message.frozenBalances = ((_b = object.frozenBalances) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Balance.fromPartial(e))) || [];
        message.whitelistedBalances = ((_c = object.whitelistedBalances) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Balance.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBalance() {
    return { address: "", coins: [] };
}
exports.Balance = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    create(base) {
        return exports.Balance.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBalance();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
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
