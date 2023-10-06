"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectKeplr = void 0;
const connectKeplr = async (config) => {
    try {
        // Keplr extension injects the offline signer that is compatible with cosmJS.
        // You can get this offline signer from `window.getOfflineSigner(chainId:string)` after load event.
        // And it also injects the helper function to `window.keplr`.
        // If `window.getOfflineSigner` or `window.keplr` is null, Keplr extension may be not installed on browser.
        if (!window.getOfflineSigner || !window.keplr) {
            throw "Extension not installed.";
        }
        else {
            if (window.keplr.experimentalSuggestChain) {
                const stakingDenom = "core";
                const gasPrice = Number((config.gas_price || "").replace(config.staking_denom || "", ""));
                try {
                    // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
                    // cosmoshub-3 is integrated to Keplr so the code should return without errors.
                    // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
                    // If the user approves, the chain will be added to the user's Keplr extension.
                    // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
                    // If the same chain id is already registered, it will resolve and not require the user interactions.
                    await window.keplr.experimentalSuggestChain({
                        // Chain-id of the Cosmos SDK chain.
                        chainId: config.chain_id,
                        // The name of the chain to be displayed to the user.
                        chainName: config.chain_name,
                        // RPC endpoint of the chain.
                        rpc: config.chain_rpc_endpoint,
                        // REST endpoint of the chain.
                        rest: config.chain_rest_endpoint,
                        // Staking coin information
                        stakeCurrency: {
                            // Coin denomination to be displayed to the user.
                            coinDenom: stakingDenom,
                            // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                            coinMinimalDenom: config.staking_denom,
                            // # of decimal points to convert minimal denomination to user-facing denomination.
                            coinDecimals: 6,
                            // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                            // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                            // coinGeckoId: ""
                        },
                        // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
                        // The 'stake' button in Keplr extension will link to the webpage.
                        // walletUrlForStaking: "",
                        // The BIP44 path.
                        bip44: {
                            // You can only set the coin type of BIP44.
                            // 'Purpose' is fixed to 44.
                            coinType: Number(config.coin_type),
                        },
                        // Bech32 configuration to show the address to user.
                        bech32Config: {
                            bech32PrefixAccAddr: config.chain_bech32_prefix,
                            bech32PrefixAccPub: `${config.chain_bech32_prefix}pub`,
                            bech32PrefixValAddr: `${config.chain_bech32_prefix}valoper`,
                            bech32PrefixValPub: `${config.chain_bech32_prefix}valoperpub`,
                            bech32PrefixConsAddr: `${config.chain_bech32_prefix}valcons`,
                            bech32PrefixConsPub: `${config.chain_bech32_prefix}valconspub`,
                        },
                        // List of all coin/tokens used in this chain.
                        currencies: [
                            {
                                // Coin denomination to be displayed to the user.
                                coinDenom: stakingDenom,
                                // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                                coinMinimalDenom: config.staking_denom,
                                // # of decimal points to convert minimal denomination to user-facing denomination.
                                coinDecimals: 6,
                                // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                                // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                                // coinGeckoId: ""
                            },
                        ],
                        // List of coin/tokens used as a fee token in this chain.
                        feeCurrencies: [
                            {
                                // Coin denomination to be displayed to the user.
                                coinDenom: stakingDenom,
                                // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                                coinMinimalDenom: config.staking_denom,
                                // # of decimal points to convert minimal denomination to user-facing denomination.
                                coinDecimals: 6,
                                // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                                // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                                // coinGeckoId: ""
                            },
                        ],
                        // (Optional) The number of the coin type.
                        // This field is only used to fetch the address from ENS.
                        // Ideally, it is recommended to be the same with BIP44 path's coin type.
                        // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
                        // So, this is separated to support such chains.
                        coinType: Number(config.coin_type),
                        // (Optional) This is used to set the fee of the transaction.
                        // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
                        // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
                        // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
                        gasPriceStep: {
                            low: gasPrice,
                            average: gasPrice,
                            high: gasPrice,
                        },
                    });
                }
                catch (e) {
                    throw "Failed to suggest the chain";
                }
            }
            else {
                throw "Please use the recent version of Keplr extension";
            }
        }
    }
    catch (e) {
        throw {
            thrower: "connectKeplr",
            error: e,
        };
    }
};
exports.connectKeplr = connectKeplr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VwbHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMva2VwbHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSU8sTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFFLE1BQTJCLEVBQUUsRUFBRTtJQUNoRSxJQUFJO1FBQ0YsNkVBQTZFO1FBQzdFLG1HQUFtRztRQUNuRyw2REFBNkQ7UUFDN0QsMkdBQTJHO1FBQzNHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzdDLE1BQU0sMEJBQTBCLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRTtnQkFDekMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUM1QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQ3JCLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ2pFLENBQUM7Z0JBRUYsSUFBSTtvQkFDRixrSEFBa0g7b0JBQ2xILCtFQUErRTtvQkFDL0Usb0dBQW9HO29CQUNwRywrRUFBK0U7b0JBQy9FLHlIQUF5SDtvQkFDekgscUdBQXFHO29CQUNyRyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7d0JBQzFDLG9DQUFvQzt3QkFDcEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRO3dCQUN4QixxREFBcUQ7d0JBQ3JELFNBQVMsRUFBRSxNQUFNLENBQUMsVUFBVTt3QkFDNUIsNkJBQTZCO3dCQUM3QixHQUFHLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjt3QkFDOUIsOEJBQThCO3dCQUM5QixJQUFJLEVBQUUsTUFBTSxDQUFDLG1CQUFtQjt3QkFDaEMsMkJBQTJCO3dCQUMzQixhQUFhLEVBQUU7NEJBQ2IsaURBQWlE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