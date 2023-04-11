import CoreumClient, { coreToUCORE, parseClassFeatures } from "./build/src";
import { CoreumModes, CoreumTypeUrl } from "./build/src/types/core";
import { ClassFeature } from "./build/src/coreum/asset/nft/v1/nft";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { WebsocketClient } from "@cosmjs/tendermint-rpc";

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
  const coreClient = await CoreumClient.connect(testNode, {
    signer: wallet1,
    developer_mode: CoreumModes.TESTNET,
  });

  const query = `message.action='${CoreumTypeUrl.NFT}MsgIssueClass'`;

  console.log(query);

  const s = await coreClient.subscribeToEvent(query);

  s.addListener({
    next(x) {
      console.log("New Event Issue,", x.data.value);
    },
    error(err) {
      console.log("ERror", err);
    },

    complete() {
      console.log("COMPLETEEDDDD");
    },
  });

  // const subscription = subs.subscribe({
  //   next(x) {
  //     console.log(x);
  //   },
  //   error(err) {
  //     console.log(err);
  //   },

  //   complete() {
  //     console.log("COMPLETE");
  //   },
  // });

  // await coreClient.send("testcore1f87fykhk9gwp2tw6q7mk9s6xdjk6qpqy2cx9t9", [
  //   amountUcore,
  // ]);

  const classIssue = (await coreClient.submit([
    {
      typeUrl: CoreumTypeUrl.NFT + "MsgIssueClass",
      value: {
        symbol: `SYMBOL${new Date().getMilliseconds()}`,
        issuer: "testcore1jvvruvqeywsdmzmszxswy9lz3cg8kyhalv9q7d",
        name: "Super NFT Class 3",
        description: "My first nft class 3",
        features: [ClassFeature.whitelisting],
        royalty_rate: "0.25",
      },
    },
  ])) as DeliverTxResponse;

  console.log("Issued Class", classIssue);

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
