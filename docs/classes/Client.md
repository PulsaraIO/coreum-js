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
- [connect](Client.md#connect)
- [connectWithExtension](Client.md#connectwithextension)
- [connectWithMnemonic](Client.md#connectwithmnemonic)
- [disconnect](Client.md#disconnect)
- [getTxFee](Client.md#gettxfee)
- [sendTx](Client.md#sendtx)
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

[src/client/index.ts:96](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L96)

## Properties

### \_address

• `Private` **\_address**: `string`

#### Defined in

[src/client/index.ts:85](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L85)

___

### \_client

• `Private` **\_client**: `StargateClient` \| `SigningStargateClient` \| `SigningCosmWasmClient`

#### Defined in

[src/client/index.ts:80](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L80)

___

### \_custom\_ws\_endpoint

• `Private` **\_custom\_ws\_endpoint**: `string`

#### Defined in

[src/client/index.ts:88](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L88)

___

### \_eventSequence

• `Private` **\_eventSequence**: `number` = `0`

#### Defined in

[src/client/index.ts:87](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L87)

___

### \_feeModel

• `Private` **\_feeModel**: [`QueryClientImpl`](internal_.QueryClientImpl.md)

#### Defined in

[src/client/index.ts:86](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L86)

___

### \_queryClient

• `Private` **\_queryClient**: [`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Defined in

[src/client/index.ts:78](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L78)

___

### \_tmClient

• `Private` **\_tmClient**: `Tendermint34Client`

#### Defined in

[src/client/index.ts:77](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L77)

___

### \_wsClient

• `Private` **\_wsClient**: `WebsocketClient`

#### Defined in

[src/client/index.ts:79](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L79)

___

### config

• **config**: [`CoreumNetworkConfig`](../interfaces/CoreumNetworkConfig.md)

#### Defined in

[src/client/index.ts:90](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L90)

## Accessors

### address

• `get` **address**(): `string`

Accessor to get the address of the current connected wallet

#### Returns

`string`

A string that represents the address or undefined, if no wallet is connected.

#### Defined in

[src/client/index.ts:119](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L119)

___

### queryClients

• `get` **queryClients**(): [`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Returns

[`ClientQueryClient`](../interfaces/ClientQueryClient.md)

#### Defined in

[src/client/index.ts:92](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L92)

## Methods

### \_connectWithCosmostation

▸ `Private` **_connectWithCosmostation**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:414](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L414)

___

### \_connectWithKplr

▸ `Private` **_connectWithKplr**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:395](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L395)

___

### \_connectWithLeap

▸ `Private` **_connectWithLeap**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/index.ts:432](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L432)

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

[src/client/index.ts:371](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L371)

___

### \_getGasPrice

▸ `Private` **_getGasPrice**(): `Promise`<`GasPrice`\>

#### Returns

`Promise`<`GasPrice`\>

#### Defined in

[src/client/index.ts:312](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L312)

___

### \_initFeeModel

▸ `Private` **_initFeeModel**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:362](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L362)

___

### \_initQueryClient

▸ `Private` **_initQueryClient**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:343](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L343)

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

[src/client/index.ts:339](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L339)

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

[src/client/index.ts:367](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L367)

___

### \_isSigningClientInit

▸ `Private` **_isSigningClientInit**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:334](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L334)

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

[src/client/index.ts:130](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L130)

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

[src/client/index.ts:150](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L150)

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

[src/client/index.ts:182](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L182)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/client/index.ts:104](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L104)

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

[src/client/index.ts:214](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L214)

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

[src/client/index.ts:235](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L235)

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

[src/client/index.ts:265](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L265)

___

### getRegistry

▸ `Static` **getRegistry**(): `Registry`

#### Returns

`Registry`

A Registry of the Cosmos + Coreum Custom Messages.

#### Defined in

[src/client/index.ts:452](https://github.com/CooperFoundation/coreum-js/blob/e00873a/src/client/index.ts#L452)
