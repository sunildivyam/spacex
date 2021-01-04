import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components';
import { configureStore } from './store';

declare global {
  interface Window {
    __PRELOADED_STATE__:any;
  }
}

const store = configureStore(window.__PRELOADED_STATE__);
const app = 
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>;

hydrate(
  app,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    hydrate(
      app,
      document.getElementById('root')
    );
  });
}
