const path = require('path');
module.exports = {
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    if (opts.env.target === 'node' && !opts.env.dev) {
      config.entry = path.resolve(__dirname, './src/server.tsx');
      config.output.filename = 'server.bundle.js';
      config.output.path = path.resolve(__dirname, './server/build');
      config.output.libraryTarget = 'commonjs2';
    }

    return config;
  },
  plugins: ['scss',
    {
      name: 'purgecss',
      options: {
        // This path options is required for PurgeCSS to analyzed all of yours content
        path: path.resolve(__dirname, 'src/**/*'),
      }
    }]
}
