# MANTLE

It's what wraps the CORE

A TS/JS Library to connect, subscribe to events, sign transactions and query the Coreum Blockchain.

# IMPORTANT: IF DECIDE TO USE THE `SIGNER`, FOR SECURITY USE ONLY ON THE SERVER SIDE.

## Usage

```typescript
import Mantle from "coreum-js";

const mantle: Mantle = new Mantle();

// connect() will only connect for querying purposes, it won't sign any transaction.
// In order to sign transactions, you need to connect with connectWithExtension (currently only working with Keplr)
// Or with connectWithMnemonic, if choose connectWithMnemonic, DO NOT USE ON CLIENT SIDE.
await mantle.connect(); // connectWithExtension || connectWithMnemonic
```
