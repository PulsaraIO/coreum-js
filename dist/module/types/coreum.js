export var CoreumNetwork;
(function (CoreumNetwork) {
    CoreumNetwork["MAINNET"] = "mainnet";
    CoreumNetwork["TESTNET"] = "testnet";
    CoreumNetwork["DEVNET"] = "devnet";
})(CoreumNetwork || (CoreumNetwork = {}));
export var CoreumChainID;
(function (CoreumChainID) {
    CoreumChainID["MAINNET"] = "coreum-mainnet-1";
    CoreumChainID["TESTNET"] = "coreum-testnet-1";
    CoreumChainID["DEVNET"] = "coreum-devnet-1";
})(CoreumChainID || (CoreumChainID = {}));
export var CoreumPrefixes;
(function (CoreumPrefixes) {
    CoreumPrefixes["MAINNET"] = "core";
    CoreumPrefixes["TESTNET"] = "testcore";
    CoreumPrefixes["DEVNET"] = "devcore";
})(CoreumPrefixes || (CoreumPrefixes = {}));
export var CoreumDenom;
(function (CoreumDenom) {
    CoreumDenom["MAINNET"] = "ucore";
    CoreumDenom["TESTNET"] = "utestcore";
    CoreumDenom["DEVNET"] = "udevcore";
})(CoreumDenom || (CoreumDenom = {}));
export const COREUM_CONFIG = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL2NvcmV1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLG9DQUFtQixDQUFBO0lBQ25CLG9DQUFtQixDQUFBO0lBQ25CLGtDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyxhQUFhLEtBQWIsYUFBYSxRQUl4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsNkNBQTRCLENBQUE7SUFDNUIsNkNBQTRCLENBQUE7SUFDNUIsMkNBQTBCLENBQUE7QUFDNUIsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN4QixrQ0FBZ0IsQ0FBQTtJQUNoQixzQ0FBb0IsQ0FBQTtJQUNwQixvQ0FBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLGdDQUFpQixDQUFBO0lBQ2pCLG9DQUFxQixDQUFBO0lBQ3JCLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxXQUFXLEtBQVgsV0FBVyxRQUl0QjtBQWdCRCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUc7SUFDM0IsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLGFBQWEsQ0FBQyxPQUFPO1FBQy9CLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxPQUFPO1FBQzNDLGtCQUFrQixFQUFFLDhDQUE4QztRQUNsRSxtQkFBbUIsRUFBRSw2Q0FBNkM7UUFDbEUsaUJBQWlCLEVBQUUsNENBQTRDO1FBQy9ELGVBQWUsRUFBRSx1Q0FBdUM7UUFDeEQsYUFBYSxFQUFFLFdBQVcsQ0FBQyxPQUFPO1FBQ2xDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxvQkFBb0I7UUFDaEMsU0FBUyxFQUFFLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRTtLQUMxQztJQUNELE9BQU8sRUFBRTtRQUNQLFVBQVUsRUFBRSxnQkFBZ0I7UUFDNUIsUUFBUSxFQUFFLGFBQWEsQ0FBQyxPQUFPO1FBQy9CLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxPQUFPO1FBQzNDLGtCQUFrQixFQUFFLDhDQUE4QztRQUNsRSxtQkFBbUIsRUFBRSw2Q0FBNkM7UUFDbEUsaUJBQWlCLEVBQUUsNENBQTRDO1FBQy9ELGVBQWUsRUFBRSx1Q0FBdUM7UUFDeEQsYUFBYSxFQUFFLFdBQVcsQ0FBQyxPQUFPO1FBQ2xDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxvQkFBb0I7UUFDaEMsU0FBUyxFQUFFLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRTtLQUMxQztJQUNELE1BQU0sRUFBRTtRQUNOLFVBQVUsRUFBRSxlQUFlO1FBQzNCLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTTtRQUM5QixtQkFBbUIsRUFBRSxjQUFjLENBQUMsTUFBTTtRQUMxQyxrQkFBa0IsRUFBRSw2Q0FBNkM7UUFDakUsbUJBQW1CLEVBQUUsNENBQTRDO1FBQ2pFLGlCQUFpQixFQUFFLDJDQUEyQztRQUM5RCxlQUFlLEVBQUUsc0NBQXNDO1FBQ3ZELGFBQWEsRUFBRSxXQUFXLENBQUMsTUFBTTtRQUNqQyxTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsb0JBQW9CO1FBQ2hDLFNBQVMsRUFBRSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUU7S0FDekM7Q0FDRixDQUFDIn0=