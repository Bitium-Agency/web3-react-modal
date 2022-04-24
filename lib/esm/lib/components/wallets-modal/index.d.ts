/// <reference types="react" />
import { supportedChain } from "../../../types/chain";
interface WalletModalProps {
    showModal: boolean;
    onSelect: () => void;
    activate: (connector: any) => void;
    supportedChains: supportedChain[];
    chainId: number;
    setCurrentConnector: (connector: number) => void;
}
declare const WalletsModal: ({ showModal, activate, onSelect, setCurrentConnector, supportedChains, chainId, }: WalletModalProps) => JSX.Element;
export default WalletsModal;
