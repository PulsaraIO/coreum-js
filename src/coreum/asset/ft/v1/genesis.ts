// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.21.12
// source: coreum-protos/ft/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { DEXSettings, Token } from "./token";

export const protobufPackage = "coreum.asset.ft.v1";

/** GenesisState defines the module genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  /** tokens keep the fungible token state */
  tokens: Token[];
  /** frozen_balances contains the frozen balances on all of the accounts */
  frozenBalances: Balance[];
  /** whitelisted_balances contains the whitelisted balances on all of the accounts */
  whitelistedBalances: Balance[];
  /** pending_token_upgrades contains pending token upgrades. */
  pendingTokenUpgrades: PendingTokenUpgrade[];
  /** dex_locked_balances contains the DEX locked balances on all of the accounts */
  dexLockedBalances: Balance[];
  dexExpectedToReceiveBalances: Balance[];
  dexSettings: DEXSettingsWithDenom[];
}

/** Balance defines an account address and balance pair used module genesis genesis state. */
export interface Balance {
  /** address is the address of the balance holder. */
  address: string;
  /** coins defines the different coins this balance holds. */
  coins: Coin[];
}

/** PendingTokenUpgrade stores the version of pending token upgrade. */
export interface PendingTokenUpgrade {
  denom: string;
  version: number;
}

