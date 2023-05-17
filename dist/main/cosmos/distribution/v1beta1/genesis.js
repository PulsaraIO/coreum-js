"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
const distribution_1 = require("./distribution");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return { delegatorAddress: "", withdrawAddress: "" };
}
exports.DelegatorWithdrawInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.delegatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.withdrawAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    create(base) {
        return exports.DelegatorWithdrawInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDelegatorWithdrawInfo();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.withdrawAddress = (_b = object.withdrawAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValidatorOutstandingRewardsRecord() {
    return { validatorAddress: "", outstandingRewards: [] };
}
exports.ValidatorOutstandingRewardsRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.outstandingRewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.outstandingRewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards)
                ? object.outstandingRewards.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorOutstandingRewardsRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.outstandingRewards = ((_b = object.outstandingRewards) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return { validatorAddress: "", accumulated: undefined };
}
exports.ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            accumulated: isSet(object.accumulated) ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.accumulated !== undefined &&
            (obj.accumulated = message.accumulated ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
        return obj;
    },
    create(base) {
        return exports.ValidatorAccumulatedCommissionRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.accumulated = (object.accumulated !== undefined && object.accumulated !== null)
            ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated)
            : undefined;
        return message;
    },
};
function createBaseValidatorHistoricalRewardsRecord() {
    return { validatorAddress: "", period: 0, rewards: undefined };
}
exports.ValidatorHistoricalRewardsRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.period = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            period: isSet(object.period) ? Number(object.period) : 0,
            rewards: isSet(object.rewards) ? distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.period !== undefined && (obj.period = Math.round(message.period));
        message.rewards !== undefined &&
            (obj.rewards = message.rewards ? distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    create(base) {
        return exports.ValidatorHistoricalRewardsRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.period = (_b = object.period) !== null && _b !== void 0 ? _b : 0;
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseValidatorCurrentRewardsRecord() {
    return { validatorAddress: "", rewards: undefined };
}
exports.ValidatorCurrentRewardsRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            rewards: isSet(object.rewards) ? distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards ? distribution_1.ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    create(base) {
        return exports.ValidatorCurrentRewardsRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseDelegatorStartingInfoRecord() {
    return { delegatorAddress: "", validatorAddress: "", startingInfo: undefined };
}
exports.DelegatorStartingInfoRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.delegatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.startingInfo = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            startingInfo: isSet(object.startingInfo) ? distribution_1.DelegatorStartingInfo.fromJSON(object.startingInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.startingInfo !== undefined &&
            (obj.startingInfo = message.startingInfo ? distribution_1.DelegatorStartingInfo.toJSON(message.startingInfo) : undefined);
        return obj;
    },
    create(base) {
        return exports.DelegatorStartingInfoRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.startingInfo = (object.startingInfo !== undefined && object.startingInfo !== null)
            ? distribution_1.DelegatorStartingInfo.fromPartial(object.startingInfo)
            : undefined;
        return message;
    },
};
function createBaseValidatorSlashEventRecord() {
    return { validatorAddress: "", height: 0, period: 0, validatorSlashEvent: undefined };
}
exports.ValidatorSlashEventRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.height !== 0) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== 0) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            distribution_1.ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.period = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.validatorSlashEvent = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            period: isSet(object.period) ? Number(object.period) : 0,
            validatorSlashEvent: isSet(object.validatorSlashEvent)
                ? distribution_1.ValidatorSlashEvent.fromJSON(object.validatorSlashEvent)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.period !== undefined && (obj.period = Math.round(message.period));
        message.validatorSlashEvent !== undefined && (obj.validatorSlashEvent = message.validatorSlashEvent
            ? distribution_1.ValidatorSlashEvent.toJSON(message.validatorSlashEvent)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.ValidatorSlashEventRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseValidatorSlashEventRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.period = (_c = object.period) !== null && _c !== void 0 ? _c : 0;
        message.validatorSlashEvent = (object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null)
            ? distribution_1.ValidatorSlashEvent.fromPartial(object.validatorSlashEvent)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        feePool: undefined,
        delegatorWithdrawInfos: [],
        previousProposer: "",
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            distribution_1.FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatorWithdrawInfos) {
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        for (const v of message.outstandingRewards) {
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validatorAccumulatedCommissions) {
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorHistoricalRewards) {
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validatorCurrentRewards) {
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegatorStartingInfos) {
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validatorSlashEvents) {
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feePool = distribution_1.FeePool.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.delegatorWithdrawInfos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.previousProposer = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.outstandingRewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.validatorAccumulatedCommissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.validatorHistoricalRewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.validatorCurrentRewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.delegatorStartingInfos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.validatorSlashEvents.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined,
            feePool: isSet(object.feePool) ? distribution_1.FeePool.fromJSON(object.feePool) : undefined,
            delegatorWithdrawInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorWithdrawInfos)
                ? object.delegatorWithdrawInfos.map((e) => exports.DelegatorWithdrawInfo.fromJSON(e))
                : [],
            previousProposer: isSet(object.previousProposer) ? String(object.previousProposer) : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards)
                ? object.outstandingRewards.map((e) => exports.ValidatorOutstandingRewardsRecord.fromJSON(e))
                : [],
            validatorAccumulatedCommissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorAccumulatedCommissions)
                ? object.validatorAccumulatedCommissions.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromJSON(e))
                : [],
            validatorHistoricalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorHistoricalRewards)
                ? object.validatorHistoricalRewards.map((e) => exports.ValidatorHistoricalRewardsRecord.fromJSON(e))
                : [],
            validatorCurrentRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorCurrentRewards)
                ? object.validatorCurrentRewards.map((e) => exports.ValidatorCurrentRewardsRecord.fromJSON(e))
                : [],
            delegatorStartingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorStartingInfos)
                ? object.delegatorStartingInfos.map((e) => exports.DelegatorStartingInfoRecord.fromJSON(e))
                : [],
            validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorSlashEvents)
                ? object.validatorSlashEvents.map((e) => exports.ValidatorSlashEventRecord.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        message.feePool !== undefined && (obj.feePool = message.feePool ? distribution_1.FeePool.toJSON(message.feePool) : undefined);
        if (message.delegatorWithdrawInfos) {
            obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map((e) => e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegatorWithdrawInfos = [];
        }
        message.previousProposer !== undefined && (obj.previousProposer = message.previousProposer);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map((e) => e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorAccumulatedCommissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map((e) => e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorHistoricalRewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validatorCurrentRewards = message.validatorCurrentRewards.map((e) => e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorCurrentRewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegatorStartingInfos = message.delegatorStartingInfos.map((e) => e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegatorStartingInfos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map((e) => e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? distribution_1.Params.fromPartial(object.params)
            : undefined;
        message.feePool = (object.feePool !== undefined && object.feePool !== null)
            ? distribution_1.FeePool.fromPartial(object.feePool)
            : undefined;
        message.delegatorWithdrawInfos = ((_a = object.delegatorWithdrawInfos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DelegatorWithdrawInfo.fromPartial(e))) ||
            [];
        message.previousProposer = (_b = object.previousProposer) !== null && _b !== void 0 ? _b : "";
        message.outstandingRewards =
            ((_c = object.outstandingRewards) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ValidatorOutstandingRewardsRecord.fromPartial(e))) || [];
        message.validatorAccumulatedCommissions =
            ((_d = object.validatorAccumulatedCommissions) === null || _d === void 0 ? void 0 : _d.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromPartial(e))) || [];
        message.validatorHistoricalRewards =
            ((_e = object.validatorHistoricalRewards) === null || _e === void 0 ? void 0 : _e.map((e) => exports.ValidatorHistoricalRewardsRecord.fromPartial(e))) || [];
        message.validatorCurrentRewards =
            ((_f = object.validatorCurrentRewards) === null || _f === void 0 ? void 0 : _f.map((e) => exports.ValidatorCurrentRewardsRecord.fromPartial(e))) || [];
        message.delegatorStartingInfos =
            ((_g = object.delegatorStartingInfos) === null || _g === void 0 ? void 0 : _g.map((e) => exports.DelegatorStartingInfoRecord.fromPartial(e))) || [];
        message.validatorSlashEvents = ((_h = object.validatorSlashEvents) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ValidatorSlashEventRecord.fromPartial(e))) ||
            [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3Ntb3MvZGlzdHJpYnV0aW9uL3YxYmV0YTEvZ2VuZXNpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLGlFQUFxQztBQUNyQyxrREFBa0Q7QUFDbEQsaURBUXdCO0FBRVgsUUFBQSxlQUFlLEdBQUcsNkJBQTZCLENBQUM7QUF3RzdELFNBQVMsK0JBQStCO0lBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ3ZELENBQUM7QUFFWSxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLE1BQU0sQ0FBQyxPQUE4QixFQUFFLFNBQXFCLGlCQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUM3RSxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxlQUFlLEtBQUssRUFBRSxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBOEIsRUFBRSxNQUFlO1FBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssWUFBWSxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUUsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMs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