import { GeneratedType } from "@cosmjs/proto-signing";
import { CoreumTypeUrl } from "../../types";

import {
  MsgCancelOrder,
  MsgPlaceOrder,
  MsgUpdateParams,
  MsgCancelOrdersByDenom,
} from "./v1/tx";

export const dexRegistry: ReadonlyArray<[string, GeneratedType]> = [
  [CoreumTypeUrl.DEX + "MsgCancelOrder", MsgCancelOrder],
  [CoreumTypeUrl.DEX + "MsgPlaceOrder", MsgPlaceOrder],
  [CoreumTypeUrl.DEX + "MsgUpdateParams", MsgUpdateParams],
  [CoreumTypeUrl.DEX + "MsgCancelOrdersByDenom", MsgCancelOrdersByDenom],
];
