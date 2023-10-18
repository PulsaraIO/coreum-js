"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COREUM_CONFIG = exports.CoreumDenom = exports.CoreumPrefixes = exports.CoreumChainID = exports.CoreumNetwork = void 0;
var CoreumNetwork;
(function (CoreumNetwork) {
    CoreumNetwork["MAINNET"] = "mainnet";
    CoreumNetwork["TESTNET"] = "testnet";
    CoreumNetwork["DEVNET"] = "devnet";
})(CoreumNetwork || (exports.CoreumNetwork = CoreumNetwork = {}));
var CoreumChainID;
(function (CoreumChainID) {
    CoreumChainID["MAINNET"] = "coreum-mainnet-1";
    CoreumChainID["TESTNET"] = "coreum-testnet-1";
    CoreumChainID["DEVNET"] = "coreum-devnet-1";
})(CoreumChainID || (exports.CoreumChainID = CoreumChainID = {}));
var CoreumPrefixes;
(function (CoreumPrefixes) {
    CoreumPrefixes["MAINNET"] = "core";
    CoreumPrefixes["TESTNET"] = "testcore";
    CoreumPrefixes["DEVNET"] = "devcore";
})(CoreumPrefixes || (exports.CoreumPrefixes = CoreumPrefixes = {}));
var CoreumDenom;
(function (CoreumDenom) {
    CoreumDenom["MAINNET"] = "ucore";
    CoreumDenom["TESTNET"] = "utestcore";
    CoreumDenom["DEVNET"] = "udevcore";
})(CoreumDenom || (exports.CoreumDenom = CoreumDenom = {}));
/** @internal */
exports.COREUM_CONFIG = {
    mainnet: {
        chain_name: "Coreum",
        chain_id: CoreumChainID.MAINNET,
        chain_bech32_prefix: CoreumPrefixes.MAINNET,
        chain_rpc_endpoint: "https://full-node.mainnet-1.coreum.dev:26657",
        chain_rest_endpoint: "https://full-node.mainnet-1.coreum.dev:1317",
        chain_ws_endpoint: "wss://full-node.mainnet-1.coreum.dev:26657",
        chain_explorer: "https://explorer.mainnet-1.coreum.dev",
        staking_denom: CoreumDenom.MAINNET,
        coin_type: "990",
        site_title: "Coreum Services",
        gas_price: `0.0625${CoreumDenom.MAINNET}`,
    },
    testnet: {
        chain_name: "Coreum Testnet",
        chain_id: CoreumChainID.TESTNET,
        chain_bech32_prefix: CoreumPrefixes.TESTNET,
        chain_rpc_endpoint: "https://full-node.testnet-1.coreum.dev:26657",
        chain_rest_endpoint: "https://full-node.testnet-1.coreum.dev:1317",
        chain_ws_endpoint: "wss://full-node.testnet-1.coreum.dev:26657",
        chain_explorer: "https://explorer.testnet-1.coreum.dev",
        staking_denom: CoreumDenom.TESTNET,
        coin_type: "990",
        site_title: "Coreum Services",
        gas_price: `0.0625${CoreumDenom.TESTNET}`,
    },
    devnet: {
        chain_name: "Coreum Devnet",
        chain_id: CoreumChainID.DEVNET,
        chain_bech32_prefix: CoreumPrefixes.DEVNET,
        chain_rpc_endpoint: "https://full-node-eris.devnet-1.coreum.dev:26657",
        chain_rest_endpoint: "https://full-node-eris.devnet-1.coreum.dev:1317",
        chain_ws_endpoint: "wss://full-node-eris.devnet-1.coreum.dev:26657",
        chain_explorer: "https://explorer.devnet-1.coreum.dev",
        staking_denom: CoreumDenom.DEVNET,
        coin_type: "990",
        site_title: "Coreum Services",
        gas_price: `0.0625${CoreumDenom.DEVNET}`,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL2NvcmV1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsb0NBQW1CLENBQUE7SUFDbkIsb0NBQW1CLENBQUE7SUFDbkIsa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLGFBQWEsNkJBQWIsYUFBYSxRQUl4QjtBQUVELElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUN2Qiw2Q0FBNEIsQ0FBQTtJQUM1Qiw2Q0FBNEIsQ0FBQTtJQUM1QiwyQ0FBMEIsQ0FBQTtBQUM1QixDQUFDLEVBSlcsYUFBYSw2QkFBYixhQUFhLFFBSXhCO0FBRUQsSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3hCLGtDQUFnQixDQUFBO0lBQ2hCLHNDQUFvQixDQUFBO0lBQ3BCLG9DQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxjQUFjLDhCQUFkLGNBQWMsUUFJekI7QUFFRCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsZ0NBQWlCLENBQUE7SUFDakIsb0NBQXFCLENBQUE7SUFDckIsa0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLFdBQVcsMkJBQVgsV0FBVyxRQUl0QjtBQWlCRCxnQkFBZ0I7QUFDSCxRQUFBLGFBQWEsR0FBRztJQUMzQixPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQUUsUUFBUTtRQUNwQixRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU87UUFDL0IsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLE9BQU87UUFDM0Msa0JBQWtCLEVBQUUsOENBQThDO1FBQ2xFLG1CQUFtQixFQUFFLDZDQUE2QztRQUNsRSxpQkFBaUIsRUFBRSw0Q0FBNEM7UUFDL0QsY0FBYyxFQUFFLHVDQUF1QztRQUN2RCxhQUFhLEVBQUUsV0FBVyxDQUFDLE9BQU87UUFDbEMsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixTQUFTLEVBQUUsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0tBQzFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QixRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU87UUFDL0IsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLE9BQU87UUFDM0Msa0JBQWtCLEVBQUUsOENBQThDO1FBQ2xFLG1CQUFtQixFQUFFLDZDQUE2QztRQUNsRSxpQkFBaUIsRUFBRSw0Q0FBNEM7UUFDL0QsY0FBYyxFQUFFLHVDQUF1QztRQUN2RCxhQUFhLEVBQUUsV0FBVyxDQUFDLE9BQU87UUFDbEMsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixTQUFTLEVBQUUsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0tBQzFDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sVUFBVSxFQUFFLGVBQWU7UUFDM0IsUUFBUSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1FBQzlCLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxNQUFNO1FBQzFDLGtCQUFrQixFQUFFLGtEQUFrRDtRQUN0RSxtQkFBbUIsRUFBRSxpREFBaUQ7UUFDdEUsaUJBQWlCLEVBQUUsZ0RBQWdEO1FBQ25FLGNBQWMsRUFBRSxzQ0FBc0M7UUFDdEQsYUFBYSxFQUFFLFdBQVcsQ0FBQyxNQUFNO1FBQ2pDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsU0FBUyxFQUFFLFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRTtLQUN6QztDQUNGLENBQUMifQ==