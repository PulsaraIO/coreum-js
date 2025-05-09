import { CoreumTypeUrl } from "../../types";
import { MsgCancelOrder, MsgPlaceOrder, MsgUpdateParams, MsgCancelOrdersByDenom, } from "./v1/tx";
export const dexRegistry = [
    [CoreumTypeUrl.DEX + "MsgCancelOrder", MsgCancelOrder],
    [CoreumTypeUrl.DEX + "MsgPlaceOrder", MsgPlaceOrder],
    [CoreumTypeUrl.DEX + "MsgUpdateParams", MsgUpdateParams],
    [CoreumTypeUrl.DEX + "MsgCancelOrdersByDenom", MsgCancelOrdersByDenom],
];
