import { SupportedChain } from "./chain";

export interface WalletconnectConfigs {
  qrcode: boolean;
  rpc: { [chainId: number]: string };
}
export interface WalletButtonProps {
  useWeb3React: any;
  supportedChains: SupportedChain[];
  onError: (error: any) => void;
  walletConnectConfigs?: WalletconnectConfigs;
  ButtonProps?: Object;
  Render?: JSX.Element;
  connectText?: string;
  switchText?: string;
  buttonText?: string;
}
