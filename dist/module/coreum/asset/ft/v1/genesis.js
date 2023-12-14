/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Token } from "./token";
export const protobufPackage = "coreum.asset.ft.v1";
function createBaseGenesisState() {
    return { params: undefined, tokens: [], frozenBalances: [], whitelistedBalances: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokens) {
            Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.frozenBalances) {
            Balance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.whitelistedBalances) {
            Balance.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.tokens.push(Token.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.frozenBalances.push(Balance.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.whitelistedBalances.push(Balance.decode(reader, reader.uint32()));
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
            tokens: Array.isArray(object?.tokens) ? object.tokens.map((e) => Token.fromJSON(e)) : [],
            frozenBalances: Array.isArray(object?.frozenBalances)
                ? object.frozenBalances.map((e) => Balance.fromJSON(e))
                : [],
            whitelistedBalances: Array.isArray(object?.whitelistedBalances)
                ? object.whitelistedBalances.map((e) => Balance.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => e ? Token.toJSON(e) : undefined);
        }
        else {
            obj.tokens = [];
        }
        if (message.frozenBalances) {
            obj.frozenBalances = message.frozenBalances.map((e) => e ? Balance.toJSON(e) : undefined);
        }
        else {
            obj.frozenBalances = [];
        }
        if (message.whitelistedBalances) {
            obj.whitelistedBalances = message.whitelistedBalances.map((e) => e ? Balance.toJSON(e) : undefined);
        }
        else {
            obj.whitelistedBalances = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
        message.frozenBalances = object.frozenBalances?.map((e) => Balance.fromPartial(e)) || [];
        message.whitelistedBalances = object.whitelistedBalances?.map((e) => Balance.fromPartial(e)) || [];
        return message;
    },
};
function createBaseBalance() {
    return { address: "", coins: [] };
}
export const Balance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    create(base) {
        return Balance.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? "";
        message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
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
