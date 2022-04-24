import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
export declare const switchNetwork: (
  chainId: number,
  provider: any | undefined
) => Promise<void>;
export declare const connectors: {
  injected: any;
  walletconnect: WalletConnectConnector;
};
