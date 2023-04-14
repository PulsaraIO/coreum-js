"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurntNFT = exports.WhitelistedNFTAccounts = exports.FrozenNFT = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const nft_1 = require("./nft");
const params_1 = require("./params");
exports.protobufPackage = "coreum.asset.nft.v1";
function createBaseGenesisState() {
    return { params: undefined, classDefinitions: [], frozenNfts: [], whitelistedNftAccounts: [], burntNfts: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.classDefinitions) {
            nft_1.ClassDefinition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.frozenNfts) {
            exports.FrozenNFT.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.whitelistedNftAccounts) {
            exports.WhitelistedNFTAccounts.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.burntNfts) {
            exports.BurntNFT.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.classDefinitions.push(nft_1.ClassDefinition.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.frozenNfts.push(exports.FrozenNFT.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.whitelistedNftAccounts.push(exports.WhitelistedNFTAccounts.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.burntNfts.push(exports.BurntNFT.decode(reader, reader.uint32()));
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
            classDefinitions: Array.isArray(object === null || object === void 0 ? void 0 : object.classDefinitions)
                ? object.classDefinitions.map((e) => nft_1.ClassDefinition.fromJSON(e))
                : [],
            frozenNfts: Array.isArray(object === null || object === void 0 ? void 0 : object.frozenNfts) ? object.frozenNfts.map((e) => exports.FrozenNFT.fromJSON(e)) : [],
            whitelistedNftAccounts: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedNftAccounts)
                ? object.whitelistedNftAccounts.map((e) => exports.WhitelistedNFTAccounts.fromJSON(e))
                : [],
            burntNfts: Array.isArray(object === null || object === void 0 ? void 0 : object.burntNfts) ? object.burntNfts.map((e) => exports.BurntNFT.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.classDefinitions) {
            obj.classDefinitions = message.classDefinitions.map((e) => e ? nft_1.ClassDefinition.toJSON(e) : undefined);
        }
        else {
            obj.classDefinitions = [];
        }
        if (message.frozenNfts) {
            obj.frozenNfts = message.frozenNfts.map((e) => e ? exports.FrozenNFT.toJSON(e) : undefined);
        }
        else {
            obj.frozenNfts = [];
        }
        if (message.whitelistedNftAccounts) {
            obj.whitelistedNftAccounts = message.whitelistedNftAccounts.map((e) => e ? exports.WhitelistedNFTAccounts.toJSON(e) : undefined);
        }
        else {
            obj.whitelistedNftAccounts = [];
        }
        if (message.burntNfts) {
            obj.burntNfts = message.burntNfts.map((e) => e ? exports.BurntNFT.toJSON(e) : undefined);
        }
        else {
            obj.burntNfts = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.classDefinitions = ((_a = object.classDefinitions) === null || _a === void 0 ? void 0 : _a.map((e) => nft_1.ClassDefinition.fromPartial(e))) || [];
        message.frozenNfts = ((_b = object.frozenNfts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FrozenNFT.fromPartial(e))) || [];
        message.whitelistedNftAccounts = ((_c = object.whitelistedNftAccounts) === null || _c === void 0 ? void 0 : _c.map((e) => exports.WhitelistedNFTAccounts.fromPartial(e))) ||
            [];
        message.burntNfts = ((_d = object.burntNfts) === null || _d === void 0 ? void 0 : _d.map((e) => exports.BurntNFT.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFrozenNFT() {
    return { classID: "", nftIDs: [] };
}
exports.FrozenNFT = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classID !== "") {
            writer.uint32(10).string(message.classID);
        }
        for (const v of message.nftIDs) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.FrozenNFT.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.WhitelistedNFTAccounts = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.WhitelistedNFTAccounts.fromPartial(base !== null && base !== void 0 ? base : {});
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
exports.BurntNFT = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.classID !== "") {
            writer.uint32(10).string(message.classID);
        }
        for (const v of message.nftIDs) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
        return exports.BurntNFT.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBurntNFT();
        message.classID = (_a = object.classID) !== null && _a !== void 0 ? _a : "";
        message.nftIDs = ((_b = object.nftIDs) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
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
