"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.21.12
// source: wasmd/proto/cosmwasm/wasm/v1/types.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.AbsoluteTxPosition = exports.ContractCodeHistoryEntry = exports.ContractInfo = exports.CodeInfo = exports.Params = exports.AccessConfig = exports.AccessTypeParam = exports.contractCodeHistoryOperationTypeToJSON = exports.contractCodeHistoryOperationTypeFromJSON = exports.ContractCodeHistoryOperationType = exports.accessTypeToJSON = exports.accessTypeFromJSON = exports.AccessType = exports.protobufPackage = void 0;
/* eslint-disable */
const binary_1 = require("cosmjs-types/binary");
const any_1 = require("cosmjs-types/google/protobuf/any");
exports.protobufPackage = "cosmwasm.wasm.v1";
/** AccessType permission types */
var AccessType;
(function (AccessType) {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
    /**
     * ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     */
    AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
    /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
    AccessType[AccessType["ACCESS_TYPE_ANY_OF_ADDRESSES"] = 4] = "ACCESS_TYPE_ANY_OF_ADDRESSES";
    AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType || (exports.AccessType = AccessType = {}));
function accessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACCESS_TYPE_UNSPECIFIED":
            return AccessType.ACCESS_TYPE_UNSPECIFIED;
        case 1:
        case "ACCESS_TYPE_NOBODY":
            return AccessType.ACCESS_TYPE_NOBODY;
        case 2:
        case "ACCESS_TYPE_ONLY_ADDRESS":
            return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
        case 3:
        case "ACCESS_TYPE_EVERYBODY":
            return AccessType.ACCESS_TYPE_EVERYBODY;
        case 4:
        case "ACCESS_TYPE_ANY_OF_ADDRESSES":
            return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessType.UNRECOGNIZED;
    }
}
exports.accessTypeFromJSON = accessTypeFromJSON;
function accessTypeToJSON(object) {
    switch (object) {
        case AccessType.ACCESS_TYPE_UNSPECIFIED:
            return "ACCESS_TYPE_UNSPECIFIED";
        case AccessType.ACCESS_TYPE_NOBODY:
            return "ACCESS_TYPE_NOBODY";
        case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
            return "ACCESS_TYPE_ONLY_ADDRESS";
        case AccessType.ACCESS_TYPE_EVERYBODY:
            return "ACCESS_TYPE_EVERYBODY";
        case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
            return "ACCESS_TYPE_ANY_OF_ADDRESSES";
        case AccessType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.accessTypeToJSON = accessTypeToJSON;
/** ContractCodeHistoryOperationType actions that caused a code change */
var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType || (exports.ContractCodeHistoryOperationType = ContractCodeHistoryOperationType = {}));
function contractCodeHistoryOperationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
        case 2:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
        case 3:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContractCodeHistoryOperationType.UNRECOGNIZED;
    }
}
exports.contractCodeHistoryOperationTypeFromJSON = contractCodeHistoryOperationTypeFromJSON;
function contractCodeHistoryOperationTypeToJSON(object) {
    switch (object) {
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
        case ContractCodeHistoryOperationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.contractCodeHistoryOperationTypeToJSON = contractCodeHistoryOperationTypeToJSON;
function createBaseAccessTypeParam() {
    return { value: 0 };
}
exports.AccessTypeParam = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTypeParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.value = reader.int32();
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
            value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.value !== 0) {
            obj.value = accessTypeToJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.AccessTypeParam.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAccessTypeParam();
        message.value = object.value ?? 0;
        return message;
    },
};
function createBaseAccessConfig() {
    return { permission: 0, address: "", addresses: [] };
}
exports.AccessConfig = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.permission !== 0) {
            writer.uint32(8).int32(message.permission);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        for (const v of message.addresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.permission = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.addresses.push(reader.string());
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
            permission: isSet(object.permission)
                ? accessTypeFromJSON(object.permission)
                : 0,
            address: isSet(object.address) ? globalThis.String(object.address) : "",
            addresses: globalThis.Array.isArray(object?.addresses)
                ? object.addresses.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== 0) {
            obj.permission = accessTypeToJSON(message.permission);
        }
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.addresses?.length) {
            obj.addresses = message.addresses;
        }
        return obj;
    },
    create(base) {
        return exports.AccessConfig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAccessConfig();
        message.permission = object.permission ?? 0;
        message.address = object.address ?? "";
        message.addresses = object.addresses?.map((e) => e) || [];
        return message;
    },
};
function createBaseParams() {
    return { codeUploadAccess: undefined, instantiateDefaultPermission: 0 };
}
exports.Params = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.codeUploadAccess !== undefined) {
            exports.AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateDefaultPermission !== 0) {
            writer.uint32(16).int32(message.instantiateDefaultPermission);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.codeUploadAccess = exports.AccessConfig.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.instantiateDefaultPermission = reader.int32();
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
            codeUploadAccess: isSet(object.codeUploadAccess)
                ? exports.AccessConfig.fromJSON(object.codeUploadAccess)
                : undefined,
            instantiateDefaultPermission: isSet(object.instantiateDefaultPermission)
                ? accessTypeFromJSON(object.instantiateDefaultPermission)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codeUploadAccess !== undefined) {
            obj.codeUploadAccess = exports.AccessConfig.toJSON(message.codeUploadAccess);
        }
        if (message.instantiateDefaultPermission !== 0) {
            obj.instantiateDefaultPermission = accessTypeToJSON(message.instantiateDefaultPermission);
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.codeUploadAccess =
            object.codeUploadAccess !== undefined && object.codeUploadAccess !== null
                ? exports.AccessConfig.fromPartial(object.codeUploadAccess)
                : undefined;
        message.instantiateDefaultPermission =
            object.instantiateDefaultPermission ?? 0;
        return message;
    },
};
function createBaseCodeInfo() {
    return {
        codeHash: new Uint8Array(0),
        creator: "",
        instantiateConfig: undefined,
    };
}
exports.CodeInfo = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.codeHash.length !== 0) {
            writer.uint32(10).bytes(message.codeHash);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.instantiateConfig !== undefined) {
            exports.AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.codeHash = reader.bytes();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.instantiateConfig = exports.AccessConfig.decode(reader, reader.uint32());
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
            codeHash: isSet(object.codeHash)
                ? bytesFromBase64(object.codeHash)
                : new Uint8Array(0),
            creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
            instantiateConfig: isSet(object.instantiateConfig)
                ? exports.AccessConfig.fromJSON(object.instantiateConfig)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codeHash.length !== 0) {
            obj.codeHash = base64FromBytes(message.codeHash);
        }
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.instantiateConfig !== undefined) {
            obj.instantiateConfig = exports.AccessConfig.toJSON(message.instantiateConfig);
        }
        return obj;
    },
    create(base) {
        return exports.CodeInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCodeInfo();
        message.codeHash = object.codeHash ?? new Uint8Array(0);
        message.creator = object.creator ?? "";
        message.instantiateConfig =
            object.instantiateConfig !== undefined &&
                object.instantiateConfig !== null
                ? exports.AccessConfig.fromPartial(object.instantiateConfig)
                : undefined;
        return message;
    },
};
function createBaseContractInfo() {
    return {
        codeId: 0,
        creator: "",
        admin: "",
        label: "",
        created: undefined,
        ibcPortId: "",
        extension: undefined,
    };
}
exports.ContractInfo = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.codeId !== 0) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.created !== undefined) {
            exports.AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
        }
        if (message.ibcPortId !== "") {
            writer.uint32(50).string(message.ibcPortId);
        }
        if (message.extension !== undefined) {
            any_1.Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.codeId = longToNumber(reader.uint64());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.label = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.created = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.ibcPortId = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.extension = any_1.Any.decode(reader, reader.uint32());
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
            codeId: isSet(object.codeId) ? globalThis.Number(object.codeId) : 0,
            creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
            admin: isSet(object.admin) ? globalThis.String(object.admin) : "",
            label: isSet(object.label) ? globalThis.String(object.label) : "",
            created: isSet(object.created)
                ? exports.AbsoluteTxPosition.fromJSON(object.created)
                : undefined,
            ibcPortId: isSet(object.ibcPortId)
                ? globalThis.String(object.ibcPortId)
                : "",
            extension: isSet(object.extension)
                ? any_1.Any.fromJSON(object.extension)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codeId !== 0) {
            obj.codeId = Math.round(message.codeId);
        }
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.label !== "") {
            obj.label = message.label;
        }
        if (message.created !== undefined) {
            obj.created = exports.AbsoluteTxPosition.toJSON(message.created);
        }
        if (message.ibcPortId !== "") {
            obj.ibcPortId = message.ibcPortId;
        }
        if (message.extension !== undefined) {
            obj.extension = any_1.Any.toJSON(message.extension);
        }
        return obj;
    },
    create(base) {
        return exports.ContractInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseContractInfo();
        message.codeId = object.codeId ?? 0;
        message.creator = object.creator ?? "";
        message.admin = object.admin ?? "";
        message.label = object.label ?? "";
        message.created =
            object.created !== undefined && object.created !== null
                ? exports.AbsoluteTxPosition.fromPartial(object.created)
                : undefined;
        message.ibcPortId = object.ibcPortId ?? "";
        message.extension =
            object.extension !== undefined && object.extension !== null
                ? any_1.Any.fromPartial(object.extension)
                : undefined;
        return message;
    },
};
function createBaseContractCodeHistoryEntry() {
    return {
        operation: 0,
        codeId: 0,
        updated: undefined,
        msg: new Uint8Array(0),
    };
}
exports.ContractCodeHistoryEntry = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.operation !== 0) {
            writer.uint32(8).int32(message.operation);
        }
        if (message.codeId !== 0) {
            writer.uint32(16).uint64(message.codeId);
        }
        if (message.updated !== undefined) {
            exports.AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCodeHistoryEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.operation = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.codeId = longToNumber(reader.uint64());
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.msg = reader.bytes();
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
            operation: isSet(object.operation)
                ? contractCodeHistoryOperationTypeFromJSON(object.operation)
                : 0,
            codeId: isSet(object.codeId) ? globalThis.Number(object.codeId) : 0,
            updated: isSet(object.updated)
                ? exports.AbsoluteTxPosition.fromJSON(object.updated)
                : undefined,
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operation !== 0) {
            obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation);
        }
        if (message.codeId !== 0) {
            obj.codeId = Math.round(message.codeId);
        }
        if (message.updated !== undefined) {
            obj.updated = exports.AbsoluteTxPosition.toJSON(message.updated);
        }
        if (message.msg.length !== 0) {
            obj.msg = base64FromBytes(message.msg);
        }
        return obj;
    },
    create(base) {
        return exports.ContractCodeHistoryEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseContractCodeHistoryEntry();
        message.operation = object.operation ?? 0;
        message.codeId = object.codeId ?? 0;
        message.updated =
            object.updated !== undefined && object.updated !== null
                ? exports.AbsoluteTxPosition.fromPartial(object.updated)
                : undefined;
        message.msg = object.msg ?? new Uint8Array(0);
        return message;
    },
};
function createBaseAbsoluteTxPosition() {
    return { blockHeight: 0, txIndex: 0 };
}
exports.AbsoluteTxPosition = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.blockHeight !== 0) {
            writer.uint32(8).uint64(message.blockHeight);
        }
        if (message.txIndex !== 0) {
            writer.uint32(16).uint64(message.txIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAbsoluteTxPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.blockHeight = longToNumber(reader.uint64());
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.txIndex = longToNumber(reader.uint64());
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
            blockHeight: isSet(object.blockHeight)
                ? globalThis.Number(object.blockHeight)
                : 0,
            txIndex: isSet(object.txIndex) ? globalThis.Number(object.txIndex) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockHeight !== 0) {
            obj.blockHeight = Math.round(message.blockHeight);
        }
        if (message.txIndex !== 0) {
            obj.txIndex = Math.round(message.txIndex);
        }
        return obj;
    },
    create(base) {
        return exports.AbsoluteTxPosition.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAbsoluteTxPosition();
        message.blockHeight = object.blockHeight ?? 0;
        message.txIndex = object.txIndex ?? 0;
        return message;
    },
};
function createBaseModel() {
    return { key: new Uint8Array(0), value: new Uint8Array(0) };
}
exports.Model = {
    encode(message, writer = new binary_1.BinaryWriter()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            value: isSet(object.value)
                ? bytesFromBase64(object.value)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.Model.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseModel();
        message.key = object.key ?? new Uint8Array(0);
        message.value = object.value ?? new Uint8Array(0);
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
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
