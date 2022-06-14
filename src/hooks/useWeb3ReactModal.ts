import useStore from "../store/store";

const useWeb3ReactModal = () => {
  const { connect } = useStore();
  return { connect };
};

export default useWeb3ReactModal;
