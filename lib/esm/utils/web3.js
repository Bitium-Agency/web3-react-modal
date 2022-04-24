var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
var injected = new InjectedConnector({ supportedChainIds: [1] });
var walletconnect = new WalletConnectConnector({
    rpc: { 1: "https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21" },
    qrcode: true,
});
export var connectors = {
    injected: __assign(__assign({}, injected), { id: 0 }),
    walletconnect: __assign(__assign({}, walletconnect), { id: 1 }),
};
