// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.21.12
// source: cosmos-sdk/proto/cosmos/nft/v1beta1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Class, NFT } from "./nft";

export const protobufPackage = "cosmos.nft.v1beta1";

/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  /** class defines the class of the nft type. */
  classes: Class[];
  /** entry defines all nft owned by a person. */
  entries: Entry[];
}

/** Entry Defines all nft owned by a person */
export interface Entry {
  /** owner is the owner address of the following nft */
  owner: string;
  /** nfts is a group of nfts of the same owner */
  nfts: NFT[];
}

function createBaseGenesisState(): GenesisState {
  return { classes: [], entries: [] };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(
    message: GenesisState,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.classes.push(Class.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.entries.push(Entry.decode(reader, reader.uint32()));
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
      classes: globalThis.Array.isArray(object?.classes)
        ? object.classes.map((e: any) => Class.fromJSON(e))
        : [],
      entries: globalThis.Array.isArray(object?.entries)
        ? object.entries.map((e: any) => Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.classes?.length) {
      obj.classes = message.classes.map((e) => Class.toJSON(e));
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => Entry.toJSON(e));
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
    message.classes = object.classes?.map((e) => Class.fromPartial(e)) || [];
    message.entries = object.entries?.map((e) => Entry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntry(): Entry {
  return { owner: "", nfts: [] };
}

export const Entry: MessageFns<Entry> = {
  encode(
    message: Entry,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Entry {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.nfts.push(NFT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Entry {
    return {
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      nfts: globalThis.Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => NFT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Entry): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.nfts?.length) {
      obj.nfts = message.nfts.map((e) => NFT.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Entry>, I>>(base?: I): Entry {
    return Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Entry>, I>>(object: I): Entry {
    const message = createBaseEntry();
    message.owner = object.owner ?? "";
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
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
