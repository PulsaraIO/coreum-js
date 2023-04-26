import { OfflineDirectSigner } from "@cosmjs/proto-signing";
import { CoreumPrefixes } from "../types/coreum";
export declare const isValidCoreumAddress: (address: string) => boolean;
export declare const generateKey: () => Promise<string>;
export declare const generateWalletFromMnemonic: (mnemonic: string, prefix: CoreumPrefixes) => Promise<OfflineDirectSigner>;
