import { EncodeObject } from "@cosmjs/proto-signing";
import { CosmosApp } from "@zondax/ledger-cosmos-js";
export declare class LedgerDevice {
    device: CosmosApp;
    private constructor();
    static connect(): Promise<LedgerDevice>;
    getAddress(): Promise<any>;
    sign(msgs: readonly EncodeObject[], sequence: string | number, accountNumber: string | number, memo?: string): Promise<any>;
}
