import Web3ReactModal from "./lib/components/web3-react-modal";
import useWeb3ReactModal from "./hooks/useWeb3ReactModal";

// const Web3ReactButton = ({
//   ButtonProps,
//   Render,
//   connectText,
//   switchText,
//   buttonText
// }: WalletButtonProps) => {
//   const { useWeb3React } = useStore();
//   return useWeb3React ? (
//     <WB
//       ButtonProps={ButtonProps}
//       Render={Render}
//       connectText={connectText}
//       switchText={switchText}
//       buttonText={buttonText}
//     />
//   ) : (
//     <></>
//   );
// };

export { Web3ReactModal, useWeb3ReactModal };
