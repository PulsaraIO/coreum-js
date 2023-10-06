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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbW9zdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2Nvc21vc3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHL0QsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxFQUFFLE1BQTJCLEVBQUUsRUFBRTtJQUN2RSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNLEVBQUUsQ0FBQztRQUVoQyxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUMvQyxNQUFNLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFDMUIsRUFBRSxDQUNILENBQUM7UUFFRixNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM1QixhQUFhLEVBQUUsTUFBTSxDQUFDLG1CQUFtQjtZQUN6QyxTQUFTLEVBQUUsTUFBTSxDQUFDLGFBQWE7WUFDL0IsWUFBWSxFQUFFLE1BQU07WUFDcEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2xDLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixHQUFHLEVBQUUsUUFBUTtnQkFDYixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE1BQU07WUFDSixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEUsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxFQUN6QyxRQUFnQixFQUNRLEVBQUU7SUFDMUIsSUFBSTtRQUNGLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN6QztJQUFDLE9BQU8sQ0FBTSxFQUFFO1FBQ2YsTUFBTTtZQUNKLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUMifQ==