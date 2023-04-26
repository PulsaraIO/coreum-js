// NEXT_PUBLIC_CHAIN_ID=coreum-testnet-1
// NEXT_PUBLIC_CHAIN_NAME=Coreum Testnet
// NEXT_PUBLIC_CHAIN_BECH32_PREFIX=testcore
// NEXT_PUBLIC_CHAIN_RPC_ENDPOINT=https://full-node.testnet-1.coreum.dev:26657/
// NEXT_PUBLIC_CHAIN_REST_ENDPOINT=https://full-node.testnet-1.coreum.dev:1317/
// NEXT_PUBLIC_CHAIN_EXPLORER=https://explorer.testnet-1.coreum.dev/
// NEXT_PUBLIC_STAKING_DENOM=utestcore
// NEXT_PUBLIC_CHAIN_COIN_TYPE=990
// NEXT_PUBLIC_SITE_TITLE=Coreum starter
// NEXT_PUBLIC_SITE_ICON_URL="/coreum.svg"
// NEXT_PUBLIC_GAS_PRICE=0.0625utestcore
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
        gas_price: `0.0625${CoreumPrefixes.MAINNET}`,
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
        gas_price: `0.0625${CoreumPrefixes.TESTNET}`,
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
        gas_price: `0.0625${CoreumPrefixes.DEVNET}`,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL2NvcmV1bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLDJDQUEyQztBQUMzQywrRUFBK0U7QUFDL0UsK0VBQStFO0FBQy9FLG9FQUFvRTtBQUNwRSxzQ0FBc0M7QUFDdEMsa0NBQWtDO0FBQ2xDLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBRXhDLE1BQU0sQ0FBTixJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsb0NBQW1CLENBQUE7SUFDbkIsb0NBQW1CLENBQUE7SUFDbkIsa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQsTUFBTSxDQUFOLElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUN2Qiw2Q0FBNEIsQ0FBQTtJQUM1Qiw2Q0FBNEIsQ0FBQTtJQUM1QiwyQ0FBMEIsQ0FBQTtBQUM1QixDQUFDLEVBSlcsYUFBYSxLQUFiLGFBQWEsUUFJeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3hCLGtDQUFnQixDQUFBO0lBQ2hCLHNDQUFvQixDQUFBO0lBQ3BCLG9DQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxjQUFjLEtBQWQsY0FBYyxRQUl6QjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsZ0NBQWlCLENBQUE7SUFDakIsb0NBQXFCLENBQUE7SUFDckIsa0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLFdBQVcsS0FBWCxXQUFXLFFBSXRCO0FBZ0JELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUMzQixPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQUUsUUFBUTtRQUNwQixRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU87UUFDL0IsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLE9BQU87UUFDM0Msa0JBQWtCLEVBQUUsOENBQThDO1FBQ2xFLG1CQUFtQixFQUFFLDZDQUE2QztRQUNsRSxpQkFBaUIsRUFBRSw0Q0FBNEM7UUFDL0QsZUFBZSxFQUFFLHVDQUF1QztRQUN4RCxhQUFhLEVBQUUsV0FBVyxDQUFDLE9BQU87UUFDbEMsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxTQUFTLEVBQUUsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0tBQzdDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QixRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU87UUFDL0IsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLE9BQU87UUFDM0Msa0JBQWtCLEVBQUUsOENBQThDO1FBQ2xFLG1CQUFtQixFQUFFLDZDQUE2QztRQUNsRSxpQkFBaUIsRUFBRSw0Q0FBNEM7UUFDL0QsZUFBZSxFQUFFLHVDQUF1QztRQUN4RCxhQUFhLEVBQUUsV0FBVyxDQUFDLE9BQU87UUFDbEMsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxTQUFTLEVBQUUsU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFO0tBQzdDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sVUFBVSxFQUFFLGVBQWU7UUFDM0IsUUFBUSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1FBQzlCLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxNQUFNO1FBQzFDLGtCQUFrQixFQUFFLDZDQUE2QztRQUNqRSxtQkFBbUIsRUFBRSw0Q0FBNEM7UUFDakUsaUJBQWlCLEVBQUUsMkNBQTJDO1FBQzlELGVBQWUsRUFBRSxzQ0FBc0M7UUFDdkQsYUFBYSxFQUFFLFdBQVcsQ0FBQyxNQUFNO1FBQ2pDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxvQkFBb0I7UUFDaEMsU0FBUyxFQUFFLFNBQVMsY0FBYyxDQUFDLE1BQU0sRUFBRTtLQUM1QztDQUNGLENBQUMifQ==