import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../app/store";
import getLibrary from "../utils/getLibrary";

import "../styles/globals.css";

if (typeof window !== "undefined" && !!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Web3ReactProvider>
  );
}

export default App;
