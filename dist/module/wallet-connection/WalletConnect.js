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
    return (_jsx(ChainProvider, { chains: [coreumChain], assetLists: [coreumAsset], wallets: [...kplrWallets, ...leapWallets, ...cosmosWallets], walletModal: customModal || WalletModal, children: children }));
}
export default WalletConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXQtY29ubmVjdGlvbi9XYWxsZXRDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxJQUFJLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLElBQUksYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUUsT0FBTyxXQUFXLE1BQU0sZUFBZSxDQUFDO0FBRXhDLFNBQVMsYUFBYSxDQUFDLEtBQVU7SUFDL0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRS9DLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQzdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FDaEMsQ0FBQztJQUNYLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQzdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FDNUIsQ0FBQztJQUVmLE9BQU8sQ0FDTCxLQUFDLGFBQWEsSUFDWixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDckIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLEdBQUcsV0FBVyxFQUFFLEdBQUcsYUFBYSxDQUFDLEVBQzNELFdBQVcsRUFBRSxXQUFXLElBQUksV0FBVyxZQUV0QyxRQUFRLEdBQ0ssQ0FDakIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLGFBQWEsQ0FBQyJ9