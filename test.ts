import Mantle, {
  coreToUCORE,
  parseFloatToRoyaltyRate,
  NFTMessages,
} from "./lib";
import { CoreumModes, CoreumTypeUrl } from "./lib/types";
import { ClassFeature } from "./lib/coreum/asset/nft/v1/nft";
import { DeliverTxResponse } from "@cosmjs/stargate";

const testNode = "full-node-pluto.testnet-1.coreum.dev:26657";
// const testWSNode = "wss://full-node-eris.testnet-1.coreum.dev:26657";

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
  const mantle = await Mantle.connect(testNode, {
    signer: wallet1,
    developer_mode: CoreumModes.TESTNET,
  });

  const query = `message.action='${CoreumTypeUrl.NFT}MsgIssueClass'`;

  const subscription = await mantle.subscribeToEvent(query);

  subscription.events.on(query, (data) => {
    console.log(data);
  });

  const classIssue = (await mantle.submit([
    {
      typeUrl: CoreumTypeUrl.NFT + "MsgIssueClass",
      value: NFTMessages.MsgIssueClass.fromPartial({
        symbol: `SYMBOL${new Date().getMilliseconds()}`,
        issuer: "testcore1jvvruvqeywsdmzmszxswy9lz3cg8kyhalv9q7d",
        name: "Super NFT Class 3",
        description: "My first nft class 3",
        features: [ClassFeature.whitelisting],
        royaltyRate: parseFloatToRoyaltyRate(5),
      }),
    },
  ])) as DeliverTxResponse;

  // const { nft, nftbeta, ft, staking } = coreClient.queryClients;

  // const query = await nft.class({
  //   id: "symbol754-testcore1jvvruvqeywsdmzmszxswy9lz3cg8kyhalv9q7d",
  // });

  // const validators = await staking.validators("BOND_STATUS_BONDED");

  // const nftParams = q.nft?.params({});

  // console.log(nftParams);
  // const queryClass = await coreClient.query({
  //   data: { id: "symbol754-testcore1jvvruvqeywsdmzmszxswy9lz3cg8kyhalv9q7d" },
  //   path: `${CoreumTypeUrl.NFT}.QueryClassRequest`,
  // });

  // console.log(queryClass);

  // console.log(
  //   "CLASS ISSUE => ",
  //   JSON.parse(classIssue.rawLog || "")[0].events[0].attributes
  // );
}

main();
