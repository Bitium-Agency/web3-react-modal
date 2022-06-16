import React, { useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import useStore from "../../../store/store";
import { SupportedChain } from "../../../types/chain";
import { IConnector } from "../../../types/connectors";
import WalletsModal from "../wallets-modal";

interface WalletButtonProps {
  useWeb3React: any;
  supportedChains: SupportedChain[];
  connectors: IConnector[];
}
const Web3ReactModal = ({ useWeb3React, supportedChains, connectors }: WalletButtonProps) => {
  const {
    setIsInitialized,
    setUseWeb3React,
    isInitialized,
    setSupportedChains,
    activateInjected,
    addConnectors
  } = useStore();
  const { activate, chainId } = useWeb3React();

  useLayoutEffect(() => {
    setUseWeb3React(useWeb3React);
    setSupportedChains(supportedChains);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("walletIsConnected") === "true" && (window as any)?.ethereum) {
      activateInjected(activate, chainId);
    }
    addConnectors(connectors);
  }, []);

  return isInitialized ? createPortal(<WalletsModal />, document.body) : <></>;
};

export default Web3ReactModal;
