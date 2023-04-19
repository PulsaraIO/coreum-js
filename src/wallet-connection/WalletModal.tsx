import { WalletModalProps } from "@cosmos-kit/core";
import React from "react";

export function WalletModal(props: WalletModalProps) {
  const { walletRepo, isOpen, setOpen } = props;

  if (isOpen)
    return (
      <div className="modal">
        <div onClick={() => setOpen(false)}>X</div>
        {walletRepo?.wallets.map((w) => {
          return (
            <div key={w.walletName} onClick={() => w.connect()}>
              {w.walletName}
            </div>
          );
        })}
      </div>
    );

  return <span />;
}
