import { UnsupportedChainIdError } from "@web3-react/core";
import { NoEthereumProviderError, UserRejectedRequestError } from "@web3-react/injected-connector";
import { URI_AVAILABLE } from "@web3-react/walletconnect-connector";
import React, { useEffect, useState } from "react";
import { supportedChain } from "../../../types/chain";
import { getConnectors, init, switchNetwork } from "../../../utils/storage";
import WalletsModal from "../wallets-modal";

interface WalletButtonProps {
  useWeb3React: any;
  supportedChains : supportedChain[];
  onError: (error: any) => void;
}
function WalletButton({useWeb3React,supportedChains,onError}: WalletButtonProps) {
  const { activate, account, chainId, active, error } = useWeb3React();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentConnector, setCurrentConnector] = useState(-1);
  const isUserRejectedRequestError = error instanceof UserRejectedRequestError
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError
  const isNoEthereumProviderError = error instanceof NoEthereumProviderError

 
  const handleConnectClick = async () => {
    if (isUnsupportedChainIdError && currentConnector===0) {
       return await switchNetwork(supportedChains[0]);
    }
    setModalIsOpen(true);
  };
  const connectButtonText = () => {
    if (isUnsupportedChainIdError) {
      return "Switch Network";
    }
    if (active) {
      return "Connected";
    }
    return "Connect";
  };
  useEffect(() => {
    if (isUnsupportedChainIdError || error?.name === 'UnsupportedChainIdError') {
        onError("Unsupported chain id");
    }
    if (isUserRejectedRequestError) {
      onError("User rejected request");
    }
    
  if(isNoEthereumProviderError) {
    onError("No ethereum provider");
  }
}, [error])
  
  useEffect(() => {
    init(supportedChains);
    const logURI = (uri: any) => {
      console.log("WalletConnect URI", uri);
    };
    console.log('connectors' , getConnectors())
    getConnectors()?.walletconnect && getConnectors()?.walletconnect.on(URI_AVAILABLE, logURI);

    return () => {
      getConnectors()?.walletconnect?.off(URI_AVAILABLE, logURI);
    };
  }, []);


  return (
    <div className="App">
      <WalletsModal
        showModal={modalIsOpen}
        onSelect={() => setModalIsOpen(false)}
        activate={activate}
        setCurrentConnector={setCurrentConnector}
        supportedChains={supportedChains}
        chainId={chainId}
      />
      <button
        onClick={() => {
          handleConnectClick();
        }}
        disabled={active}
      >
        {connectButtonText()}
      </button>
      <div>{account ? account : "disconnect"} </div>
      <div>{chainId ? chainId : "INVALID"}</div>
      <div> {isUnsupportedChainIdError ? "salam" : "bye"}</div>
    </div>
  );
}

export default WalletButton;
