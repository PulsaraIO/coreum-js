/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { DEXSettings, Feature, featureFromJSON, featureToJSON } from "./token";

export const protobufPackage = "coreum.asset.ft.v1";

/** MsgIssue defines message to issue new fungible token. */
export interface MsgIssue {
  issuer: string;
  symbol: string;
  subunit: string;
  precision: number;
  initialAmount: string;
  description: string;
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
  uri: string;
  uriHash: string;
  /** extension_settings must be provided in case wasm extensions are enabled. */
  extensionSettings: ExtensionIssueSettings | undefined;
  /** dex_settings allowed to be customized by issuer */
  dexSettings: DEXSettings | undefined;
}

/**
 * ExtensionIssueSettings are settings that will be used to Instantiate the smart contract which contains
 * the source code for the extension.
 */
export interface ExtensionIssueSettings {
  /** code_id is the reference to the stored WASM code */
  codeId: number;
  /** label is optional metadata to be stored with a contract instance. */
  label: string;
  /** funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** optional json encoded data to pass to WASM on instantiation by the ft issuer */
  issuanceMsg: Uint8Array;
}

export interface MsgMint {
  sender: string;
  coin: Coin | undefined;
  recipient: string;
}

export interface MsgBurn {
  sender: string;
  coin: Coin | undefined;
}

export interface MsgFreeze {
  sender: string;
  account: string;
  coin: Coin | undefined;
}

export interface MsgUnfreeze {
  sender: string;
  account: string;
  coin: Coin | undefined;
}

export interface MsgSetFrozen {
  sender: string;
  account: string;
  coin: Coin | undefined;
}

export interface MsgGloballyFreeze {
  sender: string;
  denom: string;
}

export interface MsgGloballyUnfreeze {
  sender: string;
  denom: string;
}

export interface MsgClawback {
  sender: string;
  account: string;
  coin: Coin | undefined;
}

export interface MsgSetWhitelistedLimit {
  sender: string;
  account: string;
  coin: Coin | undefined;
}

export interface MsgTransferAdmin {
  sender: string;
  account: string;
  denom: string;
}

export interface MsgClearAdmin {
  sender: string;
  denom: string;
}

/** MsgUpgradeTokenV1 is the message upgrading token to V1. */
export interface MsgUpgradeTokenV1 {
  sender: string;
  denom: string;
  ibcEnabled: boolean;
}

export interface MsgUpdateParams {
  authority: string;
  params: Params | undefined;
}

export interface MsgUpdateDEXUnifiedRefAmount {
  sender: string;
  denom: string;
  /** unified_ref_amount is the approximate amount you need to by 1USD, used to define the price tick size */
  unifiedRefAmount: string;
}

export interface MsgUpdateDEXWhitelistedDenoms {
  sender: string;
  denom: string;
  /** whitelisted_denoms is the list of denoms to trade with. */
  whitelistedDenoms: string[];
}

export interface EmptyResponse {}

function createBaseMsgIssue(): MsgIssue {
  return {
    issuer: "",
    symbol: "",
    subunit: "",
    precision: 0,
    initialAmount: "",
    description: "",
    features: [],
    burnRate: "",
    sendCommissionRate: "",
    uri: "",
    uriHash: "",
    extensionSettings: undefined,
    dexSettings: undefined,
  };
}

