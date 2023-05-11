import { StdFee } from "@cosmjs/amino";
export declare enum WalletMethods {
    DCENT = "dcent",
    OFFLINE = "offline",
    COSMOSTATION = "cosmostation",
    MNEMONIC = "mnemonic",
    LEAP = "leap"
}
export interface FeeCalculation {
    fee: StdFee;
    gas_wanted: number;
}
export interface FeeOptions {
    address?: string;
    gasLimit?: number;
}
export declare enum ExtensionWallets {
    KEPLR = "keplr",
    COSMOSTATION = "cosmostation",
    LEAP = "leap"
}
