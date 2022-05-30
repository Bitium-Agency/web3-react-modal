import React from "react";
import WB from "./lib/components/wallet-button";
import { WalletButtonProps } from "./types/walletconnect";

function WalletButton({
  useWeb3React,
  supportedChains,
  walletConnectConfigs,
  onError,
  ButtonProps,
  Render,
  connectText,
  switchText,
  buttonText
}: WalletButtonProps): JSX.Element {
  return (
    <WB
      supportedChains={supportedChains}
      useWeb3React={useWeb3React}
      onError={onError}
      walletConnectConfigs={walletConnectConfigs}
      ButtonProps={ButtonProps}
      Render={Render}
      connectText={connectText}
      switchText={switchText}
      buttonText={buttonText}
      // UnsupportedChainIdError={UnsupportedChainIdError}
    />
  );
}

// eslint-disable-next-line import/prefer-default-export
export { WalletButton };
