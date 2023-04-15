/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClassDefinition } from "./nft";
import { Params } from "./params";
export const protobufPackage = "coreum.asset.nft.v1";
function createBaseGenesisState() {
    return { params: undefined, classDefinitions: [], frozenNfts: [], whitelistedNftAccounts: [], burntNfts: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.classDefinitions) {
            ClassDefinition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.frozenNfts) {
            FrozenNFT.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.whitelistedNftAccounts) {
            WhitelistedNFTAccounts.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.burntNfts) {
            BurntNFT.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.classDefinitions.push(ClassDefinition.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.frozenNfts.push(FrozenNFT.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.whitelistedNftAccounts.push(WhitelistedNFTAccounts.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.burntNfts.push(BurntNFT.decode(reader, reader.uint32()));
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
            classDefinitions: Array.isArray(object === null || object === void 0 ? void 0 : object.classDefinitions)
                ? object.classDefinitions.map((e) => ClassDefinition.fromJSON(e))
                : [],
            frozenNfts: Array.isArray(object === null || object === void 0 ? void 0 : object.frozenNfts) ? object.frozenNfts.map((e) => FrozenNFT.fromJSON(e)) : [],
            whitelistedNftAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedNftAccounts)
                ? object.whitelistedNftAccounts.map((e) => WhitelistedNFTAccounts.fromJSON(e))
                : [],
            burntNfts: Array.isArray(object === null || object === void 0 ? void 0 : object.burntNfts) ? object.burntNfts.map((e) => BurntNFT.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.classDefinitions) {
            obj.classDefinitions = message.classDefinitions.map((e) => e ? ClassDefinition.toJSON(e) : undefined);
        }
        else {
            obj.classDefinitions = [];
        }
        if (message.frozenNfts) {
            obj.frozenNfts = message.frozenNfts.map((e) => e ? FrozenNFT.toJSON(e) : undefined);
        }
        else {
            obj.frozenNfts = [];
        }
        if (message.whitelistedNftAccounts) {
            obj.whitelistedNftAccounts = message.whitelistedNftAccounts.map((e) => e ? WhitelistedNFTAccounts.toJSON(e) : undefined);
        }
        else {
            obj.whitelistedNftAccounts = [];
        }
        if (message.burntNfts) {
            obj.burntNfts = message.burntNfts.map((e) => e ? BurntNFT.toJSON(e) : undefined);
        }
        else {
            obj.burntNfts = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.classDefinitions = ((_a = object.classDefinitions) === null || _a === void 0 ? void 0 : _a.map((e) => ClassDefinition.fromPartial(e))) || [];
        message.frozenNfts = ((_b = object.frozenNfts) === null || _b === void 0 ? void 0 : _b.map((e) => FrozenNFT.fromPartial(e))) || [];
        message.whitelistedNftAccounts = ((_c = object.whitelistedNftAccounts) === null || _c === void 0 ? void 0 : _c.map((e) => WhitelistedNFTAccounts.fromPartial(e))) ||
            [];
        message.burntNfts = ((_d = object.burntNfts) === null || _d === void 0 ? void 0 : _d.map((e) => BurntNFT.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFrozenNFT() {
    return { classID: "", nftIDs: [] };
}
export const FrozenNFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classID !== "") {
            writer.uint32(10).string(message.classID);
        }
        for (const v of message.nftIDs) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFrozenNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classID = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.nftIDs.push(reader.string());
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
            classID: isSet(object.classID) ? String(object.classID) : "",
            nftIDs: Array.isArray(object === null || object === void 0 ? void 0 : object.nftIDs) ? object.nftIDs.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.classID !== undefined && (obj.classID = message.classID);
        if (message.nftIDs) {
            obj.nftIDs = message.nftIDs.map((e) => e);
        }
        else {
            obj.nftIDs = [];
        }
        return obj;
    },
    create(base) {
        return FrozenNFT.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFrozenNFT();
        message.classID = (_a = object.classID) !== null && _a !== void 0 ? _a : "";
        message.nftIDs = ((_b = object.nftIDs) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseWhitelistedNFTAccounts() {
    return { classID: "", nftID: "", accounts: [] };
}
export const WhitelistedNFTAccounts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classID !== "") {
            writer.uint32(10).string(message.classID);
        }
        if (message.nftID !== "") {
            writer.uint32(18).string(message.nftID);
        }
        for (const v of message.accounts) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistedNFTAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classID = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.nftID = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.accounts.push(reader.string());
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
            classID: isSet(object.classID) ? String(object.classID) : "",
            nftID: isSet(object.nftID) ? String(object.nftID) : "",
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.classID !== undefined && (obj.classID = message.classID);
        message.nftID !== undefined && (obj.nftID = message.nftID);
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => e);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    create(base) {
        return WhitelistedNFTAccounts.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseWhitelistedNFTAccounts();
        message.classID = (_a = object.classID) !== null && _a !== void 0 ? _a : "";
        message.nftID = (_b = object.nftID) !== null && _b !== void 0 ? _b : "";
        message.accounts = ((_c = object.accounts) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseBurntNFT() {
    return { classID: "", nftIDs: [] };
}
export const BurntNFT = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classID !== "") {
            writer.uint32(10).string(message.classID);
        }
        for (const v of message.nftIDs) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBurntNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.classID = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.nftIDs.push(reader.string());
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
            classID: isSet(object.classID) ? String(object.classID) : "",
            nftIDs: Array.isArray(object === null || object === void 0 ? void 0 : object.nftIDs) ? object.nftIDs.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.classID !== undefined && (obj.classID = message.classID);
        if (message.nftIDs) {
            obj.nftIDs = message.nftIDs.map((e) => e);
        }
        else {
            obj.nftIDs = [];
        }
        return obj;
    },
    create(base) {
        return BurntNFT.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBurntNFT();
        message.classID = (_a = object.classID) !== null && _a !== void 0 ? _a : "";
        message.nftIDs = ((_b = object.nftIDs) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
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
