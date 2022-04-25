import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WalletButton } from "wallet-button";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

function App() {
  const {account,chainId,active} = useWeb3React()
  const WCConfigs = {
    rpc: {
      1: "https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21",
    },
    qrcode: true,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <WalletButton
          useWeb3React={useWeb3React}
          walletConnectConfigs={WCConfigs}
          onError={(error) => {
            alert(error);
          }}
          supportedChains={[
            { chainId: 1, name: "Mainnet",
              rpcUrl: "https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21",nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
              }
             },
            { chainId: 3, name: "Ropsten",
              rpcUrl: "https://ropsten.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21",nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
              }
            }
          ]}
        />
        {active ? (<><div>Your waladdres is: {account}</div>
        <div>chain id: {chainId}</div></>) : (<div>No active wallet</div>)}
        
      </header>
    </div>
  );
}

export default App;
