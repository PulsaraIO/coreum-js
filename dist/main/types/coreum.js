"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COREUM_CONFIG = exports.CoreumDenom = exports.CoreumPrefixes = exports.CoreumChainID = exports.CoreumNetwork = void 0;
var CoreumNetwork;
(function (CoreumNetwork) {
    CoreumNetwork["MAINNET"] = "mainnet";
    CoreumNetwork["TESTNET"] = "testnet";
    CoreumNetwork["DEVNET"] = "devnet";
})(CoreumNetwork = exports.CoreumNetwork || (exports.CoreumNetwork = {}));
var CoreumChainID;
(function (CoreumChainID) {
    CoreumChainID["MAINNET"] = "coreum-mainnet-1";
    CoreumChainID["TESTNET"] = "coreum-testnet-1";
    CoreumChainID["DEVNET"] = "coreum-devnet-1";
})(CoreumChainID = exports.CoreumChainID || (exports.CoreumChainID = {}));
var CoreumPrefixes;
(function (CoreumPrefixes) {
    CoreumPrefixes["MAINNET"] = "core";
    CoreumPrefixes["TESTNET"] = "testcore";
    CoreumPrefixes["DEVNET"] = "devcore";
})(CoreumPrefixes = exports.CoreumPrefixes || (exports.CoreumPrefixes = {}));
var CoreumDenom;
(function (CoreumDenom) {
    CoreumDenom["MAINNET"] = "ucore";
    CoreumDenom["TESTNET"] = "utestcore";
    CoreumDenom["DEVNET"] = "udevcore";
})(CoreumDenom = exports.CoreumDenom || (exports.CoreumDenom = {}));
/** @internal */
exports.COREUM_CONFIG = {
    mainnet: {
        chain_name: "Coreum",
        chain_id: CoreumChainID.MAINNET,
        chain_bech32_prefix: CoreumPrefixes.MAINNET,
        chain_rpc_endpoint: "https://full-node.mainnet-1.coreum.dev:26657",
        chain_rest_endpoint: "https://full-node.mainnet-1.coreum.dev:1317",
        chain_ws_endpoint: "wss://full-node.mainnet-1.coreum.dev:26657",
        chaing_explorer: "https://explorer.mainnet-1.coreum.dev",
        staking_denom: CoreumDenom.MAINNET,
        coin_type: "990",
        site_title: "Coreum FT Services",
        gas_price: `0.0625${CoreumDenom.MAINNET}`,
    },
    testnet: {
        chain_name: "Coreum Testnet",
        chain_id: CoreumChainID.TESTNET,
        chain_bech32_prefix: CoreumPrefixes.TESTNET,
        chain_rpc_endpoint: "https://full-node.testnet-1.coreum.dev:26657",
        chain_rest_endpoint: "https://full-node.testnet-1.coreum.dev:1317",
        chain_ws_endpoint: "wss://full-node.testnet-1.coreum.dev:26657",
        chaing_explorer: "https://explorer.testnet-1.coreum.dev",
        staking_denom: CoreumDenom.TESTNET,
        coin_type: "990",
        site_title: "Coreum FT Services",
        gas_price: `0.0625${CoreumDenom.TESTNET}`,
    },
    devnet: {
        chain_name: "Coreum Devnet",
        chain_id: CoreumChainID.DEVNET,
        chain_bech32_prefix: CoreumPrefixes.DEVNET,
        chain_rpc_endpoint: "https://full-node.devnet-1.coreum.dev:26657",
        chain_rest_endpoint: "https://full-node.devnet-1.coreum.dev:1317",
        chain_ws_endpoint: "wss://full-node.devnet-1.coreum.dev:26657",
        chaing_explorer: "https://explorer.devnet-1.coreum.dev",
        staking_denom: CoreumDenom.DEVNET,
        coin_type: "990",
        site_title: "Coreum FT Services",
        gas_price: `0.0625${CoreumDenom.DEVNET}`,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL2NvcmV1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsb0NBQW1CLENBQUE7SUFDbkIsb0NBQW1CLENBQUE7SUFDbkIsa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBRUQsSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLDZDQUE0QixDQUFBO0lBQzVCLDZDQUE0QixDQUFBO0lBQzVCLDJDQUEwQixDQUFBO0FBQzVCLENBQUMsRUFKVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUl4QjtBQUVELElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN4QixrQ0FBZ0IsQ0FBQTtJQUNoQixzQ0FBb0IsQ0FBQTtJQUNwQixvQ0FBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFJekI7QUFFRCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsZ0NBQWlCLENBQUE7SUFDakIsb0NBQXFCLENBQUE7SUFDckIsa0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBaUJELGdCQUFnQjtBQUNILFFBQUEsYUFBYSxHQUFHO0lBQzNCLE9BQU8sRUFBRTtRQUNQLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxhQUFhLENBQUMsT0FBTztRQUMvQixtQkFBbUIsRUFBRSxjQUFjLENBQUMsT0FBTztRQUMzQyxrQkFBa0IsRUFBRSw4Q0FBOEM7UUFDbEUsbUJBQW1CLEVBQUUsNkNBQTZDO1FBQ2xFLGlCQUFpQixFQUFFLDRDQUE0QztRQUMvRCxlQUFlLEVBQUUsdUNBQXVDO1FBQ3hELGFBQWEsRUFBRSxXQUFXLENBQUMsT0FBTztRQUNsQyxTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsb0JBQW9CO1FBQ2hDLFNBQVMsRUFBRSxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUU7S0FDMUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCLFFBQVEsRUFBRSxhQUFhLENBQUMsT0FBTztRQUMvQixtQkFBbUIsRUFBRSxjQUFjLENBQUMsT0FBTztRQUMzQyxrQkFBa0IsRUFBRSw4Q0FBOEM7UUFDbEUsbUJBQW1CLEVBQUUsNkNBQTZDO1FBQ2xFLGlCQUFpQixFQUFFLDRDQUE0QztRQUMvRCxlQUFlLEVBQUUsdUNBQXVDO1FBQ3hELGFBQWEsRUFBRSxXQUFXLENBQUMsT0FBTztRQUNsQyxTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsb0JBQW9CO1FBQ2hDLFNBQVMsRUFBRSxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUU7S0FDMUM7SUFDRCxNQUFNLEVBQUU7UUFDTixVQUFVLEVBQUUsZUFBZTtRQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU07UUFDOUIsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLE1BQU07UUFDMUMsa0JBQWtCLEVBQUUsNkNBQTZDO1FBQ2pFLG1CQUFtQixFQUFFLDRDQUE0QztRQUNqRSxpQkFBaUIsRUFBRSwyQ0FBMkM7UUFDOUQsZUFBZSxFQUFFLHNDQUFzQztRQUN2RCxhQUFhLEVBQUUsV0FBVyxDQUFDLE1BQU07UUFDakMsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxTQUFTLEVBQUUsU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0tBQ3pDO0NBQ0YsQ0FBQyJ9