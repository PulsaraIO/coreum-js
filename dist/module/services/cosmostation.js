import { cosmos } from "@cosmostation/extension-client";
import { getOfflineSigner } from "@cosmostation/cosmos-client";
export const connectCosmostation = async (config) => {
    try {
        const provider = await cosmos();
        const gasPrice = (config.gas_price || "").replace(config.staking_denom || "", "");
        await provider.addChain({
            chainId: config.chain_id,
            chainName: config.chain_name,
            addressPrefix: config.chain_bech32_prefix,
            baseDenom: config.staking_denom,
            displayDenom: "core",
            restURL: config.chain_rest_endpoint,
            coinType: String(config.coin_type),
            decimals: 6,
            gasRate: {
                average: gasPrice,
                low: gasPrice,
                tiny: gasPrice,
            },
        });
    }
    catch (e) {
        throw {
            thrower: "connectCosmostation",
            error: e.name === "InstallError" ? "Extension not installed." : e,
        };
    }
};
export const getCosmosOfflineSigner = async (chain_id) => {
    try {
        return await getOfflineSigner(chain_id);
    }
    catch (e) {
        throw {
            thrower: "getCosmosOfflineSigner",
            error: e,
        };
    }
};
