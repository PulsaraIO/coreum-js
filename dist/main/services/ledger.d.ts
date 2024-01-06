import { CosmosApp } from "@zondax/ledger-cosmos-js";
export declare class LedgerDevice {
    device: CosmosApp;
    private constructor();
    static connect(): Promise<LedgerDevice>;
    getAddress(): Promise<any>;
}
