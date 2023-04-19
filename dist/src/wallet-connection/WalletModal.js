import React from "react";
export function WalletModal(props) {
    const { walletRepo, isOpen, setOpen } = props;
    if (isOpen)
        return (React.createElement("div", { className: "modal" },
            React.createElement("div", { onClick: () => setOpen(false) }, "X"), walletRepo === null || walletRepo === void 0 ? void 0 :
            walletRepo.wallets.map((w) => {
                return (React.createElement("div", { key: w.walletName, onClick: () => w.connect() }, w.walletName));
            })));
    return React.createElement("span", null);
}
