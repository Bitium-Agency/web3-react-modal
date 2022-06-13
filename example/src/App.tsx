import React from 'react'
import logo from './logo.svg'
import './App.css'
import { WRMButton } from 'wallet-button'
import { useWeb3React } from '@web3-react/core'



function App() {
  const ExampleFC :React.FC = () => <button >Custom Component</button>;
  
  const { account, chainId, active } = useWeb3React()
  const WCConfigs = {
    rpc: {
      1: 'https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21',
    },
    qrcode: true,
  }
  
  return (
  
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <WRMButton
          onError={(error) => {
            alert(error)
          }}
          Render={<ExampleFC />}
        /><br/>
        <WRMButton
          onError={(error) => {
            alert(error)
          }}
        /><br/>
        <WRMButton
          onError={(error) => {
            alert(error)
          }}
          buttonText='CUSTOM TEXT'
          switchText='CUSTOM SWITCH TEXT'
          connectText='CUSTOM CONNECT TEXT'
        
        />
        {active ? (
          <>
            <div>Your waladdres is: {account}</div>
            <div>chain id: {chainId}</div>
          </>
        ) : (
          <div>No active wallet</div>
        )}
      </header>
    </div>
  )
}

export default App
