# MANTLE

It's what wraps the CORE

A TS/JS Library to connect, subscribe to events, sign transactions and query the Coreum Blockchain.

# IMPORTANT: IF DECIDE TO USE THE `SIGNER`, FOR SECURITY USE ONLY ON THE SERVER SIDE.

# IMPORTANT: This library is still in development and it is not production ready.

## Usage

```typescript
import Mantle from "coreum-js";

// Choose the network to connect. The library will use default nodes for this.
const network = "mainnet" | "testnet" | "devnet";

const mantle: Mantle = new Mantle({ network: network });

const connectOptions = {
  withWS: true | false, // optional
};
// connect() will only connect for querying purposes, it won't sign any transaction.
// In order to sign transactions, you need to connect with connectWithExtension (currently only working with Keplr)
// Or with connectWithMnemonic, if choose connectWithMnemonic, DO NOT USE ON CLIENT SIDE.
await mantle.connect(connectOptions); // connectWithExtension || connectWithMnemonic
// If withWS is true, the client will also create and connect to the Coreum Websocket.

// Mantle exposes different QueryClients to query the Coreum Blockchain with ease.
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
const registry = Mantle.getRegistry();
```
