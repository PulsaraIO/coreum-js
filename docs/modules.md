[coreum-js](README.md) / Exports

# coreum-js

## Table of contents

### Modules

- [&lt;internal\&gt;](modules/internal_.md)

### Namespaces

- [Authz](modules/Authz.md)
- [Bank](modules/Bank.md)
- [CosmWasm](modules/CosmWasm.md)
- [Distribution](modules/Distribution.md)
- [FT](modules/FT.md)
- [Feegrant](modules/Feegrant.md)
- [Governance](modules/Governance.md)
- [IBC](modules/IBC.md)
- [NFT](modules/NFT.md)
- [Staking](modules/Staking.md)
- [Vesting](modules/Vesting.md)

### Enumerations

- [ClassFeature](enums/ClassFeature.md)
- [CoreumChainID](enums/CoreumChainID.md)
- [CoreumDenom](enums/CoreumDenom.md)
- [CoreumNetwork](enums/CoreumNetwork.md)
- [CoreumPrefixes](enums/CoreumPrefixes.md)
- [CoreumTypeUrl](enums/CoreumTypeUrl.md)
- [ExtensionWallets](enums/ExtensionWallets.md)
- [Feature](enums/Feature.md)
- [WalletMethods](enums/WalletMethods.md)

### Classes

- [Client](classes/Client.md)

### Interfaces

- [AuthInfo](interfaces/AuthInfo.md)
- [AuxSignerData](interfaces/AuxSignerData.md)
- [ClientQueryClient](interfaces/ClientQueryClient.md)
- [CoreumMessage](interfaces/CoreumMessage.md)
- [CoreumNetworkConfig](interfaces/CoreumNetworkConfig.md)
- [Fee](interfaces/Fee.md)
- [FeeCalculation](interfaces/FeeCalculation.md)
- [FeeOptions](interfaces/FeeOptions.md)
- [ModeInfo](interfaces/ModeInfo.md)
- [ModeInfo\_Multi](interfaces/ModeInfo_Multi.md)
- [ModeInfo\_Single](interfaces/ModeInfo_Single.md)
- [MultisigAccount](interfaces/MultisigAccount.md)
- [SignDoc](interfaces/SignDoc.md)
- [SignDocDirectAux](interfaces/SignDocDirectAux.md)
- [SignerInfo](interfaces/SignerInfo.md)
- [Tip](interfaces/Tip.md)
- [Tx](interfaces/Tx.md)
- [TxBody](interfaces/TxBody.md)
- [TxRaw](interfaces/TxRaw.md)

### Type Aliases

