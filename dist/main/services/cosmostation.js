"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCosmosOfflineSigner = exports.connectCosmostation = void 0;
const calculations_1 = require("../utils/calculations");
const extension_client_1 = require("@cosmostation/extension-client");
const cosmos_client_1 = require("@cosmostation/cosmos-client");
const connectCosmostation = async (config) => {
    try {
        const provider = await (0, extension_client_1.cosmos)();
        const gasPrice = (config.gas_price || "").replace(config.staking_denom || "", "");
        await provider.addChain({
            chainId: config.chain_id,
            chainName: config.chain_name,
            addressPrefix: config.chain_bech32_prefix,
            baseDenom: config.staking_denom,
            displayDenom: (0, calculations_1.convertFromMicroDenom)(config.staking_denom),
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
            thrower: e.thrower || "connectCosmostation",
            error: e,
        };
    }
};
exports.connectCosmostation = connectCosmostation;
const getCosmosOfflineSigner = async (chain_id) => {
    try {
        return await (0, cosmos_client_1.getOfflineSigner)(chain_id);
    }
    catch (e) {
        throw {
            thrower: e.thrower || "getCosmosOfflineSigner",
            error: e,
        };
    }
};
exports.getCosmosOfflineSigner = getCosmosOfflineSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbW9zdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2Nvc21vc3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBOEQ7QUFDOUQscUVBQXdEO0FBQ3hELCtEQUErRDtBQUd4RCxNQUFNLG1CQUFtQixHQUFHLEtBQUssRUFBRSxNQUEyQixFQUFFLEVBQUU7SUFDdkUsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSx5QkFBTSxHQUFFLENBQUM7UUFFaEMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FDL0MsTUFBTSxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQzFCLEVBQUUsQ0FDSCxDQUFDO1FBRUYsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDNUIsYUFBYSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7WUFDekMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxhQUFhO1lBQy9CLFlBQVksRUFBRSxJQUFBLG9DQUFxQixFQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDekQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2xDLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixHQUFHLEVBQUUsUUFBUTtnQkFDYixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLENBQU0sRUFBRTtRQUNmLE1BQU07WUFDSixPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxxQkFBcUI7WUFDM0MsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUE5QlcsUUFBQSxtQkFBbUIsdUJBOEI5QjtBQUVLLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxFQUN6QyxRQUFnQixFQUNRLEVBQUU7SUFDMUIsSUFBSTtRQUNGLE9BQU8sTUFBTSxJQUFBLGdDQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxDQUFNLEVBQUU7UUFDZixNQUFNO1lBQ0osT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksd0JBQXdCO1lBQzlDLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBWFcsUUFBQSxzQkFBc0IsMEJBV2pDIn0=