import React from "react";
import WB from "./lib/components/wallet-button";
import { WalletButtonProps } from "./types/walletconnect";

function WalletButton({
  useWeb3React,
  supportedChains,
  walletConnectConfigs,
  onError,
  ButtonProps
}: WalletButtonProps): JSX.Element {
  return (
    <WB
      supportedChains={supportedChains}
      useWeb3React={useWeb3React}
      onError={onError}
      walletConnectConfigs={walletConnectConfigs}
      ButtonProps={ButtonProps}
      // UnsupportedChainIdError={UnsupportedChainIdError}
    />
  );
}

// eslint-disable-next-line import/prefer-default-export
export { WalletButton };
