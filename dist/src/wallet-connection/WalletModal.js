import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function WalletModal(props) {
    const { walletRepo, isOpen, setOpen } = props;
    if (isOpen)
        return (_jsxs("div", Object.assign({ className: "modal" }, { children: [_jsx("div", Object.assign({ onClick: () => setOpen(false) }, { children: "X" })), walletRepo === null || walletRepo === void 0 ? void 0 : walletRepo.wallets.map((w) => {
                    return (_jsx("div", Object.assign({ onClick: () => w.connect() }, { children: w.walletName }), w.walletName));
                })] })));
    return _jsx("span", {});
}
export default WalletModal;
