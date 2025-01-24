/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export const protobufPackage = "cosmwasm.wasm.v1";

/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: number;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: number;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}

/** MsgIBCSendResponse */
export interface MsgIBCSendResponse {
  /** Sequence number of the IBC packet sent */
  sequence: number;
}

/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel: string;
}

function createBaseMsgIBCSend(): MsgIBCSend {
  return {
    channel: "",
    timeoutHeight: 0,
    timeoutTimestamp: 0,
    data: new Uint8Array(),
  };
}

export const MsgIBCSend = {
  encode(
    message: MsgIBCSend,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.timeoutHeight !== 0) {
      writer.uint32(32).uint64(message.timeoutHeight);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSend {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timeoutHeight = Number(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.timeoutTimestamp = Number(reader.uint64());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgIBCSend {
    return {
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeoutHeight: isSet(object.timeoutHeight)
        ? Number(object.timeoutHeight)
        : 0,
      timeoutTimestamp: isSet(object.timeoutTimestamp)
        ? Number(object.timeoutTimestamp)
        : 0,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = Math.round(message.timeoutHeight));
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIBCSend>, I>>(base?: I): MsgIBCSend {
    return MsgIBCSend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgIBCSend>, I>>(
    object: I
  ): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    message.timeoutHeight = object.timeoutHeight ?? 0;
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgIBCSendResponse(): MsgIBCSendResponse {
  return { sequence: 0 };
}

export const MsgIBCSendResponse = {
  encode(
    message: MsgIBCSendResponse,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.sequence !== 0) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgIBCSendResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sequence = Number(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgIBCSendResponse {
    return { sequence: isSet(object.sequence) ? Number(object.sequence) : 0 };
  },

  toJSON(message: MsgIBCSendResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = Math.round(message.sequence));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIBCSendResponse>, I>>(
    base?: I
  ): MsgIBCSendResponse {
    return MsgIBCSendResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgIBCSendResponse>, I>>(
    object: I
  ): MsgIBCSendResponse {
    const message = createBaseMsgIBCSendResponse();
    message.sequence = object.sequence ?? 0;
    return message;
  },
};

function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return { channel: "" };
}

export const MsgIBCCloseChannel = {
  encode(
    message: MsgIBCCloseChannel,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgIBCCloseChannel {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgIBCCloseChannel {
    return { channel: isSet(object.channel) ? String(object.channel) : "" };
  },

  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIBCCloseChannel>, I>>(
    base?: I
  ): MsgIBCCloseChannel {
    return MsgIBCCloseChannel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgIBCCloseChannel>, I>>(
    object: I
  ): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
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
