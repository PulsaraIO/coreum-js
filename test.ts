import CoreumClient from "./build/src";

const testNode = "https://full-node-pluto.testnet-1.coreum.dev:26657";

async function main() {
  const coreClient = await CoreumClient.connect(testNode);
}
