# coreum-js

# IMPORTANT: This library is still in development and it is not production ready.

[![NPM](https://nodei.co/npm/coreum-js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/coreum-js/)

A JavaScript/TypeScript library for interacting with the Coreum Blockchain

This is the recommended library for integrating a JavaScript/TypeScript app with the Coreum Blockchain, especially for the use of the modules assetft, assetnft, and more. It supports integration with the most popular Browser-Extension wallets; like Keplr, Cosmostation and Leap.

## IMPORTANT: IF DECIDE TO USE THE **MNEMONIC SIGNER**, FOR SECURITY USE ONLY ON THE SERVER SIDE.

## Features

1. Connect using the most popular Browser-Extension wallets ([Keplr](https://www.keplr.app#extension), [Cosmostation](https://www.cosmostation.io/wallet#extension), [Leap](https://www.leapwallet.io/download))
2. Sign and broadcast transactions to the Coreum Blockchain ([Client.sendTx](https://musical-sawine-260235.netlify.app/classes/client#sendTx) & custom Coreum messages)
3. Subscribe to events that happen on the Coreum Blockchain
4. Query the Coreum Blockchain with ease, using the QueryClients.

## Quickstart

Installing coreum-js

```console
npm i coreum-js
```

## Usage

```typescript
import Client from "coreum-js";

// Choose the network to connect. The library will use default nodes for this.
const network = "mainnet" | "testnet" | "devnet";

const mantle: Client = new Client({ network: network });

const connectOptions = {
  withWS: true | false, // optional
};
// connect() will only connect for querying purposes, it won't sign any transaction.
// In order to sign transactions, you need to connect with connectWithExtension (currently only working with Keplr)
// Or with connectWithMnemonic, if choose connectWithMnemonic, DO NOT USE ON CLIENT SIDE.
await mantle.connect(connectOptions); // connectWithExtension || connectWithMnemonic
// If withWS is true, the client will also create and connect to the Coreum Websocket.

// Client exposes different QueryClients to query the Coreum Blockchain with ease.
const {
  ft,
  nft,
  staking,
  distribution,
  mint,
  auth,
  bank,
  ibc,
  gov,
  feegrant,
  nftbeta,
  tx,
} = mantle.queryClients;

// Documentation for each query client can be found here
// https://docs.coreum.dev/api/api.html

// You can get the TX Fee for any transactions with getTxFee
const msgs: readonly EncodeObject[];
const txFee = await mantle.getTxFee(msgs);

// Sign and broadcast the Transaction
const response = await mantle.sendTx(msgs);

// Subscribe to Blockchain events
const subscription = await mantle.subscribeToEvent($EVENT);

// Event
subscription.events.on($EVENT, ({ events, data }) => {
  console.log("EVENT HAPPENED");
});

// Close the subscription
subscription.unsubscribe();

// Coreum + Cosmos Registry. coreum-js uses it internally, but it exposes it in case you have other uses for it
const registry = Client.getRegistry();
```
