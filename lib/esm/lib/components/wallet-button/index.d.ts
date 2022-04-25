/// <reference types="react" />
import { supportedChain } from "../../../types/chain";
interface WalletButtonProps {
    useWeb3React: any;
    supportedChains: supportedChain[];
    onError: (error: any) => void;
    walletConnectConfigs?: walletconnectConfigs;
}
declare function WalletButton({ useWeb3React, supportedChains, onError, walletConnectConfigs }: WalletButtonProps): JSX.Element;
export default WalletButton;