export interface DEXSettingsWithDenom {
  denom: string;
  dexSettings: DEXSettings | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokens: [],
    frozenBalances: [],
    whitelistedBalances: [],
    pendingTokenUpgrades: [],
    dexLockedBalances: [],
    dexExpectedToReceiveBalances: [],
    dexSettings: [],
  };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(
    message: GenesisState,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.frozenBalances) {
      Balance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.whitelistedBalances) {
      Balance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pendingTokenUpgrades) {
      PendingTokenUpgrade.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.dexLockedBalances) {
      Balance.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.dexExpectedToReceiveBalances) {
      Balance.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.dexSettings) {
      DEXSettingsWithDenom.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.tokens.push(Token.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.frozenBalances.push(Balance.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.whitelistedBalances.push(
            Balance.decode(reader, reader.uint32())
          );
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.pendingTokenUpgrades.push(
            PendingTokenUpgrade.decode(reader, reader.uint32())
          );
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.dexLockedBalances.push(
            Balance.decode(reader, reader.uint32())
          );
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.dexExpectedToReceiveBalances.push(
            Balance.decode(reader, reader.uint32())
          );
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.dexSettings.push(
            DEXSettingsWithDenom.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokens: globalThis.Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => Token.fromJSON(e))
        : [],
      frozenBalances: globalThis.Array.isArray(object?.frozenBalances)
        ? object.frozenBalances.map((e: any) => Balance.fromJSON(e))
        : [],
      whitelistedBalances: globalThis.Array.isArray(object?.whitelistedBalances)
        ? object.whitelistedBalances.map((e: any) => Balance.fromJSON(e))
        : [],
      pendingTokenUpgrades: globalThis.Array.isArray(
        object?.pendingTokenUpgrades
      )
        ? object.pendingTokenUpgrades.map((e: any) =>
            PendingTokenUpgrade.fromJSON(e)
          )
        : [],
      dexLockedBalances: globalThis.Array.isArray(object?.dexLockedBalances)
        ? object.dexLockedBalances.map((e: any) => Balance.fromJSON(e))
        : [],
      dexExpectedToReceiveBalances: globalThis.Array.isArray(
        object?.dexExpectedToReceiveBalances
      )
        ? object.dexExpectedToReceiveBalances.map((e: any) =>
            Balance.fromJSON(e)
          )
        : [],
      dexSettings: globalThis.Array.isArray(object?.dexSettings)
        ? object.dexSettings.map((e: any) => DEXSettingsWithDenom.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) => Token.toJSON(e));
    }
    if (message.frozenBalances?.length) {
      obj.frozenBalances = message.frozenBalances.map((e) => Balance.toJSON(e));
    }
    if (message.whitelistedBalances?.length) {
      obj.whitelistedBalances = message.whitelistedBalances.map((e) =>
        Balance.toJSON(e)
      );
    }
    if (message.pendingTokenUpgrades?.length) {
      obj.pendingTokenUpgrades = message.pendingTokenUpgrades.map((e) =>
        PendingTokenUpgrade.toJSON(e)
      );
    }
    if (message.dexLockedBalances?.length) {
      obj.dexLockedBalances = message.dexLockedBalances.map((e) =>
        Balance.toJSON(e)
      );
    }
    if (message.dexExpectedToReceiveBalances?.length) {
      obj.dexExpectedToReceiveBalances =
        message.dexExpectedToReceiveBalances.map((e) => Balance.toJSON(e));
    }
    if (message.dexSettings?.length) {
      obj.dexSettings = message.dexSettings.map((e) =>
        DEXSettingsWithDenom.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(
    base?: I
  ): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    message.frozenBalances =
      object.frozenBalances?.map((e) => Balance.fromPartial(e)) || [];
    message.whitelistedBalances =
      object.whitelistedBalances?.map((e) => Balance.fromPartial(e)) || [];
    message.pendingTokenUpgrades =
      object.pendingTokenUpgrades?.map((e) =>
        PendingTokenUpgrade.fromPartial(e)
      ) || [];
    message.dexLockedBalances =
      object.dexLockedBalances?.map((e) => Balance.fromPartial(e)) || [];
    message.dexExpectedToReceiveBalances =
      object.dexExpectedToReceiveBalances?.map((e) => Balance.fromPartial(e)) ||
      [];
    message.dexSettings =
      object.dexSettings?.map((e) => DEXSettingsWithDenom.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBalance(): Balance {
  return { address: "", coins: [] };
}

export const Balance: MessageFns<Balance> = {
  encode(
    message: Balance,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Balance {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Balance {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      coins: globalThis.Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.coins?.length) {
      obj.coins = message.coins.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Balance>, I>>(base?: I): Balance {
    return Balance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Balance>, I>>(object: I): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBasePendingTokenUpgrade(): PendingTokenUpgrade {
  return { denom: "", version: 0 };
}

export const PendingTokenUpgrade: MessageFns<PendingTokenUpgrade> = {
  encode(
    message: PendingTokenUpgrade,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): PendingTokenUpgrade {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.version = reader.uint32();
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

  fromJSON(object: any): PendingTokenUpgrade {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
    };
  },

  toJSON(message: PendingTokenUpgrade): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingTokenUpgrade>, I>>(
    base?: I
  ): PendingTokenUpgrade {
    return PendingTokenUpgrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PendingTokenUpgrade>, I>>(
    object: I
  ): PendingTokenUpgrade {
    const message = createBasePendingTokenUpgrade();
    message.denom = object.denom ?? "";
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseDEXSettingsWithDenom(): DEXSettingsWithDenom {
  return { denom: "", dexSettings: undefined };
}

export const DEXSettingsWithDenom: MessageFns<DEXSettingsWithDenom> = {
  encode(
    message: DEXSettingsWithDenom,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.dexSettings !== undefined) {
      DEXSettings.encode(
        message.dexSettings,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): DEXSettingsWithDenom {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDEXSettingsWithDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.dexSettings = DEXSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): DEXSettingsWithDenom {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      dexSettings: isSet(object.dexSettings)
        ? DEXSettings.fromJSON(object.dexSettings)
        : undefined,
    };
  },

  toJSON(message: DEXSettingsWithDenom): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.dexSettings !== undefined) {
      obj.dexSettings = DEXSettings.toJSON(message.dexSettings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DEXSettingsWithDenom>, I>>(
    base?: I
  ): DEXSettingsWithDenom {
    return DEXSettingsWithDenom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DEXSettingsWithDenom>, I>>(
    object: I
  ): DEXSettingsWithDenom {
    const message = createBaseDEXSettingsWithDenom();
    message.denom = object.denom ?? "";
    message.dexSettings =
      object.dexSettings !== undefined && object.dexSettings !== null
        ? DEXSettings.fromPartial(object.dexSettings)
        : undefined;
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
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
