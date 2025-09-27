import { AminoTypes } from "@cosmjs/stargate";
// FT (Fungible Token) Amino Types
export const ftAminoConverters = {
    // MsgIssue - Issue new fungible token
    "/coreum.asset.ft.v1.MsgIssue": {
        aminoType: "aseestft/MsgIssue",
        toAmino: ({ issuer, symbol, subunit, precision, initialAmount, description, features, burnRate, sendCommissionRate, uri, uriHash, extensionSettings, dexSettings, }) => ({
            issuer,
            symbol,
            subunit,
            precision,
            initial_amount: initialAmount,
            description,
            features,
            burn_rate: burnRate,
            send_commission_rate: sendCommissionRate,
            uri,
            uri_hash: uriHash,
            extension_settings: extensionSettings,
            dex_settings: dexSettings,
        }),
        fromAmino: ({ issuer, symbol, subunit, precision, initial_amount, description, features, burn_rate, send_commission_rate, uri, uri_hash, extension_settings, dex_settings, }) => ({
            issuer,
            symbol,
            subunit,
            precision,
            initialAmount: initial_amount,
            description,
            features,
            burnRate: burn_rate,
            sendCommissionRate: send_commission_rate,
            uri,
            uriHash: uri_hash,
            extensionSettings: extension_settings,
            dexSettings: dex_settings,
        }),
    },
    // MsgMint - Mint new fungible tokens
    "/coreum.asset.ft.v1.MsgMint": {
        aminoType: "aseestft/MsgMint",
        toAmino: ({ sender, coin, recipient }) => ({
            sender,
            coin,
            recipient,
        }),
        fromAmino: ({ sender, coin, recipient }) => ({
            sender,
            coin,
            recipient,
        }),
    },
    // MsgBurn - Burn fungible tokens
    "/coreum.asset.ft.v1.MsgBurn": {
        aminoType: "aseestft/MsgBurn",
        toAmino: ({ sender, coin }) => ({
            sender,
            coin,
        }),
        fromAmino: ({ sender, coin }) => ({
            sender,
            coin,
        }),
    },
    // MsgFreeze - Freeze fungible tokens
    "/coreum.asset.ft.v1.MsgFreeze": {
        aminoType: "aseestft/MsgFreeze",
        toAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
        fromAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
    },
    // MsgUnfreeze - Unfreeze fungible tokens
    "/coreum.asset.ft.v1.MsgUnfreeze": {
        aminoType: "aseestft/MsgUnfreeze",
        toAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
        fromAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
    },
    // MsgSetFrozen - Set frozen amount
    "/coreum.asset.ft.v1.MsgSetFrozen": {
        aminoType: "aseestft/MsgSetFrozen",
        toAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
        fromAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
    },
    // MsgGloballyFreeze - Globally freeze token
    "/coreum.asset.ft.v1.MsgGloballyFreeze": {
        aminoType: "aseestft/MsgGloballyFreeze",
        toAmino: ({ sender, denom }) => ({
            sender,
            denom,
        }),
        fromAmino: ({ sender, denom }) => ({
            sender,
            denom,
        }),
    },
    // MsgGloballyUnfreeze - Globally unfreeze token
    "/coreum.asset.ft.v1.MsgGloballyUnfreeze": {
        aminoType: "aseestft/MsgGloballyUnfreeze",
        toAmino: ({ sender, denom }) => ({
            sender,
            denom,
        }),
        fromAmino: ({ sender, denom }) => ({
            sender,
            denom,
        }),
    },
    // MsgClawback - Clawback tokens
    "/coreum.asset.ft.v1.MsgClawback": {
        aminoType: "aseestft/MsgClawback",
        toAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
        fromAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
    },
    // MsgSetWhitelistedLimit - Set whitelisted limit
    "/coreum.asset.ft.v1.MsgSetWhitelistedLimit": {
        aminoType: "aseestft/MsgSetWhitelistedLimit",
        toAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
        fromAmino: ({ sender, account, coin }) => ({
            sender,
            account,
            coin,
        }),
    },
    // MsgTransferAdmin - Transfer admin
    "/coreum.asset.ft.v1.MsgTransferAdmin": {
        aminoType: "aseestft/MsgTransferAdmin",
        toAmino: ({ sender, account, denom }) => ({
            sender,
            account,
            denom,
        }),
        fromAmino: ({ sender, account, denom }) => ({
            sender,
            account,
            denom,
        }),
    },
    // MsgClearAdmin - Clear admin
    "/coreum.asset.ft.v1.MsgClearAdmin": {
        aminoType: "aseestft/MsgClearAdmin",
        toAmino: ({ sender, denom }) => ({
            sender,
            denom,
        }),
        fromAmino: ({ sender, denom }) => ({
            sender,
            denom,
        }),
    },
    // MsgUpgradeTokenV1 - Upgrade token to V1
    "/coreum.asset.ft.v1.MsgUpgradeTokenV1": {
        aminoType: "aseestft/MsgUpgradeTokenV1",
        toAmino: ({ sender, denom, ibcEnabled }) => ({
            sender,
            denom,
            ibc_enabled: ibcEnabled,
        }),
        fromAmino: ({ sender, denom, ibc_enabled }) => ({
            sender,
            denom,
            ibcEnabled: ibc_enabled,
        }),
    },
    // MsgUpdateParams - Update parameters
    "/coreum.asset.ft.v1.MsgUpdateParams": {
        aminoType: "aseestft/MsgUpdateParams",
        toAmino: ({ authority, params }) => ({
            authority,
            params,
        }),
        fromAmino: ({ authority, params }) => ({
            authority,
            params,
        }),
    },
    // MsgUpdateDEXUnifiedRefAmount - Update DEX unified ref amount
    "/coreum.asset.ft.v1.MsgUpdateDEXUnifiedRefAmount": {
        aminoType: "aseestft/MsgUpdateDEXUnifiedRefAmount",
        toAmino: ({ sender, denom, unifiedRefAmount, }) => ({
            sender,
            denom,
            unified_ref_amount: unifiedRefAmount,
        }),
        fromAmino: ({ sender, denom, unified_ref_amount, }) => ({
            sender,
            denom,
            unifiedRefAmount: unified_ref_amount,
        }),
    },
    // MsgUpdateDEXWhitelistedDenoms - Update DEX whitelisted denoms
    "/coreum.asset.ft.v1.MsgUpdateDEXWhitelistedDenoms": {
        aminoType: "aseestft/MsgUpdateDEXWhitelistedDenoms",
        toAmino: ({ sender, denom, whitelistedDenoms, }) => ({
            sender,
            denom,
            whitelisted_denoms: whitelistedDenoms,
        }),
        fromAmino: ({ sender, denom, whitelisted_denoms, }) => ({
            sender,
            denom,
            whitelistedDenoms: whitelisted_denoms,
        }),
    },
};
// DEX Amino Types
export const dexAminoConverters = {
    // MsgUpdateParams - Update DEX parameters
    "/coreum.dex.v1.MsgUpdateParams": {
        aminoType: "dex/MsgUpdateParams",
        toAmino: ({ authority, params }) => ({
            authority,
            params,
        }),
        fromAmino: ({ authority, params }) => ({
            authority,
            params,
        }),
    },
    // MsgPlaceOrder - Place order on DEX
    "/coreum.dex.v1.MsgPlaceOrder": {
        aminoType: "dex/MsgPlaceOrder",
        toAmino: ({ sender, type, id, baseDenom, quoteDenom, price, quantity, side, goodTil, timeInForce, }) => ({
            sender,
            type,
            id,
            base_denom: baseDenom,
            quote_denom: quoteDenom,
            price,
            quantity,
            side,
            good_til: goodTil
                ? goodTil.goodTilBlockHeight != null
                    ? { blocks: String(goodTil.goodTilBlockHeight) }
                    : goodTil.goodTilBlockTime
                        ? { time: goodTil.goodTilBlockTime.toISOString() }
                        : undefined
                : undefined,
            time_in_force: timeInForce, // number
        }),
        fromAmino: ({ sender, type, id, base_denom, quote_denom, price, quantity, side, good_til, time_in_force, }) => ({
            sender,
            type,
            id,
            baseDenom: base_denom,
            quoteDenom: quote_denom,
            price,
            quantity,
            side,
            goodTil: good_til
                ? good_til.blocks != null
                    ? {
                        goodTilBlockHeight: Number(good_til.blocks),
                        goodTilBlockTime: undefined,
                    }
                    : good_til.time != null
                        ? {
                            goodTilBlockHeight: undefined,
                            goodTilBlockTime: new Date(good_til.time),
                        }
                        : undefined
                : undefined,
            timeInForce: time_in_force, // number -> enum
        }),
    },
    // MsgCancelOrder - Cancel order
    "/coreum.dex.v1.MsgCancelOrder": {
        aminoType: "dex/MsgCancelOrder",
        toAmino: ({ sender, id }) => ({
            sender,
            id,
        }),
        fromAmino: ({ sender, id }) => ({
            sender,
            id,
        }),
    },
    // MsgCancelOrdersByDenom - Cancel orders by denom
    "/coreum.dex.v1.MsgCancelOrdersByDenom": {
        aminoType: "dex/MsgCancelOrdersByDenom",
        toAmino: ({ sender, account, denom }) => ({
            sender,
            account,
            denom,
        }),
        fromAmino: ({ sender, account, denom }) => ({
            sender,
            account,
            denom,
        }),
    },
};
// NFT (Non-Fungible Token) Amino Types
export const nftAminoConverters = {
    // MsgIssueClass - Issue new NFT class
    "/coreum.asset.nft.v1.MsgIssueClass": {
        aminoType: "assetnft/MsgIssueClass",
        toAmino: ({ issuer, symbol, name, description, uri, uriHash, data, features, royaltyRate, }) => ({
            issuer,
            symbol,
            name,
            description,
            uri,
            uri_hash: uriHash,
            data,
            features,
            royalty_rate: royaltyRate,
        }),
        fromAmino: ({ issuer, symbol, name, description, uri, uri_hash, data, features, royalty_rate, }) => ({
            issuer,
            symbol,
            name,
            description,
            uri,
            uriHash: uri_hash,
            data,
            features,
            royaltyRate: royalty_rate,
        }),
    },
    // MsgMint - Mint NFT
    "/coreum.asset.nft.v1.MsgMint": {
        aminoType: "assetnft/MsgMint",
        toAmino: ({ sender, classId, id, uri, uriHash, data, recipient, }) => ({
            sender,
            class_id: classId,
            id,
            uri,
            uri_hash: uriHash,
            data,
            recipient,
        }),
        fromAmino: ({ sender, class_id, id, uri, uri_hash, data, recipient, }) => ({
            sender,
            classId: class_id,
            id,
            uri,
            uriHash: uri_hash,
            data,
            recipient,
        }),
    },
    // MsgUpdateData - Update NFT data
    "/coreum.asset.nft.v1.MsgUpdateData": {
        aminoType: "assetnft/MsgUpdateData",
        toAmino: ({ sender, classId, id, items }) => ({
            sender,
            class_id: classId,
            id,
            items,
        }),
        fromAmino: ({ sender, class_id, id, items }) => ({
            sender,
            classId: class_id,
            id,
            items,
        }),
    },
    // MsgBurn - Burn NFT
    "/coreum.asset.nft.v1.MsgBurn": {
        aminoType: "assetnft/MsgBurn",
        toAmino: ({ sender, classId, id }) => ({
            sender,
            class_id: classId,
            id,
        }),
        fromAmino: ({ sender, class_id, id }) => ({
            sender,
            classId: class_id,
            id,
        }),
    },
    // MsgFreeze - Freeze NFT
    "/coreum.asset.nft.v1.MsgFreeze": {
        aminoType: "assetnft/MsgFreeze",
        toAmino: ({ sender, classId, id }) => ({
            sender,
            class_id: classId,
            id,
        }),
        fromAmino: ({ sender, class_id, id }) => ({
            sender,
            classId: class_id,
            id,
        }),
    },
    // MsgUnfreeze - Unfreeze NFT
    "/coreum.asset.nft.v1.MsgUnfreeze": {
        aminoType: "assetnft/MsgUnfreeze",
        toAmino: ({ sender, classId, id }) => ({
            sender,
            class_id: classId,
            id,
        }),
        fromAmino: ({ sender, class_id, id }) => ({
            sender,
            classId: class_id,
            id,
        }),
    },
    // MsgClassFreeze - Freeze NFT class for account
    "/coreum.asset.nft.v1.MsgClassFreeze": {
        aminoType: "assetnft/MsgClassFreeze",
        toAmino: ({ sender, classId, account }) => ({
            sender,
            class_id: classId,
            account,
        }),
        fromAmino: ({ sender, class_id, account }) => ({
            sender,
            classId: class_id,
            account,
        }),
    },
    // MsgClassUnfreeze - Unfreeze NFT class for account
    "/coreum.asset.nft.v1.MsgClassUnfreeze": {
        aminoType: "assetnft/MsgClassUnfreeze",
        toAmino: ({ sender, classId, account }) => ({
            sender,
            class_id: classId,
            account,
        }),
        fromAmino: ({ sender, class_id, account }) => ({
            sender,
            classId: class_id,
            account,
        }),
    },
    // MsgAddToWhitelist - Add account to NFT whitelist
    "/coreum.asset.nft.v1.MsgAddToWhitelist": {
        aminoType: "assetnft/MsgAddToWhitelist",
        toAmino: ({ sender, classId, id, account }) => ({
            sender,
            class_id: classId,
            id,
            account,
        }),
        fromAmino: ({ sender, class_id, id, account }) => ({
            sender,
            classId: class_id,
            id,
            account,
        }),
    },
    // MsgRemoveFromWhitelist - Remove account from NFT whitelist
    "/coreum.asset.nft.v1.MsgRemoveFromWhitelist": {
        aminoType: "assetnft/MsgRemoveFromWhitelist",
        toAmino: ({ sender, classId, id, account }) => ({
            sender,
            class_id: classId,
            id,
            account,
        }),
        fromAmino: ({ sender, class_id, id, account, }) => ({
            sender,
            classId: class_id,
            id,
            account,
        }),
    },
    // MsgAddToClassWhitelist - Add account to NFT class whitelist
    "/coreum.asset.nft.v1.MsgAddToClassWhitelist": {
        aminoType: "assetnft/MsgAddToClassWhitelist",
        toAmino: ({ sender, classId, account }) => ({
            sender,
            class_id: classId,
            account,
        }),
        fromAmino: ({ sender, class_id, account, }) => ({
            sender,
            classId: class_id,
            account,
        }),
    },
    // MsgRemoveFromClassWhitelist - Remove account from NFT class whitelist
    "/coreum.asset.nft.v1.MsgRemoveFromClassWhitelist": {
        aminoType: "assetnft/MsgRemoveFromClassWhitelist",
        toAmino: ({ sender, classId, account }) => ({
            sender,
            class_id: classId,
            account,
        }),
        fromAmino: ({ sender, class_id, account, }) => ({
            sender,
            classId: class_id,
            account,
        }),
    },
    // MsgUpdateParams - Update NFT module parameters
    "/coreum.asset.nft.v1.MsgUpdateParams": {
        aminoType: "assetnft/MsgUpdateParams",
        toAmino: ({ authority, params }) => ({
            authority,
            params,
        }),
        fromAmino: ({ authority, params }) => ({
            authority,
            params,
        }),
    },
};
// NFT Beta Amino Types
export const nftBetaAminoConverters = {
    // MsgSend - Send NFT
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: "cosmos-sdk/MsgSend",
        toAmino: ({ classId, id, sender, receiver }) => ({
            class_id: classId,
            id,
            sender,
            receiver,
        }),
        fromAmino: ({ class_id, id, sender, receiver }) => ({
            classId: class_id,
            id,
            sender,
            receiver,
        }),
    },
};
// Combined Amino Converters
export const coreumAminoConverters = {
    ...ftAminoConverters,
    ...dexAminoConverters,
    ...nftAminoConverters,
    //   ...nftBetaAminoConverters,
};
// Create AminoTypes instance
export function createCoreumAminoTypes() {
    return new AminoTypes(coreumAminoConverters);
}
