function useAccountListener(lib: any, callback: (accounts: any) => void) {
  lib?.on("accountsChanged", callback);
}

export default useAccountListener;
