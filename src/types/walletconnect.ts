export interface WalletconnectConfigs {
  qrcode: boolean;
  rpc: { [chainId: number]: string };
}
export interface WalletButtonProps {
  ButtonProps?: Object;
  Render?: JSX.Element;
  connectText?: string;
  switchText?: string;
  buttonText?: string;
}
