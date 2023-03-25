import { StdFee } from "@cosmjs/amino";
import { calculateFee, GasPrice } from "@cosmjs/stargate";
import CoreumClient from "../index";
import BigNumber from "bignumber.js";

export const ucoreToCORE = (ucore: string) => {
  return new BigNumber(ucore).dividedBy(1_000_000).valueOf();
};

export const coreToUCORE = (core: string) => {
  return new BigNumber(core).multipliedBy(1_000_000).valueOf();
};

// export const getFee = (fee?: number): "auto" | StdFee => {
//   if (fee === "auto") return fee;

//   const singleSendGas = 111_000;
//   const gasPrice = GasPrice.fromString(`${fee}${CoreumClient.denom}`);

//   return calculateFee(singleSendGas, gasPrice);
// };
