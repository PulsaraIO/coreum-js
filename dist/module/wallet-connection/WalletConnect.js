import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ChainProvider, useChain } from "@cosmos-kit/react-lite";
import { chains, assets } from "chain-registry";
import { wallets as kplrWallets } from "@cosmos-kit/keplr-extension";
import { wallets as leapWallets } from "@cosmos-kit/leap-extension";
import { wallets as cosmosWallets } from "@cosmos-kit/cosmostation-extension";
import WalletModal from "./WalletModal";
import { coreumRegistry } from "..";
function WalletConnect(props) {
    const { children, customModal = null } = props;
    const coreumChain = chains.find((chain) => chain.chain_name === "coreum");
    const coreumAsset = assets.find((asset) => asset.chain_name === "coreum");
    return (_jsxs(ChainProvider, { chains: [coreumChain], assetLists: [coreumAsset], wallets: [...kplrWallets, ...leapWallets, ...cosmosWallets], walletModal: customModal || WalletModal, signerOptions: {
            preferredSignType: () => {
                return "direct";
            },
        }, children: [_jsx(CoreumRegistry, {}), children] }));
}
function CoreumRegistry() {
    const client = useChain("coreum");
    React.useEffect(() => {
        const registerTypes = async () => {
            try {
                const { registry } = await client.getSigningStargateClient();
                coreumRegistry.map((type) => {
                    registry.register(type[0], type[1]);
                });
            }
            catch (e) {
                console.log("E_REGISTERING_TYPES =>", e);
            }
        };
        registerTypes();
    }, []);
    return null;
}
export default WalletConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXQtY29ubmVjdGlvbi9XYWxsZXRDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxJQUFJLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLElBQUksV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sSUFBSSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLFdBQVcsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLElBQUksQ0FBQztBQUVwQyxTQUFTLGFBQWEsQ0FBQyxLQUFVO0lBQy9CLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztJQUUvQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUM3QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQ2hDLENBQUM7SUFDWCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUM3QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQzVCLENBQUM7SUFFZixPQUFPLENBQ0wsTUFBQyxhQUFhLElBQ1osTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQ3JCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUN6QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxHQUFHLFdBQVcsRUFBRSxHQUFHLGFBQWEsQ0FBQyxFQUMzRCxXQUFXLEVBQUUsV0FBVyxJQUFJLFdBQVcsRUFDdkMsYUFBYSxFQUFFO1lBQ2IsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO2dCQUN0QixPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDO1NBQ0YsYUFFRCxLQUFDLGNBQWMsS0FBRyxFQUNqQixRQUFRLElBQ0ssQ0FDakIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWM7SUFDckIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWxDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ25CLE1BQU0sYUFBYSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUk7Z0JBQ0YsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBRTdELGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDMUIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLENBQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsYUFBYSxFQUFFLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsZUFBZSxhQUFhLENBQUMifQ==