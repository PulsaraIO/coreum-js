import { CoreumTypeUrl } from "../../types";
import { MsgCancelOrder, MsgPlaceOrder, MsgUpdateParams, MsgServiceName, MsgCancelOrdersByDenom, } from "./v1/tx";
export const dexRegistry = [
    [CoreumTypeUrl.DEX + "MsgCancelOrder", MsgCancelOrder],
    [CoreumTypeUrl.DEX + "MsgPlaceOrder", MsgPlaceOrder],
    [CoreumTypeUrl.DEX + "MsgUpdateParams", MsgUpdateParams],
    [CoreumTypeUrl.DEX + "MsgServiceName", MsgServiceName],
    [CoreumTypeUrl.DEX + "MsgCancelOrdersByDenom", MsgCancelOrdersByDenom],
];
