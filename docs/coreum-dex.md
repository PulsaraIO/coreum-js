# Coreum DEX module

The DEX module provides the native order-book DEX on Coreum. Use the `DEX` namespace for placing and canceling orders, and `client.queryClients?.dex` for order books and parameters.

## Enums (order types)

Order-related enums are defined in the DEX proto-generated types. Use numeric values or import from the generated modules if exposed.

### Side

| Value | Name               | Description          |
| ----- | ------------------ | -------------------- |
| `0`   | `SIDE_UNSPECIFIED` | Default.             |
| `1`   | `SIDE_BUY`         | Buy base with quote. |
| `2`   | `SIDE_SELL`        | Sell base for quote. |

### OrderType

| Value | Name                     | Description   |
| ----- | ------------------------ | ------------- |
| `0`   | `ORDER_TYPE_UNSPECIFIED` | Default.      |
| `1`   | `ORDER_TYPE_LIMIT`       | Limit order.  |
| `2`   | `ORDER_TYPE_MARKET`      | Market order. |

### TimeInForce

| Value | Name                        | Description                                              |
| ----- | --------------------------- | -------------------------------------------------------- |
| `0`   | `TIME_IN_FORCE_UNSPECIFIED` | Default.                                                 |
| `1`   | `TIME_IN_FORCE_GTC`         | Good-til-canceled; remains until filled or canceled.     |
| `2`   | `TIME_IN_FORCE_IOC`         | Immediate-or-cancel; fill immediately, cancel remainder. |
| `3`   | `TIME_IN_FORCE_FOK`         | Fill-or-kill; fully fill or cancel.                      |

### GoodTil

Optional expiry for the order. Interface:

| Field                | Type         | Description                          |
| -------------------- | ------------ | ------------------------------------ |
| `goodTilBlockHeight` | `number`     | Order valid until this block height. |
| `goodTilBlockTime`   | `Timestamp?` | Optional expiry time.                |

---

## Message builders (DEX namespace)

### DEX.PlaceOrder(object)

Places an order on the native DEX.

**TypeUrl:** `/coreum.dex.v1.MsgPlaceOrder`

| Field         | Type                   | Description                                                   |
| ------------- | ---------------------- | ------------------------------------------------------------- |
| `sender`      | `string`               | Order creator address.                                        |
| `type`        | `OrderType`            | `ORDER_TYPE_LIMIT` (1) or `ORDER_TYPE_MARKET` (2).            |
| `id`          | `string`               | Unique order ID (chosen by creator).                          |
| `baseDenom`   | `string`               | Base asset denom (e.g. `"ucore"`).                            |
| `quoteDenom`  | `string`               | Quote asset denom.                                            |
| `price`       | `string`               | Price of one unit of base in quote terms.                     |
| `quantity`    | `string`               | Amount of base to trade.                                      |
| `side`        | `Side`                 | `SIDE_BUY` (1) or `SIDE_SELL` (2).                            |
| `goodTil`     | `GoodTil \| undefined` | Optional expiry (e.g. `{ goodTilBlockHeight: blockHeight }`). |
| `timeInForce` | `TimeInForce`          | GTC (1), IOC (2), or FOK (3).                                 |

Example:

```typescript
import { Client, DEX } from "@pulsara/tx-js";

// Use numeric enum values: OrderType 1 = LIMIT, Side 1 = BUY, TimeInForce 1 = GTC
const msg = DEX.PlaceOrder({
  sender: client.address!,
  type: 1,
  id: "order-" + Date.now(),
  baseDenom: "ucore",
  quoteDenom: "custom_issuer_subunit",
  price: "100",
  quantity: "1000",
  side: 1,
  goodTil: { goodTilBlockHeight: 0 },
  timeInForce: 1,
});
await client.sendTx([msg]);
```

---

### DEX.CancelOrder(object)

Cancels an order by ID.

**TypeUrl:** `/coreum.dex.v1.MsgCancelOrder`

| Field    | Type     | Description                               |
| -------- | -------- | ----------------------------------------- |
| `sender` | `string` | Order creator (must match order creator). |
| `id`     | `string` | Order ID to cancel.                       |

---

### DEX.CancelOrdersByDenom(object)

Cancels all orders for an account and denom.

**TypeUrl:** `/coreum.dex.v1.MsgCancelOrdersByDenom`

| Field     | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| `sender`  | `string` | Sender.                                     |
| `account` | `string` | Account whose orders to cancel.             |
| `denom`   | `string` | Denom (base or quote) to cancel orders for. |

---

### DEX.UpdateParams(object)

Updates DEX module parameters (governance/authority).

**TypeUrl:** `/coreum.dex.v1.MsgUpdateParams`

| Field       | Type     | Description        |
| ----------- | -------- | ------------------ |
| `authority` | `string` | Authority address. |
| `params`    | `Params` | New module params. |

---

## Query extension (client.queryClients.dex)

After connecting, use `client.queryClients?.dex`:

| Method                                 | Parameters                                                               | Returns                                | Description                                     |
| -------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------- | ----------------------------------------------- |
| `params(params)`                       | `QueryParamsRequest` (e.g. `{}`)                                         | `QueryParamsResponse`                  | Module parameters.                              |
| `order(params)`                        | `{ creator: string, id: string }`                                        | `QueryOrderResponse`                   | Single order by creator and ID.                 |
| `orders(params)`                       | `{ creator: string, pagination? }`                                       | `QueryOrdersResponse`                  | All orders by creator.                          |
| `ordersCountByDenomAndAccount(params)` | `{ account: string, denom: string }`                                     | `QueryAccountDenomOrdersCountResponse` | Order count for account and denom.              |
| `orderbook(params)`                    | `QueryOrderBookOrdersRequest` (baseDenom, quoteDenom, side, pagination?) | `QueryOrderBookOrdersResponse`         | Orders in an order book (one side).             |
| `orderbooks(params)`                   | `{ pagination? }`                                                        | `QueryOrderBooksResponse`              | All order books.                                |
| `orderbookParams(params)`              | `{ baseDenom: string, quoteDenom: string }`                              | `QueryOrderBookParamsResponse`         | Price tick, quantity step, unified ref amounts. |

Example:

```typescript
await client.connect();
const order = await client.queryClients?.dex.order({
  creator: "core1...",
  id: "order-123",
});
const count = await client.queryClients?.dex.ordersCountByDenomAndAccount({
  account: "core1...",
  denom: "ucore",
});
const params = await client.queryClients?.dex.orderbookParams({
  baseDenom: "ucore",
  quoteDenom: "custom_issuer_subunit",
});
```

---

## See also

- [Client](client.md) — Connection and sending transactions
- [Coreum FT](coreum-ft.md) — FT DEX settings (unified ref amount, whitelisted denoms)
- [Amino types](amino-types.md) — Using DEX messages with Amino/Ledger