export const MsgIssue = {
  encode(
    message: MsgIssue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.subunit !== "") {
      writer.uint32(26).string(message.subunit);
    }
    if (message.precision !== 0) {
      writer.uint32(32).uint32(message.precision);
    }
    if (message.initialAmount !== "") {
      writer.uint32(42).string(message.initialAmount);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    writer.uint32(58).fork();
    for (const v of message.features) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.burnRate !== "") {
      writer.uint32(66).string(message.burnRate);
    }
    if (message.sendCommissionRate !== "") {
      writer.uint32(74).string(message.sendCommissionRate);
    }
    if (message.uri !== "") {
      writer.uint32(82).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(90).string(message.uriHash);
    }
    if (message.extensionSettings !== undefined) {
      ExtensionIssueSettings.encode(
        message.extensionSettings,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.dexSettings !== undefined) {
      DEXSettings.encode(
        message.dexSettings,
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subunit = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.precision = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag === 56) {
            message.features.push(reader.int32() as any);

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.features.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.burnRate = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sendCommissionRate = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.uriHash = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.extensionSettings = ExtensionIssueSettings.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 13:
          if (tag !== 106) {
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

  fromJSON(object: any): MsgIssue {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      subunit: isSet(object.subunit) ? String(object.subunit) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0,
      initialAmount: isSet(object.initialAmount)
        ? String(object.initialAmount)
        : "",
      description: isSet(object.description) ? String(object.description) : "",
      features: Array.isArray(object?.features)
        ? object.features.map((e: any) => featureFromJSON(e))
        : [],
      burnRate: isSet(object.burnRate) ? String(object.burnRate) : "",
      sendCommissionRate: isSet(object.sendCommissionRate)
        ? String(object.sendCommissionRate)
        : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      extensionSettings: isSet(object.extensionSettings)
        ? ExtensionIssueSettings.fromJSON(object.extensionSettings)
        : undefined,
      dexSettings: isSet(object.dexSettings)
        ? DEXSettings.fromJSON(object.dexSettings)
        : undefined,
    };
  },

  toJSON(message: MsgIssue): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.subunit !== undefined && (obj.subunit = message.subunit);
    message.precision !== undefined &&
      (obj.precision = Math.round(message.precision));
    message.initialAmount !== undefined &&
      (obj.initialAmount = message.initialAmount);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.features) {
      obj.features = message.features.map((e) => featureToJSON(e));
    } else {
      obj.features = [];
    }
    message.burnRate !== undefined && (obj.burnRate = message.burnRate);
    message.sendCommissionRate !== undefined &&
      (obj.sendCommissionRate = message.sendCommissionRate);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.extensionSettings !== undefined &&
      (obj.extensionSettings = message.extensionSettings
        ? ExtensionIssueSettings.toJSON(message.extensionSettings)
        : undefined);
    message.dexSettings !== undefined &&
      (obj.dexSettings = message.dexSettings
        ? DEXSettings.toJSON(message.dexSettings)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIssue>, I>>(base?: I): MsgIssue {
    return MsgIssue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssue>, I>>(object: I): MsgIssue {
    const message = createBaseMsgIssue();
    message.issuer = object.issuer ?? "";
    message.symbol = object.symbol ?? "";
    message.subunit = object.subunit ?? "";
    message.precision = object.precision ?? 0;
    message.initialAmount = object.initialAmount ?? "";
    message.description = object.description ?? "";
    message.features = object.features?.map((e) => e) || [];
    message.burnRate = object.burnRate ?? "";
    message.sendCommissionRate = object.sendCommissionRate ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.extensionSettings =
      object.extensionSettings !== undefined &&
      object.extensionSettings !== null
        ? ExtensionIssueSettings.fromPartial(object.extensionSettings)
        : undefined;
    message.dexSettings =
      object.dexSettings !== undefined && object.dexSettings !== null
        ? DEXSettings.fromPartial(object.dexSettings)
        : undefined;
    return message;
  },
};

function createBaseExtensionIssueSettings(): ExtensionIssueSettings {
  return { codeId: 0, label: "", funds: [], issuanceMsg: new Uint8Array() };
}

export const ExtensionIssueSettings = {
  encode(
    message: ExtensionIssueSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.codeId !== 0) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.issuanceMsg.length !== 0) {
      writer.uint32(34).bytes(message.issuanceMsg);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExtensionIssueSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionIssueSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.label = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.funds.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.issuanceMsg = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionIssueSettings {
    return {
      codeId: isSet(object.codeId) ? Number(object.codeId) : 0,
      label: isSet(object.label) ? String(object.label) : "",
      funds: Array.isArray(object?.funds)
        ? object.funds.map((e: any) => Coin.fromJSON(e))
        : [],
      issuanceMsg: isSet(object.issuanceMsg)
        ? bytesFromBase64(object.issuanceMsg)
        : new Uint8Array(),
    };
  },

  toJSON(message: ExtensionIssueSettings): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = Math.round(message.codeId));
    message.label !== undefined && (obj.label = message.label);
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }
    message.issuanceMsg !== undefined &&
      (obj.issuanceMsg = base64FromBytes(
        message.issuanceMsg !== undefined
          ? message.issuanceMsg
          : new Uint8Array()
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtensionIssueSettings>, I>>(
    base?: I
  ): ExtensionIssueSettings {
    return ExtensionIssueSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExtensionIssueSettings>, I>>(
    object: I
  ): ExtensionIssueSettings {
    const message = createBaseExtensionIssueSettings();
    message.codeId = object.codeId ?? 0;
    message.label = object.label ?? "";
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    message.issuanceMsg = object.issuanceMsg ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgMint(): MsgMint {
  return { sender: "", coin: undefined, recipient: "" };
}

export const MsgMint = {
  encode(
    message: MsgMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recipient = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMint>, I>>(base?: I): MsgMint {
    return MsgMint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { sender: "", coin: undefined };
}

export const MsgBurn = {
  encode(
    message: MsgBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBurn>, I>>(base?: I): MsgBurn {
    return MsgBurn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgFreeze(): MsgFreeze {
  return { sender: "", account: "", coin: undefined };
}

export const MsgFreeze = {
  encode(
    message: MsgFreeze,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreeze {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgFreeze {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      account: isSet(object.account) ? String(object.account) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgFreeze): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.account !== undefined && (obj.account = message.account);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFreeze>, I>>(base?: I): MsgFreeze {
    return MsgFreeze.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgFreeze>, I>>(
    object: I
  ): MsgFreeze {
    const message = createBaseMsgFreeze();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgUnfreeze(): MsgUnfreeze {
  return { sender: "", account: "", coin: undefined };
}

export const MsgUnfreeze = {
  encode(
    message: MsgUnfreeze,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfreeze {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnfreeze {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      account: isSet(object.account) ? String(object.account) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgUnfreeze): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.account !== undefined && (obj.account = message.account);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUnfreeze>, I>>(base?: I): MsgUnfreeze {
    return MsgUnfreeze.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnfreeze>, I>>(
    object: I
  ): MsgUnfreeze {
    const message = createBaseMsgUnfreeze();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgSetFrozen(): MsgSetFrozen {
  return { sender: "", account: "", coin: undefined };
}

export const MsgSetFrozen = {
  encode(
    message: MsgSetFrozen,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFrozen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFrozen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetFrozen {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      account: isSet(object.account) ? String(object.account) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgSetFrozen): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.account !== undefined && (obj.account = message.account);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetFrozen>, I>>(
    base?: I
  ): MsgSetFrozen {
    return MsgSetFrozen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFrozen>, I>>(
    object: I
  ): MsgSetFrozen {
    const message = createBaseMsgSetFrozen();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgGloballyFreeze(): MsgGloballyFreeze {
  return { sender: "", denom: "" };
}

export const MsgGloballyFreeze = {
  encode(
    message: MsgGloballyFreeze,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGloballyFreeze {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGloballyFreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgGloballyFreeze {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgGloballyFreeze): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGloballyFreeze>, I>>(
    base?: I
  ): MsgGloballyFreeze {
    return MsgGloballyFreeze.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgGloballyFreeze>, I>>(
    object: I
  ): MsgGloballyFreeze {
    const message = createBaseMsgGloballyFreeze();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgGloballyUnfreeze(): MsgGloballyUnfreeze {
  return { sender: "", denom: "" };
}

export const MsgGloballyUnfreeze = {
  encode(
    message: MsgGloballyUnfreeze,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGloballyUnfreeze {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGloballyUnfreeze();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgGloballyUnfreeze {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgGloballyUnfreeze): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGloballyUnfreeze>, I>>(
    base?: I
  ): MsgGloballyUnfreeze {
    return MsgGloballyUnfreeze.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgGloballyUnfreeze>, I>>(
    object: I
  ): MsgGloballyUnfreeze {
    const message = createBaseMsgGloballyUnfreeze();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgClawback(): MsgClawback {
  return { sender: "", account: "", coin: undefined };
}

export const MsgClawback = {
  encode(
    message: MsgClawback,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawback {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClawback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClawback {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      account: isSet(object.account) ? String(object.account) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgClawback): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.account !== undefined && (obj.account = message.account);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClawback>, I>>(base?: I): MsgClawback {
    return MsgClawback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClawback>, I>>(
    object: I
  ): MsgClawback {
    const message = createBaseMsgClawback();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgSetWhitelistedLimit(): MsgSetWhitelistedLimit {
  return { sender: "", account: "", coin: undefined };
}

export const MsgSetWhitelistedLimit = {
  encode(
    message: MsgSetWhitelistedLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetWhitelistedLimit {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetWhitelistedLimit {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      account: isSet(object.account) ? String(object.account) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgSetWhitelistedLimit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.account !== undefined && (obj.account = message.account);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetWhitelistedLimit>, I>>(
    base?: I
  ): MsgSetWhitelistedLimit {
    return MsgSetWhitelistedLimit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetWhitelistedLimit>, I>>(
    object: I
  ): MsgSetWhitelistedLimit {
    const message = createBaseMsgSetWhitelistedLimit();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgTransferAdmin(): MsgTransferAdmin {
  return { sender: "", account: "", denom: "" };
}

export const MsgTransferAdmin = {
  encode(
    message: MsgTransferAdmin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferAdmin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgTransferAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      account: isSet(object.account) ? String(object.account) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgTransferAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.account !== undefined && (obj.account = message.account);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgTransferAdmin>, I>>(
    base?: I
  ): MsgTransferAdmin {
    return MsgTransferAdmin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferAdmin>, I>>(
    object: I
  ): MsgTransferAdmin {
    const message = createBaseMsgTransferAdmin();
    message.sender = object.sender ?? "";
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgClearAdmin(): MsgClearAdmin {
  return { sender: "", denom: "" };
}

export const MsgClearAdmin = {
  encode(
    message: MsgClearAdmin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgClearAdmin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgClearAdmin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(
    base?: I
  ): MsgClearAdmin {
    return MsgClearAdmin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearAdmin>, I>>(
    object: I
  ): MsgClearAdmin {
    const message = createBaseMsgClearAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgUpgradeTokenV1(): MsgUpgradeTokenV1 {
  return { sender: "", denom: "", ibcEnabled: false };
}

export const MsgUpgradeTokenV1 = {
  encode(
    message: MsgUpgradeTokenV1,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.ibcEnabled === true) {
      writer.uint32(24).bool(message.ibcEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeTokenV1 {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeTokenV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ibcEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpgradeTokenV1 {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      ibcEnabled: isSet(object.ibcEnabled) ? Boolean(object.ibcEnabled) : false,
    };
  },

  toJSON(message: MsgUpgradeTokenV1): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.ibcEnabled !== undefined && (obj.ibcEnabled = message.ibcEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpgradeTokenV1>, I>>(
    base?: I
  ): MsgUpgradeTokenV1 {
    return MsgUpgradeTokenV1.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpgradeTokenV1>, I>>(
    object: I
  ): MsgUpgradeTokenV1 {
    const message = createBaseMsgUpgradeTokenV1();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.ibcEnabled = object.ibcEnabled ?? false;
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    base?: I
  ): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateDEXUnifiedRefAmount(): MsgUpdateDEXUnifiedRefAmount {
  return { sender: "", denom: "", unifiedRefAmount: "" };
}

export const MsgUpdateDEXUnifiedRefAmount = {
  encode(
    message: MsgUpdateDEXUnifiedRefAmount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.unifiedRefAmount !== "") {
      writer.uint32(26).string(message.unifiedRefAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateDEXUnifiedRefAmount {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDEXUnifiedRefAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unifiedRefAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDEXUnifiedRefAmount {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      unifiedRefAmount: isSet(object.unifiedRefAmount)
        ? String(object.unifiedRefAmount)
        : "",
    };
  },

  toJSON(message: MsgUpdateDEXUnifiedRefAmount): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.unifiedRefAmount !== undefined &&
      (obj.unifiedRefAmount = message.unifiedRefAmount);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDEXUnifiedRefAmount>, I>>(
    base?: I
  ): MsgUpdateDEXUnifiedRefAmount {
    return MsgUpdateDEXUnifiedRefAmount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDEXUnifiedRefAmount>, I>>(
    object: I
  ): MsgUpdateDEXUnifiedRefAmount {
    const message = createBaseMsgUpdateDEXUnifiedRefAmount();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.unifiedRefAmount = object.unifiedRefAmount ?? "";
    return message;
  },
};

function createBaseMsgUpdateDEXWhitelistedDenoms(): MsgUpdateDEXWhitelistedDenoms {
  return { sender: "", denom: "", whitelistedDenoms: [] };
}

export const MsgUpdateDEXWhitelistedDenoms = {
  encode(
    message: MsgUpdateDEXWhitelistedDenoms,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    for (const v of message.whitelistedDenoms) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateDEXWhitelistedDenoms {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDEXWhitelistedDenoms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgUpdateDEXWhitelistedDenoms {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      whitelistedDenoms: Array.isArray(object?.whitelistedDenoms)
        ? object.whitelistedDenoms.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateDEXWhitelistedDenoms): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.whitelistedDenoms) {
      obj.whitelistedDenoms = message.whitelistedDenoms.map((e) => e);
    } else {
      obj.whitelistedDenoms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDEXWhitelistedDenoms>, I>>(
    base?: I
  ): MsgUpdateDEXWhitelistedDenoms {
    return MsgUpdateDEXWhitelistedDenoms.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDEXWhitelistedDenoms>, I>>(
    object: I
  ): MsgUpdateDEXWhitelistedDenoms {
    const message = createBaseMsgUpdateDEXWhitelistedDenoms();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.whitelistedDenoms = object.whitelistedDenoms?.map((e) => e) || [];
    return message;
  },
};

function createBaseEmptyResponse(): EmptyResponse {
  return {};
}

export const EmptyResponse = {
  encode(
    _: EmptyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): EmptyResponse {
    return {};
  },

  toJSON(_: EmptyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EmptyResponse>, I>>(
    base?: I
  ): EmptyResponse {
    return EmptyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EmptyResponse>, I>>(
    _: I
  ): EmptyResponse {
    const message = createBaseEmptyResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** Issue defines a method to issue a new fungible token. */
  Issue(request: MsgIssue): Promise<EmptyResponse>;
  /** Mint mints new fungible tokens. */
  Mint(request: MsgMint): Promise<EmptyResponse>;
  /** Burn burns the specified fungible tokens from senders balance if the sender has enough balance. */
  Burn(request: MsgBurn): Promise<EmptyResponse>;
  /**
   * Freeze freezes a part of the fungible tokens in an
   * account, only if the freezable feature is enabled on that token.
   */
  Freeze(request: MsgFreeze): Promise<EmptyResponse>;
  /**
   * Unfreeze unfreezes a part of the frozen fungible tokens in an
   * account, only if there are such frozen tokens on that account.
   */
  Unfreeze(request: MsgUnfreeze): Promise<EmptyResponse>;
  /** SetFrozen sets the absolute value of frozen amount. */
  SetFrozen(request: MsgSetFrozen): Promise<EmptyResponse>;
  /**
   * GloballyFreeze freezes fungible token so no operations are allowed with it before unfrozen.
   * This operation is idempotent so global freeze of already frozen token does nothing.
   */
  GloballyFreeze(request: MsgGloballyFreeze): Promise<EmptyResponse>;
  /**
   * GloballyUnfreeze unfreezes fungible token and unblocks basic operations on it.
   * This operation is idempotent so global unfreezing of non-frozen token does nothing.
   */
  GloballyUnfreeze(request: MsgGloballyUnfreeze): Promise<EmptyResponse>;
  /**
   * Clawback confiscates a part of fungible tokens from an account
   * to the admin, only if the clawback feature is enabled on that token.
   */
  Clawback(request: MsgClawback): Promise<EmptyResponse>;
  /** SetWhitelistedLimit sets the limit of how many tokens a specific account may hold. */
  SetWhitelistedLimit(request: MsgSetWhitelistedLimit): Promise<EmptyResponse>;
  /** TransferAdmin changes admin of a fungible token. */
  TransferAdmin(request: MsgTransferAdmin): Promise<EmptyResponse>;
  /** ClearAdmin removes admin of a fungible token. */
  ClearAdmin(request: MsgClearAdmin): Promise<EmptyResponse>;
  /** TokenUpgradeV1 upgrades token to version V1. */
  UpgradeTokenV1(request: MsgUpgradeTokenV1): Promise<EmptyResponse>;
  /**
   * UpdateParams is a governance operation to modify the parameters of the module.
   * NOTE: all parameters must be provided.
   */
  UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse>;
  /** UpdateDEXUnifiedRefAmount updates DEX unified ref amount. */
  UpdateDEXUnifiedRefAmount(
    request: MsgUpdateDEXUnifiedRefAmount
  ): Promise<EmptyResponse>;
  /** UpdateDEXWhitelistedDenoms updates DEX whitelisted denoms. */
  UpdateDEXWhitelistedDenoms(
    request: MsgUpdateDEXWhitelistedDenoms
  ): Promise<EmptyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "coreum.asset.ft.v1.Msg";
    this.rpc = rpc;
    this.Issue = this.Issue.bind(this);
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
    this.Freeze = this.Freeze.bind(this);
    this.Unfreeze = this.Unfreeze.bind(this);
    this.SetFrozen = this.SetFrozen.bind(this);
    this.GloballyFreeze = this.GloballyFreeze.bind(this);
    this.GloballyUnfreeze = this.GloballyUnfreeze.bind(this);
    this.Clawback = this.Clawback.bind(this);
    this.SetWhitelistedLimit = this.SetWhitelistedLimit.bind(this);
    this.TransferAdmin = this.TransferAdmin.bind(this);
    this.ClearAdmin = this.ClearAdmin.bind(this);
    this.UpgradeTokenV1 = this.UpgradeTokenV1.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.UpdateDEXUnifiedRefAmount = this.UpdateDEXUnifiedRefAmount.bind(this);
    this.UpdateDEXWhitelistedDenoms =
      this.UpdateDEXWhitelistedDenoms.bind(this);
  }
  Issue(request: MsgIssue): Promise<EmptyResponse> {
    const data = MsgIssue.encode(request).finish();
    const promise = this.rpc.request(this.service, "Issue", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  Mint(request: MsgMint): Promise<EmptyResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request(this.service, "Mint", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  Burn(request: MsgBurn): Promise<EmptyResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request(this.service, "Burn", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  Freeze(request: MsgFreeze): Promise<EmptyResponse> {
    const data = MsgFreeze.encode(request).finish();
    const promise = this.rpc.request(this.service, "Freeze", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  Unfreeze(request: MsgUnfreeze): Promise<EmptyResponse> {
    const data = MsgUnfreeze.encode(request).finish();
    const promise = this.rpc.request(this.service, "Unfreeze", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  SetFrozen(request: MsgSetFrozen): Promise<EmptyResponse> {
    const data = MsgSetFrozen.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetFrozen", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  GloballyFreeze(request: MsgGloballyFreeze): Promise<EmptyResponse> {
    const data = MsgGloballyFreeze.encode(request).finish();
    const promise = this.rpc.request(this.service, "GloballyFreeze", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  GloballyUnfreeze(request: MsgGloballyUnfreeze): Promise<EmptyResponse> {
    const data = MsgGloballyUnfreeze.encode(request).finish();
    const promise = this.rpc.request(this.service, "GloballyUnfreeze", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  Clawback(request: MsgClawback): Promise<EmptyResponse> {
    const data = MsgClawback.encode(request).finish();
    const promise = this.rpc.request(this.service, "Clawback", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  SetWhitelistedLimit(request: MsgSetWhitelistedLimit): Promise<EmptyResponse> {
    const data = MsgSetWhitelistedLimit.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetWhitelistedLimit", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  TransferAdmin(request: MsgTransferAdmin): Promise<EmptyResponse> {
    const data = MsgTransferAdmin.encode(request).finish();
    const promise = this.rpc.request(this.service, "TransferAdmin", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  ClearAdmin(request: MsgClearAdmin): Promise<EmptyResponse> {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClearAdmin", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  UpgradeTokenV1(request: MsgUpgradeTokenV1): Promise<EmptyResponse> {
    const data = MsgUpgradeTokenV1.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpgradeTokenV1", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<EmptyResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  UpdateDEXUnifiedRefAmount(
    request: MsgUpdateDEXUnifiedRefAmount
  ): Promise<EmptyResponse> {
    const data = MsgUpdateDEXUnifiedRefAmount.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "UpdateDEXUnifiedRefAmount",
      data
    );
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }

  UpdateDEXWhitelistedDenoms(
    request: MsgUpdateDEXWhitelistedDenoms
  ): Promise<EmptyResponse> {
    const data = MsgUpdateDEXWhitelistedDenoms.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "UpdateDEXWhitelistedDenoms",
      data
    );
    return promise.then((data) =>
      EmptyResponse.decode(_m0.Reader.create(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      "Value is larger than Number.MAX_SAFE_INTEGER"
    );
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
