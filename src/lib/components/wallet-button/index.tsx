import { UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError,
} from '@web3-react/injected-connector'
import { URI_AVAILABLE } from '@web3-react/walletconnect-connector'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { supportedChain } from '../../../types/chain'
import { walletconnectConfigs } from '../../../types/walletconnect'
import { getConnectors, init, switchNetwork } from '../../../utils/storage'
import WalletsModal from '../wallets-modal'

interface WalletButtonProps {
  useWeb3React: any
  supportedChains: supportedChain[]
  // eslint-disable-next-line no-unused-vars
  onError: (error: any) => void
  walletConnectConfigs?: walletconnectConfigs
}
function WalletButton({
  useWeb3React,
  supportedChains,
  onError,
  walletConnectConfigs,
}: WalletButtonProps) {
  const {
    activate, account, chainId, active, error,
  } = useWeb3React()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentConnector, setCurrentConnector] = useState(-1)
  const isUserRejectedRequestError = error instanceof UserRejectedRequestError
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError
  const isNoEthereumProviderError = error instanceof NoEthereumProviderError
  const Walletbutton_button = styled.button`
    background: -moz-linear-gradient(
      90deg,
      rgba(31, 17, 206, 1) 0%,
      rgba(229, 43, 43, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(31, 17, 206, 1) 0%,
      rgba(229, 43, 43, 1) 100%
    );
    background: -o-linear-gradient(
      90deg,
      rgba(31, 17, 206, 1) 0%,
      rgba(229, 43, 43, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E52B2B', endColorstr='#1F11CE', GradientType=0 );
    background: -ms-linear-gradient(
      90deg,
      rgba(31, 17, 206, 1) 0%,
      rgba(229, 43, 43, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(31, 17, 206, 1) 0%,
      rgba(229, 43, 43, 1) 100%
    );
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.8rem 1rem;
    cursor: pointer;
    width: 150px;
  `

  const handleConnectClick = async () => {
    if (isUnsupportedChainIdError && currentConnector === 0) {
      const res = await switchNetwork(supportedChains[0])
      return res
    }
    setModalIsOpen(true)
  }
  const connectButtonText = () => {
    if (isUnsupportedChainIdError) {
      return 'Switch Network'
    }
    if (active) {
      return `${account.substring(0, 5)}...${account.substring(
        account.length - 5,
      )}`
    }
    return 'Connect Wallet'
  }
  useEffect(() => {
    if (
      isUnsupportedChainIdError
      || error?.name === 'UnsupportedChainIdError'
    ) {
      onError('Unsupported chain id')
    }
    if (isUserRejectedRequestError) {
      onError('User rejected request')
    }

    if (isNoEthereumProviderError) {
      onError('No ethereum provider')
    }
  }, [error])

  useEffect(() => {
    init(supportedChains, walletConnectConfigs)
    const logURI = (uri: any) => {
      console.log(uri)
    }
    if (getConnectors()?.walletconnect) {
      getConnectors()?.walletconnect.on(URI_AVAILABLE, logURI)
    }

    return () => {
      if (getConnectors()?.walletconnect) {
        getConnectors()?.walletconnect?.off(URI_AVAILABLE, logURI)
      }
    }
  }, [])

  return (
    <>
      <WalletsModal
        showModal={modalIsOpen}
        setShowModal={setModalIsOpen}
        onSelect={() => setModalIsOpen(false)}
        activate={activate}
        setCurrentConnector={setCurrentConnector}
        supportedChains={supportedChains}
        chainId={chainId}
      />
      <Walletbutton_button
        onClick={() => {
          handleConnectClick()
        }}
        disabled={active}
      >
        {connectButtonText()}
      </Walletbutton_button>
    </>
  )
}

export default WalletButton
