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
- [NFT](modules/NFT.md)
- [Staking](modules/Staking.md)
- [Vesting](modules/Vesting.md)

### Enumerations

- [CoreumChainID](enums/CoreumChainID.md)
- [CoreumDenom](enums/CoreumDenom.md)
- [CoreumNetwork](enums/CoreumNetwork.md)
- [CoreumPrefixes](enums/CoreumPrefixes.md)
- [CoreumTypeUrl](enums/CoreumTypeUrl.md)
- [ExtensionWallets](enums/ExtensionWallets.md)
- [WalletMethods](enums/WalletMethods.md)

### Classes

- [Client](classes/Client.md)

### Interfaces

- [ClientQueryClient](interfaces/ClientQueryClient.md)
- [CoreumMessage](interfaces/CoreumMessage.md)
- [CoreumNetworkConfig](interfaces/CoreumNetworkConfig.md)
- [FeeCalculation](interfaces/FeeCalculation.md)
- [FeeOptions](interfaces/FeeOptions.md)
- [MultisigAccount](interfaces/MultisigAccount.md)

### Variables

- [COREUM\_CONFIG](modules.md#coreum_config)
- [coreumRegistry](modules.md#coreumregistry)
- [cosmwasmRegistry](modules.md#cosmwasmregistry)

### Functions

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

## Variables

### COREUM\_CONFIG

• `Const` **COREUM\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `devnet` | { `chain_bech32_prefix`: [`CoreumPrefixes`](enums/CoreumPrefixes.md) = CoreumPrefixes.DEVNET; `chain_id`: [`CoreumChainID`](enums/CoreumChainID.md) = CoreumChainID.DEVNET; `chain_name`: `string` = "Coreum Devnet"; `chain_rest_endpoint`: `string` = "https://full-node.devnet-1.coreum.dev:1317"; `chain_rpc_endpoint`: `string` = "https://full-node.devnet-1.coreum.dev:26657"; `chain_ws_endpoint`: `string` = "wss://full-node.devnet-1.coreum.dev:26657"; `chaing_explorer`: `string` = "https://explorer.devnet-1.coreum.dev"; `coin_type`: `string` = "990"; `gas_price`: `string` ; `site_title`: `string` = "Coreum FT Services"; `staking_denom`: [`CoreumDenom`](enums/CoreumDenom.md) = CoreumDenom.DEVNET } |
| `devnet.chain_bech32_prefix` | [`CoreumPrefixes`](enums/CoreumPrefixes.md) |
| `devnet.chain_id` | [`CoreumChainID`](enums/CoreumChainID.md) |
| `devnet.chain_name` | `string` |
| `devnet.chain_rest_endpoint` | `string` |
| `devnet.chain_rpc_endpoint` | `string` |
| `devnet.chain_ws_endpoint` | `string` |
| `devnet.chaing_explorer` | `string` |
| `devnet.coin_type` | `string` |
| `devnet.gas_price` | `string` |
| `devnet.site_title` | `string` |
| `devnet.staking_denom` | [`CoreumDenom`](enums/CoreumDenom.md) |
| `mainnet` | { `chain_bech32_prefix`: [`CoreumPrefixes`](enums/CoreumPrefixes.md) = CoreumPrefixes.MAINNET; `chain_id`: [`CoreumChainID`](enums/CoreumChainID.md) = CoreumChainID.MAINNET; `chain_name`: `string` = "Coreum"; `chain_rest_endpoint`: `string` = "https://full-node.mainnet-1.coreum.dev:1317"; `chain_rpc_endpoint`: `string` = "https://full-node.mainnet-1.coreum.dev:26657"; `chain_ws_endpoint`: `string` = "wss://full-node.mainnet-1.coreum.dev:26657"; `chaing_explorer`: `string` = "https://explorer.mainnet-1.coreum.dev"; `coin_type`: `string` = "990"; `gas_price`: `string` ; `site_title`: `string` = "Coreum FT Services"; `staking_denom`: [`CoreumDenom`](enums/CoreumDenom.md) = CoreumDenom.MAINNET } |
| `mainnet.chain_bech32_prefix` | [`CoreumPrefixes`](enums/CoreumPrefixes.md) |
| `mainnet.chain_id` | [`CoreumChainID`](enums/CoreumChainID.md) |
| `mainnet.chain_name` | `string` |
| `mainnet.chain_rest_endpoint` | `string` |
| `mainnet.chain_rpc_endpoint` | `string` |
| `mainnet.chain_ws_endpoint` | `string` |
| `mainnet.chaing_explorer` | `string` |
| `mainnet.coin_type` | `string` |
| `mainnet.gas_price` | `string` |
| `mainnet.site_title` | `string` |
| `mainnet.staking_denom` | [`CoreumDenom`](enums/CoreumDenom.md) |
| `testnet` | { `chain_bech32_prefix`: [`CoreumPrefixes`](enums/CoreumPrefixes.md) = CoreumPrefixes.TESTNET; `chain_id`: [`CoreumChainID`](enums/CoreumChainID.md) = CoreumChainID.TESTNET; `chain_name`: `string` = "Coreum Testnet"; `chain_rest_endpoint`: `string` = "https://full-node.testnet-1.coreum.dev:1317"; `chain_rpc_endpoint`: `string` = "https://full-node.testnet-1.coreum.dev:26657"; `chain_ws_endpoint`: `string` = "wss://full-node.testnet-1.coreum.dev:26657"; `chaing_explorer`: `string` = "https://explorer.testnet-1.coreum.dev"; `coin_type`: `string` = "990"; `gas_price`: `string` ; `site_title`: `string` = "Coreum FT Services"; `staking_denom`: [`CoreumDenom`](enums/CoreumDenom.md) = CoreumDenom.TESTNET } |
| `testnet.chain_bech32_prefix` | [`CoreumPrefixes`](enums/CoreumPrefixes.md) |
| `testnet.chain_id` | [`CoreumChainID`](enums/CoreumChainID.md) |
| `testnet.chain_name` | `string` |
| `testnet.chain_rest_endpoint` | `string` |
| `testnet.chain_rpc_endpoint` | `string` |
| `testnet.chain_ws_endpoint` | `string` |
| `testnet.chaing_explorer` | `string` |
| `testnet.coin_type` | `string` |
| `testnet.gas_price` | `string` |
| `testnet.site_title` | `string` |
| `testnet.staking_denom` | [`CoreumDenom`](enums/CoreumDenom.md) |

#### Defined in

[src/types/coreum.ts:41](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/types/coreum.ts#L41)

___

### coreumRegistry

• `Const` **coreumRegistry**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

Registry of the Custom Messages of the Coreum blockchain

#### Defined in

[src/coreum/index.ts:34](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/coreum/index.ts#L34)

___

### cosmwasmRegistry

• `Const` **cosmwasmRegistry**: `ReadonlyArray`<[`string`, `GeneratedType`]\>

#### Defined in

[src/wasm/v1/index.ts:22](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/wasm/v1/index.ts#L22)

## Functions

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

[src/utils/calculations.ts:15](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/calculations.ts#L15)

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

[src/utils/wallet.ts:54](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/wallet.ts#L54)

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

[src/utils/wallet.ts:40](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/wallet.ts#L40)

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

[src/utils/wallet.ts:16](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/wallet.ts#L16)

___

### parseClassFeatures

▸ **parseClassFeatures**(`features`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `features` | [`ClassFeature`](enums/internal_.ClassFeature.md)[] | An array of NFT Class features |

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

[src/utils/nft.ts:8](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/nft.ts#L8)

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

[src/utils/calculations.ts:23](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/calculations.ts#L23)

___

### parseTokenFeatures

▸ **parseTokenFeatures**(`features`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `features` | [`Feature`](enums/internal_.Feature.md)[] | An array of Feature. |

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

[src/utils/ft.ts:7](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/ft.ts#L7)

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

[src/utils/calculations.ts:35](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/calculations.ts#L35)

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

[src/utils/calculations.ts:7](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/calculations.ts#L7)

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

[src/utils/calculations.ts:46](https://github.com/PyramydLabs/coreum-js/blob/cea84df/src/utils/calculations.ts#L46)
