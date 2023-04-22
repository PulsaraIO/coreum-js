import { jsx as _jsx } from "react/jsx-runtime";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { chains, assets } from "chain-registry";
import { wallets as kplrWallets } from "@cosmos-kit/keplr-extension";
import { wallets as leapWallets } from "@cosmos-kit/leap-extension";
import { wallets as cosmosWallets } from "@cosmos-kit/cosmostation-extension";
import WalletModal from "./WalletModal";
function WalletConnect(props) {
    const { children, customModal = null } = props;
    const coreumChain = chains.find((chain) => chain.chain_name === "coreum");
    const coreumAsset = assets.find((asset) => asset.chain_name === "coreum");
    return (_jsx(ChainProvider, Object.assign({ chains: [coreumChain], assetLists: [coreumAsset], wallets: [...kplrWallets, ...leapWallets, ...cosmosWallets], walletModal: customModal || WalletModal }, { children: children })));
}
export default WalletConnect;
