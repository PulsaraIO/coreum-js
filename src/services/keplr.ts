import { CoreumNetworkConfig } from "@/types/coreum";
import { convertFromMicroDenom } from "@/utils/calculations";

declare let window: any;

export const connectKeplr = async (config: CoreumNetworkConfig) => {
  // Keplr extension injects the offline signer that is compatible with cosmJS.
  // You can get this offline signer from `window.getOfflineSigner(chainId:string)` after load event.
  // And it also injects the helper function to `window.keplr`.
  // If `window.getOfflineSigner` or `window.keplr` is null, Keplr extension may be not installed on browser.
  if (!window.getOfflineSigner || !window.keplr) {
    alert("Please install keplr extension");
  } else {
    if (window.keplr.experimentalSuggestChain) {
      const stakingDenom = convertFromMicroDenom(config.staking_denom || "");
      const gasPrice = Number(
        (config.gas_price || "").replace(config.staking_denom || "", "")
      );

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
      } catch (e: any) {
        console.log("E_SUGGESTING_CHAIN => ", e);
        alert("Failed to suggest the chain");
      }
    } else {
      alert("Please use the recent version of Keplr extension");
    }
  }
};
