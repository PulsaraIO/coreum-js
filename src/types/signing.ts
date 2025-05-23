import { MultisigThresholdPubkey, StdFee } from "@cosmjs/amino";

export interface MultisigAccount {
  pubkey: MultisigThresholdPubkey;
  address: string;
  threshold: number;
}

export enum WalletMethods {
  OFFLINE = "offline",
  COSMOSTATION = "cosmostation",
  MNEMONIC = "mnemonic",
  LEAP = "leap",
}

export interface FeeCalculation {
  fee: StdFee;
  gas_wanted: number;
}

export interface FeeOptions {
  address?: string;
  gasLimit?: number;
}

export enum ExtensionWallets {
  KEPLR = "keplr",
  COSMOSTATION = "cosmostation",
  LEAP = "leap",
}
