import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { ChainProvider, useChain } from "@cosmos-kit/react-lite";
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
function CoreumRegistry() {
    const client = useChain("coreum");
    React.useEffect(() => {
        const withSigner = async () => {
            try {
                const offlineSigner = client.getOfflineSigner();
                window.Mantle = await window.Mantle.switchToSigningClient(offlineSigner);
            }
            catch (e) {
                console.log("E_CONNECTING_WITH_SIGNER =>", e);
            }
        };
        if (client.isWalletConnected)
            withSigner();
    }, [client.isWalletConnected]);
    return null;
}
export default WalletConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXQtY29ubmVjdGlvbi9XYWxsZXRDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxJQUFJLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLElBQUksV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sSUFBSSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLFdBQVcsTUFBTSxlQUFlLENBQUM7QUFFeEMsU0FBUyxhQUFhLENBQUMsS0FBVTtJQUMvQixNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFFL0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDN0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUNoQyxDQUFDO0lBQ1gsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDN0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUM1QixDQUFDO0lBRWYsT0FBTyxDQUNMLEtBQUMsYUFBYSxJQUNaLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUNyQixVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDekIsT0FBTyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsR0FBRyxXQUFXLEVBQUUsR0FBRyxhQUFhLENBQUMsRUFDM0QsV0FBVyxFQUFFLFdBQVcsSUFBSSxXQUFXLFlBR3RDLFFBQVEsR0FDSyxDQUNqQixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsY0FBYztJQUNyQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsTUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDNUIsSUFBSTtnQkFDRixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFFL0MsTUFBYyxDQUFDLE1BQU0sR0FBRyxNQUN2QixNQUNELENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQy9DO1lBQUMsT0FBTyxDQUFNLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQztRQUVGLElBQUksTUFBTSxDQUFDLGlCQUFpQjtZQUFFLFVBQVUsRUFBRSxDQUFDO0lBQzdDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFL0IsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsZUFBZSxhQUFhLENBQUMifQ==