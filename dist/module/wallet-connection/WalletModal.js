import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function WalletModal(props) {
    const { walletRepo, isOpen, setOpen } = props;
    if (isOpen)
        return (_jsxs("div", { className: "modal", children: [_jsx("div", { onClick: () => setOpen(false), children: "X" }), walletRepo?.wallets.map((w) => {
                    return (_jsx("div", { onClick: () => w.connect(), children: w.walletName }, w.walletName));
                })] }));
    return _jsx("span", {});
}
export default WalletModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0TW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2FsbGV0LWNvbm5lY3Rpb24vV2FsbGV0TW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxTQUFTLFdBQVcsQ0FBQyxLQUF1QjtJQUMxQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFFOUMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxDQUNMLGVBQUssU0FBUyxFQUFDLE9BQU8sYUFDcEIsY0FBSyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBUyxFQUMxQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUM3QixPQUFPLENBQ0wsY0FBd0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsWUFDL0MsQ0FBQyxDQUFDLFVBQVUsSUFETCxDQUFDLENBQUMsVUFBVSxDQUVoQixDQUNQLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLElBQ0UsQ0FDUCxDQUFDO0lBRUosT0FBTyxnQkFBUSxDQUFDO0FBQ2xCLENBQUM7QUFDRCxlQUFlLFdBQVcsQ0FBQyJ9