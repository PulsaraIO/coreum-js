class Signer {
  #signerId: string = "default";

  async sign() {
    throw new Error("Method not implemented");
  }

  async requestConnection(): Promise<any> {
    throw new Error("Method not implemented");
  }
}

export default Signer;
