import { InjectedConnector } from "@web3-react/injected-connector";
import create from "zustand";
import { SupportedChain } from "../types/chain";
import { IConnector } from "../types/connectors";
interface IuseStore {
  isInitialized: boolean;
  modalIsOpen: boolean;
  useWeb3React: any;
  supportedChains: SupportedChain[];
  connectors: IConnector[];
  setModalIsOpen: (modalIsOpen: boolean) => void;
  setUseWeb3React: (useWeb3React: any) => void;
  setIsInitialized: (isInitialized: boolean) => void;
  setSupportedChains: (supportedChains: SupportedChain[]) => void;
  connect: () => void;
  injectAccountListener: () => void;
  activateInjected: (activate: any, userChaneId: string) => void;
  switchNetwork: (chain: SupportedChain) => void;
  addConnectors: (connector: IConnector[]) => void;
}

const useStore = create<IuseStore>((set, get) => ({
  isInitialized: false,
  modalIsOpen: false,
  useWeb3React: null,
  supportedChains: [],
  connectors: [],

  addConnectors: (connectors: IConnector[]) => {
    const tmpConnectors: any = [];
    connectors.forEach((item) => {
      const connector = new item.connector(item.options);
      tmpConnectors.push({
        title: item.title,
        logo: item.logo,
        id: item.id,
        connector: connector
      });
    });

    set(() => ({ connectors: [...tmpConnectors] }));
  },
  setSupportedChains: (supportedChains: SupportedChain[]) => {
    set(() => ({ supportedChains }));
  },
  setUseWeb3React: (useWeb3React: any) => set(() => ({ useWeb3React })),
  setModalIsOpen: (modalIsOpen: boolean) => set(() => ({ modalIsOpen })),
  setIsInitialized: (isInitialized: boolean) => set(() => ({ isInitialized })),
  injectAccountListener: () => {
    (window as any)?.ethereum.on("accountsChanged", (accounts: any) => {
      if (accounts.length > 0) {
        localStorage.setItem("walletIsConnected", "true");
      } else {
        localStorage.setItem("walletIsConnected", "false");
      }
    });
  },
  connect: () => {
    set(() => ({ modalIsOpen: true }));
  },
  activateInjected: async (activate: any, userChaneId: string) => {
    if (
      (window as any)?.ethereum &&
      !get().supportedChains.find((c) => +c.chainId === +userChaneId)
    ) {
      await get().switchNetwork(get().supportedChains[0]);
    }
    const injected = new InjectedConnector({
      supportedChainIds: get().supportedChains.map((c) => c.chainId)
    });
    activate(injected);
    get().injectAccountListener();
  },
  switchNetwork: async (chain: SupportedChain) => {
    const provider = (window as any).ethereum;
    const toHex = (d: any) => {
      const res = "0x" + Number(d).toString(16).toUpperCase();
      console.log(res);
      return res;
    };
    if (provider?.networkVersion !== chain.chainId) {
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: toHex(chain.chainId) }]
        });
      } catch (err: any) {
        if (err.code === 4902) {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: chain.name,
                chainId: toHex(chain.chainId),
                nativeCurrency: {
                  name: chain?.nativeCurrency?.name,
                  decimals: chain?.nativeCurrency?.decimals,
                  symbol: chain?.nativeCurrency?.symbol
                },
                rpcUrls: [chain.rpcUrl]
              }
            ]
          });
        }
      }
    }
  }
}));
export default useStore;
