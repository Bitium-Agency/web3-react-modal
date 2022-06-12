import useStore from "../store/store";

const useWeb3ReactModal = () => {
  const { setIsInitialized, isInitialized } = useStore();
  const initial = (props: any) => {
    console.log(props);
    setIsInitialized(true);
  };
  return { initial, isInitialized };
};

export default useWeb3ReactModal;
