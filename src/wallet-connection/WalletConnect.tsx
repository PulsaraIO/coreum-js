import React from "react";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { chains, assets } from "chain-registry";
import { wallets as kplrWallets } from "@cosmos-kit/keplr-extension";
import { wallets as leapWallets } from "@cosmos-kit/leap-extension";
import { wallets as cosmosWallets } from "@cosmos-kit/cosmostation-extension";
import { AssetList, Chain } from "@chain-registry/types";
import WalletModal from "./WalletModal";

function WalletConnect(props: any) {
  const { children, customModal = null } = props;

  const coreumChain = chains.find(
    (chain) => chain.chain_name === "coreum"
  ) as Chain;
  const coreumAsset = assets.find(
    (asset) => asset.chain_name === "coreum"
  ) as AssetList;

  return (
    <ChainProvider
      chains={[coreumChain]}
      assetLists={[coreumAsset]}
      wallets={[...kplrWallets, ...leapWallets, ...cosmosWallets]}
      walletModal={customModal || WalletModal}
      signerOptions={{
        preferredSignType: () => {
          return "direct";
        },
      }}
    >
      {children}
    </ChainProvider>
  );
}

export default WalletConnect;
