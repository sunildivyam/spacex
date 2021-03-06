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
    config.performance = {
      hints: false
    };
    
    return config;
  },
  plugins: ['scss']
}
