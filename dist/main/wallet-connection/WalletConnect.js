"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
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
exports.default = WalletConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0Q29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXQtY29ubmVjdGlvbi9XYWxsZXRDb25uZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx1REFBdUQ7QUFDdkQsbURBQWdEO0FBQ2hELGlFQUFxRTtBQUNyRSwrREFBb0U7QUFDcEUsK0VBQThFO0FBRTlFLGdFQUF3QztBQUV4QyxTQUFTLGFBQWEsQ0FBQyxLQUFVO0lBQy9CLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztJQUUvQyxNQUFNLFdBQVcsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FDN0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUNoQyxDQUFDO0lBQ1gsTUFBTSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxJQUFJLENBQzdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FDNUIsQ0FBQztJQUVmLE9BQU8sQ0FDTCx1QkFBQywwQkFBYSxrQkFDWixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDckIsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLEdBQUcseUJBQVcsRUFBRSxHQUFHLHdCQUFXLEVBQUUsR0FBRyxnQ0FBYSxDQUFDLEVBQzNELFdBQVcsRUFBRSxXQUFXLElBQUkscUJBQVcsZ0JBRXRDLFFBQVEsSUFDSyxDQUNqQixDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9