import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
export declare const connectors: {
    injected: any;
    walletconnect: {
        id: number;
        walletConnectProvider?: import("@walletconnect/ethereum-provider").default | undefined;
        supportedChainIds?: number[] | undefined;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): WalletConnectConnector;
        on(eventName: string | symbol, listener: (...args: any[]) => void): WalletConnectConnector;
        once(eventName: string | symbol, listener: (...args: any[]) => void): WalletConnectConnector;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): WalletConnectConnector;
        off(eventName: string | symbol, listener: (...args: any[]) => void): WalletConnectConnector;
        removeAllListeners(event?: string | symbol | undefined): WalletConnectConnector;
        setMaxListeners(n: number): WalletConnectConnector;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        emit(eventName: string | symbol, ...args: any[]): boolean;
        listenerCount(eventName: string | symbol): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): WalletConnectConnector;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): WalletConnectConnector;
        eventNames(): (string | symbol)[];
    };
};
