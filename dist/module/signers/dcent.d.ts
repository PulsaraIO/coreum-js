import { EncodeObject } from "@cosmjs/proto-signing";
import { Signer } from "./signer";
import { GasPrice } from "@cosmjs/stargate";
interface DcentSignOptions {
    sequence: number;
    accountNumber: number;
    gasPrice: string | GasPrice;
    chainId: string;
    memo?: string;
}
export declare class DCentSigner extends Signer {
    #private;
    sign(msgs: readonly EncodeObject[], options: DcentSignOptions): Promise<void>;
    requestConnection(): Promise<{
        address: string;
    }>;
    private _getTxBody;
}
export {};
