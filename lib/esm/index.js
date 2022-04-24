import React from "react";
import WB from "./lib/components/wallet-button";
var WalletButton = function (_a) {
    var useWeb3React = _a.useWeb3React, supportedChains = _a.supportedChains;
    return (React.createElement(WB, { supportedChains: supportedChains, useWeb3React: useWeb3React, onError: function (error) {
            console.log('ERROR', error);
            alert(error);
        } }));
};
export { WalletButton };
