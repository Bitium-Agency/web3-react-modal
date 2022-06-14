/* eslint-disable react-hooks/rules-of-hooks */
import { UnsupportedChainIdError } from "@web3-react/core";
import React from "react";
import styled from "styled-components";
import useStore from "../../../store/store";
import { WalletButtonProps } from "../../../types/walletconnect";

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
  ButtonProps,
  Render,
  connectText,
  switchText,
  buttonText
}: WalletButtonProps) {
  const { useWeb3React, connect } = useStore();
  const { account, active, error } = useWeb3React();
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;

  const handleConnectClick = async () => {
    connect();
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

  return (
    <>
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
