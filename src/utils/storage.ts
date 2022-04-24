import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { supportedChain } from "../types/chain";
export const connectors: any = {};
export const init = async (supportedChains: supportedChain[]) => {
  if (Object.keys(connectors).length === 0) {
    const injected = new InjectedConnector({ supportedChainIds: supportedChains.map(c => c.chainId) });
    const walletconnect = new WalletConnectConnector({
      rpc: {
        1: "https://mainnet.infura.io/v3/70d9c70a15ad4cdd91f57979fd0d9e21",
      },
      qrcode: true,
    } as any);
    console.log('init wallet connect ', walletconnect)
    connectors.injected = injected;
    connectors.injected.id = 0;
    connectors.walletconnect = walletconnect;
    connectors.walletconnect.id = 1
  }
};
export const getConnectors = () => {
  return Object.keys(connectors).length > 0 ? connectors : null;
};
export const switchNetwork = async (chain: supportedChain) => {
  const provider = (window as any).ethereum;
  console.log("provider");
  if (provider.networkVersion !== chain.chainId) {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ethers.utils.hexValue(chain.chainId) }],
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
                symbol: chain.nativeCurrency.symbol,
              },
              rpcUrls: [chain.rpcUrl],
            },
          ],
        });
      }
    }
  }
};
