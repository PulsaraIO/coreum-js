# CosmWasm integration

The SDK supports CosmWasm smart contracts via the **CosmWasm** and **IBC** namespaces for transaction messages and `client.queryClients?.wasm` for queries. The underlying client is `SigningCosmWasmClient` from CosmJS, so you can also use its `execute`, `instantiate`, and `upload` methods when connected with a signer.

## Message builders: CosmWasm namespace

**Type URL prefix:** `/cosmwasm.wasm.v1.`

All builders return `{ typeUrl, value }` for `client.sendTx([msg])` or `client.signTx([msg])`.

| Function                                       | TypeUrl                          | Description                            |
| ---------------------------------------------- | -------------------------------- | -------------------------------------- |
| `CosmWasm.StoreCode(object)`                   | `MsgStoreCode`                   | Upload WASM code.                      |
| `CosmWasm.InstantiateContract(object)`         | `MsgInstantiateContract`         | Instantiate a contract from code ID.   |
| `CosmWasm.InstantiateContract2(object)`        | `MsgInstantiateContract2`        | Instantiate with predictable address.  |
| `CosmWasm.StoreAndInstantiateContract(object)` | `MsgStoreAndInstantiateContract` | Upload and instantiate in one message. |
| `CosmWasm.ExecuteContract(object)`             | `MsgExecuteContract`             | Execute a contract message.            |
| `CosmWasm.MigrateContract(object)`             | `MsgMigrateContract`             | Migrate contract to new code ID.       |
| `CosmWasm.UpdateAdmin(object)`                 | `MsgUpdateAdmin`                 | Set contract admin.                    |
| `CosmWasm.ClearAdmin(object)`                  | `MsgClearAdmin`                  | Remove contract admin.                 |
| `CosmWasm.UpdateInstantiateConfig(object)`     | `MsgUpdateInstantiateConfig`     | Update instantiate config.             |
| `CosmWasm.UpdateParams(object)`                | `MsgUpdateParams`                | Update WASM module params (authority). |
| `CosmWasm.SudoContract(object)`                | `MsgSudoContract`                | Sudo execute (authority).              |
| `CosmWasm.PinCodes(object)`                    | `MsgPinCodes`                    | Pin code IDs (authority).              |
| `CosmWasm.UnpinCodes(object)`                  | `MsgUnpinCodes`                  | Unpin code IDs (authority).            |

Example:

```typescript
import { CosmWasm } from "@pulsara/tx-js";

const msg = CosmWasm.ExecuteContract({
  sender: client.address!,
  contract: "core1contract...",
  msg: toUtf8(JSON.stringify({ some_msg: {} })),
  funds: [],
});
await client.sendTx([msg]);
```

When using the signing client directly, you can use `client.stargate.execute(client.address!, contractAddress, msg, fee)` and similar methods from CosmJS CosmWasm Stargate client.

---

## Message builders: IBC (Wasm)

**Type URL prefix:** `/cosmwasm.wasm.v1.`

| Function                      | TypeUrl              | Description               |
| ----------------------------- | -------------------- | ------------------------- |
| `IBC.IBCSend(object)`         | `MsgIBCSend`         | IBC send from a contract. |
| `IBC.IBCCloseChannel(object)` | `MsgIBCCloseChannel` | Close IBC channel.        |

---

## Query extension (client.queryClients.wasm)

After connecting, use `client.queryClients?.wasm`:

| Method                        | Request type                                             | Description                 |
| ----------------------------- | -------------------------------------------------------- | --------------------------- |
| `smartContractState(request)` | `QuerySmartContractStateRequest` (contract, query bytes) | Smart query (JSON).         |
| `rawContractState(request)`   | `QueryRawContractStateRequest` (contract, key)           | Raw key-value query.        |
| `contractInfo(request)`       | `QueryContractInfoRequest` (address)                     | Contract metadata.          |
| `contractHistory(request)`    | `QueryContractHistoryRequest` (address)                  | Contract migration history. |
| `contractsByCode(request)`    | `QueryContractsByCodeRequest` (codeId, pagination?)      | Contracts by code ID.       |
| `contractsByCreator(request)` | `QueryContractsByCreatorRequest` (creator, pagination?)  | Contracts by creator.       |
| `code(request)`               | `QueryCodeRequest` (codeId)                              | WASM code by ID.            |
| `codes(request)`              | `QueryCodesRequest` (pagination?)                        | All code IDs.               |
| `pinnedCodes(request)`        | `QueryPinnedCodesRequest`                                | Pinned code IDs.            |
| `allContractState(request)`   | `QueryAllContractStateRequest` (address, pagination?)    | All raw state.              |
| `params(request)`             | `QueryParamsRequest`                                     | WASM module params.         |

Example:

```typescript
import { toUtf8 } from "@cosmjs/encoding";

const result = await client.queryClients?.wasm.smartContractState({
  address: contractAddress,
  query: toUtf8(JSON.stringify({ balance: { address: userAddress } })),
});
```

---

## See also

- [Client](client.md) — Connection and `stargate` (SigningCosmWasmClient)
- [Types](types.md) — Message interfaces where applicable
