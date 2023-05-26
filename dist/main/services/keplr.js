"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectKeplr = void 0;
const connectKeplr = async (config) => {
    // Keplr extension injects the offline signer that is compatible with cosmJS.
    // You can get this offline signer from `window.getOfflineSigner(chainId:string)` after load event.
    // And it also injects the helper function to `window.keplr`.
    // If `window.getOfflineSigner` or `window.keplr` is null, Keplr extension may be not installed on browser.
    if (!window.getOfflineSigner || !window.keplr) {
        alert("Please install keplr extension");
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
                console.log("E_SUGGESTING_CHAIN => ", e);
                alert("Failed to suggest the chain");
            }
        }
        else {
            alert("Please use the recent version of Keplr extension");
        }
    }
};
exports.connectKeplr = connectKeplr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VwbHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMva2VwbHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSU8sTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFFLE1BQTJCLEVBQUUsRUFBRTtJQUNoRSw2RUFBNkU7SUFDN0UsbUdBQW1HO0lBQ25HLDZEQUE2RDtJQUM3RCwyR0FBMkc7SUFDM0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7UUFDN0MsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7S0FDekM7U0FBTTtRQUNMLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRTtZQUN6QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7WUFDNUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUNyQixDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNqRSxDQUFDO1lBRUYsSUFBSTtnQkFDRixrSEFBa0g7Z0JBQ2xILCtFQUErRTtnQkFDL0Usb0dBQW9HO2dCQUNwRywrRUFBK0U7Z0JBQy9FLHlIQUF5SDtnQkFDekgscUdBQXFHO2dCQUNyRyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7b0JBQzFDLG9DQUFvQztvQkFDcEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRO29CQUN4QixxREFBcUQ7b0JBQ3JELFNBQVMsRUFBRSxNQUFNLENBQUMsVUFBVTtvQkFDNUIsNkJBQTZCO29CQUM3QixHQUFHLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjtvQkFDOUIsOEJBQThCO29CQUM5QixJQUFJLEVBQUUsTUFBTSxDQUFDLG1CQUFtQjtvQkFDaEMsMkJBQTJCO29CQUMzQixhQUFhLEVBQUU7d0JBQ2IsaURBQWlEO3dC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