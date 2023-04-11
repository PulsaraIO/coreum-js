import { GeneratedType } from "@cosmjs/proto-signing";
export interface CoreumMessage {
    typeUrl: string;
    value: any;
}
export declare const coreumRegistry: ReadonlyArray<[string, GeneratedType]>;
export * as FTMessages from "./asset/ft/v1/tx";
export * as NFTMessages from "./asset/nft/v1/tx";
export * as NFTBetaMessages from "./nft/v1beta1/tx";
