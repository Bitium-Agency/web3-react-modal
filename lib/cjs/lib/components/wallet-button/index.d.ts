/// <reference types="react" />
import { supportedChain } from "../../../types/chain";
interface WalletButtonProps {
    useWeb3React: any;
    supportedChains: supportedChain[];
    onError: (error: any) => void;
}
declare function WalletButton({ useWeb3React, supportedChains, onError }: WalletButtonProps): JSX.Element;
export default WalletButton;
