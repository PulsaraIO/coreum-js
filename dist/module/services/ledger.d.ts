import { LedgerSigner } from "@cosmjs/ledger-amino";
import { CoreumNetworkConfig } from "../types";
export declare const connectLedgerDevice: (config: CoreumNetworkConfig) => Promise<LedgerSigner>;
