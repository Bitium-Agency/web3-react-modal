import React from "react";
import WB from "./lib/components/wallet-button";
import { supportedChain } from "./types/chain";
interface WalletButtonProps {
  useWeb3React: any;
  supportedChains : supportedChain[];
  onError: (error: any) => void;
  walletConnectConfigs ?: walletconnectConfigs
}

const WalletButton = ({
  useWeb3React,
  supportedChains,
  onError,
  walletConnectConfigs
}: WalletButtonProps): JSX.Element => {
  return (
    <WB
    supportedChains={supportedChains}
      useWeb3React={useWeb3React}
      onError={onError}
      walletConnectConfigs={walletConnectConfigs}
      // UnsupportedChainIdError={UnsupportedChainIdError}
    />
  );
};

export { WalletButton };
