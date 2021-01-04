import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import { App } from './components/App/App';
import { configureStore, AppState } from './store';
import { Provider } from 'react-redux';
import { fetchLaunches } from './services';
import { defaultFilters, IFilters, ILaunches, IProgress } from './models';
import { setAxiosDefaults } from './services';

setAxiosDefaults();

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const preRenderApp = (preloadedState: AppState, context: any, url: string) => {
  const store = configureStore(preloadedState);

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const finalState = store.getState();
  const helmet = Helmet.renderStatic();

  const {selectedYear, successfulLaunch, successfulLanding} = preloadedState.filters;
  const title = `
  ${successfulLaunch ? 'Successfully Launched': ''}
  ${successfulLanding ? 'and Landed': ''} 
  SpaceX Programs 
  ${selectedYear ? 'of ' + selectedYear : ''}`;

  const html = (
    `<!doctype html>
      <html lang="en" ${helmet.htmlAttributes.toString()}>
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            ${helmet.meta.toString()} 
            ${helmet.link.toString()} 

            ${assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ''
    }
              ${process.env.NODE_ENV === 'production'
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${markup}</div>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(finalState)}
            </script>
        </body>
      </html>`);

  return html;
}

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req: express.Request, res: express.Response) => {
    const context = {};
    const filters: IFilters = defaultFilters;
    const progress: IProgress = {
      error: null,
      loading: false
    };

    fetchLaunches(filters)
    .then((launches) => {
      const preloadedState: AppState = { launches, filters, progress };
      res.send(preRenderApp(preloadedState, context, req.url));
    })
    .catch(er => {
      const launches:ILaunches = {
        launches: [],
        totalCount: 0
      };
      progress.error = {statusCode: er.code, message: er.message};
      const preloadedState: AppState = { launches, filters, progress };

      res.send(preRenderApp(preloadedState, context, req.url));
    });
  });

export default server;
