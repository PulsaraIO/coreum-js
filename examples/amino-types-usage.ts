/**
 * Example demonstrating how to use Coreum AminoTypes
 *
 * This example shows how to create and use AminoTypes for Coreum transaction messages
 * in both protobuf and amino JSON formats.
 */

import { createCoreumAminoTypes } from "../src/coreum/amino";
import { AminoTypes } from "@cosmjs/stargate";

// Create AminoTypes instance
const aminoTypes = createCoreumAminoTypes();

// Example: FT (Fungible Token) Message
const ftMsgIssue = {
  typeUrl: "/coreum.asset.ft.v1.MsgIssue",
  value: {
    issuer: "core1abc123...",
    symbol: "MYTOKEN",
    subunit: "mytoken",
    precision: 6,
    initialAmount: "1000000",
    description: "My custom token",
    features: [1], // Feature enum value
    burnRate: "0.01",
    sendCommissionRate: "0.005",
    uri: "https://example.com/token",
    uriHash: "hash123",
  },
};

// Example: DEX Message
const dexMsgPlaceOrder = {
  typeUrl: "/coreum.dex.v1.MsgPlaceOrder",
  value: {
    sender: "core1abc123...",
    type: 1, // OrderType enum value
    id: "order123",
    baseDenom: "ucore",
    quoteDenom: "mytoken",
    price: "100",
    quantity: "1000",
    side: 1, // Side enum value
    goodTil: {
      blockHeight: 1000,
    },
    timeInForce: 1, // TimeInForce enum value
  },
};

// Example: NFT Message
const nftMsgIssueClass = {
  typeUrl: "/coreum.asset.nft.v1.MsgIssueClass",
  value: {
    issuer: "core1abc123...",
    symbol: "MYNFT",
    name: "My NFT Collection",
    description: "A collection of unique NFTs",
    uri: "https://example.com/nft",
    uriHash: "hash123",
    data: undefined,
    features: [1], // ClassFeature enum value
    royaltyRate: "0.05",
  },
};

// Example: NFT Beta Message
const nftBetaMsgSend = {
  typeUrl: "/cosmos.nft.v1beta1.MsgSend",
  value: {
    classId: "class123",
    id: "nft456",
    sender: "core1abc123...",
    receiver: "core1def789...",
  },
};

// Convert to Amino JSON format
console.log("FT MsgIssue in Amino JSON format:");
console.log(JSON.stringify(aminoTypes.toAmino(ftMsgIssue), null, 2));

console.log("\nDEX MsgPlaceOrder in Amino JSON format:");
console.log(JSON.stringify(aminoTypes.toAmino(dexMsgPlaceOrder), null, 2));

console.log("\nNFT MsgIssueClass in Amino JSON format:");
console.log(JSON.stringify(aminoTypes.toAmino(nftMsgIssueClass), null, 2));

console.log("\nNFT Beta MsgSend in Amino JSON format:");
console.log(JSON.stringify(aminoTypes.toAmino(nftBetaMsgSend), null, 2));

// Example of creating AminoTypes with custom configuration
const customAminoTypes = new AminoTypes({
  // You can combine with other converters
  ...createCoreumAminoTypes(),
  // Add other custom converters here if needed
});

export {
  ftMsgIssue,
  dexMsgPlaceOrder,
  nftMsgIssueClass,
  nftBetaMsgSend,
  aminoTypes,
  customAminoTypes,
};
