"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchNetwork = exports.getConnectors = exports.init = exports.connectors = void 0;
var walletconnect_connector_1 = require("@web3-react/walletconnect-connector");
var injected_connector_1 = require("@web3-react/injected-connector");
var ethers_1 = require("ethers");
exports.connectors = {};
var init = function (supportedChains) { return __awaiter(void 0, void 0, void 0, function () {
    var injected, walletconnect;
    return __generator(this, function (_a) {
        if (Object.keys(exports.connectors).length === 0) {
            injected = new injected_connector_1.InjectedConnector({ supportedChainIds: supportedChains.map(function (c) { return c.chainId; }) });
            walletconnect = new walletconnect_connector_1.WalletConnectConnector({
                rpc: {
                    1: "https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21",
                },
                qrcode: true,
            });
            console.log('init wallet connect ', walletconnect);
            exports.connectors.injected = injected;
            exports.connectors.injected.id = 0;
            exports.connectors.walletconnect = walletconnect;
            exports.connectors.walletconnect.id = 1;
        }
        return [2 /*return*/];
    });
}); };
exports.init = init;
var getConnectors = function () {
    return Object.keys(exports.connectors).length > 0 ? exports.connectors : null;
};
exports.getConnectors = getConnectors;
var switchNetwork = function (chain) { return __awaiter(void 0, void 0, void 0, function () {
    var provider, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                provider = window.ethereum;
                console.log("provider");
                if (!(provider.networkVersion !== chain.chainId)) return [3 /*break*/, 6];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 6]);
                return [4 /*yield*/, provider.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: ethers_1.ethers.utils.hexValue(chain.chainId) }],
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 6];
            case 3:
                err_1 = _a.sent();
                if (!(err_1.code === 4902)) return [3 /*break*/, 5];
                return [4 /*yield*/, provider.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainName: chain.name,
                                chainId: ethers_1.ethers.utils.hexValue(chain.chainId),
                                nativeCurrency: {
                                    name: chain.nativeCurrency.name,
                                    decimals: chain.nativeCurrency.decimals,
                                    symbol: chain.nativeCurrency.symbol,
                                },
                                rpcUrls: [chain.rpcUrl],
                            },
                        ],
                    })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.switchNetwork = switchNetwork;
