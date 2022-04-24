import React from "react";
import WB from "./lib/components/wallet-button";

const WalletButton = ({
  useWeb3React,
  supportedChains,
  
}: any): JSX.Element => {
  return (
    <WB
    supportedChains={supportedChains}
      useWeb3React={useWeb3React}
      onError={(error: any) => {
        console.log('ERROR',error)
        alert(error);
      }}
      // UnsupportedChainIdError={UnsupportedChainIdError}
    />
  );
};

export { WalletButton };
