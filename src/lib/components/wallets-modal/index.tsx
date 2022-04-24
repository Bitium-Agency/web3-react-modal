import React from "react";
import { supportedChain } from "../../../types/chain";
import { getConnectors, switchNetwork } from "../../../utils/storage";

interface WalletModalProps {
  showModal: boolean;
  onSelect: () => void;
  activate: (connector:any) => void;
  supportedChains: supportedChain[];
  chainId: number;
  setCurrentConnector: (connector: number) => void;
}

const WalletsModal = ({
  showModal,
  activate,
  onSelect,
  setCurrentConnector,
  supportedChains,
  chainId,
}: WalletModalProps) => {
  const activeInjected = async () => {
    if (!supportedChains.find(c => c.chainId==chainId)) {
      await switchNetwork(supportedChains[0]);
    }

    activate(getConnectors().injected);
    setCurrentConnector(0);
    onSelect();
  };
  const activeWalletconnect = async () => {
    activate(getConnectors().walletconnect);
    setCurrentConnector(1);
    onSelect();
  };

  return showModal ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "1",
        left: 0,
        top: 0,
      }}
      className="walletbutton-root"
    >
      <div
        style={{
          width: "200px",
          height: "fit-content",
          backgroundColor: "white",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        }}
        className="walletbutton-container"
      >
        WalletsModal
        <button onClick={activeInjected}>metamask</button>
        <button onClick={activeWalletconnect}>walletconnect</button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default WalletsModal;
