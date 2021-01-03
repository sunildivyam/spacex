import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import App from './App';
import { configureStore, AppState } from './store';
import { Provider, useSelector } from 'react-redux';
import { getLaunches } from './services';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const preRenderApp = (preloadedState: any, context: any, url: string) => {
  const store = configureStore(preloadedState);

  const markup = renderToString(
    <Provider store={ store }>
      <StaticRouter context={context} location={url}>
        <App />
      </StaticRouter>
    </Provider>  
  );
  
  const finalState = store.getState();
  const helmet = Helmet.renderStatic();

  const html = (
    `<!doctype html>
      <html lang="en" ${helmet.htmlAttributes.toString()}>
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>Razzle TypeScript</title>
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
    getLaunches().then((launches) => {
      const context = {};
      const preloadedState = {launches}; // launches from API call

      res.send(preRenderApp(preloadedState, context, req.url));
    });
  });

export default server;
