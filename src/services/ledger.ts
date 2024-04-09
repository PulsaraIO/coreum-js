import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { LedgerSigner } from "@cosmjs/ledger-amino";
import { makeCosmoshubPath } from "@cosmjs/amino";
import { CoreumNetworkConfig } from "../types";

export const connectLedgerDevice = async (config: CoreumNetworkConfig) => {
  try {
    const ledgerTransport = await TransportWebUSB.create();

    return new LedgerSigner(ledgerTransport, {
      hdPaths: [makeCosmoshubPath(0) as any],
      prefix: config.chain_bech32_prefix,
    });
  } catch (e: any) {
    console.log("E_CONNECT_LEDGER =>", e);
    throw e;
  }
};
