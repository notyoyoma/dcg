var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  cache: true,
  entry: {
    bundle: ['./src/app'],
    tests: 'mocha!./src/app',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
			{ test: /\.css$/,   loader: 'style!css' },
      { test: /\.scss$/,  loader: 'style!css!sass?sourceMap' },
      { test: /\.jsx?$/,  loader: 'babel', exclude: /(node_modules|test.jsx?$)/ },
    ],
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src/js',
      'src/js/objects',
      'src/js/logic',
      'src/js/data',
      'src/js/ui',
    ],
  },
	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: 'jquery',
			$: 'jquery'
		}),
    new Clean(['dist'])
	],
};
