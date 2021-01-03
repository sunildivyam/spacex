import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req: express.Request, res: express.Response) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    res.send(
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
          </body>
        </html>`);
  });

export default server;
