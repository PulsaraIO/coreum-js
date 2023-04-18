import {
  DirectSecp256k1HdWallet,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { bech32 } from "bech32";

export enum CoreumPrefixes {
  MAINNET = "core",
  TESTNET = "testcore",
  DEVNET = "devcore",
}

export const isValidCoreumAddress = (address: string) => {
  try {
    const { prefix = null } = bech32.decode(address);

    if (
      prefix !== CoreumPrefixes.MAINNET &&
      prefix !== CoreumPrefixes.DEVNET &&
      prefix !== CoreumPrefixes.TESTNET
    )
      return false;

    return true;
  } catch (e: any) {
    console.log(e);
    return false;
  }
};

export const generateKey = async (): Promise<string> => {
  const wallet: DirectSecp256k1HdWallet =
    await DirectSecp256k1HdWallet.generate(24);

  return wallet.mnemonic;
};

export const generateWalletFromMnemonic = async (
  mnemonic: string
): Promise<OfflineDirectSigner> => {
  const hdPath = "m/44'/990'/0'/0/0";
  const prefix = "testcore";

  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix,
    hdPaths: [stringToPath(hdPath)],
  });

  return wallet;
};
