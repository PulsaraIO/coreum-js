import CoreumClient, { coreToUCORE } from "./build/src";
import { CoreumModes } from "./build/src/types/coreum";

const testNode = "https://full-node-pluto.testnet-1.coreum.dev:26657";

// testcore1jvvruvqeywsdmzmszxswy9lz3cg8kyhalv9q7d
const wallet1 =
  "rhythm chase arrow trial forest hidden symbol just end fish blade aerobic like envelope rally six tiny author live put funny come noise outer";

// testcore1f87fykhk9gwp2tw6q7mk9s6xdjk6qpqy2cx9t9
const wallet2 =
  "soccer aunt matrix priority inhale friend panda page praise uncover gallery space resist circle fluid lazy brush coin beyond letter hour spare session wolf";

const amountUcore = {
  denom: "utestcore",
  amount: coreToUCORE("0.1"),
};

async function main() {
  const coreClient = await CoreumClient.connect(testNode, {
    signer: wallet1,
    developer_mode: CoreumModes.TESTNET,
  });

  await coreClient.send("testcore1f87fykhk9gwp2tw6q7mk9s6xdjk6qpqy2cx9t9", [
    amountUcore,
  ]);
}

main();
