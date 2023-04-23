"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function WalletModal(props) {
    const { walletRepo, isOpen, setOpen } = props;
    if (isOpen)
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "modal" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => setOpen(false) }, { children: "X" })), walletRepo === null || walletRepo === void 0 ? void 0 : walletRepo.wallets.map((w) => {
                    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => w.connect() }, { children: w.walletName }), w.walletName));
                })] })));
    return (0, jsx_runtime_1.jsx)("span", {});
}
exports.default = WalletModal;
