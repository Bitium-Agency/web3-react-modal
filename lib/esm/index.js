/* eslint-disable react/require-default-props */
import React from 'react';
import WB from './lib/components/wallet-button';
function WalletButton(_a) {
    var useWeb3React = _a.useWeb3React, supportedChains = _a.supportedChains, onError = _a.onError, walletConnectConfigs = _a.walletConnectConfigs;
    return (React.createElement(WB, { supportedChains: supportedChains, useWeb3React: useWeb3React, onError: onError, walletConnectConfigs: walletConnectConfigs }));
}
// eslint-disable-next-line import/prefer-default-export
export { WalletButton };
