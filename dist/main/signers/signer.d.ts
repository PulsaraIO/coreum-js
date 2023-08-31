export declare class Signer {
    #private;
    protected _address: string;
    get address(): string;
    sign(...args: any): Promise<any>;
    requestConnection(): Promise<any>;
}
