const path = require('path');
const razzleHeroku = require('razzle-heroku');

module.exports = {
  modifyWebpackConfig(opts) {
    let config = opts.webpackConfig;

    config = razzleHeroku(config, { target: opts.env.target, dev: opts.env.dev }, opts.webpackObject);

    return config;
  },
  plugins: [
    'scss',
    {
      name: 'purgecss',
      options: {
        // This path options is required for PurgeCSS to analyzed all of our content
        path: path.resolve(__dirname, 'src/**/*'),
      },
    }]
}
