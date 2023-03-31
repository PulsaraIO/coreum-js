import {
  AccountData,
  DirectSecp256k1HdWallet,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { bech32 } from "bech32";
import CoreumClient from "../index";
import { CoreumPrefixes } from "../types/core";

export const isValidCoreumAddress = (address: string) => {
  try {
    const { prefix = null } = bech32.decode(address);

    console.log("PREFIX =>", prefix);
    console.log("MODE =>", CoreumClient.mode);

    if (prefix !== CoreumPrefixes[CoreumClient.mode]) return false;

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