- [DeepPartial](modules.md#deeppartial)
- [Exact](modules.md#exact)

### Variables

- [AuthInfo](modules.md#authinfo)
- [AuxSignerData](modules.md#auxsignerdata)
- [COREUM\_CONFIG](modules.md#coreum_config)
- [Fee](modules.md#fee)
- [ModeInfo](modules.md#modeinfo)
- [ModeInfo\_Multi](modules.md#modeinfo_multi)
- [ModeInfo\_Single](modules.md#modeinfo_single)
- [SignDoc](modules.md#signdoc)
- [SignDocDirectAux](modules.md#signdocdirectaux)
- [SignerInfo](modules.md#signerinfo)
- [Tip](modules.md#tip)
- [Tx](modules.md#tx)
- [TxBody](modules.md#txbody)
- [TxRaw](modules.md#txraw)
- [coreumRegistry](modules.md#coreumregistry)
- [cosmwasmRegistry](modules.md#cosmwasmregistry)
- [protobufPackage](modules.md#protobufpackage)

### Functions

- [convertStringToAny](modules.md#convertstringtoany)
- [coreToUCORE](modules.md#coretoucore)
- [generateMultisigFromPubkeys](modules.md#generatemultisigfrompubkeys)
- [generateWalletFromMnemonic](modules.md#generatewalletfrommnemonic)
- [isValidCoreumAddress](modules.md#isvalidcoreumaddress)
- [parseClassFeatures](modules.md#parseclassfeatures)
- [parseFloatToRoyaltyRate](modules.md#parsefloattoroyaltyrate)
- [parseTokenFeatures](modules.md#parsetokenfeatures)
- [subunitToUnit](modules.md#subunittounit)
- [ucoreToCORE](modules.md#ucoretocore)
- [unitToSubunit](modules.md#unittosubunit)

## Type Aliases

### DeepPartial

Ƭ **DeepPartial**<`T`\>: `T` extends [`Builtin`](modules/internal_.md#builtin) ? `T` : `T` extends infer U[] ? [`DeepPartial`](modules.md#deeppartial)<`U`\>[] : `T` extends `ReadonlyArray`<infer U\> ? `ReadonlyArray`<[`DeepPartial`](modules.md#deeppartial)<`U`\>\> : `T` extends {} ? { [K in keyof T]?: DeepPartial<T[K]\> } : `Partial`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:1769](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1769)

___

### Exact

Ƭ **Exact**<`P`, `I`\>: `P` extends [`Builtin`](modules/internal_.md#builtin) ? `P` : `P` & { [K in keyof P]: Exact<P[K], I[K]\> } & { [K in Exclude<keyof I, KeysOfUnion<P\>\>]: never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `I` | extends `P` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:1780](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1780)

## Variables

### AuthInfo

• **AuthInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`AuthInfo`](modules.md#authinfo) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`AuthInfo`](modules.md#authinfo) |
| `encode` | (`message`: [`AuthInfo`](modules.md#authinfo), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`AuthInfo`](modules.md#authinfo) |
| `fromPartial` | <I\>(`object`: `I`) => [`AuthInfo`](modules.md#authinfo) |
| `toJSON` | (`message`: [`AuthInfo`](modules.md#authinfo)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:156](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L156)

[src/cosmos/tx/v1beta1/tx.ts:952](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L952)

___

### AuxSignerData

• **AuxSignerData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`AuxSignerData`](modules.md#auxsignerdata) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`AuxSignerData`](modules.md#auxsignerdata) |
| `encode` | (`message`: [`AuxSignerData`](modules.md#auxsignerdata), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`AuxSignerData`](modules.md#auxsignerdata) |
| `fromPartial` | <I\>(`object`: `I`) => [`AuxSignerData`](modules.md#auxsignerdata) |
| `toJSON` | (`message`: [`AuxSignerData`](modules.md#auxsignerdata)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:282](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L282)

[src/cosmos/tx/v1beta1/tx.ts:1601](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1601)

___

### COREUM\_CONFIG

• `Const` **COREUM\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `devnet` | { `chain_bech32_prefix`: [`CoreumPrefixes`](enums/CoreumPrefixes.md) = CoreumPrefixes.DEVNET; `chain_explorer`: `string` = "https://explorer.devnet-1.coreum.dev"; `chain_id`: [`CoreumChainID`](enums/CoreumChainID.md) = CoreumChainID.DEVNET; `chain_name`: `string` = "Coreum Devnet"; `chain_rest_endpoint`: `string` = "https://full-node.devnet-1.coreum.dev:1317"; `chain_rpc_endpoint`: `string` = "https://full-node.devnet-1.coreum.dev:26657"; `chain_ws_endpoint`: `string` = "wss://full-node.devnet-1.coreum.dev:26657"; `coin_type`: `string` = "990"; `gas_price`: `string` ; `site_title`: `string` = "Coreum Services"; `staking_denom`: [`CoreumDenom`](enums/CoreumDenom.md) = CoreumDenom.DEVNET } |
| `devnet.chain_bech32_prefix` | [`CoreumPrefixes`](enums/CoreumPrefixes.md) |
| `devnet.chain_explorer` | `string` |
| `devnet.chain_id` | [`CoreumChainID`](enums/CoreumChainID.md) |
| `devnet.chain_name` | `string` |
| `devnet.chain_rest_endpoint` | `string` |
| `devnet.chain_rpc_endpoint` | `string` |
| `devnet.chain_ws_endpoint` | `string` |
| `devnet.coin_type` | `string` |
| `devnet.gas_price` | `string` |
| `devnet.site_title` | `string` |
| `devnet.staking_denom` | [`CoreumDenom`](enums/CoreumDenom.md) |
| `mainnet` | { `chain_bech32_prefix`: [`CoreumPrefixes`](enums/CoreumPrefixes.md) = CoreumPrefixes.MAINNET; `chain_explorer`: `string` = "https://explorer.mainnet-1.coreum.dev"; `chain_id`: [`CoreumChainID`](enums/CoreumChainID.md) = CoreumChainID.MAINNET; `chain_name`: `string` = "Coreum"; `chain_rest_endpoint`: `string` = "https://full-node.mainnet-1.coreum.dev:1317"; `chain_rpc_endpoint`: `string` = "https://full-node.mainnet-1.coreum.dev:26657"; `chain_ws_endpoint`: `string` = "wss://full-node.mainnet-1.coreum.dev:26657"; `coin_type`: `string` = "990"; `gas_price`: `string` ; `site_title`: `string` = "Coreum Services"; `staking_denom`: [`CoreumDenom`](enums/CoreumDenom.md) = CoreumDenom.MAINNET } |
| `mainnet.chain_bech32_prefix` | [`CoreumPrefixes`](enums/CoreumPrefixes.md) |
| `mainnet.chain_explorer` | `string` |
| `mainnet.chain_id` | [`CoreumChainID`](enums/CoreumChainID.md) |
| `mainnet.chain_name` | `string` |
| `mainnet.chain_rest_endpoint` | `string` |
| `mainnet.chain_rpc_endpoint` | `string` |
| `mainnet.chain_ws_endpoint` | `string` |
| `mainnet.coin_type` | `string` |
| `mainnet.gas_price` | `string` |
| `mainnet.site_title` | `string` |
| `mainnet.staking_denom` | [`CoreumDenom`](enums/CoreumDenom.md) |
| `testnet` | { `chain_bech32_prefix`: [`CoreumPrefixes`](enums/CoreumPrefixes.md) = CoreumPrefixes.TESTNET; `chain_explorer`: `string` = "https://explorer.testnet-1.coreum.dev"; `chain_id`: [`CoreumChainID`](enums/CoreumChainID.md) = CoreumChainID.TESTNET; `chain_name`: `string` = "Coreum Testnet"; `chain_rest_endpoint`: `string` = "https://full-node.testnet-1.coreum.dev:1317"; `chain_rpc_endpoint`: `string` = "https://full-node.testnet-1.coreum.dev:26657"; `chain_ws_endpoint`: `string` = "wss://full-node.testnet-1.coreum.dev:26657"; `coin_type`: `string` = "990"; `gas_price`: `string` ; `site_title`: `string` = "Coreum Services"; `staking_denom`: [`CoreumDenom`](enums/CoreumDenom.md) = CoreumDenom.TESTNET } |
| `testnet.chain_bech32_prefix` | [`CoreumPrefixes`](enums/CoreumPrefixes.md) |
| `testnet.chain_explorer` | `string` |
| `testnet.chain_id` | [`CoreumChainID`](enums/CoreumChainID.md) |
| `testnet.chain_name` | `string` |
| `testnet.chain_rest_endpoint` | `string` |
| `testnet.chain_rpc_endpoint` | `string` |
| `testnet.chain_ws_endpoint` | `string` |
| `testnet.coin_type` | `string` |
| `testnet.gas_price` | `string` |
| `testnet.site_title` | `string` |
| `testnet.staking_denom` | [`CoreumDenom`](enums/CoreumDenom.md) |

#### Defined in

[src/types/coreum.ts:41](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/types/coreum.ts#L41)

___

### Fee

• **Fee**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Fee`](modules.md#fee) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Fee`](modules.md#fee) |
| `encode` | (`message`: [`Fee`](modules.md#fee), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Fee`](modules.md#fee) |
| `fromPartial` | <I\>(`object`: `I`) => [`Fee`](modules.md#fee) |
| `toJSON` | (`message`: [`Fee`](modules.md#fee)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:240](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L240)

[src/cosmos/tx/v1beta1/tx.ts:1418](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1418)

___

### ModeInfo

• **ModeInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`ModeInfo`](modules.md#modeinfo) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`ModeInfo`](modules.md#modeinfo) |
| `encode` | (`message`: [`ModeInfo`](modules.md#modeinfo), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`ModeInfo`](modules.md#modeinfo) |
| `fromPartial` | <I\>(`object`: `I`) => [`ModeInfo`](modules.md#modeinfo) |
| `toJSON` | (`message`: [`ModeInfo`](modules.md#modeinfo)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:207](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L207)

[src/cosmos/tx/v1beta1/tx.ts:1164](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1164)

___

### ModeInfo\_Multi

• **ModeInfo\_Multi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`ModeInfo_Multi`](modules.md#modeinfo_multi) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`ModeInfo_Multi`](modules.md#modeinfo_multi) |
| `encode` | (`message`: [`ModeInfo_Multi`](modules.md#modeinfo_multi), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`ModeInfo_Multi`](modules.md#modeinfo_multi) |
| `fromPartial` | <I\>(`object`: `I`) => [`ModeInfo_Multi`](modules.md#modeinfo_multi) |
| `toJSON` | (`message`: [`ModeInfo_Multi`](modules.md#modeinfo_multi)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:225](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L225)

[src/cosmos/tx/v1beta1/tx.ts:1319](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1319)

___

### ModeInfo\_Single

• **ModeInfo\_Single**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`ModeInfo_Single`](modules.md#modeinfo_single) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`ModeInfo_Single`](modules.md#modeinfo_single) |
| `encode` | (`message`: [`ModeInfo_Single`](modules.md#modeinfo_single), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`ModeInfo_Single`](modules.md#modeinfo_single) |
| `fromPartial` | <I\>(`object`: `I`) => [`ModeInfo_Single`](modules.md#modeinfo_single) |
| `toJSON` | (`message`: [`ModeInfo_Single`](modules.md#modeinfo_single)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:219](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L219)

[src/cosmos/tx/v1beta1/tx.ts:1255](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1255)

___

### SignDoc

• **SignDoc**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`SignDoc`](modules.md#signdoc) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`SignDoc`](modules.md#signdoc) |
| `encode` | (`message`: [`SignDoc`](modules.md#signdoc), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`SignDoc`](modules.md#signdoc) |
| `fromPartial` | <I\>(`object`: `I`) => [`SignDoc`](modules.md#signdoc) |
| `toJSON` | (`message`: [`SignDoc`](modules.md#signdoc)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:59](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L59)

[src/cosmos/tx/v1beta1/tx.ts:524](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L524)

___

### SignDocDirectAux

• **SignDocDirectAux**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`SignDocDirectAux`](modules.md#signdocdirectaux) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`SignDocDirectAux`](modules.md#signdocdirectaux) |
| `encode` | (`message`: [`SignDocDirectAux`](modules.md#signdocdirectaux), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`SignDocDirectAux`](modules.md#signdocdirectaux) |
| `fromPartial` | <I\>(`object`: `I`) => [`SignDocDirectAux`](modules.md#signdocdirectaux) |
| `toJSON` | (`message`: [`SignDocDirectAux`](modules.md#signdocdirectaux)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:86](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L86)

[src/cosmos/tx/v1beta1/tx.ts:647](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L647)

___

### SignerInfo

• **SignerInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`SignerInfo`](modules.md#signerinfo) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`SignerInfo`](modules.md#signerinfo) |
| `encode` | (`message`: [`SignerInfo`](modules.md#signerinfo), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`SignerInfo`](modules.md#signerinfo) |
| `fromPartial` | <I\>(`object`: `I`) => [`SignerInfo`](modules.md#signerinfo) |
| `toJSON` | (`message`: [`SignerInfo`](modules.md#signerinfo)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:186](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L186)

[src/cosmos/tx/v1beta1/tx.ts:1057](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1057)

___

### Tip

• **Tip**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Tip`](modules.md#tip) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Tip`](modules.md#tip) |
| `encode` | (`message`: [`Tip`](modules.md#tip), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Tip`](modules.md#tip) |
| `fromPartial` | <I\>(`object`: `I`) => [`Tip`](modules.md#tip) |
| `toJSON` | (`message`: [`Tip`](modules.md#tip)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:267](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L267)

[src/cosmos/tx/v1beta1/tx.ts:1523](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L1523)

___

### Tx

• **Tx**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`Tx`](modules.md#tx) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Tx`](modules.md#tx) |
| `encode` | (`message`: [`Tx`](modules.md#tx), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Tx`](modules.md#tx) |
| `fromPartial` | <I\>(`object`: `I`) => [`Tx`](modules.md#tx) |
| `toJSON` | (`message`: [`Tx`](modules.md#tx)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:16](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L16)

[src/cosmos/tx/v1beta1/tx.ts:305](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L305)

___

### TxBody

• **TxBody**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`TxBody`](modules.md#txbody) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`TxBody`](modules.md#txbody) |
| `encode` | (`message`: [`TxBody`](modules.md#txbody), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`TxBody`](modules.md#txbody) |
| `fromPartial` | <I\>(`object`: `I`) => [`TxBody`](modules.md#txbody) |
| `toJSON` | (`message`: [`TxBody`](modules.md#txbody)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:116](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L116)

[src/cosmos/tx/v1beta1/tx.ts:805](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L805)

___

### TxRaw

• **TxRaw**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | <I\>(`base?`: `I`) => [`TxRaw`](modules.md#txraw) |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`TxRaw`](modules.md#txraw) |
| `encode` | (`message`: [`TxRaw`](modules.md#txraw), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`TxRaw`](modules.md#txraw) |
| `fromPartial` | <I\>(`object`: `I`) => [`TxRaw`](modules.md#txraw) |
| `toJSON` | (`message`: [`TxRaw`](modules.md#txraw)) => `unknown` |

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:39](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L39)

[src/cosmos/tx/v1beta1/tx.ts:414](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L414)

___

### coreumRegistry

• `Const` **coreumRegistry**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

Registry of the Custom Messages of the Coreum blockchain

#### Defined in

[src/coreum/index.ts:37](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/coreum/index.ts#L37)

___

### cosmwasmRegistry

• `Const` **cosmwasmRegistry**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[src/wasm/v1/index.ts:23](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/wasm/v1/index.ts#L23)

___

### protobufPackage

• `Const` **protobufPackage**: ``"cosmos.tx.v1beta1"``

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:13](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L13)

## Functions

### convertStringToAny

▸ **convertStringToAny**(`message`): `Any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Any`

#### Defined in

[src/utils/convertStringToAny.ts:4](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/convertStringToAny.ts#L4)

___

### coreToUCORE

▸ **coreToUCORE**(`core`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `core` | `string` | CORE to convert to ucore |

#### Returns

`string`

A string representing ucore value of CORE

#### Defined in

[src/utils/calculations.ts:15](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/calculations.ts#L15)

___

### generateMultisigFromPubkeys

▸ **generateMultisigFromPubkeys**(`pubkeys`, `threshold`, `prefix`): [`MultisigAccount`](interfaces/MultisigAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubkeys` | `string`[] |
| `threshold` | `number` |
| `prefix` | `string` |

#### Returns

[`MultisigAccount`](interfaces/MultisigAccount.md)

#### Defined in

[src/utils/wallet.ts:54](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/wallet.ts#L54)

___

### generateWalletFromMnemonic

▸ **generateWalletFromMnemonic**(`mnemonic`, `prefix`): `Promise`<`OfflineDirectSigner`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonic` | `string` | Mnemonic words of a Cosmos SDK wallet |
| `prefix` | [`CoreumPrefixes`](enums/CoreumPrefixes.md) | The prefix to use - "core" \| "testcore" \| "devcore" |

#### Returns

`Promise`<`OfflineDirectSigner`\>

A wallet with the default hdPath for the Coreum Blockchain, and with the selected prefix.

#### Defined in

[src/utils/wallet.ts:40](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/wallet.ts#L40)

___

### isValidCoreumAddress

▸ **isValidCoreumAddress**(`address`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | String representing an address on the Coreum blockchain |

#### Returns

`boolean`

A boolean defining if the passed address is a valid address on the Coreum Blockchain

#### Defined in

[src/utils/wallet.ts:16](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/wallet.ts#L16)

___

### parseClassFeatures

▸ **parseClassFeatures**(`features`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `features` | [`ClassFeature`](enums/ClassFeature.md)[] | An array of NFT Class features |

#### Returns

`Object`

An object defining which features are enabled/disabled with a boolean

| Name | Type |
| :------ | :------ |
| `burning` | `boolean` |
| `disable_sending` | `boolean` |
| `freezing` | `boolean` |
| `whitelisting` | `boolean` |

#### Defined in

[src/utils/nft.ts:8](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/nft.ts#L8)

___

### parseFloatToRoyaltyRate

▸ **parseFloatToRoyaltyRate**(`royalty`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `royalty` | `string` \| `number` | Float to convert to royalty rate format |

#### Returns

`string`

a string representing the float passed in royalty rate format

#### Defined in

[src/utils/calculations.ts:23](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/calculations.ts#L23)

___

### parseTokenFeatures

▸ **parseTokenFeatures**(`features`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `features` | [`Feature`](enums/Feature.md)[] | An array of Feature. |

#### Returns

`Object`

An object defining which features are enabled/disabled with boolean

| Name | Type |
| :------ | :------ |
| `burning` | `boolean` |
| `freezing` | `boolean` |
| `minting` | `boolean` |
| `whitelisting` | `boolean` |

#### Defined in

[src/utils/ft.ts:7](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/ft.ts#L7)

___

### subunitToUnit

▸ **subunitToUnit**(`subunit`, `precision`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subunit` | `string` | Amount of the subunit of the token to parse into full unit |
| `precision` | `number` | The precision of the token; number of decimals |

#### Returns

`string`

The converted subunit to Unit with the passed precision

#### Defined in

[src/utils/calculations.ts:35](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/calculations.ts#L35)

___

### ucoreToCORE

▸ **ucoreToCORE**(`ucore`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ucore` | `string` | ucore to convert to CORE |

#### Returns

`string`

A string representing CORE value of ucore

#### Defined in

[src/utils/calculations.ts:7](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/calculations.ts#L7)

___

### unitToSubunit

▸ **unitToSubunit**(`unit`, `precision`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unit` | `string` | Amount of the unit of the token to parse into its subunit |
| `precision` | `number` | The precision of the token; number of decimals |

#### Returns

`string`

The converted unit to subunit with the passed precision

#### Defined in

[src/utils/calculations.ts:46](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/utils/calculations.ts#L46)
