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

# Contents

1. [QuickStart](#md:quickstart)
2. [Usage](#md:usage)
3. [Transaction Modules](#md:transaction-modules)
4. [Query for balances](#md:query-balances)
5. [Submit Transaction](#md:submit-transaction)
6. [Event Subscription](#md:event-subscription)

## Quickstart

Installing coreum-js

```console
npm i coreum-js
```

## Usage

```typescript
import { Client } from "coreum-js";

// Choose the network to connect. The library will use default nodes for this.
const network = "mainnet" | "testnet" | "devnet";

const coreum: Client = new Client({ network: network });

const connectOptions = {
  withWS: true | false, // optional
};
// connect() will only connect for querying purposes, it won't sign any transaction.
// In order to sign transactions, you need to connect with connectWithExtension (currently only working with Keplr)
// Or with connectWithMnemonic, if choose connectWithMnemonic, DO NOT USE ON CLIENT SIDE.
await coreum.connect(connectOptions); // connectWithExtension || connectWithMnemonic
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
  wasm,
} = coreum.queryClients;

// Documentation for each query client can be found here
// https://docs.coreum.dev/api/api.html

// You can get the TX Fee for any transactions with getTxFee
const msgs: readonly EncodeObject[];
const txFee = await coreum.getTxFee(msgs);

// Sign and broadcast the Transaction
const response = await coreum.sendTx(msgs);

// Subscribe to Blockchain events
const subscription = await coreum.subscribeToEvent($EVENT);

// Event
subscription.events.on($EVENT, ({ events, data }) => {
  console.log("EVENT HAPPENED");
});

// Close the subscription
subscription.unsubscribe();

// Coreum + Cosmos Registry. coreum-js uses it internally, but it exposes it in case you have other uses for it
const registry = Client.getRegistry();
```

## Transaction Modules

_coreum-js_ comes with out-of-the-box modules to create messages compatible with the Cosmos-SDK and Coreum Blockchain.

- [Authz](./modules/Authz.html)
  Authorization for accounts to perform actions on behalf of other accounts.
- [Bank](./modules/Bank.html)
  Token transfer functionalities.
- [CosmWasm](./modules/CosmWasm.html)
  Smart Contracts functionalities.
- [Distribution](./modules/Distribution.html)
  Fee distribution, and staking token provision distribution.
- [Feegrant](./modules/Feegrant.html)
  Grant fee allowances for executing transactions.
- [FT](./modules/FT.html)
  Token issuance and management functionalities.
- [NFT](./modules/NFT.html)
  Non-Fungible Tokens minting and management functionalities.
- [Staking](./modules/Staking.html)
  Proof-of-Stake layer for public blockchains.
- [Vesting](./modules/Vesting.html)

## Query Clients

_coreum-js_ comes with out-of-the-box modules to query the Coreum Blockchain.

- [Auth](./interfaces/ClientQueryClient.html#auth)
- [Bank](./interfaces/ClientQueryClient.html#bank)
- [FT](./interfaces/ClientQueryClient.html#ft)
- [NFT](./interfaces/ClientQueryClient.html#nft)
- [NFTBeta](./interfaces/ClientQueryClient.html#nftbeta)
- [Gov](./interfaces/ClientQueryClient.html#gov)
- [Staking](./interfaces/ClientQueryClient.html#staking)
- [Distribution](./interfaces/ClientQueryClient.html#distribution)
- [Mint](./interfaces/ClientQueryClient.html#mint)
- [Feegrant](./interfaces/ClientQueryClient.html#feegrant)
- [IBC](./interfaces/ClientQueryClient.html#ibc)
- [WASM](./interfaces/ClientQueryClient.html#wasm)
- [TX](./interfaces/ClientQueryClient.html#tx)

## Query Balances

```js
// We take the bank query client from the coreum instance.
const { bank } = coreum.queryClients;

const address = "core1ll9gdh5ur6gyv6swgshcm4zkkw4ttakt4ukjma";

const balances = await bank.allBalances(address);
```

## Submit Transaction

```js
// We take the Bank Transaction Module from the Library.
// Note: This TX module and the Query module are different thing. Query Module is ONLY for queries, not transaction handling
import { Bank } from "coreum-js";
// The Bank module, as any of the other TX modules, offer a quick way to create a msg to be signed and submitted to the blockchain.

// We are creating a MsgSend to transfer coins from one account to another
const send_message = Bank.Send({
  // Address of the sender
  fromAddress: $SENDER_ADDRESS,
  // Address of the receiver
  toAddress: $RECEIVER_ADDRESS,
  // An array of balances to transfer { denom: "subunit of the token", amount: "amount of the subunit to transfer" }
  amount: [
    {
      denom: "ucore",
      amount: "1000000",
    },
  ],
});

// We submit the message by passing it inside the array argument of the sendTx method of the coreum instance.
// This allows to submit multiple message on one single transaction.
const response = await coreum.sendTx([send_message]);
```

## Event Subscription

```js
// The event is the typeUrl of the desired Msg to track.
// You can read more about Event subscription here.
// https://docs.cosmos.network/v0.46/core/events.html#examples
const event = "/coreum.assetft.v1.MsgMint";

// Start subscription
const subscription = await coreum.subscribeToEvent(event);

// The event used to subcribe, would be the same one to listen to when it happens.
subscription.events.on(event, (eventData) => {
  // data can be of any type and any shape. Each Event has its unique form.
  // events are the events on the blockchain triggered by the transaction
  const { data, events } = eventData;
});

// Unsubscribe from the event
subscription.unsubscribe();
```
