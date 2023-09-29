[coreum-js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SignMode

# Enumeration: SignMode

[<internal>](../modules/internal_.md).SignMode

SignMode represents a signing mode with its own security guarantees.

This enum should be considered a registry of all known sign modes
in the Cosmos ecosystem. Apps are not expected to support all known
sign modes. Apps that would like to support custom  sign modes are
encouraged to open a small PR against this file to add a new case
to this SignMode enum describing their sign mode so that different
apps have a consistent version of this enum.

## Table of contents

### Enumeration Members

- [SIGN\_MODE\_DIRECT](internal_.SignMode.md#sign_mode_direct)
- [SIGN\_MODE\_DIRECT\_AUX](internal_.SignMode.md#sign_mode_direct_aux)
- [SIGN\_MODE\_EIP\_191](internal_.SignMode.md#sign_mode_eip_191)
- [SIGN\_MODE\_LEGACY\_AMINO\_JSON](internal_.SignMode.md#sign_mode_legacy_amino_json)
- [SIGN\_MODE\_TEXTUAL](internal_.SignMode.md#sign_mode_textual)
- [SIGN\_MODE\_UNSPECIFIED](internal_.SignMode.md#sign_mode_unspecified)
- [UNRECOGNIZED](internal_.SignMode.md#unrecognized)

## Enumeration Members

### SIGN\_MODE\_DIRECT

• **SIGN\_MODE\_DIRECT** = ``1``

SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
verified with raw bytes from Tx.

#### Defined in

[src/cosmos/tx/signing/v1beta1/signing.ts:29](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/signing/v1beta1/signing.ts#L29)

___

### SIGN\_MODE\_DIRECT\_AUX

• **SIGN\_MODE\_DIRECT\_AUX** = ``3``

SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
require signers signing over other signers' `signer_info`. It also allows
for adding Tips in transactions.

Since: cosmos-sdk 0.46

#### Defined in

[src/cosmos/tx/signing/v1beta1/signing.ts:46](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/signing/v1beta1/signing.ts#L46)

___

### SIGN\_MODE\_EIP\_191

• **SIGN\_MODE\_EIP\_191** = ``191``

SIGN_MODE_EIP_191 - SIGN_MODE_EIP_191 specifies the sign mode for EIP 191 signing on the Cosmos
SDK. Ref: https://eips.ethereum.org/EIPS/eip-191

Currently, SIGN_MODE_EIP_191 is registered as a SignMode enum variant,
but is not implemented on the SDK by default. To enable EIP-191, you need
to pass a custom `TxConfig` that has an implementation of
`SignModeHandler` for EIP-191. The SDK may decide to fully support
EIP-191 in the future.

Since: cosmos-sdk 0.45.2

#### Defined in

[src/cosmos/tx/signing/v1beta1/signing.ts:64](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/signing/v1beta1/signing.ts#L64)

___

### SIGN\_MODE\_LEGACY\_AMINO\_JSON

• **SIGN\_MODE\_LEGACY\_AMINO\_JSON** = ``127``

SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
Amino JSON and will be removed in the future.

#### Defined in

[src/cosmos/tx/signing/v1beta1/signing.ts:51](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/signing/v1beta1/signing.ts#L51)

___

### SIGN\_MODE\_TEXTUAL

• **SIGN\_MODE\_TEXTUAL** = ``2``

SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
human-readable textual representation on top of the binary representation
from SIGN_MODE_DIRECT. It is currently experimental, and should be used
for testing purposes only, until Textual is fully released. Please follow
the tracking issue https://github.com/cosmos/cosmos-sdk/issues/11970.

#### Defined in

[src/cosmos/tx/signing/v1beta1/signing.ts:37](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/signing/v1beta1/signing.ts#L37)

___

### SIGN\_MODE\_UNSPECIFIED

• **SIGN\_MODE\_UNSPECIFIED** = ``0``

SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
rejected.

#### Defined in

[src/cosmos/tx/signing/v1beta1/signing.ts:24](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/signing/v1beta1/signing.ts#L24)

___

### UNRECOGNIZED

• **UNRECOGNIZED** = ``-1``

#### Defined in

[src/cosmos/tx/signing/v1beta1/signing.ts:65](https://github.com/PulsaraIO/coreum-js/blob/37352c6/src/cosmos/tx/signing/v1beta1/signing.ts#L65)
