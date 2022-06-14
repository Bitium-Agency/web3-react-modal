import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { Web3ReactModal } from "wallet-button"
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const getLibrary = (provider: any) => {
  const lib = new Web3Provider(provider);
  return lib;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
      <Web3ReactModal 
      useWeb3React={useWeb3React}
      supportedChains={[{
        chainId: 1,
      }]}
      connectors={[
        {
          title: "Wallet Connect",
          id: 'walletconnect',
          connector: WalletConnectConnector,
          options: {
            rpc: {
              1: 'https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21',
            },
            qrcode: true,
          }
        },
        {
          title: "Ledger",
          id: 'ledger',
          connector: WalletConnectConnector,
          options: {
            rpc: {
              1: 'https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21',
            },
            qrcode: true,
          }
        }
      ]}
      />
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
