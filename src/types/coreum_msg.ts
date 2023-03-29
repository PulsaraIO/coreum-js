import { Coin } from "@cosmjs/proto-signing";
import { MsgSend, MsgMultiSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

interface CoreumMessage {
  typeUrl: string;
}

// interface MsgSend {
//   typeUrl: "cosmos/bank/v1beta1/tx.proto";
//   value: {
//     fromAddress: string;
//     toAddress: string;
//     amount: Coin[];
//   };
// }

// interface MsgDelegate extends CoreumMessage {
//   typeUrl: "cosmos/staking/v1beta1/tx.proto";
//   value: {
//     delegatorAddress: string;
//     validatorAddress: string;
//     amount: Coin;
//   };
// }
