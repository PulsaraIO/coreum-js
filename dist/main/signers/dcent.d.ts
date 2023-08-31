import Signer from "./signer";
export default class DCentSigner extends Signer {
    #private;
    requestConnection(): Promise<{
        address: string;
    }>;
}
