"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeAuthorization_Validators = exports.StakeAuthorization = exports.authorizationTypeToJSON = exports.authorizationTypeFromJSON = exports.AuthorizationType = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.staking.v1beta1";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
var AuthorizationType;
(function (AuthorizationType) {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
    /** AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION - AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION defines an authorization type for Msg/MsgCancelUnbondingDelegation */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION"] = 4] = "AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION";
    AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType = exports.AuthorizationType || (exports.AuthorizationType = {}));
function authorizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHORIZATION_TYPE_UNSPECIFIED":
            return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHORIZATION_TYPE_DELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
        case 2:
        case "AUTHORIZATION_TYPE_UNDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
        case 3:
        case "AUTHORIZATION_TYPE_REDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
        case 4:
        case "AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION":
            return AuthorizationType.AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthorizationType.UNRECOGNIZED;
    }
}
exports.authorizationTypeFromJSON = authorizationTypeFromJSON;
function authorizationTypeToJSON(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return "AUTHORIZATION_TYPE_UNSPECIFIED";
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return "AUTHORIZATION_TYPE_DELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return "AUTHORIZATION_TYPE_UNDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return "AUTHORIZATION_TYPE_REDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION:
            return "AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION";
        case AuthorizationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authorizationTypeToJSON = authorizationTypeToJSON;
function createBaseStakeAuthorization() {
    return { maxTokens: undefined, allowList: undefined, denyList: undefined, authorizationType: 0 };
}
exports.StakeAuthorization = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxTokens !== undefined) {
            coin_1.Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowList !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
        }
        if (message.denyList !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
        }
        if (message.authorizationType !== 0) {
            writer.uint32(32).int32(message.authorizationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.maxTokens = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.allowList = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.denyList = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.authorizationType = reader.int32();
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
            maxTokens: isSet(object.maxTokens) ? coin_1.Coin.fromJSON(object.maxTokens) : undefined,
            allowList: isSet(object.allowList) ? exports.StakeAuthorization_Validators.fromJSON(object.allowList) : undefined,
            denyList: isSet(object.denyList) ? exports.StakeAuthorization_Validators.fromJSON(object.denyList) : undefined,
            authorizationType: isSet(object.authorizationType) ? authorizationTypeFromJSON(object.authorizationType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens ? coin_1.Coin.toJSON(message.maxTokens) : undefined);
        message.allowList !== undefined &&
            (obj.allowList = message.allowList ? exports.StakeAuthorization_Validators.toJSON(message.allowList) : undefined);
        message.denyList !== undefined &&
            (obj.denyList = message.denyList ? exports.StakeAuthorization_Validators.toJSON(message.denyList) : undefined);
        message.authorizationType !== undefined &&
            (obj.authorizationType = authorizationTypeToJSON(message.authorizationType));
        return obj;
    },
    create(base) {
        return exports.StakeAuthorization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStakeAuthorization();
        message.maxTokens = (object.maxTokens !== undefined && object.maxTokens !== null)
            ? coin_1.Coin.fromPartial(object.maxTokens)
            : undefined;
        message.allowList = (object.allowList !== undefined && object.allowList !== null)
            ? exports.StakeAuthorization_Validators.fromPartial(object.allowList)
            : undefined;
        message.denyList = (object.denyList !== undefined && object.denyList !== null)
            ? exports.StakeAuthorization_Validators.fromPartial(object.denyList)
            : undefined;
        message.authorizationType = (_a = object.authorizationType) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseStakeAuthorization_Validators() {
    return { address: [] };
}
exports.StakeAuthorization_Validators = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.address) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization_Validators();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address.push(reader.string());
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
        return { address: Array.isArray(object === null || object === void 0 ? void 0 : object.address) ? object.address.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.address) {
            obj.address = message.address.map((e) => e);
        }
        else {
            obj.address = [];
        }
        return obj;
    },
    create(base) {
        return exports.StakeAuthorization_Validators.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStakeAuthorization_Validators();
        message.address = ((_a = object.address) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aHouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29zbW9zL3N0YWtpbmcvdjFiZXRhMS9hdXRoei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsaUVBQXFDO0FBQ3JDLGtEQUErQztBQUVsQyxRQUFBLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQztBQUV4RDs7OztHQUlHO0FBQ0gsSUFBWSxpQkFZWDtBQVpELFdBQVksaUJBQWlCO0lBQzNCLDhHQUE4RztJQUM5Ryw2R0FBa0MsQ0FBQTtJQUNsQywrR0FBK0c7SUFDL0csdUdBQStCLENBQUE7SUFDL0IscUhBQXFIO0lBQ3JILDJHQUFpQyxDQUFBO0lBQ2pDLDBIQUEwSDtJQUMxSCwyR0FBaUMsQ0FBQTtJQUNqQyx5S0FBeUs7SUFDekssNklBQWtELENBQUE7SUFDbEQsMEVBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBWTVCO0FBRUQsU0FBZ0IseUJBQXlCLENBQUMsTUFBVztJQUNuRCxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSyxnQ0FBZ0M7WUFDbkMsT0FBTyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssNkJBQTZCO1lBQ2hDLE9BQU8saUJBQWlCLENBQUMsMkJBQTJCLENBQUM7UUFDdkQsS0FBSyxDQUFDLENBQUM7UUFDUCxLQUFLLCtCQUErQjtZQUNsQyxPQUFPLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDO1FBQ3pELEtBQUssQ0FBQyxDQUFDO1FBQ1AsS0FBSywrQkFBK0I7WUFDbEMsT0FBTyxpQkFBaUIsQ0FBQyw2QkFBNkIsQ0FBQztRQUN6RCxLQUFLLENBQUMsQ0FBQztRQUNQLEtBQUssZ0RBQWdEO1lBQ25ELE9BQU8saUJBQWlCLENBQUMsOENBQThDLENBQUM7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