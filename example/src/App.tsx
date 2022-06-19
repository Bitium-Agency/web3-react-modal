import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useWeb3React } from '@web3-react/core'
import { useWeb3ReactModal } from '@web3-react/modal';



function App() {
  
  const { account, chainId, active ,error} = useWeb3React()
  const {connect} = useWeb3ReactModal()
  
  useEffect(() => {
    console.log('error',JSON.stringify(error))
  }, [error]);
  
  return (
  
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
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
