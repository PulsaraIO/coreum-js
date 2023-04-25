"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_lite_1 = require("@cosmos-kit/react-lite");
const chain_registry_1 = require("chain-registry");
const keplr_extension_1 = require("@cosmos-kit/keplr-extension");
const leap_extension_1 = require("@cosmos-kit/leap-extension");
const cosmostation_extension_1 = require("@cosmos-kit/cosmostation-extension");
const WalletModal_1 = __importDefault(require("./WalletModal"));
function WalletConnect(props) {
    const { children, customModal = null } = props;
    const coreumChain = chain_registry_1.chains.find((chain) => chain.chain_name === "coreum");
    const coreumAsset = chain_registry_1.assets.find((asset) => asset.chain_name === "coreum");
    return ((0, jsx_runtime_1.jsx)(react_lite_1.ChainProvider, Object.assign({ chains: [coreumChain], assetLists: [coreumAsset], wallets: [...keplr_extension_1.wallets, ...leap_extension_1.wallets, ...cosmostation_extension_1.wallets], walletModal: customModal || WalletModal_1.default }, { children: children })));
}
function CoreumRegistry() {
    const client = (0, react_lite_1.useChain)("coreum");
    react_1.default.useEffect(() => {
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
exports.default = WalletConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXQtY29ubmVjdGlvbi9XYWxsZXRDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsdURBQWlFO0FBQ2pFLG1EQUFnRDtBQUNoRCxpRUFBcUU7QUFDckUsK0RBQW9FO0FBQ3BFLCtFQUE4RTtBQUU5RSxnRUFBd0M7QUFFeEMsU0FBUyxhQUFhLENBQUMsS0FBVTtJQUMvQixNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFFL0MsTUFBTSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxJQUFJLENBQzdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FDaEMsQ0FBQztJQUNYLE1BQU0sV0FBVyxHQUFHLHVCQUFNLENBQUMsSUFBSSxDQUM3QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQzVCLENBQUM7SUFFZixPQUFPLENBQ0wsdUJBQUMsMEJBQWEsa0JBQ1osTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQ3JCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUN6QixPQUFPLEVBQUUsQ0FBQyxHQUFHLHlCQUFXLEVBQUUsR0FBRyx3QkFBVyxFQUFFLEdBQUcsZ0NBQWEsQ0FBQyxFQUMzRCxXQUFXLEVBQUUsV0FBVyxJQUFJLHFCQUFXLGdCQUd0QyxRQUFRLElBQ0ssQ0FDakIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWM7SUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBQSxxQkFBUSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWxDLGVBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ25CLE1BQU0sVUFBVSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQzVCLElBQUk7Z0JBQ0YsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBRS9DLE1BQWMsQ0FBQyxNQUFNLEdBQUcsTUFDdkIsTUFDRCxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMvQztZQUFDLE9BQU8sQ0FBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxpQkFBaUI7WUFBRSxVQUFVLEVBQUUsQ0FBQztJQUM3QyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBRS9CLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9