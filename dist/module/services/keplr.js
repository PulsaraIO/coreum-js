export const connectKeplr = async (config) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VwbHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMva2VwbHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxNQUEyQixFQUFFLEVBQUU7SUFDaEUsSUFBSTtRQUNGLDZFQUE2RTtRQUM3RSxtR0FBbUc7UUFDbkcsNkRBQTZEO1FBQzdELDJHQUEyRztRQUMzRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUM3QyxNQUFNLDBCQUEwQixDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUU7Z0JBQ3pDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDNUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUNyQixDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNqRSxDQUFDO2dCQUVGLElBQUk7b0JBQ0Ysa0hBQWtIO29CQUNsSCwrRUFBK0U7b0JBQy9FLG9HQUFvRztvQkFDcEcsK0VBQStFO29CQUMvRSx5SEFBeUg7b0JBQ3pILHFHQUFxRztvQkFDckcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO3dCQUMxQyxvQ0FBb0M7d0JBQ3BDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUTt3QkFDeEIscURBQXFEO3dCQUNyRCxTQUFTLEVBQUUsTUFBTSxDQUFDLFVBQVU7d0JBQzVCLDZCQUE2Qjt3QkFDN0IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0I7d0JBQzlCLDhCQUE4Qjt3QkFDOUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7d0JBQ2hDLDJCQUEyQjt3QkFDM0IsYUFBYSxFQUFFOzRCQUNi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