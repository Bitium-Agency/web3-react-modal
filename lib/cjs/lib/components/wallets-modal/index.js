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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var storage_1 = require("../../../utils/storage");
var WalletsModal = function (_a) {
    var showModal = _a.showModal, activate = _a.activate, onSelect = _a.onSelect, setCurrentConnector = _a.setCurrentConnector, supportedChains = _a.supportedChains, chainId = _a.chainId;
    var activeInjected = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!supportedChains.find(function (c) { return c.chainId == chainId; })) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, storage_1.switchNetwork)(supportedChains[0])];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    activate((0, storage_1.getConnectors)().injected);
                    setCurrentConnector(0);
                    onSelect();
                    return [2 /*return*/];
            }
        });
    }); };
    var activeWalletconnect = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            activate((0, storage_1.getConnectors)().walletconnect);
            setCurrentConnector(1);
            onSelect();
            return [2 /*return*/];
        });
    }); };
    return showModal ? (react_1.default.createElement("div", { style: {
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "1",
            left: 0,
            top: 0,
        }, className: "walletbutton-root" },
        react_1.default.createElement("div", { style: {
                width: "200px",
                height: "fit-content",
                backgroundColor: "white",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            }, className: "walletbutton-container" },
            "WalletsModal",
            react_1.default.createElement("button", { onClick: activeInjected }, "metamask"),
            react_1.default.createElement("button", { onClick: activeWalletconnect }, "walletconnect")))) : (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.default = WalletsModal;
