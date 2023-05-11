export enum CoreumNetwork {
  MAINNET = "mainnet",
  TESTNET = "testnet",
  DEVNET = "devnet",
}

export enum CoreumChainID {
  MAINNET = "coreum-mainnet-1",
  TESTNET = "coreum-testnet-1",
  DEVNET = "coreum-devnet-1",
}

export enum CoreumPrefixes {
  MAINNET = "core",
  TESTNET = "testcore",
  DEVNET = "devcore",
}

export enum CoreumDenom {
  MAINNET = "ucore",
  TESTNET = "utestcore",
  DEVNET = "udevcore",
}

export interface CoreumNetworkConfig {
  chain_name: string;
  chain_id: CoreumChainID;
  chain_bech32_prefix: CoreumPrefixes;
  chain_rpc_endpoint: string;
  chain_rest_endpoint: string;
  chain_ws_endpoint: string;
  chaing_explorer: string;
  staking_denom: CoreumDenom;
  coin_type: string | number;
  site_title: string;
  gas_price: string;
}

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
