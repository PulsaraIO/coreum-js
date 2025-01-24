// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: coreum-protos/customparams/tx.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { StakingParams } from "./params";

export const protobufPackage = "coreum.customparams.v1";

export interface MsgUpdateStakingParams {
  authority: string;
  /** staking_params holds the parameters related to the staking module. */
  stakingParams: StakingParams | undefined;
}

export interface EmptyResponse {
}

function createBaseMsgUpdateStakingParams(): MsgUpdateStakingParams {
  return { authority: "", stakingParams: undefined };
}

export const MsgUpdateStakingParams: MessageFns<MsgUpdateStakingParams> = {
  encode(message: MsgUpdateStakingParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.stakingParams !== undefined) {
      StakingParams.encode(message.stakingParams, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateStakingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.stakingParams = StakingParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgUpdateStakingParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      stakingParams: isSet(object.stakingParams) ? StakingParams.fromJSON(object.stakingParams) : undefined,
    };
  },

  toJSON(message: MsgUpdateStakingParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.stakingParams !== undefined) {
      obj.stakingParams = StakingParams.toJSON(message.stakingParams);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateStakingParams>, I>>(base?: I): MsgUpdateStakingParams {
    return MsgUpdateStakingParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateStakingParams>, I>>(object: I): MsgUpdateStakingParams {
    const message = createBaseMsgUpdateStakingParams();
    message.authority = object.authority ?? "";
    message.stakingParams = (object.stakingParams !== undefined && object.stakingParams !== null)
      ? StakingParams.fromPartial(object.stakingParams)
      : undefined;
    return message;
  },
};

function createBaseEmptyResponse(): EmptyResponse {
  return {};
}

export const EmptyResponse: MessageFns<EmptyResponse> = {
  encode(_: EmptyResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EmptyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyResponse();
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

  fromJSON(_: any): EmptyResponse {
    return {};
  },

  toJSON(_: EmptyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EmptyResponse>, I>>(base?: I): EmptyResponse {
    return EmptyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EmptyResponse>, I>>(_: I): EmptyResponse {
    const message = createBaseEmptyResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateStakingParams is a governance operation that sets the staking parameter.
   * NOTE: all parameters must be provided.
   */
  UpdateStakingParams(request: MsgUpdateStakingParams): Promise<EmptyResponse>;
}

export const MsgServiceName = "coreum.customparams.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateStakingParams = this.UpdateStakingParams.bind(this);
  }
  UpdateStakingParams(request: MsgUpdateStakingParams): Promise<EmptyResponse> {
    const data = MsgUpdateStakingParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateStakingParams", data);
    return promise.then((data) => EmptyResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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
