import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import { LedgerSigner } from "@cosmjs/ledger-amino";
import { makeCosmoshubPath } from "@cosmjs/amino";
export const connectLedgerDevice = async (config) => {
    try {
        const ledgerTransport = await TransportWebUSB.create();
        return new LedgerSigner(ledgerTransport, {
            hdPaths: [makeCosmoshubPath(0)],
            prefix: config.chain_bech32_prefix,
        });
    }
    catch (e) {
        console.log("E_CONNECT_LEDGER =>", e);
        throw e;
    }
};
