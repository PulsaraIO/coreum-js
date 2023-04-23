import { StdFee } from "@cosmjs/amino";
export declare enum WalletMethods {
    DCENT = "dcent",
    OFFLINE = "offline",
    COSMOSTATION = "cosmostation",
    MNEMONIC = "mnemonic"
}
export interface FeeCalculation {
    fee: StdFee;
    gas_wanted: number;
}
export interface FeeOptions {
    address?: string;
    gasLimit?: number;
}
