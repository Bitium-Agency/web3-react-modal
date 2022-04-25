/* eslint-disable react/require-default-props */
import React from 'react'
import WB from './lib/components/wallet-button'
import { supportedChain } from './types/chain'
import { walletconnectConfigs } from './types/walletconnect'

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
}: // eslint-disable-next-line no-undef
WalletButtonProps): JSX.Element {
  return (
    <WB
      supportedChains={supportedChains}
      useWeb3React={useWeb3React}
      onError={onError}
      walletConnectConfigs={walletConnectConfigs}
      // UnsupportedChainIdError={UnsupportedChainIdError}
    />
  )
}

// eslint-disable-next-line import/prefer-default-export
export { WalletButton }
