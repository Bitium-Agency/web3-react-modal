export interface SupportedChain {
  chainId: number;
  name: string;
  rpcUrl: string;
  nativeCurrency: {
    name: string;
    decimals: number;
    symbol: string;
  };
}
