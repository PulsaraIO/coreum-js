/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
export const protobufPackage = "cosmos.bank.v1beta1";
function createBaseParams() {
    return { sendEnabled: [], defaultSendEnabled: false };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sendEnabled) {
            SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultSendEnabled === true) {
            writer.uint32(16).bool(message.defaultSendEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.defaultSendEnabled = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            sendEnabled: Array.isArray(object?.sendEnabled)
                ? object.sendEnabled.map((e) => SendEnabled.fromJSON(e))
                : [],
            defaultSendEnabled: isSet(object.defaultSendEnabled) ? Boolean(object.defaultSendEnabled) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sendEnabled) {
            obj.sendEnabled = message.sendEnabled.map((e) => e ? SendEnabled.toJSON(e) : undefined);
        }
        else {
            obj.sendEnabled = [];
        }
        message.defaultSendEnabled !== undefined && (obj.defaultSendEnabled = message.defaultSendEnabled);
        return obj;
    },
    create(base) {
        return Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.sendEnabled = object.sendEnabled?.map((e) => SendEnabled.fromPartial(e)) || [];
        message.defaultSendEnabled = object.defaultSendEnabled ?? false;
        return message;
    },
};
function createBaseSendEnabled() {
    return { denom: "", enabled: false };
}
export const SendEnabled = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEnabled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.enabled = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    create(base) {
        return SendEnabled.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSendEnabled();
        message.denom = object.denom ?? "";
        message.enabled = object.enabled ?? false;
        return message;
    },
};
function createBaseInput() {
    return { address: "", coins: [] };
}
export const Input = {
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
        const message = createBaseInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
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
        return Input.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseOutput() {
    return { address: "", coins: [] };
}
export const Output = {
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
        const message = createBaseOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
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
        return Output.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOutput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSupply() {
    return { total: [] };
}
export const Supply = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.total) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.total.push(Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { total: Array.isArray(object?.total) ? object.total.map((e) => Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.total) {
            obj.total = message.total.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    create(base) {
        return Supply.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSupply();
        message.total = object.total?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDenomUnit() {
    return { denom: "", exponent: 0, aliases: [] };
}
export const DenomUnit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (const v of message.aliases) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomUnit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.exponent = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.aliases.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
            aliases: Array.isArray(object?.aliases) ? object.aliases.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
        if (message.aliases) {
            obj.aliases = message.aliases.map((e) => e);
        }
        else {
            obj.aliases = [];
        }
        return obj;
    },
    create(base) {
        return DenomUnit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDenomUnit();
        message.denom = object.denom ?? "";
        message.exponent = object.exponent ?? 0;
        message.aliases = object.aliases?.map((e) => e) || [];
        return message;
    },
};
function createBaseMetadata() {
    return { description: "", denomUnits: [], base: "", display: "", name: "", symbol: "", uri: "", uriHash: "" };
}
export const Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        for (const v of message.denomUnits) {
            DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(66).string(message.uriHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.base = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.display = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.uriHash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            description: isSet(object.description) ? String(object.description) : "",
            denomUnits: Array.isArray(object?.denomUnits) ? object.denomUnits.map((e) => DenomUnit.fromJSON(e)) : [],
            base: isSet(object.base) ? String(object.base) : "",
            display: isSet(object.display) ? String(object.display) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description);
        if (message.denomUnits) {
            obj.denomUnits = message.denomUnits.map((e) => e ? DenomUnit.toJSON(e) : undefined);
        }
        else {
            obj.denomUnits = [];
        }
        message.base !== undefined && (obj.base = message.base);
        message.display !== undefined && (obj.display = message.display);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        return obj;
    },
    create(base) {
        return Metadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.description = object.description ?? "";
        message.denomUnits = object.denomUnits?.map((e) => DenomUnit.fromPartial(e)) || [];
        message.base = object.base ?? "";
        message.display = object.display ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.uri = object.uri ?? "";
        message.uriHash = object.uriHash ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
