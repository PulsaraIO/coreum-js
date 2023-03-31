import { CoreumMessage } from "./index";
import { ClassFeature } from "../nft";

type typeUrl = "/coreum.asset.nft.v1.";

export interface MsgBurn extends CoreumMessage {
  typeUrl: `${typeUrl}MsgBurn`;
  value: { sender: string; class_id: string; id: string };
}

export interface MsgAddToWhitelist extends CoreumMessage {
  typeUrl: `${typeUrl}MsgAddToWhitelist`;
  value: {
    sender: string;
    class_id: string;
    id: string;
    account: string;
  };
}

export interface MsgFreeze extends CoreumMessage {
  typeUrl: `${typeUrl}MsgFreeze`;
  value: { sender: string; class_id: string; id: string };
}

export interface MsgIssueClass extends CoreumMessage {
  typeUrl: `${typeUrl}MsgIssueClass`;
  value: {
    issuer: string;
    symbol: string;
    name: string;
    description: string;
    uri: string;
    uri_hash: string;
    data: any;
    features: ClassFeature[];
    royalty_rate: string;
  };
}

export interface MsgMint extends CoreumMessage {
  typeUrl: `${typeUrl}MsgMint`;
}

export interface MsgRemoveFromWhitelist extends CoreumMessage {
  typeUrl: `${typeUrl}MsgRemoveFromWhitelist`;
  value: {
    sender: string;
    class_id: string;
    id: string;
    account: string;
  };
}

export interface MsgUnfreeze extends CoreumMessage {
  typeUrl: `${typeUrl}MsgUnfreeze`;
  value: {
    sender: string;
    class_id: string;
    id: string;
  };
}
