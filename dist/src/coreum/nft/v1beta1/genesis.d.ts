import Long from "long";
import _m0 from "protobufjs/minimal";
import { Class, NFT } from "./nft";
export declare const protobufPackage = "coreum.nft.v1beta1";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    /** class defines the class of the nft type. */
    classes: Class[];
    entries: Entry[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFT[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        classes?: {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        entries?: {
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        classes?: ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["classes"][number]["data"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["classes"][number], keyof Class>]: never; })[] & { [K_2 in Exclude<keyof I["classes"], keyof {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        entries?: ({
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            owner?: string | undefined;
            nfts?: ({
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["entries"][number]["nfts"][number]["data"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["entries"][number]["nfts"][number], keyof NFT>]: never; })[] & { [K_5 in Exclude<keyof I["entries"][number]["nfts"], keyof {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["entries"][number], keyof Entry>]: never; })[] & { [K_7 in Exclude<keyof I["entries"], keyof {
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        classes?: {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        entries?: {
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        classes?: ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_9 in Exclude<keyof I_1["classes"][number]["data"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["classes"][number], keyof Class>]: never; })[] & { [K_11 in Exclude<keyof I_1["classes"], keyof {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        entries?: ({
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            owner?: string | undefined;
            nfts?: ({
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_12 in Exclude<keyof I_1["entries"][number]["nfts"][number]["data"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I_1["entries"][number]["nfts"][number], keyof NFT>]: never; })[] & { [K_14 in Exclude<keyof I_1["entries"][number]["nfts"], keyof {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I_1["entries"][number], keyof Entry>]: never; })[] & { [K_16 in Exclude<keyof I_1["entries"], keyof {
            owner?: string | undefined;
            nfts?: {
                classId?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uriHash?: string | undefined;
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
export declare const Entry: {
    encode(message: Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entry;
    fromJSON(object: any): Entry;
    toJSON(message: Entry): unknown;
    create<I extends {
        owner?: string | undefined;
        nfts?: {
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        owner?: string | undefined;
        nfts?: ({
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["nfts"][number]["data"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["nfts"][number], keyof NFT>]: never; })[] & { [K_2 in Exclude<keyof I["nfts"], keyof {
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Entry>]: never; }>(base?: I | undefined): Entry;
    fromPartial<I_1 extends {
        owner?: string | undefined;
        nfts?: {
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        owner?: string | undefined;
        nfts?: ({
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_4 in Exclude<keyof I_1["nfts"][number]["data"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I_1["nfts"][number], keyof NFT>]: never; })[] & { [K_6 in Exclude<keyof I_1["nfts"], keyof {
            classId?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uriHash?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Entry>]: never; }>(object: I_1): Entry;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
