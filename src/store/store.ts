import create from "zustand";
interface IuseStore {
  isInitialized: boolean;
  modalIsOpen: boolean;
  modalIsInitialized: boolean;
  useWeb3React: any;
  setModalIsInitialized: (modalIsInitialized: boolean) => void;
  setModalIsOpen: (modalIsOpen: boolean) => void;
  setIsInitialized: (isInitialized: boolean) => void;
}
const useStore = create<IuseStore>((set) => ({
  isInitialized: false,
  modalIsOpen: false,
  modalIsInitialized: false,
  useWeb3React: null,
  setUseWeb3React: (useWeb3React: any) => set(() => ({ useWeb3React })),
  setModalIsInitialized: (modalIsInitialized: boolean) => set(() => ({ modalIsInitialized })),
  setModalIsOpen: (modalIsOpen: boolean) => set(() => ({ modalIsOpen })),
  setIsInitialized: (isInitialized: boolean) => set(() => ({ isInitialized }))
}));
export default useStore;
