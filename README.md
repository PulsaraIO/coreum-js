# MANTLE

A TS/JS Library to connect, subscribe to events, sign transactions and query the Coreum Blockchain.

# IMPORTANT: IF DECIDE TO USE THE `SIGNER`, FOR SECURITY USE ONLY ON THE SERVER SIDE.

## Usage

```typescript
import Mantle from "mantle";

const mantleOptions: MantleOptions = {
  signer: $MNEMONIC_PHRASE, // OPTIONAL: This value is the mnemonic phrase of the wallet you want to sign transactions with
  gasLimit: $GAS_LIMIT // NUMBER Optional: This value sets the max amount of Gas willing to use per transaction.
  broadcastTimeoutMS: $TIMEOUT // NUMBER Optional: This value defines the broadcastTimeout of the connection
  broadcastPoolIntervalsMS: $INTERVAL // NUMBER Optional: This value defines the interval between polls
  registry: ReadonlyArray<[string, GeneratedType]> // Optional: This add custom messages for the Coreum Blockchain. By default, Cosmos and Coreum messages are added

};

const mantle: Mantle = await Mantle.connect($COREUM_BLOCKCHAIN_NODE, mantleOptions);

```
