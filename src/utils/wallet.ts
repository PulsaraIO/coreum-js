import {
  DirectSecp256k1HdWallet,
  DirectSecp256k1Wallet,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { bech32 } from "bech32";
import { CoreumPrefixes } from "../types/coreum";
import { createMultisigThresholdPubkey, pubkeyToAddress } from "@cosmjs/amino";
import { MultisigAccount } from "../types";

/**
 *
 * @param address String representing an address on the Coreum blockchain
 * @returns A boolean defining if the passed address is a valid address on the Coreum Blockchain
 */
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

/**
 *
 * @param mnemonic Mnemonic words of a Cosmos SDK wallet
 * @param prefix The prefix to use - "core" | "testcore" | "devcore"
 * @returns A wallet with the default hdPath for the Coreum Blockchain, and with the selected prefix.
 */
export const generateWalletFromMnemonic = async (
  mnemonic: string,
  prefix: CoreumPrefixes
): Promise<OfflineDirectSigner> => {
  const hdPath = "m/44'/990'/0'/0/0";

  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix,
    hdPaths: [stringToPath(hdPath)],
  });

  return wallet;
};

export const generateWalletFromPrivKey = async (
  private_key: string,
  prefix: CoreumPrefixes
) => {
  const wallet = await DirectSecp256k1Wallet.fromKey(
    Uint8Array.from(Buffer.from(private_key, "hex")),
    prefix
  );

  return wallet;
};

export const generateMultisigFromPubkeys = (
  pubkeys: string[],
  threshold: number,
  prefix: string
): MultisigAccount => {
  const secpPubkeys = pubkeys.map((p) => {
    return {
      type: "tendermint/PubKeySecp256k1",
      value: p,
    };
  });

  const multisigPubkey = createMultisigThresholdPubkey(secpPubkeys, threshold);

  return {
    pubkey: multisigPubkey,
    address: pubkeyToAddress(multisigPubkey, prefix),
    threshold,
  };
};
