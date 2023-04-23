"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_lite_1 = require("@cosmos-kit/react-lite");
const chain_registry_1 = require("chain-registry");
const keplr_extension_1 = require("@cosmos-kit/keplr-extension");
const leap_extension_1 = require("@cosmos-kit/leap-extension");
const cosmostation_extension_1 = require("@cosmos-kit/cosmostation-extension");
const WalletModal_1 = require("./WalletModal");
function WalletConnect(props) {
    const { children, customModal = null } = props;
    const coreumChain = chain_registry_1.chains.find((chain) => chain.chain_name === "coreum");
    const coreumAsset = chain_registry_1.assets.find((asset) => asset.chain_name === "coreum");
    return ((0, jsx_runtime_1.jsx)(react_lite_1.ChainProvider, Object.assign({ chains: [coreumChain], assetLists: [coreumAsset], wallets: [...keplr_extension_1.wallets, ...leap_extension_1.wallets, ...cosmostation_extension_1.wallets], walletModal: customModal || WalletModal_1.default }, { children: children })));
}
exports.default = WalletConnect;
