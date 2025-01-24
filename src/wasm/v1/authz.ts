/* eslint-disable */
import Long from "long";
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../cosmos/base/coin";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "cosmwasm.wasm.v1";

/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
  /** Grants for contract executions */
  grants: ContractGrant[];
}

/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
  /** Grants for contract migrations */
  grants: ContractGrant[];
}

/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
  /** Contract is the bech32 address of the smart contract */
  contract: string;
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit: Any | undefined;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter: Any | undefined;
}

/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
  /** Remaining number that is decremented on each execution */
  remaining: number;
}

/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}

/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
  /** Remaining number that is decremented on each execution */
  callsRemaining: number;
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}

/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {}

/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
  /** Messages is the list of unique keys */
  keys: string[];
}

/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
  /** Messages is the list of raw contract messages */
  messages: Uint8Array[];
}

function createBaseContractExecutionAuthorization(): ContractExecutionAuthorization {
  return { grants: [] };
}

export const ContractExecutionAuthorization = {
  encode(
    message: ContractExecutionAuthorization,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): ContractExecutionAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractExecutionAuthorization {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => ContractGrant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractExecutionAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) =>
        e ? ContractGrant.toJSON(e) : undefined
      );
    } else {
      obj.grants = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContractExecutionAuthorization>, I>>(
    base?: I
  ): ContractExecutionAuthorization {
    return ContractExecutionAuthorization.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContractExecutionAuthorization>, I>>(
    object: I
  ): ContractExecutionAuthorization {
    const message = createBaseContractExecutionAuthorization();
    message.grants =
      object.grants?.map((e) => ContractGrant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContractMigrationAuthorization(): ContractMigrationAuthorization {
  return { grants: [] };
}

export const ContractMigrationAuthorization = {
  encode(
    message: ContractMigrationAuthorization,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): ContractMigrationAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractMigrationAuthorization {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => ContractGrant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContractMigrationAuthorization): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) =>
        e ? ContractGrant.toJSON(e) : undefined
      );
    } else {
      obj.grants = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContractMigrationAuthorization>, I>>(
    base?: I
  ): ContractMigrationAuthorization {
    return ContractMigrationAuthorization.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContractMigrationAuthorization>, I>>(
    object: I
  ): ContractMigrationAuthorization {
    const message = createBaseContractMigrationAuthorization();
    message.grants =
      object.grants?.map((e) => ContractGrant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContractGrant(): ContractGrant {
  return { contract: "", limit: undefined, filter: undefined };
}

export const ContractGrant = {
  encode(
    message: ContractGrant,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== undefined) {
      Any.encode(message.limit, writer.uint32(18).fork()).join();
    }
    if (message.filter !== undefined) {
      Any.encode(message.filter, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContractGrant {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.limit = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractGrant {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      limit: isSet(object.limit) ? Any.fromJSON(object.limit) : undefined,
      filter: isSet(object.filter) ? Any.fromJSON(object.filter) : undefined,
    };
  },

  toJSON(message: ContractGrant): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.limit !== undefined &&
      (obj.limit = message.limit ? Any.toJSON(message.limit) : undefined);
    message.filter !== undefined &&
      (obj.filter = message.filter ? Any.toJSON(message.filter) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ContractGrant>, I>>(
    base?: I
  ): ContractGrant {
    return ContractGrant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContractGrant>, I>>(
    object: I
  ): ContractGrant {
    const message = createBaseContractGrant();
    message.contract = object.contract ?? "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Any.fromPartial(object.limit)
        : undefined;
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? Any.fromPartial(object.filter)
        : undefined;
    return message;
  },
};

function createBaseMaxCallsLimit(): MaxCallsLimit {
  return { remaining: 0 };
}

export const MaxCallsLimit = {
  encode(
    message: MaxCallsLimit,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.remaining !== 0) {
      writer.uint32(8).uint64(message.remaining);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MaxCallsLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.remaining = Number(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaxCallsLimit {
    return {
      remaining: isSet(object.remaining) ? Number(object.remaining) : 0,
    };
  },

  toJSON(message: MaxCallsLimit): unknown {
    const obj: any = {};
    message.remaining !== undefined &&
      (obj.remaining = Math.round(message.remaining));
    return obj;
  },

  create<I extends Exact<DeepPartial<MaxCallsLimit>, I>>(
    base?: I
  ): MaxCallsLimit {
    return MaxCallsLimit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MaxCallsLimit>, I>>(
    object: I
  ): MaxCallsLimit {
    const message = createBaseMaxCallsLimit();
    message.remaining = object.remaining ?? 0;
    return message;
  },
};

function createBaseMaxFundsLimit(): MaxFundsLimit {
  return { amounts: [] };
}

export const MaxFundsLimit = {
  encode(
    message: MaxFundsLimit,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MaxFundsLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amounts.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaxFundsLimit {
    return {
      amounts: Array.isArray(object?.amounts)
        ? object.amounts.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MaxFundsLimit): unknown {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.amounts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MaxFundsLimit>, I>>(
    base?: I
  ): MaxFundsLimit {
    return MaxFundsLimit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MaxFundsLimit>, I>>(
    object: I
  ): MaxFundsLimit {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCombinedLimit(): CombinedLimit {
  return { callsRemaining: 0, amounts: [] };
}

export const CombinedLimit = {
  encode(
    message: CombinedLimit,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.callsRemaining !== 0) {
      writer.uint32(8).uint64(message.callsRemaining);
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CombinedLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.callsRemaining = Number(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amounts.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CombinedLimit {
    return {
      callsRemaining: isSet(object.callsRemaining)
        ? Number(object.callsRemaining)
        : 0,
      amounts: Array.isArray(object?.amounts)
        ? object.amounts.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CombinedLimit): unknown {
    const obj: any = {};
    message.callsRemaining !== undefined &&
      (obj.callsRemaining = Math.round(message.callsRemaining));
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.amounts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CombinedLimit>, I>>(
    base?: I
  ): CombinedLimit {
    return CombinedLimit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CombinedLimit>, I>>(
    object: I
  ): CombinedLimit {
    const message = createBaseCombinedLimit();
    message.callsRemaining = object.callsRemaining ?? 0;
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAllowAllMessagesFilter(): AllowAllMessagesFilter {
  return {};
}

export const AllowAllMessagesFilter = {
  encode(
    _: AllowAllMessagesFilter,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): AllowAllMessagesFilter {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AllowAllMessagesFilter {
    return {};
  },

  toJSON(_: AllowAllMessagesFilter): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AllowAllMessagesFilter>, I>>(
    base?: I
  ): AllowAllMessagesFilter {
    return AllowAllMessagesFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AllowAllMessagesFilter>, I>>(
    _: I
  ): AllowAllMessagesFilter {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },
};

function createBaseAcceptedMessageKeysFilter(): AcceptedMessageKeysFilter {
  return { keys: [] };
}

export const AcceptedMessageKeysFilter = {
  encode(
    message: AcceptedMessageKeysFilter,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): AcceptedMessageKeysFilter {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptedMessageKeysFilter {
    return {
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: AcceptedMessageKeysFilter): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptedMessageKeysFilter>, I>>(
    base?: I
  ): AcceptedMessageKeysFilter {
    return AcceptedMessageKeysFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcceptedMessageKeysFilter>, I>>(
    object: I
  ): AcceptedMessageKeysFilter {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseAcceptedMessagesFilter(): AcceptedMessagesFilter {
  return { messages: [] };
}

export const AcceptedMessagesFilter = {
  encode(
    message: AcceptedMessagesFilter,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): AcceptedMessagesFilter {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptedMessagesFilter {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: AcceptedMessagesFilter): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptedMessagesFilter>, I>>(
    base?: I
  ): AcceptedMessagesFilter {
    return AcceptedMessagesFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcceptedMessagesFilter>, I>>(
    object: I
  ): AcceptedMessagesFilter {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map((e) => e) || [];
    return message;
  },
};

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
