import { jsx as _jsx } from "react/jsx-runtime";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { chains, assets } from "chain-registry";
import { wallets as kplrWallets } from "@cosmos-kit/keplr";
import { wallets as leapWallets } from "@cosmos-kit/leap";
import { wallets as cosmosWallets } from "@cosmos-kit/cosmostation";
import WalletModal from "./WalletModal";
function WalletConnect(props) {
    const { children } = props;
    const coreumChain = chains.find((chain) => chain.chain_name === "coreum");
    const coreumAsset = assets.find((asset) => asset.chain_name === "coreum");
    return (_jsx(ChainProvider, Object.assign({ chains: [coreumChain], assetLists: [coreumAsset], wallets: [...kplrWallets, ...leapWallets, ...cosmosWallets], walletModal: WalletModal, walletConnectOptions: {
            signClient: {
                projectId: "0aa901065d7688c378932885076a6790",
            },
        } }, { children: children })));
}
export default WalletConnect;
