export class Signer {
  #signerId: string = "default";
  protected _address: string;

  get address() {
    return this._address;
  }

  async sign(...args: any): Promise<any> {
    throw new Error("Method not implemented");
  }

  async requestConnection(): Promise<any> {
    throw new Error("Method not implemented");
  }
}
