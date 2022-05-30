import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { SupportedChain } from "../types/chain";
import { WalletconnectConfigs } from "../types/walletconnect";

export const connectors: any = {};
export const init = async (
  supportedChains: SupportedChain[],
  walletConnectConfigs?: WalletconnectConfigs
) => {
  if (Object.keys(connectors).length === 0) {
    const injected = new InjectedConnector({
      supportedChainIds: supportedChains.map((c) => c.chainId)
    });
    const walletconnect = walletConnectConfigs && new WalletConnectConnector(walletConnectConfigs);
    connectors.injected = injected;
    connectors.injected.id = 0;
    if (walletconnect) {
      connectors.walletconnect = walletconnect;
      connectors.walletconnect.id = 1;
    }
  }
};
export const getConnectors = () => (Object.keys(connectors).length > 0 ? connectors : null);
export const switchNetwork = async (chain: SupportedChain) => {
  const provider = (window as any).ethereum;
  if (provider?.networkVersion !== chain.chainId) {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ethers.utils.hexValue(chain.chainId) }]
      });
    } catch (err: any) {
      if (err.code === 4902) {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: chain.name,
              chainId: ethers.utils.hexValue(chain.chainId),
              nativeCurrency: {
                name: chain.nativeCurrency.name,
                decimals: chain.nativeCurrency.decimals,
                symbol: chain.nativeCurrency.symbol
              },
              rpcUrls: [chain.rpcUrl]
            }
          ]
        });
      }
    }
  }
};
