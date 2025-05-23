"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.signedMsgTypeToJSON = exports.signedMsgTypeFromJSON = exports.SignedMsgType = exports.blockIDFlagToJSON = exports.blockIDFlagFromJSON = exports.BlockIDFlag = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../google/protobuf/timestamp");
const proof_1 = require("../crypto/proof");
const types_1 = require("../version/types");
const validator_1 = require("./validator");
exports.protobufPackage = "tendermint.types";
/** BlockIdFlag indicates which BlcokID the signature is for */
var BlockIDFlag;
(function (BlockIDFlag) {
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (exports.BlockIDFlag = BlockIDFlag = {}));
function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.blockIDFlagToJSON = blockIDFlagToJSON;
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (exports.SignedMsgType = SignedMsgType = {}));
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
function createBasePartSetHeader() {
    return { total: 0, hash: new Uint8Array() };
}
exports.PartSetHeader = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.total = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hash = reader.bytes();
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
            total: isSet(object.total) ? Number(object.total) : 0,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.PartSetHeader.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
};
function createBasePart() {
    return { index: 0, bytes: new Uint8Array(), proof: undefined };
}
exports.Part = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.index = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bytes = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? Number(object.index) : 0,
            bytes: isSet(object.bytes)
                ? bytesFromBase64(object.bytes)
                : new Uint8Array(),
            proof: isSet(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.bytes !== undefined &&
            (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    create(base) {
        return exports.Part.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof =
            object.proof !== undefined && object.proof !== null
                ? proof_1.Proof.fromPartial(object.proof)
                : undefined;
        return message;
    },
};
function createBaseBlockID() {
    return { hash: new Uint8Array(), partSetHeader: undefined };
}
exports.BlockID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            exports.PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.partSetHeader = exports.PartSetHeader.decode(reader, reader.uint32());
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
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
            partSetHeader: isSet(object.partSetHeader)
                ? exports.PartSetHeader.fromJSON(object.partSetHeader)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.partSetHeader !== undefined &&
            (obj.partSetHeader = message.partSetHeader
                ? exports.PartSetHeader.toJSON(message.partSetHeader)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.BlockID.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.partSetHeader =
            object.partSetHeader !== undefined && object.partSetHeader !== null
                ? exports.PartSetHeader.fromPartial(object.partSetHeader)
                : undefined;
        return message;
    },
};
function createBaseHeader() {
    return {
        version: undefined,
        chainId: "",
        height: 0,
        time: undefined,
        lastBlockId: undefined,
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: new Uint8Array(),
    };
}
exports.Header = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            exports.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(114).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.chainId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastBlockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lastCommitHash = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.dataHash = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.validatorsHash = reader.bytes();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.nextValidatorsHash = reader.bytes();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.consensusHash = reader.bytes();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.appHash = reader.bytes();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.lastResultsHash = reader.bytes();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.evidenceHash = reader.bytes();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.proposerAddress = reader.bytes();
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
            version: isSet(object.version)
                ? types_1.Consensus.fromJSON(object.version)
                : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            lastBlockId: isSet(object.lastBlockId)
                ? exports.BlockID.fromJSON(object.lastBlockId)
                : undefined,
            lastCommitHash: isSet(object.lastCommitHash)
                ? bytesFromBase64(object.lastCommitHash)
                : new Uint8Array(),
            dataHash: isSet(object.dataHash)
                ? bytesFromBase64(object.dataHash)
                : new Uint8Array(),
            validatorsHash: isSet(object.validatorsHash)
                ? bytesFromBase64(object.validatorsHash)
                : new Uint8Array(),
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(),
            consensusHash: isSet(object.consensusHash)
                ? bytesFromBase64(object.consensusHash)
                : new Uint8Array(),
            appHash: isSet(object.appHash)
                ? bytesFromBase64(object.appHash)
                : new Uint8Array(),
            lastResultsHash: isSet(object.lastResultsHash)
                ? bytesFromBase64(object.lastResultsHash)
                : new Uint8Array(),
            evidenceHash: isSet(object.evidenceHash)
                ? bytesFromBase64(object.evidenceHash)
                : new Uint8Array(),
            proposerAddress: isSet(object.proposerAddress)
                ? bytesFromBase64(object.proposerAddress)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined &&
            (obj.version = message.version
                ? types_1.Consensus.toJSON(message.version)
                : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.lastBlockId !== undefined &&
            (obj.lastBlockId = message.lastBlockId
                ? exports.BlockID.toJSON(message.lastBlockId)
                : undefined);
        message.lastCommitHash !== undefined &&
            (obj.lastCommitHash = base64FromBytes(message.lastCommitHash !== undefined
                ? message.lastCommitHash
                : new Uint8Array()));
        message.dataHash !== undefined &&
            (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
        message.validatorsHash !== undefined &&
            (obj.validatorsHash = base64FromBytes(message.validatorsHash !== undefined
                ? message.validatorsHash
                : new Uint8Array()));
        message.nextValidatorsHash !== undefined &&
            (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined
                ? message.nextValidatorsHash
                : new Uint8Array()));
        message.consensusHash !== undefined &&
            (obj.consensusHash = base64FromBytes(message.consensusHash !== undefined
                ? message.consensusHash
                : new Uint8Array()));
        message.appHash !== undefined &&
            (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        message.lastResultsHash !== undefined &&
            (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined
                ? message.lastResultsHash
                : new Uint8Array()));
        message.evidenceHash !== undefined &&
            (obj.evidenceHash = base64FromBytes(message.evidenceHash !== undefined
                ? message.evidenceHash
                : new Uint8Array()));
        message.proposerAddress !== undefined &&
            (obj.proposerAddress = base64FromBytes(message.proposerAddress !== undefined
                ? message.proposerAddress
                : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.Header.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version =
            object.version !== undefined && object.version !== null
                ? types_1.Consensus.fromPartial(object.version)
                : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.lastBlockId =
            object.lastBlockId !== undefined && object.lastBlockId !== null
                ? exports.BlockID.fromPartial(object.lastBlockId)
                : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.validatorsHash = object.validatorsHash ?? new Uint8Array();
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.consensusHash = object.consensusHash ?? new Uint8Array();
        message.appHash = object.appHash ?? new Uint8Array();
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        return message;
    },
};
function createBaseData() {
    return { txs: [] };
}
exports.Data = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(reader.bytes());
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
            txs: Array.isArray(object?.txs)
                ? object.txs.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    create(base) {
        return exports.Data.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map((e) => e) || [];
        return message;
    },
};
function createBaseVote() {
    return {
        type: 0,
        height: 0,
        round: 0,
        blockId: undefined,
        timestamp: undefined,
        validatorAddress: new Uint8Array(),
        validatorIndex: 0,
        signature: new Uint8Array(),
    };
}
exports.Vote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== 0) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(50).bytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            writer.uint32(56).int32(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.validatorAddress = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.validatorIndex = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.signature = reader.bytes();
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            round: isSet(object.round) ? Number(object.round) : 0,
            blockId: isSet(object.blockId)
                ? exports.BlockID.fromJSON(object.blockId)
                : undefined,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            validatorAddress: isSet(object.validatorAddress)
                ? bytesFromBase64(object.validatorAddress)
                : new Uint8Array(),
            validatorIndex: isSet(object.validatorIndex)
                ? Number(object.validatorIndex)
                : 0,
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? exports.BlockID.toJSON(message.blockId)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = base64FromBytes(message.validatorAddress !== undefined
                ? message.validatorAddress
                : new Uint8Array()));
        message.validatorIndex !== undefined &&
            (obj.validatorIndex = Math.round(message.validatorIndex));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.Vote.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height ?? 0;
        message.round = object.round ?? 0;
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? exports.BlockID.fromPartial(object.blockId)
                : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.validatorIndex = object.validatorIndex ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
};
function createBaseCommit() {
    return { height: 0, round: 0, blockId: undefined, signatures: [] };
}
exports.Commit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? Number(object.height) : 0,
            round: isSet(object.round) ? Number(object.round) : 0,
            blockId: isSet(object.blockId)
                ? exports.BlockID.fromJSON(object.blockId)
                : undefined,
            signatures: Array.isArray(object?.signatures)
                ? object.signatures.map((e) => exports.CommitSig.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? exports.BlockID.toJSON(message.blockId)
                : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.CommitSig.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    create(base) {
        return exports.Commit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height ?? 0;
        message.round = object.round ?? 0;
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? exports.BlockID.fromPartial(object.blockId)
                : undefined;
        message.signatures =
            object.signatures?.map((e) => exports.CommitSig.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(),
        timestamp: undefined,
        signature: new Uint8Array(),
    };
}
exports.CommitSig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.blockIdFlag = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorAddress = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signature = reader.bytes();
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
            blockIdFlag: isSet(object.blockIdFlag)
                ? blockIDFlagFromJSON(object.blockIdFlag)
                : 0,
            validatorAddress: isSet(object.validatorAddress)
                ? bytesFromBase64(object.validatorAddress)
                : new Uint8Array(),
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockIdFlag !== undefined &&
            (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = base64FromBytes(message.validatorAddress !== undefined
                ? message.validatorAddress
                : new Uint8Array()));
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.CommitSig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.blockIdFlag = object.blockIdFlag ?? 0;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
};
function createBaseProposal() {
    return {
        type: 0,
        height: 0,
        round: 0,
        polRound: 0,
        blockId: undefined,
        timestamp: undefined,
        signature: new Uint8Array(),
    };
}
exports.Proposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== 0) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.polRound !== 0) {
            writer.uint32(32).int32(message.polRound);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.polRound = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signature = reader.bytes();
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            round: isSet(object.round) ? Number(object.round) : 0,
            polRound: isSet(object.polRound) ? Number(object.polRound) : 0,
            blockId: isSet(object.blockId)
                ? exports.BlockID.fromJSON(object.blockId)
                : undefined,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.polRound !== undefined &&
            (obj.polRound = Math.round(message.polRound));
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? exports.BlockID.toJSON(message.blockId)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    create(base) {
        return exports.Proposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height ?? 0;
        message.round = object.round ?? 0;
        message.polRound = object.polRound ?? 0;
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? exports.BlockID.fromPartial(object.blockId)
                : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
};
function createBaseSignedHeader() {
    return { header: undefined, commit: undefined };
}
exports.SignedHeader = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.header = exports.Header.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.commit = exports.Commit.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            commit: isSet(object.commit) ? exports.Commit.fromJSON(object.commit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.commit !== undefined &&
            (obj.commit = message.commit ? exports.Commit.toJSON(message.commit) : undefined);
        return obj;
    },
    create(base) {
        return exports.SignedHeader.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.Header.fromPartial(object.header)
                : undefined;
        message.commit =
            object.commit !== undefined && object.commit !== null
                ? exports.Commit.fromPartial(object.commit)
                : undefined;
        return message;
    },
};
function createBaseLightBlock() {
    return { signedHeader: undefined, validatorSet: undefined };
}
exports.LightBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedHeader !== undefined) {
            exports.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signedHeader = exports.SignedHeader.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signedHeader: isSet(object.signedHeader)
                ? exports.SignedHeader.fromJSON(object.signedHeader)
                : undefined,
            validatorSet: isSet(object.validatorSet)
                ? validator_1.ValidatorSet.fromJSON(object.validatorSet)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedHeader !== undefined &&
            (obj.signedHeader = message.signedHeader
                ? exports.SignedHeader.toJSON(message.signedHeader)
                : undefined);
        message.validatorSet !== undefined &&
            (obj.validatorSet = message.validatorSet
                ? validator_1.ValidatorSet.toJSON(message.validatorSet)
                : undefined);
        return obj;
    },
    create(base) {
        return exports.LightBlock.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signedHeader =
            object.signedHeader !== undefined && object.signedHeader !== null
                ? exports.SignedHeader.fromPartial(object.signedHeader)
                : undefined;
        message.validatorSet =
            object.validatorSet !== undefined && object.validatorSet !== null
                ? validator_1.ValidatorSet.fromPartial(object.validatorSet)
                : undefined;
        return message;
    },
};
function createBaseBlockMeta() {
    return { blockId: undefined, blockSize: 0, header: undefined, numTxs: 0 };
}
exports.BlockMeta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockSize !== 0) {
            writer.uint32(16).int64(message.blockSize);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.numTxs !== 0) {
            writer.uint32(32).int64(message.numTxs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.blockSize = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.header = exports.Header.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.numTxs = longToNumber(reader.int64());
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
            blockId: isSet(object.blockId)
                ? exports.BlockID.fromJSON(object.blockId)
                : undefined,
            blockSize: isSet(object.blockSize) ? Number(object.blockSize) : 0,
            header: isSet(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            numTxs: isSet(object.numTxs) ? Number(object.numTxs) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? exports.BlockID.toJSON(message.blockId)
                : undefined);
        message.blockSize !== undefined &&
            (obj.blockSize = Math.round(message.blockSize));
        message.header !== undefined &&
            (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.numTxs !== undefined && (obj.numTxs = Math.round(message.numTxs));
        return obj;
    },
    create(base) {
        return exports.BlockMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? exports.BlockID.fromPartial(object.blockId)
                : undefined;
        message.blockSize = object.blockSize ?? 0;
        message.header =
            object.header !== undefined && object.header !== null
                ? exports.Header.fromPartial(object.header)
                : undefined;
        message.numTxs = object.numTxs ?? 0;
        return message;
    },
};
function createBaseTxProof() {
    return {
        rootHash: new Uint8Array(),
        data: new Uint8Array(),
        proof: undefined,
    };
}
exports.TxProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rootHash.length !== 0) {
            writer.uint32(10).bytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rootHash = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            rootHash: isSet(object.rootHash)
                ? bytesFromBase64(object.rootHash)
                : new Uint8Array(),
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
            proof: isSet(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rootHash !== undefined &&
            (obj.rootHash = base64FromBytes(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    create(base) {
        return exports.TxProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.rootHash = object.rootHash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof =
            object.proof !== undefined && object.proof !== null
                ? proof_1.Proof.fromPartial(object.proof)
                : undefined;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
