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
    return ((0, jsx_runtime_1.jsxs)(react_lite_1.ChainProvider, Object.assign({ chains: [coreumChain], assetLists: [coreumAsset], wallets: [...keplr_extension_1.wallets, ...leap_extension_1.wallets, ...cosmostation_extension_1.wallets], walletModal: customModal || WalletModal_1.default }, { children: [(0, jsx_runtime_1.jsx)(CoreumRegistry, {}), children] })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXQtY29ubmVjdGlvbi9XYWxsZXRDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsdURBQWlFO0FBQ2pFLG1EQUFnRDtBQUNoRCxpRUFBcUU7QUFDckUsK0RBQW9FO0FBQ3BFLCtFQUE4RTtBQUU5RSxnRUFBd0M7QUFFeEMsU0FBUyxhQUFhLENBQUMsS0FBVTtJQUMvQixNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsR0FBRyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFFL0MsTUFBTSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxJQUFJLENBQzdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FDaEMsQ0FBQztJQUNYLE1BQU0sV0FBVyxHQUFHLHVCQUFNLENBQUMsSUFBSSxDQUM3QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQzVCLENBQUM7SUFFZixPQUFPLENBQ0wsd0JBQUMsMEJBQWEsa0JBQ1osTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQ3JCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUN6QixPQUFPLEVBQUUsQ0FBQyxHQUFHLHlCQUFXLEVBQUUsR0FBRyx3QkFBVyxFQUFFLEdBQUcsZ0NBQWEsQ0FBQyxFQUMzRCxXQUFXLEVBQUUsV0FBVyxJQUFJLHFCQUFXLGlCQUV2Qyx1QkFBQyxjQUFjLEtBQUcsRUFDakIsUUFBUSxLQUNLLENBQ2pCLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUEscUJBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUVsQyxlQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNuQixNQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJO2dCQUNGLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUUvQyxNQUFjLENBQUMsTUFBTSxHQUFHLE1BQ3ZCLE1BQ0QsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDL0M7WUFBQyxPQUFPLENBQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsSUFBSSxNQUFNLENBQUMsaUJBQWlCO1lBQUUsVUFBVSxFQUFFLENBQUM7SUFDN0MsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUUvQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==