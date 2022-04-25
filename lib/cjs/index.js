"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletButton = void 0;
var react_1 = __importDefault(require("react"));
var wallet_button_1 = __importDefault(require("./lib/components/wallet-button"));
var WalletButton = function (_a) {
    var useWeb3React = _a.useWeb3React, supportedChains = _a.supportedChains, onError = _a.onError, walletConnectConfigs = _a.walletConnectConfigs;
    return (react_1.default.createElement(wallet_button_1.default, { supportedChains: supportedChains, useWeb3React: useWeb3React, onError: onError, walletConnectConfigs: walletConnectConfigs }));
};
exports.WalletButton = WalletButton;
