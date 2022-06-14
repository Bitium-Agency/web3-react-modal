import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useWeb3ReactModal, WRMButton } from 'wallet-button'
import { useWeb3React } from '@web3-react/core'



function App() {
  const ExampleFC :React.FC = () => <button >Custom Component</button>;
  
  const { account, chainId, active ,error} = useWeb3React()
  const {connect} = useWeb3ReactModal()
  const WCConfigs = {
    rpc: {
      1: 'https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21',
    },
    qrcode: true,
  }
  useEffect(() => {
    console.log('error',JSON.stringify(error))
  }, [error]);
  
  return (
  
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <WRMButton
          Render={<ExampleFC />}
        /><br/>
        <WRMButton
        /><br/>
        <WRMButton
          buttonText='CUSTOM TEXT'
          switchText='CUSTOM SWITCH TEXT'
          connectText='CUSTOM CONNECT TEXT'
        />
        <button
          onClick={() => {
            connect()
          }}
          >
            custom
          </button>
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
