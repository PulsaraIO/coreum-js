// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v3.21.12
// source: cosmos-sdk/proto/cosmos/nft/v1beta1/genesis.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Class, NFT } from "./nft";
export const protobufPackage = "cosmos.nft.v1beta1";
function createBaseGenesisState() {
    return { classes: [], entries: [] };
}
export const GenesisState = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.classes) {
            Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            Entry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromJSON(object) {
        return {
            classes: globalThis.Array.isArray(object?.classes)
                ? object.classes.map((e) => Class.fromJSON(e))
                : [],
            entries: globalThis.Array.isArray(object?.entries)
                ? object.entries.map((e) => Entry.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes?.length) {
            obj.classes = message.classes.map((e) => Class.toJSON(e));
        }
        if (message.entries?.length) {
            obj.entries = message.entries.map((e) => Entry.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.classes = object.classes?.map((e) => Class.fromPartial(e)) || [];
        message.entries = object.entries?.map((e) => Entry.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEntry() {
    return { owner: "", nfts: [] };
}
export const Entry = {
    encode(message, writer = new BinaryWriter()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.nfts) {
            NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
            nfts: globalThis.Array.isArray(object?.nfts)
                ? object.nfts.map((e) => NFT.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.nfts?.length) {
            obj.nfts = message.nfts.map((e) => NFT.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return Entry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEntry();
        message.owner = object.owner ?? "";
        message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
