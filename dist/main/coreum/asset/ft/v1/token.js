"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.Definition = exports.featureToJSON = exports.featureFromJSON = exports.Feature = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "coreum.asset.ft.v1";
/** Feature defines possible features of fungible token. */
var Feature;
(function (Feature) {
    Feature[Feature["minting"] = 0] = "minting";
    Feature[Feature["burning"] = 1] = "burning";
    Feature[Feature["freezing"] = 2] = "freezing";
    Feature[Feature["whitelisting"] = 3] = "whitelisting";
    Feature[Feature["ibc"] = 4] = "ibc";
})(Feature = exports.Feature || (exports.Feature = {}));
function featureFromJSON(object) {
    switch (object) {
        case 0:
        case "minting":
            return Feature.minting;
        case 1:
        case "burning":
            return Feature.burning;
        case 2:
        case "freezing":
            return Feature.freezing;
        case 3:
        case "whitelisting":
            return Feature.whitelisting;
        case 4:
        case "ibc":
            return Feature.ibc;
        default:
            return undefined;
    }
}
exports.featureFromJSON = featureFromJSON;
function featureToJSON(object) {
    switch (object) {
        case Feature.minting:
            return "minting";
        case Feature.burning:
            return "burning";
        case Feature.freezing:
            return "freezing";
        case Feature.whitelisting:
            return "whitelisting";
        case Feature.ibc:
            return "ibc";
    }
}
exports.featureToJSON = featureToJSON;
function createBaseDefinition() {
    return {
        denom: "",
        issuer: "",
        features: [],
        burnRate: "",
        sendCommissionRate: "",
    };
}
exports.Definition = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        writer.uint32(26).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.burnRate !== "") {
            writer.uint32(34).string(message.burnRate);
        }
        if (message.sendCommissionRate !== "") {
            writer.uint32(42).string(message.sendCommissionRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag == 24) {
                        message.features.push(reader.int32());
                        continue;
                    }
                    if (tag == 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.burnRate = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.sendCommissionRate = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => featureFromJSON(e))
                : [],
            burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
            sendCommissionRate: isSet(object.sendCommissionRate)
                ? String(object.sendCommissionRate)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        if (message.features) {
            obj.features = message.features.map((e) => featureToJSON(e));
        }
        else {
            obj.features = [];
        }
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        message.sendCommissionRate !== undefined &&
            (obj.sendCommissionRate = message.sendCommissionRate);
        return obj;
    },
    create(base) {
        return exports.Definition.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDefinition();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.features = ((_c = object.features) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.burnRate = (_d = object.burnRate) !== null && _d !== void 0 ? _d : "";
        message.sendCommissionRate = (_e = object.sendCommissionRate) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseToken() {
    return {
        denom: "",
        issuer: "",
        symbol: "",
        subunit: "",
        precision: 0,
        description: "",
        globallyFrozen: false,
        features: [],
        burnRate: "",
        sendCommissionRate: "",
    };
}
exports.Token = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.subunit !== "") {
            writer.uint32(34).string(message.subunit);
        }
        if (message.precision !== 0) {
            writer.uint32(40).uint32(message.precision);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.globallyFrozen === true) {
            writer.uint32(56).bool(message.globallyFrozen);
        }
        writer.uint32(66).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.burnRate !== "") {
            writer.uint32(74).string(message.burnRate);
        }
        if (message.sendCommissionRate !== "") {
            writer.uint32(82).string(message.sendCommissionRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.symbol = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.subunit = reader.string();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.precision = reader.uint32();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.globallyFrozen = reader.bool();
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
                    message.burnRate = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.sendCommissionRate = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            subunit: isSet(object.subunit) ? String(object.subunit) : "",
            precision: isSet(object.precision) ? Number(object.precision) : 0,
            description: isSet(object.description) ? String(object.description) : "",
            globallyFrozen: isSet(object.globallyFrozen)
                ? Boolean(object.globallyFrozen)
                : false,
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => featureFromJSON(e))
                : [],
            burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
            sendCommissionRate: isSet(object.sendCommissionRate)
                ? String(object.sendCommissionRate)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.subunit !== undefined && (obj.subunit = message.subunit);
        message.precision !== undefined &&
            (obj.precision = Math.round(message.precision));
        message.description !== undefined &&
            (obj.description = message.description);
        message.globallyFrozen !== undefined &&
            (obj.globallyFrozen = message.globallyFrozen);
        if (message.features) {
            obj.features = message.features.map((e) => featureToJSON(e));
        }
        else {
            obj.features = [];
        }
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        message.sendCommissionRate !== undefined &&
            (obj.sendCommissionRate = message.sendCommissionRate);
        return obj;
    },
    create(base) {
        return exports.Token.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseToken();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : "";
        message.subunit = (_d = object.subunit) !== null && _d !== void 0 ? _d : "";
        message.precision = (_e = object.precision) !== null && _e !== void 0 ? _e : 0;
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.globallyFrozen = (_g = object.globallyFrozen) !== null && _g !== void 0 ? _g : false;
        message.features = ((_h = object.features) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.burnRate = (_j = object.burnRate) !== null && _j !== void 0 ? _j : "";
        message.sendCommissionRate = (_k = object.sendCommissionRate) !== null && _k !== void 0 ? _k : "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29yZXVtL2Fzc2V0L2Z0L3YxL3Rva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixnREFBd0I7QUFDeEIsaUVBQXFDO0FBRXhCLFFBQUEsZUFBZSxHQUFHLG9CQUFvQixDQUFDO0FBRXBELDJEQUEyRDtBQUMzRCxJQUFZLE9BTVg7QUFORCxXQUFZLE9BQU87SUFDakIsMkNBQVcsQ0FBQTtJQUNYLDJDQUFXLENBQUE7SUFDWCw2Q0FBWSxDQUFBO0lBQ1oscURBQWdCLENBQUE7SUFDaEIsbUNBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFNbEI7QUFFRCxTQUFnQixlQUFlLENBQUMsTUFBVztJQUN6QyxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxTQUFTO1lBQ1osT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxTQUFTO1lBQ1osT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxVQUFVO1lBQ2IsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxjQUFjO1lBQ2pCLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQztRQUM5QixLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssS0FBSztZQUNSLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNyQjtZQUNFLE9BQU8sU0FBUyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQXBCRCwwQ0FvQkM7QUFFRCxTQUFnQixhQUFhLENBQUMsTUFBZTtJQUMzQyxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssT0FBTyxDQUFDLE9BQU87WUFDbEIsT0FBTyxT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