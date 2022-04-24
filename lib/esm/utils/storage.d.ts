import { supportedChain } from "../types/chain";
export declare const connectors: any;
export declare const init: (supportedChains: supportedChain[]) => Promise<void>;
export declare const getConnectors: () => any;
export declare const switchNetwork: (chain: supportedChain) => Promise<void>;
