var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { UnsupportedChainIdError } from '@web3-react/core';
import { NoEthereumProviderError, UserRejectedRequestError, } from '@web3-react/injected-connector';
import { URI_AVAILABLE } from '@web3-react/walletconnect-connector';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getConnectors, init, switchNetwork } from '../../../utils/storage';
import WalletsModal from '../wallets-modal';
function WalletButton(_a) {
    var _this = this;
    var useWeb3React = _a.useWeb3React, supportedChains = _a.supportedChains, onError = _a.onError, walletConnectConfigs = _a.walletConnectConfigs;
    var _b = useWeb3React(), activate = _b.activate, account = _b.account, chainId = _b.chainId, active = _b.active, error = _b.error;
    var _c = useState(false), modalIsOpen = _c[0], setModalIsOpen = _c[1];
    var _d = useState(-1), currentConnector = _d[0], setCurrentConnector = _d[1];
    var isUserRejectedRequestError = error instanceof UserRejectedRequestError;
    var isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;
    var isNoEthereumProviderError = error instanceof NoEthereumProviderError;
    var Walletbutton_button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: -moz-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    background: -webkit-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    background: -o-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E52B2B', endColorstr='#1F11CE', GradientType=0 );\n    background: -ms-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    background: linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    border: none;\n    border-radius: 5px;\n    color: white;\n    font-size: 0.85rem;\n    font-weight: 600;\n    padding: 0.8rem 1rem;\n    cursor: pointer;\n    width: 150px;\n  "], ["\n    background: -moz-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    background: -webkit-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    background: -o-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E52B2B', endColorstr='#1F11CE', GradientType=0 );\n    background: -ms-linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    background: linear-gradient(\n      90deg,\n      rgba(31, 17, 206, 1) 0%,\n      rgba(229, 43, 43, 1) 100%\n    );\n    border: none;\n    border-radius: 5px;\n    color: white;\n    font-size: 0.85rem;\n    font-weight: 600;\n    padding: 0.8rem 1rem;\n    cursor: pointer;\n    width: 150px;\n  "])));
    var handleConnectClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(isUnsupportedChainIdError && currentConnector === 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, switchNetwork(supportedChains[0])];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    setModalIsOpen(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var connectButtonText = function () {
        if (isUnsupportedChainIdError) {
            return 'Switch Network';
        }
        if (active) {
            return "".concat(account.substring(0, 5), "...").concat(account.substring(account.length - 5));
        }
        return 'Connect Wallet';
    };
    useEffect(function () {
        if (isUnsupportedChainIdError
            || (error === null || error === void 0 ? void 0 : error.name) === 'UnsupportedChainIdError') {
            onError('Unsupported chain id');
        }
        if (isUserRejectedRequestError) {
            onError('User rejected request');
        }
        if (isNoEthereumProviderError) {
            onError('No ethereum provider');
        }
    }, [error]);
    useEffect(function () {
        var _a, _b;
        init(supportedChains, walletConnectConfigs);
        var logURI = function (uri) {
            console.log(uri);
        };
        if ((_a = getConnectors()) === null || _a === void 0 ? void 0 : _a.walletconnect) {
            (_b = getConnectors()) === null || _b === void 0 ? void 0 : _b.walletconnect.on(URI_AVAILABLE, logURI);
        }
        return function () {
            var _a, _b, _c;
            if ((_a = getConnectors()) === null || _a === void 0 ? void 0 : _a.walletconnect) {
                (_c = (_b = getConnectors()) === null || _b === void 0 ? void 0 : _b.walletconnect) === null || _c === void 0 ? void 0 : _c.off(URI_AVAILABLE, logURI);
            }
        };
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(WalletsModal, { showModal: modalIsOpen, setShowModal: setModalIsOpen, onSelect: function () { return setModalIsOpen(false); }, activate: activate, setCurrentConnector: setCurrentConnector, supportedChains: supportedChains, chainId: chainId }),
        React.createElement(Walletbutton_button, { onClick: function () {
                handleConnectClick();
            }, disabled: active }, connectButtonText())));
}
export default WalletButton;
var templateObject_1;
