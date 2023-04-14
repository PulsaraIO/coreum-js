import { OfflineDirectSigner } from "@cosmjs/proto-signing";
export declare const isValidCoreumAddress: (address: string) => boolean;
export declare const generateKey: () => Promise<string>;
export declare const generateWalletFromMnemonic: (mnemonic: string) => Promise<OfflineDirectSigner>;
