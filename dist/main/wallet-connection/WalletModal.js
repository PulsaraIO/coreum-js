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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0TW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2FsbGV0LWNvbm5lY3Rpb24vV2FsbGV0TW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLFNBQVMsV0FBVyxDQUFDLEtBQXVCO0lBQzFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUU5QyxJQUFJLE1BQU07UUFDUixPQUFPLENBQ0wsK0NBQUssU0FBUyxFQUFDLE9BQU8saUJBQ3BCLDhDQUFLLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUFTLEVBQzFDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQzdCLE9BQU8sQ0FDTCw4Q0FBd0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsZ0JBQy9DLENBQUMsQ0FBQyxVQUFVLEtBREwsQ0FBQyxDQUFDLFVBQVUsQ0FFaEIsQ0FDUCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxLQUNFLENBQ1AsQ0FBQztJQUVKLE9BQU8sa0NBQVEsQ0FBQztBQUNsQixDQUFDO0FBQ0Qsa0JBQWUsV0FBVyxDQUFDIn0=