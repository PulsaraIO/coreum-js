[coreum-js](../README.md) / [Exports](../modules.md) / Client

# Class: Client

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [\_address](Client.md#_address)
- [\_client](Client.md#_client)
- [\_custom\_node\_endpoint](Client.md#_custom_node_endpoint)
- [\_custom\_ws\_endpoint](Client.md#_custom_ws_endpoint)
- [\_eventSequence](Client.md#_eventsequence)
- [\_feeModel](Client.md#_feemodel)
- [\_queryClient](Client.md#_queryclient)
- [\_tmClient](Client.md#_tmclient)
- [\_tx\_memo](Client.md#_tx_memo)
- [\_wsClient](Client.md#_wsclient)
- [config](Client.md#config)

### Accessors

- [address](Client.md#address)
- [queryClients](Client.md#queryclients)
- [stargate](Client.md#stargate)

### Methods

- [\_connectWithCosmostation](Client.md#_connectwithcosmostation)
- [\_connectWithKplr](Client.md#_connectwithkplr)
- [\_connectWithLeap](Client.md#_connectwithleap)
- [\_createClient](Client.md#_createclient)
- [\_getGasPrice](Client.md#_getgasprice)
- [\_initFeeModel](Client.md#_initfeemodel)
- [\_initQueryClient](Client.md#_initqueryclient)
- [\_initTendermintClient](Client.md#_inittendermintclient)
- [\_initWsClient](Client.md#_initwsclient)
- [\_isSigningClientInit](Client.md#_issigningclientinit)
- [broadcastTx](Client.md#broadcasttx)
- [connect](Client.md#connect)
- [connectWithExtension](Client.md#connectwithextension)
- [connectWithMnemonic](Client.md#connectwithmnemonic)
- [createMultisigAccount](Client.md#createmultisigaccount)
- [disconnect](Client.md#disconnect)
- [getTxFee](Client.md#gettxfee)
- [sendTx](Client.md#sendtx)
- [signTx](Client.md#signtx)
- [subscribeToEvent](Client.md#subscribetoevent)
- [getRegistry](Client.md#getregistry)

## Constructors

### constructor

• **new Client**(`props?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ClientProps`](../interfaces/internal_.ClientProps.md) |

#### Defined in

[src/client/index.ts:97](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L97)

## Properties

### \_address

• `Private` **\_address**: `string`

#### Defined in

[src/client/index.ts:84](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L84)

___

### \_client

• `Private` **\_client**: `StargateClient` \| `SigningCosmWasmClient`

#### Defined in

[src/client/index.ts:83](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L83)

___

### \_custom\_node\_endpoint

• `Private` **\_custom\_node\_endpoint**: `string`

#### Defined in

[src/client/index.ts:88](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L88)

___

### \_custom\_ws\_endpoint

• `Private` **\_custom\_ws\_endpoint**: `string`

#### Defined in

[src/client/index.ts:87](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L87)

___

### \_eventSequence

• `Private` **\_eventSequence**: `number` = `0`

#### Defined in

[src/client/index.ts:86](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L86)

___

### \_feeModel

• `Private` **\_feeModel**: [`QueryClientImpl`](internal_.QueryClientImpl.md)

#### Defined in

[src/client/index.ts:85](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L85)

___

### \_queryClient

• `Private` **\_queryClient**: [`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Defined in

[src/client/index.ts:81](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L81)

___

### \_tmClient

• `Private` **\_tmClient**: `Tendermint37Client`

#### Defined in

[src/client/index.ts:80](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L80)

___

### \_tx\_memo

• `Private` **\_tx\_memo**: `string`

#### Defined in

[src/client/index.ts:89](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L89)

___

### \_wsClient

• `Private` **\_wsClient**: `WebsocketClient`

#### Defined in

[src/client/index.ts:82](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L82)

___

### config

• **config**: [`CoreumNetworkConfig`](../interfaces/CoreumNetworkConfig.md)

#### Defined in

[src/client/index.ts:91](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L91)

## Accessors

### address

• `get` **address**(): `string`

Accessor to get the address of the current connected wallet

#### Returns

`string`

A string that represents the address or undefined, if no wallet is connected.

#### Defined in

[src/client/index.ts:127](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L127)

___

### queryClients

• `get` **queryClients**(): [`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Returns

[`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Defined in

[src/client/index.ts:93](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L93)

___

### stargate

• `get` **stargate**(): `StargateClient` \| `SigningCosmWasmClient`

Accessor to get the Stargate Client

#### Returns

`StargateClient` \| `SigningCosmWasmClient`

A Stargate client or undefined if the connection hasn't been created

#### Defined in

[src/client/index.ts:135](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L135)

## Methods

### \_connectWithCosmostation

▸ `Private` **_connectWithCosmostation**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:581](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L581)

___

### \_connectWithKplr

▸ `Private` **_connectWithKplr**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:562](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L562)

___

### \_connectWithLeap

▸ `Private` **_connectWithLeap**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:599](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L599)

___

### \_createClient

▸ `Private` **_createClient**(`offlineSigner?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offlineSigner?` | `OfflineSigner` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:533](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L533)

___

### \_getGasPrice

▸ `Private` **_getGasPrice**(): `Promise`<`GasPrice`\>

#### Returns

`Promise`<`GasPrice`\>

#### Defined in

[src/client/index.ts:473](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L473)

___

### \_initFeeModel

▸ `Private` **_initFeeModel**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:523](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L523)

___

### \_initQueryClient

▸ `Private` **_initQueryClient**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:504](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L504)

___

### \_initTendermintClient

▸ `Private` **_initTendermintClient**(`rpcEndpoint`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcEndpoint` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:500](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L500)

___

### \_initWsClient

▸ `Private` **_initWsClient**(`wsEndpoint`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wsEndpoint` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:528](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L528)

___

### \_isSigningClientInit

▸ `Private` **_isSigningClientInit**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:495](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L495)

___

### broadcastTx

▸ **broadcastTx**(`transaction`, `options?`): `Promise`<`DeliverTxResponse`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | `Uint8Array` | Transaction to be submitted |
| `options?` | `Object` | - |
| `options.pollIntervalMs?` | `number` | - |
| `options.timeoutMs?` | `number` | - |

#### Returns

`Promise`<`DeliverTxResponse`\>

The response of the chain

#### Defined in

[src/client/index.ts:283](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L283)

___

### connect

▸ **connect**(`options?`): `Promise`<`void`\>

Initializes the connection to the Chain, without a signer. Just for querying purposes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Defines the options for the connection If `withWS` is passed on the options object, a Websocket Connection will be created alongside the RPC client |
| `options.withWS?` | `boolean` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:146](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L146)

___

### connectWithExtension

▸ **connectWithExtension**(`extension?`, `options?`): `Promise`<`void`\>

Initializes the connection to the Chain, with the selected extension wallet as signer.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `extension` | [`ExtensionWallets`](../enums/ExtensionWallets.md) | `ExtensionWallets.KEPLR` | Defines which wallet extension to use to initialize the client. |
| `options?` | [`WithExtensionOptions`](../interfaces/internal_.WithExtensionOptions.md) | `undefined` | Defines the options If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:169](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L169)

___

### connectWithMnemonic

▸ **connectWithMnemonic**(`mnemonic`, `options?`): `Promise`<`void`\>

Initializes the connection to the Chain, using the Mnemonic words to create the Signer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonic` | `string` | Defines the Mnemonic words to use to create the signer |
| `options?` | [`WithMnemonicOptions`](../interfaces/internal_.WithMnemonicOptions.md) | Defines the options If `withWS` is passed on the options object, a WS Connection will be created alongside the RPC client |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:226](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L226)

___

### createMultisigAccount

▸ **createMultisigAccount**(`addresses`, `threshold?`): `Promise`<[`MultisigAccount`](../interfaces/MultisigAccount.md)\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `addresses` | `string`[] | `undefined` | An array of addresses that should be added to the Multisig Account |
| `threshold` | `number` | `2` | The minimum amount of signatures required for the transaction to be valid |

#### Returns

`Promise`<[`MultisigAccount`](../interfaces/MultisigAccount.md)\>

A MultisigAccount object

#### Defined in

[src/client/index.ts:434](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L434)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:112](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L112)

___

### getTxFee

▸ **getTxFee**(`msgs`): `Promise`<[`FeeCalculation`](../interfaces/FeeCalculation.md)\>

Simulates the Transaction and returns the estimated gas for the transaction plus the gas price.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgs` | readonly `EncodeObject`[] | An array of messages for the transaction |

#### Returns

`Promise`<[`FeeCalculation`](../interfaces/FeeCalculation.md)\>

An Object that includes the following properties
 - fee: StdFee
 - gas_wanted: number

#### Defined in

[src/client/index.ts:258](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L258)

___

### sendTx

▸ **sendTx**(`msgs`, `memo?`): `Promise`<`DeliverTxResponse`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgs` | readonly `EncodeObject`[] | An array of messages for the Transaction |
| `memo?` | `string` | An arbitrary string to add as Memo for the transaction |

#### Returns

`Promise`<`DeliverTxResponse`\>

Response Object from the blockchain

#### Defined in

[src/client/index.ts:307](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L307)

___

### signTx

▸ **signTx**(`msgs`, `memo?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgs` | readonly `EncodeObject`[] | An array of messages for the Transaction |
| `memo?` | `string` | An arbitrary string to add as Memo for the transaction |

#### Returns

`Promise`<`Uint8Array`\>

TxRaw object to be submitted to the chain

#### Defined in

[src/client/index.ts:338](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L338)

___

### subscribeToEvent

▸ **subscribeToEvent**(`event`): `Promise`<{ `events`: `EventEmitter`<`string` \| `symbol`, `any`\> = emitter; `unsubscribe`: () => `void` = subscription.unsubscribe }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | String describing the event to subscribe to. |

#### Returns

`Promise`<{ `events`: `EventEmitter`<`string` \| `symbol`, `any`\> = emitter; `unsubscribe`: () => `void` = subscription.unsubscribe }\>

A susbcription object with the next properties
 - events: EventEmitter
 - unsubscribe: Method to kill the subscription to the blockchain

#### Defined in

[src/client/index.ts:381](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L381)

___

### getRegistry

▸ `Static` **getRegistry**(): `Registry`

#### Returns

`Registry`

A Registry of the Cosmos + Coreum Custom Messages.

#### Defined in

[src/client/index.ts:618](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/client/index.ts#L618)
