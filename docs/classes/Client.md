[coreum-js](../README.md) / [Exports](../modules.md) / Client

# Class: Client

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [\_address](Client.md#_address)
- [\_client](Client.md#_client)
- [\_custom\_ws\_endpoint](Client.md#_custom_ws_endpoint)
- [\_eventSequence](Client.md#_eventsequence)
- [\_feeModel](Client.md#_feemodel)
- [\_offlineSigner](Client.md#_offlinesigner)
- [\_queryClient](Client.md#_queryclient)
- [\_tmClient](Client.md#_tmclient)
- [\_wsClient](Client.md#_wsclient)
- [config](Client.md#config)

### Accessors

- [address](Client.md#address)
- [queryClients](Client.md#queryclients)

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

[src/client/index.ts:102](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L102)

## Properties

### \_address

• `Private` **\_address**: `string`

#### Defined in

[src/client/index.ts:91](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L91)

___

### \_client

• `Private` **\_client**: `StargateClient` \| `SigningStargateClient` \| `SigningCosmWasmClient`

#### Defined in

[src/client/index.ts:86](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L86)

___

### \_custom\_ws\_endpoint

• `Private` **\_custom\_ws\_endpoint**: `string`

#### Defined in

[src/client/index.ts:94](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L94)

___

### \_eventSequence

• `Private` **\_eventSequence**: `number` = `0`

#### Defined in

[src/client/index.ts:93](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L93)

___

### \_feeModel

• `Private` **\_feeModel**: [`QueryClientImpl`](internal_.QueryClientImpl.md)

#### Defined in

[src/client/index.ts:92](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L92)

___

### \_offlineSigner

• `Private` **\_offlineSigner**: `OfflineSigner`

#### Defined in

[src/client/index.ts:84](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L84)

___

### \_queryClient

• `Private` **\_queryClient**: [`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Defined in

[src/client/index.ts:83](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L83)

___

### \_tmClient

• `Private` **\_tmClient**: `Tendermint34Client`

#### Defined in

[src/client/index.ts:82](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L82)

___

### \_wsClient

• `Private` **\_wsClient**: `WebsocketClient`

#### Defined in

[src/client/index.ts:85](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L85)

___

### config

• **config**: [`CoreumNetworkConfig`](../interfaces/CoreumNetworkConfig.md)

#### Defined in

[src/client/index.ts:96](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L96)

## Accessors

### address

• `get` **address**(): `string`

Accessor to get the address of the current connected wallet

#### Returns

`string`

A string that represents the address or undefined, if no wallet is connected.

#### Defined in

[src/client/index.ts:125](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L125)

___

### queryClients

• `get` **queryClients**(): [`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Returns

[`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Defined in

[src/client/index.ts:98](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L98)

## Methods

### \_connectWithCosmostation

▸ `Private` **_connectWithCosmostation**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:520](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L520)

___

### \_connectWithKplr

▸ `Private` **_connectWithKplr**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:501](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L501)

___

### \_connectWithLeap

▸ `Private` **_connectWithLeap**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:538](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L538)

___

### \_createClient

▸ `Private` **_createClient**(`offlineSigner`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offlineSigner` | `OfflineSigner` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:475](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L475)

___

### \_getGasPrice

▸ `Private` **_getGasPrice**(): `Promise`<`GasPrice`\>

#### Returns

`Promise`<`GasPrice`\>

#### Defined in

[src/client/index.ts:416](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L416)

___

### \_initFeeModel

▸ `Private` **_initFeeModel**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:466](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L466)

___

### \_initQueryClient

▸ `Private` **_initQueryClient**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:447](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L447)

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

[src/client/index.ts:443](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L443)

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

[src/client/index.ts:471](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L471)

___

### \_isSigningClientInit

▸ `Private` **_isSigningClientInit**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:438](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L438)

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

[src/client/index.ts:240](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L240)

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

[src/client/index.ts:136](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L136)

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

[src/client/index.ts:156](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L156)

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

[src/client/index.ts:188](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L188)

___

### createMultisigAccount

▸ **createMultisigAccount**(`addresses`, `threshold?`): `Promise`<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `addresses` | `string`[] | `undefined` |
| `threshold` | `number` | `2` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/client/index.ts:378](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L378)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:110](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L110)

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

[src/client/index.ts:220](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L220)

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

[src/client/index.ts:264](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L264)

___

### signTx

▸ **signTx**(`msgs`, `memo?`): `Promise`<`TxRaw`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgs` | readonly `EncodeObject`[] | An array of messages for the Transaction |
| `memo?` | `string` | An arbitrary string to add as Memo for the transaction |

#### Returns

`Promise`<`TxRaw`\>

TxRaw object to be submitted to the chain

#### Defined in

[src/client/index.ts:293](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L293)

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

[src/client/index.ts:331](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L331)

___

### getRegistry

▸ `Static` **getRegistry**(): `Registry`

#### Returns

`Registry`

A Registry of the Cosmos + Coreum Custom Messages.

#### Defined in

[src/client/index.ts:558](https://github.com/CooperFoundation/coreum-js/blob/f8fbe50/src/client/index.ts#L558)
