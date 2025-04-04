/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "coreum.asset.ft.v1";

/** Feature defines possible features of fungible token. */
export enum Feature {
  minting = 0,
  burning = 1,
  freezing = 2,
  whitelisting = 3,
  ibc = 4,
  block_smart_contracts = 5,
  clawback = 6,
  extension = 7,
  dex_block = 8,
  dex_whitelisted_denoms = 9,
  dex_order_cancellation = 10,
  dex_unified_ref_amount_change = 11,
  UNRECOGNIZED = -1,
}

export function featureFromJSON(object: any): Feature {
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
    case 5:
    case "block_smart_contracts":
      return Feature.block_smart_contracts;
    case 6:
    case "clawback":
      return Feature.clawback;
    case 7:
    case "extension":
      return Feature.extension;
    case 8:
    case "dex_block":
      return Feature.dex_block;
    case 9:
    case "dex_whitelisted_denoms":
      return Feature.dex_whitelisted_denoms;
    case 10:
    case "dex_order_cancellation":
      return Feature.dex_order_cancellation;
    case 11:
    case "dex_unified_ref_amount_change":
      return Feature.dex_unified_ref_amount_change;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Feature.UNRECOGNIZED;
  }
}

export function featureToJSON(object: Feature): string {
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
    case Feature.block_smart_contracts:
      return "block_smart_contracts";
    case Feature.clawback:
      return "clawback";
    case Feature.extension:
      return "extension";
    case Feature.dex_block:
      return "dex_block";
    case Feature.dex_whitelisted_denoms:
      return "dex_whitelisted_denoms";
    case Feature.dex_order_cancellation:
      return "dex_order_cancellation";
    case Feature.dex_unified_ref_amount_change:
      return "dex_unified_ref_amount_change";
    case Feature.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Definition defines the fungible token settings to store. */
export interface Definition {
  denom: string;
  issuer: string;
  features: Feature[];
  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   */
  burnRate: string;
  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token admin account.
   */
  sendCommissionRate: string;
  version: number;
  uri: string;
  uriHash: string;
  extensionCwAddress: string;
  admin: string;
}

/** Token is a full representation of the fungible token. */
export interface Token {
  denom: string;
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  description: string;
  globallyFrozen: boolean;
  features: Feature[];
  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   */
  burnRate: string;
  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token admin account.
   */
  sendCommissionRate: string;
  version: number;
  uri: string;
  uriHash: string;
  extensionCwAddress: string;
  admin: string;
  dexSettings: DEXSettings | undefined;
}

/** DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC. */
export interface DelayedTokenUpgradeV1 {
  denom: string;
}

/** TokenUpgradeV1Status defines the current status of the v1 token migration. */
export interface TokenUpgradeV1Status {
  ibcEnabled: boolean;
  startTime: Date | undefined;
  endTime: Date | undefined;
}

/** TokenUpgradeStatuses defines all statuses of the token migrations. */
export interface TokenUpgradeStatuses {
  v1: TokenUpgradeV1Status | undefined;
}

/** DEXSettings defines the token settings of the dex. */
export interface DEXSettings {
  /** unified_ref_amount is the approximate amount you need to by 1USD, used to define the price tick size */
  unifiedRefAmount: string;
  /** whitelisted_denoms is the list of denoms to trade with. */
  whitelistedDenoms: string[];
}

function createBaseDefinition(): Definition {
  return {
    denom: "",
    issuer: "",
    features: [],
    burnRate: "",
    sendCommissionRate: "",
    version: 0,
    uri: "",
    uriHash: "",
    extensionCwAddress: "",
    admin: "",
  };
}

export const Definition = {
  encode(
    message: Definition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (message.version !== 0) {
      writer.uint32(48).uint32(message.version);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    if (message.extensionCwAddress !== "") {
      writer.uint32(74).string(message.extensionCwAddress);
    }
    if (message.admin !== "") {
      writer.uint32(82).string(message.admin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Definition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefinition();
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
          if (tag !== 18) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.features.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.burnRate = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sendCommissionRate = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.version = reader.uint32();
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
        case 9:
          if (tag !== 74) {
            break;
          }

          message.extensionCwAddress = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.admin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Definition {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      features: Array.isArray(object?.features)
        ? object.features.map((e: any) => featureFromJSON(e))
        : [],
      burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
      sendCommissionRate: isSet(object.sendCommissionRate)
        ? String(object.sendCommissionRate)
        : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      extensionCwAddress: isSet(object.extensionCwAddress)
        ? String(object.extensionCwAddress)
        : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
    };
  },

  toJSON(message: Definition): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    if (message.features) {
      obj.features = message.features.map((e) => featureToJSON(e));
    } else {
      obj.features = [];
    }
    message.burnRate !== undefined && (obj.burnRate = message.burnRate);
    message.sendCommissionRate !== undefined &&
      (obj.sendCommissionRate = message.sendCommissionRate);
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.extensionCwAddress !== undefined &&
      (obj.extensionCwAddress = message.extensionCwAddress);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },

  create<I extends Exact<DeepPartial<Definition>, I>>(base?: I): Definition {
    return Definition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Definition>, I>>(
    object: I
  ): Definition {
    const message = createBaseDefinition();
    message.denom = object.denom ?? "";
    message.issuer = object.issuer ?? "";
    message.features = object.features?.map((e) => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.version = object.version ?? 0;
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.extensionCwAddress = object.extensionCwAddress ?? "";
    message.admin = object.admin ?? "";
    return message;
  },
};

function createBaseToken(): Token {
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
    version: 0,
    uri: "",
    uriHash: "",
    extensionCwAddress: "",
    admin: "",
    dexSettings: undefined,
  };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.version !== 0) {
      writer.uint32(88).uint32(message.version);
    }
    if (message.uri !== "") {
      writer.uint32(98).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(106).string(message.uriHash);
    }
    if (message.extensionCwAddress !== "") {
      writer.uint32(114).string(message.extensionCwAddress);
    }
    if (message.admin !== "") {
      writer.uint32(122).string(message.admin);
    }
    if (message.dexSettings !== undefined) {
      DEXSettings.encode(
        message.dexSettings,
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
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
          if (tag !== 18) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subunit = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.precision = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.globallyFrozen = reader.bool();
          continue;
        case 8:
          if (tag === 64) {
            message.features.push(reader.int32() as any);

            continue;
          }

          if (tag === 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.burnRate = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sendCommissionRate = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.uriHash = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.extensionCwAddress = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.dexSettings = DEXSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Token {
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
      features: Array.isArray(object?.features)
        ? object.features.map((e: any) => featureFromJSON(e))
        : [],
      burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
      sendCommissionRate: isSet(object.sendCommissionRate)
        ? String(object.sendCommissionRate)
        : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      extensionCwAddress: isSet(object.extensionCwAddress)
        ? String(object.extensionCwAddress)
        : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      dexSettings: isSet(object.dexSettings)
        ? DEXSettings.fromJSON(object.dexSettings)
        : undefined,
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
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
    } else {
      obj.features = [];
    }
    message.burnRate !== undefined && (obj.burnRate = message.burnRate);
    message.sendCommissionRate !== undefined &&
      (obj.sendCommissionRate = message.sendCommissionRate);
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.extensionCwAddress !== undefined &&
      (obj.extensionCwAddress = message.extensionCwAddress);
    message.admin !== undefined && (obj.admin = message.admin);
    message.dexSettings !== undefined &&
      (obj.dexSettings = message.dexSettings
        ? DEXSettings.toJSON(message.dexSettings)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Token>, I>>(base?: I): Token {
    return Token.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.denom = object.denom ?? "";
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.subunit = object.subunit ?? "";
    message.precision = object.precision ?? 0;
    message.description = object.description ?? "";
    message.globallyFrozen = object.globallyFrozen ?? false;
    message.features = object.features?.map((e) => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.version = object.version ?? 0;
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.extensionCwAddress = object.extensionCwAddress ?? "";
    message.admin = object.admin ?? "";
    message.dexSettings =
      object.dexSettings !== undefined && object.dexSettings !== null
        ? DEXSettings.fromPartial(object.dexSettings)
        : undefined;
    return message;
  },
};

function createBaseDelayedTokenUpgradeV1(): DelayedTokenUpgradeV1 {
  return { denom: "" };
}

export const DelayedTokenUpgradeV1 = {
  encode(
    message: DelayedTokenUpgradeV1,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DelayedTokenUpgradeV1 {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedTokenUpgradeV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelayedTokenUpgradeV1 {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: DelayedTokenUpgradeV1): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<DelayedTokenUpgradeV1>, I>>(
    base?: I
  ): DelayedTokenUpgradeV1 {
    return DelayedTokenUpgradeV1.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DelayedTokenUpgradeV1>, I>>(
    object: I
  ): DelayedTokenUpgradeV1 {
    const message = createBaseDelayedTokenUpgradeV1();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseTokenUpgradeV1Status(): TokenUpgradeV1Status {
  return { ibcEnabled: false, startTime: undefined, endTime: undefined };
}

export const TokenUpgradeV1Status = {
  encode(
    message: TokenUpgradeV1Status,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ibcEnabled === true) {
      writer.uint32(8).bool(message.ibcEnabled);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TokenUpgradeV1Status {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenUpgradeV1Status();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ibcEnabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenUpgradeV1Status {
    return {
      ibcEnabled: isSet(object.ibcEnabled) ? Boolean(object.ibcEnabled) : false,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
    };
  },

  toJSON(message: TokenUpgradeV1Status): unknown {
    const obj: any = {};
    message.ibcEnabled !== undefined && (obj.ibcEnabled = message.ibcEnabled);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenUpgradeV1Status>, I>>(
    base?: I
  ): TokenUpgradeV1Status {
    return TokenUpgradeV1Status.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TokenUpgradeV1Status>, I>>(
    object: I
  ): TokenUpgradeV1Status {
    const message = createBaseTokenUpgradeV1Status();
    message.ibcEnabled = object.ibcEnabled ?? false;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
};

function createBaseTokenUpgradeStatuses(): TokenUpgradeStatuses {
  return { v1: undefined };
}

export const TokenUpgradeStatuses = {
  encode(
    message: TokenUpgradeStatuses,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.v1 !== undefined) {
      TokenUpgradeV1Status.encode(
        message.v1,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TokenUpgradeStatuses {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenUpgradeStatuses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.v1 = TokenUpgradeV1Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenUpgradeStatuses {
    return {
      v1: isSet(object.v1)
        ? TokenUpgradeV1Status.fromJSON(object.v1)
        : undefined,
    };
  },

  toJSON(message: TokenUpgradeStatuses): unknown {
    const obj: any = {};
    message.v1 !== undefined &&
      (obj.v1 = message.v1
        ? TokenUpgradeV1Status.toJSON(message.v1)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenUpgradeStatuses>, I>>(
    base?: I
  ): TokenUpgradeStatuses {
    return TokenUpgradeStatuses.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TokenUpgradeStatuses>, I>>(
    object: I
  ): TokenUpgradeStatuses {
    const message = createBaseTokenUpgradeStatuses();
    message.v1 =
      object.v1 !== undefined && object.v1 !== null
        ? TokenUpgradeV1Status.fromPartial(object.v1)
        : undefined;
    return message;
  },
};

function createBaseDEXSettings(): DEXSettings {
  return { unifiedRefAmount: "", whitelistedDenoms: [] };
}

export const DEXSettings = {
  encode(
    message: DEXSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unifiedRefAmount !== "") {
      writer.uint32(10).string(message.unifiedRefAmount);
    }
    for (const v of message.whitelistedDenoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DEXSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDEXSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unifiedRefAmount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.whitelistedDenoms.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DEXSettings {
    return {
      unifiedRefAmount: isSet(object.unifiedRefAmount)
        ? String(object.unifiedRefAmount)
        : "",
      whitelistedDenoms: Array.isArray(object?.whitelistedDenoms)
        ? object.whitelistedDenoms.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DEXSettings): unknown {
    const obj: any = {};
    message.unifiedRefAmount !== undefined &&
      (obj.unifiedRefAmount = message.unifiedRefAmount);
    if (message.whitelistedDenoms) {
      obj.whitelistedDenoms = message.whitelistedDenoms.map((e) => e);
    } else {
      obj.whitelistedDenoms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DEXSettings>, I>>(base?: I): DEXSettings {
    return DEXSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DEXSettings>, I>>(
    object: I
  ): DEXSettings {
    const message = createBaseDEXSettings();
    message.unifiedRefAmount = object.unifiedRefAmount ?? "";
    message.whitelistedDenoms = object.whitelistedDenoms?.map((e) => e) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
