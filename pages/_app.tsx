import { NextPageContext } from 'next';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { Store as ReduxStore } from 'redux';

import 'milligram';
import { initStore } from '../reducers';

export interface AppCtx extends NextPageContext {
  store: ReduxStore;
}

export default withRedux(initStore)(
  class Application extends App<AppCtx> {
    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  },
);
