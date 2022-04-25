/// <reference types="react" />
import { supportedChain } from "./types/chain";
interface WalletButtonProps {
    useWeb3React: any;
    supportedChains: supportedChain[];
    onError: (error: any) => void;
    walletConnectConfigs?: walletconnectConfigs;
}
declare const WalletButton: ({ useWeb3React, supportedChains, onError, walletConnectConfigs }: WalletButtonProps) => JSX.Element;
export { WalletButton };
