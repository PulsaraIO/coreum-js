import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract } from "./tx";
export declare namespace CosmWasm {
    const StoreAndInstantiateContract: <I extends {
        authority?: string;
        wasmByteCode?: Uint8Array;
        instantiatePermission?: {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[];
        };
        unpinCode?: boolean;
        admin?: string;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[];
        source?: string;
        builder?: string;
        codeHash?: Uint8Array;
    } & {
        authority?: string;
        wasmByteCode?: Uint8Array;
        instantiatePermission?: {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[];
        } & {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[] & string[] & { [K in Exclude<keyof I["instantiatePermission"]["addresses"], keyof string[]>]: never; };
        } & { [K_1 in Exclude<keyof I["instantiatePermission"], keyof import("./types").AccessConfig>]: never; };
        unpinCode?: boolean;
        admin?: string;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["funds"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_3 in Exclude<keyof I["funds"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        source?: string;
        builder?: string;
        codeHash?: Uint8Array;
    } & { [K_4 in Exclude<keyof I, keyof MsgStoreAndInstantiateContract>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgStoreAndInstantiateContract;
    };
    const UnpinCodes: <I extends {
        authority?: string;
        codeIds?: number[];
    } & {
        authority?: string;
        codeIds?: number[] & number[] & { [K in Exclude<keyof I["codeIds"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgUnpinCodes>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgUnpinCodes;
    };
    const PinCodes: <I extends {
        authority?: string;
        codeIds?: number[];
    } & {
        authority?: string;
        codeIds?: number[] & number[] & { [K in Exclude<keyof I["codeIds"], keyof number[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgPinCodes>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgPinCodes;
    };
    const SudoContract: <I extends {
        authority?: string;
        contract?: string;
        msg?: Uint8Array;
    } & {
        authority?: string;
        contract?: string;
        msg?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof MsgSudoContract>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgSudoContract;
    };
    const UpdateParams: <I extends {
        authority?: string;
        params?: {
            codeUploadAccess?: {
                permission?: import("./types").AccessType;
                address?: string;
                addresses?: string[];
            };
            instantiateDefaultPermission?: import("./types").AccessType;
        };
    } & {
        authority?: string;
        params?: {
            codeUploadAccess?: {
                permission?: import("./types").AccessType;
                address?: string;
                addresses?: string[];
            };
            instantiateDefaultPermission?: import("./types").AccessType;
        } & {
            codeUploadAccess?: {
                permission?: import("./types").AccessType;
                address?: string;
                addresses?: string[];
            } & {
                permission?: import("./types").AccessType;
                address?: string;
                addresses?: string[] & string[] & { [K in Exclude<keyof I["params"]["codeUploadAccess"]["addresses"], keyof string[]>]: never; };
            } & { [K_1 in Exclude<keyof I["params"]["codeUploadAccess"], keyof import("./types").AccessConfig>]: never; };
            instantiateDefaultPermission?: import("./types").AccessType;
        } & { [K_2 in Exclude<keyof I["params"], keyof import("./types").Params>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgUpdateParams;
    };
    const UpdateInstantiateConfig: <I extends {
        sender?: string;
        codeId?: number;
        newInstantiatePermission?: {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[];
        };
    } & {
        sender?: string;
        codeId?: number;
        newInstantiatePermission?: {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[];
        } & {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[] & string[] & { [K in Exclude<keyof I["newInstantiatePermission"]["addresses"], keyof string[]>]: never; };
        } & { [K_1 in Exclude<keyof I["newInstantiatePermission"], keyof import("./types").AccessConfig>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgUpdateInstantiateConfig>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgUpdateInstantiateConfig;
    };
    const StoreCode: <I extends {
        sender?: string;
        wasmByteCode?: Uint8Array;
        instantiatePermission?: {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[];
        };
    } & {
        sender?: string;
        wasmByteCode?: Uint8Array;
        instantiatePermission?: {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[];
        } & {
            permission?: import("./types").AccessType;
            address?: string;
            addresses?: string[] & string[] & { [K in Exclude<keyof I["instantiatePermission"]["addresses"], keyof string[]>]: never; };
        } & { [K_1 in Exclude<keyof I["instantiatePermission"], keyof import("./types").AccessConfig>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgStoreCode>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgStoreCode;
    };
    const InstantiateContract: <I extends {
        sender?: string;
        admin?: string;
        codeId?: number;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        admin?: string;
        codeId?: number;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["funds"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["funds"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgInstantiateContract>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgInstantiateContract;
    };
    const InstantiateContract2: <I extends {
        sender?: string;
        admin?: string;
        codeId?: number;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[];
        salt?: Uint8Array;
        fixMsg?: boolean;
    } & {
        sender?: string;
        admin?: string;
        codeId?: number;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["funds"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["funds"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        salt?: Uint8Array;
        fixMsg?: boolean;
    } & { [K_2 in Exclude<keyof I, keyof MsgInstantiateContract2>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgInstantiateContract2;
    };
    const ClearAdmin: <I extends {
        sender?: string;
        contract?: string;
    } & {
        sender?: string;
        contract?: string;
    } & { [K in Exclude<keyof I, keyof MsgClearAdmin>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgClearAdmin;
    };
    const UpdateAdmin: <I extends {
        sender?: string;
        newAdmin?: string;
        contract?: string;
    } & {
        sender?: string;
        newAdmin?: string;
        contract?: string;
    } & { [K in Exclude<keyof I, keyof MsgUpdateAdmin>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgUpdateAdmin;
    };
    const ExecuteContract: <I extends {
        sender?: string;
        contract?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        contract?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["funds"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["funds"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgExecuteContract>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgExecuteContract;
    };
    const MigrateContract: <I extends {
        sender?: string;
        contract?: string;
        codeId?: number;
        msg?: Uint8Array;
    } & {
        sender?: string;
        contract?: string;
        codeId?: number;
        msg?: Uint8Array;
    } & { [K in Exclude<keyof I, keyof MsgMigrateContract>]: never; }>(object: I) => {
        typeUrl: string;
        value: MsgMigrateContract;
    };
}
