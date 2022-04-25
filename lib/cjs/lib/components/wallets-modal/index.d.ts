/// <reference types="react" />
import { supportedChain } from '../../../types/chain';
interface WalletModalProps {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    onSelect: () => void;
    activate: (connector: any) => void;
    supportedChains: supportedChain[];
    chainId: number;
    setCurrentConnector: (connector: number) => void;
}
declare function WalletsModal({ showModal, setShowModal, activate, onSelect, setCurrentConnector, supportedChains, chainId, }: WalletModalProps): JSX.Element;
export default WalletsModal;
