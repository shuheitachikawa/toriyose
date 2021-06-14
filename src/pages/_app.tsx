import 'tailwindcss/tailwind.css'
import { AppProps } from "next/app";
import Head from "next/head";
// import '../styles/globals.css'

// ↓reduck
import { Provider } from 'react-redux';
import createStore from '../reducks/store/store';
// ↓connected-react-router
// import { ConnectedRouter } from 'connected-react-router'
// import * as History from 'history'

// const history = History.createBrowserHistory()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>TORIYOSE</title>
    </Head>
    {/* ↓Providerでラップ。 */}
    <Provider store={createStore()}>
      {/* <ConnectedRouter history={history}> */}
        <Component {...pageProps} />
      {/* </ConnectedRouter> */}
    </Provider>
  </>
  );
}

export default MyApp;
