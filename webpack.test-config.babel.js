import webpack from 'webpack';

let webpackConfig = require('./webpack.config.babel.js').default;

console.log(webpackConfig);
webpackConfig.mode = "development";
webpackConfig.plugins.push(
  new webpack.ProvidePlugin({
    assert: ['chai', 'assert']
  })
);
webpackConfig.devtool = '#inline-cheap-module-source-map';

export default webpackConfig;