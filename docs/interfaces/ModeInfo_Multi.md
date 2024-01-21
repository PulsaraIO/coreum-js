[coreum-js](../README.md) / [Exports](../modules.md) / ModeInfo\_Multi

# Interface: ModeInfo\_Multi

Multi is the mode info for a multisig public key

## Table of contents

### Properties

- [bitarray](ModeInfo_Multi.md#bitarray)
- [modeInfos](ModeInfo_Multi.md#modeinfos)

## Properties

### bitarray

• **bitarray**: [`CompactBitArray`](../modules/internal_.md#compactbitarray)

bitarray specifies which keys within the multisig are signing

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:227](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L227)

___

### modeInfos

• **modeInfos**: [`ModeInfo`](../modules.md#modeinfo)[]

mode_infos is the corresponding modes of the signers of the multisig
which could include nested multisig public keys

#### Defined in

[src/cosmos/tx/v1beta1/tx.ts:232](https://github.com/PulsaraIO/coreum-js/blob/63824e3/src/cosmos/tx/v1beta1/tx.ts#L232)
