import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WalletButton } from "wallet-button";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <WalletButton
          useWeb3React={useWeb3React}
          UnsupportedChainIdError={UnsupportedChainIdError}
          supportedChains={[
            { chainId: 1, name: "Mainnet"} 
          ]}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
