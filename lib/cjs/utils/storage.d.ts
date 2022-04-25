import { supportedChain } from '../types/chain';
import { walletconnectConfigs } from '../types/walletconnect';
export declare const connectors: any;
export declare const init: (supportedChains: supportedChain[], walletConnectConfigs?: walletconnectConfigs | undefined) => Promise<void>;
export declare const getConnectors: () => any;
export declare const switchNetwork: (chain: supportedChain) => Promise<void>;
