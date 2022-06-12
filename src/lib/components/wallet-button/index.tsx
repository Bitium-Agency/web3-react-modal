/* eslint-disable react-hooks/rules-of-hooks */
import { UnsupportedChainIdError } from "@web3-react/core";
import { NoEthereumProviderError, UserRejectedRequestError } from "@web3-react/injected-connector";
import { URI_AVAILABLE } from "@web3-react/walletconnect-connector";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useAccountListener from "../../../hooks/useAccountListener";
import { WalletButtonProps } from "../../../types/walletconnect";
import { getConnectors, init, switchNetwork } from "../../../utils/storage";
import Portal from "../portal/portal";
import WalletsModal from "../wallets-modal";

const WalletbuttonButton = styled.button`
  background: -moz-linear-gradient(90deg, rgba(31, 17, 206, 1) 0%, rgba(229, 43, 43, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(31, 17, 206, 1) 0%, rgba(229, 43, 43, 1) 100%);
  background: -o-linear-gradient(90deg, rgba(31, 17, 206, 1) 0%, rgba(229, 43, 43, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E52B2B', endColorstr='#1F11CE', GradientType=0 );
  background: -ms-linear-gradient(90deg, rgba(31, 17, 206, 1) 0%, rgba(229, 43, 43, 1) 100%);
  background: linear-gradient(90deg, rgba(31, 17, 206, 1) 0%, rgba(229, 43, 43, 1) 100%);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  cursor: pointer;
  width: 150px;
`;

function WalletButton({
  useWeb3React,
  supportedChains,
  onError,
  walletConnectConfigs,
  ButtonProps,
  Render,
  connectText,
  switchText,
  buttonText
}: WalletButtonProps) {
  const { activate, account, chainId, active, error } = useWeb3React();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentConnector, setCurrentConnector] = useState(-1);
  const isUserRejectedRequestError = error instanceof UserRejectedRequestError;
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;
  const isNoEthereumProviderError = error instanceof NoEthereumProviderError;

  const handleConnectClick = async () => {
    if (isUnsupportedChainIdError && currentConnector === 0) {
      const res = await switchNetwork(supportedChains[0]);
      return res;
    }
    setModalIsOpen(true);
  };
  const connectButtonText = () => {
    if (isUnsupportedChainIdError) {
      return switchText || "Switch Network";
    }
    if (active) {
      return connectText || `${account.substring(0, 5)}...${account.substring(account.length - 5)}`;
    }
    return buttonText || "Connect Wallet";
  };
  useEffect(() => {
    if (isUnsupportedChainIdError || error?.name === "UnsupportedChainIdError") {
      onError("Unsupported chain id");
    }
    if (isUserRejectedRequestError) {
      onError("User rejected request");
    }

    if (isNoEthereumProviderError || error?.name === "NoEthereumProviderError") {
      onError("No ethereum provider");
    }
  }, [error]);

  useEffect(() => {
    init(supportedChains, walletConnectConfigs);
    const logURI = (uri: any) => {
      console.log(uri);
    };
    if (getConnectors()?.walletconnect) {
      getConnectors()?.walletconnect.on(URI_AVAILABLE, logURI);
    }
    if (localStorage.getItem("walletIsConnected") === "true" && (window as any)?.ethereum) {
      activate(getConnectors()?.injected);
      setCurrentConnector(0);
      useAccountListener((window as any)?.ethereum, (accounts) => {
        console.log(accounts);
        if (accounts.length === 0) {
          setCurrentConnector(-1);
          localStorage.setItem("walletIsConnected", "false");
        }
      });
    }

    return () => {
      if (getConnectors()?.walletconnect) {
        getConnectors()?.walletconnect?.off(URI_AVAILABLE, logURI);
      }
    };
  }, []);

  return (
    <>
      <Portal>
        <WalletsModal
          showModal={modalIsOpen}
          setShowModal={setModalIsOpen}
          onSelect={() => setModalIsOpen(false)}
          activate={activate}
          setCurrentConnector={setCurrentConnector}
          supportedChains={supportedChains}
          chainId={chainId}
        />
      </Portal>
      {Render ? (
        <div
          onClick={() => {
            if (!active) {
              handleConnectClick();
            }
          }}
        >
          {Render}
        </div>
      ) : (
        <WalletbuttonButton
          onClick={() => {
            if (!active) {
              handleConnectClick();
            }
          }}
          disabled={active}
          {...ButtonProps}
        >
          {connectButtonText()}
        </WalletbuttonButton>
      )}
    </>
  );
}

export default WalletButton;
