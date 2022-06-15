import React, { useRef } from "react";
import styled from "styled-components";
import useOutsideClick from "../../../hooks/useOutsiteClick";
import useStore from "../../../store/store";
import ProvidersLogo from "../providers-logo";

const WalletbuttonModalItem = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fafafa;
  font-size: 14px;
  color: #212121;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;
const WalletbuttonModalTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 25px;
  margin-top: 15px;
`;
const WalletbuttonModalContainer = styled.div`
  overflow-y: auto;
  width: 250px;
  max-height: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  margin: 0px;
  border: none;
  border-radius: 5px;
  background-color: #fafafa;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }
`;

function WalletsModal() {
  const { setModalIsOpen, modalIsOpen, useWeb3React, activateInjected, connectors } = useStore();
  const { activate, chainId } = useWeb3React();
  const onSelect = () => setModalIsOpen(false);
  const activeInjected = async () => {
    activateInjected(activate, chainId);
    onSelect();
  };
  const activeConnector = async (connector: any) => {
    activate(connector);
    onSelect();
  };
  const modalContainer = useRef(null);
  useOutsideClick(modalContainer, () => {
    setModalIsOpen(false);
  });

  return modalIsOpen ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "1",
        left: 0,
        top: 0
      }}
      className="walletbutton-modal-root"
    >
      <WalletbuttonModalContainer ref={modalContainer} className="walletbutton-modal-container">
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <WalletbuttonModalTitle className="walletbutton-modal-title">
            Select a wallet
          </WalletbuttonModalTitle>
          <WalletbuttonModalItem className="walletbutton-modal-item" onClick={activeInjected}>
            Metamask
            <div style={{ width: "35px", height: "35px" }}>
              <ProvidersLogo provider="injected" />
            </div>
          </WalletbuttonModalItem>
          {connectors.map((connector: any) => (
            <WalletbuttonModalItem
              className="walletbutton-modal-item"
              key={connector.id}
              onClick={() => activeConnector(connector.connector)}
            >
              {connector.title}
              {connector.logo ? (
                connector.logo
              ) : (
                <div style={{ width: "35px", height: "35px" }}>
                  <ProvidersLogo provider={connector.id} />
                </div>
              )}
            </WalletbuttonModalItem>
          ))}
        </div>
      </WalletbuttonModalContainer>
    </div>
  ) : (
    <></>
  );
}

export default WalletsModal;
