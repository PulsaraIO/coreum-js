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
const __1 = require("..");
function WalletConnect(props) {
    const { children, customModal = null } = props;
    const coreumChain = chain_registry_1.chains.find((chain) => chain.chain_name === "coreum");
    const coreumAsset = chain_registry_1.assets.find((asset) => asset.chain_name === "coreum");
    return ((0, jsx_runtime_1.jsxs)(react_lite_1.ChainProvider, Object.assign({ chains: [coreumChain], assetLists: [coreumAsset], wallets: [...keplr_extension_1.wallets, ...leap_extension_1.wallets, ...cosmostation_extension_1.wallets], walletModal: customModal || WalletModal_1.default, signerOptions: {
            preferredSignType: () => {
                return "direct";
            },
        } }, { children: [(0, jsx_runtime_1.jsx)(CoreumRegistry, {}), children] })));
}
function CoreumRegistry() {
    const client = (0, react_lite_1.useChain)("coreum");
    react_1.default.useEffect(() => {
        const registerTypes = async () => {
            try {
                const { registry } = await client.getSigningStargateClient();
                __1.coreumRegistry.map((type) => {
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
exports.default = WalletConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXQtY29ubmVjdGlvbi9XYWxsZXRDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsdURBQWlFO0FBQ2pFLG1EQUFnRDtBQUNoRCxpRUFBcUU7QUFDckUsK0RBQW9FO0FBQ3BFLCtFQUE4RTtBQUU5RSxnRUFBd0M7QUFDeEMsMEJBQW9DO0FBRXBDLFNBQVMsYUFBYSxDQUFDLEtBQVU7SUFDL0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRS9DLE1BQU0sV0FBVyxHQUFHLHVCQUFNLENBQUMsSUFBSSxDQUM3QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQ2hDLENBQUM7SUFDWCxNQUFNLFdBQVcsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FDN0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUM1QixDQUFDO0lBRWYsT0FBTyxDQUNMLHdCQUFDLDBCQUFhLGtCQUNaLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUNyQixVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDekIsT0FBTyxFQUFFLENBQUMsR0FBRyx5QkFBVyxFQUFFLEdBQUcsd0JBQVcsRUFBRSxHQUFHLGdDQUFhLENBQUMsRUFDM0QsV0FBVyxFQUFFLFdBQVcsSUFBSSxxQkFBVyxFQUN2QyxhQUFhLEVBQUU7WUFDYixpQkFBaUIsRUFBRSxHQUFHLEVBQUU7Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLENBQUM7U0FDRixpQkFFRCx1QkFBQyxjQUFjLEtBQUcsRUFDakIsUUFBUSxLQUNLLENBQ2pCLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUEscUJBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUVsQyxlQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNuQixNQUFNLGFBQWEsR0FBRyxLQUFLLElBQUksRUFBRTtZQUMvQixJQUFJO2dCQUNGLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUU3RCxrQkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUMxQixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sQ0FBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUM7UUFDSCxDQUFDLENBQUM7UUFDRixhQUFhLEVBQUUsQ0FBQztJQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==